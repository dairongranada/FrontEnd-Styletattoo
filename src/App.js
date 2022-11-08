import { Routes, Route } from 'react-router-dom'
import { Navigate } from "react-router";

import './App.scss';


import { NavFooter } from './components/Layouts/NavigationFooter/NavFooter/NavFooter';



/*======================  V I E W S    C O M P O N E N T S  =========================*/ 
import { NoAutenticado } from './components/Pages/NoAutenticado/NoAutenticado';
import { Page404 } from './components/Pages/Page404/Page404';
import { TerminosC } from './components/Layouts/TerminosC/TerminosC';


import { PageHome } from './components/Pages/PageHome/PageHome'
import { PageQuotes } from './components/Pages/PageQuotes/PageQuotes';
import { PageTattooists } from './components/Pages/PageTattooists/PageTattooists';

import { PageFormSe } from './components/Pages/PageFormSe/PageFormSe';
import { PageFormRe } from './components/Pages/PageFormRe/PageFormRe';
import { PageTattos } from './components/Pages/___PageTattos/PageTattos';
import { PagePiercings } from './components/Pages/___PagePiercings/PagePiercings';




// PROFILE USER ROUTES 
import { LeftInfoT } from './components/Pages/PageProfileT/LeftInfoT';

import { UserName } from './components/Pages/PageProfileU/Profile/UserName/UserName'
import { UserPassword } from './components/Pages/PageProfileU/Profile/UserPassword/UserPassword'
import { UserQuotes } from './components/Pages/PageProfileU/Profile/UserQuotes/UserQuotes'

// PROFILE USER ROUTES 
import { LeftInfoU } from './components/Pages/PageProfileU/LeftInfoU';

import { TattoName } from './components/Pages/PageProfileT/Profile/TattoName/TattoName'
import { TattoPassword } from './components/Pages/PageProfileT/Profile/TattoPassword/TattoPassword'
import { TattoQuotes } from './components/Pages/PageProfileT/Profile/TattoQuotes/TattoQuotes'

import { AllViewTatto } from './components/Pages/PageProfileT/AllViewTatto/AllViewTatto'





function App() {

  const token = localStorage.getItem("token");

  return (
    <div>

              <Routes>
                {/* ECCSXTRAS */ }
                <Route path="*" element= {<Page404 />} />
                <Route path='/' exact element= {<PageHome />} />
                <Route path='/unauthenticated/401' exact element= {<NoAutenticado />} />
                <Route path='/terminos-condiciones' exact element= {<TerminosC />} />


                {/* LOGIN Y REGISTRO */ }
                <Route path='/IngresarSesion' exact element= {!!token ? <Navigate to="/" /> :<PageFormSe />}/>
                <Route path='/Registro' exact element= {!!token ? <Navigate to="/" /> : <PageFormRe/>}/>
                {/* <Route path='/Registross' exact element= {<Registro/>}/> */}


                {/* TATUADORES */ }                             {/*Ruta Protegida */}
                <Route path='/all/artist/style' exact element= {<PageTattooists/>}/>


                  {/* COSAS NO IMPORTANTES como(Elena <3) */ }
                <Route path='/all/artist/style' exact element= {<PageTattooists/>}/>
                <Route path='/infoTatuajes' exact element= {<PageTattos/>}/>
                <Route path='/infoPiercings' exact element= {<PagePiercings/>}/>


                {/*  RUTAS PRIVADAS     */}

                {/* Rutas para opciones del perfil de usuario */}
                <Route path='/user/edit-profile' exact element= {!token ? <Navigate to="/unauthenticated/401" /> :<LeftInfoU/>}/>
                <Route path='/user/edit-name' exact element= {!token ? <Navigate to="/unauthenticated/401" /> :<UserName/>}/>
                <Route path='/user/edit-password' exact element= {!token ? <Navigate to="/unauthenticated/401" /> :<UserPassword/>}/>
                <Route path='/user/edit-quotes' exact element= {!token ? <Navigate to="/unauthenticated/401" /> :<UserQuotes/>}/>

                {/* Rutas para opciones del perfil de Tatuadores */}
                <Route path='/tatto/view/profile' exact element= {<AllViewTatto/>}/>

                <Route path='/userTatto/edit-profile' exact element= {!token ? <Navigate to="/unauthenticated/401" /> :<LeftInfoT/>}/>
                <Route path='/userTatto/edit-name' exact element= {!token ? <Navigate to="/unauthenticated/401" /> :<TattoName/>}/>
                <Route path='/userTatto/edit-password' exact element= {!token ? <Navigate to="/unauthenticated/401" /> :<TattoPassword/>}/>
                <Route path='/userTatto/edit-quotes' exact element= {!token ? <Navigate to="/unauthenticated/401" /> :<TattoQuotes/>}/>
        
                <Route path='/citas' exact element= {!token ? <Navigate to="/IngresarSesion" /> :<PageQuotes/>}/>

              </Routes>
      <NavFooter/>
    </div>
  );
}

export default App;
