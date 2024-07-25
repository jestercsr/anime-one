package fr.animeone.project.repository;


import fr.animeone.project.model.Produit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProduitRepository extends JpaRepository<Produit, Integer> {
    List<Produit> findByTitre(String titre);
    List<Produit> findByCategorieId (Integer categorieId);
}
