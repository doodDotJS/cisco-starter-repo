import "./App.css";
import ShortCard from "./CardTypes/ShortCard";
import ExtendedCard from "./CardTypes/ExtendedCard";

function App() {
  return (
    <div className="App">
      <header className="banner">{document.title}</header>
      <main>
        <div className="card-list">
          <ShortCard title="Public IPv4 Address" value="255.255.255.255" />
          <ExtendedCard
            title="Insert interesting title."
            value="According to all known laws of aviation, there is no way that a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway. Because bees don’t care what humans think is impossible.” SEQ. 75 - “INTRO TO BARRY” INT. BENSON HOUSE - DAY ANGLE ON: Sneakers on the ground. Camera PANS UP to reveal BARRY BENSON’S BEDROOM ANGLE ON: Barry’s hand flipping through different sweaters in his closet. BARRY Yellow black, yellow black, yellow black, yellow black, yellow black, yellow black...oohh, black and yellow... ANGLE ON: Barry wearing the sweater he picked, looking in the mirror. BARRY (CONT’D) Yeah, let’s shake it up a little."
          />
        </div>
      </main>
    </div>
  );
}

export default App;
