package Tickets;

import java.sql.*;
import java.util.HashMap;

public class TicketTableController {

    public HashMap<Integer,String> customerInfo  = new HashMap <Integer,String> ();

    public Connection createConnection(String ipAddress, String port, String dbName, String username, String password) {
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


    public void putTicket(Connection myConnection, String date, String filmTitle, String price, String seatNumber , String time, String type) {
        String query = " insert into tickets (date, filmTitle ,price, seatNumber , time , type)"
                + " values (?, ?, ?, ?, ?, ?)";
        PreparedStatement preparedStmt;
        try {
            preparedStmt = myConnection.prepareStatement(query);
            preparedStmt.setString (1, date);
            preparedStmt.setString   (2, filmTitle);
            preparedStmt.setString (3, price);
            preparedStmt.setString (4, seatNumber);
            preparedStmt.setString   (5, time);
            preparedStmt.setString   (6, type);
            preparedStmt.execute();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }


    protected  HashMap getInfo(int id, Connection myConnection){

        String customers_customersidx = "";
        String datex = "";
        String filmTtilex ="";
        String pricex="";
        String screening_screeningIdx = "";
        String seatNumberx = "";
        String ticketidx = "";
        String timex="";
        String typex ="";


        try {
            Statement stmt = myConnection.createStatement();
            ResultSet rs = stmt.executeQuery("select * from tickets where ticketid = " + "\"" + id + "\"");
            while (rs.next()) {
                customers_customersidx = customers_customersidx + rs.getString("customers_customersid");
                datex = datex + rs.getString("date" );
                filmTtilex = filmTtilex + rs.getString("filmTitle" );
                pricex = pricex + rs.getString("price" );
                screening_screeningIdx = screening_screeningIdx + rs.getString("screening_screeningId" );
                seatNumberx = seatNumberx + rs.getString("seatNumber" );
                ticketidx = ticketidx + rs.getString("ticketid" );
                timex = timex + rs.getString("time" );
                typex = typex + rs.getString("type" );
            }

        } catch (SQLException e) {

            e.printStackTrace();
        }


        customerInfo.put(1,ticketidx);
        customerInfo.put(2,screening_screeningIdx);
        customerInfo.put(3,customers_customersidx);
        customerInfo.put(4,filmTtilex);
        customerInfo.put(5,datex);
        customerInfo.put(6,timex);
        customerInfo.put(7,pricex);
        customerInfo.put(8,typex);
        customerInfo.put(9,seatNumberx);
        return customerInfo;
    }



    public  void removeProductById(Connection myConnection,int id) {
        String query = "delete from tickets where productid = ?";

        try {

            PreparedStatement preparedStmt = myConnection.prepareStatement(query);
            preparedStmt.setInt(1, id);
            preparedStmt.execute();


        } catch (SQLException e) {

            e.printStackTrace();
        }


    }


    public  void removeProductByName(Connection myConnection,String name) {
        String query = "delete from tickets where productid = ?";

        try {

            PreparedStatement preparedStmt = myConnection.prepareStatement(query);
            preparedStmt.setString(1, name);
            preparedStmt.execute();



        } catch (SQLException e) {

            e.printStackTrace();
        }


    }



}
