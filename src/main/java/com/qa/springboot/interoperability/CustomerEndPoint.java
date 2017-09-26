package com.qa.springboot.interoperability;

import com.qa.springboot.business.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/customer")
public class CustomerEndPoint {

    @Autowired
    private CustomerService customerService;


    @RequestMapping(value = "/json", method = RequestMethod.POST, headers = "Accept=application/json")
    @ResponseBody
    public String checkCustomer(String customerJSON) {
        return customerService.checkCustomer(customerJSON);
    }

    @RequestMapping(value = "/json", method = RequestMethod.PUT, headers = "Accept=application/json")
    @ResponseBody
    public String addNewCustomer(String customerJSON) {
        return customerService.addCustomer(customerJSON);
    }

}
