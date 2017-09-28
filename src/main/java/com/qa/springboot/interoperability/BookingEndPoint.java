package com.qa.springboot.interoperability;

import com.qa.springboot.business.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/booking")
public class BookingEndPoint {

    @Autowired
    private BookingService bs;

    @RequestMapping(value = "/json", method = RequestMethod.POST, headers = "Accept=application/json")
    @ResponseBody
    public String getCinemaInfo(@RequestBody String inputJSON) {
        return bs.getCinemaInfo(inputJSON);
    }

    @RequestMapping(value = "/json", method = RequestMethod.PUT, headers = "Accept=application/json")
    @ResponseBody
    public String getScreenings(String inputJSON) {
        return bs.getScreenings(inputJSON);
    }
}
