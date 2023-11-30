import React from "react";
import {
  Button,
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import Navbar from "../navbar";
import {
  ArrowSmallRightIcon,
} from "@heroicons/react/24/outline";

export function HeroSectionTwo() {
  return (
    <ThemeProvider>
      <Navbar />
      <header
        className="h-full w-screen place-items-center px-8 py-28"
        style={{ backgroundImage: 'url("/whitebg.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="container mx-auto grid items-center lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <div className="mb-8 inline-flex items-center rounded-lg border border-white/30 py-1 pl-1 pr-3">
              <Typography
                variant="small"
                className="mr-3 rounded-md bg-white py-0.5 px-3 font-medium text-black"
              >
                New
              </Typography>
              <Typography
                color="white"
                variant="small"
                className="flex items-center font-semibold"
              >
                100% RETAIL AUTOMATION WITH MOST ADVANCED AI TECHNOLOGY
                <ArrowSmallRightIcon
                  className="ml-1.5 h-4 w-4"
                  strokeWidth={3}
                />
              </Typography>
            </div>
            <Typography
              variant="h1"
              color="white"
              className="mb-8 leading-tight lg:text-6xl"
            >
              EI AutoShop
            </Typography>
            <Typography variant="lead" className="lg:pr-20 text-white">
              Frictionless Shopping Solution
            </Typography>
            <div className="mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Button color="blue" className="flex items-center">
                User Login
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex">
            <img src="/autoshop.png" alt="Autoshop" className="max-w-md rounded-3xl ml-auto" />
          </div>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroSectionTwo;
