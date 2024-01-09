import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import DividerLine from '../../../Common/DividerLine';
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
  SubtextTypography,
  RoundedLockIcon,
  OutlinedSecurityIcon,
  RoundedPaymentIcon,
  RoundedTrendingUpIcon,
  OutlinedRocketLaunchIcon,
} from '../../../Common/styled';

const AboutComponent = () => {
  const isLightMode = useSelector(
    (state) => state.rootReducer.sideNavbar.isLightMode
  );

  return (
    <DemoPaper islightMode={isLightMode}>
      {/* About */}
      <TitleTypo islightmode={isLightMode}>{Title1}</TitleTypo>
      <DividerLine />
      <Grid container alignItems="center" justifyContent="center" spacing={5}>
        <Grid item md={4}>
          <SubtextTypography islightmode={isLightMode}>
            {AboutText}
          </SubtextTypography>
        </Grid>
        <VerticalDividerMiddle />
        <Grid item md={4} sx={12} textAlign="start">
          <Grid container item>
            <TextDataTypo> Age: </TextDataTypo>
            <ThinVerticalDivider />
          </Grid>
          <Grid container item>
            <TextDataTypo> Residence: </TextDataTypo>
            <ThinVerticalDivider />
          </Grid>
          <Grid container item>
            <TextDataTypo> Freelance: </TextDataTypo>
            <ThinVerticalDivider />
          </Grid>
          <Grid container item>
            <TextDataTypo>Address: </TextDataTypo>
          </Grid>
        </Grid>
      </Grid>

      {/* My Services */}
      <TitleTypo islightmode={isLightMode}>{Title2}</TitleTypo>
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
              <OutlinedSecurityIcon />
            </PolyBox>
          </Grid>
          <SubTitleTypo islightmode={isLightMode}>
            {subTitle1.title}
          </SubTitleTypo>
          <SubtextTypography islightmode={isLightMode}>
            {subTitle1.text}
          </SubtextTypography>
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
              <RoundedPaymentIcon />
            </PolyBox>
          </Grid>
          <SubTitleTypo islightmode={isLightMode}>
            {subTitle2.title}
          </SubTitleTypo>
          <SubtextTypography islightmode={isLightMode}>
            {subTitle2.text},
          </SubtextTypography>
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
              <RoundedTrendingUpIcon />
            </PolyBox>
          </Grid>
          <SubTitleTypo islightmode={isLightMode}>
            {subTitle3.title}
          </SubTitleTypo>
          <SubtextTypography islightmode={isLightMode}>
            {subTitle3.text}
          </SubtextTypography>
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
              <RoundedLockIcon />
            </PolyBox>
          </Grid>
          <SubTitleTypo islightmode={isLightMode}>
            {subTitle4.title}
          </SubTitleTypo>
          <SubtextTypography islightmode={isLightMode}>
            {subTitle4.text}
          </SubtextTypography>
        </Grid>
      </Grid>

      <TitleTypo islightmode={isLightMode}>{Title3}</TitleTypo>
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
              <OutlinedRocketLaunchIcon />
            </PolyBox>
          </Grid>
          <SubtextTypography islightmode={isLightMode}>
            I have rich experience in protecting valuable digital assets,
            defending against cyber threats, and ensuring compliance with data
            protection regulations.
          </SubtextTypography>
        </Grid>
        <VerticalDividerMiddle />
        <Grid item md={4} sx={12}>
          <SubtextTypography islightmode={isLightMode}>
            Hello! I'm Hampton Ryan. I have rich experience in protecting
            valuable digital assets, defending against cyber threats, and
            ensuring compliance with data protection regulations.
          </SubtextTypography>
        </Grid>
      </Grid>
    </DemoPaper>
  );
};
export default AboutComponent;
