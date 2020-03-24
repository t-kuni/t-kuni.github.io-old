import contentOfGithubIssue2AnkiCard from './github-issue-2-anki-card.md'
import contentOfThisPortfolio from './portforio.md'
import contentOfWockie from './wockie.md'

export default [
    {
        permalink: 'github-issue-2-anki-card',
        title: 'Github-Issue-2-Anki-Card',
        description: '英語のリーディング力向上のために作成したPHPのバッチスクリプトです。\n' +
            '毎朝、Ankiに新しい問題を配信します。 （※AnkiはスマホやWebで暗記カードを作成して学習できるアプリ＆Webサイト）\n',
        content: contentOfGithubIssue2AnkiCard,
        skills: [
            'PHP', 'Google Translate API', 'Puppeteer', 'Github Issue API', 'AWS',
            'Fargate', 'Docker', 'Slack', 'Clean Architecture', 'DDD', 'PHPUnit'
        ]
    },
    {
        permalink: 'wockie',
        title: 'Wockie',
        description: '様々なOSSのドキュメントを行ったり来たりするのに疲れて作成したElectron製のGUIアプリケーションです。',
        content: contentOfWockie,
        skills: [
            'JavaScript', 'Electron', 'Vue', 'Vuex', 'Vue-Router',
        ]
    },
    {
        permalink: 'portfolio',
        title: 'ポートフォリオ',
        description: '当該ポートフォリオはVue+Vuex+Vue-Routerを使ったSPAとなっております。',
        content: contentOfThisPortfolio,
        skills: [
            'JavaScript', 'Flux Architecture', 'Atomic Design', 'Vue', 'Vuex', 'Vue-Router', 'github.io',
        ]
    }
]