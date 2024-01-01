import { styled } from "@mui/system";
import Paper from '@mui/material/Paper';
import { Divider, Grid, Typography,Scrollbar } from "@mui/material";
import DividerLine from "../../../Common/DividerLine";
import MuiGrid from '@mui/material/Grid'
import VerticalDividerMiddle from "../../../Common/VerticalDivider";
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import PaymentRoundedIcon from '@mui/icons-material/PaymentRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';


const DemoPaper = styled(Paper)({
  width: "800px",
  height: '665px',
  background: 'black',
  overflowY: 'scroll', 
  marginLeft:"580px",
  color:'yellow',
  marginTop:'-555px'
});  
  
const  AboutComponent = () => {
  return (
    <DemoPaper>
      <Typography variant="h4" style={{ color: 'white', fontSize: '25px', fontfamily: 'Syne', position: 'relative', textAlign: 'left', margin: '8px', fontWeight: 700 ,paddingBottom:'10px'}} >About Me</Typography >
      <DividerLine />
      <Grid container alignItems="center" justifyContent="center" spacing={2}>
        <Grid item style={{ width: '300px' }}>
          <Typography variant="body1"> Hello! I’m ANANYA H C.
            I have rich experience in protection valuable digital assets, defend against cyber threats, and ensure compliance with data protection regulations.</Typography>
        </Grid>
        <VerticalDividerMiddle />
        <Grid item style={{ width: '300px' }}>
          <Typography variant="body1">Hello! I’m Hampton Ryan.
            I have rich experience in protection valuable digital assets, defend against cyber threats, and ensure compliance with data protection regulations.t</Typography>
        </Grid>
      </Grid>
      <Typography variant="h4" style={{ color: 'white', fontSize: '25px', fontfamily: 'Syne', position: 'relative', textAlign: 'left', margin: '8px', fontWeight: 700, paddingBottom:'15px' }} >My Services</Typography > 
      <DividerLine />
      <Grid container alignItems="center" justifyContent="center" spacing={2}>
        <Grid item style={{ width: '300px' }}>
          <SecurityOutlinedIcon fontSize="large"/>
          <Typography variant="body1"> Hello! I’m ANANYA H C.
            I have rich experience in protection valuable digital assets, defend against cyber threats, and ensure compliance with data protection regulations.</Typography>
        </Grid>
        <VerticalDividerMiddle style={{ height: '300px' }} />
        <Grid item style={{ width: '300px' }}>
          <PaymentRoundedIcon fontSize="large"/>
          <Typography variant="body1">Hello! I’m Hampton Ryan.
            I have rich experience in protection valuable digital assets, defend against cyber threats, and ensure compliance with data protection regulations.t</Typography>
        </Grid>
      </Grid>
      {/* <Typography variant="h4" style={{ color: 'white', fontSize: '25px', fontfamily: 'Syne', position: 'relative', textAlign: 'left', margin: '8px', fontWeight: 700 ,paddingBottom:'10px'}} >About Me</Typography > */}
      {/* <DividerLine /> */}
      <Grid container alignItems="center" justifyContent="center" spacing={2}>
        <Grid item style={{ width: '300px' }}>
          {/* <LockRoundedIcon/> */}
          <Typography variant="body1"> Hello! I’m ANANYA H C.
            I have rich experience in protection valuable digital assets, defend against cyber threats, and ensure compliance with data protection regulations.</Typography>
        </Grid>
        <VerticalDividerMiddle />
        <Grid item style={{ width: '300px' }}>
        <LockRoundedIcon fontSize="large"/>
          <Typography variant="body1">Hello! I’m Hampton Ryan.
            I have rich experience in protection valuable digital assets, defend against cyber threats, and ensure compliance with data protection regulations.t</Typography>
        </Grid>
      </Grid>
      <Typography variant="h4" style={{ color: 'white', fontSize: '25px', fontfamily: 'Syne', position: 'relative', textAlign: 'left', margin: '8px', fontWeight: 700 ,paddingBottom:'10px'}} >Pricing</Typography >
      <DividerLine />
      <Grid container alignItems="center" justifyContent="center" spacing={2}>
        <Grid item style={{ width: '300px' }}>
          <Typography variant="body1"> Hello! I’m ANANYA H C.
            I have rich experience in protection valuable digital assets, defend against cyber threats, and ensure compliance with data protection regulations.</Typography>
        </Grid>
        <VerticalDividerMiddle />
        <Grid item style={{ width: '300px' }}>
          <Typography variant="body1">Hello! I’m Hampton Ryan.
            I have rich experience in protection valuable digital assets, defend against cyber threats, and ensure compliance with data protection regulations.t</Typography>
        </Grid>
      </Grid>

      
    </DemoPaper>
  )
}
export default AboutComponent;
