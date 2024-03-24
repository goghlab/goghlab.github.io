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
    title: "監控解決方案",
    description:
      "通過集成平台無縫監控線上和線下活動，確保全天候的完全可見性，以便做出明智的決策。",
  },
  {
    icon: (
      <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" strokeWidth={2} />
    ),
    title: "24/7 支援",
    description:
      "提供全天候不懈的支援，優先考慮我們的零售合作夥伴成功，迅速解決問題並始終堅持滿足他們的需求。",
  },
  {
    icon: <BoltIcon className="h-6 w-6" strokeWidth={2} />,
    title: "光速結帳",
    description:
      "Autoshop的解決方案提供無摩擦結帳，確保快速交易，消除排隊，並優化效率，實現無縫迅速的購物體驗。",
  },
  {
    icon: <LinkIcon className="h-6 w-6" strokeWidth={2} />,
    title: "集成解决方案",
    description:
      "集成解決方案簡化客戶店鋪自動化流程，提高效率，減少人力成本，幫助實現自動化零售操作並提升客戶體驗。",
  },
  {
    icon: <HeartIcon className="h-6 w-6" strokeWidth={2} />,
    title: "高效零售自動化",
    description:
      "我們的Autoshop解決方案透過無縫自動化吸引合作夥伴，提高效率，降低成本，並提升客戶滿意度，實現無與倫比的零售成功。",
  },
];

export function FeatureSectionOne() {
  return (
    <section className="py-28 px-4">
    
    <Typography variant="h3" color="blue-gray" className="mb-4 text-center">
          特點
        </Typography>
      <div className="container mx-auto mb-20 text-center">
        <Typography color="dark" className="mb-2 font-bold text-lg">
        E.I.AutoShop：終極無摩擦購物解決方案
        </Typography>
        <Typography
  variant="lead"
  className="mx-auto w-full px-4 text-sm text-blue-gray-800 md:w-10/12 lg:w-7/12 lg:px-8"
>
  透過我們的無摩擦結帳，簡化您的購物流程：迅速、安全的交易，最小化延誤，確保所有人都能享受無縫、無煩惱的購物體驗。
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
