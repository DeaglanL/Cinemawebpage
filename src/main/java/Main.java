import Customers.Customer;
import Customers.CustomerTableController;
import Movies.MovieTableController;
import Tickets.Ticket;

import java.sql.Connection;
import java.util.Calendar;

public class Main {

    public static void main(String[] args) {

        MasterController y = new MasterController();
        Connection conn = y.createConnection("46.32.240.39 ", "3306", "apoll-ila-u-141465", "apoll-ila-u-141465", "gMgN/yVq3");

    }

}