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
      <Typography variant="h5" color="black" className="mb-1">
        {name}
      </Typography>
      <Typography color="black" className="mb-3 font-normal">
        {title}
      </Typography>
      <Typography color="black" className="mb-4 text-sm font-normal">
  {desc}
</Typography>
      <div className="flex items-center">
      </div>
    </Card>
  );
}

const members = [
  {
    "img": "/autoshop01.png",
    "name": "全自動化的智能商店",
    "title": "提升效率，實現零摩擦的購物體驗",
    "desc": "體驗一個完全自動化的商店，從結帳到庫存管理無縫銜接，提升效率，帶來零摩擦的購物體驗。"
  },
  {
    "img": "/QRcode.png",
    "name": "輕鬆入場，掃描 QR 碼",
    "title": "透過應用程式以 QR 碼輕鬆入場",
    "desc": "使用者透過掃描應用程式中個人的 QR 碼，輕鬆進出及結帳支付，實現方便的進出和結帳支付。"
  },
  {
    "img": "/dashboard.png",
    "name": "一站式平台",
    "title": "便利商店監控",
    "desc": "透過直觀的儀表板，24/7友善的商店監控，確保全面監督和及時決策的便利使用。"
  },
  {
    "img": "/facedetect.png",
    "name": "人臉檢測",
    "title": "保障您的商店",
    "desc": "利用人工智能技術的力量來檢測和防止欺詐活動。"
  },
];

export function TeamSectionOne() {
  return (
    <section className="py-8 px-8 lg:py-16">
      <div className="container mx-auto">
        <div className="mb-24 text-center">
          <Typography color="dark" className="mb-2 !font-semibold text-sm">
            我們利用最新的 
          </Typography>
          <Typography variant="h5" color="blue-gray" className="mb-4">
            人工智慧。電腦視覺技術
          </Typography>
          <Typography
            variant="body2"
            className="mx-auto lg:w-8/12 lg:px-12 text-blue-gray-800"
          >
            我們最新的解决方案AutoShop，利用人工智慧和電腦視覺技術，實現了無摩擦結帳體驗。透過自動識別和追踪商品，使購物更加便捷，提升了顧客的購物體驗。
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
