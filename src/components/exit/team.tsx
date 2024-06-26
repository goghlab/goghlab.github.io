import React, { useState, useEffect } from "react";
import QRCode from "qrcode.react";
import {
  Card,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

interface TeamCardPropsType {
  img: string;
  name: string;
  title: string;
  desc: string;
}

function TeamCard({ img, name, title, desc }: TeamCardPropsType) {
  return (
    <Card color="transparent" shadow={false}>
      <CardHeader floated={false} shadow={false} className="!m-0 !mb-6 h-64">
        <img
          src={img}
          alt={name}
          className="h-full w-full object-cover object-top"
        />
      </CardHeader>
      <Typography variant="h4" color="black" className="mb-1">
        {name}
      </Typography>
      <Typography color="black" className="mb-3 font-normal">
        {title}
      </Typography>
      <Typography color="black" className="mb-4 font-normal">
        {desc}
      </Typography>
      <div className="flex items-center"></div>
    </Card>
  );
}

export function TeamSectionOne() {
  const [showQRCode, setShowQRCode] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowQRCode(false); // Hide the QR code after 30 seconds
    }, 30000); // 30 seconds

    return () => clearTimeout(timer); // Clean up the timer when component unmounts
  }, []);

  return (
    <section className="py-8 px-8 lg:py-16">
      <div className="container mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Members cards go here */}
        </div>

        <div className="mb-24 text-center"> {/* Center align text */}
          <Typography variant="h2" color="blue-gray" className="mb-4">
            謝謝惠顧, 
            請掃QR Code出店
          </Typography>

          <div className="mx-auto lg:w-1/2 lg:px-20 text-center"> {/* Center align QR code */}
            {showQRCode && <QRCode value="DNSxRqlLuIQmYzfZHlqD" size={256} />} {/* Set QR code size */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSectionOne;
