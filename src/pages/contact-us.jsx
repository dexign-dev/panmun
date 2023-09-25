import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Textarea,
  Button,
  Typography,
} from "@material-tailwind/react";
import { PageTitle } from "@/widgets/layout";
import { SimpleFooter } from "@/widgets/layout";

export function ContactUs() {
  return (
    <>
      <img
        src="/img/background-2.jpg"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="w-full max-w-[40rem] md:absolute md:left-2/4 md:top-2/4 md:-translate-x-2/4 md:-translate-y-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Contact Us
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <section className="overflow-x-hidden px-4 py-24">
              {" "}
              {/* overflow-x-hidden 추가 */}
              <PageTitle heading="Want to work with us?">
                Complete this form and we will get back to you in 24 hours.
              </PageTitle>
              <form className="mx-auto mt-12 max-w-screen-lg text-center">
                {" "}
                {/* max-w-screen-lg 추가 */}
                <div className="mb-8 flex gap-8">
                  <Input variant="standard" size="lg" label="Full Name" />
                  <Input variant="standard" size="lg" label="Email Address" />
                </div>
                <Textarea
                  variant="standard"
                  size="lg"
                  label="Message"
                  rows={8}
                />
                <Button variant="gradient" size="lg" className="mt-8">
                  Send Message
                </Button>
              </form>
            </section>
          </CardBody>
        </Card>
      </div>
      <div className="container absolute bottom-6 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
        <div className="container mx-auto">
          <SimpleFooter />
        </div>
        <SimpleFooter />
      </div>
    </>
  );
}

export default ContactUs;
