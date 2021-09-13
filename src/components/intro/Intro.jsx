import { useEffect, useRef } from "react";
import { init } from "ityped";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import "./intro.scss";

function Intro() {
  const animatedTextRef = useRef();

  useEffect(() => {
    init(animatedTextRef.current, {
      showCursor: true,
      backDelay: 5000,
      backSpeed: 60,
      strings: ["React.js Developer"],
    });
  }, []);

  return (
    <section className="intro" id="intro">
      <div className="intro__left">
        <div className="intro__img-wrapper">
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
            alt="Coding"
          />
        </div>
      </div>

      <div className="intro__right">
        <div className="intro__right-inner">
          <h1>Mirlan Urzhanov</h1>
          <h2>Hello World!</h2>
          <h3>
            <span ref={animatedTextRef}></span>
          </h3>
          <a href="#portfolio">
            <KeyboardArrowDownIcon className="intro__icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Intro;
