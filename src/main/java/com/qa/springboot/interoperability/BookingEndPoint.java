package com.qa.springboot.interoperability;

import com.qa.springboot.business.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/booking")
public class BookingEndPoint {

    @Autowired
    BookingService bs;

    @RequestMapping(value = "/json", method = RequestMethod.POST, headers = "Accept=application/json")
    @ResponseBody
    public String checkCustomer(String inputJSON) {
        return "null";
    }

    @RequestMapping(value = "/json", method = RequestMethod.PUT, headers = "Accept=application/json")
    @ResponseBody
    public String addNewCustomer(String inputJSON) {
        return "null";
    }
}
