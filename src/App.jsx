import "./App.css";
import Footer from "./components/footer/Footer";
import Bangkok from "./components/home/Bangkok";


import KualaLampur from "./components/home/KualaLampur";
import London from "./components/home/London";
import Melbourne from "./components/home/Melbourne";
import Osaka from "./components/home/Osaka";
import Seoul from "./components/home/Seoul";
import Sydney from "./components/home/Sydney";
import Toronto from "./components/home/Toronto";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="">
        <KualaLampur/>
        <Bangkok/>
        <London/>
        <Toronto/>
        <Seoul/>
        <Osaka/>
        <Melbourne/>
        <Sydney/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
