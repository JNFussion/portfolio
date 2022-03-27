import YelpcampLanding from "../images/projects/Yelpcamp/landing.webp";
import YelpcampSearch from "../images/projects/Yelpcamp/searchPage.webp";
import YelpcampCamp from "../images/projects/Yelpcamp/camp.webp";
import YelpcampComment from "../images/projects/Yelpcamp/comment.webp";

import notTwitterLogin from "../images/projects/Not Twitter/login.webp";
import notTwitterHome from "../images/projects/Not Twitter/home.webp";
import notTwitterProfile from "../images/projects/Not Twitter/profile.webp";

import battleshipStart from "../images/projects/Battleship/start.webp";
import battleshipAttacking from "../images/projects/Battleship/attacking.webp";
import battleshipSunkenShip from "../images/projects/Battleship/sunkenShip.webp";

import weatherAppHome from "../images/projects/Weather App/Homepage.webp";
import weatherAppSearch from "../images/projects/Weather App/Search.webp";
import weatherAppResult from "../images/projects/Weather App/Result.webp";

import TodoListHome from "../images/projects/TodoList/Home.webp";
import TodoListPriority from "../images/projects/TodoList/Priority.webp";
import TodoListProject from "../images/projects/TodoList/Project.webp";
import TodoListToday from "../images/projects/TodoList/Today.webp";
import TodoListUpcoming from "../images/projects/TodoList/Upcoming.webp";

import OdinProjectHero from "../images/projects/OdinProject/Hero.webp";
import OdinProjectHow from "../images/projects/OdinProject/HowItWorks.webp";
import OdinProjectLearn from "../images/projects/OdinProject/Learn.webp";
import OdinProjectSuccess from "../images/projects/OdinProject/Success.webp";

import TheNextWebHero from "../images/projects/TheNextWeb/Hero.webp";
import TheNextWebPopular from "../images/projects/TheNextWeb/Popular.webp";
import TheNextWebExplore from "../images/projects/TheNextWeb/Explore.webp";
import TheNextWebVideos from "../images/projects/TheNextWeb/Videos.webp";
import TheNextWebWork from "../images/projects/TheNextWeb/Work.webp";

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
