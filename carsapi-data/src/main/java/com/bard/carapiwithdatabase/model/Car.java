package com.bard.carapiwithdatabase.model;


import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;


@NoArgsConstructor
@AllArgsConstructor
@Data
public class Car {


    private long carId;

    @NotBlank
    @Size(min = 2, max = 50)
    private String brand;
    @NotBlank
    @Size(min = 2, max = 50)
    private String model;
    @NotBlank
    @Size(min = 2, max = 50)
    private String color;

    @Positive
    private int year;

}
