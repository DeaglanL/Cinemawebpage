package com.qa.springboot.business;

import org.springframework.stereotype.Service;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.inject.Default;

@Service
public class bookingDBImpl implements BookingService{
    public String getCinemaInfo(String cinema) {
        return null;
    }

    public String getScreenings(String movie) {
        return null;
    }
}
