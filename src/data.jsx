import image from "./assets/img1.png";

export const filterArray = [
  "tools",
  "aws builder",
  "star build",
  "build supplies",
  "tooling",
  "bluehosting",
];
export const SitesData = [
  {
    id: crypto.randomUUID(),
    img: { image },
    imgAlt: "builder 1",
    mainHighlight: [],
    bestFeatures: [],
    title: "WixPro 72-Inch Responsive Website Builder",
    titleDetail:
      " Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    highlightDetail:
      "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    rating: 9.8,
    discount: "",
    isBestChoice: true,
    isBestValue: false,
  },

  {
    id: crypto.randomUUID(),
    img: "./assets/img1.png",
    imgAlt: "builder",
    mainHighlight: [],
    bestFeatures: [],
    title: "SiteCraft 68-Inch Ultimate Web Design Studio",
    titleDetail:
      " Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
    highlightDetail:
      "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
    rating: 9.5,
    discount: "",
    isBestChoice: false,
    isBestValue: true,
  },
  {
    id: crypto.randomUUID(),
    img: "./assets/img1.png",
    imgAlt: "builder 1",
    mainHighlight: [],
    bestFeatures: [],
    title: "WixPro 72-Inch Responsive Website Builder",
    titleDetail:
      " Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    highlightDetail:
      "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",

    rating: 9.3,
    discount: "",
    isBestChoice: false,
    isBestValue: false,
  },
  {
    id: crypto.randomUUID(),
    img: "./assets/img1.png",
    imgAlt: "CDK",
    title: "CDK Resposive Builder",
    titleDetail:
      "An extensive library of widgets and apps, and detailed step-by-step guides",
    mainHighlight: [
      {
        version: "9.9",
        name: "building responsive",
      },
      {
        version: "8.9",
        name: "cool",
      },
      {
        version: "8.9",
        name: "docs",
      },
    ],
    bestFeatures: ["documentation", "easy use", "out of box"],
    highlightDetail: "",
    rating: 9.1,
    discount: "26",
    isBestChoice: "",
    isBestValue: "",
  },
];

export const RelatedSiteData = [
  {
    id: crypto.randomUUID(),
    img: "./assets/img1.png",
    discount: 20,
    title: "Webbuilder 1",
    name: "Computer  Modern clasic with wix support",
    price: 49.96,
  },
  {
    id: crypto.randomUUID(),
    img: "./assets/img1.png",
    discount: 20,
    title: "Webbuilder 1",
    name: "Computer  Modern clasic with wix support",
    price: 49.96,
  },
  {
    id: crypto.randomUUID(),
    img: "./assets/img1.png",
    discount: 20,
    title: "Webbuilder 1",
    name: "Computer  Modern clasic with wix support",
    price: 49.96,
  },
];
