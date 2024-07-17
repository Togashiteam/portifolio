"use client"
import { ChangeEvent, useEffect, useState } from "react";

interface InputCheckboxInterface {
  label: string;
  checkboxValue: boolean;
  defaultValue: boolean;
  setCheckboxValue: (e: boolean) => void;
}

export default function InputCheckbox(props: InputCheckboxInterface) {

  const [checkboxValueChild, setCheckboxValueChild] = useState<boolean>(props.defaultValue);
  const setCheckboxValue = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckboxValueChild(e.currentTarget.checked);
    props.setCheckboxValue(e.currentTarget.checked);
  };

return (
  <>
    <label className="block text-sm font-medium leading-6 text-gray-900">
      { props.label }

      <input
        id="inputCheckbox"
        className="input checkbox"
        type="checkbox"
        onChange={setCheckboxValue}
        checked={checkboxValueChild}
      />

      {checkboxValueChild ? "true" : "false"}

    </label>
  </>
);}
