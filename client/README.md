# 개인 페이지 제작

## 주요 사용 기술

- Nest.js
- TypeScript
- Tailwind CSS
- Module CSS

## 디렉토리 구조

```
┠─ .next
┠─ node_modules
┠─ components
│    ├ common
│    │   └ Header.tsx 
│    │
│    └ main
│        ├ about 
│        │   ├ index.tsx
│        │   └ index.module.css
│        │
│        ├ Contact.tsx 
│        ├ education 
│        │   ├ index.tsx
│        │   └ index.module.css
│        │
│        ├ Projects.tsx 
│        ├ Skills.tsx 
│        └ start
│            ├ index.tsx
│            └ index.module.css
│
┠─ containers
│    └ Main.tsx
│
┠─ pages
│    ├ _app.tsx 
│    ├ _document.tsx
│    └ index.tsx
┠─ styles
│    └ globals.css
┠─ types
│    └ mainType.d.ts
┠─ public
│    └ data
│        ├ about.json
│        ├ education.json
│        └ projects.json
│
├ .eslintrc.json
├ .gitignore
├ next-env.d.ts
├ next.config.js
├ package.json
├ postcss.config.js
├ README.md
├ tailwind.config.js
├ tsconfig.json
└ yarn.lock
```
<br>

---

© 2023 AHoney. All rights reserved.