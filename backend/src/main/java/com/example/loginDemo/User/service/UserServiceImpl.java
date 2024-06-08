package com.example.loginDemo.User.service;

import com.example.loginDemo.User.entity.UserEntity;
import com.example.loginDemo.User.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;
    public UserEntity userRegister(UserEntity user){
        return userRepository.save(user);
    }
}
