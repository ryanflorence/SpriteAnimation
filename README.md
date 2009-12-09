SpriteAnimation
===============

Cycles the x value of the background-position of an element to create sprite animations.  Helpful for creating javascript game animations or ajax loadings spinners.

![Resizable](http://github.com/rpflorence/SpriteAnimation/raw/master/logo.png)

How to use
----------

First set your image up to be a sequence of equal-width, horizontal frames.

    var animation = new SpriteAnimation('animation',{
      frameWidth: 80,
      frames: 4,
      frameRate: 120
    });

View the [MooDoc](http://moodocs.net/rpflo/mootools-rpflo/SpriteAnimation) for usage and examples.