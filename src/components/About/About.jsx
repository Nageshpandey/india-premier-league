import React from "react";
import IPL from "../../Assets/about.png";
import "./About.css";

const About = () => {
  return (
    <div>
      <img className="brand-logo" src={IPL} alt="" />
      <h1 className="heading">Indian Premier League</h1>
      <p className="content">
        IPL Media Advisory March 6, 2022 BCCI announces schedule for TATA IPL
        2022 The Board of Control for Cricket in India (BCCI) announced the
        schedule for TATA Indian Premier League (IPL) 2022 which will be held in
        Mumbai and Pune.A total number of 70 league matches and 4 Playoff games
        will be played in the duration of 65 days.The 15th season will start on
        26th March at the Wankhede stadium with a blockbuster clash between
        Chennai Super Kings and Kolkata Knight Riders.On 27th March, the league
        will stage its first double-header starting off with a Day game at
        Brabourne where the Delhi Capitals will square off against Mumbai
        Indians. The DY Patil Stadium will host the clash between Punjab Kings &
        Royal Challengers Bangalore at night.The MCA Stadium in Pune will host
        its first game on 29th March when Sunrisers Hyderabad take on Rajasthan
        Royals.In all, 20 matches each will be held at Wankhede Stadium & DY
        Patil Stadium, 15 matches each at Brabourne and MCA International
        stadium, Pune.There will be 12 double headers in total with the first
        match starting at 3:30PM IST. All evening matches will start at 7:30PM
        IST.The final game of the league stage will be played between Sunrisers
        Hyderabad and Punjab Kings on 22nd May at the Wankhede Stadium.The
        schedule for the Playoffs and the TATA IPL 2022 final to be played on
        29th May will be announced later.The complete fixtures for the league
        stage of the TATA IPL 2022 can be accessed by clicking HERE. JAY SHAH
        Honorary Secretary BCCI
      </p>
    </div>
  );
};

export default About;
