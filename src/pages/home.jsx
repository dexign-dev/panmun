import React from "react";
import {
  Typography,
  Button,
} from "@material-tailwind/react";
import { PageTitle, Footer, ContactForm } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { IconText, ScrollWordCloud, SlickComponent } from "@/widgets/components";
import { featuresData, teamData, wordsData } from "@/data";

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center bg-white">
        <div className="absolute top-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1553635331-3296745611d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/25 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                color="white"
                className="mt-30 md:mt-0 mb-6 text-3xl md:text-5xl font-black"
              >
                PANMUN
              </Typography>
              <Typography variant="lead" color="white" className="text-base md:text-2xl">
                Library Companion
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section id="aboutUsSection" className="bg-blue-gray-50/50 px-4 py-24">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="mx-auto w-full px-2 md:w-full">
              <PageTitle heading="About Us">
                <div className="flex flex-wrap justify-center mb-20">
                  <Typography
                    variant="h3"
                    className="font-bold text-2xl md:text-3xl"
                    color="blue-gray"
                  >
                    1950s부터 함께해 온 우리는
                  </Typography>
                </div>
              </PageTitle>
              <div className="font-normal text-blue-gray-500">
                <IconText delay={800} iconSrc="/img/icon1.png">
                  수출부였던 부서를 독립적인 회사로 설립 해, 보다 전문적인 학술
                  서비스를 제공하는 회사로서 나아갔습니다.
                </IconText>
                <br />
                <IconText delay={1600} iconSrc="/img/icon2.png">
                  또한, 우리는 학술 도서관들을 위한 메타데이터 (MARC recods)
                  제공을 시작한 국내 최초 기업입니다.
                </IconText>
                <br />
                <IconText delay={2400} iconSrc="/img/icon3.png">
                  전통적인 도서 제공만이 아닌 도서관에 필요한 전반적인 서비스를
                  위해 전자자료 (EKS) 제공, 한국학 장서 배가를 위한 제안 등의
                  영역으로 확장하며 항상 나아가고 있습니다.
                </IconText>
                <br />
                <IconText delay={3200} iconSrc="/img/favicon.png">
                  변화하는 시대에 맞춰 여러분들과 항상 함께 하기 위해 성장하는
                  기업입니다.
                </IconText>
              </div>

            </div>

          </div>
        </div>
      </section>
      <section className="bg-white md:min-h-[80vh]">
        <div className="mx-auto flex flex-col h-full w-full">

          {/* 상단 부분 */}
          <div className="h-[40vh] md:min-h-[40vh] w-full flex flex-col justify-center items-center bg-center bg-cover"
            style={{ backgroundImage: "url('/img/ourservice.png')" }}>
            <PageTitle heading="Our Service">

              <div className="mt-6 mb-4 flex w-full justify-center">
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
          </div>

          <div className="h-[40vh] md:min-h-[40vh] flex flex-col md:flex-row justify-center items-center px-4 bg-center bg-cover"
            style={{ backgroundImage: "url('/img/library-solution-hub.jpg')" }}>

            {/* 좌측 이미지 부분 */}
            <div className="mb-4 md:mb-8 flex w-2/3 md:w-2/5 items-center justify-center md:justify-end md:mb-0">
              <img
                src="/img/hub.png"
                alt="Hub Image"
                className="max-w-[200px] md:max-w-sm"
              />
            </div>

            {/* 우측 텍스트 부분 */}
            <div className="flex flex-col w-4/5 md:w-3/5 justify-center px-2 md:px-6">
              <Typography
                variant="h3"
                color="white"
                className="mb-3 md:mb-6 text-xl md:text-3xl font-extrabold"
              >
                Library Solution Hub
              </Typography>
              <Typography className="italic text-xs md:text-sm lg:text-lg text-white font-semibold md:font-extrabold">
                "우리는 보다 효율적인 한국컬렉션을 관리할 수 있도록 새로운 '허브'라는 조직을 만들었습니다. <br/> 허브는 원활한 소통을 통해 한국학자료에 대한 새로운 아이디어와 솔루션을 제공드립니다."
              </Typography>
            </div>
          </div>


        </div>
      </section>


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
        </PageTitle>
      </section>

      <section className="relative bg-white px-4 py-24">
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
      </section>

      <section className="relative h-auto bg-blue-gray-50/50 px-4 py-24 md:min-h-[80vh]">
        <div className="container mx-auto flex flex-col md:flex-row h-full items-center justify-center">
          {/* 좌측 2/3 부분 */}
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
              className="rounded-lg mx-auto mt-10 w-2/3 md:w-3/4 lg:w-2/5 max-w-xs" // 'rounded' 추가
            />
          </div>
        </div>
      </section>

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
            <div style={{ paddingTop: "100%" }}></div>
            <a
              href="https://maps.app.goo.gl/gWNfvcge6Pd4vc2u8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/map.png"
                alt="Map"
                className="absolute left-0 top-0 h-full w-full object-cover"
              />
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
