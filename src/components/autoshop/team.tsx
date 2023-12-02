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
    "img": "/realtimestore.png",
    "name": "Fully Automated Store",
    "title": "Secure your store",
    "desc": "Experience a fully automated store with seamless processes, from checkout to inventory management, enhancing efficiency and delivering a frictionless shopping experience."
  },
  {
    "img": "/QRcode.png",
    "name": "Easy Entrance with QR Code",
    "title": "Easily Accessable APP with QR Code Entrance",
    "desc": "Experience a fully automated store with seamless processes, from checkout to inventory management, enhancing efficiency and delivering a frictionless shopping experience."
  },
  {
    "img": "/dashboard.png",
    "name": "All-in-one platform",
    "title": "Secure your store",
    "desc": "User-friendly 24/7 store monitoring through an intuitive dashboard, ensuring ease of use for comprehensive oversight and timely decision-making"
  },
  {
    "img": "/facedetect.png",
    "name": "Face Detection",
    "title": "Secure your store",
    "desc": "We harness the power of AI technology to detect and prevent fraudulent activities."
  },
];

export function TeamSectionOne() {
  return (
    <section className="py-8 px-8 lg:py-16">
      <div className="container mx-auto">
        <div className="mb-24 text-center">
          <Typography color="dark" className="mb-2 !font-semibold text-lg">
            We leverage the latest 
          </Typography>
          <Typography variant="h2" color="blue-gray" className="mb-4">
            AI. Computer Vision technology
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
