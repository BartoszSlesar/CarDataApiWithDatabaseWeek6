package com.bard.carapiwithdatabase.controllers.v1;


import com.bard.carapiwithdatabase.service.CarService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import com.bard.carapiwithdatabase.model.Car;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/cars")
@AllArgsConstructor
@CrossOrigin("*")
public class CarsApi {

    private CarService carService;


    @GetMapping(produces = {
            MediaType.APPLICATION_JSON_VALUE,
            MediaType.APPLICATION_XML_VALUE})
    public ResponseEntity<List<Car>> getCars() {
        return new ResponseEntity<>(this.carService.getCars(), HttpStatus.OK);
    }


    @GetMapping(path = "/{id}", produces = {
            MediaType.APPLICATION_JSON_VALUE,
            MediaType.APPLICATION_XML_VALUE})
    public ResponseEntity<Car> getCarById(@PathVariable(name = "id") long id) {
        Optional<Car> optionalCar = carService.getCarById(id);
        return optionalCar
                .map(car -> new ResponseEntity<>(car, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }


    @GetMapping(params = "year", produces = {
            MediaType.APPLICATION_JSON_VALUE,
            MediaType.APPLICATION_XML_VALUE})
    public ResponseEntity<List<Car>> getCarsByDate(@RequestParam(name = "year") int year) {
        List<Car> carList = this.carService.getCarsByDate(year);
        return new ResponseEntity<>(carList, HttpStatus.OK);
    }

    @GetMapping(params = {"year", "yearTo"}, produces = {
            MediaType.APPLICATION_JSON_VALUE,
            MediaType.APPLICATION_XML_VALUE})
    public ResponseEntity<List<Car>> getCarsBetweenDates(@RequestParam(name = "year") int year, @RequestParam(name = "yearTo") int yearTo) {
        List<Car> carList = this.carService.getCarsBetweenDates(year, yearTo);
        return new ResponseEntity<>(carList, HttpStatus.OK);
    }




    @PostMapping
    public ResponseEntity<Car> addCar(@Validated @RequestBody Car newCar) {
        Optional<Car> addedCar = this.carService.addNewCar(newCar);
        return addedCar
                .map(car -> new ResponseEntity<>(car, HttpStatus.CREATED))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.BAD_REQUEST));
    }

    @PutMapping
    public ResponseEntity<String> modifyCar(@Validated @RequestBody Car newCar) {
        boolean result = this.carService.modifyCar(newCar);
        ResponseEntity<String> responseEntity;
        if (result) {
            responseEntity = new ResponseEntity<>("Modified", HttpStatus.OK);
        } else {
            responseEntity = new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return responseEntity;
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<String> removeCar(@PathVariable long id) {
        boolean result = this.carService.removeCar(id);
        ResponseEntity<String> responseEntity;
        if (result) {
            responseEntity = new ResponseEntity<>("removed", HttpStatus.OK);
        } else {
            responseEntity = new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return responseEntity;
    }


}
