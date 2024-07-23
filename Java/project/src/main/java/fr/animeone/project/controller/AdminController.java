package fr.animeone.project.controller;

import fr.animeone.project.model.User;
import fr.animeone.project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin ("*")
@RestController
public class AdminController {
    @Autowired
    private UserService userService;

    @PostMapping("/api/users")
    public User addUser(@RequestBody User user) {return userService.save(user);}

    @GetMapping("/api/users")
    public List<User> getAllUsers() {return userService.findAll();}
}
