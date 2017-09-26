package Screening;

import java.sql.*;

public class ScreeningTableController {


    public void putScreening(Connection myConnection, String cinema, String screeid, String time, String movieid, String date, String movies_movieid, String movies_customers_customersid, String screens_screensid) {
        String query = " insert into screenings (cinema, screeid, time, movieid, date, movies_movieid, movies_customers_customersid, screens_screensid)"
                + " values (?,?,?,?,?,?,?)";
        PreparedStatement preparedStmt;
        try {
            preparedStmt = myConnection.prepareStatement(query);
            preparedStmt.setString (1, cinema);
            preparedStmt.setInt (2, screeid);
            preparedStmt.setInt (3, time);
            preparedStmt.setString (4, movieid);
            preparedStmt.setInt (5, date);
            preparedStmt.setInt (6, movies_movieid);
            preparedStmt.setString (7, movies_customers_customersid);
            preparedStmt.setInt (8, screens_screensid);
            preparedStmt.execute();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }


    public Screening getProductById(int id, Connection myConnection){

        Screen currentScreen;

        String screenid ="";
        String type ="";
        String screeningid ="";
        String seatid ="";



        try {
            Statement stmt = myConnection.createStatement();
            ResultSet rs = stmt.executeQuery("select * from products where productid = " + "\"" + id + "\"");
            while (rs.next()) {
                screenid = screenid + rs.getString("screenid");
                type = type + rs.getString("type");
                screeningid = screeningid + rs.getString("screeningid" );
                seatid = seatid + rs.getString("seatid" );

            }

        } catch (SQLException e) {

            e.printStackTrace();
        }

        currentScreen =  new Screen(screenid,type,screeningid,seatid);
        return currentScreen;
    }


    public  void removeScreenById(Connection myConnection,int id) {
        String query = "delete from screens where screensid = ?";

        try {

            PreparedStatement preparedStmt = myConnection.prepareStatement(query);
            preparedStmt.setInt(1, id);
            preparedStmt.execute();


        } catch (SQLException e) {

            e.printStackTrace();
        }


    }
}
