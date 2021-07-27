
const state = {
  sidebar: {
    opened: window.sessionStorage.getItem('sidebarStatus') ? !!+window.sessionStorage.getItem('sidebarStatus') : true,
    withoutAnimation: false
  },
  device: 'desktop'
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.withoutAnimation = false
    state.sidebar.opened = !state.sidebar.opened
    if (state.sidebar.opened) {
      window.sessionStorage.setItem('sidebarStatus', 1)
    } else {
      window.sessionStorage.setItem('sidebarStatus', 0)
    }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    state.sidebar.opened = false
    window.sessionStorage.setItem('sidebarStatus', 0)
    state.sidebar.withoutAnimation = withoutAnimation
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
