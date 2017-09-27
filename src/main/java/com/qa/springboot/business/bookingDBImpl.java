package com.qa.springboot.business;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.qa.springboot.persistance.Cinemas.Cinema;
import com.qa.springboot.persistance.Cinemas.CinemaTableController;
import com.qa.springboot.persistance.MasterController;
import com.qa.springboot.persistance.customer.CustomerTableController;
import org.springframework.stereotype.Service;

import javax.validation.constraints.Null;
import java.sql.Connection;

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

    private Gson gson = new Gson();

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
            return gson.toJson(cine);
        }
        catch (Exception e)
        {
            return "{\"message\": \""+ e.toString() +"\"}";
        }
    }

    public String getScreenings(String movie) {
        return null;
    }
}
