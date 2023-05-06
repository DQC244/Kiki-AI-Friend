import React, { useState } from "react";
import "./style.scss";
import { ImageAssets } from "assets";

const SliderDemo = () => {
  const [checked, setChecked] = useState("s3");
  return (
    <div className="container">
      <input
        type="radio"
        name="slider"
        className="d-none"
        id="s1"
        defaultChecked={checked === "s1"}
      />
      <input
        type="radio"
        name="slider"
        className="d-none"
        id="s2"
        defaultChecked={checked === "s2"}
      />
      <input
        type="radio"
        name="slider"
        className="d-none"
        id="s3"
        defaultChecked={checked === "s3"}
      />
      <input
        type="radio"
        name="slider"
        className="d-none"
        id="s4"
        defaultChecked={checked === "s4"}
      />
      <input
        type="radio"
        name="slider"
        className="d-none"
        id="s5"
        defaultChecked={checked === "s5"}
      />

      <div className="cards">
        <label htmlFor="s1" id="slide1" onClick={() => setChecked("s1")}>
          <div className="image">
            <img src={ImageAssets.AppDemoHomeBackground3} alt="" draggable="false" />
          </div>
        </label>

        <label htmlFor="s2" id="slide2" onClick={() => setChecked("s2")}>
          <div className="image">
            <img src={ImageAssets.AppDemoHomeBackground1} alt="" draggable="false" />
          </div>
        </label>

        <label htmlFor="s3" id="slide3" onClick={() => setChecked("s3")}>
          <div className="image">
            <img src={ImageAssets.AppDemoHomeBackground} alt="" draggable="false" />
          </div>
        </label>

        <label htmlFor="s4" id="slide4" onClick={() => setChecked("s4")}>
          <div className="image">
            <img src={ImageAssets.AppDemoHomeBackground2} alt="" draggable="false" />
          </div>
        </label>

        <label htmlFor="s5" id="slide5" onClick={() => setChecked("s5")}>
          <div className="image">
            <img src={ImageAssets.AppDemoHomeBackground4} alt="" draggable="false" />
          </div>
        </label>
      </div>
    </div>
  );
};

export default SliderDemo;
