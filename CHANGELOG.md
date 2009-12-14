## [12-14-2009] version 1.1
* Added `defaultPosition` option.
* Moved computing of `x` position out of `step` into separate method `computeX`.
* Added `computeY`.

### Notes

It should be pretty straightforward to extend `SpriteAnimation` to accommodate cycling the y value of the background position instead of just the x value, or both at the same time.  Common use case is having multiple sprite animations in a single image file that each instance can use, or even alter the state of a single instance.

