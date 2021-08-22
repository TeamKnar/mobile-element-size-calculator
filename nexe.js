const { compile } = require('nexe')

compile({
  input: './divider.js',
  build: true, //required to use patches
  target: 'windows-x86-14.17.5',
  vcBuild: [ 'sign', 'release' ],
  ico: './res/ic_launcher.ico',
  verbose: true
}).then(() => {
  console.log('success')
})
