package com.example.loginDemo.User.controller;

import com.example.loginDemo.User.entity.UserEntity;

import java.util.List;
import java.util.Optional;

public interface UserController {
    public String getRequestTest();
    public UserEntity userRegister(UserEntity user);
    public Optional<UserEntity> getUserById(String id);
    public UserEntity userEdit(UserEntity user,String id);
}
