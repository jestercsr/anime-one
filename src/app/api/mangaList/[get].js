export default function handler(req, res) {
  const {slug } = req.query; 
  if (req.method === "GET") {
    res.status(200).json([
      {
        id: "one-piece",
        name: "One Piece",
        image:
          "https://is4-ssl.mzstatic.com/image/thumb/9CNTcBGBPRW5eiQV_dVdsg/1600x900.jpg"
      },
      {
        id: "naruto",
        name: "Naruto",
        image:
          "https://is5-ssl.mzstatic.com/image/thumb/RfZQAWSAK4klWt7UbrqXFA/1200x630.jpg"
      },
      {
        id: "dragon-ball",
        name: "Dragon Ball",
        image:
          "https://is3-ssl.mzstatic.com/image/thumb/-sprp1PZNmaJNY494x0EQA/1200x630.jpg"
      },
      {
        id: "bleach",
        name: "Bleach",
        image:
          "https://image-cf.kddi-video.com/ede/ede90cb50be485e52e566a80900c4f97/fit-background-transparent/1524723655/750x422.png"
      },
      {
        id: "hunter-x-hunter",
        name: "Hunter x Hunter",
        image:
          "https://is1-ssl.mzstatic.com/image/thumb/SLp-4Z0s_jyJBrpJ3MCBNA/1200x630.jpg"
      },
      {
        id: "snk",
        name: "Shingeki no Kyojin",
        image:
          "https://is3-ssl.mzstatic.com/image/thumb/u0Y-4aNADi2HCk8xlePR9A/1200x675.jpg"
      },
      {
        id: "my-hero-academia",
        name: "My Hero Academia",
        image:
          "https://i0.wp.com/myotakuworld.com/wp-content/uploads/2020/11/My-Hero-Academia-1.jpg?resize=1250%2C703&ssl=1"
      },
      {
        id: "jujustu-kaisen",
        name: "Jujustu Kaisen",
        image:
          "https://sm.ign.com/t/ign_in/screenshot/default/jjk2_uzg5.960.png"
      },
      {
        id: "fullmetal-alchemist",
        name: "Fullmetal Alchemist",
        image:
          "https://is3-ssl.mzstatic.com/image/thumb/L20cvExVVgeVXSALdC0uyQ/1200x675.jpg"
      },
      {
        id: "fairy-tail",
        name: "Fairy Tail",
        image:
          "https://www.omegascopio.com.br/wp-content/uploads/2023/01/FT_S1_VERTICAL.jpg" 
      },
    ]);
    res.status(200).json(data.filter((liste) => liste.slug == slug));
  } else {
    res.status(500).json({ message: "Method Not Allowed" });
  }
}
