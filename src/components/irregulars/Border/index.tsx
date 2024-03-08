"use client";
import { BorderStyle, IBorderStyle } from "@/shared/model/border.model";
import "./border.scss";

export default function BorderEditable(obj: IBorderStyle) {
  const border = new BorderStyle(obj);

  // TODO: WIP - Criar Interface
  const style: any = {};

  console.clear();
  console.log(border);
    if (border.isSimpleValue) {
      style["borderWidth"] = `${border.borderWidth}px`
      style['borderStyle'] = (`${border.borderStyle}`);
      style['borderColor'] = (`${border.borderColor}`);
    } else {
      style["borderTopWidth"] = `${border.borderTopWidth}px`;
      style["borderRightWidth"] = `${border.borderRightWidth}px`;
      style["borderBottomWidth"] = `${border.borderBottomWidth}px`;
      style["borderLeftWidth"] = `${border.borderLeftWidth}px`;

      style['borderStyle'] = (`${border.borderStyle}`);
      style['borderTopStyle'] = (`${border.borderTopStyle}`);
      style['borderRightStyle'] = (`${border.borderRightStyle}`);
      style['borderBottomStyle'] = (`${border.borderBottomStyle}`);
      style['borderLeftStyle'] = (`${border.borderLeftStyle}`);

      style['borderTopColor'] = (`${border.borderTopColor}`);
      style['borderRightColor'] = (`${border.borderRightColor}`);
      style['borderBottomColor'] = (`${border.borderBottomColor}`);
      style['borderLeftColor'] = (`${border.borderLeftColor}`);
    }



    style['borderRadius'] = (`${border.borderRadius}px`);

  return (
    <>
      <div
        className="border-editable p-20 w-4/5 mx-auto"
        style={style}
      ></div>
    </>
  );
}
