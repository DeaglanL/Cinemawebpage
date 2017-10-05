package com.qa.springboot.interoperability;


import com.qa.springboot.business.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/customer")
public class customerEndPoint {

    @Autowired
    private CustomerService customerService;


    @RequestMapping(value = "/json", method = RequestMethod.POST,  headers = "Accept=application/json")
    public  @ResponseBody String checkCustomer(@RequestBody String creds) {
       return customerService.checkCustomer(creds);
    }

    @RequestMapping(value = "/json", method = RequestMethod.PUT, headers = "Accept=application/json")
    @ResponseBody
    public String addNewCustomer(@RequestBody String customerJSON) {
        return customerService.addCustomer(customerJSON);
    }

}
