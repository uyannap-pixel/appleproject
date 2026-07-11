import CollectionHome from "../components/CollectionHome.jsx";
import Machome from "../components/machome.jsx";
import IphoneHome from "../components/IphoneHome.jsx";
import IpadHome from "../components/IpadHome.jsx";
import NavBar from "../components/NavBar.jsx";
// import "./index.css/";

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

        </main>
    </>
  );
}