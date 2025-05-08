package authorization.service;


import authorization.model.User;
import authorization.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User login(String username, String password) {

        System.out.println(username + " " + password);

        List<User> allOfThem = userRepository.findAll();

        System.out.println(allOfThem);

        for( User user : allOfThem){
            System.out.println(user.toString());

        }


        User user = userRepository.findUserByUsername(username);

        System.out.println(user);
        System.out.println(" ^^^");


        if (user != null && user.getPassword().equals(password)) {
            return user;
        }

        return null;
    }


}
