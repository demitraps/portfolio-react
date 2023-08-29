import Threads1 from "../../assets/threads/homepage.png";
import Threads2 from "../../assets/threads/threaddemo.gif";
import Threads3 from "../../assets/threads/search.png";
import Threads4 from "../../assets/threads/profile.png";
import Threads5 from "../../assets/threads/communities.png";

import Eshop1 from "../../assets/ecommerce/homepage.png";
import Eshop2 from "../../assets/ecommerce/demo.gif";
import Eshop3 from "../../assets/ecommerce/productpreview.png";
import Eshop4 from "../../assets/ecommerce/filter.png";
import Eshop5 from "../../assets/ecommerce/shoppingcart.png";

import Admin1 from "../../assets/adminstore/lightmode.png";
import Admin2 from "../../assets/adminstore/demo.gif";
import Admin3 from "../../assets/adminstore/createproduct.png";
import Admin4 from "../../assets/adminstore/products.png";
import Admin5 from "../../assets/adminstore/billboard.png";
import Admin6 from "../../assets/adminstore/categories.png";
import Admin7 from "../../assets/adminstore/colors.png";
import Admin8 from "../../assets/adminstore/orders.png";
import Admin9 from "../../assets/adminstore/createstore.png";

import EmployeesUI1 from "../../assets/employees/twoscreens.png";
import EmployeesUI2 from "../../assets/employees/threescreens.png";

import Anemona1 from "../../assets/anemona/home-anemona.png";
import Anemona2 from "../../assets/anemona/card-anemona.png";
import Anemona3 from "../../assets/anemona/sticker-anemona.png";
import Anemona4 from "../../assets/anemona/logo-anemona.png";
import Anemona5 from "../../assets/anemona/logo-analysis-anemona.png";
import Anemona6 from "../../assets/anemona/elements-anemona.png";
import Anemona7 from "../../assets/anemona/var-anemona.png";
import Anemona8 from "../../assets/anemona/color.png";

import Chunaka1 from "../../assets/chunaka/closeup.png";
import Chunaka2 from "../../assets/chunaka/topdown.png";
import Chunaka3 from "../../assets/chunaka/front.png";
import Chunaka4 from "../../assets/chunaka/back.png";
import Chunaka5 from "../../assets/chunaka/socialdark.png";
import Chunaka6 from "../../assets/chunaka/sociallight.png";

import Hopacho1 from "../../assets/hopacho/packaging.png";
import Hopacho2 from "../../assets/hopacho/thankyou.png";
import Hopacho3 from "../../assets/hopacho/logo.png";
import Hopacho4 from "../../assets/hopacho/blackfull.png";
import Hopacho5 from "../../assets/hopacho/mono.png";
import Hopacho6 from "../../assets/hopacho/colors.png";


import Box1 from "../../assets/boxes/spanish-boxes.png";
import Box2 from "../../assets/boxes/rainbow-boxes.png";
import Box3 from "../../assets/boxes/video-boxes.gif";
import Box4 from "../../assets/boxes/red-boxes.png";
import Box5 from "../../assets/boxes/blue-boxes.png";



