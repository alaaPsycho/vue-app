import { createStore } from "vuex";

export default createStore({
  state: {
    jobs :[]
  },
  mutations: {
    setJobs(state,jobs){
      state.jobs = jobs
    }
  },
  actions: {},
  modules: {},
});
