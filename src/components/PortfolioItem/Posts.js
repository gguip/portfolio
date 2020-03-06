import imgGobarber from "../../assets/projects/gobarber.jpg";
import imgDevMaps from "../../assets/projects/devmaps.jpg";
import imgRocketshoes from "../../assets/projects/rocketshoes.jpg";
import imgRocketfy from "../../assets/projects/rocketfy.jpg";
import imgGitRepositories from "../../assets/projects/gitrepositories.jpg";
import imgTindev from "../../assets/projects/tindev.jpg";

const posts = [
  {
    id: 1,
    title: "GoBarber",
    description: `The GoBarber is an application for scheduling time in barber shops.`,
    techs: "node.js - expressjs - reactjs - redux - styled-components",
    image: imgGobarber,
    code: "https://github.com/gguip",
    look: "https://github.com/gguip"
  },
  {
    id: 2,
    title: "DevsMap",
    description: `The DevMaps is an application to search for developers around you for technologies.`,
    techs: "node.js - expressjs - reactjs - redux - reactnative",
    image: imgDevMaps,
    code: "https://github.com/gguip/SemanaOmnistack10",
    look: "https://github.com/gguip/SemanaOmnistack10"
  },
  {
    id: 3,
    title: "TinDev",
    description: `The TinDev is an application to search for developers for technologies and match similarly to Tindev.`,
    techs: "node.js - expressjs - reactjs - redux - reactnative",
    image: imgTindev,
    code: "https://github.com/gguip",
    look: "https://github.com/gguip"
  },
  {
    id: 4,
    title: "Rocketshoes",
    description: `The RocketShoes is an application that simulates an e-commerce to buy tennis shoes.`,
    techs: "reactjs - redux - styled-components - react router dom",
    image: imgRocketshoes,
    code: "https://github.com/gguip",
    look: "https://github.com/gguip"
  },
  {
    id: 5,
    title: "Rocketfy",
    description: `The Rocketfy is an application that copy of the Pipefy, with the aim practice the drag and drop functionality.`,
    techs: "reactjs - react-dnd - styled-components",
    image: imgRocketfy,
    code: "https://github.com/gguip",
    look: "https://github.com/gguip"
  },
  {
    id: 6,
    title: "GitRepositories",
    description: `The GitRepositories is a project to list repositories and issues for github users.`,
    techs: "reactjs - react router dom",
    image: imgGitRepositories,
    code: "https://github.com/gguip",
    look: "https://github.com/gguip"
    // look: "https://danielneris-git-repositories.netlify.com/"
  }
];

export default posts;
