import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SendIcon from '@mui/icons-material/SendOutlined';
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeIcon from '@mui/icons-material/LightModeOutlined';
import SummarizeIcon from '@mui/icons-material/SummarizeOutlined';
import FolderOpenIcon from '@mui/icons-material/FolderOpenOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutlineOutlined';
import {
  IconGrid,
  IconOuterBox,
  IconOuterGrid,
  StyledIcon,
} from '../../../Common/styled';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';

const SideNavbar = () => {
  const [isLightMode, setIsLightMode] = useState(true);

  const handleClick = () => {
    setIsLightMode((prevMode) => !prevMode);
  };
  return (
    <IconOuterBox>
      <IconOuterGrid container>
        <IconGrid item islightmode={isLightMode} xs={3} md={12} sm={12}>
          <StyledIcon islightmode={isLightMode}>
            <MenuIcon />
          </StyledIcon>
          <StyledIcon onClick={handleClick} islightmode={isLightMode}>
            {isLightMode ? <LightModeIcon /> : <DarkModeIcon />}
          </StyledIcon>
        </IconGrid>
        <IconGrid item islightmode={isLightMode} xs={9} sm={12} md={12}>
          {[
            PersonOutlineIcon,
            SummarizeIcon,
            FolderOpenIcon,
            AutoAwesomeMosaicIcon,
            SendIcon,
          ].map((Icon, index) => (
            <StyledIcon key={index} islightmode={isLightMode}>
              <Icon />
            </StyledIcon>
          ))}
        </IconGrid>
      </IconOuterGrid>
    </IconOuterBox>
  );
};

export default SideNavbar;
