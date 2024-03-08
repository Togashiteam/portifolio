"use client";
import InputColor from "@/components/atoms/inputs/InputColor";
import InputRange from "@/components/atoms/inputs/InputRange";
import SelectOptions, { StylesConst } from "@/components/atoms/inputs/SelectOptions";
import BorderEditable from "@/components/irregulars/Border";
import { ChangeEvent, useState } from "react";

export default function StyleBorder() {
  const [simpleValues, setSimpleValues] = useState<boolean>(true);

  const [borderWidthValue, setBorderWidthValue] = useState<string>("1");
  const [borderTopWidthValue, setBorderTopWidthValue] = useState<string>("1");
  const [borderRightWidthValue, setBorderRightWidthValue] = useState<string>("1");
  const [borderBottomWidthValue, setBorderBottomWidthValue] = useState<string>("1");
  const [borderLeftWidthValue, setBorderLeftWidthValue] = useState<string>("1");

  const [borderStyleValue, setBorderStyleValue] = useState<string>("solid");
  const [borderTopStyleValue, setBorderTopStyleValue] = useState<string>("solid");
  const [borderRightStyleValue, setBorderRightStyleValue] = useState<string>("solid");
  const [borderBottomStyleValue, setBorderBottomStyleValue] = useState<string>("solid");
  const [borderLeftStyleValue, setBorderLeftStyleValue] = useState<string>("solid");

  const [borderColorValue, setBorderColorValue] = useState<string>("#000000");
  const [borderTopColorValue, setBorderTopColorValue] = useState<string>("#000000");
  const [borderRightColorValue, setBorderRightColorValue] = useState<string>("#000000");
  const [borderBottomColorValue, setBorderBottomColorValue] = useState<string>("#000000");
  const [borderLeftColorValue, setBorderLeftColorValue] = useState<string>("#000000");

  const [borderRadiusValue, setBorderRadiusValue] = useState<string>("0");

  const setSimpleValue = (e: ChangeEvent<HTMLInputElement>) => setSimpleValues(e.currentTarget.checked);
  const setBorderRadius = (e: ChangeEvent<HTMLInputElement>) => setBorderRadiusValue(e.currentTarget.value);

  return (
    <>
      <div className="mb-5 md:mb-0 md:grid md:grid-cols-3 md:gap-8 h-screen">
        <div className="md:col-span-1">
          <div className="formulario bg-white p-5 overflow-x-clip">
            <label
              htmlFor="simpleValuesCheckBox"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Show Simple Values
            </label>
            <div className="mt-2">
              <input
                id="simpleValuesCheckBox"
                className="input checkbox"
                type="checkbox"
                onChange={setSimpleValue}
                checked={simpleValues}
              />
            </div>

            {/* BORDER WIDTH */}
            {simpleValues && (
              <div className="border-width-wrapper">
                <InputRange
                  label={"Border Width"}
                  rangeValue={borderWidthValue}
                  setRangeValue={setBorderWidthValue}
                  defaultValue={borderWidthValue || '1'}
                ></InputRange>
              </div>
            )}
            {!simpleValues && (
              <div className="multiple-border-width-wrapper">
                <div className="border-width-wrapper">
                  <InputRange
                    label={"Border Top"}
                    rangeValue={borderTopWidthValue}
                    setRangeValue={setBorderTopWidthValue}
                    defaultValue={borderTopWidthValue || "1"}
                  ></InputRange>
                </div>
                <div className="border-width-wrapper">
                  <InputRange
                    label={"Border Right"}
                    rangeValue={borderRightWidthValue}
                    setRangeValue={setBorderRightWidthValue}
                    defaultValue={borderRightWidthValue || "1"}
                  ></InputRange>
                </div>
                <div className="border-width-wrapper">
                  <InputRange
                    label={"Border Bottom"}
                    rangeValue={borderBottomWidthValue}
                    setRangeValue={setBorderBottomWidthValue}
                    defaultValue={borderBottomWidthValue || "1"}
                  ></InputRange>
                </div>
                <div className="border-width-wrapper">
                  <InputRange
                    label={"Border Left"}
                    rangeValue={borderLeftWidthValue}
                    setRangeValue={setBorderLeftWidthValue}
                    defaultValue={borderLeftWidthValue || "1"}
                  ></InputRange>
                </div>
              </div>
            )}

            {/* BORDER STYLE */}
            {simpleValues && (
              <div className="border-style-wrapper">
                <SelectOptions
                  label={"Border Style"}
                  selectedItem={borderStyleValue}
                  itens={StylesConst}
                  setSelectOptionValue={setBorderStyleValue}
                  defaultValue={borderStyleValue || 'solid'}
                ></SelectOptions>
              </div>
            )}
            {!simpleValues && (
              <div className="multiple-border-style-wrapper">
                <div className="border-style-wrapper">
                  <SelectOptions
                    label={"Border Top Style"}
                    selectedItem={borderTopStyleValue}
                    itens={StylesConst}
                    setSelectOptionValue={setBorderTopStyleValue}
                    defaultValue={borderTopStyleValue || 'solid'}
                  ></SelectOptions>
                </div>
                <div className="border-style-wrapper">
                  <SelectOptions
                    label={"Border Right Style"}
                    selectedItem={borderRightStyleValue}
                    itens={StylesConst}
                    setSelectOptionValue={setBorderRightStyleValue}
                    defaultValue={borderRightStyleValue || 'solid'}
                  ></SelectOptions>
                </div>
                <div className="border-style-wrapper">
                  <SelectOptions
                    label={"Border Bottom Style"}
                    selectedItem={borderBottomStyleValue}
                    itens={StylesConst}
                    setSelectOptionValue={setBorderBottomStyleValue}
                    defaultValue={borderBottomStyleValue || 'solid'}
                  ></SelectOptions>
                </div>
                <div className="border-style-wrapper">
                  <SelectOptions
                    label={"Border Left Style"}
                    selectedItem={borderLeftStyleValue}
                    itens={StylesConst}
                    setSelectOptionValue={setBorderLeftStyleValue}
                    defaultValue={borderLeftStyleValue || 'solid'}
                  ></SelectOptions>
                </div>
              </div>
            )}

            {/* BORDER COLOR */}
            {simpleValues && (
              <div className="border-color-wrapper">
                <InputColor
                  label={"Border Color"}
                  color={borderColorValue}
                  setColorValue={setBorderColorValue}
                  defaultValue={borderColorValue || "#000"}
                ></InputColor>
              </div>
            )}
            {!simpleValues && (
              <div className="multiple-color-width-wrapper">
                <div className="border-color-wrapper">
                  <InputColor
                    label={"Border Top Color"}
                    color={borderTopColorValue}
                    setColorValue={setBorderTopColorValue}
                    defaultValue={borderTopColorValue || "#000"}
                  ></InputColor>
                </div>

                <div className="border-color-wrapper">
                  <InputColor
                    label={"Border Right Color"}
                    color={borderRightColorValue}
                    setColorValue={setBorderRightColorValue}
                    defaultValue={borderRightColorValue || "#000"}
                  ></InputColor>
                </div>

                <div className="border-color-wrapper">
                  <InputColor
                    label={"Border Bottom Color"}
                    color={borderBottomColorValue}
                    setColorValue={setBorderBottomColorValue}
                    defaultValue={borderBottomColorValue || "#000"}
                  ></InputColor>
                </div>

                <div className="border-color-wrapper">
                  <InputColor
                    label={"Border Left Color"}
                    color={borderLeftColorValue}
                    setColorValue={setBorderLeftColorValue}
                    defaultValue={borderLeftColorValue || "#000"}
                  ></InputColor>
                </div>
              </div>
            )}

            {/* BORDER RADIUS */}
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
              borderWidth={borderWidthValue}
              borderColor={borderColorValue}
              borderStyle={borderStyleValue}
              borderRadius={borderRadiusValue}
              borderTopWidth={borderTopWidthValue}
              borderRightWidth={borderRightWidthValue}
              borderBottomWidth={borderBottomWidthValue}
              borderLeftWidth={borderLeftWidthValue}
              borderTopStyle={borderTopStyleValue}
              borderRightStyle={borderRightStyleValue}
              borderBottomStyle={borderBottomStyleValue}
              borderLeftStyle={borderLeftStyleValue}
              borderTopColor={borderTopColorValue}
              borderRightColor={borderRightColorValue}
              borderBottomColor={borderBottomColorValue}
              borderLeftColor={borderLeftColorValue}
              borderTopLeftRadius={""}
              borderTopRightRadius={""}
              borderBottomLefttRadius={""}
              borderBottomRightRadius={""}
            />
          </div>
        </div>
      </div>
    </>
  );
}
