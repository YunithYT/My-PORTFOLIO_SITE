import accidentDetectionImg from "../assets/images/accidentdetection.jpg";
import devxconnectImg from "../assets/images/devxconnect.jpg";
import todolistImg from "../assets/images/todolist.jpg";
import buspassengerImg from "../assets/images/buspassenger.jpg";
import antisleepImg from "../assets/images/antisleep.jpg";
import chatappImg from "../assets/images/chatapp.jpg";
import weatherappImg from "../assets/images/weather.jpg";
export const ProjectData = [
  {
    title: "Accident Detection",
    description:
      "An Android app that detects accidents using shake intensity. On detection, it captures in-vehicle images and sends the location and alert to transport authorities.",
    img: accidentDetectionImg,
    stack: "Python",
    github: "https://github.com/yourusername/phonebook-app",
  },
  {
    title: "DevXConnect",
    description:
      "A platform for developers to build portfolios, share posts, and collaborate with others in the tech community.",
    img: devxconnectImg,
    stack: "ReactNative",
    github: "https://github.com/yourusername/pipar-beta",
  },
  {
    title: "TodoList",
    description:
      "A task management app built with Spring Boot and Hibernate. Add tasks with subject, description, date, and track progress. Edit or delete tasks anytime.",
    img:todolistImg  ,
    stack: "SpringBoot",
    github: "https://spring-boot-todo-app-nmh1.onrender.com",
  },
  {
    title: "Bus Passenger Overload",
    description:
      "An IoT-based system that monitors bus passenger count. Alerts with a buzzer and sends notifications to transport authorities if overloaded. Displays allowed limit for driver awareness. Built with C++; Hackathon runner-up.",
    img: buspassengerImg,
    stack: "C++/IOT/ArduinoIDE",
    github: "https://github.com/yourusername/company-calendar",
  },
  {
    title: "Anti Sleep Alarm Glass",
    description:
      "An IoT-based driver drowsiness detection system using eye blink sensors in smart glasses. Activates buzzer, vibration alert, and turns off motor upon detecting fatigue. Built with Arduino and C++.",
    img: antisleepImg,
    stack: "C++/IOT/ArduinoIDE",
    github: "https://github.com/yourusername/react-movie",
  },
  {
    title: "Chat App",
    description:
      "A platform to discover and book travel destinations, hotels, and spas at better rates.",
    img: chatappImg,
    stack: "SpringBoot",
    github: "https://github.com/yourusername/natour",
  },
  {
    title: "Weather App",
    description:
      "A Flutter-based weather app that shows real-time weather conditions, humidity, and water levels globally, with animated visuals for different weather states.",
    img: weatherappImg,
    stack: "Dart/Flutter",
    github: "https://github.com/yourusername/ncehr",
  },
];
