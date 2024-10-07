import React, { useState } from "react";

export default function PostProduit() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/produits`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      console.log("Success:", result);
      reset();
    } else {
      console.error("Error:", response.statusText);
    }

    reset({
      image: [""],
      titre: "",
      url: "",
      prix: 0,
      genre: [""],
      description: "",
      taille: [""],
      couleur: [""],
      averageRating: 0,
      typeContenu: "",
      quantite: 1,
      articleRecommander: [
        {
          image: [""],
          titre: "",
          url: "",
          prix: 0,
          genre: [""],
          taille: [""],
          couleur: [""],
          averageRating: 0,
          typeContenu: "",
          quantite: 1,
        },
      ],
    });
  };
  return (
    <div>
      {isLoading && (
        <p>
          <ReactLoading
            type="bubbles"
            color="#4f46e5"
            height={"3%"}
            width={"3%"}
          />
        </p>
      )}
      <form
        onSubmit={handleSubmit}
        className="text-sm md:text-base lg:text-md xl:text-lg p-8 bg-gray-100 w-[90%] md:w-[50%] lg:w-[80%] m-auto rounded-xl text-sky-950"
      >
        <input />
      </form>
    </div>
  );
}
