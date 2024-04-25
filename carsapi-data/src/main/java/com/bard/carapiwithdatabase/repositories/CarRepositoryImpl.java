package com.bard.carapiwithdatabase.repositories;

import com.bard.carapiwithdatabase.model.Car;
import com.bard.carapiwithdatabase.model.CarRowMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.sql.SQLType;
import java.sql.Statement;
import java.util.List;


@Repository
@RequiredArgsConstructor
public class CarRepositoryImpl implements CarRepository {

    private final JdbcTemplate jdbcTemplate;
    private final CarRowMapper carRowMapper;

    @Override
    public Car saveCar(Car car) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        String sql = "INSERT INTO cars (brand, model,color,year) VALUES(?,?,?,?)";
        this.jdbcTemplate.update(con -> {
            PreparedStatement ps = con
                    .prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, car.getBrand());
            ps.setString(2, car.getModel());
            ps.setString(3, car.getColor());
            ps.setInt(4, car.getYear());
            return ps;
        }, keyHolder);
        car.setCarId((int) keyHolder.getKeys().get("car_id"));
        return car;
    }

    @Override
    public List<Car> findAll() {
        String sql = "SELECT * FROM cars";
        return this.jdbcTemplate.query(sql, this.carRowMapper);

    }

    @Override
    public List<Car> findCarsByYear(int year) {
        return findCarsByYear(year, year);
    }

    @Override
    public List<Car> findCarsByYear(int beginYear, int endYear) {
        String sql = "SELECT * FROM cars WHERE year BETWEEN ? AND ?;";
        return this.jdbcTemplate.query(sql, this.carRowMapper, beginYear, endYear);
    }

    @Override
    public Car getCarById(long id) {
        String sql = "SELECT * FROM cars WHERE car_id = ?";
        return this.jdbcTemplate.queryForObject(sql, this.carRowMapper, id);
    }

    @Override
    public boolean updateCar(Car car) {
        String sql = "UPDATE cars SET brand=?,model=?, color=?, year=? WHERE car_id=?";
        int result = this.jdbcTemplate.update(sql,
                car.getBrand(),
                car.getModel(),
                car.getColor(),
                car.getYear());
        return result > 0;
    }

    @Override
    public boolean deleteCar(long id) {
        String sql = "DELETE FROM cars WHERE car_id=?";
        int result = this.jdbcTemplate.update(sql, id);
        return result > 0;
    }


}
