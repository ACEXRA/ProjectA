package com.example.loginDemo.User.repository;

import com.example.loginDemo.User.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity,String> {
}
