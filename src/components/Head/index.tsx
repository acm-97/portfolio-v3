import { Helmet } from 'react-helmet';
import { memo } from 'react';

import { SITE_URL, TWITER } from '@/constants';
import { useTranslation } from 'react-i18next';

type HeadProps = { title?: string | undefined };

const Head = ({ title = '' }: HeadProps) => {
  const twitterUsername = (TWITER as string).split('/');
  const { i18n } = useTranslation();

  const seo = {
    title: 'Portfolio.v3',
    description: 'A showcase of my history, my work and my skills as a web developer.',
    image: `${SITE_URL as string}/portfolio-v3.png`,
    url: SITE_URL,
    twitterUsername: twitterUsername[twitterUsername.length - 1],
  };

  return (
    <Helmet title={title} defaultTitle={seo.title} titleTemplate={title ? `%s | ${seo.title}` : seo.title}>
      <html lang={i18n.language} />

      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      {/* <meta name="google-site-verification" content="DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk" /> */}
    </Helmet>
  );
};

export default memo(Head);
