"use client";
import InputRange from "@/components/atoms/inputs/InputRange";
import BorderEditable from "@/components/irregulars/Border";
import { ChangeEvent, useState } from "react";

export default function StyleBorder() {
  const [simpleValues, setSimpleValues] = useState<boolean>(true);

  const [borderWidthValue, setBorderWidthValue] = useState<string>("1");
  const [borderTopWidthValue, setBorderTopWidthValue] = useState<string>("0");
  const [borderRightWidthValue, setBorderRightWidthValue] = useState<string>("0");
  const [borderBottomWidthValue, setBorderBottomWidthValue] = useState<string>("0");
  const [borderLeftWidthValue, setBorderLeftWidthValue] = useState<string>("0");


  const [borderColorValue, setBorderColorValue] = useState<string>("#000000");
  const [borderStyleValue, setBorderStyleValue] = useState<string>("solid");
  const [borderRadiusValue, setBorderRadiusValue] = useState<string>("0");

  const setSimpleValue = (e: ChangeEvent<HTMLInputElement>) => setSimpleValues(e.currentTarget.checked);
  const setBorderColor = (e: ChangeEvent<HTMLInputElement>) => setBorderColorValue(e.currentTarget.value);
  const setBorderStyle = (e: ChangeEvent<HTMLSelectElement>) => setBorderStyleValue(e.currentTarget.value);
  const setBorderRadius = (e: ChangeEvent<HTMLInputElement>) => setBorderRadiusValue(e.currentTarget.value);

  return (
    <>
      <div className="mb-5 md:mb-0 md:grid md:grid-cols-3 md:gap-8 h-screen">
        <div className="md:col-span-1">
          <div className="formulario bg-white p-5 overflow-x-clip">
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Show Simple Values
            </label>
            <div className="mt-2">
              <input
                className="input checkbox"
                type="checkbox"
                onChange={setSimpleValue}
                checked={simpleValues}
              />
            </div>

            {simpleValues && (
              <div className="border-width-wrapper">
                <InputRange
                  label={"Border Width"}
                  borderWidth={borderWidthValue}
                  setBorderWidth={setBorderWidthValue}
                  defaultValue={"1"}
                ></InputRange>
              </div>
            )}
            {!simpleValues && (
              <div className="multiple-border-width-wrapper">
                <div className="border-width-wrapper">
                  <InputRange
                    label={"Border Top"}
                    borderWidth={borderTopWidthValue}
                    setBorderWidth={setBorderTopWidthValue}
                    defaultValue={"1"}
                  ></InputRange>
                </div>
                <div className="border-width-wrapper">
                  <InputRange
                    label={"Border Right"}
                    borderWidth={borderRightWidthValue}
                    setBorderWidth={setBorderRightWidthValue}
                    defaultValue={"1"}
                  ></InputRange>
                </div>
                <div className="border-width-wrapper">
                  <InputRange
                    label={"Border Bottom"}
                    borderWidth={borderBottomWidthValue}
                    setBorderWidth={setBorderBottomWidthValue}
                    defaultValue={"1"}
                  ></InputRange>
                </div>
                <div className="border-width-wrapper">
                  <InputRange
                    label={"Border Left"}
                    borderWidth={borderLeftWidthValue}
                    setBorderWidth={setBorderLeftWidthValue}
                    defaultValue={"1"}
                  ></InputRange>
                </div>
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
                    onChange={setBorderRadius}
                    value={borderRadiusValue ? borderRadiusValue : "0"}
                  />
                  <input
                    className="input number"
                    type="number"
                    min={0}
                    max={255}
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

        <div className="md:col-span-2 h-full">
          <div className="border-editable bg-white p-5 overflow-x-clip h-full">
            <BorderEditable
              isSimpleValue={simpleValues}
              borderBottomLefttRadius={""}
              borderWidth={borderWidthValue}
              borderColor={borderColorValue}
              borderStyle={borderStyleValue}
              borderRadius={borderRadiusValue}
              borderTopWidth={borderTopWidthValue}
              borderRightWidth={borderRightWidthValue}
              borderBottomWidth={borderBottomWidthValue}
              borderLeftWidth={borderLeftWidthValue}
              borderTopColor={""}
              borderRightColor={""}
              borderBottomColor={""}
              borderLeftColor={""}
              borderTopStyle={""}
              borderRightStyle={""}
              borderBottomStyle={""}
              borderLeftStyle={""}
              borderTopLeftRadius={""}
              borderTopRightRadius={""}
              borderBottomRightRadius={""}
            />
          </div>
        </div>
      </div>
    </>
  );
}
