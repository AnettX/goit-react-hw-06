# React + Vite. Redux та Redux Toolkit

1. npm create vite@latest
2. npm install axios
3. npm install react-router-dom
4. Деплой на Vercel: add vercel.json
5. Add Redux library to the project:

- npm install redux
- npm install react-redux

6. Redux DevTools: npm install @redux-devtools/extension

7. Створення store та підключення до проєкту: src/redux/store.js

Додатково:
Налаштування .eslintrc.cjs, до блоку rules додати властивість react/prop-types із значенням 0.
"react/prop-types": 0

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
