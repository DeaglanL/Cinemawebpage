package com.qa.springboot.persistance.customer;

import java.sql.*;


public class CustomerTableController {






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


    public  Customer getCustomerById(int id, Connection myConnection){

        Customer currentCustomer;

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


        currentCustomer =  new Customer(customerId, name, address,dob,email,password,phoneno,username);

        return currentCustomer;
    }








    public  Customer getCustomerByName( String usernamex, Connection myConnection){

        System.out.println("In get cust by name");

        Customer currentCustomer;

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
            ResultSet rs = stmt.executeQuery("select * from customers where username = " + "\"" + usernamex+ "\"");
            while (rs.next()) {
                customerId = customerId + rs.getString("customerid");
                name = name + rs.getString("name");
                address = address + rs.getString("address");
                dob = dob + rs.getString("dob");
                email = email + rs.getString("email");
                username = username + rs.getString("username");
                password = password + rs.getString("password");
                phoneno = phoneno + rs.getString("phoneno");

                System.out.println("not dead yet");
            }

        } catch (SQLException e) {

            e.printStackTrace();
        }

        currentCustomer =  new Customer(customerId, name, address,dob,email,password,phoneno,username);

        return currentCustomer;
    }

    public  Customer getCustomerByPassword( String passwordx, Connection myConnection){

        Customer currentCustomer;
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
            ResultSet rs = stmt.executeQuery("select * from customers where password = " + "\"" + passwordx+ "\"");
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

        currentCustomer =  new Customer(customerId, name, address,dob,email,password,phoneno,username);

        return currentCustomer;
    }


    public  void removeCustomerById(Connection myConnection,int id) {
        String query = "delete from customers where productid = ?";

        try {

            PreparedStatement preparedStmt = myConnection.prepareStatement(query);
            preparedStmt.setInt(1, id);
            preparedStmt.execute();


        } catch (SQLException e) {

            e.printStackTrace();
        }


    }


    public  void removeCustomerByName(Connection myConnection,String name) {
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