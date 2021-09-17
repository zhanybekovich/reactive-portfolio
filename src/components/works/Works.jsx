import { useState } from "react";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import "./works.scss";

function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderData = [
    {
      id: 1,
      title: "Work title 1",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum animi porro saepe id totam distinctio error aperiam omnis vel eveniet excepturi nemo quasi ut iure temporibus autem sit, laudantium enim!",
      img: "https://source.unsplash.com/1600x900/?coding",
    },
    {
      id: 2,
      title: "Work title 2",
      description:
        "Harum animi porro saepe id totam distinctio error aperiam omnis vel eveniet excepturi nemo quasi ut iure temporibus autem sit, laudantium enim!",
      img: "https://source.unsplash.com/1600x900/?coding",
    },
    {
      id: 3,
      title: "Work title 3",
      description:
        "Lorem ipsum harum animi porro saepe id totam distinctio error aperiam omnis vel eveniet excepturi nemo quasi ut iure temporibus autem sit, laudantium enim!",
      img: "https://source.unsplash.com/1600x900/?coding",
    },
    {
      id: 4,
      title: "Work title 4",
      description: "Hello",
      img: "https://source.unsplash.com/1600x900/?coding",
    },
  ];

  const handleClick = (direction) => {
    if (direction === "prev") {
      setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : currentSlide);
    } else {
      setCurrentSlide(
        currentSlide < sliderData.length - 1 ? currentSlide + 1 : currentSlide
      );
    }
  };

  return (
    <section className="works" id="works">
      <div
        className="works__slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {sliderData.map((dataItem) => (
          <div
            className="works__slider-inner"
            key={`${dataItem.title}_${dataItem.id}`}
          >
            <div className="works__slider-item">
              <div className="works__slider-left">
                <div className="works__slider-left-container">
                  <h2>{dataItem.title}</h2>
                  <p>{dataItem.description}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="works__slider-right">
                <img src={dataItem.img} alt={dataItem.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="works__slider-btn works__slider-btn-prev">
        <ArrowBackIosIcon
          className="works__slider-arrow"
          onClick={() => handleClick("prev")}
        />
      </button>
      <button className="works__slider-btn works__slider-btn-next">
        <ArrowForwardIosIcon
          className="works__slider-arrow"
          onClick={() => handleClick("next")}
        />
      </button>
    </section>
  );
}

export default Works;
