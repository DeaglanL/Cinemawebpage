package business;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.inject.Default;

@Default
@ApplicationScoped
public class bookingDBImpl implements BookingService{
    public String getCinemaInfo(String cinema) {
        return null;
    }

    public String getScreenings(String movie) {
        return null;
    }
}
