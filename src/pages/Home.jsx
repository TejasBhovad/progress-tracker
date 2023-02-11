import React from "react";
import Header from "../components/Header";
import "../stylesheets/Home.scss";
import ActiveList from "../components/ActiveList";
// import OtherLists from "../components/OtherLists";
import ProgressBar from "../components/ProgressBar";

function Home() {
  let titleSelected = "Task List";
  return (
    <div className="home">
      <Header pageTitle={titleSelected} />
      <div className="content">
        <div className="display">
          <div className="active">
            <ActiveList />
          </div>
          <div className="progress-bar">{/* <ProgressBar /> */}</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
