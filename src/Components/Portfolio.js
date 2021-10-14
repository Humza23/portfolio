import React, { Component } from "react";
import img1 from '../images/project1.jpg'
import img2 from '../images/project2.jpg'
import img3 from '../images/project3.jpg'
import img4 from '../images/project4.jpg'
import img5 from '../images/project5.jpg'

const imgArr = [
  {image: img1, title: 'title', url: 'google.com', description: 'description!'},
  {image: img2, title: 'title', url: 'google.com', description: 'description!'},
  {image: img3, title: 'title', url: 'google.com', description: 'description!'},
  {image: img4, title: 'title', url: 'google.com', description: 'description!'},
  {image: img5, title: 'title', url: 'google.com', description: 'description!'},
]

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Projects.</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
              >
              {imgArr.map((projects, idx) => {
              return(
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
              )})}
                </div>
                  </div>
                  </div>
      </section>
    )
    }
  }

export default Portfolio;
