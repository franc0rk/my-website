export const state = () => ({
  layout: 'default',
})

export const mutations = {
  setLayout(state, val) {
    state.layout = val
  },
}