export const projectsData = [
  {
    title: "Full-stack Threads app",
    link: "https://threads-app-umber.vercel.app/",
    repo: "https://github.com/demitraps/threads-app-next13",
    subtitle:
      "React | Next.JS 13 | TypeScript | TailwindCSS | MongoDB with Mongoose ODM",
    category: "coding",
    description:
      "This project is a clone of the popular Threads App (META's Twitter). It includes features such as creating threads, replying, view activity, search users, create communities and invite users as well as user/community profiles.",
    images: [Threads1, Threads2, Threads3, Threads4, Threads5],
  },
  {
    title: "Full Stack Next.js 13 E-Commerce Store",
    link: "https://ecommerce-store-next13.vercel.app/",
    repo: "https://github.com/demitraps/ecommerce-store-next13",
    subtitle: "Next.js 13 App Router | React | TailwindCSS | Shadcn",
    category: "coding",
    description:
      "This project is a fully functioning E-commerce Store with Stripe webhooks. It includes features such as featured products in homepage, different categories, preview product card, product page with color and size filters, related items.",
    images: [Eshop1, Eshop2, Eshop3, Eshop4, Eshop5],
  },

  {
    title: "Admin Dashboard & CMS",
    link: "https://ecommerce-admin-dashboard-next13-seven.vercel.app/",
    repo: "https://github.com/demitraps/ecommerce-admin-dashboard-next13",
    subtitle:
      "Next.js 13 App Router | React | TailwindCSS | MySQL with Prisma ORM",
    category: "coding",
    description:
      "This project is a Full Stack Next.js 13 Admin Dashboard & CMS for E-Commerce Store with Clerk authentication, Data validation with Zod and Cloudinary file uploads. It includes features such as multiple stores, billboards per category, sizes/colors/products, archive/feature product function, orders page with payment status, API calls for billboards, categories, sizes, colors, products, light/dark mode.",
    images: [
      Admin1,
      Admin2,
      Admin3,
      Admin4,
      Admin5,
      Admin6,
      Admin7,
      Admin8,
      Admin9,
    ],
  },
  {
    title: "UI/UX Employees App (in progress)",
    subtitle: "Paper wireframes",
    category: "design",
    description:
      "(work in progress) Paper wireframes for an Employees rewards app. Project under the Web Development course of Coding factory.",
    images: [EmployeesUI1, EmployeesUI2],
  },
  {
    title: "Visual Identity | Anemona",
    subtitle: "Logo | Variations | Branding | Colors | Card mockups",
    category: "design",
    description:
      "I meticulously crafted an iconic brand identity, infusing the essence of Greek authenticity into every element, from the captivating logo to the harmonious blend of colors. My creative vision breathed life into the premium organic honey, capturing its essence through branding that resonates with nature-loving connoisseurs.",
    images: [
      Anemona1,
      Anemona2,
      Anemona3,
      Anemona4,
      Anemona5,
      Anemona6,
      Anemona7,
      Anemona8,
    ],
  },
  {
    title: "Business card | Chunaka",
    subtitle: "Business card | Logo | Variations | Card mockups | Social icons",
    category: "design",
    description:
      "With a deft touch of minimalism, I artfully designed a soothing oasis of visual identity for a massage therapist, seamlessly weaving together a welcoming ambiance through the logo, branding, and business cards. Each element resonates tranquility, inviting clients to unwind as they step into a world of serene relaxation.",
    images: [Chunaka1, Chunaka2, Chunaka3, Chunaka4, Chunaka5, Chunaka6],
  },
  {
    title: "Branding | Hopacho",
    subtitle: "Logo | Variations | Colors | Packaging | Social icons",
    category: "design",
    description:
      "I intricately folded a symphony of minimalism and geometry into the DNA of my origami studio's identity, harmonizing the logo, branding, packaging, and stationery with a sense of precise elegance. Each crease and contour reflects not just artistry, but a profound dedication to shaping an enchanting visual narrative.",
    images: [Hopacho1, Hopacho2, Hopacho3, Hopacho4, Hopacho5, Hopacho6],
  },
  {
    title: "Origami boxes | Swirl",
    link: "https://www.etsy.com/listing/758604048/pack-of-3-origami-wedding-favor-boxes",
    subtitle: "Origami favor boxes | Swirl design",
    category: "origami",
    description:
      "This handmade box, which is created using Origami, the Japanese technique of paper folding, is granted to impress with its minimal design, luxurious feel and interesting concept. Each origami gift box is folded with no extra creases for a crisp clean look, and is created with high quality, acid-free paper that is FSC certified.",
    images: [Box1, Box2, Box3, Box4, Box5],
  },
];

export const projectsNav = [
  {
    name: "coding",
  },
  {
    name: "design",
  },
  {
    name: "origami",
  },
  {
    name: "all",
  },
];
