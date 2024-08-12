import { useState } from "react";
import "./App.css";
import Comments from "./components/Comments";

const comments = {
  id: 1,
  items: [
    {
      id: 12,
      name: "Hello",
      items: [
        {
          id: 13,
          name: "Hello world",
          items: [
            {
              id: 14,
              name: "hwllow worold 123",
              items: [],
            },
          ],
        },
      ],
    },

    {
      id: 21,
      name: "welcom",
      items: [
        {
          id: 22,
          name: "react",
          items: [],
        },
      ],
    },
    {
      id: 31,
      name: "font-end",
      items: [],
    },
    {
      id: 41,
      name: "back-end",
      items: [],
    },
  ],
};

function App() {
  const [commentData, setCommentData] = useState(comments);

  return (
    <>
      <Comments comment={commentData} />
    </>
  );
}

export default App;
