import { createStore } from 'vuex'

export default createStore({
  state: {
    untranslatedJSON: undefined,
    translatedJSON: undefined,
    fileName: undefined,
  },
  mutations: {
    SET_FILE(state, file) {
      let id = 1
      file.forEach(element => {
        element.id = id
        id++
      });
      state.untranslatedJSON = file
      state.translatedJSON = file
    },
    CLEAR_FILE(state) {
      state.untranslatedJSON = undefined
    },
    SET_TRANSLATED(state, newVal) {
      let id = newVal.id
      let value = newVal.value

      state.translatedJSON.map((i) => {
        if (i.id == id) {
          i.param[0][3] = value
        }
      })
    },
    CLEAR_TRANSLATED(state) {
      state.translatedJSON = undefined
    },
    SET_FILE_NAME(state, name) {
      state.fileName = name
    }
  },
  actions: {
    setFile({ commit }, file) {
      commit("SET_FILE", file)
    },
    clearFile({ commit }) {
      commit("CLEAR_FILE")
    },
    setTranslated({ commit }, newVal) {
      commit("SET_TRANSLATED", newVal)
    },
    clearTranslated({ commit }) {
      commit("CLEAR_TRANSLATED")
    },
    setFileName({ commit }, fileName) {
      commit("SET_FILE_NAME", fileName)
    }
  }
})
