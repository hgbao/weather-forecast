import Head from 'next/head';
import PropTypes from 'prop-types';

const PageTitle = ({ title }) => {
  return (
    <Head>
      <title>WeatherForecast - {title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
