# Currency Converter

![React](https://img.shields.io/badge/React-18.3.1-blue)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.0-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Vercel](https://img.shields.io/badge/Hosted%20on-Vercel-black)

### 🚀 [Live Demo](https://passwordgenerator.jaytillu.com)

## 🌟 Overview

**Random Password Generator** is a React-based application that allows users to generate secure, random passwords based on **customizable criteria**. Users can specify the inclusion of numbers and special characters, ensuring versatility for various security needs. The app also offers an easy option to copy generated passwords to the clipboard, improving usability.

## ✨ React Features

- **State Management `useState`**: The app effectively manages multiple state variables, such as password length, inclusion of numbers, and special characters, ensuring a responsive UI.
- **Refs for Clipboard Functionality `useRef`**: The app uses useRef to enable seamless clipboard access for copying the generated password. It also highlights the copied text, enhancing the user experience.
- **Efficient Event Handling `useCallback`**: To optimize performance, especially for frequently changing inputs like password options, useCallback is employed to prevent unnecessary re-renders.
- **Lifecycle Management `useEffect`**: The application leverages useEffect to respond to changes in state, dynamically updating the generated password as the user modifies their selections.

## ✨ JavaScript Features

- **Random Password Generation**: The app includes a robust password generation algorithm, leveraging core JavaScript functions to randomize characters based on user-selected criteria (numbers, special characters).
- **Dynamic Class Injection with Tailwind**: Tailwind CSS is used to style the app, with dynamically injected classes based on state variables, such as for highlighting copied passwords.
- **Clipboard Interaction**: The clipboard interaction, enabled via useRef, allows users to copy the generated password with a single click, providing feedback through UI highlights.

## 📸 Screenshots

![Alt text](./public/Random-Password-Generator.png?raw=true "Optional Title")

## 🔧 Installation and Setup

To run this project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/Jay-Tillu/Password-Generator.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-repo-name
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the Project:
   ```bash
   npm run dev
   ```

Thanks for your time and attention.
