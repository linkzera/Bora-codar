interface VisorProps {}
import "./style.css";

export function Visor({}: VisorProps) {
  return (
    <div className="visor">
      <div className="operation">1 + 1</div>
      <div className="result">
        <span>=</span>
        <span className="result__number">2</span>
      </div>
    </div>
  );
}
