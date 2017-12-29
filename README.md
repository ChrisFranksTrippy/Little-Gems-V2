# Little Gems Doggyday Care

This Little Gems website was create for the purpose of replacing the existing the existing website. The aims of this site are to promote the business, the aims of this version is create a website that is responsive to mobile and desktop devices, as well as including a gallery page.

## Background

The website is designed to promote the business of the Little Gems Doggy Daycare by displaying basic information about the services prodived, pricing and opening hours. 

## Structure

The site is made up of 5 pages and 2 direct links to social media pages on Facebook and Youtube promoting the business.

### Pages

* Home
* About 
* Daycare 
* Gallery 
* Contact

### Direct Links

* Facebook
* Youtube

### Site Map

The website it's self does not display a dedicated site map because all links to the pages within the site are displayed in the navigation menu.

* [Site Map](https://github.com/ChrisFranksTrippy/Little-Gems-V2/tree/master/readme-resources/sitemap.jpg)

## Responsive Design

This is a reqiured aspect of the site, not only to readable on devices with a different sized screens, but to achieve a high rating within google search results. The break points were chosen at points where the page no longer looked good on the larger sized screens as apposed to set break points dictated by common screen sizes.

## Wireframes

### Navigation Menu
* [Mobile](https://github.com/ChrisFranksTrippy/Little-Gems-V2/tree/master/readme-resources/nav-mobile-wireframe.jpg)
* [Desktop](https://github.com/ChrisFranksTrippy/Little-Gems-V2/tree/master/readme-resources/nav-desktop-wireframe.jpg)

### Home
* [Mobile](https://github.com/ChrisFranksTrippy/Little-Gems-V2/tree/master/readme-resources/index-mobile-wireframe.jpg)
* [Desktop](https://github.com/ChrisFranksTrippy/Little-Gems-V2/tree/master/readme-resources/index-desktop-wireframe.jpg)

### About
* [Mobile](https://github.com/ChrisFranksTrippy/Little-Gems-V2/tree/master/readme-resources/about-mobile-wireframe.jpg)
* [Desktop](https://github.com/ChrisFranksTrippy/Little-Gems-V2/tree/master/readme-resources/about-desktop-wireframe.jpg)

### Daycare
* [Mobile](https://github.com/ChrisFranksTrippy/Little-Gems-V2/tree/master/readme-resources/daycare-mobile-wireframe.jpg)
* [Desktop](https://github.com/ChrisFranksTrippy/Little-Gems-V2/tree/master/readme-resources/daycare-desktop-wireframe.jpg)

### Gallery
* [Mobile](https://github.com/ChrisFranksTrippy/Little-Gems-V2/tree/master/readme-resources/gallery-mobile-wireframe.jpg)
* [Desktop](https://github.com/ChrisFranksTrippy/Little-Gems-V2/tree/master/readme-resources/gallery-desktop-wireframe.jpg)

### Contact
* [Mobile](https://github.com/ChrisFranksTrippy/Little-Gems-V2/tree/master/readme-resources/contact-mobile-wireframe.jpg)
* [Desktop 1](https://github.com/ChrisFranksTrippy/Little-Gems-V2/tree/master/readme-resources/contact-desktop-wireframe.jpg)
* [Desktop 2](https://github.com/ChrisFranksTrippy/Little-Gems-V2/tree/master/readme-resources/contact-desktop-wireframe2.jpg)

## Information Architecture and Accessibility

The information on the site has been organised into sections that fit onto each page. Within the pages them selfs information is seperated into smaller sections of text and seperatered by full width images. The height of the images is also set to show a small amount of the next section of text to encurage the user to scroll down the rest of the page. Important sections of text are emboldened to stand out, such as opening hours and location. 
All content can be accessed from every page using the navigation menu. 
The gallery page contains a selection of images that, on mobile devices, contain arrows to indicate the user can scroll. When the use reachers the ends of the scrollable section, one of the arrows will fade away indicating the end of the section, this functionality is hiden on desktop devices as a scroll bar clearly displays all of these functions.
All image tags within the site contain alt tags.

## PARC

### Proximity
The gallery images are all next to each other, no margins or padding to ensure each picture is can be easily reached. This also adds an element of continuity to the overall styling. On the other pages, all content is evenly spaced and consistenly separated by an image. Minimal action is required by the user to locate the next content. The burger and back to top buttons are always available when necessary, always in proximity, making use easy.

### Alignment
All content on mobile pages is the same width, buttons are consistently aligned in place with each other, even when scrolling. Text is evenly spaced. Gallery, all images are the same size and in line Allowing for a smooth experience and easy access. About page is all centrally aligned, even map is same size as elements on other pages (consistent alignment)

### Repetition
Constant styling and colour scheme is used. All images and text are the same size throughout. Same animations used on all images in the galery and when enlarging

### Contrast
Bright and dark greens are used to distinguish content and add breaks in between white content and images. Current page is highlighted, contrasting against not active pages, clearly showing user where they are.

## Third Party Code

All code is my own, only influenced by third parties. None of their actual code is used.

## Code Development & Issues Solved

An issue occured while developing the "img-enlargement" script. When testing the script on google chrome's mobile simulator, the double click event listener functioned as expecting, enlarging the div container to fill the user's window and shrinked back to the orginal size upon doubling clicking again. However all users testing the site on mobile devices were unable to enlarge the image via double tapping the images. They could only use the icon in the bottom right of the images to enlarge and shrink the images as the event listener for this function is a regular "click". To over come this problem a basic idea found on Stack Overflow [1] suggested to register the time when ever the event listener was triggered and store this value. On the second tab of the screen, if the time of this tab is within 500 milliseconds of the previous, then think of these tabs as a single double tab. 
This idea was built upon within the script using a single click event listener, calling a function call "enlargeImgRequest" where it listens to what element was clicked. If the element is the enlarge icon it will enlarge the image within the single click. If the element was the "parallax-container" it will check what time the last click was registered, if this is within 400 milliseconds then the image will also enlarge.

While testing the site on lower end mobile devices, the transition of navigation menu sliding in from the side was not a smooth motion. After researching methods to improve the FPS (Frames Per Second) of animating elements, a post from "José Rosário" [2] showed a method achieving "smooth as butter" 60 FPS. After reading throught the post, I changed some CSS styles of nav container in the following commit.

* [Commit 56e6d13cb96c701cd6f02a0b779b39dade12eea2](https://github.com/ChrisFranksTrippy/Little-Gems-V2/commit/56e6d13cb96c701cd6f02a0b779b39dade12eea2)

After this commit, tests were done using google development tools, and the frame rate of the transition after these changes shows a constant rate during the transition of the nav container.

## User Testing Images

* [Testing Mobile Nav](https://github.com/ChrisFranksTrippy/Little-Gems-V2/tree/master/readme-resources/user-test-nav.jpg)
* [Testing Dog.ceo API](https://github.com/ChrisFranksTrippy/Little-Gems-V2/tree/master/readme-resources/user-test-dog-api.jpg)

## API

### Google Maps API

The Google Maps API is used on the contact page to display the area in which the business is located, the exact are is not marked as the business does not like to give the address for security purposes. 

* [Google Maps Documentation](https://developers.google.com/maps/documentation/javascript/tutorial)

### Dog.ceo

The Dog.ceo API is an API that is used on the contact page of the site to reterive a list of different dog breeds and random images of these indervidual breeds. The user must give thier contact details as well as what breed of dog they own, as this will affect their chances of being accepted due to the average size of the breed.

* [Dog.ceo API](https://dog.ceo/dog-api/)
		
## References

[1] https://stackoverflow.com/questions/8825144/detect-double-tap-on-ipad-or-iphone-screen-using-javascript

[2] https://medium.com/outsystems-experts/how-to-achieve-60-fps-animations-with-css3-db7b98610108

