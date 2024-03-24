import ThemeProvider from "../theme-provider";

import {
  Button,
  Typography,
} from "@material-tailwind/react";

export function HeroSectionFour() {
  return (
    <ThemeProvider>
    <header className="container mx-auto rounded-2xl overflow-hidden relative">
      <div
        className="h-full flex align-center flex-col justify-center text-center bg-cover py-24 relative"
        style={{
          backgroundImage: `url('/111.png')`,
        }}
      >
        <div
          className="absolute inset-0 bg-black opacity-50"
          style={{ mixBlendMode: 'multiply' }} // Adjust blend mode as needed
        ></div>
          <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover  "></span>
          <Typography
            variant="h8"
            color="white"
            className="mb-4 !leading-tight lg:text-2xl z-20"
          >
           利用人工智能計算促進智慧購物體驗。
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mb-12 w-full opacity-50 md:w-10/12 lg:w-7/12 mx-auto px-28 z-10"
          >
          </Typography>
          <a href="/autoshop">
          <div className="w-auto mx-auto">
            <div className="flex items-center">
            <Button
             size="lg"
             color="transparent"
             className="w-50 max-w-md px-4 mx-auto z-10 border border-white text-white hover:bg-white hover:text-blue"
             >
               了解更多
             </Button>
            </div>
          </div>
          </a>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroSectionFour;
