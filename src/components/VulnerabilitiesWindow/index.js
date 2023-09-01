import React from 'react';
import { Paper, Box, Grid } from '@mui/material';

// little boxes for different vulnerability categories
function ListItem({ bgcolor, title, description }) {
  return (

    // outer box with white paper
    <Box display="flex" flexDirection="column" alignItems="center">
      <Paper
        elevation={3}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '60%',
          height: 70,
          borderRadius: 3,
          padding: '30px' 
        }}
      >
        {/* vulnerability type and description as text */}
        <Box mt={2} textAlign="center">
          <div>{title}</div>
          <div>{description}</div>
        </Box>
        <Box mt={2} textAlign="center">

          {/* color bar */}
          <Paper
            sx={{
              bgcolor: bgcolor,
              borderRadius: 3,
              padding: '5px', 
              paddingLeft: '105px' 
            }}
          >
          </Paper>
        </Box>
      </Paper>
    </Box>
  );
}

// vulnerability window
function VulnerabilitiesWindow() {
  return (

    // main purple grid
    <Grid container spacing={2}>
      <Box sx={{
        justifyContent: 'center',
        display: 'flex',
        borderRadius: 3,
        margin: '80px', 
        p: 4,
        bgcolor: '#726EFF',
        width: '80%',
        ml: '8%'
      }}
      >
        <Grid container spacing={2}>

          {/* vulnerability text box */}
          <Grid item xs={12}>
            <Box>
              <Paper key={2} elevation={2} sx={{
                ml: '35%',
                mt: '-8px',
                mb: '8px',
                justifyContent: 'center',
                display: 'flex',
                width: '30%',
                padding: '6px',
                borderRadius: 3,
              }}>
                <p style={{
                  fontSize: '26px',
                  color: '#37465B',
                }}>Vulnerabilities Detected</p>
              </Paper>
            </Box>
          </Grid>

          {/* different vulnerability grids */}
          <Grid item xs={2}>
            <ListItem
              bgcolor="#980000"
              title="Critical"
              description="0"
            />
          </Grid>
          <Grid item xs={2}>
            <ListItem
              bgcolor="#FF0000"
              title="High"
              description="0"
            />
          </Grid>
          <Grid item xs={2}>
            <ListItem
              bgcolor="#FAFF00"
              title="Medium"
              description="0"
            />
          </Grid>
          <Grid item xs={2}>
            <ListItem
              bgcolor="#52FF00"
              title="Low"
              description="0"
            />
          </Grid>

          <Grid item xs={2}>
            <ListItem
              bgcolor="#959CFF"
              title="Informational"
              description="0"
            />
          </Grid>
          <Grid item xs={2}>
            <ListItem
              bgcolor="#FF81CD"
              title="Gas"
              description="0"
            />
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}

export default VulnerabilitiesWindow;