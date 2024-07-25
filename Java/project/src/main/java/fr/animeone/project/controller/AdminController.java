package fr.animeone.project.controller;

import fr.animeone.project.model.Categorie;
import fr.animeone.project.model.Produit;
import fr.animeone.project.model.User;
import fr.animeone.project.service.CategorieService;
import fr.animeone.project.service.ProduitService;
import fr.animeone.project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin ("*")
@RestController
public class AdminController {
    @Autowired
    private UserService userService;

    @Autowired
    private ProduitService produitService;

    @Autowired
    private CategorieService categorieService;

    @PostMapping("/api/users")
    public User addUser(@RequestBody User user) {return userService.save(user);}

    @GetMapping("/api/users")
    public List<User> getAllUsers() {return userService.findAll();}

    @PostMapping("/api/produits")
    public Produit addProduit(@RequestBody Produit produit){
        return produitService.save(produit);
    }

    @PostMapping("/api/categories")
    public Categorie addCategorie(@RequestBody Categorie categorie){
        return categorieService.save(categorie);
    }

    @GetMapping("/api/admin/produits")
    public List<Produit> getProducts(){
        List<Produit> produits= this.produitService.findAll();
        return produits;
    }

    @GetMapping("/api/admin/categories")
    public List<Categorie> getCategories(){
        List<Categorie> categories= this.categorieService.findAll();
        return categories;
    }
}
