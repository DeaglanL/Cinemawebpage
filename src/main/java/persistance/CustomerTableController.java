package persistance;

import java.sql.*;
import java.util.HashMap;


public class CustomerTableController {

public HashMap<Integer,String>customerInfo  = new HashMap <Integer,String> ();




    public Connection createConnection(String ipAddress,String port, String dbName,String username, String password) {
        Connection myConnection = null;
        System.out.println("-------- MySQL JDBC Connection Testing ------------");
        System.out.println(("jdbc:mysql://"+ ipAddress + ":" + port + "/" + dbName + "," + username +"," + password));
        try {
            Class.forName("com.mysql.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            System.out.println("Where is your MySQL JDBC Driver?");
            e.printStackTrace();
            return myConnection;
        }

        System.out.println("MySQL JDBC Driver Registered!");
        Connection connection = null;

        try {
            connection = DriverManager
                    .getConnection("jdbc:mysql://"+ ipAddress + ":" + port + "/" + dbName,username,password);



        } catch (SQLException e) {
            System.out.println("Connection Failed! Check output console");
            e.printStackTrace();
            return myConnection;
        }

        if (connection != null) {
            System.out.println("You made it, take control your database now!");
            myConnection = connection;
        } else {
            System.out.println("Failed to make connection!");
        }
        return myConnection;
    }



    public void closeConnection(Connection myConnection) {
        try {
            myConnection.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }


    public void putCustomer(Connection myConnection, String name, String address, String dob, String email, String username, String password, String phoneno) {
        String query = " insert into customers (name, address, dob, email, username, password, phoneno)"
                + " values (?, ?, ?, ?, ?, ?, ?)";
        PreparedStatement preparedStmt;
        try {
            preparedStmt = myConnection.prepareStatement(query);
            preparedStmt.setString (1, name);
            preparedStmt.setString   (2, address);
            preparedStmt.setString (3, dob);
            preparedStmt.setString   (4, email);
            preparedStmt.setString   (5, username);
            preparedStmt.setString   (6, password);
            preparedStmt.setString   (7, phoneno);
            preparedStmt.execute();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }


    public  HashMap getInfo(int id, Connection myConnection){

        String customerId = "";
        String name ="";
        String address="";
        String dob="";
        String email="";
        String username="";
        String password="";
        String phoneno="";

        try {
            Statement stmt = myConnection.createStatement();
            ResultSet rs = stmt.executeQuery("select * from customers where customerid = " + "\"" + id + "\"");
            while (rs.next()) {
                customerId = customerId + rs.getString("customerid");
                name = name + rs.getString("name" );
                address = address + rs.getString("address" );
                dob = dob + rs.getString("dob" );
                email = email + rs.getString("email" );
                username = username + rs.getString("username" );
                password = password + rs.getString("password" );
                phoneno = phoneno + rs.getString("phoneno" );
            }

        } catch (SQLException e) {

            e.printStackTrace();
        }


        customerInfo.put(1,customerId);
        customerInfo.put(2,name);
        customerInfo.put(3,address);
        customerInfo.put(4,dob);
        customerInfo.put(5,email);
        customerInfo.put(6,username);
        customerInfo.put(7,password);
        customerInfo.put(8,phoneno);
        return customerInfo;
    }



    public  void removeProductById(Connection myConnection,int id) {
        String query = "delete from customers where productid = ?";

        try {

            PreparedStatement preparedStmt = myConnection.prepareStatement(query);
            preparedStmt.setInt(1, id);
            preparedStmt.execute();


        } catch (SQLException e) {

            e.printStackTrace();
        }


    }


    public  void removeProductByName(Connection myConnection,String name) {
        String query = "delete from customers where productid = ?";

        try {

            PreparedStatement preparedStmt = myConnection.prepareStatement(query);
            preparedStmt.setString(1, name);
            preparedStmt.execute();



        } catch (SQLException e) {

            e.printStackTrace();
        }


    }


}