package authorization.service;


import authorization.dto.SignupRequestDTO;
import authorization.model.SuccessResponse;
import authorization.model.User;
import authorization.model.UserRole;
import authorization.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.ErrorResponse;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User login(String username, String password) {
        System.out.println(username + " " + password);

        for(User user : userRepository.findAll()){
            System.out.println(user);
        }

        User user = userRepository.findUserByUsername(username);

        System.out.println(user);

        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null;
    }


    public ResponseEntity<?> signup(SignupRequestDTO signupRequestDTO) {

        if (usernameExist(signupRequestDTO.getUsername())){
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body("Username already exists");
        }

        if(!passwordMatch(signupRequestDTO.getPassword(), signupRequestDTO.getConfirmPassword())){
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body("Passwords do not match.");
        }

        User user = createUserFromDTO(signupRequestDTO);
        userRepository.save(user);

        return ResponseEntity.ok(new SuccessResponse("Registration successful"));
    }

    private User createUserFromDTO(SignupRequestDTO signupRequestDTO) {
        User user = new User();
        user.setUsername(signupRequestDTO.getUsername());
        user.setPassword(signupRequestDTO.getPassword());
        user.setFirstname(signupRequestDTO.getFirstName());
        user.setLastname(signupRequestDTO.getLastName());
        user.setUserRole(UserRole.CITIZEN);

        return user;
    }

    private boolean passwordMatch(String password, String confirmPassword) {
        return password.equals(confirmPassword);
    }

    private boolean usernameExist(String requestedUsername){
        return userRepository.findUserByUsername(requestedUsername) != null;
    }
}
