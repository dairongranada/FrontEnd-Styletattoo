import { Route,Routes } from 'react-router-dom';
import './Scss/App.scss';


/*======================  C O M P O N E N T E S ===============================*/ 
import { Header } from './components/Layouts/Header/Header';
import { PageHome } from './components/Pages/PageHome/PageHome';
import { PageTattooists } from './components/Pages/PageTattooists/PageTattooists';



function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element = {<PageHome />} />
        <Route path='/Tatuadores' element = {<PageTattooists />}/>
      </Routes>
    </div>

  );
}

export default App;
