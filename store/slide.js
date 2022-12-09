export const state = () => ({
    // Initial state for the user module
    Slide: {
        current: 0,
        currentName: 'eskuvo',
    }
  })
  
  export const mutations = {
    // Mutation for setting the Slide
    setSlide(state, Slide) {
      state.Slide = Slide
    }
  }
  
  export const actions = {
    // Action for logging in the Slide
    activateSlide({ commit }, Slide) {
      // Perform login logic here...
      commit('setSlide', Slide)
    }
  }