import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Cards from './pages/Projects';
import Footer from './components/Footer';
import India from '../src/Assets/india.png';
import Africa from '../src/Assets/africa.png';

const cardData = [
  {
    id: 1,
    image: India,
    title: 'India - Odisha & Assam',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
    details: 'Southern Asia\nLasts 100+ years\n€140.00 (VAT excluded)',
  },
  {
    id: 2,
    image: Africa,
    title: 'Africa - Ghana',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
    details: 'Africa\nLasts 100+ years\n€140.00 (VAT excluded)',
  },
  // Add more card data objects here
];


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
      <h1 className="justify-start text-center text-3xl font-bold my-2">Biochar Projects</h1>
      <Cards cardData={cardData} />

      <Footer/>
     
    </div>
  );
}

export default App;
