import React from "react";
import {
  Typography,
  Button,
} from "@material-tailwind/react";
import { PageTitle, Footer, ContactForm } from "@/widgets/layout";
import { FeatureCard } from "@/widgets/cards";
import { IconText, SlickComponent } from "@/widgets/components";
import { featuresData } from "@/data";

export function Home() {
  return (
    <>
      <div className="flex flex-col h-screen justify-center">
      <div className="absolute top-12 right-0 w-[60vw] h-[60vh]" style={{ backgroundImage: 'url("img/background.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="max-w-8xl container relative mx-auto pt-20 lg:pt-0 lg:pl-10" style={{ zIndex: '20' }}>
          <div className="flex flex-wrap items-start mt-10 lg:mt-0">
            <div className="w-full text-center lg:text-start">
              <Typography
                color="black"
                className="mt-30 md:mt-40 mb-3 text-3xl md:text-6xl font-black"
              >
                PANMUN
              </Typography>
              <Typography variant="lead" color="black" className="text-base md:text-3xl">
                Library Companion
              </Typography>
            </div>
            <div className="mx-auto w-full p-16 md:p-0 lg:p-0">
              <Typography
                variant="h2"
                className="font-medium text-md lg:text-md md:text-xl lg:mt-24 mt-20 mb-4"
                color="blue-gray"
              >
                Since the 1950s,
              </Typography>
              <div className="font-normal text-blue-gray-500">
                <IconText delay={800} iconSrc="/img/icon1.png">
                  we have been working together. We established an independent company from the export department <br /> and have been progressing as a provider of more specialized academic services.
                </IconText>
                <IconText delay={1600} iconSrc="/img/icon2.png">
                  Furthermore, we are the first company in South Korea to start providing metadata (MARC records) for academic libraries.
                </IconText>
                <IconText delay={2400} iconSrc="/img/icon3.png">
                  We have expanded into areas beyond traditional book supply, offering electronic resources (EKS) and proposing solutions for Korean studies collections.
                </IconText>
                <IconText delay={3200} iconSrc="/img/favicon.png">
                  We are constantly advancing to meet the comprehensive needs of libraries. We are a company that grows alongside you, adapting to the changing times.
                </IconText>
              </div>
            </div>

          </div>
        </div>
      </div>
      <section className="bg-blue-gray-50/50 flex h-auto items-center px-4 py-24 md:min-h-[80vh]">
        <PageTitle heading="What We Do">
          <div className="grid grid-cols-1 gap-20 py-5 md:grid-cols-2 lg:grid-cols-3 mt-10">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={icon}
                description={description}
              />
            ))}
          </div>
          <div className="mt-14 mb-4 flex w-full justify-center">
            <Button
              variant="gradient"
              className="flex items-center gap-3"
              onClick={() =>
                window.open(
                  "https://assets.nicepagecdn.com/5af1a9de/5788855/files/20230310_panmun_brochur.pdf"
                )
              }
            >
              <img src="/img/download.png" alt="Download Icon" />
              BROCHURE DOWNLOAD
            </Button>
          </div>
        </PageTitle>
      </section>
      {/* <section className="bg-white md:min-h-[80vh]">
        <div className="mx-auto flex flex-col h-full w-full">

          <div className="h-[40vh] md:min-h-[40vh] flex flex-col md:flex-row justify-center items-center px-4 bg-center bg-cover"
            style={{ backgroundImage: "url('/img/library-solution-hub.jpg')" }}>
            <div className="mb-4 md:mb-8 flex w-2/3 md:w-2/5 items-center justify-center md:justify-end md:mb-0">
              <img
                src="/img/hub.png"
                alt="Hub Image"
                className="max-w-[200px] md:max-w-sm"
              />
            </div>

            <div className="flex flex-col w-4/5 md:w-3/5 justify-center px-2 md:px-6">
              <Typography
                variant="h3"
                color="black"
                className="mb-3 md:mb-6 text-xl md:text-3xl font-extrabold"
              >
                Library Solution Hub
              </Typography>
              <Typography className="italic text-xs md:text-sm lg:text-lg text-black font-semibold md:font-extrabold">
                "우리는 보다 효율적인 한국컬렉션을 관리할 수 있도록 새로운 '허브'라는 조직을 만들었습니다. <br /> 허브는 원활한 소통을 통해 한국학자료에 대한 새로운 아이디어와 솔루션을 제공드립니다."
              </Typography>
            </div>
          </div>
        </div>
      </section> */}




      {/* <section className="relative bg-white px-4 py-24">
        <div className="container mx-auto">
          <PageTitle heading="Trending New Hit">
            <div className="mt-8" style={{ height: "200px", width: "100%" }}>
              <ScrollWordCloud wordsData={wordsData} />
            </div>
          </PageTitle>
          <div className="mt-36 grid grid-cols-1 gap-12 gap-x-16 md:grid-cols-2 xl:grid-cols-3">
            {teamData.map(({ img, name, position }) => (
              <TeamCard key={name} img={img} name={name} position={position} />
            ))}
          </div>
        </div>
      </section> */}

      {/* <section className="relative h-auto bg-blue-gray-50/50 px-4 py-24 md:min-h-[80vh]">
        <div className="container mx-auto flex flex-col md:flex-row h-full items-center justify-center">
          
          <div className="flex w-full flex-col justify-center px-4 mb-10 md:mb-0 md:w-1/2">
            <Typography
              variant="h3"
              color="blue-gray"
              className="mb-12 text-4xl font-extrabold"
            >
              What we recommend
            </Typography>
            <Typography className="mb-6 font-normal text-blue-gray-700 md:text-lg" style={{ lineHeight: '2' }}>
              <span className="font-bold">&lt;THE ACTOR IS PRESENT&gt;</span> is
              a unprecedented book, featuring photographs of 200 Korean actors
              representative of the past, present, and future of Korean films
              and the reviews of which summarize the actors' acting world
              in-depth of the actors.
            </Typography>
            <div className="mt-6 text-center md:text-start">
              <Button
                variant="gradient"
                className="inline-flex items-center"
                onClick={() =>
                  window.open(
                    "https://assets.nicepagecdn.com/5af1a9de/5788855/files/THEACTORISPRESENT_PANMUN.pdf",
                    "_blank"
                  )
                }
              >
                Read More
              </Button>
            </div>
          </div>

          <div className="flex w-full items-center justify-center md:w-1/2">
            <img
              src="/img/recommend.png"
              alt="Book Lover Illustration"
              className="rounded-lg mx-auto mt-10 w-2/3 md:w-3/4 lg:w-2/5 max-w-xs" 
            />
          </div>
        </div>
      </section> */}

      <SlickComponent />

      <section
        id="contactUsSection"
        className="relative bg-blue-gray-50/50 px-4 py-24"
      >
        <ContactForm />
      </section>

      <section className="px-30 bg-white py-24">
        <div className="container mx-auto flex flex-wrap items-center justify-center p-8 md:flex-nowrap">
          <div className="md:pr-30 mb-8 pb-8 md:mb-0 md:pr-40">
            {" "}
            {/* 모바일에서의 마진 변경 */}
            <Typography variant="h5" className="mb-4 text-3xl md:text-4xl font-bold">
              PANMUN Co., Ltd.
            </Typography>
            <Typography className="mb-2 text-sm md:text-xl">
              #501, Wooree Venture Town, 466 Gangseo-ro
            </Typography>
            <Typography className="mb-2 text-sm md:text-xl">
              Gangseo-gu, Seoul, South Korea (07573)
            </Typography>
            <Typography className="mb-2 text-sm md:text-xl">
              Tel. +82 02.2063.0606
            </Typography>
            <Typography className="text-sm md:text-xl">
              Email. panex@epanmun.co.kr
            </Typography>
          </div>
          <div className="relative w-full md:w-2/5">
            <a
              href="https://maps.app.goo.gl/Y6mvkSMBjqovM1ro8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d472.93083338285635!2d126.84135539825859!3d37.56697831384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9c74264e382b%3A0xe7140f7c223f454d!2z7Jqw66as67Kk7LKY7YOA7Jq0!5e0!3m2!1sko!2skr!4v1698133466841!5m2!1sko!2skr&hl=en"
                width="100%"
                height="500vh"
                frameborder="0"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </a>
          </div>
        </div>
      </section>

      <div className="">
        <Footer />
      </div>
    </>
  );
}

export default Home;
