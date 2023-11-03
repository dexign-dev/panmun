import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";

const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {
  return (
    <footer className="relative px-4 py-8 md:py-24 flex flex-col md:flex-row justify-center items-start md:items-center bg-gray-800">
      <div className="container mx-auto text-white w-full md:max-w-6xl space-y-8 md:space-y-0">
        
        <div className="flex flex-col md:mb-5 md:flex-row gap-6 md:gap-16 w-full items-start md:items-center">
          <div className="flex flex-col justify-center items-start w-full md:mb-0">
            <Typography variant="h4" className="mb-2 text-lg lg:text-xl font-bold text-left" color="white">
              {title}
            </Typography>
            <Typography className="font-normal text-xs md:text-sm text-white mb-2 text-left">
              {description}
            </Typography>
          </div>

          <div className="flex flex-col items-start text-left w-full">
            <Typography variant="h6" color="white" className="font-bold uppercase">
              {menus[0].name}
            </Typography>
            <ul className="flex flex-wrap gap-4">
              {menus[0].items.map((item) => (
                <li key={item.name} className="mt-2">
                  <Typography
                    as="a"
                    style={{ cursor: "pointer" }}
                    href={item.path}
                    onClick={item.onClick}
                    target="_blank"
                    rel="noreferrer"
                    variant="small"
                    className="font-normal text-xs md:text-sm text-white hover:text-blue-500"
                  >
                    {item.name}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start w-full mt-6 md:mt-0 space-y-6">
          <div className="flex gap-4 mb-2">
            {socials.map(({ color, name, path }) => (
              <a key={name} href={path} target="_blank" rel="noopener noreferrer">
                <IconButton color="white" className="rounded-full md:text-base text-xs">
                  <Typography color={color}>
                    <i className={`fa-brands fa-${name}`} />
                  </Typography>
                </IconButton>
              </a>
            ))}
          </div>
          <Typography variant="small" className="font-normal text-white">
            {copyright}
          </Typography>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "PANMUN.CO.LTD.",
  description: "PANMUN은 변화하는 시대에 맞추어 함께 성장하는 기업입니다.",
  socials: [
    {
      color: "blue",
      name: "facebook",
      path: "https://www.facebook.com/",
    },
    {
      color: "light-blue",
      name: "twitter",
      path: "https://www.twitter.com/",
    },
    {
      color: "purple",
      name: "instagram",
      path: "https://www.instagram.com/",
    },
  ],
  menus: [
    {
      name: "Company",
      items: [
        { name: "About Us", 
          onClick: () => handleScrollTo("aboutUsSection")
        },
        {
          name: "Contact Us",
          onClick: () => handleScrollTo("contactUsSection")
        },
        {
          name: "MIT License",
          path: "https://github.com/creativetimofficial/material-tailwind/blob/17a585f88189a550ae7b7f17ac71d5b65b48dddc/LICENSE",
        }
      ],
    },
  ],
  copyright: (
    <>
      Copyright © {year}{" "}
      <a
        href=""
        target="_blank"
        className="text-white transition-colors hover:text-blue-500"
      >
        PANMUN CO.,LTD.
      </a>
      .
    </>
  ),
};

const handleScrollTo = (sectionId) => {
  const sectionElement = document.getElementById(sectionId);
  if (sectionElement) {
    sectionElement.scrollIntoView({ behavior: "smooth" });
  }
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
