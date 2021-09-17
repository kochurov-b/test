import React from 'react';
import NextHead from 'next/head';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';

export default function Index() {
  return (
    <div
      style={{
        position: 'relative',
        height: '300vh',
      }}
    >
      <NextHead>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1, maximum-scale=1, user-scalable=0"
        />
      </NextHead>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js example
          </Typography>
          <Link href="/about" color="secondary">
            Go to the about page
          </Link>
          <ProTip />
          <Copyright />
        </Box>
        <div
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            paddingBottom: 'env(safe-area-inset-bottom)',
          }}
        >
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => alert('Click')}
          >
            Click
          </Button>
        </div>
      </Container>
    </div>
  );
}
