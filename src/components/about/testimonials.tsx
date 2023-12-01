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
                src="852logo.png"
                alt="852 Convience Stroe HONG KONG"
                className="mb-8 w-36"
              />
              <Typography
                variant="h3"
                color="white"
                className="mb-10 font-medium leading-normal"
              >
                852 Convenient Store in Hong Kong expresses gratitude for the transformative impact of Ei-Autoshop. The system's seamless integration reduces costs and provides centralized control. We value the strategic partnership, finding your support invaluable. Thanks for enhancing our efficiency and contributing to our success.
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
                Chief Executive, 852 Convienient Store HONG KONG
              </Typography>
            </div>
            <div className="relative mx-auto grid shrink-0 place-items-center lg:ml-auto">
              <img
                src="852store.png"
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
