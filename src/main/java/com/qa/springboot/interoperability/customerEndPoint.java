package com.qa.springboot.interoperability;

import javax.inject.Inject;
import javax.ws.rs.*;

import com.qa.springboot.business.CustomerService;

@Path("/customer")
public class customerEndPoint {

    @Inject
    private CustomerService customerService;


    @POST
    @Path("/json")
    @Produces({ "application/json" })
    public String checkCustomer(String customerJSON) {
        return customerService.checkCustomer(customerJSON);
    }

    @PUT
    @Path("/json")
    @Produces({ "application/json" })
    public String addNewCustomer(String customerJSON) {
        return customerService.addCustomer(customerJSON);
    }

}
