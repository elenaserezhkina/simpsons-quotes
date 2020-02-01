import React from "react";
import Navbar from "./components/Navbar";
import QuoteCard from "./components/QuoteCard";

const characters = [
  {
    quote: "That's where I saw the leprechaun...He told me to burn things.",
    character: "Ralph Wiggum",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
  },
  {
    quote: "Marriage is like a coffin and each kid is another nail.",
    character: "Homer Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
  },
  {
    quote: "Thank you. Come again.",
    character: "Apu Nahasapeemapetilon",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629"
  },
  {
    quote: "Eat my shorts",
    character: "Bart Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638"
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        {characters.map(item => {
          return (
            <QuoteCard
              character={item.character}
              image={item.image}
              quote={item.quote}
            />
          );
        })}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
