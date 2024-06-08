package com.example.loginDemo.User.controller;

import com.example.loginDemo.User.entity.UserEntity;

import java.util.List;

public interface UserController {
    public String getRequestTest();
    public UserEntity userRegister(UserEntity user);
}
