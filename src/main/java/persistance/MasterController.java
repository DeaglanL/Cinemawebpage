package persistance;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Calendar;

public class MasterController {

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

    public Calendar setDate(int day, int month, int year, int hours, int minutes){
        Calendar cal = Calendar.getInstance();
        cal.set(cal.YEAR, year );
        cal.set(cal.MONTH, month );
        cal.set(cal.DATE, day );
        cal.set( cal.HOUR_OF_DAY, hours );
        cal.set( cal.MINUTE, minutes );
        cal.set( cal.SECOND, 0 );
        cal.set( cal.MILLISECOND, 0 );
        return cal;
    }
}
