package com.example.weathermeme.services;

import com.example.weathermeme.Users;
import com.example.weathermeme.repositories.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(SpringExtension.class)
class UserServiceTest {
    @MockBean
    UserRepository userRepository;

    UserService userService;

    @BeforeEach
    void setup(){userService = new UserService(userRepository);}

    @Test
    void createNewUser(){
        Users usersToAdd = new Users("test-user");

        userService.addUser(usersToAdd.getName());

        verify(userRepository).save(usersToAdd);
    }

    @Test
    void findAllUsers(){
        List<Users> expectedUsers = List.of(new Users("first-user"), new Users("second-user"));
        when(userRepository.findAll()).thenReturn(expectedUsers);

        List<Users> actualUsers = userService.getUsers();

        assertThat(actualUsers).isEqualTo(expectedUsers);
    }

    @Test
    void updateUserInterest(){
        Users usersToUpdate = new Users("user-to-update");
        usersToUpdate.setCity("original-city");
        when(userRepository.findById(1L)).thenReturn(Optional.of(usersToUpdate));

        userService.updateUserCity(1L, "new-city");

        verify(userRepository).save(usersToUpdate);
        assertThat(usersToUpdate.getCity()).isEqualTo("new-city");
    }
}