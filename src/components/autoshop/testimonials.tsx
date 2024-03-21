import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export function TestimonialSectionTwo() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <Card
          shadow={false}
          className="overflow-hidden !bg-black"
        >
          <CardBody className="flex flex-col-reverse gap-16 py-20 px-14 lg:flex-row">
            <div>
              <img
                src="/852logo.png"
                alt="852 Convience Stroe HONG KONG"
                className="mb-8 w-36"
              />
              <Typography
                variant="h5"
                color="white"
                className="mb-10 font-medium leading-normal"
              >
                852便利店在香港衷心感謝Ei-Autoshop所帶來的變革性影響。該系統的無縫整合降低了成本並提供了集中控制。我們珍視這份戰略合作夥伴關係，感謝您的支持無價。謝謝您提升我們的效率，貢獻於我們的成功。
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="font-medium"
              >
                Micheal
              </Typography>
              <Typography
                color="white"
                className="font-normal opacity-70"
              >
                Chief Executive, 852 便利店 香港
              </Typography>
            </div>
            <div className="relative mx-auto grid shrink-0 place-items-center lg:ml-auto">
              <img
                src="/852store.png"
                alt="testimonial image"
                className="h-80 w-80 rounded-full object-cover"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default TestimonialSectionTwo;
