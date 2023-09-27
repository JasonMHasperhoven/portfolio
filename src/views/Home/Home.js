import React from "react";
import App from "../../components/App";
import Footer from "../../components/Footer";
import { windowBeforeUnload } from "../../helpers/globalEvents";
import { setFadeElements } from "../../helpers/fadeElements";

import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Design from "./components/Design";
import DesignShowcase from "./components/DesignShowcase";
import Code from "./components/Code";
import Misc from "./components/Misc";
import Loading from "./components/Loading";
import OverlayArticles from "./components/OverlayArticles";
import OverlayTransaction from "./components/OverlayTransaction";
import OverlayTechnologies from "./components/OverlayTechnologies";
import OverlayOptimization from "./components/OverlayOptimization";
import OverlaySimpl from "./components/OverlaySimpl";
import OverlayImg from "./components/OverlayImg";

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoaded: false,
    };
  }

  componentDidMount() {
    windowBeforeUnload.push(() => {
      window.scrollTo(0, 0);
    });
  }

  fadeIn() {
    App.fadeIn(() => {
      // 2000 seems safe based upon timeline timeStamp analysis
      window.setTimeout(() => {
        this.setState(
          {
            isLoaded: true,
          },
          setFadeElements
        );
      }, 2000);
    });
  }

  render() {
    return (
      <div>
        <Hero homeFadeIn={() => this.fadeIn()} />
        <AboutMe />
        {this.state.isLoaded ? (
          <div>
            <DesignShowcase />
            <Design />
            {/* <Code /> */}
            {/* <Misc /> */}
            <Footer />
            <OverlayArticles />
            <OverlayOptimization />
            <OverlayTransaction />
            <OverlayTechnologies />
            <OverlaySimpl />
            <OverlayImg />
          </div>
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

export default Home;
