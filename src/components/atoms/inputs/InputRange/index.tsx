"use client";
import { ChangeEvent, useState } from "react";

interface InputRangeInterface {
  label: string;
  rangeValue: string;
  defaultValue: string;
  setRangeValue: (e: string) => void;
}

export default function InputRange(props: InputRangeInterface) {
  const [rangeValueChild, setRangeValueChild] = useState<string>(
    props.defaultValue,
  );
  const setRangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setRangeValueChild(e.currentTarget.value);
    props.setRangeValue(e.currentTarget.value);
  };

  return (
    <>
      <label
        htmlFor="borderWidth"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {props.label}
      </label>
      <div className="mt-2 flex flex-row ">
        <input
          id="borderWidth"
          className="input range"
          type="range"
          min={0}
          max={255}
          onChange={setRangeValue}
          value={rangeValueChild}
        />
        <input
          className="input number"
          type="number"
          min={0}
          max={255}
          onChange={setRangeValue}
          value={rangeValueChild}
        />
      </div>
    </>
  );
}
