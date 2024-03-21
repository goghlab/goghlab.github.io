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
            backgroundImage: 'url("/bg-billing.jpg")', 
          }} 
        />
         <div
  />

        {/* Existing content */}
        <div className="container mx-auto grid items-center lg:grid-cols-2 relative z-10">
          <div className="text-center lg:text-left text-white">
            <div className="mb-8 inline-flex items-center rounded-lg border border-white py-1 pl-1 pr-3">
              <Typography
                variant="small"
                className="mr-3 rounded-md bg-white py-0.5 px-3 font-medium text-black"
              >
                 萬智科技 
              </Typography>
              <Typography
                color="white"
                variant="small"
                className="!flex !items-center !font-semibold"
              >
                AI.人工智能零售自動化解決方案專家
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
              AutoShop 智能商店
            </Typography>
            <Typography variant="lead" className="lg:pr-18 text-white">
              "體驗AutoShop的購物未來：無需排隊，自助結帳 - 隨取隨走！."
            </Typography>
            <div className="mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a href="/login"> {/* Add your login page URL here */}
                <Button color="blue" className="flex items-center">
                  用戶登入
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroSectionTwo;
