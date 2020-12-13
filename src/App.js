import './App.css';
import './index.css';
import telegram from "./assets/icons/telegram_white.png"
import linkedin from "./assets/icons/linkedin_white.png"
import github from "./assets/icons/github_white.png"
import medium from "./assets/icons/medium_white.png"
import pocket from "./assets/icons/pocket_white.png"

function App() {
  return (
    <div className="app-background bg-center sm:bg-left-top h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col h-2/5 w-2/5 mr-120 mt-20">
        <div className="text-3xl sm:text-5xl md:text-6xl text-white font-bold text-shadow-md">
          Hi, I'm Lam
        </div>
        <div className="text-2xl sm:text-3xl md:text-4xl text-white font-bold text-shadow-md">
          Welcome to my world.
        </div>
        <div className="flex flex-row h-12 mt-3">
          <a href="mailto:lam7150@gmail.com" className="w-12 mr-4 button hvr-float">
            <img src={telegram} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/lamgtran/" className="w-12 mr-4 button hvr-float">
            <img src={linkedin} alt="" />
          </a>
          <a href="https://www.github.com/lam7150" className="w-12 mr-4 button hvr-float">
            <img src={github} alt="" />
          </a>
          <a href="https://medium.com/@lam7150" className="w-12 mr-4 button hvr-float">
            <img src={medium} alt="" />
          </a>
          <a href="https://drive.google.com/file/d/1OI7ARfocFdDIWRJ7lEKaNzWa88GPAdL4/view?usp=sharing" className="w-12 mr-4 button hvr-float">
            <img src={pocket} alt="" />
          </a>
          <div />
        </div>
      </div>
    </div>
  );
}

export default App;
