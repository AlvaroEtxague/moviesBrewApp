# moviesBrewApp
A web project using HTML, CSS, JS &amp; https://www.themoviedb.org/ API

## Strategy

### About:
- Movies Brew is a portal where users can search for films and get a short overview and a rating on movies.

### Wireframes
- MAIN PAGES:

    <img src="wireframe\mainPages.JPG" style="height: 500px; width:1000px;"/>

- NAVBAR:

    <img src="wireframe\navbar.JPG" style="height: 500px; width:1000px;"/>

- MOVIE PAGE:

    <img src="wireframe\moviePage.JPG" style="height: 500px; width:1000px;"/>

- MOVIE PAGE - SIMILAR MOVIES:

    <img src="wireframe\similarMovies.JPG" style="height: 500px; width:1000px;"/>

- NO RESULTS:

    <img src="wireframe\noResults.JPG" style="height: 500px; width:1000px;"/>

## Architecture details & Functional Specification:

### Navbar:
- A Navbar with a burger style menu, a logo and a search bar.
- Clicking the burger opens a drawer menu that will take 50% of the screen and contains links to Home, Top Rated, Now Playing & Upcoming movies.
- Clicking the logo brings the user to the home page.
- The user can enter any input in the search bar and results will be displayed after clicking enter
- Hovering over the navbar icons changes the color to #ef5777 and the nav links to white and bold.

- Desktop:

    <img src="MoviesBrewImages\Desktop_HomePage_002Navbar.JPG" style="height: 500px; width:900px;"/>

- Mobile:

    <img src="MoviesBrewImages\MobilePhone_HomePage_002Navbar.JPG" style="height: 500px; width:300px;"/>


### Home, Top Rated, Now Playing & Upcoming Pages:
These pages show movies based on chosen API filters
- Main Pages UI(Home, Top Rated, Now Playing & Upcoming movies.):
- Desktop:

    <img src="MoviesBrewImages\Desktop_HomePage_001.JPG" style="height: 500px; width:900px;"/>

- Mobile:

    <img src="MoviesBrewImages\MobilePhone_HomePage_001.JPG" style="height: 500px; width:300px;"/>

- Hovering over the movie image will trigger the overview to display and a cursor pointer is activated.
- Desktop:

    <img src="MoviesBrewImages\Desktop_005MoviesOverview.JPG" style="height: 500px; width:900px;"/>

- Mobile:

    <img src="MoviesBrewImages\MobilePhone_005MoviesOverview.JPG" style="height: 500px; width:300px;"/>
- Movies will display a rating and the value will be categorized by color according to the rating

- Clicking the image or the overview will bring the user to the Movie Page.

### Searching for a movie:
- When the user enters a keyword and presses enter then a list of movies with the searched term will be displayed.
- Desktop:

    <img src="MoviesBrewImages\Desktop_003MovieSearch.JPG" style="height: 500px; width:900px;"/>

- Mobile:

    <img src="MoviesBrewImages\MobilePhone_003MovieSearch.JPG" style="height: 500px; width:300px;"/>

- If there are no results then the page will display: "No Movies Found. Try a different movie!"
- Desktop:

    <img src="MoviesBrewImages\Desktop_004MovieSearchNoResults.JPG" style="height: 500px; width:900px;"/>

- Mobile:

    <img src="MoviesBrewImages\MobilePhone_004MovieSearchNoResults.JPG" style="height: 500px; width:300px;"/>


### Movies Results:
- When the API doesn't return an image then a default image will be displayed (error.jpg).

- Desktop:

    <img src="MoviesBrewImages\Desktop_006DefaultImageWhenNoImgFound.JPG" style="height: 500px; width:900px;"/>

- Mobile:

    <img src="MoviesBrewImages\MobilePhone_006DefaultImageWhenNoImgFound.JPG" style="height: 500px; width:300px;"/>

- The overview and rating will be displayed as usual and all other functionality should work as expected.

### Individual movie page:
- This page will display the movie Title, rating and 3 icons/buttons. Also the overview is displayed and a list of recommendation with similar movies.
- If the movie doesn't have any similar movies recommendations then the section is hidden.

- Desktop:

    <img src="MoviesBrewImages\Desktop_007SingleMoviePage.JPG" style="height: 500px; width:900px;"/>
    <img src="MoviesBrewImages\Desktop_008SingleMoviePageSimilarMovies.JPG" style="height: 500px; width:900px;"/>

- Mobile:

    <img src="MoviesBrewImages\MobilePhone_007SingleMoviePage.JPG" style="height: 500px; width:300px;"/>

