import { useState, useEffect } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Navigators from "./components/Navigators";
import SectionPanel from "./components/SectionPanel";
import Image1 from "./media/home/image1.gif";
import Image2 from "./media/home/image_2.jpg";
import atalayaMain from "./media/atalaya/image1.png";

function App() {
  const [section, setSection] = useState("");
  const [sectionPanelImg, setSectionPanelImg] = useState([]);

  const homeImages = [
    {
      img: Image1,
    },
    {
      img: Image2,
    },
  ];

  useEffect(() => {
    (() => {
      console.log(section);
      switch (section) {
        case "women":
          setSectionPanelImg([{ img: atalayaMain }]);
          break;
        case "men":
          setSectionPanelImg([{ img: atalayaMain }]);
          break;
        default:
          setSectionPanelImg([{ img: "" }]);
          break;
      }
    })();
  }, [section]);

  const atalayaImg = [
    {
      img: atalayaMain,
    },
  ];

  return (
    <div className="app_wrapper">
      <Banner images={homeImages} />
      <div className="nav_container">
        <h4 className="text-center bg-white m-0 ">
          Asociación Evangelística el Plan de Dios
        </h4>
        <Navigators setSection={setSection} />
      </div>
      <div className="container">
        <Banner images={sectionPanelImg} />
        <SectionPanel />
      </div>
    </div>
  );
}

export default App;
