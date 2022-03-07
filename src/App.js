import GlobalStyle from './global.css';
import MainComponent from './components/core/MainComponent/MainComponent';
import { Route , Routes} from 'react-router-dom';
import Config from './pages/Config';
import AddConfig from './pages/AddConfig';
import Home from './pages/Home';

function App() {
  return (
    <>
    <GlobalStyle />
    <Routes>
     <Route path='/'  element={<MainComponent />} exact />
     <Route path='/config' element={<Config />} /> 
     <Route path='/newconfig' element={<AddConfig />} />
     <Route path="/home" element = {<Home />} />
    </Routes>
    </>
  );
}

export default App;
