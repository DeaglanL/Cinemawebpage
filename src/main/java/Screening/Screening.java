package Screening;

public class Screening {
    private String screeningid;
    private String cinema;
    private String screenid;
    private String time;
    private String movieid;
    private String date;
    private String movies_movieid;
    private String movies_customers_customersid;
    private String screens_screensid;


    public Screening(String screeningid, String cinema, String screenid, String time, String movieid, String date, String movies_movieid, String movies_customers_customersid, String screens_screensid) {
        this.screeningid = screeningid;
        this.cinema = cinema;
        this.screenid = screenid;
        this.time = time;
        this.movieid = movieid;
        this.date = date;
        this.movies_movieid = movies_movieid;
        this.movies_customers_customersid = movies_customers_customersid;
        this.screens_screensid = screens_screensid;
    }


    public String getScreeningid() {
        return screeningid;
    }

    public String getCinema() {
        return cinema;
    }

    public String getscreenid() {
        return screenid;
    }

    public String getTime() {
        return time;
    }

    public String getMovieid() {
        return movieid;
    }

    public String getDate() {
        return date;
    }

    public String getMovies_movieid() {
        return movies_movieid;
    }

    public String getMovies_customers_customersid() {
        return movies_customers_customersid;
    }

    public String getScreens_screensid() {
        return screens_screensid;
    }

    public void setScreeningid(String screeningid) {
        this.screeningid = screeningid;
    }

    public void setCinema(String cinema) {
        this.cinema = cinema;
    }

    public void setscreenid(String screenid) {
        this.screenid = screenid;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public void setMovieid(String movieid) {
        this.movieid = movieid;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setMovies_movieid(String movies_movieid) {
        this.movies_movieid = movies_movieid;
    }

    public void setMovies_customers_customersid(String movies_customers_customersid) {
        this.movies_customers_customersid = movies_customers_customersid;
    }

    public void setScreens_screensid(String screens_screensid) {
        this.screens_screensid = screens_screensid;
    }
}
