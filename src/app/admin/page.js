"use client";
import React, { useState } from "react";
import Navbar from "../accueil/ui/NavBar";
import { postCreatManga } from "../../../_actions/postAction";

export default function PageAdmin() {
  const [formData, setFormData] = useState({
    id: "",
    animation: "",
    animeId: "",
    anime_imageCarousel: "",
    anime_href: "",
    anime_image: "",
    anime_name: "",
    anime_imageTop: "",
    anime_titre: "",
    backNav: "",
    classNav: "",
    imageSee: "",
    href: "",
    images: "",
    back: "",
    imageCarousel: "",
    image: "",
    name: "",
    url: "",
    imageShow: "",
    img: "",
    imageTop: "",
    navClass: "",
    slug: "",
    titre: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await postCreatManga(formData, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert("Manga ajouté avec succès!");
      setFormData({
        id: "",
        animation: "",
        animeId: "",
        anime_imageCarousel: "",
        anime_href: "",
        anime_image: "",
        anime_name: "",
        anime_imageTop: "",
        anime_titre: "",
        backNav: "",
        classNav: "",
        imageSee: "",
        href: "",
        images: "",
        back: "",
        imageCarousel: "",
        image: "",
        name: "",
        url: "",
        imageShow: "",
        img: "",
        imageTop: "",
        navClass: "",
        slug: "",
        titre: "",
      });
    } else {
      const data = await response.json();
      alert("Erreur: " + data.message);
    }
  };

  return (
    <div>
      <Navbar className="bg-red-600 text-slate-50" />
      <h1>Admin - Gestion des Contenus Manga</h1>

      <h3>Ajouter un manga</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Identifiant : </label>
          <input type="text" value={formData.slug} onChange={handleChange} />
        </div>
        <div>
          <label>Image Fond écran : </label>
          <input
            type="text"
            value={formData.imageTop}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Navbar CSS : </label>
          <input
            type="text"
            value={formData.navClass}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Background CSS : </label>
          <input type="text" value={formData.back} onChange={handleChange} />
        </div>
        <div>
          <h4>Info de la série : </h4>

          <label>Image: </label>
          <input type="text" value={formData.img} onChange={handleChange} />
          <label>Url: </label>
          <input type="text" value={formData.url} onChange={handleChange} />
        </div>
        <div>
          <label>Titre CSS : </label>
          <input type="text" value={formData.titre} onChange={handleChange} />
        </div>
        <div>
          <h4>Info Manga Recomandée : </h4>

          <label>Image Reco : </label>
          <input type="text" value={formData.image} onChange={handleChange} />
          <label>Nom Reco : </label>
          <input type="text" value={formData.name} onChange={handleChange} />
          <label>Url Reco : </label>
          <input type="text" value={formData.url} onChange={handleChange} />
        </div>
        <div>
          <label>Animation : </label>

          <label>AnimeId: </label>
          <input type="text"
            name="animeId"
            value={formData.animeId}
            onChange={handleChange}
            required
          />
          <div>
            <label>Image Anime fond écran : </label>
            <input
              type="text"
              value={formData.anime_imageTop}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>NavBar Anime CSS : </label>
            <input
              type="text"
              value={formData.classNav}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Background Anime CSS : </label>
            <input
              type="text"
              value={formData.backNav}
              onChange={handleChange}
            />
          </div>
          <div>
            <h4>Info du contenu Anime : </h4>

            <label>Image : </label>
            <input
              type="text"
              value={formData.images}
              onChange={handleChange}
            />
            <label>Lien url : </label>
            <input type="text" value={formData.href} onChange={handleChange} />
          </div>
          <div>
            <label>Titre Anime CSS : </label>
            <input
              type="text"
              value={formData.anime_titre}
              onChange={handleChange}
            />
          </div>
          <div>
            <h4>Info Manga Recomandée Animation : </h4>

            <label>Image Anime Reco : </label>
            <input
              type="text"
              value={formData.anime_image}
              onChange={handleChange}
            />
            <label>Nom Anime Reco : </label>
            <input
              type="text"
              value={formData.anime_name}
              onChange={handleChange}
            />
            <label>Lien Url Anime Reco : </label>
            <input
              type="text"
              value={formData.anime_href}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit">Ajouter le Manga</button>
      </form>
    </div>
  );
}
