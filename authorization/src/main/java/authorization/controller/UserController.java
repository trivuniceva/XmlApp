package authorization.controller;

import authorization.model.SystemUser;
import authorization.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class UserController {

    @Autowired
    private UserService userService;


    @PostMapping("/login")
    public ResponseEntity<SystemUser> login(@RequestBody SystemUser loginUser) {
        SystemUser user = userService.login(loginUser.getEmail(), loginUser.getPassword());
        return ResponseEntity.ok(user);
    }
}
