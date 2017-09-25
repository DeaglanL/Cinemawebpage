package business;

import com.google.gson.Gson;
import persistance.Credentials;
import persistance.Customer;
import persistance.CustomerTableController;
import persistance.MasterController;

import javax.ejb.Stateless;
import javax.enterprise.inject.Default;
import javax.inject.Inject;
import java.sql.Connection;

@Default
@Stateless
public class customerDBImpl implements CustomerService {

    private String ip;
    private String port;
    private String dbName;
    private String username;
    private String password;


    private Connection conc;

    private MasterController mc = new MasterController();

    private CustomerTableController custControl = new CustomerTableController();

    Gson gson = new Gson();

    public customerDBImpl(){
         ip = "46.32.240.39";
         port = "3306";
         dbName = "apoll-6cn-u-141443";
         username = "apoll-6cn-u-141443";
         password = "6.wME^^fk";

        conc = mc.createConnection(ip, port , dbName , username , password);
    }

    public customerDBImpl(String ip,String port,String dbName, String username,String password){
        this.ip = ip;
        this.port = port;
        this.dbName = dbName;
        this.username = username;
        this.password = password;

        conc = mc.createConnection(ip, port , dbName , username , password);
    }

    public String addCustomer(String jsonCustomer) {

         Customer newCust =  gson.fromJson(jsonCustomer, Customer.class);

        try {
            custControl.putCustomer(conc, newCust.getName(), newCust.getAddress(), newCust.getDob(), newCust.getEmail(), newCust.getUsername(), newCust.getPassword(), newCust.getPhoneno());
        }
        catch (Exception e)
        {
            return "{\"message\": \"Error: " + e.toString() + "\"}";
        }
        return "{\"message\": \"success\"}";
    }

    public String checkCustomer(String jsonLogin) {
        Credentials creds = gson.fromJson(jsonLogin, Credentials.class);

        Customer customer = custControl.getCustomerByName(creds.getUsername(), conc);

         if(customer != null)
         {
             if (customer.getPassword().equals(creds.getPassword()))
             {
                 return "{\"message\": \"success\"}";
             }
             else
             {
                 return "{\"message\": \"invaild user name or password\"}";
             }
         }
         else
         {
             return "{\"message\": \"Cant find customer\"}";
         }

    }
}
