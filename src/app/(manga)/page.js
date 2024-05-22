'use client'

import { useParams } from "next/navigation";

export default async function MangaList() {
  const params = useParams()
  const mangas = await getMangaList(params.manga);
  console.log(params);
  console.log(mangas);

  return (
    <>
      <div>
        <p>Hello world</p>
        <h1>{params.manga}</h1>
      </div>
    </>
  );
}
async function getMangaList(slug){
  const response = await fetch (`http://localhost:3000/api/mangaList/get/${slug}`)
  console.log(response);
}

/*
async function getMangaList(params) {
  if (params) {
    
    const gets = await fetch(
      `http://localhost:3000/api/mangaList/get?slug=${params}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, image }),
      }
    ).then((res) => res.json());
    return {
      props: {
        name: gets[0].name,
        image: gets[0].image,
      },
    };
  }
}
*/