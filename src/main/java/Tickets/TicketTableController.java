package Tickets;

import java.sql.*;
import java.util.HashMap;

public class TicketTableController {

    public void putTicket(Connection myConnection, String type, String time ,String date, int seatNumber , String filmTitle , int customers_customersid, int screening_screeningid, int screening_movies_movieid, int screening_movies_customers_customersid) {
        String query = " insert into tickets (type, time ,date, seatNumber , filmTitle , customers_customersid, screening_screeningid, screening_movies_movieid, screening_movies_customers_customersid )"
                + " values (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        PreparedStatement preparedStmt;
        try {
            preparedStmt = myConnection.prepareStatement(query);
            preparedStmt.setString (1, type);
            preparedStmt.setString   (2, time);
            preparedStmt.setString (3, date);
            preparedStmt.setInt (4, seatNumber);
            preparedStmt.setString   (5, filmTitle);
            preparedStmt.setInt   (6, customers_customersid);
            preparedStmt.setInt   (7, screening_screeningid);
            preparedStmt.setInt   (8, screening_movies_movieid);
            preparedStmt.setInt   (9, screening_movies_customers_customersid);
            preparedStmt.execute();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }


    protected  HashMap getInfo(int id, Connection myConnection){

        String type ="";
        String time ="";
        String date ="";
        int seatNumber =0;
        String filmTitle ="";
        int customers_customersid =0;
        int screening_screeningid =0;
        int screening_movies_movieid =0;
        int screening_movies_customers_customersid =0;


        try {
            Statement stmt = myConnection.createStatement();
            ResultSet rs = stmt.executeQuery("select * from tickets where ticketid = " + "\"" + id + "\"");
            while (rs.next()) {
                type = type + rs.getString("type");
                time = time + rs.getString("time" );
                date = date + rs.getString("date" );
                seatNumber = seatNumber + rs.getString("seatNumber" );
                filmTitle = filmTitle + rs.getString("filmTitle" );
                customers_customersid = customers_customersid + rs.getString("customers_customersid" );
                screening_screeningid = screening_screeningid + rs.getString("screening_screeningid" );
                screening_movies_movieid = screening_movies_movieid + rs.getString("screening_movies_movieid" );
                screening_movies_customers_customersid = screening_movies_customers_customersid + rs.getString("screening_movies_customers_customersid" );
            }

        } catch (SQLException e) {

            e.printStackTrace();
        }



        return customerInfo;
    }



    public  void removeCustomerId(Connection myConnection,int id) {
        String query = "delete from tickets where productid = ?";

        try {

            PreparedStatement preparedStmt = myConnection.prepareStatement(query);
            preparedStmt.setInt(1, id);
            preparedStmt.execute();


        } catch (SQLException e) {

            e.printStackTrace();
        }


    }


    public  void removeCustomerByName(Connection myConnection,String name) {
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
