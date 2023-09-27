import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  Select,
  Option,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { IconText, ScrollWordCloud } from "@/widgets/components";
import { featuresData, teamData, contactData, wordsData } from "@/data";

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center bg-white">
        <div className="absolute top-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1537202108838-e7072bad1927?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1946&q=80')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                PANMUN CO., LTD.
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                PANMUN은 전통적인 도서 제공 뿐 아니라 도서관에 필요한 전반적인
                서비스,
                <br />
                전자자료(EKS), 한국학 장서 배가를 위한 제안 등의 영역으로
                서비스를 제공하는 기업입니다.
                <br />
              </Typography>
              <a href="#aboutUsSection">
                <Button variant="outlined" className="mt-40 border-white text-lg text-white w-64">About Us</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <section id="aboutUsSection" className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="mx-auto mt-8 w-full px-2 md:w-5/12">
              <Typography
                variant="h3"
                className="mb-5 font-bold"
                color="blue-gray"
              >
                1950s부터 함께해 온 우리는
              </Typography>
              <div className="mb-8 font-normal text-blue-gray-500">
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
              <div className="mt-10 mb-10 flex w-full justify-start">
                {" "}
                <a
                  href="https://assets.nicepagecdn.com/5af1a9de/5788855/files/20230310_panmun_brochur.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="gradient"
                  >
                    READ MORE
                  </Button>
                </a>

              </div>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/teamwork.jpeg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Korean scholarly material specialist
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    Here at Panmun, we are working tirelessly for our mission to
                    promote the Korean culture and to disseminate Korean Studies
                    to wider parts of the globe. It is our vision to become a
                    proud bridge that provides connection between Korea and the
                    world.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 px-4 bg-blue-gray-50/50">
        <div className="container mx-auto">
          <PageTitle heading="Our Service">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 py-5">
              {featuresData.map(({ color, title, icon, description }) => (
                <FeatureCard
                  key={title}
                  color={color}
                  title={title}
                  icon={React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                  description={description}
                />
              ))}
            </div>
          </PageTitle>

          <div className="mt-10 mb-6 flex w-full justify-center">
            {/* mb-48 추가하여 버튼과 바닥의 간격 조정 */}
            <Button
              variant="gradient"
              className="flex items-center gap-3"
              onClick={() =>
                window.open(
                  "https://assets.nicepagecdn.com/5af1a9de/5788855/files/20230310_panmun_brochur.pdf"
                )
              }
            >
              <img
                src="public/img/download.png"
                alt="Download Icon"
              />
              BROCHURE DOWNLOAD
            </Button>
          </div>

        </div>
      </section>
      <section className="h-auto md:h-[50vh] px-4 py-12 flex items-center">
        <div className="container mx-auto flex flex-wrap justify-center h-full">

          {/* 좌측 이미지 부분 */}
          <div className="w-full md:w-2/5 flex items-center justify-center mb-8 md:mb-0">
            <img src="public/img/hub.png" alt="Hub Image" className="max-w-sm" />
          </div>

          {/* 우측 텍스트 부분 */}
          <div className="w-full md:w-3/5 flex flex-col justify-center px-6">
            <Typography variant="h3" color="blue-gray" className="mb-6 font-extrabold text-3xl">
              Library Solution Hub
            </Typography>
            <Typography className="font-normal text-blue-gray-700">
              우리는 보다 효율적인 한국컬렉션을 관리할 수 있도록 새로운 '허브'라는 조직을 만들었습니다. <br />허브는 원활한 소통을 통해 한국학자료에 대한 새로운 아이디어와 솔루션을 제공드립니다.
            </Typography>
          </div>
        </div>
      </section>


      <section className="h-auto md:h-[50vh] relative bg-blue-gray-50/50 py-24 px-4">
        <div className="container mx-auto flex flex-wrap justify-center h-full">

          {/* 좌측 2/3 부분 */}
          <div className="w-full mb-10 md:w-2/5 px-4 flex flex-col justify-center"> {/* 여기에서 flex와 justify-center를 추가했습니다. */}
            <Typography variant="h3" color="blue-gray" className="mb-6 font-extrabold text-3xl">
              What we recommend
            </Typography>
            <Typography className="font-normal text-blue-gray-700 mb-6">
              <span className="font-bold">&lt;THE ACTOR IS PRESENT&gt;</span> is a unprecedented book, featuring photographs of 200 Korean actors representative of the past, present, and future of Korean films and the reviews of which summarize the actors' acting world in-depth of the actors.
            </Typography>
            <div className="text-start mt-6">
              <Button
                variant="gradient"
                className="inline-flex items-center"
                onClick={() => window.open("https://assets.nicepagecdn.com/5af1a9de/5788855/files/THEACTORISPRESENT_PANMUN.pdf", "_blank")}
              >
                Read More
              </Button>
            </div>
          </div>

          {/* 우측 1/3 이미지 부분 */}
          <div className="w-full md:w-2/5 flex items-center justify-center">
            <img src="public/img/undraw_book_lover_mkck 2.svg" alt="Book Lover Illustration" className="max-w-xs mx-auto" />
          </div>

        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto">
          <PageTitle heading="Build something">
            Put the potentially record low maximum sea ice extent tihs year down
            to low ice. According to the National Oceanic and Atmospheric
            Administration, Ted, Scambos.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-blue-gray-50/50 py-24 px-4">
        <div className="container mx-auto">
          <PageTitle heading="Build something">
            Put the potentially record low maximum sea ice extent tihs year down
            to low ice. According to the National Oceanic and Atmospheric
            Administration, Ted, Scambos.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="relative py-24 px-4 bg-white">
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
      <section id="contactUsSection" className="relative py-24 px-4 bg-blue-gray-50/50">
        <PageTitle heading="Want to work with us?">
          Complete this form and we will get back to you in 24 hours.
        </PageTitle>
        <form className="mx-auto mt-12 max-w-screen-lg text-center">
          <div className="mb-8 flex flex-col md:flex-row gap-8">
            <Input variant="standard" size="lg" label="Full Name" />
            <Input variant="standard" size="lg" label="Email Address" />
          </div>
          <div className="mb-8 flex flex-col md:flex-row gap-8">
            <Input variant="standard" size="lg" label="Affiliation" />
            <div className="flex w-full flex-col">
              <Select label="Occupation" outline="true">
                <Option value="professor">Professor</Option>
                <Option value="student">Student</Option>
                <Option value="other">Other</Option>
              </Select>
            </div>
          </div>
          <div className="mb-8 flex gap-8">
            <div className="flex w-full flex-col">
              <Select label="Request Type" outline="true">
                <Option value="order_request">Order request</Option>
                <Option value="quotation_request">Quotation request</Option>
                <Option value="other_request">Other request</Option>
                <Option value="approval_plan_request">
                  Approval plan request
                </Option>
              </Select>
            </div>
          </div>
          <Textarea variant="standard" size="lg" label="Message" rows={8} />
          <Button variant="gradient" size="lg" className="mt-8">
            Send Message
          </Button>
        </form>
      </section>

      <section className="px-30 py-24 bg-white">
        <div className="container mx-auto flex flex-wrap items-center justify-center p-8 md:flex-nowrap">
          <div className="md:pr-30 mb-8 pb-8 md:mb-0 md:pr-40">
            {" "}
            {/* 모바일에서의 마진 변경 */}
            <Typography variant="h5" className="mb-4 text-4xl font-bold">
              PANMUN Co., Ltd.
            </Typography>
            <Typography className="mb-2 text-xl">
              #501, Wooree Venture Town, 466 Gangseo-ro
            </Typography>
            <Typography className="mb-2 text-xl">
              Gangseo-gu, Seoul, South Korea (07573)
            </Typography>
            <Typography className="mb-2 text-xl">
              Tel. +82 02.2063.0606
            </Typography>
            <Typography className="text-xl">
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
