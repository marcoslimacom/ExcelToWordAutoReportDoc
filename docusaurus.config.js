const path = require("path");

module.exports = {
  title: "ExcelToWordAutoReport",
  tagline:
    "Generate reports for your customers in word or pdf format from excel data automatically.",
  url: "https://marcoslimacom.github.io",
  baseUrl: "/ExcelToWordAutoReportDoc/",
  favicon: "img/logo.svg",
  organizationName: "marcoslimacom", // Usually your GitHub org/user name.
  projectName: "ExcelToWordAutoReportDoc", // Usually your repo name.
  plugins: ['@docusaurus/plugin-google-analytics'],
  themeConfig: {
    navbar: {
      title: "ExcelToWordAutoReport",
      logo: {
        alt: "ExcelToWordAutoReport Logo",
        src: "img/logo.svg",
      },
      links: [
        {
          to: "docs/requirements",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "docs/change-logs", label: "Change Logs", position: "left" },
        {
          href: "https://codecanyon.net/item/exceltowordautoreport/26324611",
          label: "Buy",
          position: "right",
        },
        {
          href: "https://marcoslima.com",
          label: "Marcos Lima Website",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Marcos Lima",
          items: [
            {
              label: "About Me",
              to: "https://marcoslima.com/about",
            },
            {
              label: "Portfolio",
              to: "https://marcoslima.com/portfolio",
            },
            {
              label: "Services",
              to: "https://marcoslima.com/services",
            },
            {
              label: "Products",
              to: "https://marcoslima.com/products",
            },
          ],
        },
        {
          title: "Docs",
          items: [
            {
              label: "Requirements",
              to: "docs/requirements",
            },
            {
              label: "How to use",
              to: "docs/how-to-use",
            },
            {
              to: "docs/change-logs",
              label: "Change Logs",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Contact Me",
              href: "https://www.marcoslima.com/contact",
            },
            {
              label: "Support",
              href: "https://www.marcoslima.com/support",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/marcoslimacom",
            },
            {
              label: "Linkedin",
              href: "https://www.linkedin.com/in/marcoslimacom",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Marcos Lima.`,
    },
    disableDarkMode: true,
    googleAnalytics: {
      trackingID: 'UA-93072011-3',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/marcoslimacom/ExcelToWordAutoReportDoc/edit/develop",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
