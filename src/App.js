import GlobalStyle from './global.css';
import MainComponent from './components/core/MainComponent/MainComponent';
import {BrowserRouter , Route , Routes} from 'react-router-dom';
import Config from './pages/Config';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      
    <Routes>
     <Route path='/'  element={<MainComponent />} exact />
     <Route path='/config' element={<Config />} /> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;
