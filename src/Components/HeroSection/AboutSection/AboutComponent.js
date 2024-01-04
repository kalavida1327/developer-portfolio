import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DividerLine from '../../../Common/DividerLine';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import PaymentRoundedIcon from '@mui/icons-material/PaymentRounded';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import {
  VerticalDividerMiddle,
  ThinVerticalDivider,
  HorizontalDividerMiddle2,
  HorizontalDividerMiddle1,
} from '../../../Common/VerticalDivider';
import {
  TitleTypo,
  SubTitleTypo,
  DemoPaper,
  PolyBox,
  TextDataTypo,
  TextDataTypo1,
} from '../../../Common/styled';
import {
  AboutText,
  Title1,
  Title2,
  Title3,
  subTitle1,
  subTitle2,
  subTitle3,
  subTitle4,
} from '../../../Utils/Consts';
import { useSelector } from 'react-redux';

const AboutComponent = () => {
  const isLightMode = useSelector(
    (state) => state.rootReducer.sideNavbar.isLightMode
  );

  return (
    <DemoPaper isLightMode={isLightMode}>
      {/* About */}
      <TitleTypo
        variant="h4"
        style={{ color: isLightMode ? 'rgba(255,255,255,.55)' : 'black' }}
      >
        {Title1}
      </TitleTypo>
      <DividerLine />
      <Grid container alignItems="center" justifyContent="center" spacing={5}>
        <Grid item md={4}>
          <Typography
            variant="body1"
            style={{
              color: isLightMode ? 'rgba(255,255,255,.55)' : 'black',
              textAlign: 'center',
            }}
          >
            {AboutText}
          </Typography>
        </Grid>
        <VerticalDividerMiddle />
        <Grid item md={4} sx={12}>
          <Grid container spacing={1}>
            <TextDataTypo> Age: </TextDataTypo>
            <ThinVerticalDivider />
          </Grid>
          <Grid container>
            <TextDataTypo1> Residence: </TextDataTypo1>
            <ThinVerticalDivider />
          </Grid>
          <Grid container>
            <TextDataTypo1> Freelance: </TextDataTypo1>
            <ThinVerticalDivider />
          </Grid>
          <Grid container>
            <TextDataTypo1>Address: </TextDataTypo1>
          </Grid>
        </Grid>
      </Grid>

      {/* My Services */}
      <TitleTypo
        variant="h4"
        style={{ color: isLightMode ? 'rgba(255,255,255,.55)' : 'black' }}
      >
        {Title2}
      </TitleTypo>
      <DividerLine />
      <Grid container alignItems="center" justifyContent="center" spacing={4}>
        <Grid item md={4} sx={12}>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            <PolyBox>
              <SecurityOutlinedIcon
                fontSize="large"
                style={{ color: 'black' }}
              />
            </PolyBox>
          </Grid>
          <SubTitleTypo
            variant="h4"
            style={{ color: isLightMode ? 'rgba(255,255,255,.55)' : 'black' }}
          >
            {subTitle1.title}
          </SubTitleTypo>
          <Typography
            variant="body1"
            style={{ color: isLightMode ? 'rgba(255,255,255,.55)' : 'black' }}
          >
            {subTitle1.text}
          </Typography>
        </Grid>

        <VerticalDividerMiddle style={{ height: '300px' }} />

        <Grid item md={4} sx={12}>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            <PolyBox>
              <PaymentRoundedIcon fontSize="large" style={{ color: 'black' }} />
            </PolyBox>
          </Grid>
          <SubTitleTypo
            variant="h4"
            style={{ color: isLightMode ? 'rgba(255,255,255,.55)' : 'black' }}
          >
            {subTitle2.title}
          </SubTitleTypo>
          <Typography
            variant="body1"
            style={{ color: isLightMode ? 'rgba(255,255,255,.55)' : 'black' }}
          >
            {subTitle2.text},
          </Typography>
          <HorizontalDividerMiddle1 />
        </Grid>
      </Grid>

      <HorizontalDividerMiddle2 />

      <Grid container alignItems="center" justifyContent="center" spacing={2}>
        <Grid item md={4} sx={12}>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            <PolyBox>
              <TrendingUpRoundedIcon
                fontSize="large"
                style={{ color: 'black' }}
              />
            </PolyBox>
          </Grid>
          <SubTitleTypo
            variant="h4"
            style={{ color: isLightMode ? 'rgba(255,255,255,.55)' : 'black' }}
          >
            {subTitle3.title}
          </SubTitleTypo>
          <Typography
            variant="body1"
            style={{ color: isLightMode ? 'rgba(255,255,255,.55)' : 'black' }}
          >
            {subTitle3.text}
          </Typography>
        </Grid>

        <VerticalDividerMiddle />

        <Grid item md={4} sx={12}>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            <PolyBox>
              <LockRoundedIcon fontSize="large" style={{ color: 'black' }} />
            </PolyBox>
          </Grid>
          <SubTitleTypo
            variant="h4"
            style={{ color: isLightMode ? 'rgba(255,255,255,.55)' : 'black' }}
          >
            {subTitle4.title}
          </SubTitleTypo>
          <Typography
            variant="body1"
            style={{ color: isLightMode ? 'rgba(255,255,255,.55)' : 'black' }}
          >
            {subTitle4.text}
          </Typography>
        </Grid>
      </Grid>

      <TitleTypo
        variant="h4"
        sx={12}
        style={{ color: isLightMode ? 'rgba(255,255,255,.55)' : 'black' }}
      >
        {Title3}
      </TitleTypo>
      <DividerLine />
      <Grid container alignItems="center" justifyContent="center" spacing={2}>
        <Grid item md={4}>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            <PolyBox>
              <RocketLaunchOutlinedIcon
                fontSize="large"
                style={{ color: 'black' }}
              />
            </PolyBox>
          </Grid>
          <Typography
            variant="body1"
            style={{ color: isLightMode ? 'rgba(255,255,255,.55)' : 'black' }}
          >
            I have rich experience in protecting valuable digital assets,
            defending against cyber threats, and ensuring compliance with data
            protection regulations.
          </Typography>
        </Grid>
        <VerticalDividerMiddle />
        <Grid item md={4} sx={12}>
          <Typography
            variant="body1"
            style={{ color: isLightMode ? 'rgba(255,255,255,.55)' : 'black' }}
          >
            Hello! I’m Hampton Ryan. I have rich experience in protecting
            valuable digital assets, defending against cyber threats, and
            ensuring compliance with data protection regulations.
          </Typography>
        </Grid>
      </Grid>
    </DemoPaper>
  );
};
export default AboutComponent;
