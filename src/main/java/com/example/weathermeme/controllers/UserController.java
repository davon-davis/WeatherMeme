package com.example.weathermeme.controllers;
import com.example.weathermeme.Users;
import com.example.weathermeme.services.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
public class UserController {
    private final UserService userService;

    UserController(UserService userService){this.userService = userService;}

    @GetMapping("/users")
    public @ResponseBody
    List<Users> getUsers(){return this.userService.getUsers();}

    @PostMapping("/users")
    public ResponseEntity<Users> addUser(@RequestBody String username){
        var savedUser = userService.addUser(username);
        URI location = createResourceLocation("/users", savedUser.getId());
        return ResponseEntity.created(location).body(savedUser);
    }

    private URI createResourceLocation(String path, Long resourceId) {
        return ServletUriComponentsBuilder.fromCurrentRequestUri().port("8080").path(path)
                .buildAndExpand(resourceId).toUri();
    }

    @PatchMapping("/users/{id}")
    public Optional<Users> updateUserCity(@PathVariable Long id, @RequestBody String newCity){
        return this.userService.updateUserCity(id, newCity);
    }
}
