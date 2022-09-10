[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=8375186&assignment_repo_type=AssignmentRepo)

# MOVIE APP 

## ABOUT PROJECT
In this project, a movie app is redesigned using React Native. The navigation of the pages is provided with "React Navigation". The project makes use of the "get now playing" movie list data on The Movie Database API. Axios package is used to post, reset user to fake API and get to all user from it. Existing user information is saved in the phone's memory using async storage. Redux saves the data that is used across all app pages, such as the user and theme. When the app is restarted, the user is not presented with the login page thanks to Async storage. The time info is provided with Moment package. MaterialCommunityIcons was used to create the bottom tab icons. The data for the genre-id match is available in .json format in the /src/data folder.

![ScreenShot](movieApp.gif)

## INSTALLATION

Clone the project and run the commands below respectively in the terminal.
```
git clone https://github.com/patika-218-akbank-reactnative-bootcamp/assignment-4-Atakanz.git
```

```
cd BirFilm
```
```
npx react-native start
```
```
npx react-native run-android
```
## TECHNICALITIES

 A nested form of stack and bottom navigation is made at the beginning of the project. The user is first presented with the sign-in page and login form before moving on to the sign-up button. With axios, user information is posted to a fake API. To compare all information values, all users are fetched from the API and compared on the sign-in page. The user is saved to Redux - user slice management after being found, and the page is then navigated to the movie list screen. Two filters on the movie list screen operate in accordance with API-derived props. Here, flat lists display the local states that have been filtered data from ongoing Redux users. A search input that filters the movies by title name can be found on the second bottom tab page. The stack screen and profile settings are contained in the third bottom tab. Theme settings is also provided with Redux management.  The fake API's exist user user item is selected and re-edited by the put method on the edit profile page. Also, the memory and user info in Redux is refreshed. Movie detail page is navigated by the first and second bottom tab movie lists. The title, release year, genres, and brief story script are all listed on the page. 







