import { toast } from "react-toastify";

function App() {
  return (
    <div className="App">
      <button onClick={() => toast("Wow so easy !")}></button>
    </div>
  );
}

export default App;
