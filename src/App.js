import './App.css';
import ThemesProvider from './components/Context';
import Header from './components/parts/Header/Header';
import Footer from './components/parts/Footer/Footer';
import Home from './components/pages/Home/Home';
import Sidebar from './components/parts/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <ThemesProvider>
        <Header />
        <Home />
        <Sidebar />
        <Footer />
      </ThemesProvider>
    </div>
  );
}

export default App;
