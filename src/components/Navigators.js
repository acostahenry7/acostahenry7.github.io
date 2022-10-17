import React, { useState, useEffect } from "react";
import "./Navigators.css";

import LogoChildren from "../media/nav/children.png";
import LogoYouth from "../media/nav/youth.png";
import LogoWomen from "../media/nav/women.png";
import LogoMen from "../media/nav/men.png";
import LogoWorship from "../media/nav/worship.png";
import LogoActivities from "../media/nav/activities.png";
import LogoProjects from "../media/nav/projects.png";
import LogoPlus from "../media/nav/plus.png";

export default function Navigators(props) {
  //const options = [];

  const { setSection } = props;
  const [options, setOptions] = useState([
    {
      text: "Min. Niños",
      value: "children",
      active: true,
      img: LogoChildren,
    },
    {
      text: "Min. Juvenil",
      value: "youth",
      img: LogoYouth,
      active: false,
    },
    {
      text: "Min. Atalaya",
      value: "women",
      img: LogoWomen,
      active: false,
    },
    {
      text: "Min. Redimidos",
      value: "men",
      img: LogoMen,
      active: false,
    },
    {
      text: "Min Adoración",
      value: "worship",
      img: LogoWorship,
      active: false,
    },
    {
      text: "Actividades",
      value: "activities",
      img: LogoActivities,
      active: false,
    },
    {
      text: "Proyectos",
      value: "projects",
      img: LogoProjects,
      active: false,
    },
    {
      text: "Más",
      value: "more",
      img: LogoPlus,
      active: false,
    },
  ]);

  const [currentOptions, setCurrentOptions] = useState([]);

  useEffect(() => {
    (() => {
      setOptions(options);
    })();
  }, [currentOptions]);

  return (
    <div className="options_container bg-white">
      {options?.map((item, index) => (
        <div className="option_item ">
          <img
            src={item.img}
            onClick={() => {
              options.map((item) => {
                item.active = false;
              });

              options[index].active = true;

              setCurrentOptions([]);
              setSection(item.value);
              //setActiveOptions(index, options, setOptions);
            }}
            className={`img ${item.active == true ? "active" : ""}`}
          />
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}
