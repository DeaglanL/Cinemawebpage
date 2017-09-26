package Tickets;
import Customers.Customer;

import java.sql.*;

public class TicketTableController {


    public void putTicket(Connection myConnection, String type, String time, String date, int seatNumber, String filmTitle, int customers_customersid, int screening_screeningid, int screening_movies_movieid, int screening_movies_customers_customersid) {
        String query = " insert into tickets (String type, String time, String date, int seatNumber, String filmTitle, int customers_customersid, int screening_screeningid, int screening_movies_movieid, int screening_movies_customers_customersid)"
                + " values (?,?,?,?,?,?,?,?,?)";
        PreparedStatement preparedStmt;
        try {
            preparedStmt = myConnection.prepareStatement(query);
            preparedStmt.setString (1, type);
            preparedStmt.setString (2, time);
            preparedStmt.setString (3, date);
            preparedStmt.setInt (4, seatNumber);
            preparedStmt.setString (5, filmTitle);
            preparedStmt.setInt (6, customers_customersid);
            preparedStmt.setInt (7, screening_screeningid);
            preparedStmt.setInt (8, screening_movies_customers_customersid);
            preparedStmt.execute();

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }


    public Ticket getTicketById(int id, Connection myConnection){

        Ticket currentTicket;

        String type ="";
        String time ="";
        String date ="";
        String seatNumber ="";
        String filmTitle ="";
        String customers_customersid ="";
        String screening_screeningid ="";
        String screening_movies_movieid ="";
        String screening_movies_customers_customersid ="";
        String ticketId ="";

        try {
            Statement stmt = myConnection.createStatement();
            ResultSet rs = stmt.executeQuery("select * from tickets where ticketid = " + "\"" + id + "\"");
            while (rs.next()) {
                ticketId = ticketId + rs.getString("ticketid");
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

        currentTicket =  new Ticket(ticketId,type,time,date,seatNumber,filmTitle,customers_customersid,screening_screeningid,screening_movies_movieid,screening_movies_customers_customersid);
        return currentTicket;
    }







    public  void removeTicketById(Connection myConnection,int id) {
        String query = "delete from tickets where ticketid = ?";

        try {

            PreparedStatement preparedStmt = myConnection.prepareStatement(query);
            preparedStmt.setInt(1, id);
            preparedStmt.execute();


        } catch (SQLException e) {

            e.printStackTrace();
        }


    }


    public  void removeMovieByName(Connection myConnection,String titlex) {
        String query = "delete from movies where title = ?";

        try {

            PreparedStatement preparedStmt = myConnection.prepareStatement(query);
            preparedStmt.setString(1, titlex);
            preparedStmt.execute();



        } catch (SQLException e) {

            e.printStackTrace();
        }
    }
}
