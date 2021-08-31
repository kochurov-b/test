import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';

export default function About({slug}) {
  return (
    <Container maxWidth="sm">
      <Typography>{slug}</Typography>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Button variant="contained" color="primary" component={Link} naked href="/">
          Go to the main page
        </Button>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}

export const getStaticPaths = async () => {
  const listings = ['1', '2', '3', '4' ,'5']

  await new Promise(res => setTimeout(res, 5000))

  return {
    fallback: true,
    paths: listings.map((slug) => ({
      params: {
        slug,
      },
    })),
  };
};

export const getStaticProps = async (ctx) => {
  try {
    const slug = ctx.params.slug;

    return {
      revalidate: 10000,
      props: {
        slug
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};