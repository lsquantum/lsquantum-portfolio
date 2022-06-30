/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    /*
        Provide the locales you want to support in your application
    */
    locales: ["en-US", "tr-TR"],
    /*
        Default locale you want to be used when visiting a non-locale prefixed path.
    */
    defaultLocale: "en-US",
  },
}

module.exports = nextConfig
