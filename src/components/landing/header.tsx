import {
  Button,
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import Navbar from "../defaultNavbar";

export function HeroSectionTwo() {
  return (
    <ThemeProvider>
      <Navbar />
      <header className="h-screen min-h-screen w-screen bg-white">
        <div className="relative h-screen flex align-center flex-col justify-center text-center bg-cover" style={{backgroundImage: `url('/bg.png')`}}>
          <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover"></span>
          <Typography
            variant="h1"
            color="black"
            className="mb-4 opacity-80 !leading-tight lg:text-3xl z-0"
          >
            Autonomous Meets Innovation
          </Typography>
          <Typography
  variant="lead"

  className="mb-7 w-full opacity-40 md:w-10/12 lg:w-10/12 mx-auto px-6 z-8 text-"
>
  Next-Gen Autonomous Retail Solutions
</Typography>
          <div className="w-auto mx-auto">
            <div className="flex items-center">
            <Button size="lg" className="w-full z-10" style={{ backgroundColor: '#198FFF' }}>
  Request A Demo
</Button>

            </div>
          </div>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroSectionTwo;
