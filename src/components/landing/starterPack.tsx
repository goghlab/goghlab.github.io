import { Typography, Button } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

export function ContentSectionOne() {
  return (
    <ThemeProvider>
      <section className="py-16 px-8 lg:py-28">
        <div className="container mx-auto grid items-center lg:grid-cols-2">
          <div className="row-start-2 mt-12 lg:row-auto lg:mt-0 lg:pr-12">
            <Typography variant="h2" color="blue-gray" className="mb-6">
             Autoshop:AI驅動技術即時監控分析客戶行為，實現自主零售解決方案
            </Typography>
            <Typography variant="lead" color="gray" className="mb-12">
             萬智科技利用電腦視覺和人工智慧技術監控和分析顧客店內行為和數據指標。這使我們的零售客戶能夠輕鬆獲取和追蹤關鍵訊息，促進其店舖的高效監控。
            </Typography>
            <div className="inline-flex flex-wrap gap-3">
              <a href="https://wa.link/xbzr1f">
              <Button variant="outlined" size="lg">
                聯絡我們
              </Button>
              </a>
              <a href="/process.pdf" download="process.pdf">
              <Button variant="outlined" size="lg">
                流程
             </Button>
             </a>
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
