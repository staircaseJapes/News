/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
};
module.exports = nextConfig;



// OpenGraph support added
const ogMeta = {
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://naughtytimes.fake',
    site_name: 'The Naughty Times',
    images: [
      {
        url: '/images/og.png',
        width: 1200,
        height: 630,
        alt: 'The Naughty Times Logo',
      },
    ],
  },
};

module.exports = {
  ...module.exports,
  ...ogMeta
};
