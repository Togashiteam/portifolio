import { BorderStyle, IBorderStyle } from "@/shared/interface/border.interface";
import "./border.scss";

export default function BorderEditable(obj: IBorderStyle) {


  const border = new BorderStyle(obj);


return (
  <>
    <div
      className="border-editable p-5 w-4/5 mx-auto"
      style={{
        borderWidth: `${border.width}`,
        borderColor: `${border.color}`,
      }}
    ></div>
  </>
);}