package com.qa.LoginTest.controllers;

import com.qa.LoginTest.services.LoginService;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {
    LoginService loginService;

    public LoginController(LoginService loginService) {
        super();
        this.loginService = loginService;
    }


    @PostMapping(path = "/login")
    @CrossOrigin(origins = "http://localhost:3000")
    public String loginAttempt(@RequestBody String token){
        System.out.println(token);
        this.loginService.processLogin(token);
        return "";
    }

}
