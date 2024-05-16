'use client';
import React from "react";

export function CarouselAnime(props) {
  const trendings = [
    {
      id: 1,
      image:
        "https://is4-ssl.mzstatic.com/image/thumb/9CNTcBGBPRW5eiQV_dVdsg/1600x900.jpg",
      name: "One Piece",
      url: "/one-piece",
    },
    {
      id: 2,
      image:
        "https://pm1.narvii.com/8392/8c1984a1d22db478f4c94b02ad24a60bb2129f44r1-1920-1080v2_hq.jpg",
      name: "Konosuba",
      url: "/konosuba",
    },
    {
      id: 3,
      image:
        "https://is2-ssl.mzstatic.com/image/thumb/MqI-oBhox3oAkY7NnLphLA/1200x675.jpg",
      name: "Mushoku Tensei",
      url: "/mushoku-tensei",
    },
    {
      id: 4,
      image:
        "https://www.tvqc.com/wp-content/uploads/2019/03/That-Time-I-Got-Reincarnated-as-a-Slime.jpg",
      name: "Moi, Quand je me Réincarne en Slime",
      url: "/moi-quand-je-me-reincarne-en-slime",
    },
    {
      id: 5,
      image:
        "https://images.everyeye.it/img-notizie/kaiju-no-8-anime-verrA-annunciato-secondo-leak-v3-601343.jpg",
      name: "Kaiju8",
      url: "/kaiju-no-8",
    },
    {
      id: 6,
      image:
        "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcTQfPHhYZq2gpzwzXWwIBSyDkw-s-fL9TVeDNEloSS8Hcg-dYdsJh8dP-r7dAm-i2n-7XuKWlHDGg8zJ2fQp4-MJJW0PW_K5_HB.jpg?r=a39",
      name: "Detective Conan",
      url: "/detective-conan",
    },
    {
      id: 7,
      image:
        "https://is2-ssl.mzstatic.com/image/thumb/OmUGN4SFQclXoYhFcfpr7Q/1200x675.jpg",
      name: "Tsukimichi Moonlit Fantasy",
      url: "/tsukimichi-moonlit-fantasy",
    },
    {
      id: 8,
      image:
        "https://th.bing.com/th/id/OIP.BwQexopLcK9tzD1U3_pu5AHaEK?rs=1&pid=ImgDetMain",
      name: "Wind Breaker",
      url: "/wind-breaker",
    },
    {
      id: 9,
      image:
        "https://th.bing.com/th/id/OIP.BwQexopLcK9tzD1U3_pu5AHaEK?rs=1&pid=ImgDetMain",
      name: "Re: Monster",
      url: "/re-monster",
    },
    {
      id: 10,
      image:
        "https://i0.wp.com/myotakuworld.com/wp-content/uploads/2020/11/My-Hero-Academia-1.jpg?resize=1250%2C703&ssl=1",
      name: "My Hero Academia",
      url: "/my-hero-academia",
    },
    {
      id: 11,
      image:
        "https://th.bing.com/th/id/R.3ac626b77d582190ba616398e7245188?rik=IzZ1DQJe0pZfnQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fc%2f5%2ff%2f65614.jpg&ehk=G1QCaUTmnND8DydGwoyr9HIFW3vxtlUGf2s%2bo4iZK4g%3d&risl=&pid=ImgRaw&r=0",
      name: "Spice & Wolf",
      url: "/spice-and-wolf",
    },
  ];
  return (
    <div>
      {props.trendings}
    </div>
  )
}
