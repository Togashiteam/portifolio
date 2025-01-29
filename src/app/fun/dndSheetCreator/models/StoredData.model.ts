import { DateUtils } from "@/utils/date/dateUtils";

export class StoreData<T> implements IStoreData<T> {
  count: number = 0;
  data: T[] = [];
  schemma!: string;
  updated: string = "";

  constructor(schemma: string, json?: T | T[]) {

    if (json) {
      this.count = Array.isArray(json) ? json.length : 1;
      this.data = Array.isArray(json) ? json : [json];
      this.schemma = schemma;
      this.updated = DateUtils.getIsoToday();
      console.log("StoreData: ",this);
    }

  }
}

interface IStoreData<T> {
  count: number;
  data: T[];
  updated: string;
}

export interface ISelectOption {
  label: string;
  value: string;
  disabled?: boolean;
  selected?:boolean;
}

export interface IClassListItem {
  index: string;
  name: string;
  url: string;
}

export interface IClassDndApi {
  count: number;
  results: IClassListItem[];
}