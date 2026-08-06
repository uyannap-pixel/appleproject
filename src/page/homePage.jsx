import CollectionHome from "../components/home/CollectionHome.jsx";
import Machome from "../components/home/Machome.jsx";
import IphoneHome from "../components/home/IphoneHome.jsx";
import IpadHome from "../components/home/IpadHome.jsx";
import NavBar from "../components/shared/NavBar.jsx";
import Entertainment from "../components/home/Entertainment.jsx";
import Footer from "../components/shared/Footer.jsx";
import "./HomePage.css";



export default function HomePage() {
  return (
    <div className="homew">
        <header>
          <NavBar />
        </header>
        <main className="">
          <section><Machome /></section>
          <section><IphoneHome /></section>
          <section><IpadHome /></section>
          <section><CollectionHome /></section>
          <section><Entertainment /></section>
        </main>
        <footer>
          <Footer />
        </footer>
    </div>
  );
}