import { Wish } from "../App";
import WishItem from "./WishItem";

type WishListProps = {
  wishes: Wish[];
  deleteWish: (deleteId: string) => void;
  changeWishFulfillment: (id: string, fulfilled: boolean) => void;
};

function WishList({
  wishes,
  deleteWish,
  changeWishFulfillment,
}: WishListProps) {
  return (
    <ul className="space-y-4">
      {wishes.map((wish) => (
        <WishItem
          key={wish.id}
          wish={wish}
          deleteWish={deleteWish}
          changeWishFulfillment={changeWishFulfillment}
        />
      ))}
    </ul>
  );
}

export default WishList;
