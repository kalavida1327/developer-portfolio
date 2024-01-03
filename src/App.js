import './App.css';
import { WrapperContainer } from './Common/styled';
import AboutComponent from './Components/HeroSection/AboutSection/AboutComponent';
import CustomShapeComponent from './Components/HeroSection/CustomShapeComponent';

function App() {
  return (
    <WrapperContainer className='App'>
      <CustomShapeComponent />
      <AboutComponent />
    </WrapperContainer>
  );
}

export default App;
