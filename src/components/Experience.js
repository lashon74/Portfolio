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
  bullet6,
  bullet7,
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
          <li className="font-medium w-full md:text-sm pb-2">{bullet6}</li>
          <li className="font-medium w-full md:text-sm pb-2">{bullet7}</li>
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
            position="Software Developer"
            company="Hudson Web Design & Consulting"
            companyLink="#"
            time="2017 - Present"
            address="Savannah, GA."
            bullet1="- Enhanced online presence of local businesses through interactive web designs, generating higher earnings."
            bullet2="- Constructed innovative frontend features utilizing React.js, resulting in 25% improved performance."
            bullet3="- Supported client success by addressing equipment problems and optimizing web solutions for improved performance."
            bullet4="- Maintain Microsoft SQL Servers, boost database functionality, and confirm technical designs fulfill business objectives."
            bullet5="- Supported small businesses by maintaining effective reporting tools."
            bullet6="- Consulted small business on ways to increases foot traffic and online presence which motivated the owners to adopt new business models."
            bullet7="- Increased user engagement by 20% on a client platform by enhancing front-end UX with React.js."
          />
          <Details
            position="Software Engineer II"
            company="Integrisource"
            companyLink="https://integrisource.net/"
            time="2023 - 2024"
            address="Remote, USA"
            bullet1="- Enhanced application safety protocols, leading to a 40% decrease in breaches."
            bullet2="- Engineered a robust .NET Core application leveraging C#, ASP.NET Core, and T-SQL to enhance system efficiency by 40%."
            bullet3="- Converted local client-based school board system to a data-centric web application using ASP.NET Core and C#.NET."
            bullet4="- Tested and refined functionalities for improved performance of web applications in multiple school settings."
            bullet5="- Developed reusable components using Kendo UI and .NET Framework for multi-project applicability while implemented business logic using C# .NET Core to consolidate data from multiple sources."
            bullet6="- Developed customized reports requested by Business Analysis using Active Reports."
            bullet7="- Boosted application efficiency by 25% by streamlining database queries using Dapper and Entity Framework."
          />

          <Details
            position="Software Engineer I"
            company="Precision Castparts Corporation (PCC) Airfoils"
            companyLink="https://www.pccairfoils.com/business-units/douglas/"
            time="2021 - 2023"
            address="Douglas, GA."
            bullet1="- Integrated system upgrades that increased productivity by 50% and reduced operation costs by 20%."
            bullet2="- Achieved a 15% reduction in data-related issues via proficient procedural management on SQL Server."
            bullet3="- Developed and maintained unit tests in collaboration with developers and stakeholders, reducing bug-related delays by 25%."
            bullet4="- Conducted and managed a relational database system to enhance data storage, retrieval, and manipulation."
            bullet5="- Troubleshoot code issues to cut production problems by 30%."
            bullet6="- Contributed in creating an architectural pattern which increased system efficiency by 25%, resulting in $75k in cost savings."
            bullet7="- Developed ad hoc reports for management to monitor specific metrics using Crystal Reports, Power BI, SSRS."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
