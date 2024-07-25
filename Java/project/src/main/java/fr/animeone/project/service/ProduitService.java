package fr.animeone.project.service;

import fr.animeone.project.model.Produit;
import fr.animeone.project.repository.ProduitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProduitService {
    @Autowired
    private ProduitRepository repository;

    public Produit save(Produit entity) {
        return this.repository.save(entity);
    }

    public List<Produit> findAll() {
        return this.repository.findAll();
    }

    public Produit findById(Integer id) {
        return this.repository.findById(id).get();
    }

    public List<Produit> search(String titre){
        return this.repository.findByTitre(titre);
    }

    public List<Produit> getCategorie(Integer categorieId){
        return this.repository.findByCategorieId(categorieId);
    }
}
