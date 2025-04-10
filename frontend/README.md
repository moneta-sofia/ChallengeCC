Frontend
========

To better assess a candidates development skills, we would like to provide the following challenge. This is intendend to be developed within an hour of time.

Prerequisites
-------------

* [Git](http://git-scm.com/)
* [npm](https://www.npmjs.org/)
* [reactjs](https://reactjs.org/)
* [axios](https://axios-http.com/es/docs/intro)
* [jest](https://jestjs.io/)

* You can use any additional libraries you want.


Project description
-------------------

We want to develop a small web app that allows users to order pizza.

This client will interface with the API built in the backend portion of the challenge.

First of all should display the list of pizzas with ingredients and prices. Data will be loaded from `/api/pizzas`.

When the user chooses something from the list the order summary will update dynamically.

There will be a button to confirm the order. An Axios call will be performed to `/api/order` and the result will be displayed as a message like this: "Your order is cofirmed. Order summary: ...".
