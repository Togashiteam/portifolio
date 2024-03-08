export class BorderStyle implements IBorderStyle {
  isSimpleValue: boolean = true;
  borderWidth: string = "0";
  borderTopWidth: string = "0";
  borderRightWidth: string = "0";
  borderBottomWidth: string = "0";
  borderLeftWidth: string = "0";
  borderColor: string = "#000000";
  borderTopColor: string = "#000000";
  borderRightColor: string = "#000000";
  borderBottomColor: string = "#000000";
  borderLeftColor: string = "#000000";
  borderStyle: string = "solid";
  borderTopStyle: string = "solid";
  borderRightStyle: string = "solid";
  borderBottomStyle: string = "solid";
  borderLeftStyle: string = "solid";
  borderRadius: string = "0";
  borderTopLeftRadius: string = "0";
  borderTopRightRadius: string = "0";
  borderBottomRightRadius: string = "0";
  borderBottomLefttRadius: string = "0";

  constructor(obj?: IBorderStyle) {
    if (obj) {
      this.isSimpleValue = obj.isSimpleValue
      this.borderWidth = obj.borderWidth;
      this.borderTopWidth = obj.borderTopWidth;
      this.borderRightWidth = obj.borderRightWidth;
      this.borderBottomWidth = obj.borderBottomWidth;
      this.borderLeftWidth = obj.borderLeftWidth;
      this.borderColor = obj.borderColor;
      this.borderTopColor = obj.borderTopColor;
      this.borderRightColor = obj.borderRightColor;
      this.borderBottomColor = obj.borderBottomColor;
      this.borderLeftColor = obj.borderLeftColor;
      this.borderStyle = obj.borderStyle;
      this.borderTopStyle = obj.borderTopStyle;
      this.borderRightStyle = obj.borderRightStyle;
      this.borderBottomStyle = obj.borderBottomStyle;
      this.borderLeftStyle = obj.borderLeftStyle;
      this.borderRadius = obj.borderRadius;
      this.borderTopLeftRadius = obj.borderTopLeftRadius;
      this.borderTopRightRadius = obj.borderTopRightRadius;
      this.borderBottomRightRadius = obj.borderBottomRightRadius;
      this.borderBottomLefttRadius = obj.borderBottomLefttRadius;
    }
  }
}

export interface IBorderStyle {
  isSimpleValue: boolean;
  borderWidth: string;
  borderTopWidth: string;
  borderRightWidth: string;
  borderBottomWidth: string;
  borderLeftWidth: string;
  borderColor: string;
  borderTopColor: string;
  borderRightColor: string;
  borderBottomColor: string;
  borderLeftColor: string;
  borderStyle: string;
  borderTopStyle: string;
  borderRightStyle: string;
  borderBottomStyle: string;
  borderLeftStyle: string;
  borderRadius: string;
  borderTopLeftRadius: string;
  borderTopRightRadius: string;
  borderBottomRightRadius: string;
  borderBottomLefttRadius: string;
}
