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
        <div className="relative h-screen flex align-center flex-col justify-center text-center bg-cover" style={{backgroundImage: `url('123.png')`}}>
          <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover"></span>
          <Typography
            variant="h2"
            color="black"
            className="mb-4 opacity-80 !leading-tight lg:text-3xl z-0"
          >
            "Every Thing Inteligence : Innovation of Autonomous Solutions"
          </Typography>
          <Typography
  variant="lead"

  className="mb-7 w-full opacity-40 md:w-10/12 lg:w-10/12 mx-auto px-8 z-10 text-12"
>
  "Next-Gen Autonomous Solutions: Paving the Way for a Smarter and More Efficient Future."
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
