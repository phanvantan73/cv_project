import { UserService } from '@/services';

export default {
  async getUser({
    commit
  }) {
    try {
    const userInfo = await UserService.getInfo();
    commit('SET_INFO', userInfo);

    return Promise.resolve();
    } catch (error) {
    return Promise.reject(error);
    }
  },
  async getCareer({
    commit
  }) {
    try {
    const careers = await UserService.getCareers();
    commit('SET_CAREER', careers);

    return Promise.resolve();
    } catch (error) {
    return Promise.reject(error);
    }
  },
  async getExperience({
    commit
  }) {
    try {
    const workExperiences = await UserService.getWorkExperiences();
    commit('SET_EXPERIENCE', workExperiences);

    return Promise.resolve();
    } catch (error) {
    return Promise.reject(error);
    }
  }
}
