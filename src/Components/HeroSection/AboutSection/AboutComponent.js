import { styled } from "@mui/system";
import Paper from '@mui/material/Paper';
import { Divider, Grid, Typography, Scrollbar, Box } from "@mui/material";
import DividerLine from "../../../Common/DividerLine";
import MuiGrid from '@mui/material/Grid'
import { VerticalDividerMiddle, ThinVerticalDivider, HorizontalDividerMiddle, HorizontalDividerMiddle2, HorizontalDividerMiddle1 } from "../../../Common/VerticalDivider";
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import PaymentRoundedIcon from '@mui/icons-material/PaymentRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import { TitleTypo, SubTitleTypo, DemoPaper, PolyBox, TextDataTypo, TextDataTypo1 } from "../../../Common/styled";
import { AboutText, Title1, Title2, Title3, subTitle1, subTitle2, subTitle3, subTitle4 } from "../../../Utils/Consts";

const AboutComponent = () => {
  return (
    <DemoPaper>

  {/* About */}
      <TitleTypo variant="h4">
        {Title1}
      </TitleTypo>
      <DividerLine />
      <Grid container alignItems="center" justifyContent="center" spacing={5}>
        <Grid item 
        md={4}
        // style={{ width: '300px' }}
        >
          <Typography variant="body1" style={{ color: 'rgba(255,255,255,.55)',textAlign:'center' }} >
            {AboutText}
          </Typography>
        </Grid>
        <VerticalDividerMiddle />
        <Grid item md={4}>
          <Grid container spacing={1}>
            <TextDataTypo > Age: </TextDataTypo>
            <ThinVerticalDivider />
          </Grid>
          <Grid container >
            <TextDataTypo1> Residence: </TextDataTypo1>
            <ThinVerticalDivider />
          </Grid>
          <Grid container  >
            <TextDataTypo1> Freelance: </TextDataTypo1>
            <ThinVerticalDivider />
          </Grid>
          <Grid container  >
            <TextDataTypo1>Address: </TextDataTypo1>
          </Grid>
        </Grid>
      </Grid>

{/* My Services */}
      <TitleTypo variant="h4" >
        {Title2}
      </TitleTypo>
      <DividerLine />
      <Grid container alignItems="center" justifyContent="center" spacing={4}>
        <Grid item md={4}>
          <Grid container alignItems="center" justifyContent="center" spacing={2}>
            <PolyBox>
              <SecurityOutlinedIcon fontSize="large" style={{ color: 'black' }} />
            </PolyBox>
          </Grid>
          <SubTitleTypo variant="h4" >
            {subTitle1.title}
          </SubTitleTypo>
          <Typography variant="body1" style={{ color: 'rgba(255,255,255,.55)',}}>
            {subTitle1.text}
          </Typography>
        </Grid>

        <VerticalDividerMiddle style={{ height: '300px' }} />

        <Grid item md={4}>
          <Grid container alignItems="center" justifyContent="center" spacing={2}>
            <PolyBox>
              <PaymentRoundedIcon fontSize="large" style={{ color: 'black' }} />
            </PolyBox>
          </Grid>
          <SubTitleTypo variant="h4">
            {subTitle2.title}
          </SubTitleTypo>
          <Typography variant="body1" style={{ color: 'rgba(255,255,255,.55)',}}>
            {subTitle2.text},
          </Typography>
          <HorizontalDividerMiddle1/>
        </Grid>
      </Grid>
     
      <HorizontalDividerMiddle2/>

      <Grid container alignItems="center" justifyContent="center" spacing={2}>
        <Grid item md={4}>
          <Grid container alignItems="center" justifyContent="center" spacing={2}>
            <PolyBox>
              <TrendingUpRoundedIcon fontSize="large" style={{ color: 'black' }} />
            </PolyBox>
          </Grid>
          <SubTitleTypo variant="h4">
            {subTitle3.title}
          </SubTitleTypo>
          <Typography variant="body1" style={{ color: 'rgba(255,255,255,.55)' }}>
            {subTitle3.text}
          </Typography>
        </Grid>

        <VerticalDividerMiddle />

        <Grid item md={4}>
          <Grid container alignItems="center" justifyContent="center" spacing={2}>
            <PolyBox>
              <LockRoundedIcon fontSize="large" style={{ color: 'black' }} />
            </PolyBox>
          </Grid>
          <SubTitleTypo variant="h4">
            {subTitle4.title}
          </SubTitleTypo>
          <Typography variant="body1" style={{ color: 'rgba(255,255,255,.55)' }}>
            {subTitle4.text}
          </Typography>
        </Grid>
      </Grid>

      <TitleTypo variant="h4">
        {Title3}
      </TitleTypo>
      <DividerLine />
      <Grid container alignItems="center" justifyContent="center" spacing={2}>
        <Grid item md={4}>
        <Grid container alignItems="center" justifyContent="center" spacing={2}>
        <PolyBox>
          <RocketLaunchOutlinedIcon fontSize="large" style={{ color: 'black' }}/>
          </PolyBox>
          </Grid>
          <Typography variant="body1" style={{ color: 'rgba(255,255,255,.55)' }}>
           I have rich experience in protecting valuable digital assets, defending against cyber threats, and ensuring compliance with data protection regulations.
          </Typography>
        </Grid>
        <VerticalDividerMiddle />
        <Grid item md={4}>
          <Typography variant="body1" style={{ color: 'rgba(255,255,255,.55)' }}>
            Hello! I’m Hampton Ryan. I have rich experience in protecting valuable digital assets, defending against cyber threats, and ensuring compliance with data protection regulations.
          </Typography>
        </Grid>
      </Grid>
    </DemoPaper>
  )
}
export default AboutComponent;
