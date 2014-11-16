## Introduction

Elegance Jewellery, a customizable interactive digital retail display for jewellery and similar items. You can add your own images to the display to achieve a powerful dynamic visual effect and interactive experience to showcase your latest products. Your customers will enjoy the classic movie theatre slideshow effect, and will also be able to move the slides manually via a simple swipe of the screen. You can view a working example here http://pcsandford.github.io

![Screenshot](assets/images/screenshot.png)
Format: ![Alt Text](screenshot of opening image of display, showing title and curtain.)

Elegance Jewellery works in conjunction with Rise Vision, the digital signage management application that runs on Google Cloud.

At this time Chrome is the only browser that this project and Rise Vision supports.

## Directions to modify the Elegance Jewellery Template

### Changing the Images 

To change the images to those of your choice, please locate the following line of code in the index.html file. You can then delete
the information between the quotation marks following the src tag and replace with the file path to your own image. Please
also change the text folling the p and span tags to add your own information.

### Removing the image credit

Once you have replaced the example images, please locate and delete the following code to remove the picture credit information.

### Changing the Logo

To change the logo images on both the curtain and display page, please locate the following line of code in the idex.html file. You can then
delete the information between the quotation marks following the src tag and replace with the file path to your own logo image.

### Changing the Timing for the Curtain Closing

#### Manual Timing

To change the timing for the curtain closing after a user has touched the screen, please locate the following code in the script.js file. You can then
change the time by replacing the value of 10000 with your desired time. 10000 is equal to 10 seconds.

#### Automatic Timing

To change the automatic timing of the curtain closing, please locate the following line of code in the script.js file. You can then
change the time by replacing the value of 45000 with your desired time. 45000 is equal to 45 seconds.

## Built With

* NPM (node package manager)
* HTML5
* CSS3
* jQuery
* GSAP
* Grunt

## Submitting Issues

If you encounter problems or find defects we really want to hear about them. If you could take the time to add them as issues to this Repository it would be most appreciated. When reporting issues please use the following format where applicable:

### Reproduction Steps

1. did this
2. then that
3. followed by this (screenshots / video captures always help)

### Expected Results

What you expected to happen.

### Actual Results

What actually happened. (screenshots / video captures always help)

## Contributing

All contributions are greatly appreciated and welcome! If you would first like to sound out your contribution ideas please post your thoughts to our community, otherwise submit a pull request and we will do our best to incorporate it

### Suggested Contributions

* Transition effects for the slideshow
* Optimization for Portrait Display
* i18n Language Support

## Resources

If you have any questions or problems please don't hesitate to join our lively and responsive community at http://community.risevision.com.

If you are looking for user documentation on Rise Vision please see http://www.risevision.com/help/users/

If you would like more information on developing applications for Rise Vision please visit http://www.risevision.com/help/developers/.

#### Facilitator

Peter Cameron An Interactive Digital Display for Retail
