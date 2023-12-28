import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export const CustomShapeComponentWrapper = styled('div')({
  perspective: '30rem', // Apply perspective to the parent element
  position: 'relative',
  top: '50px',
  left: '100px',
  width: '460px',
  height: '600px',
});

export const ImageContainer = styled('div')({
  clipPath:
    'polygon(0% 2%,61% 2%,63% 0,100% 0%,100% 0%,100% 16%,98% 17%,98% 47%,100% 48%,100% 99%,100% 100%,100% 100%,26% 100%,25% 99%,12% 99%,11% 100%,0% 100%,0 64%,2% 63%,2% 10%,0% 9%,0 0%)',
  color: 'white',
  height: '100%', // Take up 100% of the parent's height
  width: '100%', // Take up 100% of the parent's width
  overflow: 'hidden',
  transform: 'rotateY(5deg)',
  backdropFilter: 'blur(8px)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const Image = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const Overlay = styled('div')({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: '30%',
  background:
    'linear-gradient(305deg, rgba(4,25,29,0) 0%, rgb(1 9 15/90%) 100%)',
  backdropFilter: 'blur(10px)',
  zIndex: 1,
});

export const HeroDetails = styled('div')({
  textAlign: 'center',
  position: 'absolute',
  bottom: '-24px',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 2,
});

export const PersonalDetails = styled('div')({
  position: 'relative',
  bottom: '13px',
});

export const HeroName = styled('h1')({
  fontSize: '36px',
  marginBottom: '10px',
  width: '500px',
});

export const HeroProfession = styled('h3')({
  fontSize: '18px',
  marginBottom: '20px',
  margin: 'auto',
  color: 'white',
  textShadow: '5px 2px #222324, 2px 4px #222324, 3px 5px #222324',
});

export const SocialIcons = styled('div')({
  marginBottom: '20px',
  marginTop: '20px',
});

export const DownloadButton = styled(Button)({
  marginBottom: '40px',
  position: 'relative',
  top: '0px',
  bottom: '20px',
});

export const WhiteIcon = styled('span')({
  color: 'white',
});

export const MBBox = styled(Box)`
  margin-bottom: 4px;
`;
