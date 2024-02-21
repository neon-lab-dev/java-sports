// @ts-ignore
import Facebook from "@/assets/icons/facebook.svg";
// @ts-ignore
import Instagram from "@/assets/icons/instagram.svg";

const HEADER_LINKS = {
  socialLinks: [
    {
      link: "https://facebook.com",
      icon: Facebook,
      label: "Facebook",
    },
    {
      link: "https://instagram.com",
      icon: Instagram,
      label: "Instagram",
    },
  ],
  others: [
    {
      path: "/about",
      label: "About Us",
    },
    {
      path: "/payment-delivery",
      label: "Payment & delivery",
    },
    {
      path: "/contact",
      label: "Contact Us",
    },
    {
      path: "/help",
      label: "Help",
    },
  ],
};

export default HEADER_LINKS;
