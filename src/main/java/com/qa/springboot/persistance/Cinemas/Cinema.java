package com.qa.springboot.persistance.Cinemas;

public class Cinema {

    private String cinemaId;
    private String address;
    private String openingTime;
    private String closingTime;
    private String name;
    private String numberOfScreens;
    private String screens_screensid;


    public Cinema(String cinemaId, String address, String openingTime, String closingTime, String name, String numberOfScreens, String screens_screensid) {
        this.cinemaId = cinemaId;
        this.address = address;
        this.openingTime = openingTime;
        this.closingTime = closingTime;
        this.name = name;
        this.numberOfScreens = numberOfScreens;
        this.screens_screensid = screens_screensid;
    }

    public String getCinemaId() {
        return cinemaId;
    }

    public String getaddress() {
        return address;
    }

    public String getOpeningTime() {
        return openingTime;
    }

    public String getClosingTime() {
        return closingTime;
    }

    public String getName() {
        return name;
    }

    public String getNumberOfScreens() {
        return numberOfScreens;
    }

    public String getScreens_screensid() {
        return screens_screensid;
    }


    public void setCinemaId(String cinemaId) {
        this.cinemaId = cinemaId;
    }

    public void setaddress(String address) {
        this.address = address;
    }

    public void setOpeningTime(String openingTime) {
        this.openingTime = openingTime;
    }

    public void setClosingTime(String closingTime) {
        this.closingTime = closingTime;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setNumberOfScreens(String numberOfScreens) {
        this.numberOfScreens = numberOfScreens;
    }

    public void setScreens_screensid(String screens_screensid) {
        this.screens_screensid = screens_screensid;
    }
}

