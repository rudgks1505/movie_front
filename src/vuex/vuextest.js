import { createStore } from 'vuex'



const vuextest = createStore({
    namespaced: true,
    state() {
        return {
            navtouch: 1
        }
    },





    mutations: {
        setnavtouch(state, e) {
            state.navtouch = e
        },

    },
    actions: {

    },

})

export default vuextest 