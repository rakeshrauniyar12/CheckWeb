import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Courses from "./Courses";
import Library from "./Library";
import GetAConsultation from "./GetAConsultation";
import Login from "./Login";
import HooponoponoPowerWebinar from "./HooponoponoPowerWebinar";
import AboutUs from "./AboutUs";
import DrRaviShankar from "./DrRaviShankar";
import ArchanaShankarGupta from "./ArchanaShankarGupta";
import DrAshishMaheshGupta from "./DrAshishMaheshGupta";
import PremlataSaxena from "./PremlataSaxena";
import PankajTripathi from "./PankajTripathi";

const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/library" element={<Library />} />
      <Route path="/get-a-consultation" element={<GetAConsultation />} />
      <Route path="/my-account/orders" element={<Login />} />
      <Route path="/hooponopono-power" element={<HooponoponoPowerWebinar />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/dr-ravi-shankar" element={<DrRaviShankar />} />
      <Route path="/archana-shankar-gupta" element={<ArchanaShankarGupta />} />
      <Route path="/dr-ashish-mahesh-gupta" element={<DrAshishMaheshGupta />} />
      <Route path="/premlata-saxena" element={<PremlataSaxena />} />
      <Route path="/pankaj-tripathi" element={<PankajTripathi />} />
      
    </Routes>
  );
};

export default Content;
