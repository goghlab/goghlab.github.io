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
                At Everything Intelligence, we prioritize the security and privacy of your data. Our Data Privacy Statement outlines how we handle your information to build trust and transparency.
              </p>
            </Typography>

            <Typography variant="h3" className="text-lg font-semibold mb-2">
              1. Collection of Essential Information
            </Typography>
            <Typography variant="body" className="mb-4">
              We collect only the necessary information required for the seamless functionality of our systems, specifically focusing on providing a frictionless checkout solution. This includes data for user authentication, transaction processing, and system optimization.
            </Typography>

            <Typography variant="h3" className="text-lg font-semibold mb-2">
              2. Secure Storage and Processing
            </Typography>
            <Typography variant="body" className="mb-4">
              Your data is securely stored and processed using industry-standard security measures. We implement encryption, access controls, and regular security audits to ensure the confidentiality and integrity of your information.
            </Typography>

            <Typography variant="h3" className="text-lg font-semibold mb-2">
              3. Non-Disclosure of Personal Information
            </Typography>
            <Typography variant="body" className="mb-4">
              We do not share your personal information with third parties without obtaining explicit consent. Your data is treated with the utmost confidentiality, and we adhere to strict privacy policies to protect your sensitive information.
            </Typography>

            <Typography variant="h3" className="text-lg font-semibold mb-2">
              4. Priority on Data Security
            </Typography>
            <Typography variant="body" className="mb-4">
              Our systems are designed with a primary focus on data security, especially given our commitment to providing a frictionless checkout experience. We implement robust measures, including regular security updates, vulnerability assessments, and proactive monitoring, to protect your privacy at all times.
            </Typography>

            <Typography variant="h3" className="text-lg font-semibold mb-2">
              5. Adherence to Google Play Policies
            </Typography>
            <Typography variant="body" className="mb-4">
              We strictly adhere to Google Play Developer Programme Policies. Any third-party code, including SDKs used in our app, complies with Google Play user data policies. We do not allow the sale of personal and sensitive user data.
            </Typography>

            <Typography variant="h3" className="text-lg font-semibold mb-2">
              6. Prominent Disclosure and Consent
            </Typography>
            <Typography variant="body" className="mb-4">
              In cases where data collection exceeds user expectations, especially in the context of checkout processes, we provide a clear in-app disclosure. This disclosure includes details on data access, collection, use, and sharing. Consent is obtained through clear and unambiguous dialogue, ensuring user understanding.
            </Typography>

            <Typography variant="h3" className="text-lg font-semibold mb-2">
              7. Handling of Personal and Sensitive User Data
            </Typography>
            <Typography variant="body" className="mb-4">
              If our app handles personal and sensitive user data, specifically related to checkout processes, we adhere to the following guidelines:
              <ul className="list-disc pl-6">
                <li>We limit access, collection, use, and sharing of personal and sensitive user data to app functionality and policy-compliant purposes reasonably expected by the user.</li>
                <li>If used for advertising, our app complies with Google Play's ads policy.</li>
                <li>We handle personal and sensitive user data securely, including transmission using modern cryptography (e.g., over HTTPS).</li>
                <li>We use runtime permissions requests whenever available, prior to accessing data gated by Android permissions.</li>
                <li>We do not sell personal and sensitive user data. 'Sale' refers to the exchange or transfer of such data to a third party for monetary consideration.</li>
              </ul>
            </Typography>

            <Typography variant="h3" className="text-lg font-semibold mb-2">
              8. Prominent Disclosure and Consent Requirements for User-Initiated Transfers
            </Typography>
            <Typography variant="body" className="mb-4">
              For user-initiated transfers of personal and sensitive user data related to checkout processes, we meet the following requirements:
              <ul className="list-disc pl-6">
                <li>We provide an in-app disclosure within the app itself, describing the data being accessed or collected, how it will be used and/or shared.</li>
                <li>The disclosure is displayed in normal app usage, not requiring users to navigate into settings or menus.</li>
                <li>We obtain user consent through clear and unambiguous in-app requests, ensuring affirmative user action.</li>
              </ul>
            </Typography>

            {/* Additional sections go here */}

          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSectionOne;
