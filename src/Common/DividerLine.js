import { Divider } from '@mui/material';
import React from 'react'

const  DividerLine = () => {
  return (
    <Divider
          sx={{
            // marginTop: '15px', // Adjust spacing as needed
            borderColor: 'yellow',
            borderWidth: '5px 0.5px', // Varying thickness (left 2px, right 0.5px)
            clipPath: 'polygon(0px 0px,85px 0px,90px 5px,100% 5px,100% 6px,85px 6px,80px 10px,0px 10px)',
          }}
        />
  )
}
export default DividerLine;
