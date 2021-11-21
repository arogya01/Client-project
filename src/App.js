import AppHeader from './components/core/AppHeader/AppHeader';
import GlobalStyle from './global.css';
import MainComponent from './components/core/MainComponent/MainComponent';
import {BrowserRouter , Route , Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppHeader />
    <Routes>
     <Route path='/'  element={<MainComponent />} exact />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
