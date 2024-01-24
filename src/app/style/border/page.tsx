"use client";
import { ChangeEvent, ChangeEventHandler, useState } from "react";

import ItemMenu from "../teste";
import BorderEditable from "@/components/irregulars/border/border";

export default function StyleBorder() {

  const [borderWidthValue, setBorderWidthValue] = useState<string>();
  const [borderColorValue, setBorderColorValue] = useState<string>();

  const setBorderWidth = (e: ChangeEvent<HTMLInputElement>) => setBorderWidthValue(e.currentTarget.value);
  const setBorderColor = (e: ChangeEvent<HTMLInputElement>) => setBorderColorValue(e.currentTarget.value);

  return (
    <>
      <ItemMenu hidden={false} />

      <h1> Border </h1>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-1">
          <div className="formulario bg-white">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Border Width
              </label>
              <div className="mt-2">
                <input
                  type="range"
                  min={0}
                  max={255}
                  onChange={setBorderWidth}
                  value={borderWidthValue ? borderWidthValue : "1"}
                />
              </div>
              <div className="mt-2">
                <input
                  type="number"
                  min={0}
                  max={255}
                  onChange={setBorderWidth}
                  value={borderWidthValue ? borderWidthValue : "1"}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Border Style
              </label>
              <div className="mt-2">
                <select className="selectpicker" id="borderStyle">
                  <option selected> solid </option>
                  <option> dotted </option>
                  <option> dashed </option>
                  <option> double </option>
                  <option> groove </option>
                  <option> ridge </option>
                  <option> inset </option>
                  <option> outset </option>
                  <option> none </option>
                  <option> hidden </option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Border Color
              </label>
              <div className="mt-2">
                <input
                  type="color"
                  onChange={setBorderColor}
                  value={borderColorValue}
                ></input>
                <input
                  type="text"
                  value={borderColorValue}
                  onChange={setBorderColor}
                ></input>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2" style={{ backgroundColor: "cyan" }}>
          <div className="border-editable bg-">
            <span className="width"> {borderWidthValue} </span>
            <BorderEditable width={borderWidthValue} color={borderColorValue} />
          </div>
        </div>
      </div>
    </>
  );
}
