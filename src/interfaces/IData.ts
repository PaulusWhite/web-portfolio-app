type IDataRadioValue = "itAcademy" | "rss" | "udemy" | "self";

interface IDataRadioItem {
  id: number;
  label: "IT Academy" | "The Rolling Scopes School" | "Udemy" | "Self-study";
  value: IDataRadioValue;
}

interface IDataDescItem {
  id: number;
  desc: string;
}

export type { IDataRadioValue, IDataRadioItem, IDataDescItem };
