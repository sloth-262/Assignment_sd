const posts = [
  {
    id: 1,
    title: "React Basics",
    author: { id: 1, name: "Rabib" },
    content: "This is a sample post about React.",
    comments: [
      {
        id: 101,
        author: "turjo",
        text: "Great intro!",
      },
      {
        id: 102,
        author: "Nridul",
        text: "Very helpful, thanks!",
      },
    ],
  },
  {
    id: 2,
    title: "Understanding Props",
    author: { id: 2, name: "rakey" },
    content: "This post explains props in React.",
    comments: [
      {
        id: 201,
        author: "emon",
        text: "Props are so useful!",
      },
    ],
  },
  {
    id: 3,
    title: "Hooks Overview",
    author: { id: 1, name: "Dip" },
    content: "An introduction to React Hooks.",
    comments: [],
  },
  {
    id: 4,
    title: "JSX Explained",
    author: { id: 3, name: "Anadi" },
    content: "Understanding JSX in React.",
    comments: [
      {
        id: 401,
        author: "naima",
        text: "Clear explanation!",
      },
    ],
  },
  {
    id: 5,
    title: "State and Props",
    author: { id: 2, name: "Esteak" },
    content: "Managing data in components.",
    comments: [
      {
        id: 501,
        author: "sakin",
        text: "State makes components dynamic!",
      },
      {
        id: 502,
        author: "roxy",
        text: "Good post, thanks!",
      },
    ],
  },
];

export default posts;
