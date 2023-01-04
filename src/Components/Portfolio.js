import React, { Component } from "react";
import projectHRFAsylum from "../images/projectHRFAsylum.png";
import projectWeather from "../images/projectWeather.png";
import projectBeachResort from "../images/projectBeachResort.png";
import projectCryptoTracker from "../images/projectCryptoTracker.png";
import projectEcommercePlants from "../images/projectEcommercePlants.png";
import projectBusinessPageTemplate from "../images/projectBusinessPageTemplate.png";
 
const imgArr = [
  {
    image: projectHRFAsylum,
    title: "Human Rights First Asylum",
    url: "https://www.humanrightsfirst.org/asylum",
    description:
      "Application for lawyers to view data on previous asylum case judgments!",
  },
  {
    image: projectWeather,
    title: "Weather Tracker",
    url: "https://humza23.github.io/weather/",
    description:
      "View real-time weather in current location or location of choice!",
  },
  {
    image: projectBeachResort,
    title: "Resort Booking",
    url: "https://humza23.github.io/resort/",
    description:
      "View resort rooms with filter functionalities to accommodate your stay!",
  },
  {
    image: projectCryptoTracker,
    title: "Crypto Tracker",
    url: "https://humza23.github.io/crypto-tracker/",
    description: "Track Crypto prices with dark mode!",
  },
  {
    image: projectEcommercePlants,
    title: "E-Commerce",
    url: "https://humza23.github.io/e-commerce-plants/",
    description:
      "Mock E-Commerce Application with add to cart and checkout features!",
  },
  {
    image: projectBusinessPageTemplate,
    title: "Business Page Template",
    url: "https://humza23.github.io/business-page-template/",
    description: "Use this template to advertise your business!",
  },
];

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Projects</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {imgArr.map((projects, idx) => {
                return (
                  <div key={idx} className="columns portfolio-item">
                    <div className="item-wrap">
                      <a href={projects.url} title={projects.title}>
                        <img alt={projects.title} src={projects.image} />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{projects.title}</h5>
                            <p>{projects.description}</p>
                          </div>
                        </div>
                        <div className="link-icon">
                          <i className="fa fa-link"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
