package com.example.weathermeme.services;
import com.example.weathermeme.Users;
import com.example.weathermeme.repositories.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService {
    UserRepository userRepository;

    public Users addUser(String username) {
        return userRepository.save(new Users(username));
    }

    public List<Users> getUsers() {
        return userRepository.findAll();
    }

    public Optional<Users> updateUserCity(Long id, String newCity) {
        Optional<Users> userToUpdate = userRepository.findById(id);

        if(userToUpdate.isPresent()) {
            userToUpdate.get().setCity(newCity);
            userRepository.save(userToUpdate.get());
            return userToUpdate;
        }
        return userToUpdate;
    }
}
