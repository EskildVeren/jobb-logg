package jobb_logg.backend.server;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingController {

    private static final String template = "Hello, %s";
    private final AtomicLong counter = new AtomicLong();

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/greeting")
    public Greeting greeting(@RequestParam(value = "name", defaultValue = "Boo") String name) {
        System.out.println("Getting visit " + counter);
        return new Greeting(counter.incrementAndGet(), String.format(template, name));

    }

    // @PostMapping("/jobAdverts", consumes = )
    @CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*")
    @PostMapping(value = "/jobAdverts", consumes = { "application/json" })
    public void createJobAdvertistement(@RequestBody JobAdvertistement ja) {
        System.out.println("Adding job advertisement...");
        try {
            DataAccess.createRow(ja);
            System.out.println("Job advertisement added!");

        } catch (SQLException e) {
            System.out.println("Error while creating new job advert");
            System.out.println("----------ERROR MESSAGE----------");
            System.out.println(e.getMessage());
            System.out.println("----------STACK TRACE----------");
            e.printStackTrace();
        }
    }

    @CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*")
    @GetMapping(value = "/jobAdverts")
    public Collection<JobAdvertistement> getAllJobAdverts() {
        try {
            return DataAccess.getAllJobAdvertisements();
        } catch (SQLException e) {
            System.out.println("Error while getting all job adverts");
            System.out.println("----------ERROR MESSAGE----------");
            System.out.println(e.getMessage());
            System.out.println("----------STACK TRACE----------");
            e.printStackTrace();
            return new ArrayList<>();
        }
    }

    @PutMapping(value = "/jobAdverts/{advertId}/appliedFor")
    public void setAppliedFor(@RequestBody boolean appliedFor, @PathVariable long advertId) {
    }

    @CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*")
    @DeleteMapping(value = "/jobAdverts/{advertId}")
    public void deleteJobAdvertisement(@PathVariable long advertId) {
        try {
            DataAccess.deleteJobAdvert(advertId);
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println(e.getMessage());
        }
    }
}
