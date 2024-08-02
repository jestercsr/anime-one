package fr.animeone.project.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Produit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String titre;
    @Column(columnDefinition = "TEXT")
    private String description;
    @Transient
    private String photo;
    private double prix;
    private int quantite;

    @ManyToOne
    private Categorie categorie;
}
