import "./App.css";
import Bangkok from "./components/home/Bangkok";


import KualaLampur from "./components/home/KualaLampur";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto">
        <KualaLampur/>
        <Bangkok/>
      </main>
    </>
  );
}

export default App;
