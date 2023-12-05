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
      <Typography variant="h4" color="black" className="mb-1">
        {name}
      </Typography>
      <Typography color="black" className="mb-3 font-normal">
        {title}
      </Typography>
      <Typography color="black" className="mb-4 font-normal">
        {desc}
      </Typography>
      <div className="flex items-center">
      </div>
    </Card>
  );
}

const members = [
  {
    "img": "/box.png",
    "name": "Grid Vending Boxes",
    "title": "Movable Grid Vending System",
    "desc": "Experience a fully automated Vending System"
  },
  {
    "img": "/box2.png",
    "name": "Smart Delivery Bot",
    "title": "Delivery Bot Integration",
    "desc": "Experience a fully automated store with seamless processes, from checkout to inventory management, enhancing efficiency and delivering a frictionless shopping experience."
  },
];

export function TeamSectionOne() {
  return (
    <section className="py-8 px-8 lg:py-16">
      <div className="container mx-auto">
        <div className="mb-24 text-center">
          <Typography color="dark" className="mb-2 !font-semibold text-lg">
            We leverage the latest AI. Robotic Technology
          </Typography>
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Smart Grid Vending boxes
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto lg:w-8/12 lg:px-20 text-blue-gray-800"
          >
            
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
