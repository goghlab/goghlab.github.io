import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import {
  EyeIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  BoltIcon,
  FaceSmileIcon,
  LinkIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function FeatureCard({ icon, title, children }: FeatureCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="grid justify-center text-center">
        <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-dark p-2.5 text-white">
          {icon}
        </div>
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 !font-semibold"
        >
          {title}
        </Typography>
        <Typography
          className="px-8 font-normal text-gray-700"
        >
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

const features = [
  {
    icon: <EyeIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Integrated Surveillance Solutions: E.I. Omni-Monitor",
    description:
      "Elevate your store effortlessly with Everything Intelligence. Seamlessly monitor online and offline activities through integrated platforms, ensuring total visibility for informed decisions round the clock.",
  },
  {
    icon: (
      <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" strokeWidth={2} />
    ),
    title: "Support 24/7",
    description:
      "Everything Intelligence provides relentless 24/7 support, prioritizing our retail partners' success with swift issue resolution and unwavering dedication to their needs.",
  },
  {
    icon: <BoltIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Light Speed Checkout",
    description:
      "Autoshop's solution offers a frictionless checkout, ensuring light-speed transactions, eliminating queues, and optimizing efficiency for a seamless and swift shopping experience",
  },
  {
    icon: <FaceSmileIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Effortless Checkout Experience: Auto-Pay Solutions",
    description:
      "Streamline your shopping journey with Automated Order Payments. Exit the store hassle-free as your bill generates automatically, reflecting our commitment to seamless transactions and convenience.",
  },
  {
    icon: <LinkIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Integrated solution",
    description:
      "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire other people to follow their dreams, too.",
  },
  {
    icon: <HeartIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Efficient Retail Automation",
    description:
      "Our Autoshop solution captivates partners with seamless automation, boosting efficiency, cutting costs, and enhancing customer satisfaction for unparalleled retail success.",
  },
];

export function FeatureSectionOne() {
  return (
    <section className="py-28 px-4">
    
    <Typography variant="h2" color="blue-gray" className="mb-4 text-center">
          Features
        </Typography>
      <div className="container mx-auto mb-20 text-center">
        <Typography color="dark" className="mb-2 font-bold text-lg">
          E.I.AutoShop: The Ultimate Frictionless Shopping Solution
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 text-blue-gray-800 md:w-10/12 lg:w-7/12 lg:px-8"
        >
          Streamline your purchase with our frictionless checkout: swift, secure transactions, minimizing delays, ensuring a seamless, hassle-free shopping experience for all.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon, title, description }) => (
          <FeatureCard key={title} icon={icon} title={title}>
            {description}
          </FeatureCard>
        ))}
      </div>
    </section>
  );
}

export default FeatureSectionOne;
