import React from "react";
import { data } from "./Data";
import "./Schedule.css"
function Schedule() {
  return (
    <div className="tableCont">
      <table>
        <thead>
          <tr>
            <th id="matchNumber">MatchNumber</th>
            <th>HomeTeam</th>
            <th>AwayTeam</th>
            <th>Location</th>
            <th>DateUtc</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele) => {
            return (
              <tr key={ele.MatchNumber}>
                <td>{ele.MatchNumber}</td>
                <td>{ele.HomeTeam}</td>
                <td>{ele.AwayTeam}</td>
                <td>{ele.Location}</td>
                <td>{ele.DateUtc}</td>
                
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Schedule;
// AwayTeam: "Kolkata Knight Riders"
// AwayTeamScore: null
// DateUtc: "2022-03-26 14:00:00Z"
// Group: null
// HomeTeam: "Chennai Super Kings"
// HomeTeamScore: null
// Location: "Wankhede Stadium, Mumbai"
// MatchNumber: 1
// RoundNumber: 1