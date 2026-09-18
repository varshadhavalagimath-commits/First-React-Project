
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <Navbar />
      <main id="home">
        <h1>campus Connect</h1>
        <p>welcome to college events and clubs</p>
        <Hero />
      </main>
    </div>
  );
}

export default App;