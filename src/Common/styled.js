import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const WrapperContainer = styled('div')({
  backgroundColor: 'black',
});

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
  width: '500px',
});

export const HeroName = styled(Typography)`
  font-family: 'Roboto', sans-serif; /* Replace "Your Custom Font" with your desired font */
  font-weight: 700;
  font-size: 2.5rem;
  font-weight: 400;
`;

export const HeroProfession = styled(Typography)`
  overflow: hidden;
  display: inline-block;
  border-right: 0.15em solid orange; /* Adjust the border styling as needed */
  white-space: nowrap;
  margin: 0;
  letter-spacing: 0.1em; /* Adjust the letter spacing as needed */
  animation: typing 3s steps(30, end);
  font-size: 1.125rem;

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;

export const SocialIcons = styled('div')({
  marginBottom: '20px',
  marginTop: '20px',
});

export const DownloadButton = styled(Button)({
  marginBottom: '40px',
  position: 'relative',
  top: '0px',
  bottom: '20px',
  color: 'white',
});

export const WhiteIcon = styled('span')({
  color: 'white',
});

export const MBBox = styled(Box)`
  margin-bottom: 4px;
`;

export const StyledIcon = styled(Grid)`
  width: 64px;
  height: 48px;
  margin-bottom: 4px;
  cursor: pointer;
  color: ${(props) => (props.islightmode ? 'white' : 'black')};
  @media (max-width: 600px) {
    padding-top: 12px;
  }
`;

export const IconGrid = styled(Grid)`
  margin-bottom: 5px;
  background-color: ${(props) => (props.islightmode ? 'black' : 'white')};
  @media (max-width: 600px) {
    display: flex;
    align-items: center;
  }
`;

export const IconOuterBox = styled(Box)`
  border: 2px solid #ffff00;
  /* border: 2px solid red; */
  transform: rotateY(16deg);
`;

export const SidebarGrid = styled(Grid)`
  position: absolute;
  left: 56px;
  top: 88px;
  display: flex;
  z-index: 1;
  width: min-content;
  transform: skewY(-4deg);
  @media (max-width: 600px) {
    /* left: 0; // Change the styles for small screens
    top: 0; */
  }
`;

export const IconOuterGrid = styled(Grid)`
  perspective: 30rem;
  position: relative;
  bottom: 12px;
  left: 8px;
`;

export const TitleTypo = styled(Typography)({
  color: 'white',
  fontSize: '25px',
  fontFamily: 'Syne',
  position: 'relative',
  textAlign: 'left',
  margin: '8px',
  fontWeight: 700,
  paddingBottom: '10px',
});
export const SubTitleTypo = styled(Typography)({
  color: 'white',
  fontSize: '20px',
  fontFamily: 'Syne',
  position: 'relative',
  textAlign: 'left',
  margin: '8px',
  fontWeight: 500,
  paddingBottom: '10px',
  textAlign: 'center',
});

export const DemoPaper = styled(Paper)(({ isLightMode }) => ({
  width: "800px",
  height: '665px',
  background: isLightMode ? 'black' : 'white',
  overflowY: 'scroll',
  marginLeft: '580px',
  color: 'yellow',
  marginTop: '-555px',
}));

export const PolyBox = styled(Box)(({ theme }) => ({
  height: '60px',
  width: '55px',
  backgroundColor: 'yellow',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  clipPath: 'polygon(15% 0%,100% 0%,85% 100%,0% 100%)',
}));

export const TextDataTypo = styled(Typography)({
  background: 'yellow',
  color: 'black',
  width: '80px',
  clipPath: 'polygon(5% 0%,100% 0%,95% 100%,0% 100%)',
  marginTop: '10px',
  marginLeft: '20px',
});

export const TextDataTypo1 = styled(Typography)({
  background: 'yellow',
  color: 'black',
  width: '110px',
  clipPath: 'polygon(5% 0%,100% 0%,95% 100%,0% 100%)',
  marginTop: '10px',
  marginLeft: '10px',
});
