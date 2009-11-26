window.addEvent('domready',function(){
	  
	var animation = new SpriteAnimation('animation',{
	  frameWidth: 80,
	  frames: 4,
	  frameRate: 120
	});

	$('start_stop').addEvent('click',function(){
		if(this.get('text') == 'Stop') {
			animation.stopLoop();
			this.set('text','Start');
		} else {
			animation.startLoop();
			this.set('text','Stop');
		}
	});

	$('loop').addEvent('click',function(){
	  animation.loop($('loops').value);
	});

	$('reset').addEvent('click',function(){
	  animation.reset();
	});
	  
});