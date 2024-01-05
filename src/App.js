import { useSelector } from 'react-redux';
import './App.css';
import { WrapperContainer } from './Common/styled';
import AboutComponent from './Components/HeroSection/AboutSection/AboutComponent';
import CustomShapeComponent from './Components/HeroSection/CustomShapeComponent';

function App() {
  const isLightMode = useSelector(
    (state) => state.rootReducer.sideNavbar.isLightMode
  );
  console.log('isLightMode', isLightMode);

  return (
    <WrapperContainer islightmode={isLightMode} className="App">
      <CustomShapeComponent />
      <AboutComponent />
    </WrapperContainer>
  );
}

export default App;
