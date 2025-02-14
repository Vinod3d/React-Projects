import { ChangeEvent } from "react";

type InputValType = string | number;

interface BoxProps<T extends InputValType> {
  label: string;
  value: T;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Box = <T extends InputValType>({ label, value, onChange }: BoxProps<T>) => {
  return (
    <form>
      <label>{label}</label>
      <input value={String(value)} placeholder="Enter text" onChange={onChange} />
      <button type="button">Submit</button>
    </form>
  );
};

export default Box;
