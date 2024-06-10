package com.example.loginDemo.User.service;

import com.example.loginDemo.User.entity.UserEntity;
import com.example.loginDemo.User.exception.UserNotFoundException;
import com.example.loginDemo.User.middleware.PasswordHasher;
import com.example.loginDemo.User.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordHasher passwordHasher;
    public UserEntity userRegister(UserEntity user){
        String hash=passwordHasher.passwordHashing(user.getPassword());
        user.setPassword(hash);
        return userRepository.save(user);
    }
    public Optional<UserEntity> getUserById(String id){
        return userRepository.findById(id);
    }
    public UserEntity userEdit(UserEntity user,String id) {
        Optional<UserEntity> existingUser=userRepository.findById(id);
        if(existingUser.isPresent()){
            existingUser.get().setName(user.getName());
            existingUser.get().setEmail(user.getEmail());
            existingUser.get().setPassword(passwordHasher.passwordHashing(user.getPassword()));
            return userRepository.save(existingUser.get());
        }else {
            throw new UserNotFoundException("User doesn't exist");
        }
    }
}
