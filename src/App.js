import { Routes, Route } from 'react-router-dom'
import './App.scss';
import { Header } from './components/Layouts/Header/Header';
import { Footer } from './components/Layouts/Footer/Footer';


/*======================  V I E W S    C O M P O N E N T S  =========================*/ 

import { PageHome } from './components/Pages/PageHome/PageHome'
import { PageProfileT } from './components/Pages/PageProfileT/PageProfileT';
import { PageProfileU } from './components/Pages/PageProfileU/PageProfileU';
import { PageQuotes } from './components/Pages/PageQuotes/PageQuotes';
import { PageTattooists } from './components/Pages/PageTattooists/PageTattooists';
import { Page404 } from './components/Pages/Page404/Page404';

import { PageFormSe } from './components/Pages/PageFormSe/PageFormSe';
import { PageRegistroT } from './components/Pages/PageRegistroT/PageRegistroT.jsx';
import { PageRegistroU } from './components/Pages/PageRegistroU/PageRegistroU.jsx';







function App() {
  return (
    <div className="App">
      <Header/>
          <Routes>
              <Route path='*' element= {<Page404/>} />
              <Route path='/' exact element= {<PageHome />} />
              <Route path='/perfilUsuarios' exact element= {<PageProfileU/>}/>
              <Route path='/perfilTatuadores' exact element= {<PageProfileT/>}/>
              <Route path='/citas' exact element= {<PageQuotes/>}/>
              <Route path='/tatuadores' exact element= {<PageTattooists/>}/>

              <Route path='/IngresarSesion' exact element= {<PageFormSe/>}/>
              <Route path='/RegistroUsuario' exact element= {<PageRegistroU/>}/>
              <Route path='/RegistroTatuador' exact element= {<PageRegistroT/>}/>


          </Routes>
      <Footer/>
    </div>
  );
}

export default App;
