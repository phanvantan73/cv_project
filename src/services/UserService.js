import { UserApi } from '@/api';

export default {
  getInfo() {
    return UserApi.getInfo();
  },
  getCareers() {
    return UserApi.getCareers();
  },
  getWorkExperiences() {
    return UserApi.getWorkExperiences();
  },
}
