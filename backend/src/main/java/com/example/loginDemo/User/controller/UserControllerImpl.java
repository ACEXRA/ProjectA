package com.example.loginDemo.User.controller;

import com.example.loginDemo.User.entity.UserEntity;
import com.example.loginDemo.User.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserControllerImpl implements UserController{
    @Autowired
    private UserServiceImpl userService;
    @GetMapping("/getRequestTest")
    public String getRequestTest(){
        return "SUCCESS";
    }

    @GetMapping("/register")
    public UserEntity userRegister(@RequestBody UserEntity user){
        return userService.userRegister(user);
    }
}
