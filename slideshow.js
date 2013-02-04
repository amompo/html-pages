//If using image buttons as controls, Set image buttons' image preload here true
//(use false for no preloading and for when using no image buttons as controls):

var preload_ctrl_images=true;

//And configure the image buttons' images here:

var previmg='images/back.png';
var stopimg='images/stop.png';
var playimg='images/play.png';
var nextimg='images/next.png';

var slideShow=[]; // SLIDESHOW

//configure the below images and descriptions to your own, note optional links, target and window specifications.

slideShow[0] = ["images/nyhavn_dark.jpg", "Nyhavn"];
slideShow[1] = ["images/radhuspladsen.jpg", "R&aring;dhus Plads"];
slideShow[2] = ["images/tivoli.jpg", "Tivoli"];
slideShow[3] = ["images/stroget.jpg", "Str&oslashget"];
slideShow[4] = ["images/den_lille_havfrue.jpg", "Den Lille Havfrue"];
slideShow[5] = ["images/danish_flag.png"];

//optional properties for these images:

slideShow.no_descriptions=0; //use for no descriptions displayed
slideShow.pause=1; //use for pause onmouseover
slideShow.image_controls=1; //use images for controls
slideShow.button_highlight='#ffcccc'; //onmouseover background-color for image buttons (requires image_controls=1)
slideShow.specs='width=300, height=250' //global specifications for this show's new window(s)
slideShow.random=0; //set a random slide sequence on each page load
slideShow.manual_start=1; //start show in manual mode (stopped)
slideShow.delay=2000; //sets miliseconds delay between slides
slideShow.no_added_linebreaks=1; //use for not adding line breaks in formatting of texts and controls
slideShow.width = 750;

//Notes:

//slides#.target will set a target for a slide group, will be overridden by slides#[#][3], if present
//slides#.specs will set new window specifications for a slide group, will be overridden by slides#[#][4], if present
//slides#.fadecolor will set fading images background color, defaults to white
//slides#.no_controls will set a slide show with no controls
//slides#.random will set a random slide sequence on each page load
//slides#.delay=4000 will set miliseconds delay between slides for a given show, may also be set in the call as the last parameter
//slides#.jumpto=1 will display added controls to jump to a particular image by its number
//slides#.no_added_linebreaks=1; use for no added line breaks in formatting of texts and controls

//use below to create a customized onclick event for linked images in a given show:
//slides#.onclick="window.open(this.href,this.target,'top=0, left=0, width='+screen.availWidth+', height='+screen.availHeight);return false;"