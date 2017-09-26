
import backendTests.bookingDBImplTests;
import backendTests.customerDBImplTests;
import org.junit.runner.RunWith;
import org.junit.runners.Suite;

@RunWith(Suite.class)
@Suite.SuiteClasses({
        customerDBImplTests.class,
        bookingDBImplTests.class
})

public class testRunner {
}
