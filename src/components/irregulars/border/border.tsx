import { BorderStyle, IBorderStyle } from "@/shared/model/border.model";
import "./border.scss";

export default function BorderEditable(obj: IBorderStyle) {

  const border = new BorderStyle(obj);

return (
  <>
    <div
      className="border-editable p-20 w-4/5 mx-auto"
      style={{
        borderWidth: `${border.borderWidth}px`,
        borderColor: `${border.borderColor}`,
        borderStyle: `${border.borderStyle}`,
        borderRadius: `${border.borderRadius}px`,
      }}
    ></div>
  </>
);}