import insta from "@assets/images/instagram.svg";
import facebook from "@assets/images/devicon_facebook.svg";
import location from "@assets/images/Group.svg";

const FOOTER_LINKS = {
  internal: [
    {
      label: "Explore our Range",
      links: [
        {
          label: "Bat",
          url: "Bat/All",
        },
        {
          label: "Ball",
          url: "/Ball",
        },
        {
          label: "Protective Gear",
          url: "/Protection/All",
        },
        {
          label: "Foot Wear",
          url: "/Batting Gear/Leg Guard",
        },
        {
          label: "Clothing",
          url: "/Clothing/All",
        },
        {
          label: "Accessories",
          url: "/Accessories/All",
        },
      ],
    },
    {
      label: "Secure Shopping",
      links: [
        {
          label: "Privacy Policy",
        },
        {
          label: "Terms & Conditions",
        },
        {
          label: "Payment Options",
        },
        {
          label: "SSL Encrypted",
        },
      ],
    },
    {
      label: "Why Us",
      links: [
        {
          label: "Quality Assurance",
        },
        {
          label: "Expert Advice",
        },
        {
          label: "Fast Shipping",
        },
        {
          label: "100% Satisfaction Guarantee",
        },
      ],
    },
    {
      label: "Customer Support",
      links: [
        {
          label: "Contact us",
          url: "/contact",
        },
        {
          label: "FAQs",
        },
        {
          label: "Size Guide",
        },
        {
          label: "Shipping & Return",
        },
      ],
    },
  ],
  external: [
    {
      label: "Connect with us",
      links: [
        {
          label: "@javasports",
          url: "https://www.instagram.com/javasports_official/",
          logo: insta,
        },
        {
          label: "@javasports",
          url: "https://www.facebook.com/javasportsofficial",
          logo: facebook,
        },
      ],
    },
    {
      label: "Visit our Store",
      links: [
        {
          label: "Address of the Store",
          url: "https://goo.gl/maps/1zD5f4v8n7z",
          logo: location,
        },
      ],
    },
  ],
};

export default FOOTER_LINKS;
