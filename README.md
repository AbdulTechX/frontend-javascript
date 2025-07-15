## 0x04. TypeScript

### 📌 Overview

This project was developed by ALX Software Engineering program to give students a deeper understanding of TypeScript. It introduces TypeScript interfaces and how to work with the DOM using TypeScript. The main goal is to write strongly-typed JavaScript code that compiles cleanly without warnings or errors and integrates seamlessly with the browser environment.

---

### 🧠 Learning Objectives

At the end of this project, you should be able to:

* Understand and define **TypeScript interfaces**
* Use **type annotations** effectively
* Perform basic **DOM manipulation** using TypeScript
* Set up and configure **TypeScript** with **Webpack**
* Ensure zero type-checking errors using `tsc`
* Work with **ESLint** to maintain code quality

---

### ✅ Requirements

* Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
* All files should end with a new line
* All code must be transpileable on **Ubuntu 18.04 LTS**
* **TS scripts** will be tested using **Jest v24.9.**\*
* A `README.md` file is mandatory at the root of the project
* All TypeScript files should use the `.ts` extension
* The TypeScript compiler should not show any **warnings or errors**

---

### 🧪 Project Setup

In each task directory:

1. Copy the following config files:

   * `package.json`
   * `.eslintrc.js`
   * `tsconfig.json`
   * `webpack.config.js`

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the project:

   ```bash
   npm run build
   ```

---

### 📁 Task 0: Creating an interface for a student

#### Description:

* Write an **interface** named `Student` with the following properties:

  * `firstName`: string
  * `lastName`: string
  * `age`: number
  * `location`: string

* Create two student objects and store them in an array named `studentsList`.

* Using **Vanilla JavaScript**, render a table in the DOM. Each row should display the `firstName` and `location` of each student.

#### Example Output:

| First Name | Location |
| ---------- | -------- |
| John       | Lagos    |
| Jane       | Abuja    |

#### Requirements:

* Use **TypeScript** to define all variables and interfaces
* Webpack should return **no type errors**
* Code must be written in `main.ts`
* Output table should be rendered in the browser

---

### 📁 Directory Structure

```
0x04-TypeScript/
│
├── task_0/
│   ├── js/
│   │   └── main.ts
│   ├── dist/
│   │   └── bundle.js
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   ├── webpack.config.js
│   └── .eslintrc.js
│
└── README.md
```

---

### 🔗 Useful Commands

| Command         | Description                      |
| --------------- | -------------------------------- |
| `npm install`   | Install dependencies             |
| `npm run build` | Run Webpack to build the project |
| `npx tsc`       | Check for TypeScript errors      |

---

### 🪩 Linting & Style

* Linting is configured with ESLint and TypeScript plugin.
* Use `npx eslint . --ext .ts` to run lint checks.

---

### 👨‍💻 Author

**Abdulazeez Buhari**

---
