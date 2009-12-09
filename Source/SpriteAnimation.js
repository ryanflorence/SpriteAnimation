/*
---

script: SpriteAnimation.js

description: Cycles the x value of the background-position of an element to create sprite animations.  Helpful for creating javascript game animations or ajax loadings spinners.

license: MIT-style license.

authors: Ryan Florence <http://ryanflorence.com>

docs: http://moodocs.net/rpflo/mootools-rpflo/SpriteAnimation

requires:
- core:1.2.4

provides: [SpriteAnimation]

...
*/

var SpriteAnimation = new Class({
  
	Implements: [Options, Events, Loop],
  
		options: {
				/*
				onStep: $empty,
				*/
				frameWidth: 75,
				frames: 10,
				frameRate: 100
			},
 
	initialize: function(element,options){
		this.setOptions(options);
		this.setLoop(this.step, 100);
		this.element = document.id(element);
		this.startLoop();
	},
 
	step: function(){
		this.loopCount = (this.loopCount == (this.options.frames)) ? 0 : this.loopCount
		var style = -this.loopCount * this.options.frameWidth;
		this.element.setStyle('background-position',style+'px 0px');
		this.fireEvent('onStep',this.count);
		return this;
	},
	
	reset: function(){
		this.loopCount = this.options.frames;
		this.step();
		return this;
	}
 
});

SpriteAnimation.implement({

	loop: function(loops){
		var c = 0;
		loops = loops * this.options.frames;
		if(this.isStopped) this.startLoop();
		this.addEvents({
			onStep: function(step){
				c++;
				if(c == loops) this.stopLoop();
			}
		});
	}
	
});