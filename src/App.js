import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/hero';
import NavBar from './components/navbar';
import About from './components/about';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Footer />
    </div>
  );
}

export default App;
