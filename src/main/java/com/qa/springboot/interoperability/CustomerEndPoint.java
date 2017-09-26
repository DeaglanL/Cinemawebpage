package com.qa.springboot.interoperability;

import com.qa.springboot.business.CustomerService;

import javax.inject.Inject;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Path("/customer")
public class CustomerEndPoint {

@Inject
private CustomerService customerService;


@POST
@Path("/json")
@Produces({"application/json"})
public String checkCustomer(String customerJSON) {
	return customerService.checkCustomer(customerJSON);
}

@PUT
@Path("/json")
@Produces({"application/json"})
public String addNewCustomer(String customerJSON) {
	return customerService.addCustomer(customerJSON);
}

}
