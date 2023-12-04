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
      <header className="relative h-full w-screen place-items-center px-8 py-28 overflow-hidden">
        {/* Background image */}
        <div
          className="h-full w-full absolute top-0 left-0 bg-cover bg-center filter brightness-50"
          style={{
            backgroundImage: 'url("/vending.png")', // Corrected path to your background image
          }}
        />

        {/* Existing content */}
        <div className="container mx-auto grid items-center lg:grid-cols-2 relative z-10">
          <div className="text-center lg:text-left text-white">
            <div className="mb-8 inline-flex items-center rounded-lg border border-white py-1 pl-1 pr-3">
              <Typography
                variant="small"
                className="mr-3 rounded-md bg-white py-0.5 px-3 font-medium text-black"
              >
                E.I.
              </Typography>
              <Typography
                color="white"
                variant="small"
                className="!flex !items-center !font-semibold"
              >
                AI. Powered Smart Vending Machine
                <ArrowSmallRightIcon
                  className="ml-1.5 h-4 w-4"
                  strokeWidth={3}
                />
              </Typography>
            </div>
            <Typography
              variant="h1"
              color="white"
              className="mb-8 leading-tight lg:text-4xl"
            >
              E.I.-Vending 
            </Typography>
            <Typography variant="lead" className="lg:pr-20 text-white">
              "Next Gen AI Powered Vending Machine."
            </Typography>
            <div className="mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Button color="blue" className="flex items-center">
                Comming Soon...
              </Button>
            </div>
          </div>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroSectionTwo;
