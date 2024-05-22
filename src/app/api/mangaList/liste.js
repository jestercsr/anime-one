import { NextResponse } from "next/server";

const liste = [
  {
    slug: "one-piece",
    name: "One Piece",
    image:
      "https://is4-ssl.mzstatic.com/image/thumb/9CNTcBGBPRW5eiQV_dVdsg/1600x900.jpg",
  },
];

export async function GET ({params}){
    return NextResponse.json({
        listes: liste.find((x) => x.slug.toString() === params)
    })
}
