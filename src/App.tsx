import "./App.css";
import { Button } from "./components/Button";
import { Visor } from "./components/Visor";

const buttons = [
  { id: 1, value: "CE", style: "button__ce" },
  { id: 2, value: "C" },
  { id: 3, value: "%" },
  { id: 4, value: "/", style: "button__operator" },
  { id: 5, value: "7" },
  { id: 6, value: "8" },
  { id: 7, value: "9" },
  { id: 8, value: "x", style: "button__operator" },
  { id: 9, value: "4" },
  { id: 10, value: "5" },
  { id: 11, value: "6" },
  { id: 12, value: "-", style: "button__operator" },
  { id: 13, value: "1" },
  { id: 14, value: "2" },
  { id: 15, value: "3" },
  { id: 16, value: "+", style: "button__operator" },
  { id: 17, value: "+/-" },
  { id: 18, value: "0" },
  { id: 19, value: "," },
  { id: 20, value: "=", style: "button__equal" },
];

export function App() {
  return (
    <div className="App">
      <div className="calcContainer">
        <Visor />
        <div className="buttonsContainer">
          {buttons.map((button) => {
            return (
              <Button
                key={button.id}
                value={button.value}
                style={button.style}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
