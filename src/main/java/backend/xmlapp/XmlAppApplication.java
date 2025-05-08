package backend.xmlapp;

import authorization.AuthorizationApplication;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

@SpringBootApplication
@Import(AuthorizationApplication.class)
public class XmlAppApplication {

    public static void main(String[] args) {
        SpringApplication.run(XmlAppApplication.class, args);
    }
}

