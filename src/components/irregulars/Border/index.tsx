"use client";
import { BorderStyle, IBorderStyle } from "@/shared/model/border.model";
import "./border.scss";

export default function BorderEditable(obj: IBorderStyle) {
  const border = new BorderStyle(obj);

  // TODO: WIP - Criar Interface
  const style: any = {};

  console.clear();
    if (border.isSimpleValue) {
      style["borderWidth"] = `${border.borderWidth}px`
    } else {
      style["borderTopWidth"] = `${border.borderTopWidth}px`;
      style["borderRightWidth"] = `${border.borderRightWidth}px`;
      style["borderBottomWidth"] = `${border.borderBottomWidth}px`;
      style["borderLeftWidth"] = `${border.borderLeftWidth}px`;
    }

    style['borderColor'] = (`${border.borderColor}`);
    style['borderStyle'] = (`${border.borderStyle}`);
    style['borderRadius'] = (`${border.borderRadius}px`);

    console.log("🚀 ~ style:", style)

  return (
    <>
      <div
        className="border-editable p-20 w-4/5 mx-auto"
        style={style}
      ></div>
    </>
  );
}
