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
      text: "Example",
      link: "/example",
    },
  ],
  topNav: [
    { text: "Guide & API", link: "/docs" },
    { text: "Blog", link: "/blog" },
    {
      text: "Lazer Eyes",
      items: [
        {
          text: "Changelog",
          link: "https://github.com/wevm/vocs/blob/main/src/CHANGELOG.md",
        },
        {
          text: "Contributing",
          link: "https://github.com/wevm/vocs/blob/main/.github/CONTRIBUTING.md",
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
            name: "Paradigm",
            link: "https://paradigm.xyz",
            image:
              "https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/paradigm-light.svg",
          },
        ],
      ],
    },
    {
      name: "Large Enterprise",
      height: 60,
      items: [
        [
          {
            name: "WalletConnect",
            link: "https://walletconnect.com",
            image:
              "https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/walletconnect-light.svg",
          },
          {
            name: "Stripe",
            link: "https://www.stripe.com",
            image:
              "https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/stripe-light.svg",
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
