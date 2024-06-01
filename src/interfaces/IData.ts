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

interface ISkillItem {
  id: number;
  title: string;
  logo: string;
}

interface IProjectItemData {
  id: number;
  title: string;
  img: string;
  desc: {
    brief: string;
    common: string;
    technical: string[];
  };
  github: string;
  deploy: string;
}

export type { IDataRadioValue, IDataRadioItem, IDataDescItem, ISkillItem, IProjectItemData };
