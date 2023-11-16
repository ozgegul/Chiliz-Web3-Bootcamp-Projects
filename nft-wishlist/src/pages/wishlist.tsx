import Layout from "@/layout/Layout";
import { useState } from "react";

interface NFT {
  name: string;
  description: string;
}

export default function WishList() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [wishlist, setWishlist] = useState<NFT[]>([]);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Create a new NFT object
    const newNFT: NFT = {
      name,
      description,
    };

    setWishlist((prevWishlist) => [...prevWishlist, newNFT]);

    setName("");
    setDescription("");
  };

  return (
    <Layout>
      <div>
        <h1 className="text-6xl font-semibold my-4 text-center">
          Here's your NFT WishList!
        </h1>

        <div className="relative bg-gray-800 text-white p-6 rounded-lg shadow-md w-full max-w-2xl">
          <h1 className="text-2xl font-semibold my-4 text-center">
            Fill details about the NFT you want{" "}
          </h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="font-bold text-xl">Name:</label>
              <input
                className=" ml-2 bg-gray-800"
                placeholder="Name of the NFT"
                type="text"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div>
              <label className="font-bold text-xl">Description: </label>
              <input
                className=" ml-2 bg-gray-800"
                placeholder="Description of the NFT"
                value={description}
                onChange={handleDescriptionChange}
              />
            </div>
            <button
              className="mt-6 bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
              type="submit"
            >
              Add
            </button>
          </form>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-4">Your Wishlist:</h2>
            <ul>
              {wishlist.map((nft, index) => (
                <li key={index}>
                  {nft.name} - {nft.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
