import { defineConfig } from "vocs";

export default defineConfig({
  title: "Laser Eyes",
  description: "Web Hooks For Bitcoin Ordinals",
  sidebar: [
    {
      text: "Getting Started",
      link: "/docs/getting-started",
    },
    {
      text: "The Why",
      link: "/docs/why",
    },
    {
      text: "Contributing",
      link: "/docs/contributing",
    },
  ],
  topNav: [
    { text: "Getting Started", link: "/docs/getting-started" },
    {
      text: "Laser Eyes",
      items: [
        {
          text: "Contributing",
          link: "/docs/contributing",
        },
      ],
    },
  ],
  iconUrl: {
    light: "/LaserEyesIcon.svg",
    dark: "/LaserEyesIcon.svg",
  },
  logoUrl: {
    light: "/LogoLight.svg",
    dark: "/LogoDark.svg",
  },
  socials: [
    {
      icon: "github",
      link: "https://github.com/omnisat",
    },

    {
      icon: "x",
      link: "https://x.com/Omnisats",
    },
  ],
  sponsors: [
    // { commented out
    //   name: "Collaborator",
    //   height: 120,
    //   items: [
    //     [
    //       {
    //         name: "CTRL",
    //         link: "https://seizectrl.io",
    //         image: "/CTRL.svg",
    //       },
    //     ],
    //   ],
    // },
    {
      name: "Ecosystem Partner",
      height: 60,
      items: [
        [
          {
            name: "UTXO",
            link: "https://paradigm.xyz",
            image: "/utxo.svg",
          },
          {
            name: "Sat Ventures",
            link: "https://www.omnisat.io",
            image: "/satsventure.svg",
          },
        ],
      ],
    },
    {
      name: "Start Ups",
      height: 30,
      items: [
        [
          {
            name: "CTRL",
            link: "https://seizectrl.io",
            image: "/LaserEyesIcon.svg",
          },
          {
            name: "Omnisat",
            link: "https://www.omnisat.io",
            image: "/LaserEyesIcon.svg",
          },
          {
            name: "Omnisat",
            link: "https://www.omnisat.io",
            image: "/LaserEyesIcon.svg",
          },
          {
            name: "Omnisat",
            link: "https://www.omnisat.io",
            image: "/LaserEyesIcon.svg",
          },
        ],
      ],
    },
  ],
  font: {
    default: {
      google: "Windows",
    },
  },
  theme: {
    accentColor: "#FF701E",
    colorScheme: "dark",
  },
  editLink: {
    pattern: "https://github.com/wevm/viem/edit/main/site/pages/:path",
    text: "Suggest changes to this page",
  },
});
