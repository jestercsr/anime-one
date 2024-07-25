package fr.animeone.project.service;

import fr.animeone.project.model.Categorie;
import fr.animeone.project.repository.CategorieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategorieService {
    @Autowired
    private CategorieRepository repository;

    public Categorie save(Categorie entity) {
        return this.repository.save(entity);
    }

    public List<Categorie> findAll() {
        return this.repository.findAll();
    }

    public Categorie findById(Integer id) {
        return this.repository.findById(id).get();
    }
}
