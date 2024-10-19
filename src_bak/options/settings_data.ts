export interface Setting {
    id: string;
    name: string;
    type: 'checkbox';
    description: string;
  }

export const settingsData = [
    { id: 'text_mode', name: 'テキストの置き換え', type: 'checkbox', description: '「ポスト」->「ツイート」みたいにテキストを置き換えます。', category: '表示', default: false },
    { id: 'icon_mode', name: 'アイコンの置き換え', type: 'checkbox', description: 'XのロゴをTwitterの青い鳥に変更します。', category: '表示', default: false },
    { id: 'whitemode', name: 'ホワイトモード', type: 'checkbox', description: 'Twitterの色をホワイトに変更します。', category: '表示', default: false },
    { id: 'removePremiumBanner', name: 'プレミアムのバナーを削除', type: 'checkbox', description: '右上にあるプレミアムにサブスクライブを削除します', category: '表示', default: true },
    { id: 'removeGetVerified', name: '認証されるを削除', type: 'checkbox', description: '自分のプロフィールを開いた時の認証されるを削除します', category: '表示', default: true },
    { id: 'white_checkmark', name: '白いチェックマークを有効にする', type: 'checkbox', description: 'チェックマークを白色に変更します。(ダークテーマのみ)', category: 'チェックマーク', default: false },
    { id: 'wc_org', name: '組織、政府アカウントも白にする', type: 'checkbox', description: '組織(ゴールド)、政府(グレー)アカウントのチェックマークも白に変更します。', category: 'チェックマーク', default: false },
    { id: 'verifiedBlue', name: 'チェックマークをBlueのアイコンに変更', type: 'checkbox', description: 'Twitter BlueユーザーのチェックマークをBlueのアイコンに変更します。', category: 'チェックマーク', default: false },
    { id: 'blue_delete', name: 'チェックマークを削除する', type: 'checkbox', description: 'すべてのチェックマークを削除します。(バグが発生する可能性があります。)', category: 'チェックマーク', default: false },
    { id: 'sidebar_removePremium', name: 'プレミアムを削除', type: 'checkbox', description: 'サイドバーのプレミアム(登録)と認証済み組織を削除します', category: 'サイドバーの改善', default: true },
    { id: 'sidebar_removeCommunity', name: 'コミュニティを削除', type: 'checkbox', description: 'サイドバーのコミュニティを削除します', category: 'サイドバーの改善', default: true },
    { id: 'sidebar_removeCommunityNotes', name: 'コミュニティノートを削除', type: 'checkbox', description: 'サイドバーのコミュニティノートを削除します', category: 'サイドバーの改善', default: false },
    { id: 'hideTrend', name: 'トレンド(今どうしてる？)を隠す', type: 'checkbox', description: 'トレンド(今どうしてる？)のセクションを隠します。', category: '快適な使用', default: false },
    { id: 'hideRecommend', name: 'おすすめタブを隠す', type: 'checkbox', description: 'おすすめタブを削除し、デフォルトのタブをフォロー中にします。', category: '快適な使用', default: false },
    { id: 'hideEngagement', name: 'エンゲージメントを隠す', type: 'checkbox', description: '表示数(インプレッション)、いいね、リツイート、ブックマーク、返信の数を非表示にします。', category: '快適な使用', default: false },
    { id: 'tweetSourceLabel', name: 'ソースラベルを有効にする', type: 'checkbox', description: 'ポストが送信されたデバイス(Twitter for iPhoneなど)を確認するラベルを追加します。', category: 'その他', default: true },
    { id: 'FeatureFlags', name: '機能メニューをもっと見るに移動', type: 'checkbox', description: 'X / Twitter Feature Flags のメニューをもっと見るに移動します。', category: 'その他', default: false },
    { id: 'optimizeMore', name: '広告および収益化を削除', type: 'checkbox', description: 'もっと見るから広告および収益化を削除します。', category: 'その他', default: true },
    { id: 'tcoBypasser', name: 't.coをバイパスする', type: 'checkbox', description: 'Twitterが改悪をしているt.coをバイパスすることができます。(一部のみ)', category: 'その他', default: false }
  ];
  