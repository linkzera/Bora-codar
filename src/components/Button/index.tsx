import "./style.css";

interface ButtonProps {
  value: string;
  style?: string;
}

export function Button({ value, style }: ButtonProps) {
  return <button className={`button ${style ? style : ""}`}>{value}</button>;
}
