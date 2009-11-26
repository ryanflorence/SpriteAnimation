Class: SpriteAnimation {#SpriteAnimation}
=========================================

<big>Cycles the x value of the background-position of an element to create sprite animations.  Helpful for creating javascript game animations or ajax loadings spinners.</big>

### Demo

<iframe src="http://mooshell.net/rpflo/7ztEf/embedded/?tabs=result,js,html,css" style="width: 100%; height:350px"></iframe>

### Implements:

[Options][options], [Events][events], [Loop][loop]

### Example:

    var animation = new SpriteAnimation('animation',{
      frameWidth: 80,
      frames: 4,
      frameRate: 120
    });


SpriteAnimation Method: constructor {#SpriteAnimation:constructor}
-------------------------------------------------------------------


### Syntax:

	var mySpriteAnimation = new SpriteAnimation(element, options);

### Arguments:

1. element - (*element*) A string of the id for an Element or an Element reference
2. options - (*object*) See below:

### Options:

* frameWidth - (*integer*: defaults to 75) The width of each frame in the sprite animation.
* frames - (*integer*: defaults to 10) The number of frames in your sprite image.
* frameRate - (*integer*: defaults to 100) The number of milliseconds between steps.


SpriteAnimation Method: reset {#SpriteAnimation:reset}
-------------------------------------------------------

<big>Sets the background position to `0,0`</big>

### Syntax:

    myAnimation.reset();

### Returns:

This SpriteAnimation instance.


[options]:http://mootools.net/docs/core/Class/Class.Extras#Options
[events]:http://mootools.net/docs/core/Class/Class.Extras#Events
[loop]:http://moodocs.net/rpflo/mootools-rpflo/Loop