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

export function TeamSectionOne() {
  return (
    <section className="py-8 px-8 lg:py-16">
      <div className="container mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Members cards go here */}
        </div>

        <div className="mb-24">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Data Privacy Statement
          </Typography>

          <Typography
            variant="lead"
            className="mx-auto lg:w-8/12 lg:px-20 text-blue-gray-800 text-left"
          >
            <p>
              At [Your Company], we prioritize your privacy and data protection. Here's a detailed overview of how we handle your data in our auto checkout solution, inspired by the efficiency of Amazongo:
            </p>

            <ul className="list-disc pl-6">
              <li>
                <Typography variant="small" className="font-bold">
                  Collection of Essential Information:
                </Typography>{" "}
                We only collect essential information necessary for the seamless functionality of our auto checkout system.
              </li>

              <li>
                <Typography variant="small" className="font-bold">
                  Secure Storage and Processing:
                </Typography>{" "}
                Your data is securely stored and processed with the utmost care to ensure confidentiality and protection.
              </li>

              <li>
                <Typography variant="small" className="font-bold">
                  No Sharing of Personal Information:
                </Typography>{" "}
                We do not share your personal information with third parties without your explicit consent, ensuring your data remains private.
              </li>

              <li>
                <Typography variant="small" className="font-bold">
                  Priority on Data Security:
                </Typography>{" "}
                Our systems are designed with a primary focus on data security, ensuring the continuous protection of your privacy.
              </li>
            </ul>
          </Typography>
        </div>
      </div>
    </section>
  );
}

export default TeamSectionOne;
