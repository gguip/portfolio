import imgGobarber from "../../assets/projects/gobarber.jpg";
import imgDevMaps from "../../assets/projects/devmaps.jpg";
import imgBeef from "../../assets/projects/beefsystem.jpg";
import imgLet from "../../assets/projects/letmeask.jpg";
import imgTau from "../../assets/projects/taudynamix.jpg";
import imgDominos from "../../assets/projects/dominos.jpg";
import imgDeliverize from "../../assets/projects/deliverize.jpg";
// import imgRocketshoes from "../../assets/projects/rocketshoes.jpg";
// import imgRocketfy from "../../assets/projects/rocketfy.jpg";
// import imgGitRepositories from "../../assets/projects/gitrepositories.jpg";
// import imgTindev from "../../assets/projects/tindev.jpg";

const posts = [
  {
    id: 1,
    title: "GoBarber",
    description: `The GoBarber is an application for scheduling time in barber shops.`,
    techs: "NodeJS - ExpressJS - ReactJS - Redux - Styled-Components",
    image: imgGobarber,
    code: "https://github.com/gguip/GoBarber",
    // look: "https://github.com/gguip/GoBarber"
  },
  {
    id: 2,
    title: "DevsMap",
    description: `The DevMaps is an application to search for developers around you for technologies.`,
    techs: "NodeJS - ExpressJS - ReactJS - Redux - React Native",
    image: imgDevMaps,
    code: "https://github.com/gguip/SemanaOmnistack10",
    // look: "https://gguip-semanaomni10.netlify.app/"
  },
  {
    id: 3,
    title: "LetMeAsk",
    description: `The LetMeAsk is a Question and Answer application`,
    techs: "Firebase - ReactJS - Hooks - Typescript",
    image: imgLet,
    code: "https://github.com/gguip/NLW-6/tree/main/letmeask",
    // look: "https://github.com/gguip"
  },
  {
    id: 4,
    title: "BeefSystem",
    description: `The BeefSystem is an application that control cattle fattening.`,
    techs: "ReactJS - Redux - Styled-Components - AdonisJS - NodeJS",
    image: imgBeef,
    // code: "https://github.com/gguip",
    look: "https://dashboard.beefsystem.com.br/"
  },
  {
    id: 5,
    title: "Tau Dynamix",
    description: `The Tau Dynamix is an application that was made by using React.`,
    techs: "ReactJS",
    image: imgTau,
    // code: "https://github.com/gguip",
    look: "https://sid-online.com/login"
  },
  {
    id: 6,
    title: "Domino's Backoffice",
    description: `The Domino's Backoffice is a project to list and manage orders for Domino's Brazil.`,
    techs: "ReactJS - Bootstrap - Redux - Saga",
    image: imgDominos,
    // code: "https://github.com/gguip",
    // look: "https://github.com/gguip"
  },
  {
    id: 7,
    title: "Deliverize",
    description: `The Deliverize is a PDV (Ponto de Venda) project .`,
    techs: "ReactJS - Bootstrap - Redux - Saga - ElectronJS - Sass",
    image: imgDeliverize,
    // code: "https://github.com/gguip",
    // look: "https://github.com/gguip"
  }
];

export default posts;
