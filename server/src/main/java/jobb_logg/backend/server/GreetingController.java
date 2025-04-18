package jobb_logg.backend.server;

import java.lang.annotation.Annotation;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
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

    @CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*")
    @PostMapping(value = "/jobAdverts", consumes = { "application/json" })
    @ResponseBody()
    public Collection<JobAdvertistement> createJobAdvertistement(@RequestBody JobAdvertistement ja) {
        System.out.println("Adding job advertisement...");
        try {
            DataAccess.createRow(ja);
            System.out.println("Job advertisement added!");

            List<JobAdvertistement> res = new ArrayList<>();
            res.add(ja);

            // Any way to optimize this? Only return created jobAdvertisement?
            return DataAccess.getAllJobAdvertisements();

        } catch (SQLException e) {
            System.out.println("Error while creating new job advert");
            System.out.println("----------ERROR MESSAGE----------");
            System.out.println(e.getMessage());
            System.out.println("----------STACK TRACE----------");
            e.printStackTrace();
            return null;
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

    @CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*")
    @PutMapping(value = "/jobAdverts/{advertId}/appliedFor", consumes = { "application/json" })
    public void setAppliedFor(@PathVariable long advertId, @RequestBody boolean appliedFor) {
        try {
            DataAccess.setAppliedFor(advertId, appliedFor);
        } catch (SQLException e) {
            e.printStackTrace();
        }
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
