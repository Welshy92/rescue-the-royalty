# **Rescue The Royalty - Testing**
 
![Image from amiresponsive](/assets/testing-images/amiresponsive.png)
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
![index.html validation](/assets/testing-images/index-html-valid.png)

The CSS was also validated by [W3C Validator](https://jigsaw.w3.org/css-validator/)
![CSS validation](/assets/testing-images/css-validation.png)
 
Lighthouse tool powered by [PageSpeed Insights](https://web.dev/measure/) was used to test the performance, accessibility, best practices and SEO of the website.
![index](/assets/testing-images/index-lighthouse.png)

***
## **Manual Testing**
 
A full spelling and grammar check of the content was complete by copying the code into Google Docs.
 
### **Testing User Story**
 
#### **First time visitors**
 
#### **Returning visitors**
 
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
 
Footer testing. A check to see that the positioning was correct on all screen sizes and to check to see that the social links were working and opening in a new tab.

 
## **Bugs**
 
### **Solved Bugs**

* Positioning of the game area is scewed on small screen sizes. Seems to be caused to the enemy info table not being able to get any smaller at 400px. Redesign the element to show each enemy seperately. 

* Armageddon's stats were only being randomised the first time you face them. Fixed by adding the random roll into the armageddon function.

* Slash button was calling all attack functions. Other attacks were calling none. Corrected event listeners. (Thank you Mr.Bim!)

* Victory condition not being detected when enemy hp reaches 0 due to missing ".innerHTML" on the "getElementByID".

* Player could get assinged the same element for resistance and weakness. Added a while loop to reroll resistance when they are equal.

### **Known Bugs**

Enemy and Player HP bars do not show. Div size is showing as 0x0 on page despite dev tools stating differently.