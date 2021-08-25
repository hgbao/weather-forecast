import Head from 'next/head';

const PageTitle = ({ title }) => {
  return (
    <Head>
      <title>WeatherForecast - {title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default PageTitle;
