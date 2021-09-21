import "./App.css";
import Card from "./components/card";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Card />
    </DndProvider>
  );
}

export default App;
