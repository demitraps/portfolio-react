import Threads1 from "../../assets/threads/homepage.png";
import Threads2 from "../../assets/threads/threaddemo.gif";
import Threads3 from "../../assets/threads/search.png";
import Threads4 from "../../assets/threads/profile.png";
import Threads5 from "../../assets/threads/communities.png";

import Anemona1 from "../../assets/anemona/home-anemona.png";
import Anemona2 from "../../assets/anemona/card-anemona.png";
import Anemona3 from "../../assets/anemona/sticker-anemona.png";
import Anemona4 from "../../assets/anemona/logo-anemona.png";
import Anemona5 from "../../assets/anemona/logo-analysis-anemona.png";
import Anemona6 from "../../assets/anemona/elements-anemona.png";
import Anemona7 from "../../assets/anemona/var-anemona.png";
import Anemona8 from "../../assets/anemona/color.png";

import Box1 from "../../assets/boxes/spanish-boxes.png";
import Box2 from "../../assets/boxes/rainbow-boxes.jpeg";
import Box3 from "../../assets/boxes/video-boxes.gif";
import Box4 from "../../assets/boxes/red-boxes.jpeg";
import Box5 from "../../assets/boxes/blue-boxes.jpeg";

export const projectsData = [
  {
    id: 1,
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
    id: 2,
    title: "Visual Identity for Anemona",
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
