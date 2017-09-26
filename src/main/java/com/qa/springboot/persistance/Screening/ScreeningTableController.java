package com.qa.springboot.persistance.Screening;

import java.sql.*;

public class ScreeningTableController {


    public void putScreening(Connection myConnection, String cinema, int screenid, String time, String movieid, String date, String movies_movieid, String movies_customers_customersid, String screens_screensid) {
        String query = " insert into screening (cinema, screenid, time, movieid, date, movies_movieid, movies_customers_customersid, screens_screensid)"
                + " values (?,?,?,?,?,?,?,?)";
        PreparedStatement preparedStmt;
        try {
            preparedStmt = myConnection.prepareStatement(query);
            preparedStmt.setString (1, cinema);
            preparedStmt.setInt (2, screenid);
            preparedStmt.setString (3, time);
            preparedStmt.setString (4, movieid);
            preparedStmt.setString (5, date);
            preparedStmt.setString (6, movies_movieid);
            preparedStmt.setString (7, movies_customers_customersid);
            preparedStmt.setString (8, screens_screensid);
            preparedStmt.execute();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }


    public Screening getScreeningById(int id, Connection myConnection){

        Screening currentScreening;

        String screeningid ="";
        String cinema ="";
        String screenid ="";
        String time ="";
        String movieid ="";
        String date ="";
        String movies_movieid ="";
        String movies_customers_customersid ="";
        String screens_screensid ="";

        try {
            Statement stmt = myConnection.createStatement();
            ResultSet rs = stmt.executeQuery("select * from screening where screeningid = " + "\"" + id + "\"");
            while (rs.next()) {
                screeningid  = screeningid  + rs.getString("screeningid ");
                cinema = cinema + rs.getString("cinema");
                screenid = screenid + rs.getString("screenid");
                time = time + rs.getString("time" );
                movieid = movieid + rs.getString("movieid" );
                date = date + rs.getString("date");
                movies_movieid = movies_movieid + rs.getString("movies_movieid");
                movies_customers_customersid = movies_customers_customersid + rs.getString("movies_customers_customersid" );
                screens_screensid = screens_screensid + rs.getString("screens_screensid" );

            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
         currentScreening=  new Screening(screeningid,cinema,screenid,time,movieid, date, movies_movieid, movies_customers_customersid, screens_screensid);
        return currentScreening;
    }
    public  void removeScreenById(Connection myConnection,int id) {
        String query = "delete from screening where screeningid = ?";
        try {
            PreparedStatement preparedStmt = myConnection.prepareStatement(query);
            preparedStmt.setInt(1, id);
            preparedStmt.execute();
        } catch (SQLException e) {
            e.printStackTrace();
        }

    }
}
