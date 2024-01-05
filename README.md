![](https://github.com/JesseRoss001/personalportfolio.git)
# Millionaire Boxing
We are excited to present this proposal for the development of your online millionaire quiz application. Our team at Console-Loggers is dedicated to creating a visually striking, user-friendly, and fun platform that will effectively give users a fun and immersive way to test not only their knowledge but also their cool under pressure. 
 
Millionaire Boxing is a web game which allows users to play through a "Who Wants To Be A Millionaire" style trivia challenge. A large question bank allows for users from wide amounts of knowledge backgrounds to have a fair chance. As this is a quiz game a lot of effort was put into prompt engineering the AI images used for this project, though a lot have yet to be put in.


![スクリーンショット 2023-10-27 121226](https://github.com/richey-ci/console-loggers/assets/144109245/e399628a-2734-406f-b56d-408426ec8971)
![スクリーンショット 2023-10-27 121352](https://github.com/richey-ci/console-loggers/assets/144109245/24c7f24f-d7e3-40f1-8f3a-a4a90bf0c23f)
![スクリーンショット 2023-10-27 121326](https://github.com/richey-ci/console-loggers/assets/144109245/fa536a41-b413-48be-bd95-554854813b40)
![スクリーンショット 2023-10-27 121311](https://github.com/richey-ci/console-loggers/assets/144109245/69840b46-6b9e-4ec3-8b4b-64a6db5edbad)
![スクリーンショット 2023-10-27 121436](https://github.com/richey-ci/console-loggers/assets/144109245/4555b128-dc83-44c1-be02-ec21a3e7f0ef)


## Features

- __The Homepage__

    - The home page will allow users to pick a difficulty for the questions selected from the question bank. Due to time constraints this hasn't been implemented just yet but a lot of the backend for this feature is present.

- __GamePage__

    - The game page is where a majority of the action takes place from a user's point of view.

    - The question and answer sections dynamically update on the page without reloads necessary allowing for a seemless experience. As soon as one answer is input correctly the next one appears with no time to waste.

    - The Cash Out button allows for users to quit where they are and retain all their earnings if they aren't too sure of the current question's answer.

    - Lifelines were planned to be implemented but didn't quite make the cut. So they do exist within the code but they weren't quite finished off for launch.

    - A countdown is on screen so that players can't dawdle too long or go and search up an answer. The countdown timer resets each question.

- __Rules Page__

    - The rules page is quite short and to the point. It displays the rules of the game to the player so that they can play to the best of their ability.

## Unimplemented Features

most of the unimplemented features are laid out in the above section, however here are a couple more which didn't make the cut due to time restraints.

- An entire storyline with accompanying images was imagines up for this project however this proved to be too ambitious when coupled with the technical hurdles the team came up against.

- Coupled with the storyline the studio image and a presenter were supposed to change as players progressed.


## Testing

The testing on this project was mostly just to see whether the pages connected and whether the JS on the game page ran as expected, due to this the vast majority of testing was done throughout the course of initial development of the project.

### Validator Testing

!!! These links need to be updates !!!

- HTML
    - [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-running-2.0%2Findex.html)
    - Most of all the errors were addressed though some remain due to time constraints.
 
    - 
- CSS
    - [(Jigsaw) validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-running-2.0%2Findex.html](https://jigsaw.w3.org/css-validator/)
    - CSS written by team didn't come up with any issues though bootstrap specific class.

- JavaScript
    - [JavaScript Validator](https://www.jslint.com)
    - Cleared all warnings other "line length 80+" & issues around the comments left for readability

!!! These links need to be updates !!!

### Unfixed Bugs

- Occasionaly the returned value at the end of the game appears as undefined (Wasn't reproduceable).

- Footer on game page was having issues emulating style on the other two pages.

- Certain elements on the index and game page wouldn't quite centre correctly.

- Weird nesting issue for anchor tag at the bottom of the page is keeping the footer working.

- Minor styling differences between pages which are known and need to be addressed.

## Deployment

The deployment for Millionaire Boxing was somewhat straight forward and had little of note as we went through using Github pages as this was a static site which didn't require the use of any back-end architecture.

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://richey-ci.github.io/console-loggers/

## Credits


### Content
- The icons throughout the page were taken from [Font Awesome](https://fontawesome.com)
- Instructions and code for using Bootstrap was used and editted from that which can be found on the official [BootStrap Site](https://getbootstrap.com)
- Various pieces of code were used from [W3Schools](https://www.w3schools.com)
- sounds were taken from [Pixabay](https://pixabay.com) and [ZapSplat](https://www.zapsplat.com)
- A tutorial or was referenced by team members on [Youtube](https://www.youtube.com)
- ChatGPT was used to get the base of the audio code written [ChatGPT](https://chat.openai.com)

### Media

- AI art used throughout the application was prompt engineered via [Gencraft](https://richey-ci.github.io/console-loggers/)

## Contributors - Team Console-Loggers

- [Dylan Shickell](https://github.com/Sepctrum)
- [Jesse Ross](https://github.com/JesseRoss001)
- [Charlotte Stone](https://github.com/Terafora)

## Further Documentation

- [Overview Docs]([https://www.jslint.com](https://docs.google.com/document/d/1UAOYXEZj1opXiwY1ws15FwaMVZG-CaRYDki_wZPmwG4/edit)https://docs.google.com/document/d/1UAOYXEZj1opXiwY1ws15FwaMVZG-CaRYDki_wZPmwG4/edit)
