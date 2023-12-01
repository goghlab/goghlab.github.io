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
          <div className="absolute inset-0 bg-gray-500 opacity-60"></div>
          <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover"></span>
          <Typography
            variant="h1"
            color="white"
            className="mb-4 opacity-100 !leading-tight lg:text-10xl z-0"
          >
            Autonomous 
            Meets
            Innovation
          </Typography>
          <Typography
            variant="lead"
            className="mb-10 w-full opacity-100 md:w-12/12 lg:w-10/12 mx-auto px-10 z-10 text-black"
          >
            ⚡ Next-Gen Autonomous Retail Solutions 
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
