import React from 'react';

const Projects = () => (
  <section id="projects">
    <div className="container">
      <h2>Projects</h2>
      <div className="project-items">
        <div className="project-item">
          <h3>CI/CD Pipeline Automation</h3>
          <p>Automated deployment pipelines for .NET apps using Jenkins and AWS.</p>
        </div>
        <div className="project-item">
          <h3>Kubernetes Cluster Setup</h3>
          <p>Configured on-premises Kubernetes for microservices deployment.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;