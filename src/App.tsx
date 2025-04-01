import { useState } from "react";
import { useEffect } from "react";
import WishForm from "./components/WishForm";
import WishList from "./components/WishList";

export type Wish = {
  id: string;
  title: string;
  priority: "high" | "low";
  completed: boolean;
};

// const initialWishes: Wish[] = []

function App() {
  const storedTodos = JSON.parse(localStorage.getItem("todos") || "[]");

  const todos = storedTodos;

  const [wishes, setWishes] = useState<Wish[]>([]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(wishes));
  }, [wishes]);

  useEffect(() => {
    setWishes(todos);
  }, []);

  const deleteWish = (deleteId: string) => {
    // filter schaut hier fuer jeden wunsch ob er der zu loeschenden id entspricht
    // wenn er das nicht tut, darf er bleiben => wunsch mit der gesuchten id wird geloescht
    setWishes((oldWishes) => oldWishes.filter((wish) => wish.id !== deleteId));
  };

  const changeWishFulfillment = (id: string, fulfilled: boolean) => {
    setWishes((oldWishes) => {
      return oldWishes.map((wish) => {
        if (wish.id !== id) {
          return wish;
        } else {
          // hier wird eine kopie erstellt, und ein einzelner wert überschrieben
          return { ...wish, completed: fulfilled };
        }
      });
    });
  };

  return (
    <div className="App min-h-screen bg-gray-900 text-gray-100 p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-300">
          ToDo-List 📋
        </h1>
        <WishForm setWishes={setWishes} />
        <WishList
          changeWishFulfillment={changeWishFulfillment}
          deleteWish={deleteWish}
          wishes={wishes}
        />
      </div>
    </div>
  );
}

export default App;
