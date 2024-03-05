export interface IFontFile {
  [variant: string]: string;
}

export interface IFontItem {
  family: string;
  variants: string[];
  subsets: string[];
  version: string;
  lastModified: string;
  files: IFontFile;
  category: string;
  kind: string;
  menu: string;
}

export interface IFont {
  items: IFontItem[];
}
