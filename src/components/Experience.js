import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  bullet1,
  bullet2,
  bullet3,
  bullet4,
  bullet5,
}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <ul>
          <li className="font-medium w-full md:text-sm pb-2">{bullet1}</li>
          <li className="font-medium w-full md:text-sm pb-2">{bullet2}</li>
          <li className="font-medium w-full md:text-sm pb-2">{bullet3}</li>
          <li className="font-medium w-full md:text-sm pb-2">{bullet4}</li>
          <li className="font-medium w-full md:text-sm pb-2">{bullet5}</li>
        </ul>
        {/* <p className="font-medium w-full md:text-sm"> ● {bullet1}</p> */}
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Software Engineer II"
            company="Integrisource"
            companyLink="https://integrisource.net/"
            time="2023 - Present"
            address="Remote, USA"
            bullet1="- Implemented security protocols for applications, resulting in a 40% reduction in security breaches and an overall improvement in customer trust and satisfaction."
            bullet2="- Designed and developed a scalable .NET application using C#, ASP.NET, and MVC, resulting in a 40% increase in system efficiency and a 20% reduction in operational costs."
            bullet3="- Converting a local client-based school board system to a data-centric web applications using ASP.NET, C#.NET, and Services with Agile/SCRUM methodology that the Michigan Wayne County school board will adopt."
            bullet4="- Work closely with business analysis to optimize data driven web applications that will be used across multiple school districts, test changes made on client and server side to improve speed and efficiency."
            bullet5="- Implement business logic in C#.NET, business intelligence/ETL solutions, and business rules to integrate disparate data sources toward a centralized data store."
          />

          <Details
            position="Software Engineer I"
            company="Precision Castparts Corporation (PCC) Airfoils"
            companyLink="https://www.pccairfoils.com/business-units/douglas/"
            time="2021 - 2023"
            address="Douglas, GA."
            bullet1="- Converted legacy applications written in VB6 to C# .NET and enhanced Stored Procedures, Triggers, and Tables which increased productivity by 150% resulting in a 20% reduction in operation costs."
            bullet2="- Developed and maintained databases and procedures using SQL Server, resulting in a 30% increase in system reliability and a 15% reduction in data-related issues."
            bullet3="- Collaborated with other developers and stakeholders to create and maintain unit tests for applications, resulting in a 25% reduction in bug-related delays and an overall improvement in code quality."
            bullet4="- Set up and maintained a relational database system for storage, retrieval, and manipulation of data, leading to improved data accessibility."
            bullet5="- Debugged and troubleshot code, resulting in a 30% reduction in production issues and a 20% increase in customer satisfaction."
          />

          <Details
            position="Freelance Software Developer"
            company="Hudson Web Design & Consulting"
            companyLink="#"
            time="2017 - Present"
            address="Savannah, GA."
            bullet1="- Develop interactive websites and landing pages for local businesses that enhance traffic, page views, and user experience resulting in the client receiving more revenue."
            bullet2="- Developed new user-facing features using React.js, which improved application performance by 25% and facilitated an engaging user experience."
            bullet3="- Consult clients on which technoligies to help build their business along with troubleshooting issues they currently have with equipment or software such as: peripherals, laptops/desktop issues, and any issues with websites they currently are running or those that I have created for them."
            bullet4="- Manage Microsoft SQL Servers, enhance database performance, ensure technical and functional designs meet business requirements."
            bullet5="- Create, maintain, and update applications that are used to generate reports and provide metrics and financial requirements for small businesses."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
