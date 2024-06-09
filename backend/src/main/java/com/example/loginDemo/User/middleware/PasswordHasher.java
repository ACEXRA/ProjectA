package com.example.loginDemo.User.middleware;

import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.security.SecureRandom;

@Component
public class PasswordHasher {
    public String passwordHashing(String password){
        BCryptPasswordEncoder encoder=new BCryptPasswordEncoder(10, new SecureRandom());
        return encoder.encode(password);
    }
}
