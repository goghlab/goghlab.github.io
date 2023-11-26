import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

interface CategoriesCardPropsType {
  img: string;
  category: string;
}

function CategoriesCard({ img, category }: CategoriesCardPropsType) {
  return (
    <Card
      shadow={false}
      className="relative grid h-[25rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/30 via-black/0" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
        <Typography
          variant="h4"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        >
          {category}
        </Typography>
      </CardBody>
    </Card>
  );
}

const categories = [
  {
    img: "/ei-autoshop.png",
    category: "EI-AUTOSHOP",
  },
  {
    img: "ei-vending.png",
    category: "EI-VENDING",
  },
  {
    img: "ei-shelve.png",
    category: "EI-SHELVE",
  },
  {
    img: "/ei-box.png",
    category: "EI-BOX",
  },
];

export function TeamSectionOne() {
  return (
    <section className="py-8 px-8 lg:py-16">
      <div className="container mx-auto">
        <div className="mb-24 w-1/2">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            E.I. Autonomous Retail Solutions
          </Typography>
          <Typography
            variant="lead"
            className="l:px-20 text-blue-gray-800"
          >Discover the perfect solution tailored to elevate and optimize your store'
          </Typography>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((props, key) => (
            <CategoriesCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSectionOne;
