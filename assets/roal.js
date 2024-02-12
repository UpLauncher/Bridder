const roal = {
    version: function () {
        return `roal.js | version v1.1`
    },

    load: function (event) {
        window.addEventListener("DOMContentLoaded", event);
    },

    eld: function (elementSelector) {
        return document.querySelector(elementSelector);
    },

    el: function (elementSelector) {
        var element = document.querySelector(elementSelector);

        if (element == null) return null;

        this.el.getText = element.innerText;
        this.el.setText = function (text) {
            element.innerText = text;
        }

        this.el.on = function (type, event) {
            element.addEventListener(type, event)
        }
        this.el.off = function (type, event) {
            element.removeEventListener(type, event)
        }

        this.el.checked = element.checked;

        this.el.setDisabled = function (state) {
            element.disabled = state;
        }

        this.el.setChecked = function (state) {
            element.checked = state;
        }

        this.el.attr = function (name, value) {
            element.setAttribute(name, value);
        }
        this.el.delAttr = function (name) {
            element.removeAttribute(name);
        }

        this.el.addClass = function (target) {
            element.classList.add(target)
        }
        this.el.removeClass = function (target) {
            element.classList.remove(target)
        }
        this.el.toggleClass = function (target) {
            element.classList.toggle(target)
        }
        this.el.checkClass = function (target) {
            return element.classList.contains(target)
        }

        this.el.hover = function (event, endEvent) {
            element.addEventListener("mouseenter", event)

            element.addEventListener("mouseleave", () => {
                endEvent();
            })
        }
        this.el.click = function (event) {
            element.addEventListener("click", event)
        }
        this.el.focus = function (event, endEvent) {
            element.addEventListener("focus", event)
            element.addEventListener("blur", endEvent)
        }

        this.el.animate = function (from, to, sec, completed) {
            element.animate([
                from,
                to
                , sec])

            setTimeout(completed, sec)
        }


        return this.el;
    }
}