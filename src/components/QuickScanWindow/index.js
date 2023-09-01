import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import UploadButton from './UploadButton';
import ScanButton from './ScanButton';

function QuickScanWindow() {
    return (
        <div>
            {/* set main grid and turquoise box */}
            <Grid container item xs={12} justifyContent="center">
                <Box
                    sx={{
                        justifyContent: 'center',
                        borderRadius: 3,
                        mt: '60px', 
                        p: 5,
                        pt: 3,
                        pb: 5,
                        bgcolor: '#5AFFE7',
                        display: 'grid',
                    }}
                >

                    {/* set quick scan text box */}
                    <Grid item xs={12}>
                        <Paper key={2} elevation={2} sx={{
                            p: 1,
                            pl: 10,
                            pr: 10,
                        }}>
                            <h1 style={{
                                fontSize: '3em',
                                color: '#726EFF',
                            }}>Quick Scan</h1>
                        </Paper>
                    </Grid>
                    <Box sx={{
                        justifyContent: 'center',
                        display: 'flex',
                        marginTop: 7,
                    }}>

                        {/* upload button group */}
                        <Grid container item xs={6} style={{
                            justifyContent: 'center',
                            display: 'flex',
                        }}>
                            <UploadButton />
                        </Grid>

                        {/* scan button group */}
                        <Grid container item xs={6} style={{
                            justifyContent: 'center',
                            display: 'flex',
                        }}>
                            <ScanButton />
                        </Grid>
                    </Box>
                </Box>

            </Grid>


        </div>
    );
}

export default QuickScanWindow;
