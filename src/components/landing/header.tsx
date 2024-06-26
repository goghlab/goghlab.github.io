import React from 'react';
import { Button, Typography } from '@material-tailwind/react';
import ThemeProvider from '../theme-provider';
import Navbar from '../navbar';

export function HeroSectionTwo() {
  return (
    <ThemeProvider>
      <Navbar />
      <header className="h-screen min-h-screen w-screen bg-white relative">
        <video
          autoPlay
          loop
          muted
          playsInline  // Add playsInline for better mobile compatibility
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/ei.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gray-200 opacity-70"></div>
        <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover"></span>
        <div className="flex flex-col items-center justify-center h-screen text-center">
          <Typography
            variant="h3"
            color="black"
            className="mb-4 opacity-100 leading-tight lg:text-3xl z-0"
          >
            創新 AI.自動化：簡單、高效、領先。
          </Typography>
          <Typography
  variant="body1"
  className="mb-6 w-full opacity-100 md:w-12/12 lg:w-10/12 mx-auto px-10 z-10 text-black text-base"
>
  零售/商務自動化智能方案專家
</Typography>

          <a href="https://wa.link/xbzr1f">
            <div className="w-auto mx-auto">
              <div className="flex items-center justify-center">
                <Button size="lg" className="z-10" style={{ backgroundColor: '#198FFF' }}>
                  聯絡銷售顧問
                </Button>
              </div>
            </div>
          </a>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroSectionTwo;
