import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <p>
          Experienced Data Analyst skilled in quantitative analysis, with a Master's in Information Technology from ASU and a Bachelor's in Computer Science from Anna University. At ASU, I led courses in Analyzing Big Data & Data Visualization for IT, engaging over 200 students. At Tata Consultancy Services, I optimized ETL pipelines and implemented Docker/Kubernetes for system deployments, reducing processing time by 50%. My projects include predictive analysis, sentiment analysis, and interactive dashboards, showcasing my ability to leverage data for actionable insights. Proficient in Python, Java, Tableau, and more, I'm excited to drive solutions optimization at your company.
        </p>
        <footer className="blockquote-footer">Muni Sandeep Kumar Ravilla</footer>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
