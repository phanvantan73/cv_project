import { careerData, workExperience } from '../../constant/index'

const state = {
  info: {},
  career: [],
  experience: {}
};

const mutations = {
  SET_INFO: (_state, info) => {
    _state.info = info;
  },
  SET_CAREER: (_state, career) => {
    _state.career = career;
  },
  SET_EXPERIENCE: (_state, experience) => {
    _state.experience = experience;
  }
};

const actions = {
  async getUser({
    commit
  }) {
    try {
      const data = {
        surname: 'Phan Van',
        lastname: 'Tan',
        avatar: 'assets/avatar.jpg',
        age: '24',
        email: 'phan.van.tan@gmail.com'
      };
      commit('SET_INFO', data);

      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  },
  async getCareer({
    commit
  }) {
    try {
      commit('SET_CAREER', careerData);

      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  },
  async getExperience({
    commit
  }) {
    try {
      commit('SET_EXPERIENCE', workExperience);

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
