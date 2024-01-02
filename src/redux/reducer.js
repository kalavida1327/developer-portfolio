import { combineReducers } from '@reduxjs/toolkit';
import sideNavbar from '../Components/HeroSection/SideNavbar/store/sideNavbarSlice';

export const rootReducer = combineReducers({
  sideNavbar,
});
