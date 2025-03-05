package authorization.repository;

import authorization.model.SystemUser;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepository {


    public SystemUser findUserByEmail(String email) {
        return null;
    }
}
