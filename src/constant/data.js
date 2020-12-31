import { Image } from './image';

const { php, html, avatar } = Image;

const careerData = [
  'Desiring to become a Web developer of the company to improve the experience of ' +
    'building website of Mobile App applications to satisfy interface programming enthusiasts.',
  'Learn to gain experience in programming new languages, ' +
    'especially the Fond end array (HTML, CSS, JavaScript, Js ...) from A / S in the company.',
  'Expect a full-time public employee in the shortest probationary period',
  'Become good engineers involved in software development projects with leading customers in Japan',
  'Desire to immerse yourself in the joyful, youthful but equally professional atmosphere of the ' +
    'training room before officially embarking on challenging and challenging projects.'
];

const workExperience = [
  {
    work: 'Website development staff',
    start_time: '07/2018',
    end_time: '12/2018',
    image: php,
    experience: [
      'Support project web design for companies using PHP language',
      'Interface design using HTML5 CSS3 language',
      'Prepare daily work report'
    ]
  },
  {
    work: 'Web Designer staff',
    start_time: '01/2019',
    end_time: '06/2019',
    image: html,
    experience: [
      'Design web interface, cut psd according to usage template (HTML5, Css3, Javascript)',
      'Designer logo, web icon'
    ]
  }
];

const information = {
  surname: 'Phan Van',
  lastname: 'Tan',
  avatar: avatar,
  age: (new Date).getFullYear() - 1995,
  github: 'phanvantan73'
};

export default {careerData, workExperience, information};
