# moviesBrewApp
A project using HTML, CSS, JS &amp; https://www.themoviedb.org/ API

Movies Brew is a portal where users can search for films and get a short overview and a rating on movies.

#Architecture details:

##Navbar:
A Navbar with a burger style menu, a logo and a search bar.
Clicking the burger opens a drawer menu that will take 50% of the screen and contains links to Home, Top Rated, Now Playing & Upcoming movies.
Clicking the logo brings the user to the home page.
The user can enter any input in the search bar and results will be displayed after clicking enter
Hovering over the navbar icons changes the color to #ef5777 and the nav links to white and bold.

##Home, Top Rated, Now Playing & Upcoming Pages:
These pages show movies based on chosen API filters
Hovering over the movie image will trigger the overview to display and a cursor pointer is activated.
Movies will display a rating and the value will be categorized by color according to the rating
Clicking the image or the overview will bring the user to the Movie Page.

##Searching for a movie:
When the user enters a keyword and presses enter then a list of movies with the searched term will be displayed.
If there are no results then the page will display: "No Movies Found. Try a different movie!"

##Movies Results:
When the API doesnt return an image then a default image will be displayed (error.jpg).
The overview and rating will be displayed as usual and all other functionality should work as expected.

##Individual movie page:
This page will display the movie Title, rating and 3 icons/buttons. Also the overview is displayed and a list of recommendation with similar movies.
If the movie doesn't have any similar movies recommendations then the section is hidden.





