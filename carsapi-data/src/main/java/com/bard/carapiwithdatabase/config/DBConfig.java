package com.bard.carapiwithdatabase.config;


import com.bard.carapiwithdatabase.model.CarRowMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;

import javax.sql.DataSource;

@Configuration
@RequiredArgsConstructor
public class DBConfig {

    private final DataSource dataSource;


    @Bean
    public JdbcTemplate getJdbcTemplate(DataSource dataSource) {
        return new JdbcTemplate(this.dataSource);
    }

    @Bean
    public CarRowMapper carRowMapper(){
        return new CarRowMapper();
    }
}
