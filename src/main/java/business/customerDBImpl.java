package business;

import persistance.CustomerTableController;

import javax.ejb.Stateless;
import javax.enterprise.inject.Default;
import javax.inject.Inject;

@Default
@Stateless
public class customerDBImpl implements customerService {

    private String ip;
    private String port;
    private String dbName;
    private String username;
    private String password;

    @Inject
    CustomerTableController custControl;

    public customerDBImpl(){
         ip = "sql11.freemysqlhosting.net";
         port = "3306";
         dbName = "sql11195115";
         username = "sql11195115";
         password = "p21IgmB3mn";
    }

    public customerDBImpl(String ip,String port,String dbName, String username,String password){
        this.ip = ip;
        this.port = port;
        this.dbName = dbName;
        this.username = username;
        this.password = password;
    }

    public String addCustomer(String jsonCustomer) {

        custControl.createConnection(ip, port, dbName, username, password);




        return null;
    }

    public String checkCustomer(String jsonLogin) {
        return null;
    }
}
