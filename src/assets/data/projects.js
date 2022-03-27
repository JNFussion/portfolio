import YelpcampLanding from "../images/projects/Yelpcamp/landing.png";
import YelpcampSearch from "../images/projects/Yelpcamp/searchPage.png";
import YelpcampCamp from "../images/projects/Yelpcamp/camp.png";
import YelpcampComment from "../images/projects/Yelpcamp/comment.png";

import notTwitterLogin from "../images/projects/Not Twitter/login.png";
import notTwitterHome from "../images/projects/Not Twitter/home.png";
import notTwitterProfile from "../images/projects/Not Twitter/profile.png";

import battleshipStart from "../images/projects/Battleship/start.png";
import battleshipAttacking from "../images/projects/Battleship/attacking.png";
import battleshipSunkenShip from "../images/projects/Battleship/sunkenShip.png";

import weatherAppHome from "../images/projects/Weather App/Homepage.png";
import weatherAppSearch from "../images/projects/Weather App/Search.png";
import weatherAppResult from "../images/projects/Weather App/Result.png";

import TodoListHome from "../images/projects/TodoList/Home.png";
import TodoListPriority from "../images/projects/TodoList/Priority.png";
import TodoListProject from "../images/projects/TodoList/Project.png";
import TodoListToday from "../images/projects/TodoList/Today.png";
import TodoListUpcoming from "../images/projects/TodoList/Upcoming.png";

import OdinProjectHero from "../images/projects/OdinProject/Hero.png";
import OdinProjectHow from "../images/projects/OdinProject/HowItWorks.png";
import OdinProjectLearn from "../images/projects/OdinProject/Learn.png";
import OdinProjectSuccess from "../images/projects/OdinProject/Success.png";

import TheNextWebHero from "../images/projects/TheNextWeb/Hero.png";
import TheNextWebPopular from "../images/projects/TheNextWeb/Popular.png";
import TheNextWebExplore from "../images/projects/TheNextWeb/Explore.png";
import TheNextWebVideos from "../images/projects/TheNextWeb/Videos.png";
import TheNextWebWork from "../images/projects/TheNextWeb/Work.png";

const ProjectsList = [
  {
    title: "Yelpcamp",
    description:
      "Yelpcamp is my solotion to one of the Codewell's challenges. The page consist in a list of campgrounds on Earth, where users can recommend and review camps",
    photoPreview: YelpcampLanding,
    photos: [YelpcampLanding, YelpcampSearch, YelpcampCamp, YelpcampComment],
    liveURL: "https://obscure-shore-42840.herokuapp.com/",
    codeURL: "https://github.com/JNFussion/Yelpcamp-solution",
  },
  {
    title: "Not Twitter",
    description:
      "Clone of the core functionality of Twitter. Users can tweet about anything, follow or be followed and like and retweet others user's tweets. It was made with React and Firebase.",
    photoPreview: notTwitterLogin,
    photos: [notTwitterLogin, notTwitterHome, notTwitterProfile],
    liveURL: "https://not-twitter-4c059.firebaseapp.com",
    codeURL: "https://github.com/JNFussion/not-twitter",
  },
  {
    title: "Battleship",
    description:
      "Recreation of the gameboard Battleship. The game consists in placing 10 ships in a 10x10 grid. Then you have you find and sink your's opponent fleet. The first, who achieve this, win.",
    photoPreview: battleshipStart,
    photos: [battleshipStart, battleshipAttacking, battleshipSunkenShip],
    liveURL: "https://jnfussion.github.io/battleship/",
    codeURL: "https://github.com/JNFussion/battleship",
  },
  {
    title: "Weather App",
    description:
      "Search the forecast for a city. It will find the wheather information of the submited city. This information is fetch from Open weather API.",
    photoPreview: weatherAppHome,
    photos: [weatherAppHome, weatherAppSearch, weatherAppResult],
    liveURL: "https://jnfussion.github.io/weatherApp/",
    codeURL: "https://github.com/JNFussion/weatherApp",
  },
  {
    title: "Todo List",
    description:
      "App for  tracking task. You can group task in projects. Each task has a priority, a description and a due date. You can see every task of every project in the diferent sections the the navigation sidebar",
    photoPreview: TodoListHome,
    photos: [
      TodoListHome,
      TodoListPriority,
      TodoListProject,
      TodoListToday,
      TodoListUpcoming,
    ],
    liveURL: "https://jnfussion.github.io/todo-list/",
    codeURL: "https://github.com/JNFussion/todo-list",
  },
  {
    title: "CSS Framework",
    description: "A very basic utility first css framework.",
    photoPreview: null,
    photos: [],
    liveURL: "",
    codeURL: "https://github.com/JNFussion/css-framework",
  },
  {
    title: "Mockup: The Odin Project",
    description:
      "A copy of the homepage of The Odin Project website. It was made with the previous listed CSS framework.",
    photoPreview: OdinProjectHero,
    photos: [
      OdinProjectHero,
      OdinProjectHow,
      OdinProjectLearn,
      OdinProjectSuccess,
    ],
    liveURL: "https://jnfussion.github.io/odin-project-homepage/",
    codeURL: "https://github.com/JNFussion/odin-project-homepage",
  },
  {
    title: "Mockup: The next web",
    description: "A copy of the homepage of The next web website.",
    photoPreview: TheNextWebHero,
    photos: [
      TheNextWebHero,
      TheNextWebPopular,
      TheNextWebExplore,
      TheNextWebVideos,
      TheNextWebWork,
    ],
    liveURL: "https://jnfussion.github.io/the-next-web-homepage/",
    codeURL: "https://github.com/JNFussion/the-next-web-homepage",
  },
];

export default ProjectsList;
