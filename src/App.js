//import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Body from './Components/Body';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
     <Banner
     texto="Carreritas"
     />
     <Header
     />
     <Banner
     texto="En sus Marcas, Listos y Fuera!!!"
     />
     <Body
     titulo="Millas a Recorrer"
     millas={[100,150,200,250]}
     />
     <Footer>
      {96}
      www.carreras.com.mx
     </Footer>
    </div>
  );
}

export default App;
