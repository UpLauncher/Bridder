import { settingsData, Setting } from './settings_data';

function createSettingElement(setting: Setting) {
  let element;

  switch (setting.type) {
    case 'checkbox':
      element = document.createElement('input');
      element.type = 'checkbox';
      break;
    default:
      return null;
  }

  element.id = setting.id;

  const label = document.createElement('label');
  label.htmlFor = setting.id;
  label.textContent = setting.name;

  const description = document.createElement('span');
  description.className = 'desc';
  description.textContent = setting.description;

  const container = document.createElement('div');
  container.appendChild(element);
  container.appendChild(label);
  container.appendChild(document.createElement('br'));
  container.appendChild(description);
  container.appendChild(document.createElement('br'));

  return container;
}

window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById('settingsContainer');

  if (container) {
    const categories = Array.from(new Set(settingsData.map(s => s.category))); // get unique categories
    
    categories.forEach(category => {
      const categoryHeader = document.createElement('h2');
      categoryHeader.textContent = category;
      container.appendChild(categoryHeader);

      settingsData
        .filter(setting => setting.category === category)
        .forEach(setting => {
          const settingElement = createSettingElement(setting as Setting);
          if (settingElement) {
            container.appendChild(settingElement);
          }
        });
      
      container.appendChild(document.createElement('hr')); // add a horizontal line after each category
    });

    // Load saved settings or set defaults
    chrome.storage.sync.get(settingsData.map(s => s.id)).then(result => {
      settingsData.forEach(setting => {
        const element = document.getElementById(setting.id) as HTMLInputElement;
        if (element && setting.type === 'checkbox') {
          // Set to saved value or default if not saved yet
          element.checked = result[setting.id] !== undefined ? result[setting.id] : setting.default;
        }
      });

      attachEventListeners();
    });
  }
});

function attachEventListeners() {
  settingsData.forEach(setting => {
    const element = document.getElementById(setting.id) as HTMLInputElement;
    if (element) {
      element.addEventListener('change', () => {
        const newValue = setting.type === 'checkbox' ? element.checked : element.value;
        chrome.storage.sync.set({ [setting.id]: newValue });

        // Special behaviors
        handleSpecialCases(setting.id, newValue);
      });
    }
  });
}

function handleSpecialCases(id: string, value: any) {
  if (id === 'white_checkmark' && !value) {
    disableElement('wc_org');
    setElementChecked('wc_org', false);
    chrome.storage.sync.set({ wc_org: false });
  } else if (id === 'blue_delete' && value) {
    disableElement('white_checkmark');
    disableElement('wc_org');
    disableElement('verifiedBlue');
    setElementChecked('white_checkmark', false);
    setElementChecked('wc_org', false);
    setElementChecked('verifiedBlue', false);
    chrome.storage.sync.set({ white_checkmark: false, wc_org: false, verifiedBlue: false });
  } else if (id === 'blue_delete' && !value) {
    enableElement('white_checkmark');
    enableElement('wc_org');
    enableElement('verifiedBlue');
  }
}

function disableElement(id: string) {
  const element = document.getElementById(id) as HTMLInputElement;
  if (element) {
    element.disabled = true;
  }
}

function enableElement(id: string) {
  const element = document.getElementById(id) as HTMLInputElement;
  if (element) {
    element.disabled = false;
  }
}

function setElementChecked(id: string, checked: boolean) {
  const element = document.getElementById(id) as HTMLInputElement;
  if (element) {
    element.checked = checked;
  }
}