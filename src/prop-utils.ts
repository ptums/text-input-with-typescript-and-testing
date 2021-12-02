
import { Input, InputElementTypes } from "./components/Input";

const inputPropsGenerator = (
  label: string,
  value: string,
  placeHolder: string,
  type: string,
  changeEvent: (e: string) => void
): Input => {
  const handleOnChange = (e: InputElementTypes) => changeEvent(e.target.value);

  return { label, value, placeHolder, type, handleOnChange };
};

export default inputPropsGenerator