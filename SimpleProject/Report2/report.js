$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:features/Home.feature");
formatter.feature({
  "name": "Ebay homr scenario",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Advanced search link",
  "description": "//Given,when, Add Then",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I am on ebay Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.Ebayhome.i_am_on_ebay_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Advanced Link",
  "keyword": "When "
});
formatter.match({
  "location": "steps.Ebayhome.i_click_on_Advanced_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to Advanced search page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.Ebayhome.i_navigate_to_Advanced_search_page()"
});
formatter.result({
  "status": "passed"
});
});