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
      <div className="flex items-center">
        <IconButton variant="text" color="light-blue">
          <i className="fa-brands fa-twitter text-lg not-italic" />
        </IconButton>
        <IconButton variant="text" color="blue">
          <i className="fa-brands fa-linkedin text-lg not-italic" />
        </IconButton>
        <IconButton variant="text" color="pink">
          <i className="fa-brands fa-dribbble text-lg not-italic" />
        </IconButton>
      </div>
    </Card>
  );
}

const members = [
  {
    "img": "facedetect.png",
    "name": "Face Detection",
    "title": "Secure your store",
    "desc": "Today you are you! That is truer than true! There is no one alive!"
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
