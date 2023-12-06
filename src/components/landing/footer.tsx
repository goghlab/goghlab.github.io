import { Typography } from "@material-tailwind/react";

const links = [
  {
    title: "Solutions",
    items: [
      { name: "AutoShop", link: "/autoshop" },
      { name: "Box", link: "/box" },
    ],
  },
  {
    title: "Company",
    items: [
      { name: "About Us", link: "/autoshop" },
      { name: "Career", link: "/box" },
    ],
  },
];

const currentYear = new Date().getFullYear();

export function FooterTwo() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <Typography variant="h4" className="mb-6">
            Everything Intelligence
          </Typography>
          <div className="grid grid-cols-3 justify-between gap-4">
            {links.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-medium opacity-40"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link.name}>
                    <Typography
                      as="a"
                      href={link.link || "#"}
                      color="gray"
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                    >
                      {link.name}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-end justify-center gap-y-4 gap-x-8 border-t border-blue-gray-50 py-6 md:justify-between">
          <div className="text-center md:text-start">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Everything Intelligence . Innovate Shopping
            </Typography>
            <Typography color="gray" className="font-normal">
              "Transforming the retail experience through innovative technologies, our vision is to pioneer and elevate shopping by seamlessly integrating cutting-edge solutions, artificial intelligence, and data-driven insights to create personalized, efficient, and delightful consumer journeys."
            </Typography>
          </div>
          <Typography color="gray" className="text-center font-normal">
            &copy; {currentYear} Everything Intelligence All Right Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default FooterTwo;
