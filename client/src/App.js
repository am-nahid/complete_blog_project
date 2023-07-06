
import './App.css';
import { Footer, LoginButton } from './Components';
import LoginSignupButn from './Components/login_Button';
import AppRoutes from './Utility/Routers';





function App() {
  return (
    <div className="App">
    {/* <div className="LoginPos"><LoginSignupButn/></div>  */}
    {/* <div className="LoginPos"><LoginButton/></div>  */}
      <AppRoutes/>

     <Footer/>
      
    </div>
  );
}

export default App;
