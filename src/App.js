import './index.scss';
import './App.scss';
import { Header } from './components/Layouts/Header/Header';
import { Footer } from './components/Layouts/Footer/Footer';
import { RoutesOne } from './Routes/RoutesOne.jsx'




function App() {
  return (
    <div className="App">
      <Header/>
      <RoutesOne/>
      <Footer/>
    </div>
  );
}

export default App;
