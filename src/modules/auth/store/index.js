import state from "./state";
import * as getters from "./getters";
import * as actions from "./actions";
import * as mutations from "./mutations";

const authModule = {
  namespaced: true,

  actions,
  mutations,
  getters,
  state,
};

export default authModule;
