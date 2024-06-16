package com.example.loginDemo.User.controller;

import com.example.loginDemo.User.entity.UserEntity;
import com.example.loginDemo.User.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserControllerImpl{
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
    @GetMapping("/{id}")
    public Optional<UserEntity> getUserById(@PathVariable (value = "id") String id){
        return userService.getUserById(id);
    }
    @PutMapping("/{id}")
    public UserEntity userEdit(@RequestBody UserEntity user,@PathVariable (value = "id")String id){
        return userService.userEdit(user,id);
    }
    @DeleteMapping("/{id}")
    public String userDelete(@PathVariable(value = "id")String id){
        return userService.userDelete(id);
    }

}
