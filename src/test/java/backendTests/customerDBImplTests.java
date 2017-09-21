package backendTests;

import business.customerDBImpl;
import org.junit.*;

import javax.inject.Inject;

import static junit.framework.TestCase.assertEquals;
import static junit.framework.TestCase.fail;


public class customerDBImplTests {

    @Inject
    private customerDBImpl cDB;

    @BeforeClass
    public static void beforeClass() {
    }

    @Before
    public void beforeTest() {
        //cDB = new customerDBImpl();

    }

    @Test
    public void addCustomerTest(){
        assertEquals(cDB.addCustomer("{\"name\":\"David\",\"address\":\"The heart\",\"dob\":\"30/04/1995\",\"email\":\"David.Jaing@qa.com\",\"username\": \"Django \",\"password\": \" Django  \" , \"phoneno\"  :  \" 07321321 \"}"), "success");

    }

    @Test
    public void checkCustomerTest(){
       //assertEquals(cDB.checkCustomer("{\"username\":\"Django\" , \"password\" : \"Django\"}"), "success");
    }

    @After
    public void afterTest() {
    }

    @AfterClass
    public static void afterClass() {

    }

}
