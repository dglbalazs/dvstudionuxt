export const state = () => ({
    // Initial state for the user module
    ActiveSlide: {
        current: 0,
        currentName: 'landing',
    }
  })
  
  export const getters = {
    getSlide(state) {
      return state.ActiveSlide
    }
  }

  export const mutations = {
    // Mutation for setting the Slide
    setSlide(state, Slide) {
      state.ActiveSlide = Slide
    }
  }
  
  export const actions = {
    // Action for logging in the Slide
    activateSlide({ commit }, Slide) {
      // Perform login logic here...
      commit('setSlide', Slide)
    }
  }