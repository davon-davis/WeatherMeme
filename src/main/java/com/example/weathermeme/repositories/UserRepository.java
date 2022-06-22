package com.example.weathermeme.repositories;

import com.example.weathermeme.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Users, Long> {
}
