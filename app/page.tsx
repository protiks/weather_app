'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import AppUI from '@/Components/AppUI';

const queryClient = new QueryClient()
const theme = createTheme({
  palette: {
    primary: {
      main: '#03594F',
    },
    secondary: {
      main: '#C5F7EE',
    },
  },
});



const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AppUI />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </ThemeProvider >
  )
}

export default Home
