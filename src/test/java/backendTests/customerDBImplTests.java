package backendTests;

import com.qa.springboot.business.customerDBImpl;
import org.junit.*;

import static junit.framework.TestCase.assertEquals;
import static junit.framework.TestCase.fail;


public class customerDBImplTests {


    private customerDBImpl cDB = new customerDBImpl();

    @BeforeClass
    public static void beforeClass() {
    }

    @Before
    public void beforeTest() {
        //cDB = new customerDBImpl();

    }

    @Test
    public void addCustomerTest(){
        //assertEquals(cDB.addCustomer("{\"name\":\"David\",\"address\":\"The heart\",\"dob\":\"30/04/1995\",\"email\":\"David.Jaing@qa.com\",\"username\": \"Django \",\"password\": \" Django  \" , \"phoneno\"  :  \" 07321321 \"}"), "success");

    }

    @Test
    public void checkCustomerTest(){
       assertEquals(cDB.checkCustomer("{\"username\": \"alexxx\",\"password\":\"Password1$\"}"), "{\"message\": \"success\"}");
    }

    @After
    public void afterTest() {
    }

    @AfterClass
    public static void afterClass() {

    }

}
