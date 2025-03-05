package authorization.service;


import authorization.model.SystemUser;
import authorization.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public SystemUser login(String email, String password) {
        System.out.println(email);
        System.out.println(password);

        SystemUser user = userRepository.findUserByEmail(email);

        if(user != null && validPassword(user, password)){
            return user;
        }

        return null;
    }

    private boolean validPassword(SystemUser user, String password) {
        return user.getPassword().equals(password);
    }

}
