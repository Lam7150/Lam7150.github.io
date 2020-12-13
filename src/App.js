import './css/App.scss';
import './index.css';
import $ from "jquery";
import { useState, useEffect, useRef } from "react";
import linkedin from "./assets/icons/linkedin_white.png"
import github from "./assets/icons/github_white.png"
import medium from "./assets/icons/medium_white.png"
import resume from "./assets/icons/resume_white.png"
import email from "./assets/icons/email_white.png"

const adjectives = ["Software Engineer", "Product Designer", "Product Manager"]

function App() {
  const [count, setCount] = useState(0);

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  useInterval(() => {
    $("#adjective2").addClass('flip-animate-next');

    setTimeout(function () {
      $("#adjective2").addClass('notransition');
      $("#adjective2").removeClass(`flip-color${count}`);
      $("#adjective2").addClass(`flip-color${(count + 1) % 3}`);
      $("#adjective2").removeClass('flip-animate-next');
      setTimeout(function () {
        $("#adjective2").removeClass('notransition');
      }, 300)
      setCount(prevCount => ((prevCount + 1) % 3))
    }, 1000)
  }, 2000);

  return (
    <div className="app-background bg-center sm:bg-left-top h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col h-2/5 w-2/5 mr-120 mt-20">
        <div className="text-3xl sm:text-5xl md:text-6xl text-white font-bold text-shadow-md">
          Hi, I'm Lam
        </div>
        <div id="adjective" className="text-2xl sm:text-3xl md:text-4xl text-white font-bold text-shadow-md perspective">
          I'm a &nbsp;
          <span id="adjective2" className="flip-animate flip-color0" data-hover={adjectives[(count + 1) % 3]}>{adjectives[count]}</span>
        </div>
        <div className="flex flex-row h-12 mt-3">
          <a href="mailto:lam7150@gmail.com" className="w-12 mr-4 button hvr-float">
            <img src={email} alt="" />
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
            <img src={resume} alt="" />
          </a>
        </div>
      </div>
    </div >
  );
}

export default App;
