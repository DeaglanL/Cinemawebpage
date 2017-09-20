package persistance;

import java.sql.Connection;


public  class Customer extends CustomerTableController{

    private String id;
    private String ipAddress;
    private String port;
    private String dbName;
    private String dbPassword;
    private String dbUsername;


private String name;
private String address;
private String dob;
private String email;
private String password;
private String phoneno;
private String username;

    private CustomerTableController myController ;
    private Connection myConnection ;

    public Customer(int id,String ipAddress,String port, String dbName, String dbUsername ,String dbPassword) {
        this.ipAddress = ipAddress;
        this.port = port;
        this.dbName = dbName;
        this.dbPassword = dbPassword;
        this.dbUsername = dbUsername;
       // myController = new CustomerTableController();
       // myConnection = myController.createConnection(ipAddress, port, dbName, dbUsername, dbPassword);
        // getInfo(id,myConnection);
    }

    public String getId() {
        this.id = customerInfo.get(1);
        return id;
    }


    public String getName() {
        this.name = customerInfo.get(2);
        return name;
    }

    public String getAddress() {
        this.address = customerInfo.get(3);
        return address;
    }

    public String getDob() {

        this.dob = customerInfo.get(4);
        return dob;
    }

    public String getEmail() {

        this.dob = customerInfo.get(5);
        return dob;
    }

    public String getUsername() {
        this.username = customerInfo.get(6);
        return username;
    }

    public String getPassword() {

        this.password = customerInfo.get(7);
        return password;
    }

    public String getPhoneno() {
        this.phoneno = customerInfo.get(8);
        return phoneno;
    }


    public String jsonObject(){
        return "{ \"name\"" + ":" + "\""+ getName()+ "\"" +"," + "\"address\"" + ":" + "\"" + getAddress()+ "\"" +"," + "\"dob\"" + ":" + "\"" + getDob() +"\"" +"," + "\"email\"" + ":" +  "\"" + getEmail()+ "\"" +","  + "\"username\"" + ":" + "\"" +getUsername()+ "\"" +"," + "\"password\"" + ":" + "\"" + getPassword() + "\"" +"," + "\"phoneno\"" + ":" + "\"" +getPhoneno()+ "\"" +" }";
    }




}
