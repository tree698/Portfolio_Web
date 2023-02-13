import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <section className="w-full md:h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </section>
  );
}

export default App;
