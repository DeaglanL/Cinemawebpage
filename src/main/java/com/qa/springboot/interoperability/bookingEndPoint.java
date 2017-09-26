package com.qa.springboot.interoperability;

import com.qa.springboot.business.BookingService;

import javax.inject.Inject;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Path("/booking")
public class bookingEndPoint {

@Inject
    BookingService bs;

    @POST
    @Path("/json")
    @Produces({ "application/json" })
    public String checkCustomer(String inputJSON) {
        return "null";
    }

    @PUT
    @Path("/json")
    @Produces({ "application/json" })
    public String addNewCustomer(String inputJSON) {
        return "null";
    }
}
