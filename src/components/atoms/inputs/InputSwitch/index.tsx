"use client"
import { ChangeEvent, useEffect, useState } from "react";
import "./toggle.scss";

interface InputSwitchInterface {
  label?: string;
  switchValue: boolean;
  defaultValue: boolean;
  labelTrue?: string;
  labelFalse?: string;
  setSwitchValue: (e: boolean) => void;
}

export default function InputSwitch(props: InputSwitchInterface) {

  const [switchValueChild, setSwitchValueChild] = useState<boolean>(props.defaultValue);
  const setSwitchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSwitchValueChild(e.currentTarget.checked);
    props.setSwitchValue(e.currentTarget.checked);
  };

return (
  <>
    { props.label &&
      <label
        htmlFor="inputSwitch"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        { props.label }
      </label>
    }
    <label className="switch">
      <input
        id="inputSwitch"
        className="input toggle"
        type="checkbox"
        onChange={setSwitchValue}
        checked={switchValueChild}
      />
      <span className="slider round"></span>

    </label>
    <label htmlFor="inputSwitch">
      {switchValueChild ? props.labelTrue || "true" : props.labelFalse || "false"}
    </label>
  </>
);}
