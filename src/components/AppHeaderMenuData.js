export const titleLong = 'template.inte - 前端 Web 通用模板';
export const titleShort = 'template.inte';

export const isHomeEnabled = true;
export const isSaraEnabled = true;

export const menuItems = [
  {
    name: '通用模板',
    type: 'dropdown',
    status: 'template',
    children: [
      {
        name: 'template.inte',
        description: '前端 Web 通用模板',
        icon: 'GlobeAltIcon',
        onClick: () => window.open('https://github.com/web-tech-tw/template.inte')
      },
      {
        name: 'template.recv',
        description: '後端 API 通用模板',
        icon: 'ServerStackIcon',
        onClick: () => window.open('https://github.com/web-tech-tw/template.recv')
      }
    ]
  },
  {
    name: 'GitHub',
    type: 'function',
    icon: 'CodeBracketIcon',
    onClick: () => window.open('https://github.com/web-tech-tw')
  }
]
