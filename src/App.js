import './App.css';
import { ThemeProvider } from 'styled-components';
import Header from './components/parts/Header/Header';
import Footer from './components/parts/Footer/Footer';
import Home from './components/pages/Home/Home';
import Sidebar from './components/parts/Sidebar/Sidebar';

const Theme = {
  colors:{
    header: "yellow",
    main: "red",
    footer: "blue",
  }
}


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <Header />
        <Home />
        <Sidebar />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
