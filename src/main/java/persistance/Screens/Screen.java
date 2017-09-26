package Screens;

public class Screen {

    private String screenid;
    private String type;
    private String screeningid;
    private String seatid ;


    public Screen(String screenid, String type, String screeningid, String seatid) {
        this.screenid = screenid;
        this.type = type;
        this.screeningid = screeningid;
        this.seatid = seatid;
    }


    public String getScreenid() {
        return screenid;
    }

    public String getType() {
        return type;
    }

    public String getScreeningid() {
        return screeningid;
    }

    public String getSeatid() {
        return seatid;
    }


    public void setScreenid(String screenid) {
        this.screenid = screenid;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setScreeningid(String screeningid) {
        this.screeningid = screeningid;
    }

    public void setSeatid(String seatid) {
        this.seatid = seatid;
    }
}


