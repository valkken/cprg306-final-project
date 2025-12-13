export const questions = [
  // --- Module 1: Intro & Tools ---
  {
    id: 1,
    question: "What does the 'npm install' command do?",
    options: [
      "It installs Node.js on your system.",
      "It installs the specified package in your project and saves it in the package.json dependencies.",
      "It installs npx on your system.",
      "It installs all packages specified in package.json into a local node_modules folder."
    ],
    correctAnswer: "It installs all packages specified in package.json into a local node_modules folder."
  },
  {
    id: 2,
    question: "How do you create a new Next.js project called my-app using the latest version of create-next-app?",
    options: [
      "npm create-next-app@latest my-app",
      "npm install create-next-app@latest my-app",
      "npx create-next-app@latest my-app",
      "npm new create-next-app@latest my-app"
    ],
    correctAnswer: "npx create-next-app@latest my-app"
  },
  {
    id: 3,
    question: "What is the purpose of the import keyword in JavaScript?",
    options: [
      "To include code from another JavaScript file.",
      "To export code to another JavaScript file.",
      "To delete code from the current JavaScript file.",
      "None of the above."
    ],
    correctAnswer: "To include code from another JavaScript file."
  },

  // --- Module 2 & 3: React Basics & Props ---
  {
    id: 4,
    question: "Which of the following is a correct way to define a functional component in React?",
    options: [
      "function Component() { return <p>Hello</p>; }",
      "function Component { return <p>Hello</p>; }",
      "function Component() { return 'Hello'; }",
      "function Component = () { return <p>Hello</p>; }"
    ],
    correctAnswer: "function Component() { return <p>Hello</p>; }"
  },
  {
    id: 5,
    question: "What is the term for data passed from parent components to child components in React?",
    options: ["States", "Data", "Props", "Elements"],
    correctAnswer: "Props"
  },
  {
    id: 6,
    question: "In a React component, what is the benefit of destructuring props in the function parameter list?",
    options: [
      "It simplifies the code, making it easier to read and write",
      "It compiles the code into a more efficient format",
      "It prevents errors from undeclared variables",
      "It automatically checks the type of the props"
    ],
    correctAnswer: "It simplifies the code, making it easier to read and write"
  },
  {
    id: 7,
    question: "In React, what is the `children` prop used for?",
    options: [
      "To pass components as data to other components",
      "To style components",
      "To make API calls",
      "To manage state"
    ],
    correctAnswer: "To pass components as data to other components"
  },

  // --- JS & Tailwind Basics ---
  {
    id: 8,
    question: "Which JavaScript concept allows developers to unpack values from objects into distinct variables?",
    options: ["Template Literals", "Destructuring", "Objects", "JSON"],
    correctAnswer: "Destructuring"
  },
  {
    id: 9,
    question: "In Tailwind CSS, what utility is used to control the font size?",
    options: ["font-", "size-", "text-", "fs-"],
    correctAnswer: "text-"
  },
  {
    id: 10,
    question: "In Tailwind CSS, how do you control the padding on the x-axis?",
    options: ["px-", "x-", "p-", "padding-x-"],
    correctAnswer: "px-"
  },
  {
    id: 11,
    question: "What does the 'sm:' class in Tailwind CSS apply to?",
    options: [
      "Screens that are 640px wide or wider",
      "Screens that are less than 640px wide",
      "Small screen devices like phones and tablets",
      "All screen sizes"
    ],
    correctAnswer: "Screens that are 640px wide or wider"
  },

  // --- Lists & Arrays ---
  {
    id: 12,
    question: "What method in JavaScript is used to create a new array with elements that pass a test?",
    options: ["Filter", "Concat", "Reduce", "map"],
    correctAnswer: "Filter"
  },
  {
    id: 13,
    question: "What is the purpose of assigning a unique 'key' prop when rendering a list of items in React?",
    options: [
      "To ensure that each item has a unique identifier for styling",
      "To help React optimize the rendering by quickly identifying which items have changed",
      "To prevent warnings in the console",
      "To improve the performance of the map function"
    ],
    correctAnswer: "To help React optimize the rendering by quickly identifying which items have changed"
  },
  {
    id: 14,
    question: "How do you render a list of items in React?",
    options: [
      "Use a for loop to create a new array of JSX elements.",
      "Use the map() method to create a new array of JSX elements.",
      "Use the forEach() method to create a new array of JSX elements.",
      "Use an if statement to create a new array of JSX elements."
    ],
    correctAnswer: "Use the map() method to create a new array of JSX elements."
  },

  // --- State & Events ---
  {
    id: 15,
    question: "What is the purpose of state in a React component?",
    options: [
      "To store user input.",
      "To determine if a component should re-render.",
      "To store data that can change over time.",
      "All of the above."
    ],
    correctAnswer: "All of the above."
  },
  {
    id: 16,
    question: "How does the useState hook work in React?",
    options: [
      "It creates a new state variable and a function to update it.",
      "It creates a new state variable and a function to read it.",
      "It creates a new state variable and a function to delete it.",
      "It creates a new state variable and a function to copy it."
    ],
    correctAnswer: "It creates a new state variable and a function to update it."
  },
  {
    id: 17,
    question: "What is a controlled component in React?",
    options: [
      "A component that controls other components",
      "A form element where the state is directly controlled by the state of a component",
      "A component that is controlled by a user",
      "A component that controls the state of a form element"
    ],
    correctAnswer: "A form element where the state is directly controlled by the state of a component"
  },
  {
    id: 18,
    question: "What is the purpose of the 'preventDefault' method in JavaScript?",
    options: [
      "It prevents a function from being called",
      "It prevents an event from triggering its default action",
      "It prevents a component from re-rendering",
      "It prevents a form from being submitted"
    ],
    correctAnswer: "It prevents an event from triggering its default action"
  },

  // --- Async, API & Fetch ---
  {
    id: 19,
    question: "Which React Hook allows performing side effects in function components?",
    options: ["useState", "useEffect", "useContext", "useRef"],
    correctAnswer: "useEffect"
  },
  {
    id: 20,
    question: "What does the 'await' keyword do in JavaScript?",
    options: [
      "Defines a new Promise",
      "Pauses the execution of the function and waits for the passed Promise's resolution",
      "Executes an asynchronous task in the background",
      "Starts a new Promise chain"
    ],
    correctAnswer: "Pauses the execution of the function and waits for the passed Promise's resolution"
  },
  {
    id: 21,
    question: "Which HTTP status code indicates that the server could not understand the request due to invalid syntax?",
    options: ["400", "404", "500", "201"],
    correctAnswer: "400"
  },
  {
    id: 22,
    question: "In the Fetch API, which method is used to extract the JSON data from the response object?",
    options: ["fetch()", "text()", "json()", "data()"],
    correctAnswer: "json()"
  },

  // --- Firebase & Auth ---
  {
    id: 23,
    question: "What is Firebase Authentication?",
    options: [
      "A library for building user interfaces",
      "A web application development framework",
      "An identity solution for web applications",
      "A database management system"
    ],
    correctAnswer: "An identity solution for web applications"
  },
  {
    id: 24,
    question: "Which of the following is not a part of a JWT?",
    options: ["Header", "Payload", "Signature", "Footer"],
    correctAnswer: "Footer"
  },
  {
    id: 25,
    question: "What type of database is Cloud Firestore?",
    options: ["SQL", "NoSQL", "Graph", "Object-relational"],
    correctAnswer: "NoSQL"
  },
  {
    id: 26,
    question: "What operations can be performed on Firestore data?",
    options: [
      "Create, Read, Update, Delete (CRUD)",
      "Pull, Push",
      "Merge, Rebase",
      "Commit, Checkout"
    ],
    correctAnswer: "Create, Read, Update, Delete (CRUD)"
  },
  {
    id: 27,
    question: "What is the purpose of Firestore Security Rules?",
    options: [
      "To filter data returned by queries",
      "To manage access to the database",
      "To structure the data",
      "To improve the performance of queries"
    ],
    correctAnswer: "To manage access to the database"
  },

  // --- Next.js Routing ---
  {
    id: 28,
    question: "In Next.js, how is a 'Dynamic Route' defined?",
    options: [
      "By wrapping the folder's name in square brackets",
      "By marking a folder as a Dynamic Route",
      "By wrapping the folder's name in parenthesis",
      "By appending 'Dynamic' to the folder's name"
    ],
    correctAnswer: "By wrapping the folder's name in square brackets"
  },
  {
    id: 29,
    question: "What is a layout in Next.js?",
    options: [
      "A type of database",
      "The UI that's shared across multiple pages",
      "An environment variable",
      "A type of API call"
    ],
    correctAnswer: "The UI that's shared across multiple pages"
  },
  {
    id: 30,
    question: "In Next.js, where are environment variables typically stored?",
    options: [
      ".env.local files",
      "Database",
      "API server",
      "Cloud storage"
    ],
    correctAnswer: ".env.local files"
  }
];