import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import SendIcon from '@mui/icons-material/SendOutlined';
import { setIsLightMode } from './store/sideNavbarSlice';
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeIcon from '@mui/icons-material/LightModeOutlined';
import SummarizeIcon from '@mui/icons-material/SummarizeOutlined';
import FolderOpenIcon from '@mui/icons-material/FolderOpenOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutlineOutlined';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import {
  IconGrid,
  IconOuterBox,
  IconOuterGrid,
  StyledIcon,
} from '../../../Common/styled';

const SideNavbar = () => {
  const dispatch = useDispatch();
  const isLightMode = useSelector(
    (state) => state.rootReducer.sideNavbar.isLightMode
  );

  const handleClick = () => {
    dispatch(setIsLightMode());
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
