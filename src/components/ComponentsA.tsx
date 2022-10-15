import { useAppSelector, useAppDispatch } from "../app/hooks";
import { selectName } from "../features/counter/counterSlice";

const ComponentsA = () => {
  const name = useAppSelector(selectName);
  return <div>This is {name} components A</div>;
};

export default ComponentsA;
