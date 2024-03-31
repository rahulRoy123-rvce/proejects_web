import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Cards from './pages/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="font-extrabold text-center text-4xl my-8">
        Explore our projects!
      </div>
      <p className="mx-36 text-center my-8">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      </p>
      <h1 className="justify-start ml-60 text-3xl font-bold">Biochar Projects</h1>
      <Cards/>
      <Footer/>
     
    </div>
  );
}

export default App;
