package Tickets;

import java.sql.Connection;

public class Ticket extends TicketTableController {

    private String customers_customersid;
    private String ticketId;
    private String screening_screeningId;
    private String date;
    private String filmTitle;
    private String price;
    private String time;
    private String type;
    private String seatNumber;



    private String id;
    private String ipAddress;
    private String port;
    private String dbName;
    private String dbPassword;
    private String dbUsername;




    private TicketTableController myController ;
    private Connection myConnection ;

    public Ticket(int id,String ipAddress,String port, String dbName, String dbUsername ,String dbPassword) {
        this.ipAddress = ipAddress;
        this.port = port;
        this.dbName = dbName;
        this.dbPassword = dbPassword;
        this.dbUsername = dbUsername;
        myController = new TicketTableController();
        myConnection = myController.createConnection(ipAddress, port, dbName, dbUsername, dbPassword);
        getInfo(id,myConnection);
    }

    public Connection getMyConnection() {
        return myConnection;
    }

    public String getCustomers_customersid() {
        this.customers_customersid = customerInfo.get(3);
        return customers_customersid;
    }

    public String getTicketId() {
        this.ticketId = customerInfo.get(1);
        return ticketId;
    }

    public String getScreening_screeningId() {
        this.screening_screeningId = customerInfo.get(2);
        return screening_screeningId;
    }

    public String getDate() {
        this.date = customerInfo.get(5);
        return date;
    }

    public String getFilmTiltle() {
        this.filmTitle = customerInfo.get(4);
        return filmTitle;
    }

    public String getPrice() {
        this.price = customerInfo.get(7);
        return price;
    }

    public String getTime() {
        this.time = customerInfo.get(6);
        return time;
    }

    public String getType() {
        this.type = customerInfo.get(8);
        return type;
    }

    public String seatNumber() {
        this.seatNumber = customerInfo.get(9);
        return seatNumber;
    }



}
