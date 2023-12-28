import { styled } from "@mui/system";

const Bgwrapper =  styled('div')({
  color: 'yellow',
  height:'100vh',
  
  backgroundColor: 'black'


})
const  AboutComponent = () => {
  return (
    <Bgwrapper>
        <h1>About Me.....</h1>
    </Bgwrapper>
  
  )
}
export default AboutComponent;
