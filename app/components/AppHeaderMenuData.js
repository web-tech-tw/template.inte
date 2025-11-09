import {
  redirectLogin,
} from "../composables/useProfile.client";

export const title = "template.inte";
export const subtitle = "前端 Web 通用模板";

export const isSaraEnabled = true;
export const onClickSara = (profile) => {
  const isLoggedIn = !!profile;
  redirectLogin(!isLoggedIn);
};

export const menuItems = [
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
