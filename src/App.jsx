import Container from "./components/Container";
import Hero from "./components/Hero";
import DP from "./components/ui/DP";
import ContactMe from "./components/ui/ContactMe";
import Cv from "./components/ui/Cv";

function App() {
  return (
    <div className="relative bg-primaryColor">
        <Hero />
        <DP />
        <Cv/>
        <ContactMe/>
    </div>
  );
}

export default App;
