import React, { useMemo, useState } from "react";
import "./style.scss";
import { ImageAssets } from "assets";
import { useTranslation } from "react-i18next";
import { LangConstant } from "const";

const SliderDemo = () => {
  const [checked, setChecked] = useState("s3");

  const { i18n } = useTranslation();

  const [image1, image2, image3, image4, image5] = useMemo(() => {
    switch (i18n.language) {
      case LangConstant.DEFAULT_LANG_CODE:
        return [
          ImageAssets.AppDemoHomeBackground3,
          ImageAssets.AppDemoHomeBackground1,
          ImageAssets.AppDemoHomeBackground,
          ImageAssets.AppDemoHomeBackground2,
          ImageAssets.AppDemoHomeBackground4,
        ];

      case LangConstant.DEFAULT_LANG_VN_CODE:
        return [
          ImageAssets.AppDemoHomeBackground3VI,
          ImageAssets.AppDemoHomeBackground1VI,
          ImageAssets.AppDemoHomeBackgroundVI,
          ImageAssets.AppDemoHomeBackground2VI,
          ImageAssets.AppDemoHomeBackground4VI,
        ];

      default:
        return [
          ImageAssets.AppDemoHomeBackground3,
          ImageAssets.AppDemoHomeBackground1,
          ImageAssets.AppDemoHomeBackground,
          ImageAssets.AppDemoHomeBackground2,
          ImageAssets.AppDemoHomeBackground4,
        ];
    }
  }, [i18n.language]);

  return (
    <div className="container" style={{ position: "relative", zIndex: 2 }}>
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
            <img src={image1} alt="" draggable="false" />
          </div>
        </label>

        <label htmlFor="s2" id="slide2" onClick={() => setChecked("s2")}>
          <div className="image">
            <img src={image2} alt="" draggable="false" />
          </div>
        </label>

        <label htmlFor="s3" id="slide3" onClick={() => setChecked("s3")}>
          <div className="image">
            <img src={image3} alt="" draggable="false" />
          </div>
        </label>

        <label htmlFor="s4" id="slide4" onClick={() => setChecked("s4")}>
          <div className="image">
            <img src={image4} alt="" draggable="false" />
          </div>
        </label>

        <label htmlFor="s5" id="slide5" onClick={() => setChecked("s5")}>
          <div className="image">
            <img src={image5} alt="" draggable="false" />
          </div>
        </label>
      </div>
    </div>
  );
};

export default SliderDemo;
