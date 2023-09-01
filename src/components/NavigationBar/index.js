// code reference: https://mui.com/material-ui/react-app-bar/#app-bar-with-responsive-menu
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ViewArrayTwoToneIcon from '@mui/icons-material/ViewArrayTwoTone';

// list of pages
const pages = [
  { title: 'SCAN', url: '/scan' },
  { title: 'HISTORY', url: '/history' },
  { title: 'ABOUT US', url: '/aboutus' },
  { title: 'CONTACT', url: '/contact' },
];

function ResponsiveAppBar() {

  // create color palette theme
  const theme = createTheme({
    palette: {
      primary: {
        main: '#5AFFE7',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>

            {/* logo */}
            <ViewArrayTwoToneIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

            {/* group name */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/home"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                marginLeft: '4px',
              }}
            >
              2-47
            </Typography>

            {/* navigation pages buttons */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, color: 'inherit' }}>
              {pages.map((page) => (
                <Button
                  key={page.title}
                  href={page.url}
                  sx={{ my: 2, color: 'black', display: 'block', marginLeft: '1em' }}
                >
                  {page.title}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;
