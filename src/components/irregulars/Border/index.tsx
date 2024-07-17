"use client";
import { BorderStyle, IBorderStyle } from "@/shared/model/border.model";
import "./border.scss";

export default function BorderEditable(obj: IBorderStyle) {
  const border = new BorderStyle(obj);
  const style: any = {};

  console.clear();
    if (border.isSimpleValue) {
      style["borderWidth"] = `${border.borderWidth}px`
      style['borderStyle'] = (`${border.borderStyle}`);
      style['borderColor'] = (`${border.borderColor}`);
      style['borderRadius'] = (`${border.borderRadius}px`);
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

      style['borderTopLeftRadius'] = (`${border.borderTopLeftRadius}px`);
      style['borderTopRightRadius'] = (`${border.borderTopRightRadius}px`);
      style['borderBottomLeftRadius'] = (`${border.borderBottomLeftRadius}px`);
      style['borderBottomRightRadius'] = (`${border.borderBottomRightRadius}px`);
    }

  return (
    <>
      <div
        className="border-editable p-20 w-3/4 mx-auto"
        style={style}
      ></div>
    </>
  );
}
