"use client"
import { ChangeEvent, useEffect, useState } from "react";

interface InputColorInterface {
  label: string;
  color: string;
  defaultValue: string;
  setColorValue: (e: string) => void;
}

export default function InputColor(props: InputColorInterface) {

  const [colorValueChild, setColorValueChild] = useState<string>(props.defaultValue);
  const setColorValue = (e: ChangeEvent<HTMLInputElement>) => {
    setColorValueChild(e.currentTarget.value);
    props.setColorValue(e.currentTarget.value);
  };

return (
  <>
    <label
      htmlFor="inputColor"
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      { props.label }
    </label>
    <div className="mt-2 flex flex-row ">
      <input
        id="inputColor"
        className="input color"
        type="color"
        onChange={setColorValue}
        value={colorValueChild}
      />
      <input
        className="input number"
        type="text"
        onChange={setColorValue}
        value={colorValueChild}
      />
    </div>
  </>
);}