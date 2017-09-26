package com.qa.springboot.business;

import com.qa.springboot.persistance.Credentials;

public interface CustomerService {
    String addCustomer(String jsonCustomer);
    String checkCustomer(String creds);


}
