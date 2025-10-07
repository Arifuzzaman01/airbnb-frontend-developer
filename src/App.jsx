import "./App.css";
import Footer from "./components/footer/Footer";
import Bangkok from "./components/home/Bangkok";


import KualaLampur from "./components/home/KualaLampur";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="">
        <KualaLampur/>
        <Bangkok/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
