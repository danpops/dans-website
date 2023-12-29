import gopuff from '../images/gopuff.png'
import mccain from '../images/mccain.png'

export const content = {
  hero: {
    title: "Hello, I'm Dan",
    subtitle:
      'Passionate Software Engineer dedicated to crafting seamless, impactful digital solutions.'
  },
  about: {
    title: 'About',
    text: "I'm Dan Popovic, a highly skilled and motivated Full Stack Engineer, driven by a passion for functional programming and JavaScript. I take pride in my dedication to delivering top-notch products that prioritize business value and address clients' primary pain points. I take a comprehensive approach to testing by employing both TDD and BDD methodologies to ensure the highest quality standards."
  },
  specialties: {
    title: 'Specialties',
    items: ['AWS', 'Azure', 'Cucumber', 'JavaScript', 'React', 'React Native']
  },
  experience: {
    title: 'Experience',
    cards: [
      {
        company: 'McCain Foods Limited - TribalScale',
        logo: mccain,
        title: 'Full Stack Engineer',
        date: "Oct '22 - Present",
        technologies: ['React', 'NodeJS', 'Azure', 'Cucumber'],
        notes: [
          `Anchor backend engineer on the digital transformation project for McCain, 
        a global leader in manufacturing, successfully revolutionizing their backend 
        systems by implementing and leveraging various **Azure** resources, including 
        **Application Insights**, **Container Applications**, **CosmosDB**, and **Azure 
        Functions**, to drive efficient and scalable solutions.`,
          `Conducted **Domain Discovery** and **Event Storming** sessions to align project goals
        and requirements, contributing to the successful delivery of a tailored solution.`,
          `Spearheaded the transition to paperless documentation in the manufacturing plant.
        Designed dynamic shift handoff forms for operators and supervisors using **React** and 
        **Node.js** on **Azure Container App**. These forms now serve as integral tools for data 
        collection in manufacturing metrics, eliminating paper-based processes and boosting 
        operational efficiency.`,
          `Developed a sensor-triggered solution using **Azure Functions** to automate the 
        tracking of equipment sensors, resulting in real-time updates and eliminating 
        manual intervention.`,
          `Implemented comprehensive integration tests using **Cucumber Gherkin**, ensuring
        the high quality and reliability of the APIs.`,
          `Received exceptional feedback from stakeholders, paving the way for the global 
        scalability of the application and highlighting its significant impact on
        productivity and cost savings.`
        ]
      },
      {
        company: 'GoPuff - TribalScale',
        logo: gopuff,
        title: 'Frontend Engineer',
        date: "Sep '21 - Sep '22",
        technologies: ['React Native', 'GraphQL', 'AWS', 'Appium'],
        notes: [
          `Worked on the GoPuff project, focusing on user registration/login functionality, 
        utilizing **React Native** for frontend development and implementing **GraphQL** 
        APIs on the backend.`,
          `Demonstrated strong problem-solving and debugging skills while working on complex 
        web applications serving a global user base.`,
          `Implemented Single Sign-On (SSO) login, integrated reCAPTCHA, and validated user 
        registration information, contributing to an enhanced user experience.`,
          `Implemented end-to-end integration tests using **Appium**, ensuring high-quality 
        software delivery.`
        ]
      }
    ]
  },
  contact: {
    title: 'Contact',
    text: "I'm more than happy to answer any questions you may have or provide advice. Please feel free to reach out to me anytime!",
    items: ['LinkedIn', 'Email', 'Github']
  }
}
