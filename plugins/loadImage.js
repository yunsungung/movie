export default {
  install(Vue) {
    Vue.prototype.$loadImage = src => {
      return new Promise(resolve => {
        if (process.server) {
          resoleve()
          return
        }
        const img = document.createElement('img')
        img.src = src
        img.addEventListener('load', () => {
          resolve()
        })
      })
    }
  }
}
