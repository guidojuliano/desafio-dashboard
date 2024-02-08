import '../styles/globals.css';
import type { AppProps } from 'next/app';
import MainLayout from '../layout/MainLayout';
import { ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';
import muiTheme from '../styles/muiTheme';
import GoogleAnalytics from '../GoogleAnalytics';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={muiTheme}>
          <GoogleAnalytics />
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
