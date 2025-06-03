package backend.xmlapp.controller;


import backend.xmlapp.model.FizickoPodnosilacDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/zahtev")
@CrossOrigin(origins = "http://localhost:4200")
public class CopyrightController {

    @PostMapping("/fizicko")
    public ResponseEntity<String> primiFizickoZahtev(@RequestBody FizickoPodnosilacDTO dto) {
        System.out.println("Primljen zahtev za fizičko lice: " + dto.getUserInfo().getName() + " " + dto.getUserInfo().getLastname());
        System.out.println(dto.toString());
        return ResponseEntity.ok("Zahtev za fizičko lice uspešno primljen");
    }

}
