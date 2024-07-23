package fr.animeone.project.service;

import fr.animeone.project.model.User;
import fr.animeone.project.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository repository;

    public User save(User entity) {return this.repository.save(entity);}

    public List<User> findAll() {return this.repository.findAll();}

    public User findById(Integer id) {return  this.repository.findById(id).get();}
}
