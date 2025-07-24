import React from 'react';

const Skills = () => (
  <section id="skills">
    <div className="container">
      <h2>Skills</h2>
      <div className="skill-items">
        <div className="skill-item">
          <h3>Cloud Platforms</h3>
          <p>AWS (EC2, VPC, RDS, FSx, SES, EBS), Azure, Heroku</p>
        </div>
        <div className="skill-item">
          <h3>Containerization</h3>
          <p>Docker, Kubernetes, AWS ECS</p>
        </div>
        <div className="skill-item">
          <h3>CI/CD & Tools</h3>
          <p>Jenkins, GitHub Actions, Terraform, Ansible, SonarQube</p>
        </div>
        <div className="skill-item">
          <h3>Programming</h3>
          <p>Node.js, ReactJS, JavaScript ES6</p>
        </div>
        <div className="skill-item">
          <h3>Monitoring</h3>
          <p>Prometheus, Grafana, ELK Stack</p>
        </div>
        <div className="skill-item">
          <h3>Other</h3>
          <p>Git, Linux, Windows</p>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;