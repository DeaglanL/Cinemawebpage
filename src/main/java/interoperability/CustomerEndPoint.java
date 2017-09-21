package interoperability;

import javax.inject.Inject;
import javax.ws.rs.*;

import business.CustomerService;

@Path("/customer")
public class CustomerEndPoint {

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
