window.addEvent('domready',function(){
	  
	var animation = new SpriteAnimation('animation',{
	  frameWidth: 80,
	  frames: 4,
	  frameRate: 120,
		defaultPosition: {x: 0, y: 0}
	}).stopLoop();

	$('start_stop').addEvent('click',function(){
		if(this.get('text') == 'Stop') {
			animation.stopLoop();
			spinner.startLoop();
			spinner.element.fade('in');
			this.set('text','Start');
		} else {
			animation.startLoop();
			spinner.stopLoop();
			spinner.element.fade('out');
			this.set('text','Stop');
		}
	});

	$('loop').addEvent('click',function(){
	  animation.loop($('loops').value);
	});

	$('reset').addEvent('click',function(){
	  animation.reset();
	});
	
	var spinner = new SpriteAnimation('spinner',{
	  frameWidth: 64,
	  frames: 12,
	  frameRate: 50
	});
	  
});