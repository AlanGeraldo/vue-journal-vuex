import { computed } from "vue";
import { useStore } from "vuex";

const useAuth = () => {
  const store = useStore();

  const createUser = async (user) => {
    const res = await store.dispatch("auth/createUser", user);
    return res;
  };

  const loginUser = async (user) => {
    const res = await store.dispatch('auth/signInUser', user)
    return res
  }

  const checkAuthStatus = async () => {
    const res = await store.dispatch('auth/checkAuthentication')
    return res
  }

  const logout = () => {
    store.commit('auth/logout')
    store.commit('journal/clearEntries')
  }

  return {
    createUser,
    checkAuthStatus,
    loginUser,
    logout,

    authStatus: computed(() => store.getters['auth/currentStatus']),
    username: computed(() => store.getters['auth/username'])
  };
};

export default useAuth;
