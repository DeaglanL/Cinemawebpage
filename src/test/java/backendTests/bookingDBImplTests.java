package backendTests;

import business.bookingDBImpl;
import org.junit.*;

import static junit.framework.TestCase.assertEquals;

public class bookingDBImplTests {

    private bookingDBImpl bookService;

    @BeforeClass
    public static void beforeClass() {
    }

    @Before
    public void beforeTest() {
        bookService = new bookingDBImpl();

    }

    @Test
    public void getCinemaInfoTest(){
        assertEquals("should return json cinema inf0", "{\n" +
                "  \"cinemaid\" : \"Some text\",\n" +
                "  \"address\" : \"Some text\",\n" +
                "  \"openingTime\" : \"Some text\",\n" +
                "  \"closingTime\" : \"Some text\",\n" +
                "  \"name\" : \"Some text\",\n" +
                "  \"numberOfScreens\" : \"Some text\",\n" +
                "  \"cinemascol\" : \"Some text\",\n" +
                "  \"screens_screensid\" : \"Some text\"\n" +
                "} \n" , bookService.getCinemaInfo("{\"name\" : \"Some text\"}"));
    }

    @Test
    public void getScreeningsTest(){
       assertEquals("should return screenings objects", "{\n" +
               "\t\"screening\"  : \"Some Text\",\n" +
               "\t\"screeningid\" : \"Some Text\",\n" +
               "\t\"cinema\" : \"Some Text\",\n" +
               "\t\"screenid\" : \"Some Text\",\n" +
               "\t\"time\" : \"Some Text\",\n" +
               "\t\"movieid\" : \"Some Text\",\n" +
               "\t\"date\" : \"Some Text\",\n" +
               "\t\"movies_movieid\" : \"Some Text\",\n" +
               "\t\"movies_customers_customersid\" : \"Some Text\",\n" +
               "\t\"screens_screensid\" : \"Some Text\"\n" +
               "}", bookService.getScreenings("{\"cinemaName\" : \"Some text \", \"moviename\" : \"Some text\"}"));
    }


    @After
    public void afterTest() {
    }

    @AfterClass
    public static void afterClass() {

    }

}

