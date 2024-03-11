"use client"
import { ChangeEvent, useEffect, useState } from "react";

interface InputRangeInterface {
  label: string;
  borderWidth: string;
  defaultValue: string;
  setBorderWidth: (e: string) => void;
}

export default function InputRange(props: InputRangeInterface) {

  const [borderWidthValueChild, setBorderWidthValueChild] = useState<string>(props.defaultValue);
  const setBorderWidth = (e: ChangeEvent<HTMLInputElement>) => {
    setBorderWidthValueChild(e.currentTarget.value);
    props.setBorderWidth(e.currentTarget.value);
  };

return (
  <>
    <label
      htmlFor="borderWidth"
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      { props.label }
    </label>
    <div className="mt-2 flex flex-row ">
      <input
        id="borderWidth"
        className="input range"
        type="range"
        min={0}
        max={255}
        onChange={setBorderWidth}
        value={borderWidthValueChild}
      />
      <input
        className="input number"
        type="number"
        min={0}
        max={255}
        onChange={setBorderWidth}
        value={borderWidthValueChild}
      />
    </div>
  </>
);}