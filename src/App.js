import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
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
    description: "my description will go here!!",
    image: "profilepic.jpg",
    bio: "Use this bio section as your way of describing yourself and saying what you do, what technologies you like to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in.",
    contactmessage: "Contact Me",
    email: "humza718@gmail.com",
    phone: "917-856-8055",
    address: {
      city: "Brooklyn",
      state: "New York"
    },
    website: "http://www.timbakerdev.com",
    resumedownload: "http://timbakerdev.com",
    social: [
      {
        name: "facebook",
        url: "http://facebook.com/",
        className: "fa fa-facebook"
      },
      {
        name: "twitter",
        url: "http://twitter.com",
        className: "fa fa-twitter"
      },
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/humzamalik/",
        className: "fa fa-linkedin"
      },
      {
        name: "instagram",
        url: "http://instagram.com/",
        className: "fa fa-instagram"
      },
      {
        name: "github",
        url: "http://github.com/Humza23",
        className: "fa fa-github"
      }
    ]
  },
  resume: {
    skillmessage: "Here you can create a short write-up of your skills to show off to employers",
    education: [
      {
        school: "Lambda School",
        degree: "Full Stack Web Development",
        graduated:  "August 2021",
        description1: "Intensive Full Stack Web Development program with a focus on HTML, CSS, JavaScript, React, Node, Express, and SQL"
      },
      {
        school: "Brooklyn College",
        degree: "Bachelors of Arts in Childhood Education",
        graduated:  "May 2020",
        description1: ''
      }
    ],
    work: [
      {
        company: "New York City Department of Education",
        title: "Paraprofessional" ,
        years: "February 2020 - Present",
        description1: "Engaged one-on-one with students with behavioral problems in both classroom and extracurricular settings",
        description2: "Actively developed and executed individualized learning plans and behavior plans for students",
        description3: "Conducted small group and individual classroom activities based on differentiated learning needs to reinforce concepts presented by teachers",
        description4: "Sustained transparent communication with parents on student behavior and academic progress"
      },
      {
        company: "New York City Department of Education",
        title: "Student Teacher" ,
        years: "September 2019 - February 2020",
        description1: "Prepared and executed differentiated lesson plans for a classroom of 27 students",
        description2: "Fostered a classroom environment conducive to learning and promoting excellent student engagement",
        description3: "Developed plans to facilitate interactive learning experiences and accommodate the academic needs of students",
        description4: "Established positive relationships with students, parents, teachers, and school administrators"
        
      }
    ],
  },
  portfolio: {
    projects: [
      {
        title: 'Canadian Wanderlust',
        category: 'My Travel Blog for my post-university travels',
        image: 'fury-fighting-gear.jpg',
        url: 'https://www.canadianwanderlust.com'
      },
      {
        title: 'Fury Fighting Gear',
        category: '(offline now) A fighting gear company I started',
        image: 'fury-fighting-gear.jpg',
        url: 'http://www.timbakerdev.com'
      },
      {
        title: 'Original Thai Food',
        category: 'Website I built for a restaurant I like in Thailand',
        image: 'original-thai-food.jpg',
        url: 'http://www.timbakerdev.com/originalthaifood.github.io'
      },
      {
        title: 'Resume Website',
        category: 'A React based resume website template',
        image: 'resume-website.jpg',
        url: 'http://www.timbakerdev.com'
      },
      {
        title: 'Smirkspace',
        category: '(MVP Only) A React and Meteor based chat University project.',
        image: 'smirkspace.jpg',
        url: 'http://www.smirkspace.com'
      }
    ]
  }
}





class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: '',
    };
  }

  componentDidMount() {
    this.setState({
      resumeData: resumeData
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
