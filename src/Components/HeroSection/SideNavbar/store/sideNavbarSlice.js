import { createSlice } from '@reduxjs/toolkit';
import { _setIsLightMode } from './sideNavbarAction';
import initialState from './sideNavbarInitialstate';

export const sideNavbarSlice = createSlice({
  name: 'portfolio/sideNavbar',
  initialState,
  reducers: {
    setIsLightMode: _setIsLightMode,
    resetSideNavbar: () => initialState,
  },
});

export const { setIsLightMode } = sideNavbarSlice.actions;

export default sideNavbarSlice.reducer;
