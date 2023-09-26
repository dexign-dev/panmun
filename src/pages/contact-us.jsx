import {
    Typography,
    Button,
    Select,
    Option,
    Input,
    Textarea,
} from "@material-tailwind/react";
import { PageTitle, Footer } from "@/widgets/layout";

export function ContactUs() {
    return (
        <>
            <section className="relative block h-[50vh]">
                <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-2.jpg')] bg-cover bg-center" />
                <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
            </section>
            <section className="relative bg-blue-gray-50/50 py-16 px-4">
                <div className="container mx-auto">
                    <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
                        <div className="px-6">
                            <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                                <div className="relative py-24 px-4">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
            <div className="bg-blue-gray-50/50">
                <Footer />
            </div>
        </>
    );
}

export default ContactUs;
