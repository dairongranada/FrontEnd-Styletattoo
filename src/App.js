import { ToastContainer, toast } from 'react-toastify';

import { Routes, Route } from 'react-router-dom'
import { Navigate } from "react-router";

import './App.scss';




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
import { ChangeIMG } from './components/Pages/PageProfileU/Profile/ChangeIMG/ChangeIMG'
import { UserQuotes } from './components/Pages/PageProfileU/Profile/UserQuotes/UserQuotes'

// PROFILE USER ROUTES 
import { LeftInfoU } from './components/Pages/PageProfileU/LeftInfoU';

import { TattoName } from './components/Pages/PageProfileT/Profile/TattoName/TattoName'
import { TattoPassword } from './components/Pages/PageProfileT/Profile/TattoPassword/TattoPassword'
import { TattoQuotes } from './components/Pages/PageProfileT/Profile/TattoQuotes/TattoQuotes'

import { ProfileProfessionall } from './components/Pages/ProfileProfessionall/ProfileProfessionall'
import { Up } from './components/UI/Up/Up'

import { RecoveryP } from './components/Layouts/Password-recovery/RecoveryP'






function App() {

  const token = localStorage.getItem("token");

  return (
    <div>
      {/* A L E R T A     G L O B A L E S   */}
      <ToastContainer position="bottom-center"autoClose={5000} hideProgressBar={false} newestOnTop={false}closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />

              <Routes>
                <Route path='/Password-recovery' exact element= {<RecoveryP />}/>

                {/* 𝑳𝑶𝑮𝑰𝑵 𝒀 𝑹𝑬𝑮𝑰𝑺𝑻𝑹𝑶 */ }
                    <Route path='/IngresarSesion' exact element= {!!token ? <Navigate to="/" /> :<PageFormSe />}/>
                    <Route path='/Registro' exact element= {!!token ? <Navigate to="/" /> : <PageFormRe/>}/>

                {/*𝑷𝑬𝑹𝑭𝑰𝑳 𝑼𝑺𝑼𝑨𝑹𝑰𝑶*/}
                    <Route path='/user/edit-profile' exact element= {!token ? <Navigate to="/unauthenticated/401" /> :<LeftInfoU/>}/>
                    <Route path='/user/edit-name' exact element= {!token ? <Navigate to="/unauthenticated/401" /> :<UserName/>}/>
                    <Route path='/user/edit-password' exact element= {!token ? <Navigate to="/unauthenticated/401" /> :<UserPassword/>}/>
                    <Route path='/user/edit-image' exact element= {!token ? <Navigate to="/unauthenticated/401" /> :<ChangeIMG/>}/>
                    <Route path='/user/edit-quotes' exact element= {!token ? <Navigate to="/unauthenticated/401" /> :<UserQuotes/>}/>

                {/*𝑷𝑬𝑹𝑭𝑰𝑳 𝐓𝐀𝐓𝐔𝐀𝐃𝐎𝐑*/}
                    <Route path='/userTatto/edit-profile' exact element= {!token ? <Navigate to="/unauthenticated/401" /> :<LeftInfoT/>}/>
                    <Route path='/userTatto/edit-name' exact element= {!token ? <Navigate to="/unauthenticated/401" /> :<TattoName/>}/>
                    <Route path='/userTatto/edit-password' exact element= {!token ? <Navigate to="/unauthenticated/401" /> :<TattoPassword/>}/>
                    <Route path='/userTatto/edit-quotes' exact element= {!token ? <Navigate to="/unauthenticated/401" /> :<TattoQuotes/>}/>

                {/* 𝙇𝘼𝙎 𝙊𝙋𝘾𝙄𝙊𝙉𝙀𝙎 𝘿𝙀𝙇 𝙏𝘼𝙏𝙐𝘼𝘿𝙊𝙍 */}
                    <Route path='/all/artist/style' exact element= {<PageTattooists/>}/>
                    <Route path='/tatto/view/profile/:id' exact element= {<ProfileProfessionall/>}/>
                    <Route path='/citas' exact element= {!token ? <Navigate to="/IngresarSesion" /> :<PageQuotes/>}/>


                {/* 𝙑𝙄𝙎𝙏𝘼𝙎 𝙀𝙓𝙏𝙍𝘼𝙎𝙎𝙎𝙎𝙎 */ }

                    <Route path="*" element= {<Page404 />} />
                    <Route path='/' exact element= {<PageHome />} />
                    <Route path='/infoTatuajes' exact element= {<PageTattos/>}/>
                    <Route path='/infoPiercings' exact element= {<PagePiercings/>}/>
                    <Route path='/terminos-condiciones' exact element= {<TerminosC />} />
                    <Route path='/unauthenticated/401' exact element= {<NoAutenticado />} />

              </Routes>
              <Up/>
    </div>
  );
}

export default App;
