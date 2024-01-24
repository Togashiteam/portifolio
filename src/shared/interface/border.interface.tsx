export class BorderStyle implements IBorderStyle {
  width?: string;
  color?: string;

  constructor(obj?: IBorderStyle) {
    if (obj) {
      this.width = obj.width ? obj.width + "px" : "1px",
      this.color = obj.color ? obj.color : "#fff"
    }
  }
}

export interface IBorderStyle {
  width?: string;
  color?: string;

}