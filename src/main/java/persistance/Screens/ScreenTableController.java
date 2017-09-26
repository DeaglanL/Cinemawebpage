package persistance.Screens;

import java.sql.*;

public class ScreenTableController {

    public void putScreen(Connection myConnection, String type, int screeningId, int seatId) {
        String query = " insert into screens (type, screeningId, seatId)"
                + " values (?,?,?)";
        PreparedStatement preparedStmt;
        try {
            preparedStmt = myConnection.prepareStatement(query);
            preparedStmt.setString (1, type);
            preparedStmt.setInt (2, screeningId);
            preparedStmt.setInt (3, seatId);


            preparedStmt.execute();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }


    public Screen getProductById(int id, Connection myConnection){

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
