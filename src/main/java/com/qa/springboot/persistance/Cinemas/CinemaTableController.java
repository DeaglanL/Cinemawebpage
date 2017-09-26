package com.qa.springboot.persistance.Cinemas;

import java.sql.*;

public class CinemaTableController {


    public void putCinema(Connection myConnection, String address, String openingTime, String closingTime, String name, int numberOfScreens, int screens_screensid) {
        String query = " insert into tickets (address, openingTime, closingTime, name, numberOfScreens, screens_screensid)"
                + " values (?,?,?,?,?,?)";
        PreparedStatement preparedStmt;
        try {
            preparedStmt = myConnection.prepareStatement(query);
            preparedStmt.setString (1, address);
            preparedStmt.setString (2, openingTime);
            preparedStmt.setString (3, closingTime);
            preparedStmt.setString(4, name);
            preparedStmt.setInt (5, numberOfScreens);
            preparedStmt.setInt (6, screens_screensid);
            preparedStmt.execute();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }


    public Cinema getCinemaById(int id, Connection myConnection){

        Cinema currentCinema;

        String cinemaId = "";
        String address = "";
        String openingTime = "";
        String closingTime = "";
        String name = "";
        String numberOfScreens = "";
        String screens_screensid = "";



        try {
            Statement stmt = myConnection.createStatement();
            ResultSet rs = stmt.executeQuery("select * from cinemas where cinemaid = " + "\"" + id + "\"");
            while (rs.next()) {
                cinemaId = cinemaId + rs.getString("cinemaId");
                address = address + rs.getString("address");
                openingTime = openingTime + rs.getString("openingTime" );
                closingTime = closingTime + rs.getString("closingTime" );
                name = name + rs.getString("name" );
                numberOfScreens = numberOfScreens + rs.getString("numberOfScreens" );
                screens_screensid = screens_screensid + rs.getString("screens_screensid" );


            }

        } catch (SQLException e) {

            e.printStackTrace();
        }

        currentCinema =  new Cinema(cinemaId,address,openingTime,closingTime,name,numberOfScreens,screens_screensid);
        return currentCinema;
    }







    public  void removeCinemaById(Connection myConnection,int id) {
        String query = "delete from cinemas where cinemaid = ?";

        try {

            PreparedStatement preparedStmt = myConnection.prepareStatement(query);
            preparedStmt.setInt(1, id);
            preparedStmt.execute();


        } catch (SQLException e) {

            e.printStackTrace();
        }


    }


}
