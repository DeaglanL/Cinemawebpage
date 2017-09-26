package com.qa.springboot.business;

import org.springframework.stereotype.Service;

public interface BookingService {
    String getCinemaInfo(String cinema);
    String getScreenings(String movie);
}
