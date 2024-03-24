import React from "react";
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

function CategoriesCard({ img, category, href }: CategoriesCardPropsType) {
  return (
    <a href={href} className="text-decoration-none">
    <Card
      shadow={false}
      className="relative grid h-[25rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="blue"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/40 via-white/0" />
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
  </a>
  );
}

const categories = [
  {
    img: "/ei-autoshop.png",
    category: "AutoShop智能商店",
    href: "/autoshop",
  },
  {
    img: "/ei-box.png",
    category: "AutoBox智能營銷櫃",
    href: "/box",
  },
];

export function TeamSectionOne() {
  return (
    <section className="py-8 px-8 lg:py-16">
      <div className="container mx-auto">
        <div className="mb-24 w-1/2">
          <Typography variant="h4" color="blue-gray" className="mb-4">
           萬智智能零售方案
          </Typography>
          <Typography variant="lead" className="l:px-20 text-base text-blue-gray-800">
          量身訂製的完美AI解決方案旨在提升和優化您的服務。利用最新的人工智慧和電腦視覺技術，我們的解決方案能夠根據您的需求和業務模式進行客製化，從而實現高效營運和卓越客戶體驗。這將為您的業務帶來更高的效率、更低的成本以及更廣泛的市場競爭優勢。
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
