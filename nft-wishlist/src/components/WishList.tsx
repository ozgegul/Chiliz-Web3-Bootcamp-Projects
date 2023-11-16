import React, { FC } from "react";

interface WishlistProps {
  onToggleWishlist: () => void;
  isInWishlist: boolean;
}

const Wishlist: FC<WishlistProps> = ({ onToggleWishlist, isInWishlist }) => {
  return (
    <button onClick={onToggleWishlist}>
      {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
    </button>
  );
};

export default Wishlist;
