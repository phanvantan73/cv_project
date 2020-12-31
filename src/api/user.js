import { Data } from '@/constant';

const {careerData, workExperience, information} = Data;

export default {
  getInfo() {
    return information;
  },
  getCareers() {
    return careerData;
  },
  getWorkExperiences() {
    return workExperience;
  },
}
