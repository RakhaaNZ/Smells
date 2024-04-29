export default {
  lang: 'id-ID',
  title: 'Refactoring',
  description: 'Code Reengineering.',
  editLink: true,
  themeConfig: {
    sidebar: {
      '/smell/': sidebar(),
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/RakhaaNZ/Smells' }
    ]
  },
}

function sidebar() {
  return [
    {
      text: 'Dispensables',
      items: [
        { text: 'Tentang Dispensables', link: '/smell/dispensables/' },
        { text: 'Comments', link: '/smell/dispensables/comments/' },
        { text: 'Duplicate Code', link: '/smell/dispensables/duplicate-code/' },
        { text: 'Lazy Class', link: '/smell/dispensables/lazy-class/' },
        { text: 'Data Class', link: '/smell/dispensables/data-class/' },
        { text: 'Dead Code', link: '/smell/dispensables/dead-code/' },
        { text: 'Speculative Generality', link: '/smell/dispensables/speculative-generality/' },
      ]
    },
    {
      text: 'Change Preventers',
      items: [
        { text: 'Tentang Change Preventers', link: '/smell/change-preventers/' },
        { text: 'Divergent Change', link: '/smell/change-preventers/divergent-change/' },
        { text: 'Parallel Inheritance Hierarchies', link: '/smell/change-preventers/parallel-inheritance-hierarchies/' },
        { text: 'Shotgun Surgery', link: '/smell/change-preventers/shotgun-surgery/' },
      ]
    },
  ]
}

