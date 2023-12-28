import React from 'react';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GetAppIcon from '@mui/icons-material/GetApp';
import CustomShapeImage from '../../Assets/Images/hero.png';
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
  SocialIcons,
  WhiteIcon,
} from '../../Common/styled';
import { Typography } from '@mui/material';

// Create a styled component for the entire CustomShapeComponent

const CustomShapeComponent = () => {
  return (
    <CustomShapeComponentWrapper>
      <ImageContainer>
        <Image src={CustomShapeImage} alt='Your Image' />
        <Overlay />
        <HeroDetails>
          <PersonalDetails>
            <Typography variant='h5'>KUNG-FU PANDA</Typography>
            <MBBox />
            <HeroProfession>software developer</HeroProfession>
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
          <DownloadButton
            variant='text'
            color='primary'
            endIcon={<GetAppIcon />}
          >
            Download Resume
          </DownloadButton>
        </HeroDetails>
      </ImageContainer>
    </CustomShapeComponentWrapper>
  );
};

export default CustomShapeComponent;
