import ThemeProvider from "../theme-provider";

import {
  Button,
  Typography,
} from "@material-tailwind/react";

export function HeroSectionFour() {
  return (
    <ThemeProvider>
      <header className="container mx-auto rounded-2xl overflow-hidden">
      <div
  className="relative h-full flex align-center flex-col justify-center text-center bg-cover py-24"
  style={{
    backgroundImage: `url('/111.png')`,
  }}
>
          <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover  "></span>
          <Typography
            variant="h3"
            color="white"
            className="mb-4 !leading-tight lg:text-5xl z-20"
          >
           leverage computer vision and AI to facilitate anonymous shopping experiences.
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mb-12 w-full opacity-50 md:w-10/12 lg:w-7/12 mx-auto px-28 z-10"
          >
          </Typography>
          <div className="w-auto mx-auto">
            <div className="flex items-center">
              <Button size="lg" color="blue" className="w-full px-4 z-10">
               Learn More
              </Button>
            </div>
          </div>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroSectionFour;
