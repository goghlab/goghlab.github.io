import React from "react";
import {
  Card,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

interface TeamCardPropsType {
  img: string;
  name: string;
  title: string;
  desc: string;
}

function TeamCard({ img, name, title, desc }: TeamCardPropsType) {
  return (
    <Card color="transparent" shadow={false}>
      <CardHeader floated={false} shadow={false} className="!m-0 !mb-6 h-64">
        <img
          src={img}
          alt={name}
          className="h-full w-full object-cover object-top"
        />
      </CardHeader>
      <Typography variant="h4" color="black" className="mb-1">
        {name}
      </Typography>
      <Typography color="black" className="mb-3 font-normal">
        {title}
      </Typography>
      <Typography color="black" className="mb-4 font-normal">
        {desc}
      </Typography>
      <div className="flex items-center"></div>
    </Card>
  );
}

const members = [
  // Members' data goes here
];

export function TeamSectionOne() {
  return (
    <section className="py-8 px-8 lg:py-16">
      <div className="container mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {members.map((props, key) => (
            <TeamCard key={key} {...props} />
          ))}
        </div>
        <div className="mb-24">
          <div className="mx-auto lg:w-8/12 lg:px-20 text-left">
            <Typography variant="h2" color="blue-gray" className="mb-4">
              Data Privacy Statement
            </Typography>
            <Typography variant="lead" className="mb-4 text-blue-gray-800">
              <p>
                At Everything Intelligence, we are committed to safeguarding your privacy and handling your data with utmost care. Below, we provide detailed insights into how we handle your data to ensure transparency and build trust.
              </p>
            </Typography>

            <Typography variant="h3" className="text-lg font-semibold mb-2">
              1. Collection of Essential Information
            </Typography>
            <Typography variant="body" className="mb-4">
              We collect only the essential information required for the seamless functionality of our systems. This includes data necessary for user authentication, transaction processing, and system optimization.
            </Typography>

            <Typography variant="h3" className="text-lg font-semibold mb-2">
              2. Secure Storage and Processing
            </Typography>
            <Typography variant="body" className="mb-4">
              Your data is securely stored and processed using industry-standard security measures. We employ encryption, access controls, and regular security audits to ensure the confidentiality and integrity of your information.
            </Typography>

            <Typography variant="h3" className="text-lg font-semibold mb-2">
              3. Non-Disclosure of Personal Information
            </Typography>
            <Typography variant="body" className="mb-4">
              We do not share your personal information with third parties without obtaining your explicit consent. Your data is treated with the utmost confidentiality, and we adhere to strict privacy policies to protect your sensitive information.
            </Typography>

            <Typography variant="h3" className="text-lg font-semibold mb-2">
              4. Priority on Data Security
            </Typography>
            <Typography variant="body" className="mb-4">
              Our systems are designed with a primary focus on data security. We implement robust measures to protect your privacy at all times. This includes regular security updates, vulnerability assessments, and proactive monitoring.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSectionOne;
