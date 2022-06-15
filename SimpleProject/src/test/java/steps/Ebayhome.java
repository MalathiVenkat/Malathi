package steps;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Ebayhome {
	@Given("I am on ebay Homepage")
	public void i_am_on_ebay_Homepage() {
		System.out.println("I am on ebay Homepage");
	}

	@When("I click on Advanced Link")
	public void i_click_on_Advanced_Link() {
		System.out.println("I click on Advanced Link");
	}

	@Then("I navigate to Advanced search page")
	public void i_navigate_to_Advanced_search_page() {
		System.out.println("I navigate to Advanced search page");
	}
}
