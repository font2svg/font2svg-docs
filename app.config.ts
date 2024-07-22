export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'Font2svg',
      description: 'An innovative solution converting font files to SVGs with components for seamless frontend font rendering.',
    },
    theme: {
      customizable: true,
      color: 'blue',
      radius: 0.5,
    },
    header: {
      title: 'Font2svg',
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: '/logo.svg',
        dark: '/logo.svg',
      },
      nav: [],
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/font2svg/font2svg',
        target: '_blank',
      }],
    },
    aside: {
      useLevel: true,
      collapse: false,
    },
    main: {
      breadCrumb: false,
      showTitle: true,
      codeIcon: {
        'docker run command': 'vscode-icons:file-type-docker',
        'docker compose file': 'vscode-icons:file-type-yaml',
      },
    },
    footer: {
      credits: 'Copyright © 2024',
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/font2svg/font2svg',
        target: '_blank',
      }],
    },
    toc: {
      enable: true,
      title: '页面导航',
      links: [{
        title: '关注 GitHub',
        icon: 'lucide:star',
        to: 'https://github.com/font2svg/font2svg',
        target: '_blank',
      }, {
        title: '问题反馈',
        icon: 'lucide:circle-dot',
        to: 'https://github.com/font2svg/font2svg/issues',
        target: '_blank',
      }],
    },
    search: {
      enable: true,
      inAside: false,
    },
  },
})
