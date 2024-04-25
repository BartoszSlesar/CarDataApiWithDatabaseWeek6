package com.bard.carapiwithdatabase.model;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class CarRowMapper implements RowMapper<Car> {
    @Override
    public Car mapRow(ResultSet rs, int rowNum) throws SQLException {
        return new Car(
                rs.getLong("car_id"),
                rs.getString("brand"),
                rs.getString("model"),
                rs.getString("color"),
                rs.getInt("year")
        );
    }
}
