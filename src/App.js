import { Routes, Route } from 'react-router-dom'
import './App.scss';



import { NavigationBar } from './components/Layouts/NavigationBar/NavigationBar';
import { NavFooter } from './components/Layouts/NavigationFooter/NavFooter/NavFooter';


/*======================  V I E W S    C O M P O N E N T S  =========================*/ 

import { PageHome } from './components/Pages/PageHome/PageHome'
import { PageProfileT } from './components/Pages/PageProfileT/PageProfileT';
import { PageProfileU } from './components/Pages/PageProfileU/PageProfileU';
import { PageQuotes } from './components/Pages/PageQuotes/PageQuotes';
import { PageTattooists } from './components/Pages/PageTattooists/PageTattooists';
import { Page404 } from './components/Pages/Page404/Page404';

import { PageFormSe } from './components/Pages/PageFormSe/PageFormSe';
import { PageFormRe } from './components/Pages/PageFormRe/PageFormRe';
import { PageTattos } from './components/Pages/___PageTattos/PageTattos';
import { PagePiercings } from './components/Pages/___PagePiercings/PagePiercings';

import { UserPassword } from './components/Pages/PageProfileU/Profile/UserPassword/UserPassword'
import { UserName } from './components/Pages/PageProfileU/Profile/UserName/UserName'

function App() {

  // const user = useAuth() 
  return (
    <div>
      <NavigationBar/>
              <Routes>
                {/* ECCSXTRAS */ }
                <Route path="*" element= {<Page404 />} />
                <Route path='/' exact element= {<PageHome />} />

                {/* LOGIN Y REGISTRO */ }
                <Route path='/IngresarSesion' exact element= {<PageFormSe />}/>
                <Route path='/Registro' exact element= {<PageFormRe/>}/>

                {/* TATUADORES */ }                             {/*Ruta Protegida */}
                <Route path='/perfilTatuadores' exact element= {<PageProfileT/>}/>
                <Route path='/artistas' exact element= {<PageTattooists/>}/>
                <Route path='/citas' exact element= {<PageQuotes/>}/>

                {/* USUARIOS */ }
                <Route path='/perfilUsuario' exact element= {<PageProfileU/>}/>

                  {/* COSAS NO IMPORTANTES como(Elena <3) */ }
                <Route path='/infoTatuajes' exact element= {<PageTattos/>}/>
                <Route path='/infoPiercings' exact element= {<PagePiercings/>}/>

                {/* Rutas para opciones del perfil de usuario */}
                <Route path='/editN' exact element= {<UserName/>}/>
                <Route path='/editF' exact element= {<UserName/>}/>
                <Route path='/editC' exact element= {<UserPassword/>}/>
                <Route path='/Cit' exact element= {<UserName/>}/>

              </Routes>
      <NavFooter/>
    </div>
  );
}

export default App;
