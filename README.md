# Voyager Vault

This is a program that lets you keep countries you've visited to in a list, and you can keep countries you want to visit in the future in a Wish List. We're using the REST Countries API to retrieve country information such as population and capital city.

## Table of Contents

- [Installation](#installation)
- [Contributors](#who-contributed)

## Installation

Run `npm install`.

Run `npm start` on both from the backend and frontend directories.

Step 1: Register and log in to your account.

Step 2: Search for a country you want to visit someday then add it to your Wish List. If you've already visited the country, add it to Destinations!

Step 3: You can view the countries you added to your Wish List in the Wish List tab, and you can view the countries
you've already visited in the Destinations tab.

Step 4: Having trouble picking your next vacation? Let us pick for you ... in the search tab we have a random
country generator!

## Who Contributed

[Charles](https://github.com/cwdrian): I worked on the REST Countries API call and made a country card component, created the login and register logic, some backend stuff like routes, and database, and schemas. I focused mostly on backend logic making sure adding countries to your wishlist and destinations got put in the right places. A lot of my time on this was trouble shooting user context, and JWT errors.

[Melanie](https://github.com/mktatum): Throughout the course of this project, my main focus was UI/UX and frontend development. I created the initial homepage layout and navigation bar using a bootstrap nav template with collapse functionality. I also created the base layout for secondary pages and was able to complete some initial troubleshooting errors and worked with Taylor for additional styling options.

[Tim](https://github.com/timryan10): For the final project my attention was more on the backend. I set up some of the skeletal structure of the backend to be tested and improved upon as the project continued such as the controllers and the routes to the database along with Charles. Most of my time was directed towards the sign up and login features of the application.

[Taylor](https://github.com/tsmit275): I contributed to the homepage banner by adding images and integrating a Bootstrap carousel component with indicators for smooth navigation. This feature aims to engage visitors visually and encourage further exploration. Additionally, I developed the random destination generator on the countries page, creating the generateRandomCountry() function and using a useEffect hook to pull destinations from the country cards API. This feature encourages users to discover new destinations to visit for their next vacation. I also worked closely with Melanie on the UI/UX design of our website.
