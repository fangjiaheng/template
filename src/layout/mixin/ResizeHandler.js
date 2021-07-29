import store from '@/store/'

const WIDTH = 500

export default {
  watch: {
    $route(route) {
      if (this.device === 'mobile' && this.sidebar.opened) {
        store.commit('app/CLOSE_SIDEBAR', { withoutAnimation: false })
      }
    }
  },
  beforeMount() {
    window.addEventListener('resize', this.$_resizeHandler)
  },
  mounted() {
    const isMobile = this.$_isMobile()
    if (isMobile) {
      store.commit('app/TOGGLE_DEVICE', isMobile ? 'mobile' : 'desktop')
      store.commit('app/CLOSE_SIDEBAR', { withoutAnimation: true })
    }
  },
  methods: {
    $_isMobile() {
      return document.body.getBoundingClientRect().width < WIDTH
    },
    $_resizeHandler() {
      if (!document.hidden) {
        const isMobile = this.$_isMobile()
        store.commit('app/TOGGLE_DEVICE', isMobile ? 'mobile' : 'desktop')
        if (isMobile) {
          // 从电脑端变为手机端 不需要动画过渡效果
          store.commit('app/CLOSE_SIDEBAR', { withoutAnimation: true })
        }
      }
    }
  }
}
