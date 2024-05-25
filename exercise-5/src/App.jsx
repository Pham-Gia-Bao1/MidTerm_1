import { AVAILABLE_STORE } from "./data";
import Card from "./components/Card";
import "./assets/style.css";
function App() {
  console.log(typeof AVAILABLE_STORE);
  return (
    <>
      <div class="cards-view">
        <div class="cards-grid">

          {AVAILABLE_STORE.map((e)=> (
             <Card data={e} />
          ))}

        </div>
      </div>
    </>
  );
}

export default App;
