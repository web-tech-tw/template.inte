import type {UserProfile} from "~/composables/useProfile.client";

export const title = "Taiwan Web Technology Promotion Organization";
export const subtitle = "臺灣網際網路技術推廣組織";
export const label = "Web-Tech-TW";

export const isSaraEnabled = true;
export const onClickSara = (_profile: UserProfile | null = null): void => {
  const {
    VITE_SARA_INTE_HOST: saraInteHost,
  } = import.meta.env;
  location.assign(saraInteHost);
};

export interface MenuDropdownChild {
  name: string;
  description: string;
  icon: string;
  onClick: () => void;
}

export interface MenuDropdownItem {
  name: string;
  type: "dropdown";
  status: string;
  children: MenuDropdownChild[];
}

export interface MenuFunctionItem {
  name: string;
  type: "function";
  icon: string;
  onClick: () => void;
}

export type MenuItem = MenuDropdownItem | MenuFunctionItem;

export const menuItems: MenuItem[] = [
  {
    name: "通用模板",
    type: "dropdown",
    status: "template",
    children: [
      {
        name: "template.inte",
        description: "前端 Web 通用模板",
        icon: "GlobeAltIcon",
        onClick: () => window.open("https://github.com/web-tech-tw/template.inte"),
      },
      {
        name: "template.recv",
        description: "後端 API 通用模板",
        icon: "ServerStackIcon",
        onClick: () => window.open("https://github.com/web-tech-tw/template.recv"),
      },
    ],
  },
  {
    name: "GitHub",
    type: "function",
    icon: "CodeBracketIcon",
    onClick: () => window.open("https://github.com/web-tech-tw"),
  },
];
