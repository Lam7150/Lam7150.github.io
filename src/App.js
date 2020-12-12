import './App.css';
import './index.css';
import telegram from "./assets/icons/telegram_white.png"
import linkedin from "./assets/icons/linkedin_white.png"
import github from "./assets/icons/github_white.png"
import medium from "./assets/icons/medium_white.png"
import pocket from "./assets/icons/pocket_white.png"

function App() {
  return (
    <div className="app-background h-screen w-screen flex items-center">
      <div className="flex flex-col h-2/5 w-2/5 ml-48">
        <div className="text-6xl text-white font-bold text-shadow-md">
          Hi, I'm Lam
        </div>
        <div className="text-4xl text-white font-bold text-shadow-md">
          Welcome to my world.
        </div>
        <div className="flex flex-row h-10 w-1/2 mt-3 justify-between">
          <a href="mailto:lam7150@gmail.com">
            <img src={telegram} className="h-full" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/lamgtran/">
            <img src={linkedin} className="h-full" alt="" />
          </a>
          <a href="https://www.github.com/lam7150">
            <img src={github} className="h-full" alt="" />
          </a>
          <a href="https://medium.com/@lam7150">
            <img src={medium} className="h-full" alt="" />
          </a>
          <a href="https://drive.google.com/file/d/1OI7ARfocFdDIWRJ7lEKaNzWa88GPAdL4/view?usp=sharing">
            <img src={pocket} className="h-full" alt="" />
          </a>
          <div />
        </div>
      </div>
    </div>
  );
}

export default App;
