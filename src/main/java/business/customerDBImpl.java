package business;

import com.google.gson.Gson;
import persistance.Customer;
import persistance.CustomerTableController;

import javax.ejb.Stateless;
import javax.enterprise.inject.Default;
import javax.inject.Inject;
import java.sql.Connection;

@Default
@Stateless
public class customerDBImpl implements customerService {

    private String ip;
    private String port;
    private String dbName;
    private String username;
    private String password;


    private Connection conc;

    @Inject
    CustomerTableController custControl;


    Gson gson = new Gson();

    public customerDBImpl(){
         ip = "sql11.freemysqlhosting.net";
         port = "3306";
         dbName = "sql11195115";
         username = "sql11195115";
         password = "p21IgmB3mn";

        conc = custControl.createConnection(ip, port, dbName, username, password);
    }

    public customerDBImpl(String ip,String port,String dbName, String username,String password){
        this.ip = ip;
        this.port = port;
        this.dbName = dbName;
        this.username = username;
        this.password = password;

        conc = custControl.createConnection(ip, port, dbName, username, password);
    }

    public String addCustomer(String jsonCustomer) {

         Customer newCust =  gson.fromJson(jsonCustomer, Customer.class);

        try {
            custControl.putCustomer(conc, newCust.getName(), newCust.getAddress(), newCust.getDob(), newCust.getEmail(), newCust.getUsername(), newCust.getEmail(), newCust.getPhoneno());
        }
        catch (Exception e)
        {
            return "Error text :" + e.toString();
        }
        return "success";
    }

    public String checkCustomer(String jsonLogin) {
        return null;
    }
}
