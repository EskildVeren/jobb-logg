package jobb_logg.backend.server;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ServerController {

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
    public Collection<JobAdvertistement> setAppliedFor(@PathVariable long advertId, @RequestBody boolean appliedFor) {
        try {
            DataAccess.setAppliedFor(advertId, appliedFor);
            System.out.println("Edited the applied for status of job advert " + advertId);
            return DataAccess.getAllJobAdvertisements();
        } catch (SQLException e) {
            e.printStackTrace();
            return new ArrayList<>();
        }
    }

    @CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*")
    @DeleteMapping(value = "/jobAdverts/{advertId}")
    public Collection<JobAdvertistement> deleteJobAdvertisement(@PathVariable long advertId) {
        try {
            DataAccess.deleteJobAdvert(advertId);
            return DataAccess.getAllJobAdvertisements();
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println(e.getMessage());
            return new ArrayList<>();
        }
    }
}
