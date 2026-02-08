export default {
  server: {
    port: 3000
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        calc: 'calc.html',
        about: 'about.html'
      }
    }
  }
}
