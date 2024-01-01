import * as React from 'react';
import Divider from '@mui/material/Divider';
import { Box, Grid } from '@mui/material';

export default function VerticalDividerMiddle() {
  return (
    <Grid item>
    <Divider
      orientation="vertical"
      sx={{
        marginLeft: '8px', // Adjust spacing as needed
        borderColor: 'yellow',
        borderWidth: '1px', // Thickness of the vertical divider
        height: '200px', 
      }}
    />
  </Grid>
  );
}