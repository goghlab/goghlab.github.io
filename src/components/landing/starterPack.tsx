import { Typography, Button } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

export function ContentSectionOne() {
  return (
    <ThemeProvider>
      <section className="py-16 px-8 lg:py-28">
        <div className="container mx-auto grid items-center lg:grid-cols-2">
          <div className="row-start-2 mt-12 lg:row-auto lg:mt-0 lg:pr-12">
            <Typography variant="h2" color="blue-gray" className="mb-6">
             AI-driven technology monitors and analyzes customer behavior in real-time
            </Typography>
            <Typography variant="lead" color="gray" className="mb-12">
            Everything Intelligence utilizes computer vision and AI technologies to monitor and analyze customer in-store behavior and metrics. This enables our retail clients to easily access and track crucial information, facilitating efficient monitoring of their stores.
            </Typography>
            <div className="inline-flex flex-wrap gap-3">
              <Button variant="outlined" size="lg">
                get in touch
              </Button>
              <Button variant="outlined" size="lg">our process</Button>
            </div>
          </div>
          <img
            src="000.png"
            alt="team work"
            className="max-h-[50vh] w-full rounded-xl object-cover object-center md:max-h-[75vh]"
          />
        </div>
      </section>
    </ThemeProvider>
  );
}

export default ContentSectionOne;
