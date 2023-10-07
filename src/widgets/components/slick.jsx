import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

export function SlickComponent() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,  // 자동 전환
        autoplaySpeed: 3500,  // 1초마다
        arrows: true  // 화살표 버튼 표시
    };

    return (
        <Slider {...settings}>
            <div
                className="slide-content flex items-center h-full relative"
               >
                     <div className="absolute inset-0 z-10 bg-black opacity-50"></div>
                    <div className="h-[60vh] md:min-h-[80vh] relative z-20 flex flex-col justify-center items-center space-y-8 text-center"
                     style={{
                        backgroundImage: "url('/img/ksdc.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                        <h2 className="text-4xl font-bold text-white">KSDC</h2>
                        <h3 className="text-2xl text-white">
                            Korea Social Science Data Center
                        </h3>
                        <p className="text-sm md:text-lg text-white">
                            The unified DB of Korean Social Science Data Center (KSDC) consist
                            of all kinds of statistical <br /> yearbooks published by the
                            government, public institutions and overseas institutions
                        </p>
                        <div className="flex flex-wrap justify-center space-x-6 md:space-x-36 pt-8 md:pt-16">
                            <a
                                href="https://assets.nicepagecdn.com/5af1a9de/5788855/files/20230310_panmun_brochur.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center mb-4 md:mb-0 whitespace-nowrap text-white text-xs md:text-base transition-shadow duration-300 hover:underline font-bold"
                                style={{ color: "#4994EC", textShadow: "0px 0px 15px #80BBFF" }}
                            >
                                READ MORE <span className="ml-1">→</span>
                            </a>
                            <a
                                href="https://assets.nicepagecdn.com/5af1a9de/5788855/files/20230310_panmun_brochur.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center mb-4 md:mb-0 whitespace-nowrap text-white text-xs md:text-base transition-shadow duration-300 hover:underline font-bold"
                                style={{ color: "#4994EC", textShadow: "0px 0px 15px #80BBFF" }}
                            >
                                홈페이지 이용자 교육 <span className="ml-1">→</span>
                            </a>
                            <a
                                href="https://www.ksdcdb.kr/main.do"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center mb-4 md:mb-0 whitespace-nowrap text-white text-xs md:text-base transition-shadow duration-300 hover:underline font-bold"
                                style={{ color: "#4994EC", textShadow: "0px 0px 15px #80BBFF" }}
                            >
                                LINK_KSDC <span className="ml-1">→</span>
                            </a>
                        </div>
                    </div>
            </div>

            <div
                className="slide-content flex items-center h-full relative "
              
            >
                    <div className="absolute inset-0 z-10 bg-black opacity-50"></div>
                    <div className="h-[60vh] md:min-h-[80vh] relative z-20 flex flex-col justify-center items-center space-y-8 text-center"
                      style={{
                        backgroundImage: "url('/img/lawnb.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                        <h2 className="text-4xl font-bold text-black">LawnB</h2>
                        <h3 className="text-2xl text-black">
                            now Thomson Reuters Korea
                        </h3>
                        <p className="text-sm md:text-lg text-black">
                            The largest online collection of Korean legal materials, LawnB’s{" "}
                            <br />
                            Legal Information Service is a portal service for all law-related
                            issues and so on.
                        </p>
                        <div className="flex flex-wrap justify-center space-x-6 md:space-x-36 pt-8 md:pt-16">
                            <a
                                href="https://assets.nicepagecdn.com/5af1a9de/5788855/files/20230310_panmun_brochur.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center mb-4 whitespace-nowrap text-xs md:text-base transition-shadow duration-300 hover:underline font-bold"
                                style={{ color: "#4994EC", textShadow: "0px 0px 15px #80BBFF" }}
                            >
                                READ MORE <span className="ml-1">→</span>
                            </a>
                            <a
                                href="https://support.thomsonreuters.co.kr/product/lawnb/articles"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center mb-4 whitespace-nowrap text-xs md:text-base transition-shadow duration-300 hover:underline font-bold"
                                style={{ color: "#4994EC", textShadow: "0px 0px 15px #80BBFF" }}
                            >
                                홈페이지 이용자 교육 <span className="ml-1">→</span>
                            </a>
                            <a
                                href="https://www.lawnb.com/#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center mb-4 whitespace-nowrap text-xs md:text-base transition-shadow duration-300 hover:underline font-bold"
                                style={{ color: "#4994EC", textShadow: "0px 0px 15px #80BBFF" }}
                            >
                                LINK_KSDC <span className="ml-1">→</span>
                            </a>

                        </div>
                </div>

            </div>
        </Slider>
    );
};

export default SlickComponent;
