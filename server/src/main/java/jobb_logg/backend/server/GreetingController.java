package jobb_logg.backend.server;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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

}
