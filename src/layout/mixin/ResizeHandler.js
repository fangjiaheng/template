import store from '@/store'

const { body } = document
const WIDTH = 992 // refer to Bootstrap's responsive design

export default {
  watch: {
    $route(route) {
      if (this.device === 'mobile' && this.sidebar.opened) {
        store.commit('app/CLOSE_SIDEBAR', false)
      }
    }
  },
  beforeMount() {
    window.addEventListener('resize', this.$_resizeHandler)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.$_resizeHandler)
  },
  mounted() {
    const isMobile = this.$_isMobile()
    if (isMobile) {
      store.commit('app/TOGGLE_DEVICE', 'mobile')
      store.commit('app/CLOSE_SIDEBAR', true)
    }
  },
  methods: {
    $_isMobile() {
      // https://www.cnblogs.com/libin-1/p/6137167.html
      const rect = body.getBoundingClientRect()
      return rect.width - 1 < WIDTH
    },
    $_resizeHandler() {
      if (!document.hidden) {
        const isMobile = this.$_isMobile()
        store.commit('app/TOGGLE_DEVICE', isMobile ? 'mobile' : 'desktop')

        if (isMobile) {
          store.commit('app/CLOSE_SIDEBAR', true)
        }
      }
    }
  }
}
