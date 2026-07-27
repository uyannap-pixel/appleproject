import CollectionHome from "../components/CollectionHome.jsx";
import Machome from "../components/machome.jsx";
import IphoneHome from "../components/IphoneHome.jsx";
import IpadHome from "../components/IpadHome.jsx";
import NavBar from "../components/NavBar.jsx";
import Entertainment from "../components/Entertainment.jsx";
import Footer from "../components/Footer.jsx";



export default function HomePage() {
  return (
    <>
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
    </>
  );
}