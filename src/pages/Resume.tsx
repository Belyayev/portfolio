import { CSSProperties, useState } from "react";
import "../Resume.css";

const Section = ({ jobTitle, workPlace, date, details }: any) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="section">
      <div className="section-header" onClick={() => setExpanded(!expanded)}>
        <div>
          <span className="job-title">{jobTitle},</span>
          <span className="work-place">{workPlace}</span>
        </div>
        <div className="date">{date}</div>
      </div>
      {expanded && (
        <ul className="section-details">
          {details.map((detail: any, index: any) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

function Resume() {
  return (
    <div>
      <div className="stack" style={{ "--stacks": 3 } as CSSProperties}>
        <span style={{ "--index": 0 } as CSSProperties}>Resume</span>
        <span style={{ "--index": 1 } as CSSProperties}>Resume</span>
        <span style={{ "--index": 2 } as CSSProperties}>Resume</span>
      </div>
      <div className="resume">
        <div className="block">
          <div>
            <span className="textLabel">Objective:</span>
            <span className="textRegular">
              Software Developer, Data Engineer
            </span>
          </div>
        </div>
        <div className="block">
          <div className="textLabel" style={{ marginBottom: "1rem" }}>
            Qualifications:
          </div>
          <ul>
            <li>
              Over 4 years of comprehensive experience in full-stack web
              application development, proficient in React, Node, and SQL.
            </li>
            <li>
              Skilled data engineer with extensive experience in ETL processes,
              data analysis, and database management, particularly in Azure
              environments.
            </li>
            <li>
              Proven track record as an IT professional with 20 years of
              experience in various roles, including network engineering, IT
              project management, and server/desktop support.
            </li>
          </ul>
        </div>
        <div>
          <div className="textLabel">Experience:</div>
        </div>
        <Section
          jobTitle="Data Engineer"
          workPlace="Imperial, Calgary, AB"
          date="Apr 2023 - present"
          details={[
            "Development and optimization of ETL processes for data integration and transformation.",
            "Management and maintenance of SQL databases, ensuring efficient data storage and retrieval.",
            "Data processing and analysis to support business intelligence and data-driven decision making.",
            "Implementation of data pipelines and workflows to support various data projects and analytics initiatives.",
            "Collaboration with data scientists and analysts to understand data requirements and provide necessary support.",
            "Utilizing cloud services and tools like Azure for data storage, processing, and analysis.",
            "Adhering to Agile methodologies and working within a small team of data professionals.",
          ]}
        />
        <Section
          jobTitle="Software Developer"
          workPlace="Imperial, Calgary, AB"
          date="Oct 2020 - Apr 2023"
          details={[
            "Development of the Web hosted applications for the company such as time management and work permitting, well monitoring and maintenance, value tracking of the field processes.",
            "Heavy front end focus that includes UI/UX user research, design and implementation.",
            "Back end development using node, C#, SQL, Cosmos DB, Azure DevOps tools.",
            "Working in as small squad 5-7 developers following Agile framework, Scrum.",
          ]}
        />
        <Section
          jobTitle="Network Analyst"
          workPlace="ExxonMobil Canada, Calgary, AB"
          date="Sep 2015 - Oct 2020"
          details={[
            "Supported large corporate network built on Cisco and Juniper devices.",
            "Day to day monitoring and troubleshooting, configuration updates and reporting.",
            "End of life device replacement (busy core and distribution network switches and smaller for access layer).",
            "Supported wireless network system “Rajant” with over 200 mobile units in the mine and 20 nodes.",
          ]}
        />
        <Section
          jobTitle="IT Projects Analyst"
          workPlace="ExxonMobil Canada, Calgary, AB"
          date="Sep 2010 - Oct 2015"
          details={[
            "Worked on many projects across Canada, US and Africa to implement IT infrastructure on the drilling rigs. Offshore and land. L4 business networks and L3 process control.",
            "Designed, deployed and maintained various networks including fiber, wireless, satellite and cellular technology.",
            "Configured switching and routing on Cisco, Juniper and other vendors.",
            "Project coordination with heavy hands on component to deliver infrastructure in challenging environments (offshore, remote sites, large and small offices).",
          ]}
        />
        <Section
          jobTitle="Network Analyst"
          workPlace="AEGON Canada, Toronto, ON"
          date="Apr 2010 - Sep 2010"
          details={[
            "Supported network infrastructure and Cisco IP / Nortel PBX telephony at company data center.",
            "Virtual servers support built on VMware and Hyper-V.",
          ]}
        />
        <Section
          jobTitle="IT Infrastructure Analyst"
          workPlace="ExxonMobil, Atyrau, Kazakhstan"
          date="Apr 2008 - Feb 2010"
          details={[
            "Provided level-2 onsite IT support for 2 main upstream offices and remote drilling sites.",
            "Supported IT infrastructure: hardware and software installation, backup media handling, vendors and telecom providers coordination.",
            "Developed IT manuals and procedures, provided orientation training for new users.",
          ]}
        />
        <Section
          jobTitle="IT Service Desk"
          workPlace="Agip KCO, Kazakhstan"
          date="Aug 2007 - Mar 2008"
          details={[
            "User support (remote and desk side).",
            "Supported Win 2003, AD and MS Exchange servers and SAP application.",
            "Installation and maintenance of workstations and a variety of network equipment, printers, MFP devices, and scanners.",
          ]}
        />
        <Section
          jobTitle="IT & Telecom Analyst"
          workPlace="Karachaganak Petroleum"
          date="Jan 2007 - Jul 2007"
          details={[
            "Technical onsite support of computer systems and telecommunications on the pipeline terminal, including: VSAT, SDH, DWDM, hotlines, trunk radio, PBX, network switches, and routers.",
          ]}
        />
        <div className="block">
          <div style={{ marginBottom: "1rem" }}>
            <span className="textLabel">Education:</span>
          </div>
          <div className="job-title">
            Bachelor of Science, in Mechanical Engineering
          </div>
          <div className="job-title">
            West Kazakhstan Technical University, 1999 - 2004
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
