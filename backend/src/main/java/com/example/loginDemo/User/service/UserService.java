package com.example.loginDemo.User.service;

import com.example.loginDemo.User.entity.UserEntity;
import com.example.loginDemo.User.exception.UserNotFoundException;

import java.util.Optional;

public interface UserService {
    public UserEntity userRegister(UserEntity user);
    public Optional<UserEntity> getUserById(String id);
    public UserEntity userEdit(UserEntity user,String id) throws UserNotFoundException;
}
