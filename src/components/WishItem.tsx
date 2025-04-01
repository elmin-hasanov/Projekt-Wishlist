import { Wish } from "../App";

type WishItemProps = {
  wish: Wish;
  deleteWish: (id: string) => void;
  changeWishFulfillment: (id: string, fulfilled: boolean) => void;
};

export default function WishItem({
  wish,
  deleteWish,
  changeWishFulfillment,
}: WishItemProps) {
  const handleDeleteClick = () => {
    deleteWish(wish.id);
  };

  const handleCheckboxClick: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    const newValue = e.target.checked;
    changeWishFulfillment(wish.id, newValue);
  };

  return (
    <li className="flex items-center gap-4 px-4 py-3 bg-gray-800 rounded-lg hover:bg-gray-700/50 transition-colors group">
      <input
        type="checkbox"
        checked={wish.completed}
        onChange={handleCheckboxClick}
        className="w-5 h-5 rounded bg-gray-900 border-gray-600 focus:ring-blue-500"
      />
      <span
        className={`flex-1 ${
          wish.completed ? "text-gray-400 line-through" : "text-gray-100"
        } ${
          wish.priority === "high"
            ? "border-l-4 border-red-500 pl-2"
            : "border-l-4 border-green-500 pl-3"
        }`}
      >
        {wish.title}
      </span>
      <button
        onClick={handleDeleteClick}
        className="px-2 py-1 bg-gray-800 text-red-400 hover:text-red-300 rounded-md hover:bg-gray-600/50 transition-colors"
      >
        Delete
      </button>
    </li>
  );
}
