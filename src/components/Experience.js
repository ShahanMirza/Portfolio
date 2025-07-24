import React from 'react';

const Experience = () => (
  <section id="experience">
    <div className="container">
      <h2>Professional Experience</h2>
      <div className="experience-items">
        <div className="experience-item">
          <h3>Cloud DevOps Engineer</h3>
          <p className="text-gray-600">Universal Digital Healthcare, Lahore, Pakistan | 06.2023 - Present</p>
          <p>
            Developed CI/CD pipelines for .NET and Django applications using Jenkins. Integrated SonarQube for code quality analysis and automated reporting. Deployed and maintained microservices on AWS ECS clusters. Set up monitoring with Node Exporter, Prometheus, and Grafana. Automated SQL database backups and cross-account restoration. Migrated GitHub server infrastructure to a cloud platform. Optimized build processes, reducing build time and errors. Configured and deployed an Angular ASP.NET Core application on an IIS server with HAProxy as a load balancer in a 3-tier architecture. Deployed applications on IIS servers in 2- and 3-tier architectures. Implemented documentation practices to enhance knowledge sharing.
          </p>
        </div>
        <div className="experience-item">
          <h3>DevOps Engineer</h3>
          <p className="text-gray-600">Shahtez Software Solutions, Lahore, Pakistan | 07.2021 - 06.2023</p>
          <p>
            Managed AWS resources including VPC, EC2, FSx, RDS, and SES. Performed horizontal and vertical scaling of RDS instances. Configured EBS volume attachment for EC2 instances. Implemented remote deployments with Azure Storage Accounts. Utilized MERN Stack for application deployment. Integrated CI/CD workflows with GitHub Actions and Heroku.
          </p>
        </div>
        <div className="experience-item">
          <h3>System Engineer – DevOps</h3>
          <p className="text-gray-600">Perception IT, Lahore, Pakistan | 07.2019 - 07.2021</p>
          <p>
            Configured on-premises Kubernetes clusters with Ansible. Deployed microservices in Kubernetes and AWS EKS using PM2. Built CI/CD pipelines with Jenkins and GitHub Actions. Provisioned infrastructure with Terraform and automated ELK Stack setup. Developed monitoring solutions and worked in SLA-based agile environments.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;