### Main Pages/HTML:
Pages are organized as follows:
- Home: index.html
- Top Rated: topRated.html
- Now Playing: nowPlaying.html
- Upcoming movies: upcoming.html
- Individual movie: moviePage.html

The core html elements are injected through different functions via the .js files.

### Styles/CSS:
Styles are organized under the "css/" directory and divided into 3 files:
- nav.css: contains all styles for navbar
- style.css: contains all styles for main pages (Home, Top Rated, Now Playing & Upcoming movies.)
- moviePage.css: contains all styles for individual movie page

### JS
Each page has it's own .js file containing functionality exclusive to that page.
- Home: js/script.js
- Top Rated: js/topRated.js
- Now Playing: js/nowPlaying.js
- Upcoming movies: js/upcoming.js
- Individual movie: js/moviePage.js
- Navbar: js/nav.js

## Scope
### User Stories:

- As a user I want to:
  1. be able to navigate through the website content with fluidity
  2. be able to search for a movie or movies
  3. be able to read a movie's summary
  4. be able to see a movie's rating
  5. be able to find similar movies

### Design Choices:

- I wanted to present a neat, minimalist approach in this page.

- The website should be fully responsive and follow a "mobile first" approach.

- The colors palette include the following colors:
    - primary color: #485460;
	- secondary color: #1e272e;
	- light color: #d2dae2;
    - red color for errors: #c0392b 
    - green color for links and happy interactions: 0be881 

- Fonts used: Google Fonts - Raleway family


## Testing

- All existing features have been tested on the following: Android, iPhone, iPad, iPad Prod and PC.
- The following Test Plan was executed and all scenarios passed:

#### Pages and Links
Scenario | Test Result | Comments
:-----|:-----|:-----
Verify that the User can navigate to the Home Page.|Passed|N/A
Verify that the User can navigate to the Top Rated Page.|Passed|N/A
Verify that the User can navigate to the Now Playing Page.|Passed|N/A
Verify that the User can navigate to the Upcoming Page.|Passed|N/A
Verify that the User can navigate to the movie Page.|Passed|N/A
Verify that when clicking the Movies Brew logo the user will be redirected to the Home Page.|Passed|N/A

#### Search bar
Scenario | Test Result | Comments
:-----|:-----|:-----
Using the search bar, enter a valid keyword, ie: batman and verify that the page will display search results related to our search.|Passed|N/A
Using the search bar, enter a invalid keyword that will trigger no results, ie: asd!@#!@#252 and verify that the page will display an error message.|Passed|N/A

#### Navbar
Scenario | Test Result | Comments
:-----|:-----|:-----
Verify that hovering over the navbar links will trigger a change in color (green to yellow) and small size increase in the icons.|Passed|N/A
Verify that hovering over the navbar links will trigger a change in the font color (grey to white) and the font weight will be bolder.|Passed|N/A
Verify that clicking the cross icon will close the nav drawer|Passed|N/A

#### Images
Scenario | Test Result | Comments
:-----|:-----|:-----
Verify that if the API doesn't return an image then the default image is displayed instead.|Passed|N/A

#### Movies results
Scenario | Test Result | Comments
:-----|:-----|:-----
Verify that after selecting a movie the user will be redirected to the movie page and this page will display the title, rating, like/bookmark/favorite icons and an overview.|Passed|N/A
Verify that the movie page will also display a list of similar movies.|Passed|N/A
Verify that where there are no similar movies then this section will be hidden to the user.|Passed|N/A
In the main pages, Home, Top Rated, Now Playing & Upcoming movies, verify that when hovering over the movie image will trigger the overview to be displayed over the title and rating.|Passed|N/A

## Deployment

### Deployment on Github Pages

- On Github, navigate to your branch settings
- Scroll down to GithubPages
- Select a source (the branch you want to publish)
- Click the Save button
- The page will be published after a few minutes and the page url will be displayed:
- Github pages: https://zippote.github.io/moviesBrewApp/

### Local Deployment using Git

Steps on Github:

- Go to https://github.com/zippote/moviesBrewApp
- Click Code
- Select HTTPS and copy the following url https://github.com/zippote/moviesBrewApp.git

Steps on your local:

- Create a destination folder in your local >> ie: myFolderExample in the C drive
- Open the cmd and move to that folder >> cd C:\myFolderExample
- Type the following command: git clone https://github.com/zippote/moviesBrewApp.git
- Hit enter and wait until the process is completed
- Open the project using your favourite IDE

## Credits
- Media
  - Images were taken from Unplash.com and are royalty free images.
- TMDB API
  - https://www.themoviedb.org/
