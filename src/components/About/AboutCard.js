import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Bhavil Ahuja </span>
            from <span className="purple"> Vadodara, India.</span>
            <br /> I am a final year student pursuing B.tech
            in Software Engineering at Delhi Technological University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Webseries
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Just work upto your best and leave the results for your fate to decide!"{" "}
          </p>
          <footer className="blockquote-footer">Someone</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
