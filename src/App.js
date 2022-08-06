import './index.scss';
import './App.scss';
import { Header } from './components/Layouts/Header/Header';
import { RoutesOne } from './Routes/RoutesOne.jsx'




function App() {
  return (
    <div className="App">
      <Header/>
      <RoutesOne/>
    </div>
  );
}

export default App;
