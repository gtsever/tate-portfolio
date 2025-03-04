import React from 'react';
import Wrapper from "../components/Wrapper";
import PhotoViewer from "../components/PhotoViewer";
import style from "../styles/personal.module.css";
import gary1 from "../assets/gary1.jpg";
import gary2 from "../assets/gary2.jpg";
import gary3 from "../assets/gary3.jpg";
import gary4 from "../assets/gary4.jpg";
import pitt1 from "../assets/pitt1.jpg";
import pitt2 from "../assets/pitt2.jpg";
import pitt3 from "../assets/pitt3.jpg";
import pitt4 from "../assets/pitt4.jpg";
import manson1 from "../assets/manson1.jpg";
import manson2 from "../assets/manson2.jpg";
import manson3 from "../assets/manson3.jpg";

const Personal = () => {
  return (
    <Wrapper>
      <Wrapper>
        <h1>Personal</h1>
        <h3>More about me.</h3>
        <p>I have devoted both my personal life and professional career to absorbing all technology has to offer, wether it be the next new piece of software, database systems, or simply just building myself a new computer. However, I have hobbies (sometimes!).</p>
      </Wrapper>
      <Wrapper>
        <h1>Photography</h1>
        <p>In my (limited) free time, I enjoy taking photos. I shoot both on both 35mm film and digital, but mostly digital these days- darkroom is expensive. Below are some of my best shots.</p>
      </Wrapper>
      <Wrapper>
        <h2>Gary, IN - City Methodist Church</h2>
        <p>A risky trip to an abandoned church that created some of my favorite photos.</p>
        <div className={style.imageContainer}>
          <PhotoViewer thumbnailSrc={gary1} fullSrc={gary1} alt="Gary IN - 1" />
          <PhotoViewer thumbnailSrc={gary2} fullSrc={gary2} alt="Gary IN - 2" />
        </div>
        <div className={style.imageContainer}>
          <PhotoViewer thumbnailSrc={gary3} fullSrc={gary3} alt="Gary IN - 3" />
          <PhotoViewer thumbnailSrc={gary4} fullSrc={gary4} alt="Gary IN - 4" />
        </div>
      </Wrapper>
      <Wrapper>
        <h2>Pittsburgh Botanical Gardens</h2>
        <p>An experiment with using the macro lens.</p>
        <div className={style.imageContainer}>
          <PhotoViewer thumbnailSrc={pitt1} fullSrc={pitt1} alt="Pittsburgh - 1" />
          <PhotoViewer thumbnailSrc={pitt2} fullSrc={pitt2} alt="Pittsburgh - 2" />
        </div>
        <div className={style.imageContainer}>
          <PhotoViewer thumbnailSrc={pitt3} fullSrc={pitt3} alt="Pittsburgh - 3" />
          <PhotoViewer thumbnailSrc={pitt4} fullSrc={pitt4} alt="Pittsburgh - 4" />
        </div>
      </Wrapper>
      <Wrapper>
        <h1>Manson</h1>
        <p>I met Manson in 2022, when I met his previous owner & my best friend Tina- the day I met him, I knew that he was my "soul cat". Over two years later, in December of 2024, Tina had an abrupt change in her living situation, and could not keep him anymore. I asked to adopt him, and two days before Christmas, he became mine. Manson has been widely used in my studies - whenever I needed a filler image, or an inspiration for a project, it has been him. This section is dedicated to my heart, my soul, my Manson.
        </p>
        <div className={style.imageContainer}>
          <PhotoViewer thumbnailSrc={manson1} fullSrc={manson1} alt="Manson - 1" vertical />
          <PhotoViewer thumbnailSrc={manson2} fullSrc={manson2} alt="Manson - 2" vertical />
          <PhotoViewer thumbnailSrc={manson3} fullSrc={manson3} alt="Manson - 3" vertical />
        </div>
      </Wrapper>
    </Wrapper>
  );
};

export default Personal;