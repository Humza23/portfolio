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
    occupation: "Full Stack Web Developer",
    image: "profilepic.jpg",
    bio: "I am a Full Stack Web Developer and Bloom Institute of Technology graduate. After making a career change from being a teacher, I began to pursue my passion for being a developer. Although different fields, I have used my prior career’s learning experiences to guide me in my path as a developer. During this time, I have developed strong skills in multiple languages, frameworks, and libraries. As I continue to develop my skills, I am looking forward to my first opportunity to provide value and gain additional knowledge in this industry.",
    contactmessage: "Contact Me",
    email: "humza718@gmail.com",
    phone: "917-856-8055",
    address: {
      city: "Brooklyn",
      state: "New York",
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
        school: "Bloom Institute of Technology",
        degree: "Full Stack Web Development",
        graduated: "August 2020",
        description1:
          "Intensive Full Stack Web Development program with a focus on HTML, CSS, JavaScript, React, Node, Express, and SQL",
      },
      {
        school: "Brooklyn College",
        degree: "Bachelors of Arts in Childhood Education",
        graduated: "May 2020",
        description1: "",
      },
    ],
    work: [
      {
        company: "New York City Department of Education",
        title: "Teacher",
        years: "September 2019 - June 2020",
        description1:
        "Prepared and executed differentiated lesson plans for a classroom of up to 30 students",
        description2:
        "Fostered a classroom environment conducive to learning and promoting excellent student engagement",
        description3:
        "Increased reading and math test scores for all students by 25% over one school year",
        description4:
        "Developed plans to facilitate interactive learning experiences and accommodate the academic needs of students",
      },
      {
        company: "Brooklyn College",
        title: "Accounts Payable Specialist",
        years: "January 2016 - March 2019",
        description1:
        "Processed over 100 vouchers weekly in PeopleSoft/Oracle Software for Tax Levy accounts",
        description2:
        "Ensured payments including invoices and expense reports were processed in a timely and accurate manner",
        description3:
          "Created spreadsheets in Microsoft Excel for 50+ accounts to increase payment efficiency",
        description4:
          "Communicated with purchasing department and vendor to resolve billing issues and discrepancies",
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
