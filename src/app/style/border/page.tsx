"use client";
import { ChangeEvent, useState } from "react";
import BorderEditable from "@/components/irregulars/border/border";

export default function StyleBorder() {


  const [simpleValues, setSimpleValues] = useState<boolean>(true);
  const [borderWidthValue, setBorderWidthValue] = useState<string>('1');
  const [borderColorValue, setBorderColorValue] = useState<string>('#000000');
  const [borderStyleValue, setBorderStyleValue] = useState<string>('solid');
  const [borderRadiusValue, setBorderRadiusValue] = useState<string>('0');

  const setSimpleValue = (e: ChangeEvent<HTMLInputElement>) => setSimpleValues(e.currentTarget.checked);
  const setBorderWidth = (e: ChangeEvent<HTMLInputElement>) => setBorderWidthValue(e.currentTarget.value);
  const setBorderColor = (e: ChangeEvent<HTMLInputElement>) => setBorderColorValue(e.currentTarget.value);
  const setBorderStyle = (e: ChangeEvent<HTMLSelectElement>) => setBorderStyleValue(e.currentTarget.value);
  const setBorderRadius = (e: ChangeEvent<HTMLInputElement>) => setBorderRadiusValue(e.currentTarget.value);

  return (
    <>
      <div className="mb-5 sm:mb-0 sm:grid sm:grid-cols-3 sm:gap-8 h-screen">
        <div className="sm:col-span-1">
          <div className="formulario bg-white p-5 overflow-x-clip">
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Complex Values
            </label>
            <div className="mt-2">
              <input
                className="input checkbox"
                type="checkbox"
                onChange={setSimpleValue}
                defaultChecked={true}
              />
            </div>

            {simpleValues && (
              <div className="border-width-wrapper">
                <label
                  htmlFor="borderWidth"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Border Width
                </label>
                <div className="mt-2 flex flex-row ">
                  <input
                    id="borderWidth"
                    className="input range"
                    type="range"
                    min={0}
                    max={255}
                    onChange={setBorderWidth}
                    value={borderWidthValue ? borderWidthValue : "1"}
                  />
                  <input
                    className="input number"
                    type="number"
                    min={0}
                    max={255}
                    onChange={setBorderWidth}
                    value={borderWidthValue ? borderWidthValue : "1"}
                  />
                </div>
              </div>
            )}
            {!simpleValues && (
              <div className="multiple-border-width-wrapper">
                <h1> Multiple Widths </h1>
              </div>
            )}

            {simpleValues && (
              <div className="border-style-wrapper">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Border Style
                </label>
                <div className="mt-2">
                  <select
                    className="input select"
                    defaultValue={"solid"}
                    onChange={setBorderStyle}
                    value={borderStyleValue}
                  >
                    <option value="solid"> solid </option>
                    <option value="dotted"> dotted </option>
                    <option value="dashed"> dashed </option>
                    <option value="double"> double </option>
                    <option value="groove"> groove </option>
                    <option value="ridge"> ridge </option>
                    <option value="inset"> inset </option>
                    <option value="outset"> outset </option>
                    <option value="none"> none </option>
                    <option value="hidden"> hidden </option>
                  </select>
                </div>
              </div>
            )}
            {!simpleValues && (
              <div className="multiple-border-style-wrapper">
                <h1> Multiple Styles </h1>
              </div>
            )}

            {simpleValues && (
              <div className="border-color-wrapper">
                <label
                  htmlFor="borderColor"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Border Color
                </label>
                <div className="mt-2 flex flex-row">
                  <input
                    id="borderColor"
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
            )}
            {!simpleValues && (
              <div className="multiple-border-color-wrapper">
                <h1> Multiple Colors </h1>
              </div>
            )}

            {simpleValues && (
              <div className="border-radius-wrapper">
                <label
                  htmlFor="borderRadius"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Border Radius
                </label>
                <div className="mt-2 flex flex-row ">
                  <input
                    id="borderRadius"
                    className="input range"
                    type="range"
                    min={0}
                    max={255}
                    defaultValue={0}
                    onChange={setBorderRadius}
                    value={borderRadiusValue ? borderRadiusValue : "0"}
                  />
                  <input
                    className="input number"
                    type="number"
                    min={0}
                    max={255}
                    defaultValue={0}
                    onChange={setBorderRadius}
                    value={borderRadiusValue ? borderRadiusValue : "0"}
                  />
                </div>
              </div>
            )}
            {!simpleValues && (
              <div className="multiple-border-radius-wrapper">
                <h1> Multiple Radius </h1>
              </div>
            )}
          </div>
        </div>

        <div className="sm:col-span-2 h-full">
          <div className="border-editable bg-white p-5 overflow-x-clip h-full">
            <BorderEditable
              borderWidth={borderWidthValue}
              borderColor={borderColorValue}
              borderStyle={borderStyleValue}
              borderRadius={borderRadiusValue}
            />
          </div>
        </div>
      </div>
    </>
  );
}
