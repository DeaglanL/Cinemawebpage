package com.qa.springboot.persistance;

import java.sql.*;

public class MovieTableController {


    public void putMovie(Connection myConnection, String title, int screeningid, int customers_customersid) {
        String query = " insert into movies (title, screeningid, customers_customersid)"
                + " values (?,?,?)";
        PreparedStatement preparedStmt;
        try {
            preparedStmt = myConnection.prepareStatement(query);
            preparedStmt.setString (1, title);
            preparedStmt.setInt (2, screeningid);
            preparedStmt.setInt (3, customers_customersid);
            preparedStmt.execute();

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }


    public Movie getMovieById(int id, Connection myConnection){

        Movie currentMovie;

        String movieId = "";
        String title = "";
        String screeningId = "";
        String customers_customersid = "";

        try {
            Statement stmt = myConnection.createStatement();
            ResultSet rs = stmt.executeQuery("select * from movies where movieid = " + "\"" + id + "\"");
            while (rs.next()) {
                movieId = movieId + rs.getString("movieid");
                title = title + rs.getString("title" );
                screeningId = screeningId + rs.getString("screeningid" );
                customers_customersid = customers_customersid + rs.getString("customers_customersid" );

            }

        } catch (SQLException e) {

            e.printStackTrace();
        }

        currentMovie =  new Movie(movieId,title,screeningId,customers_customersid);
        return currentMovie;
    }


    public  Movie getMovieByName( String usernamex, Connection myConnection){

        Movie currentMovie;

        String movieid = "";
        String title ="";
        String screeningid="";
        String customers_customersid="";


        try {
            Statement stmt = myConnection.createStatement();
            ResultSet rs = stmt.executeQuery("select * from movies where name = " + "\"" + usernamex+ "\"");
            while (rs.next()) {
                movieid = movieid + rs.getString("movieid");
                title = title + rs.getString("title" );
                screeningid = screeningid + rs.getString("screeningid" );
                customers_customersid = customers_customersid + rs.getString("customers_customersid" );
            }



        } catch (SQLException e) {

            e.printStackTrace();
        }

        currentMovie =  new Movie(movieid, title, screeningid,customers_customersid);

        return currentMovie;
    }




    public  Movie getMovieByPassword( String passwordx, Connection myConnection){

        Movie currentMovie;

        String movieid = "";
        String title ="";
        String screeningid="";
        String customers_customersid="";


        try {
            Statement stmt = myConnection.createStatement();
            ResultSet rs = stmt.executeQuery("select * from movies where password = " + "\"" + passwordx+ "\"");
            while (rs.next()) {
                movieid = movieid + rs.getString("movieid");
                title = title + rs.getString("title" );
                screeningid = screeningid + rs.getString("screeningid" );
                customers_customersid = customers_customersid + rs.getString("customers_customersid" );
            }



        } catch (SQLException e) {

            e.printStackTrace();
        }

        currentMovie =  new Movie(movieid, title, screeningid,customers_customersid);

        return currentMovie;
    }









    public  void removeMovieById(Connection myConnection,int id) {
        String query = "delete from movies where movieid = ?";

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
