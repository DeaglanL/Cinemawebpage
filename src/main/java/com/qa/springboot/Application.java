package com.qa.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;

@EnableAutoConfiguration
@Controller
@SpringBootApplication
public class Application {


	public static void main(String[] args)
	{



		SpringApplication.run(Application.class, args);
	}
}
