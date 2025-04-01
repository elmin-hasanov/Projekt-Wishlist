import { useState } from "react";
import type { Wish } from "../App";
import "./WishForm.css";

type WishFormProps = {
  setWishes: React.Dispatch<React.SetStateAction<Wish[]>>;
};

function WishForm({ setWishes }: WishFormProps) {
  const [wishInputValue, setWishInputValue] = useState("");
  const [prioritySelectValue, setPrioritySelectValue] = useState<
    "low" | "high"
  >("low");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const newWish: Wish = {
      id: crypto.randomUUID(),
      title: wishInputValue,
      completed: false,
      priority: prioritySelectValue,
    };
    console.log(newWish);
    setWishes((oldWishes) => [...oldWishes, newWish]);
    setWishInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex gap-2 mb-2">
        <input
          type="text"
          value={wishInputValue}
          onChange={(e) => setWishInputValue(e.target.value)}
          className="flex-1 px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a new wish..."
        />
        <select
          onChange={(e) => {
            if (e.target.value === "high" || e.target.value === "low") {
              setPrioritySelectValue(e.target.value);
            }
          }}
          className="px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="low">Low</option>
          <option value="high">High</option>
        </select>
      </div>
      <button
        disabled={wishInputValue.trim().length === 0}
        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors disabled:bg-gray-700 disabled:cursor-not-allowed"
      >
        Add wish
      </button>
    </form>
  );
}

export default WishForm;
