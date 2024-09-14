import Input from "./Input";
import { Button } from "./button";

type GreetProps = {
  name: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

// const Greet = ({ name }: { name: string }) => {
const Greet = ({ name, handleClick, handleChange }: GreetProps) => {
  return (
    <>
      <h1>Welcome {name}</h1>
      <Button onClick={handleClick}>Click me</Button>
      <Input value="Test Input" onChange={handleChange} />
    </>
  );
};
export default Greet;
