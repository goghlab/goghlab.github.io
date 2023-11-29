import {
  Card,
  CardHeader,
  IconButton,
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
      <Typography variant="h4" color="blue-gray" className="mb-1">
        {name}
      </Typography>
      <Typography color="gray" className="mb-3 font-normal">
        {title}
      </Typography>
      <Typography color="gray" className="mb-4 font-normal">
        {desc}
      </Typography>
    </Card>
  );
}

const members = [
  {
    img: "autoshop01.png",
    name: "Smart Store Traffic Management",
    desc: "Enhancing Retail Efficiency and Customer Experience, Comparative data on shopper volume per hour, in-store footfall, and the density of different store areas.",
  },
  {
    img: "autoshop02.png",
    name: "Seamless Retail Management",
    desc: "Experience comprehensive retail control with our intuitive dashboard, optimizing operations and enhancing customer satisfaction for your automated retail solution.",
  },
  {
    img: "autoshop03.png",
    name: "Lana Steiner",
    title: "Product Manager",
    desc: "Artist is a term applied to a person who engages in an activity",
  },
  {
    img: "autoshop04.png",
    name: "Demi Wilkinson",
    desc: "Success is not final, failure is not fatal: it is the courage to continue",
  },
];

export function TeamSectionOne() {
  return (
    <section className="py-8 px-8 lg:py-16">
      <div className="container mx-auto">
        <div className="mb-24 text-center">
          <Typography color="dark" className="mb-2 !font-semibold text-lg">
            Our Team
          </Typography>
          <Typography variant="h2" color="blue-gray" className="mb-4">
            You are into a great company
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto lg:w-8/12 lg:px-20 text-blue-gray-800"
          >
            This is the paragraph where you can write more details about your
            team. Keep you user engaged by providing meaningful information.
          </Typography>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {members.map((props, key) => (
            <TeamCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSectionOne;
