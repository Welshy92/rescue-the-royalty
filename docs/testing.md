# **Rescue The Royalty - Testing**
 
![Image from amiresponsive](/assets/images/amiresponsive.png)

Image from [Am I Responsive?](https://ui.dev/amiresponsive)
 
[Rescue The Royalty live on GitHub Pages](https://welshy92.github.io/rescue-the-royalty/)
 
## **Contents**

* [Back to README](../README.md)
* [Automated Testing](#automated-testing)
    * W3C Validator (HTML)
    * W3C Validator (CSS)
    * Lighthouse Tool
* [Manual Testing](#manual-testing)
    * Testing User Story
    * Full Testing
* [Bugs](#bugs)
    * Solved Bugs
    * Known Bugs
 
Testing was a regular occurrence during the development of this project. My mentor [Jubril Akolade](https://www.linkedin.com/in/jubrillionaire/) provided some invaluable feedback during my sessions with him. 
 
I used the OperaGX tools frequently to try and see problems and mess around with tags and viewing the console before actually changing the code. It was especially useful when implementing my 'Flex' displays, adjusting padding or viewing the console to make sure functions are being called.
 
## **Automated Testing**
The HTML of the site was validated by [W3C Validator](https://validator.w3.org)

![index.html validation](/assets/images/index-html-valid.png)

The CSS was also validated by [W3C Validator](https://jigsaw.w3.org/css-validator/)

![CSS validation](/assets/images/css-validation.png)
 
Lighthouse tool powered by [PageSpeed Insights](https://web.dev/measure/) was used to test the performance, accessibility, best practices and SEO of the website.

![index](/assets/images/index-lighthouse.png)

The Javascript was verified using [JSHint](https://jshint.com)

![JSHint validation](/assets/images/jshint-test.png)

The validator claims that 2 functions are unused however they are both used when opening and closing my information windows that displays during gameplay.

***
## **Manual Testing**
 
A full spelling and grammar check of the content was complete by copying the code into Google Docs.
 
### **Full Testing**
 
Full testing was performed on the following devices:
 
* My self-built PC. Windows 10 64-bit Home edition. Tested on a 24" 1080 horizontal monitor and 27" vertical 4K monitor.
    * OperaGX
    * Google Chrome
    * Microsoft Edge
    * Mozilla Firefox
 
* My Lenovo Ideapad 3i 14" laptop. Windows 11 64-bit Home edition.
    * OperaGX
    * Google Chrome
 
* My Sony Xperia 1 II. Android 12.
    * Google Chrome
    * OperaGX

The following was tested;

* Initial DOM loaded and page displays and scales base on screen size.

* Form validation confirmed working and correctly displays hero name on the fight screen.

* Instructions disappear as intended when the fights begin to clear clutter from the screen.

* Enemy randomly selected.

* Random stats for the player and, if selected, Armageddon.

* All player attacks buttons work and deal correct damage to the enemy based on their resistance/weakness/nullify and the combat message displays correctly.

* Player correctly takes damage based on their reandomly assigned resistance/weakness and the combat message displays correctly.

* Player heal does not allow the player to go over 150HP and a seperate message shows for it.

* Score correctly increments based on player victory or defeat.

* Player defeat and victory screens both displaying and "fight on" button working correctly.

* New fight button correctly starts a brand new fight.

* Info button correctly displayed floating window with play and enemy stats showing correctly the for assosiated enemy + random rolls. The close button also works correctly.

* Reset Score button correctly sets the scores back to 0 without interrupting gameplay.

* Footer testing. A check to see that the positioning was correct on all screen sizes and to check to see that the social links were working and opening in a new tab.

 
## **Bugs**
 
### **Solved Bugs**

* Positioning of the game area is scewed on small screen sizes. Seems to be caused to the enemy info table not being able to get any smaller at 400px. Redesign the element to show each enemy seperately. 

* Armageddon's stats were only being randomised the first time you face them. Fixed by adding the random roll into the armageddon function.

* Slash button was calling all attack functions. Other attacks were calling none. Corrected event listeners. (Thank you Mr.Bim!)

* Victory condition not being detected when enemy hp reaches 0 due to missing ".innerHTML" on the "getElementByID".

* Player could get assinged the same element for resistance and weakness. Added a while loop to reroll resistance when they are equal.

* Some enemy attacks displayed no text due to using innerHTML instead of innerText. Now corrected.

### **Known Bugs**

