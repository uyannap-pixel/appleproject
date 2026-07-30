import NavBar from "../components/shared/NavBar";
import Footer from "../components/shared/Footer";
import FirstSection from "../components/support/FirstSection"

export default function Support() {
  return (
    <>
        <header>
          <NavBar />
        </header>
        <main>
          <FirstSection />
        </main>
        <footer>
          <Footer />
        </footer>
    </>
  );
}