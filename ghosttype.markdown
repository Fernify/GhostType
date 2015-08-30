GhostType
-------

[1]: <https://github.com/kenwheeler/slick>

_the last carousel you'll ever need_

#### Demo

[http://kenwheeler.github.io/slick](http://kenwheeler.github.io/slick/)

#### Settings

Option | Type | Default | Description
------ | ---- | ------- | -----------
cursor | boolean | true | Enable flashing cursor character
cursorChar | charcter | (|) | Character act as a cursor
cursorTime | int  | 0.5 | Cursor hide/show interval
hideWordTime | int | 1 | Time in seconds where no word is shown
showWordTime | int | 3 | Time in seconds where a word is shown
startMode | int | 4 | CSS3 easing
wordArray | array | ["Lorem Ipsum", "Foo bar", "Ghost Type"] | The words to be shown

### Events

In slick 1.4, callback methods have been deprecated and replaced with events. Use them before the initialization of slick as shown below:

```javascript
// On swipe event
$('.your-element').on('swipe', function(event, slick, direction){
  console.log(direction);
  // left
});

// On edge hit
$('.your-element').on('edge', function(event, slick, direction){
  console.log('edge was hit')
});

// On before slide change
$('.your-element').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  console.log(nextSlide);
});
```

Event | Params | Description
------ | -------- | -----------
afterChange | event, slick, currentSlide | After slide change callback
beforeChange | event, slick, currentSlide, nextSlide | Before slide change callback
breakpoint | event, slick, breakpoint | Fires after a breakpoint is hit
destroy | event, slick | When slider is destroyed, or unslicked.
edge | event, slick, direction | Fires when an edge is overscrolled in non-infinite mode.
init | event, slick | When Slick initializes for the first time callback
reInit | event, slick | Every time Slick (re-)initializes callback
setPosition | event, slick | Every time Slick recalculates position
swipe | event, slick, direction | Fires after swipe/drag


#### Methods

Methods are called on slick instances through the slick method itself in version 1.4, see below:

```javascript
// Add a slide
$('.your-element').slick('slickAdd',"<div></div>");

// Get the current slide
var currentSlide = $('.your-element').slick('slickCurrentSlide');
```

This new syntax allows you to call any internal slick method as well:

```javascript
// Manually refresh positioning of slick
$('.your-element').slick('setPosition');
```


Method | Argument | Description
------ | -------- | -----------
slick | options : object | Initializes Slick
unslick |  | Destroys Slick
slickNext |  |  Triggers next slide
slickPrev | | Triggers previous slide
slickPause | | Pause Autoplay
slickPlay | | Start Autoplay
slickGoTo | index : int, dontAnimate : bool | Goes to slide by index, skipping animation if second parameter is set to true
slickCurrentSlide |  |  Returns the current slide index
slickAdd | element : html or DOM object, index: int, addBefore: bool | Add a slide. If an index is provided, will add at that index, or before if addBefore is set. If no index is provided, add to the end or to the beginning if addBefore is set. Accepts HTML String || Object
slickRemove | index: int, removeBefore: bool | Remove slide by index. If removeBefore is set true, remove slide preceding index, or the first slide if no index is specified. If removeBefore is set to false, remove the slide following index, or the last slide if no index is set.
slickFilter | filter : selector or function | Filters slides using jQuery .filter syntax
slickUnfilter | | Removes applied filter
slickGetOption | option : string(option name) | Gets an option value.
slickSetOption | option : string(option name), value : depends on option, refresh : boolean | Sets an option live. Set refresh to true if it is an option that changes the display


#### Example

Initialize with:

```javascript
$(element).slick({
  dots: true,
  speed: 500
});
 ```

Destroy with:

```javascript
$(element).unslick();
```


#### Sass Variables

Variable | Type | Default | Description
------ | ---- | ------- | -----------
$slick-font-path | string | "./fonts/" | Directory path for the slick icon font
$slick-font-family | string | "slick" | Font-family for slick icon font
$slick-loader-path | string | "./" | Directory path for the loader image
$slick-arrow-color | color | white | Color of the left/right arrow icons
$slick-dot-color | color | black | Color of the navigation dots
$slick-dot-color-active | color | $slick-dot-color | Color of the active navigation dot
$slick-prev-character | string | '\2190' | Unicode character code for the previous arrow icon
$slick-next-character | string | '\2192' | Unicode character code for the next arrow icon
$slick-dot-character | string | '\2022' | Unicode character code for the navigation dot icon
$slick-dot-size | pixels | 6px | Size of the navigation dots


#### Dependencies

jQuery 1.7

#### License

Copyright (c) 2014 Ken Wheeler

Licensed under the MIT license.

Free as in Bacon.