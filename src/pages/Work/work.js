import './work.scss'
import accidentDetectionImg from "../../assets/images/accidentdetection.jpg";
import devxconnectImg from "../../assets/images/devxconnect.jpg";
import todolistImg from "../../assets/images/todolist.jpg";
import buspassengerImg from "../../assets/images/buspassenger.jpg";
import antisleepImg from "../../assets/images/antisleep.jpg";
import chatappImg from "../../assets/images/chatapp.jpg";
import weatherappImg from "../../assets/images/weather.jpg";

function Work() {
    return (
        <div className="work">
            <div className="work-header">
                <span>
                    <svg width="16" height="40" viewBox="0 0 8 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="..." fill="#14E956"/>
                    </svg>
                    <h2>All Works</h2>
                    <svg width="16" height="40" viewBox="0 0 8 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="..." fill="#14E956"/>
                    </svg>
                </span>
            </div>
            <div className="projects">

                {/* Accident Detection */}
                <div className="single">
                    <div className="single-img">
                        <img src={accidentDetectionImg} alt="Accident Detection" />
                    </div>
                    <div className="single-detail">
                        <h4>Accident Detection</h4>
                        <p>
                            Detects vehicle accidents using shake intensity. Captures in-cabin images and sends location alerts to transport authorities.
                            <br /><strong>Stack:</strong> Python
                        </p>
                        <div className="button-wrap">
                            <a href="https://github.com/YunithYT/project-omega" target="_blank" rel="noopener noreferrer">
                                <button className="button">Visit &rarr;</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* DevXConnect */}
                <div className="single reverse">
                    <div className="single-img">
                        <img src={devxconnectImg} alt="DevXConnect" />
                    </div>
                    <div className="single-detail">
                        <h4>DevXConnect</h4>
                        <p>
                            A platform for developers to build portfolios, share posts, and collaborate within the tech ecosystem.
                            <br /><strong>Stack:</strong> React Native
                        </p>
                        <div className="button-wrap">
                             <a href="https://devxconnect.onrender.com" target="_blank" rel="noopener noreferrer">
                                <button className="button">Visit &rarr;</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* TodoList */}
                <div className="single">
                    <div className="single-img">
                        <img src={todolistImg} alt="TodoList" />
                    </div>
                    <div className="single-detail">
                        <h4>TodoList</h4>
                        <p>
                            Manage tasks with subject, date, and progress tracking. Supports toggling, editing, and deletion.
                            <br /><strong>Stack:</strong> Spring Boot, Hibernate
                        </p>
                        <div className="button-wrap">
                            <a href="https://spring-boot-todo-app-nmh1.onrender.com" target="_blank" rel="noopener noreferrer">
                                <button className="button">Visit &rarr;</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bus Passenger Overload */}
                <div className="single reverse">
                    <div className="single-img">
                        <img src={buspassengerImg} alt="Bus Passenger Overload" />
                    </div>
                    <div className="single-detail">
                        <h4>Bus Passenger Overload</h4>
                        <p>
                            Detects and alerts passenger overload with buzzer and message to authorities. Displays bus capacity to the driver.
                            <br /><strong>Stack:</strong> C++ / IoT / Arduino IDE
                        </p>
                        <div className="button-wrap">
                            <a href="https://github.com/YunithYT/Team-Optimus" target="_blank" rel="noopener noreferrer">
                                <button className="button">Visit &rarr;</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Anti Sleep Glass */}
                <div className="single">
                    <div className="single-img">
                        <img src={antisleepImg} alt="Anti Sleep Glass" />
                    </div>
                    <div className="single-detail">
                        <h4>Anti Sleep Alarm Glass</h4>
                        <p>
                            Eye blink sensor detects drowsiness in drivers. Activates buzzer, vibration, and stops motor.
                            <br /><strong>Stack:</strong> C++ / IoT / Arduino
                        </p>
                        <div className="button-wrap">
                            <a href="https://github.com/YunithYT/ANTI-SLEEP-ALARM" target="_blank" rel="noopener noreferrer">
                                <button className="button">Visit &rarr;</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Chat App */}
                <div className="single reverse">
                    <div className="single-img">
                        <img src={chatappImg} alt="Chat App" />
                    </div>
                    <div className="single-detail">
                        <h4>WebSocket Chat App</h4>
                        <p>
                            A global chat app using WebSockets for real-time messaging between users.
                            <br /><strong>Stack:</strong> Spring Boot
                        </p>
                        <div className="button-wrap">
                            <a href="https://global-chat-app-qyi4.onrender.com" target="_blank" rel="noopener noreferrer">
                                <button className="button">Visit &rarr;</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Weather App */}
                <div className="single">
                    <div className="single-img">
                        <img src={weatherappImg} alt="Weather App" />
                    </div>
                    <div className="single-detail">
                        <h4>Weather App</h4>
                        <p>
                            A Flutter app that displays real-time global weather conditions, humidity, and water levels with engaging animations.
                            <br /><strong>Stack:</strong> Flutter / Dart
                        </p>
                        <div className="button-wrap">
                            <a href="https://mausamapp-59c48.web.app" target="_blank" rel="noopener noreferrer">
                                <button className="button">Visit &rarr;</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Work;
