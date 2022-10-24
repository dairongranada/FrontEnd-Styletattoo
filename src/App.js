import { Routes, Route } from 'react-router-dom'
import './App.scss';


import { NavigationBar } from './components/Layouts/NavigationBar/NavigationBar';
import { NavFooter } from './components/Layouts/NavigationFooter/NavFooter/NavFooter';



/*======================  V I E W S    C O M P O N E N T S  =========================*/ 
import { TerminosC } from './components/Layouts/TerminosC/TerminosC';


import { PageHome } from './components/Pages/PageHome/PageHome'
import { PageQuotes } from './components/Pages/PageQuotes/PageQuotes';
import { PageTattooists } from './components/Pages/PageTattooists/PageTattooists';
import { Page404 } from './components/Pages/Page404/Page404';

import { PageFormSe } from './components/Pages/PageFormSe/PageFormSe';
import { PageFormRe } from './components/Pages/PageFormRe/PageFormRe';
import { PageTattos } from './components/Pages/___PageTattos/PageTattos';
import { PagePiercings } from './components/Pages/___PagePiercings/PagePiercings';




// PROFILE USER ROUTES 
import { UserName } from './components/Pages/PageProfileU/Profile/UserName/UserName'
import { UserPassword } from './components/Pages/PageProfileU/Profile/UserPassword/UserPassword'
import { UserImage } from './components/Pages/PageProfileU/Profile/UserImage/UserImage'
import { UserQuotes } from './components/Pages/PageProfileU/Profile/UserQuotes/UserQuotes'

// PROFILE USER ROUTES 
import { TattoName } from './components/Pages/PageProfileT/Profile/TattoName/TattoName'
import { TattoPassword } from './components/Pages/PageProfileT/Profile/TattoPassword/TattoPassword'
import { TattoImage } from './components/Pages/PageProfileT/Profile/TattoImage/TattoImage'
import { TattoQuotes } from './components/Pages/PageProfileT/Profile/TattoQuotes/TattoQuotes'

import { AllViewTatto } from './components/Pages/PageProfileT/AllViewTatto/AllViewTatto'



function App() {


  return (
    <div>
      <NavigationBar/>


              <Routes>
                {/* ECCSXTRAS */ }
                <Route path="*" element= {<Page404 />} />
                <Route path='/' exact element= {<PageHome />} />
                <Route path='/terminos-condiciones' exact element= {<TerminosC />} />


                {/* LOGIN Y REGISTRO */ }
                <Route path='/IngresarSesion' exact element= {<PageFormSe />}/>
                <Route path='/Registro' exact element= {<PageFormRe/>}/>
                {/* <Route path='/Registross' exact element= {<Registro/>}/> */}


                {/* TATUADORES */ }                             {/*Ruta Protegida */}
                <Route path='/all/artist/style' exact element= {<PageTattooists/>}/>


                  {/* COSAS NO IMPORTANTES como(Elena <3) */ }
                <Route path='/infoTatuajes' exact element= {<PageTattos/>}/>
                <Route path='/infoPiercings' exact element= {<PagePiercings/>}/>



                {/*  RUTAS PRIVADAS     */}

                {/* Rutas para opciones del perfil de usuario */}
                <Route path='/user/edit-profile' exact element= {<UserName/>}/>
                <Route path='/user/edit-image' exact element= {<UserImage/>}/>
                <Route path='/user/edit-password' exact element= {<UserPassword/>}/>
                <Route path='/user/edit-quotes' exact element= {<UserQuotes/>}/>

                {/* Rutas para opciones del perfil de Tatuadores */}
                <Route path='/tatto/view/profile' exact element= {<AllViewTatto/>}/>

                <Route path='/userTatto/edit-profile' exact element= {<TattoName/>}/>
                <Route path='/userTatto/edit-image' exact element= {<TattoImage/>}/>
                <Route path='/userTatto/edit-password' exact element= {<TattoPassword/>}/>
                <Route path='/userTatto/edit-quotes' exact element= {<TattoQuotes/>}/>
        
                <Route path='/citas' exact element= {<PageQuotes/>}/>


              </Routes>
      <NavFooter/>
    </div>
  );
}

export default App;
