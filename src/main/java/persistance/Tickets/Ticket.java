package persistance.Tickets;

public class Ticket extends TicketTableController {

    private String ticketId ="";
    private String type ="";
    private String time ="";
    private String date ="";
    private String seatNumber ="";
    private String filmTitle ="";
    private String customers_customersid ="";
    private String screening_screeningid ="";
    private String screening_movies_movieid ="";
    private String screening_movies_customers_customersid ="";


    public Ticket(String ticketId, String type, String time, String date, String seatNumber, String filmTitle, String customers_customersid, String screening_screeningid, String screening_movies_movieid, String screening_movies_customers_customersid) {
        this.ticketId = ticketId;
        this.type = type;
        this.time = time;
        this.date = date;
        this.seatNumber = seatNumber;
        this.filmTitle = filmTitle;
        this.customers_customersid = customers_customersid;
        this.screening_screeningid = screening_screeningid;
        this.screening_movies_movieid = screening_movies_movieid;
        this.screening_movies_customers_customersid = screening_movies_customers_customersid;
    }


    public String getTicketId() {
        return ticketId;
    }

    public String getType() {
        return type;
    }

    public String getTime() {
        return time;
    }

    public String getDate() {
        return date;
    }

    public String getSeatNumber() {
        return seatNumber;
    }

    public String getFilmTitle() {
        return filmTitle;
    }

    public String getCustomers_customersid() {
        return customers_customersid;
    }

    public String getScreening_screeningid() {
        return screening_screeningid;
    }

    public String getScreening_movies_movieid() {
        return screening_movies_movieid;
    }

    public String getScreening_movies_customers_customersid() {
        return screening_movies_customers_customersid;
    }

    public void setTicketId(String ticketId) {
        this.ticketId = ticketId;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setSeatNumber(String seatNumber) {
        this.seatNumber = seatNumber;
    }

    public void setFilmTitle(String filmTitle) {
        this.filmTitle = filmTitle;
    }

    public void setCustomers_customersid(String customers_customersid) {
        this.customers_customersid = customers_customersid;
    }

    public void setScreening_screeningid(String screening_screeningid) {
        this.screening_screeningid = screening_screeningid;
    }

    public void setScreening_movies_movieid(String screening_movies_movieid) {
        this.screening_movies_movieid = screening_movies_movieid;
    }

    public void setScreening_movies_customers_customersid(String screening_movies_customers_customersid) {
        this.screening_movies_customers_customersid = screening_movies_customers_customersid;
    }
}
