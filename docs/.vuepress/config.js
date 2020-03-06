module.exports = {
  title: 'Microcontrollers Lab Exercises',
  description: 'Lab exercises for the devbit microcontrollers course',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Toledo', link: 'https://www.vives.be/en/tools/toledo' },
      { text: 'License', link: '/LICENSE.md' },
    ],
    sidebar: [
      ['/', 'Home'],
      ['/lab-1/', 'Lab 1'],
      ['/lab-2/', 'Lab 2'],
      ['/lab-3/', 'Lab 3']
    ],
    repo: 'https://github.com/pcordemans/devbit-microcontrollers-lab',
    docsDir: 'docs',
    docsBranch: 'master'
  },
  markdown: {
    lineNumbers: true,
  },
  serviceWorker: true,
  plugins: [
    ['vuepress-plugin-zooming', {
      // selector for images that you want to be zoomable
      // default: '.content img'
      selector: 'img',

      // make images zoomable with delay after entering a page
      // default: 500
      // delay: 1000,

      // options of zooming
      // default: {}
      options: {
        bgColor: 'black',
        zIndex: 10000,
      },
    }],
  ],
}
