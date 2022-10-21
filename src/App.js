import { Routes, Route } from 'react-router-dom'
import './App.scss';


import { NavigationBar } from './components/Layouts/NavigationBar/NavigationBar';
import { NavFooter } from './components/Layouts/NavigationFooter/NavFooter/NavFooter';



/*======================  V I E W S    C O M P O N E N T S  =========================*/ 
import { TerminosC } from './components/Layouts/TerminosC/TerminosC';


import { PageHome } from './components/Pages/PageHome/PageHome'
import { PageProfileT } from './components/Pages/PageProfileT/PageProfileT';
import { PageQuotes } from './components/Pages/PageQuotes/PageQuotes';
import { PageTattooists } from './components/Pages/PageTattooists/PageTattooists';
import { Page404 } from './components/Pages/Page404/Page404';

import { PageFormSe } from './components/Pages/PageFormSe/PageFormSe';
import { PageFormRe } from './components/Pages/PageFormRe/PageFormRe';
import { PageTattos } from './components/Pages/___PageTattos/PageTattos';
import { PagePiercings } from './components/Pages/___PagePiercings/PagePiercings';

import { UserPassword } from './components/Pages/PageProfileU/Profile/UserPassword/UserPassword'
import { UserName } from './components/Pages/PageProfileU/Profile/UserName/UserName'
import {UserImage} from './components/Pages/PageProfileU/Profile/UserImage/UserImage'
import { UserQuotes } from './components/Pages/PageProfileU/Profile/UserQuotes/UserQuotes'
import { PersonalProfile } from './components/Pages/PageProfileT/PersonalProfile/PersonalProfile'
import { ProfileTfoto } from './components/Pages/PageProfileT/PersonalProfile/ProfileTfoto/ProfileTfoto'
import { ProfileTpassword } from './components/Pages/PageProfileT/PersonalProfile/ProfileTpassword/ProfileTpassword'
import { ProfileTquotes } from './components/Pages/PageProfileT/PersonalProfile/ProfileTquotes/ProfileTquotes'



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
                <Route path='/artistas' exact element= {<PageTattooists/>}/>


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
                <Route path='/perfilTatuadores' exact element= {<PageProfileT/>}/>
                <Route path='/perfilTatuPersonal' exact element= {<PersonalProfile/>}/>
                <Route path='/perfilTatuPersonalFoto' exact element= {<ProfileTfoto/>}/>
                <Route path='/perfilT-PersonalPassword' exact element= {<ProfileTpassword/>}/>
                <Route path='/perfilT-PersonalQuotes' exact element= {<ProfileTquotes/>}/>

        
                <Route path='/citas' exact element= {<PageQuotes/>}/>


              </Routes>
      <NavFooter/>
    </div>
  );
}

export default App;
