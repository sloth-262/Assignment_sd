const posts = [
  {
    id: 1,
    title: "React Basics",
    author: { id: 1, name: "John Doe" },
    content: "This is a sample post about React.",
    comments: [
      {
        id: 101,
        author: "Alice",
        text: "Great intro!",
      },
      {
        id: 102,
        author: "Bob",
        text: "Very helpful, thanks!",
      },
    ],
  },
  {
    id: 2,
    title: "Understanding Props",
    author: { id: 2, name: "Jane Smith" },
    content: "This post explains props in React.",
    comments: [
      {
        id: 201,
        author: "Charlie",
        text: "Props are so useful!",
      },
    ],
  },
  {
    id: 3,
    title: "Hooks Overview",
    author: { id: 1, name: "John Doe" },
    content: "An introduction to React Hooks.",
    comments: [],
  },
  {
    id: 4,
    title: "JSX Explained",
    author: { id: 3, name: "Emily Rose" },
    content: "Understanding JSX in React.",
    comments: [
      {
        id: 401,
        author: "David",
        text: "Clear explanation!",
      },
    ],
  },
  {
    id: 5,
    title: "State and Props",
    author: { id: 2, name: "Jane Smith" },
    content: "Managing data in components.",
    comments: [
      {
        id: 501,
        author: "Eva",
        text: "State makes components dynamic!",
      },
      {
        id: 502,
        author: "Frank",
        text: "Good post, thanks!",
      },
    ],
  },
];

export default posts;
