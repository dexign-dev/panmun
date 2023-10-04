import { Home } from "@/pages";
import {
  HomeIcon,
  EnvelopeOpenIcon,
} from "@heroicons/react/24/solid";
import ContactUs from "./pages/contact-us";

export const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    icon: EnvelopeOpenIcon,
    name: "contact Us",
    path: "/contact-us",
    element: <ContactUs />,
  }
];

export default routes;
