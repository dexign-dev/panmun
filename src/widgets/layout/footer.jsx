import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";

const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {
  return (
    <footer className="relative px-4 pb-6 pt-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <Typography variant="h4" className="mb-4" color="blue-gray">
              {title}
            </Typography>
            <Typography className="font-normal text-blue-gray-500">
              {description}
            </Typography>
            <div className="mx-auto mb-8 mt-6 flex justify-center gap-2 md:mb-0 lg:justify-start">
              {socials.map(({ color, name, path }) => (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton color="white" className="rounded-full">
                    <Typography color={color}>
                      <i className={`fa-brands fa-${name}`} />
                    </Typography>
                  </IconButton>
                </a>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-12 flex justify-center gap-24 lg:mt-0">
            {menus.map(({ name, items }) => (
              <div key={name} className="flex flex-col">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 block font-medium uppercase"
                >
                  {name}
                </Typography>
                <ul className="mt-3 flex">
                  {items.map((item) => (
                    <li key={item.name} className="mr-4 last:mr-0">
                      <Typography
                        as="a"
                        style={{ cursor: "pointer" }}
                        href={item.path}
                        onClick={item.onClick}
                        target="_blank"
                        rel="noreferrer"
                        variant="small"
                        className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700"
                      >
                        {item.name}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              {copyright}
            </Typography>
          </div>
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
    {
      color: "pink",
      name: "dribbble",
      path: "https://www.dribbble.com/",
    },
    {
      color: "red",
      name: "youtube",
      path: "https://www.youtube.com/channel/",
    },
    {
      color: "black",
      name: "github",
      path: "https://github.com/",
    },
  ],
  menus: [
    {
      name: "useful links",
      items: [
        { name: "About Us", 
          onClick: () => handleScrollTo("aboutUsSection")
        },
        {
          name: "Contact Us",
          onClick: () => handleScrollTo("contactUsSection")
        },
        { name: "Blog", path: "https://www.panmun.com" },
        {
          name: "MIT License",
          path: "https://github.com/creativetimofficial/material-tailwind/blob/main/LICENSE.md?ref=mtk",
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
        className="text-blue-gray-500 transition-colors hover:text-blue-500"
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
