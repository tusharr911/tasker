# Tasker

Tasker is a task management application built with React, TypeScript, and Vite. It allows users to manage their tasks efficiently with features like task creation, editing, deletion, and filtering.

## Features

- **Task Creation**: Easily create new tasks with a title and description.
- **Task Editing**: Edit existing tasks to update their details.
- **Task Deletion**: Remove tasks that are no longer needed.
- **Task Filtering**: Filter tasks based on their status (all, completed, pending, overdue).
- **Search Functionality**: Search tasks by title.
- **Responsive Design**: Works well on both desktop and mobile devices.

## Tech Stack

- **Frontend**:

  - [React](https://reactjs.org/): A JavaScript library for building user interfaces.
  - [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript that compiles to plain JavaScript.
  - [Vite](https://vitejs.dev/): A build tool that aims to provide a faster and leaner development experience for modern web projects.
  - [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapid UI development.
  - [Redux](https://redux.js.org/): A predictable state container for JavaScript apps.

- **Build Tools**:
  - [PostCSS](https://postcss.org/): A tool for transforming CSS with JavaScript plugins.
  - [Autoprefixer](https://github.com/postcss/autoprefixer): A PostCSS plugin to parse CSS and add vendor prefixes to CSS rules.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (version 6 or higher)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/tasker.git
   cd tasker
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Run the development server:

   ```sh
   npm run dev
   ```

4. Build the project:

   ```sh
   npm run build
   ```

5. Preview the production build:

   ```sh
   npm run preview
   ```

## Project Structure

```plaintext
├── public
│   ├── notes.svg
│   └── ...
├── src
│   ├── components
│   │   ├── custom
│   │   │   └── TaskList.tsx
│   │   └── ...
│   ├── main.tsx
│   └── ...
├── index.html
├── tailwind.config.js
├── package.json
└── ...
```

## License

This project is licensed under the MIT License.

Feel free to customize the README.md file as needed.
