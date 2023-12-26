import React from 'react';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GetAppIcon from '@mui/icons-material/GetApp';
import CustomShapeImage from '../../Assets/Images/hero.png';
import { dev_profession } from '../../Common/Const';
import TextAnimation from '../../Common/TextAnimation';

// Create a styled component for the entire CustomShapeComponent
const CustomShapeComponentWrapper = styled('div')({
    perspective: '30rem', // Apply perspective to the parent element
  position: 'relative',
  top: '50px',
  left: '100px',
  width: '370px',
  height: '600px',
});

const ImageContainer = styled('div')({
 clipPath: 'polygon(0% 2%,61% 2%,63% 0,100% 0%,100% 0%,100% 16%,98% 17%,98% 47%,100% 48%,100% 99%,100% 100%,100% 100%,26% 100%,25% 99%,12% 99%,11% 100%,0% 100%,0 64%,2% 63%,2% 10%,0% 9%,0 0%)',
  color: 'white',
  height: '100%', // Take up 100% of the parent's height
  width: '100%',  // Take up 100% of the parent's width
  overflow: 'hidden',
  transform: 'rotateY(5deg)',
  backdropFilter: 'blur(8px)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const Image = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const Overlay = styled('div')({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: '30%',
  background: 'linear-gradient(305deg, rgba(4,25,29,0) 0%, rgb(1 9 15/90%) 100%)',
  backdropFilter: 'blur(10px)',
  zIndex: 1,
});

const HeroDetails = styled('div')({
  textAlign: 'center',
  position: 'absolute',
  bottom: '-24px',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 2,
});

const HeroName = styled('h1')({
  fontSize: '36px',
  marginBottom: '10px',
  width: '500px',
});

const HeroProfession = styled('h3')({
  fontSize: '18px',
  marginBottom: '20px',
   margin: "auto",
  color: "white",
  font: '700 normal 2.5em tahoma',
  textShadow: '5px 2px #222324, 2px 4px #222324, 3px 5px #222324'
});

const SocialIcons = styled('div')({
  marginBottom: '20px',
});

const DownloadButton = styled(Button)({
  marginBottom: '40px',
  position: 'relative',
  top:'0px',
  bottom: '20px',
  '& .MuiButton-label': {
    fill: '#0072ea',
  },
});

const CustomShapeComponent = () => {
  return (
    <CustomShapeComponentWrapper>
      <ImageContainer>
        <Image src={CustomShapeImage} alt="Your Image" />
        <Overlay />
        <HeroDetails>
          <div>
            <HeroName>kungfu panda</HeroName>
            <HeroProfession>software developer</HeroProfession>
            <SocialIcons>
              <IconButton color="primary" aria-label="instagram">
                <InstagramIcon />
              </IconButton>
              <IconButton color="primary" aria-label="linkedin">
                <LinkedInIcon />
              </IconButton>
              <IconButton color="primary" aria-label="youtube">
                <YouTubeIcon />
              </IconButton>
            </SocialIcons>
          </div>
          <DownloadButton
            variant="text"
            color="primary"
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
