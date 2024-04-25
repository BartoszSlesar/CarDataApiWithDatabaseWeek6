package com.bard.carapiwithdatabase.service;

import com.bard.carapiwithdatabase.model.Car;
import com.bard.carapiwithdatabase.repositories.CarRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;


@Service
@RequiredArgsConstructor
public class CarService {

    private final CarRepository carRepository;


    public List<Car> getCars() {
        return this.carRepository.findAll();
    }

    public Optional<Car> getCarById(long id) {
        return Optional.of(this.carRepository.getCarById(id));
    }

    public List<Car> getCarsByDate(int year) {
        return this.carRepository.findCarsByYear(year);
    }

    public List<Car> getCarsBetweenDates(int startYear, int endYear) {
        return this.carRepository.findCarsByYear(startYear, endYear);
    }


    public Optional<Car> addNewCar(Car newCar) {
        Car car = this.carRepository.saveCar(newCar);
        return Optional.of(car);
    }


    public boolean modifyCar(Car currentCar) {
        return this.carRepository.updateCar(currentCar);
    }


    public boolean removeCar(long id) {
        return this.carRepository.deleteCar(id);
    }
}
