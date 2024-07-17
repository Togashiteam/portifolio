"use client"
import { ChangeEvent, OptionHTMLAttributes, useEffect, useState } from "react";

interface SelectOptionsInterface {
  label: string;
  selectedItem: string;
  defaultValue: string;
  itens: any[];
  setSelectOptionValue: (e: string) => void;
}

export default function SelectOptions(props: SelectOptionsInterface) {

  const [selectOptionValueChild, setSelectOptionValueChild] = useState<string>(props.defaultValue);
  const setSelectValue = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectOptionValueChild(e.currentTarget.value);
    props.setSelectOptionValue(e.currentTarget.value);
  };

return (
  <>
     <label
        htmlFor="selectOption"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        { props.label }
      </label>
      <div className="mt-2">
        <select
          id="selectOption"
          className="input select"
          onChange={setSelectValue}
          value={selectOptionValueChild}
        >
        { props.itens.map(item => <option id={`id-${item.value}`} value={item.value}> {item.label} </option>) }
        </select>
      </div>
  </>
);}


export const StylesConst: any[] = [
  {
    value: 'solid',
    disabled: false,
    label: 'solid',
    selected: false
  },
  {
    value: 'dotted',
    disabled: false,
    label: 'dotted',
    selected: false
  },
  {
    value: 'dashed',
    disabled: false,
    label: 'dashed',
    selected: false
  },
  {
    value: 'double',
    disabled: false,
    label: 'double',
    selected: false
  },
  {
    value: 'groove',
    disabled: false,
    label: 'groove',
    selected: false
  },
  {
    value: 'ridge',
    disabled: false,
    label: 'ridge',
    selected: false
  },
  {
    value: 'inset',
    disabled: false,
    label: 'inset',
    selected: false
  },
  {
    value: 'outset',
    disabled: false,
    label: 'outset',
    selected: false
  },
  {
    value: 'none',
    disabled: false,
    label: 'none',
    selected: false
  },
  {
    value: 'hidden',
    disabled: false,
    label: 'hidden',
    selected: false
  },
]