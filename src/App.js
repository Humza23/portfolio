import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";

const resumeData = {
  main: {
    name: "Humza Malik",
    occupation: "IT Auditor and Full Stack Engineer",
    image: "profilepic.jpg",
    bio: "Proficient IT Auditor and Full Stack Engineer with a proven track record blending expertise in IT system audits with robust web development skills. Adept at enhancing system efficiencies and security, alongside designing and implementing comprehensive web solutions. Demonstrates strong analytical abilities and technical acumen, ensuring both risk mitigation and innovative problem-solving. Known for a collaborative approach, keen problem-solving skills, and the ability to align technical projects with business objectives.",
    contactmessage: "Contact Me",
    email: "humza.m97@outlook.com",
    phone: "917-856-8055",
    address: {
      city: "New York",
      state: "NY",
    },
    social: [
      {
        name: "github",
        url: "http://github.com/Humza23",
        className: "fa fa-github",
      },
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/humzamalik/",
        className: "fa fa-linkedin",
      },
    ],
  },
  resume: {
    skillmessage:
      "Here you can create a short write-up of your skills to show off to employers",
    education: [
      {
        school: "Brooklyn College, City University of New York",
        degree:
          "Bachelor of Science, Computer Science | Bachelor of Arts, Childhood Education",
        description1: "",
      },
      {
        school: "Bloom Institute of Technology",
        degree: "Full Stack Web Development",
        description1:
          "Intensive Full Stack Web Development program with a focus on HTML, CSS, JavaScript, React, Node, Express, and SQL",
      },
    ],
    work: [
      {
        company: "Democracy Prep Public Schools",
        title: "Lead Software Engineer",
        years: "May 2022 - Present",
      },
      {
        company: "KPMG",
        title: "Advisory, IT Audit and Assurance Senior Associate",
        years: "September 2019 - April 2022",
      },
      {
        company: "JPMorgan Chase & Co.",
        title: "SOX and CCAP Governance Associate",
        years: "November 2017 - July 2019",
      },
    ],
  },
  portfolio: {
    projects: [
      {
        title: "Canadian Wanderlust",
        category: "My Travel Blog for my post-university travels",
        image: "fury-fighting-gear.jpg",
        url: "https://www.canadianwanderlust.com",
      },
      {
        title: "Fury Fighting Gear",
        category: "(offline now) A fighting gear company I started",
        image: "fury-fighting-gear.jpg",
        url: "http://www.timbakerdev.com",
      },
      {
        title: "Original Thai Food",
        category: "Website I built for a restaurant I like in Thailand",
        image: "original-thai-food.jpg",
        url: "http://www.timbakerdev.com/originalthaifood.github.io",
      },
      {
        title: "Resume Website",
        category: "A React based resume website template",
        image: "resume-website.jpg",
        url: "http://www.timbakerdev.com",
      },
      {
        title: "Smirkspace",
        category:
          "(MVP Only) A React and Meteor based chat University project.",
        image: "smirkspace.jpg",
        url: "http://www.smirkspace.com",
      },
    ],
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: "",
    };
  }

  componentDidMount() {
    this.setState({
      resumeData: resumeData,
    });
  }

  render() {
    return (
      <div className="App">
        <Header data={resumeData.main} />
        <About data={resumeData.main} />
        <Resume data={resumeData.resume} />
        <Portfolio data={resumeData.portfolio} />
        <Contact data={resumeData.main} />
        <Footer data={resumeData.main} />
      </div>
    );
  }
}

export default App;
