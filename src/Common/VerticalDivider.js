import * as React from 'react';
import Divider from '@mui/material/Divider';
import { Box, Grid } from '@mui/material';

export const VerticalDividerMiddle = () => {
  return (
    <Grid item>
    <Divider
      orientation="vertical"
      sx={{
        marginLeft: '8px', 
        borderColor: 'yellow',
        borderWidth: '-0.5px',
        height: '300px', 
      }}
    />
  </Grid>
  );
}
export const ThinVerticalDivider = () => {
  return (
    <Grid container>
      <Divider orientation="horizontal"
       sx={{
        marginTop: '10PX',
        borderColor: 'rgba(255,255,255,.55)',
        borderWidth: '-0.1px',
        width: '100%',
        marginLeft: '30px',
        background: 'radial-gradient(ellipse at center,rgba(197,202,213,.15) 0%,rgba(255,255,255,0) 70%)'
      }}
      />
    </Grid>
  )}

    export const HorizontalDividerMiddle1 = () =>{
      return (
      <Divider orientation="horizontal"
            sx={{
              borderColor: 'yellow',
              borderWidth: '-0.5px',
              mt: 1,
              width: '380px',
              marginLeft: '-33px'
            }}
          />
      )}

      export const HorizontalDividerMiddle2 = () =>{
        return (
        <Divider orientation="horizontal"
        sx={{
          borderColor: 'yellow',
          borderWidth: '-0.5px',
          width: '395px',
        }}
      />
        )}