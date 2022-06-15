package Testrunner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = {"features"},
		glue= {"steps"},
		plugin = {"pretty", "html:Report2"},
		dryRun = true
		)
public class testrunners {

}
