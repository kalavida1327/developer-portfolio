import React from 'react';
import Grid from '@mui/material/Grid';
import SideNavbar from './SideNavbar/SideNavbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import GetAppIcon from '@mui/icons-material/GetApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import CustomShapeImage from '../../Assets/Images/Hero1.jpg';
import {
  CustomShapeComponentWrapper,
  DownloadButton,
  HeroDetails,
  HeroName,
  HeroProfession,
  Image,
  ImageContainer,
  MBBox,
  Overlay,
  PersonalDetails,
  SidebarGrid,
  SocialIcons,
  WhiteIcon,
} from '../../Common/styled';
import DividerLine from '../../Common/DividerLine';
import TextAnimation from '../../Common/TextAnimation';

// Create a styled component for the entire CustomShapeComponent

const CustomShapeComponent = () => {
  const words = ['Software_Developer', 'Web_Developer'];
  return (
    <Grid container>
      <SidebarGrid item xs={12} sm={4} md={12}>
        <SideNavbar />
      </SidebarGrid>
      <Grid item xs={12} sm={8} md={12}>
        <CustomShapeComponentWrapper>
          <ImageContainer>
            <Image src={CustomShapeImage} alt='Your Image' />
            <Overlay />
            <HeroDetails>
              <PersonalDetails>
                <HeroName variant='h5'>Hampton Ryan </HeroName>
                <MBBox />
                <TextAnimation words={words}></TextAnimation>
                <SocialIcons>
                  <IconButton color='primary' aria-label='instagram'>
                    <WhiteIcon>
                      <InstagramIcon />
                    </WhiteIcon>
                  </IconButton>
                  <IconButton color='primary' aria-label='linkedin'>
                    <WhiteIcon>
                      <LinkedInIcon />
                    </WhiteIcon>
                  </IconButton>
                  <IconButton color='primary' aria-label='youtube'>
                    <WhiteIcon>
                      <YouTubeIcon />
                    </WhiteIcon>
                  </IconButton>
                </SocialIcons>
              </PersonalDetails>
              <DividerLine />

              <DownloadButton variant='text' endIcon={<GetAppIcon />}>
                Download Resume
              </DownloadButton>
            </HeroDetails>
          </ImageContainer>
        </CustomShapeComponentWrapper>
      </Grid>
    </Grid>
  );
};

export default CustomShapeComponent;
