package persistance;

public class Movie {

    private String movieId;
    private String title;
    private String screeningId;
    private String CustomerId;


    public Movie(String movieId, String title, String screeningId, String customerId) {
        this.movieId = movieId;
        this.title = title;
        this.screeningId = screeningId;
        CustomerId = customerId;
    }

    public String getMovieId() {
        return movieId;
    }

    public String getTitle() {
        return title;
    }

    public String getScreeningId() {
        return screeningId;
    }

    public String getCustomerId() {
        return CustomerId;
    }


    public void setMovieId(String movieId) {
        this.movieId = movieId;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setScreeningId(String screeningId) {
        this.screeningId = screeningId;
    }

    public void setCustomerId(String customerId) {
        CustomerId = customerId;
    }
}
