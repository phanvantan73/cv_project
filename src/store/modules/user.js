import {
  getToken,
} from '@/utils/auth';

// import {
//   getUserInfo
// } from '@/api/user';

const state = {
  token: getToken(),
  info: {}
};

const mutations = {
  SET_TOKEN: (_state, token) => {
    _state.token = token;
  },
  SET_INFO: (_state, info) => {
    _state.info = info;
  }
};

const actions = {
  async getUser({
    commit
  }) {
    try {
      // const data = await getUserInfo();
      const {
        data
      } = {
        name: 'user name',
        age: '24',
        email: 'user@gmail.com'
      };
      commit('SET_INFO', data);

      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  }
};

export default {
  namespace: true,
  state,
  mutations,
  actions
}
