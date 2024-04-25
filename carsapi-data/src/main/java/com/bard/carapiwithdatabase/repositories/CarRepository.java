package com.bard.carapiwithdatabase.repositories;

import com.bard.carapiwithdatabase.model.Car;

import java.util.List;

public interface CarRepository {

    Car saveCar(Car car);

    List<Car> findAll();

    List<Car> findCarsByYear(int year);

    List<Car> findCarsByYear(int beginYear, int endYear);

    Car getCarById(long id);

    boolean updateCar(Car video);

    boolean deleteCar(long id);
}
