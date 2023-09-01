import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// create color palette theme
const defaultTheme = createTheme({
    palette: {
        primary: {
            main: '#726EFF',
        },
    },
});

export default function ContactForm() {
    return (
        <div style={{ marginLeft: '300px', marginRight: '300px' }}>

            {/* set color theme */}
            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />

                    {/* main contact page box */}
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        {/* contact us text */}
                        <h1 style={{
                            fontSize: '2em',
                            color: '#726EFF',
                            textAlign: 'center',
                            marginTop: '90px'
                        }}>Contact Us</h1>
                        <Box component="form" noValidate sx={{ mt: 3 }}>
                            <Grid container spacing={2}>

                                {/* lists of text fields */}
                                <Grid item xs={8}>
                                    <TextField
                                        autoComplete="name"
                                        name="name"
                                        required
                                        fullWidth
                                        id="name"
                                        label="Name"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        multiline
                                        name="message"
                                        label="Message details"
                                        id="message"
                                        minRows={4}
                                        maxRows={6}
                                    />
                                </Grid>
                            </Grid>

                            {/* submit button */}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Send Mail
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </div>
    );
}