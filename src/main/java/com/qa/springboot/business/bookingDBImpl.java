package com.qa.springboot.business;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.qa.springboot.persistance.Cinemas.Cinema;
import com.qa.springboot.persistance.Cinemas.CinemaTableController;
import com.qa.springboot.persistance.MasterController;
import com.qa.springboot.persistance.Screening.Screening;
import com.qa.springboot.persistance.Screening.ScreeningTableController;
import com.qa.springboot.persistance.movie.Movie;
import org.springframework.stereotype.Service;

import javax.ejb.Stateful;
import java.sql.Connection;
import java.util.List;

@Stateful
@Service
public class bookingDBImpl implements BookingService{

    private String ip;
    private String port;
    private String dbName;
    private String username;
    private String password;
    private Connection conc;
    private MasterController mc = new MasterController();
    private CinemaTableController cinemaControl = new CinemaTableController();
    private ScreeningTableController screeningsControl = new ScreeningTableController();
    private Gson gson = new Gson();

    private Cinema currentCinema;

    public bookingDBImpl(){
        ip = "46.32.240.39";
        port = "3306";
        dbName = "apoll-6cn-u-141443";
        username = "apoll-6cn-u-141443";
        password = "6.wME^^fk";

        conc = mc.createConnection(ip, port, dbName, username, password);
    }

    public bookingDBImpl(String ip,String port,String dbName, String username,String password){
        this.ip = ip;
        this.port = port;
        this.dbName = dbName;
        this.username = username;
        this.password = password;

        conc = mc.createConnection(ip, port, dbName, username, password);
    }


    public String getCinemaInfo(String cinema) {
        Cinema cine;

        try
        {
            JsonObject cinePOJO = gson.fromJson(cinema, JsonObject.class);
            cine = cinemaControl.getCinemaByName(cinePOJO.getAsJsonObject("cinema").getAsString(), conc);
            currentCinema = cine;
            return gson.toJson(cine);
        }
        catch (Exception e)
        {
            return "{\"message\": \""+ e.toString() +"\"}";
        }
    }

    public String getScreenings(String movie) {
        List<Screening> sreenings;
        try
        {
            Movie moviePOJO = gson.fromJson(movie, Movie.class);
            sreenings = screeningsControl.getScreeningByCinemaAndMovie(currentCinema.getName(), Integer.parseInt(moviePOJO.getMovieId()), conc);
            return gson.toJson(sreenings);

        }
        catch (Exception e)
        {
            return "{\"message\": \""+ e.toString() +"\"}";
        }
    }
}
