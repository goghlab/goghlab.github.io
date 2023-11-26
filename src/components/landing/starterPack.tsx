import { Typography, Button } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

export function ContentSectionOne() {
  return (
    <ThemeProvider>
      <section className="py-16 px-8 lg:py-28">
        <div className="container mx-auto grid items-center lg:grid-cols-2">
          <div className="row-start-2 mt-12 lg:row-auto lg:mt-0 lg:pr-12">
            <Typography variant="h2" color="blue-gray" className="mb-6">
              Basic Starter Pack
            </Typography>
            <Typography variant="lead" color="gray" className="mb-12">
              I always felt like I could do anything. That&apos;s the main thing
              people are controlled by! They&apos;re slowed down by{" "}
              <a
                href="#"
                className="underline underlinez-offset-4 transition-colors hover:text-blue-500"
              >

              </a>
              . If you&apos;re taught you can&apos;t do anything, you won&apos;t
              do anything. I was taught I could do everything.
              <br />

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
