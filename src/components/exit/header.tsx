import React from "react";
import ThemeProvider from "../theme-provider";
import Navbar from "../navbar";
import { Typography } from "@material-tailwind/react";

export function HeroSectionTwo() {
  return (
    <ThemeProvider>
      <Navbar />
      <header className="relative h-full w-screen place-items-center px-8 py-28 overflow-hidden">
        {/* Background image */}
        <div
          className="h-full w-full absolute top-0 left-0 bg-cover bg-center filter brightness-50"
          style={{
            backgroundImage: 'url("/data.png")', // Corrected path to your background image
          }}
        />

        {/* User Data Policy */}
        <div className="container mx-auto text-center text-white relative z-10">
          <Typography variant="h2" color="white" className="mb-4">
            User Data Policy
          </Typography>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroSectionTwo;
