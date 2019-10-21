# POST & Altering Database

## Date: 10/18/19 W8 D5 D37

### Summary

We continued working on our Apple CEO's app. We used a form element in the view component that upon submission, sent a POST request to the /ceos/add endpoint. When hitting that endpoint, that creates an instance of an apple executive and inserts the data from the form into the database. The model makes use of an asynchronous instance method to that uses sanitized inputs prior to inserting into the table that stores the executives' data.

<!-- The `apple_ceos` folder is in-class code-along work. The exercise assigned today was to refactor our previous front-end project using the async/await syntax.
LINK TO WeatherFit -->

The `express_lvl_up` contains the work for the second assignment which was to create a postgres database with two tables and create a node/express app that displays a self-assessment for the topics HTML, CSS, JS, PostgreSQL, Node, and Express. It also keeps track of your rankings: Ranking: Awesome 5, Great 4, Good 3, Okay 2, Poor 1, Unranked 0.