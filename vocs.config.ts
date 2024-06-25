import { defineConfig } from "vocs";

export default defineConfig({
  title: "Laser Eyes",
  description: "Web Hooks For Bitcoin Ordinals",
  sidebar: [
    {
      text: "Getting Started",
      link: "/getting-started",
    },
    {
      text: "The Why",
      link: "/why",
    },
  ],
  topNav: [
    { text: "Getting Started", link: "/docs/getting-started" },
    { text: "Blog", link: "/blog" },
    {
      text: "Lazer Eyes",
      items: [
        {
          text: "Changelog",
          link: "https://github.com/omnisat-foundation/",
        },
        {
          text: "Contributing",
          link: "https://github.com/omnisat-foundation/",
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
      link: "https://github.com/omnisat-foundation",
    },

    {
      icon: "x",
      link: "https://x.com/Omnisats",
    },
  ],
  sponsors: [
    {
      name: "Collaborator",
      height: 120,
      items: [
        [
          {
            name: "CTRL",
            link: "https://seizectrl.io",
            image: "/CTRL.svg",
          },
        ],
      ],
    },
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
            name: "Omnisat",
            link: "https://www.omnisat.io",
            image: "/OmnisatTextBlack.svg",
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
    variables: {
      content: {
        // horizontalPadding: "40px",
        // verticalPadding: "80px",
      },
      color: {
        background: {
          light: "white",
          dark: "#121212",
        },
      },
    },
  },
  editLink: {
    pattern: "https://github.com/wevm/viem/edit/main/site/pages/:path",
    text: "Suggest changes to this page",
  },
});
