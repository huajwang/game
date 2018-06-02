(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.RestartButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#000000").beginStroke().moveTo(-0.7,10).curveTo(-1.5,9.4,-1.7,8.5).curveTo(-1.8,7.5,-1.8,5.9).lineTo(-1.8,-3.1).lineTo(-3.8,-3.1).lineTo(-3.8,-5.1).lineTo(-1.8,-5.1).lineTo(-1.8,-9).lineTo(0.8,-10.6).lineTo(0.8,-5.1).lineTo(3.4,-5.1).lineTo(3.4,-3.1).lineTo(0.8,-3.1).lineTo(0.8,6).curveTo(0.8,7.1,1,7.7).curveTo(1.3,8.1,2.3,8.1).lineTo(3.4,8).lineTo(3.8,10.4).curveTo(2.6,10.6,1.8,10.6).curveTo(0.1,10.6,-0.7,10).closePath();
	this.shape.setTransform(116.7,32.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#000000").beginStroke().moveTo(-4.2,7.9).lineTo(-4.2,-7.6).lineTo(-1.8,-7.6).lineTo(-1.8,-5.2).lineTo(-1.7,-5.2).curveTo(-0.5,-7.9,1.5,-7.9).curveTo(2.8,-8,4.2,-7.1).lineTo(3.3,-4.7).curveTo(2.4,-5.3,1.4,-5.2).curveTo(-0.1,-5.2,-0.8,-3.9).curveTo(-1.6,-2.6,-1.6,-0.2).lineTo(-1.6,7.9).closePath();
	this.shape_1.setTransform(108.6,35.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#000000").beginStroke().moveTo(-5.8,6.9).curveTo(-7.2,5.7,-7.2,3.7).curveTo(-7.2,1.7,-5.8,0.5).curveTo(-4.4,-0.8,-1.1,-1.2).lineTo(1.4,-1.6).curveTo(2.8,-1.8,3.7,-2.1).lineTo(3.6,-3.8).curveTo(3.5,-4.3,3.2,-4.8).curveTo(2.8,-5.3,2,-5.6).curveTo(1.2,-6,-0.1,-6).curveTo(-1.8,-6,-2.8,-5.3).curveTo(-3.8,-4.7,-4.2,-3).lineTo(-6.7,-3.3).curveTo(-6.3,-5.7,-4.5,-6.9).curveTo(-2.8,-8.1,0.3,-8.1).curveTo(3.1,-8.1,4.4,-7.3).curveTo(5.7,-6.5,6,-5.3).curveTo(6.3,-4.1,6.3,-2.3).lineTo(6.3,1.3).lineTo(6.4,5.6).curveTo(6.6,6.7,7.2,7.8).lineTo(4.4,7.8).curveTo(4,7,3.8,5.9).curveTo(1.2,8.1,-1.9,8.1).curveTo(-4.3,8.1,-5.8,6.9).closePath().moveTo(-1.4,1.1).curveTo(-4.4,1.5,-4.4,3.6).curveTo(-4.4,4.7,-3.6,5.4).curveTo(-2.8,6.1,-1.2,6.1).curveTo(0.7,6.1,2.2,4.9).curveTo(3.7,3.7,3.7,0.9).lineTo(3.7,-0).curveTo(1.6,0.7,-1.4,1.1).closePath();
	this.shape_2.setTransform(94,35.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-0.7,10).curveTo(-1.5,9.4,-1.7,8.5).curveTo(-1.8,7.5,-1.8,5.9).lineTo(-1.8,-3.1).lineTo(-3.8,-3.1).lineTo(-3.8,-5.1).lineTo(-1.8,-5.1).lineTo(-1.8,-9).lineTo(0.8,-10.6).lineTo(0.8,-5.1).lineTo(3.4,-5.1).lineTo(3.4,-3.1).lineTo(0.8,-3.1).lineTo(0.8,6).curveTo(0.8,7.1,1,7.7).curveTo(1.3,8.1,2.3,8.1).lineTo(3.4,8).lineTo(3.8,10.4).curveTo(2.6,10.6,1.8,10.6).curveTo(0.1,10.6,-0.7,10).closePath();
	this.shape_3.setTransform(81.6,32.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#000000").beginStroke().moveTo(-4.4,6.9).curveTo(-6.1,5.6,-6.5,3.1).lineTo(-3.8,2.7).curveTo(-3.6,4.4,-2.6,5.2).curveTo(-1.6,6,0.2,6).curveTo(1.9,6,2.8,5.3).curveTo(3.8,4.5,3.8,3.5).curveTo(3.8,2.8,3.3,2.4).curveTo(2.9,1.9,2.3,1.7).lineTo(-0.6,1).curveTo(-3.9,0.2,-5,-1).curveTo(-6,-2.1,-6,-3.7).curveTo(-6,-5.6,-4.5,-6.9).curveTo(-2.9,-8.1,-0.3,-8.1).curveTo(2.5,-8.1,4,-7).curveTo(5.6,-5.9,5.9,-3.8).lineTo(3.3,-3.4).curveTo(3.1,-4.7,2.3,-5.3).curveTo(1.4,-6,-0.1,-6).curveTo(-1.6,-6,-2.5,-5.5).curveTo(-3.5,-4.9,-3.5,-4).curveTo(-3.5,-3,-2.7,-2.6).curveTo(-2,-2.2,0.2,-1.7).curveTo(2.6,-1,3.9,-0.6).curveTo(5.1,-0.1,5.8,0.8).curveTo(6.5,1.7,6.5,3.2).curveTo(6.5,5.3,4.8,6.7).curveTo(3.1,8.1,0.2,8.1).curveTo(-2.7,8.1,-4.4,6.9).closePath();
	this.shape_4.setTransform(69.7,35.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#000000").beginStroke().moveTo(-5.2,6).curveTo(-7.2,3.8,-7.2,0.1).curveTo(-7.2,-3.5,-5.2,-5.8).curveTo(-3.3,-8.1,0.1,-8.1).curveTo(1.8,-8.1,3.4,-7.4).curveTo(5,-6.6,6.1,-4.8).curveTo(7.2,-3,7.2,0.7).lineTo(-4.5,0.7).curveTo(-4.3,3.2,-3,4.6).curveTo(-1.7,6,0.3,6).curveTo(1.8,6,2.8,5.2).curveTo(3.8,4.4,4.4,2.8).lineTo(7.1,3.1).curveTo(6.4,5.5,4.7,6.8).curveTo(2.9,8.1,0.3,8.1).curveTo(-3.2,8.1,-5.2,6).closePath().moveTo(-2.9,-4.7).curveTo(-4.1,-3.5,-4.3,-1.5).lineTo(4.5,-1.5).curveTo(4.3,-3.9,3,-4.9).curveTo(1.7,-6,0.1,-6).curveTo(-1.7,-6,-2.9,-4.7).closePath();
	this.shape_5.setTransform(54,35.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#000000").beginStroke().moveTo(5.9,10.7).lineTo(1.9,4.5).curveTo(1.1,3.3,0.3,2.5).curveTo(-0.6,1.7,-1.3,1.5).curveTo(-2.1,1.2,-3.3,1.2).lineTo(-6.6,1.2).lineTo(-6.6,10.7).lineTo(-9.5,10.7).lineTo(-9.5,-10.7).lineTo(0,-10.7).curveTo(2,-10.7,3.3,-10.5).curveTo(4.6,-10.3,5.6,-9.4).curveTo(6.6,-8.7,7.2,-7.4).curveTo(7.7,-6.2,7.7,-4.9).curveTo(7.7,-2.4,6.1,-1).curveTo(4.6,0.5,1.7,0.9).lineTo(1.7,1).curveTo(3.8,1.9,5.7,4.9).lineTo(9.5,10.7).closePath().moveTo(-6.6,-1.3).lineTo(-0.5,-1.3).curveTo(1.3,-1.3,2.4,-1.6).curveTo(3.5,-1.9,4.1,-2.8).curveTo(4.8,-3.7,4.8,-4.9).curveTo(4.8,-6.3,3.7,-7.4).curveTo(2.6,-8.4,0.2,-8.4).lineTo(-6.6,-8.4).closePath();
	this.shape_6.setTransform(35.9,32.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#4EB8F4").beginStroke().moveTo(-74.8,33.2).lineTo(-74.8,-33.2).lineTo(74.8,-33.2).lineTo(74.8,33.2).closePath();
	this.shape_7.setTransform(74.8,33.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#000079").beginStroke().moveTo(-0.7,10).curveTo(-1.5,9.4,-1.7,8.4).curveTo(-1.8,7.5,-1.8,5.8).lineTo(-1.8,-3.1).lineTo(-3.8,-3.1).lineTo(-3.8,-5.2).lineTo(-1.8,-5.2).lineTo(-1.8,-9).lineTo(0.8,-10.6).lineTo(0.8,-5.2).lineTo(3.4,-5.2).lineTo(3.4,-3.1).lineTo(0.8,-3.1).lineTo(0.8,6).curveTo(0.8,7.2,1,7.6).curveTo(1.3,8.2,2.3,8.2).lineTo(3.4,8.1).lineTo(3.8,10.3).curveTo(2.6,10.6,1.8,10.6).curveTo(0.1,10.6,-0.7,10).closePath();
	this.shape_8.setTransform(120.6,41.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#000079").beginStroke().moveTo(-4.2,8).lineTo(-4.2,-7.6).lineTo(-1.9,-7.6).lineTo(-1.9,-5.3).lineTo(-1.7,-5.3).curveTo(-0.5,-8,1.5,-8).curveTo(2.8,-8,4.2,-7.1).lineTo(3.3,-4.7).curveTo(2.3,-5.2,1.4,-5.3).curveTo(-0.1,-5.3,-0.8,-3.9).curveTo(-1.6,-2.6,-1.6,-0.2).lineTo(-1.6,8).closePath();
	this.shape_9.setTransform(112.5,44.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#000079").beginStroke().moveTo(-5.8,6.9).curveTo(-7.2,5.7,-7.2,3.7).curveTo(-7.2,1.7,-5.8,0.5).curveTo(-4.4,-0.8,-1.1,-1.2).lineTo(1.4,-1.6).curveTo(2.8,-1.8,3.7,-2.1).lineTo(3.6,-3.8).curveTo(3.5,-4.3,3.2,-4.8).curveTo(2.8,-5.3,2,-5.6).curveTo(1.2,-6,-0.1,-6).curveTo(-1.8,-6,-2.8,-5.3).curveTo(-3.8,-4.7,-4.2,-3).lineTo(-6.7,-3.3).curveTo(-6.3,-5.7,-4.5,-6.9).curveTo(-2.8,-8.1,0.3,-8.1).curveTo(3.1,-8.1,4.4,-7.3).curveTo(5.7,-6.5,6,-5.3).curveTo(6.3,-4.1,6.3,-2.3).lineTo(6.3,1.3).lineTo(6.4,5.6).curveTo(6.6,6.7,7.2,7.8).lineTo(4.4,7.8).curveTo(4,7,3.8,5.9).curveTo(1.2,8.1,-1.9,8.1).curveTo(-4.3,8.1,-5.8,6.9).closePath().moveTo(-1.4,1.1).curveTo(-4.4,1.5,-4.4,3.6).curveTo(-4.4,4.7,-3.6,5.4).curveTo(-2.8,6.1,-1.2,6.1).curveTo(0.7,6.1,2.2,4.9).curveTo(3.7,3.7,3.7,0.9).lineTo(3.7,-0).curveTo(1.6,0.7,-1.4,1.1).closePath();
	this.shape_10.setTransform(98,44.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#000079").beginStroke().moveTo(-0.7,10).curveTo(-1.5,9.4,-1.7,8.4).curveTo(-1.8,7.5,-1.8,5.8).lineTo(-1.8,-3.1).lineTo(-3.8,-3.1).lineTo(-3.8,-5.2).lineTo(-1.8,-5.2).lineTo(-1.8,-9).lineTo(0.8,-10.6).lineTo(0.8,-5.2).lineTo(3.4,-5.2).lineTo(3.4,-3.1).lineTo(0.8,-3.1).lineTo(0.8,6).curveTo(0.8,7.2,1,7.6).curveTo(1.3,8.2,2.3,8.2).lineTo(3.4,8.1).lineTo(3.8,10.3).curveTo(2.6,10.6,1.8,10.6).curveTo(0.1,10.6,-0.7,10).closePath();
	this.shape_11.setTransform(85.6,41.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#000079").beginStroke().moveTo(-4.4,6.9).curveTo(-6.1,5.6,-6.5,3.1).lineTo(-3.8,2.7).curveTo(-3.6,4.4,-2.6,5.2).curveTo(-1.6,6,0.2,6).curveTo(1.9,6,2.8,5.3).curveTo(3.8,4.5,3.8,3.5).curveTo(3.8,2.8,3.3,2.4).curveTo(2.9,1.9,2.3,1.7).lineTo(-0.6,1).curveTo(-3.9,0.2,-5,-1).curveTo(-6,-2.1,-6,-3.7).curveTo(-6,-5.6,-4.5,-6.9).curveTo(-2.9,-8.1,-0.3,-8.1).curveTo(2.5,-8.1,4,-7).curveTo(5.6,-5.9,5.9,-3.8).lineTo(3.3,-3.4).curveTo(3.1,-4.7,2.3,-5.3).curveTo(1.4,-6,-0.1,-6).curveTo(-1.6,-6,-2.5,-5.5).curveTo(-3.5,-4.9,-3.5,-4).curveTo(-3.5,-3,-2.7,-2.6).curveTo(-2,-2.2,0.2,-1.7).curveTo(2.6,-1,3.9,-0.6).curveTo(5.1,-0.1,5.8,0.8).curveTo(6.5,1.7,6.5,3.2).curveTo(6.5,5.3,4.8,6.7).curveTo(3.1,8.1,0.2,8.1).curveTo(-2.7,8.1,-4.4,6.9).closePath();
	this.shape_12.setTransform(73.7,44.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#000079").beginStroke().moveTo(-5.2,6).curveTo(-7.2,3.8,-7.2,0.1).curveTo(-7.2,-3.5,-5.2,-5.8).curveTo(-3.3,-8.1,0.1,-8.1).curveTo(1.8,-8.1,3.4,-7.4).curveTo(5,-6.6,6.1,-4.8).curveTo(7.2,-3,7.2,0.7).lineTo(-4.5,0.7).curveTo(-4.3,3.2,-3,4.6).curveTo(-1.7,6,0.3,6).curveTo(1.8,6,2.8,5.2).curveTo(3.8,4.4,4.4,2.8).lineTo(7.1,3.1).curveTo(6.4,5.5,4.7,6.8).curveTo(2.9,8.1,0.3,8.1).curveTo(-3.2,8.1,-5.2,6).closePath().moveTo(-2.9,-4.7).curveTo(-4.1,-3.5,-4.3,-1.5).lineTo(4.5,-1.5).curveTo(4.3,-3.9,3,-4.9).curveTo(1.7,-6,0.1,-6).curveTo(-1.7,-6,-2.9,-4.7).closePath();
	this.shape_13.setTransform(57.9,44.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#000079").beginStroke().moveTo(5.9,10.7).lineTo(1.9,4.5).curveTo(1.1,3.3,0.3,2.5).curveTo(-0.6,1.7,-1.3,1.5).curveTo(-2.1,1.2,-3.3,1.2).lineTo(-6.6,1.2).lineTo(-6.6,10.7).lineTo(-9.5,10.7).lineTo(-9.5,-10.7).lineTo(0,-10.7).curveTo(2,-10.7,3.3,-10.5).curveTo(4.6,-10.3,5.6,-9.4).curveTo(6.6,-8.7,7.2,-7.4).curveTo(7.7,-6.2,7.7,-4.9).curveTo(7.7,-2.4,6.1,-1).curveTo(4.6,0.5,1.7,0.9).lineTo(1.7,1).curveTo(3.8,1.9,5.7,4.9).lineTo(9.5,10.7).closePath().moveTo(-6.6,-1.3).lineTo(-0.5,-1.3).curveTo(1.3,-1.3,2.4,-1.6).curveTo(3.5,-1.9,4.1,-2.8).curveTo(4.8,-3.7,4.8,-4.9).curveTo(4.8,-6.3,3.7,-7.4).curveTo(2.6,-8.4,0.2,-8.4).lineTo(-6.6,-8.4).closePath();
	this.shape_14.setTransform(39.8,41.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#4E19F2").beginStroke().moveTo(-74.8,33.2).lineTo(-74.8,-33.2).lineTo(74.8,-33.2).lineTo(74.8,33.2).closePath();
	this.shape_15.setTransform(74.8,33.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,149.6,66.4);


(lib.NumberedBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.NumberedText = new cjs.Text("98", "35px 'Times New Roman'");
	this.NumberedText.name = "NumberedText";
	this.NumberedText.lineHeight = 41;
	this.NumberedText.lineWidth = 36;
	this.NumberedText.parent = this;
	this.NumberedText.setTransform(28,24);

	this.timeline.addTween(cjs.Tween.get(this.NumberedText).wait(1).to({x:24,y:19.7,font:"40px 'Times New Roman'",lineHeight:46.3,lineWidth:46},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:32,y:27.5},0).to({_off:true},1).wait(1));

	// Granet
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["rgba(255,255,255,0)","#000000"],[0,1],-3,-0.6,0,-3,-0.6,38).beginStroke().moveTo(-27,27).lineTo(-27,-27).lineTo(27,-27).lineTo(27,27).closePath();
	this.shape.setTransform(49,44);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginRadialGradientFill(["rgba(255,255,255,0)","#000000"],[0,1],-3.6,-0.8,0,-3.6,-0.8,46.4).beginStroke().moveTo(-33,33).lineTo(-33,-33).lineTo(33,-33).lineTo(33,33).closePath();
	this.shape_1.setTransform(46,41);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["rgba(255,255,255,0)","#000000"],[0,1],-2.3,-0.5,0,-2.3,-0.5,29.6).beginStroke().moveTo(-21,21).lineTo(-21,-21).lineTo(21,-21).lineTo(21,21).closePath();
	this.shape_2.setTransform(46,41.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[]},1).wait(1));

	// Box
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#6FD1EF").beginStroke().moveTo(-27,27).lineTo(-27,-27).lineTo(27,-27).lineTo(27,27).closePath();
	this.shape_3.setTransform(49,44);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#6FD1EF").beginStroke().moveTo(-32,32).lineTo(-32,-32).lineTo(32,-32).lineTo(32,32).closePath();
	this.shape_4.setTransform(46.2,41.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#6FD1EF").beginStroke().moveTo(-20.4,20.4).lineTo(-20.4,-20.4).lineTo(20.4,-20.4).lineTo(20.4,20.4).closePath();
	this.shape_5.setTransform(46.1,41.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(22,17,54,54);


(lib.BDbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#530A91").beginStroke().moveTo(-46.9,46.9).lineTo(-46.9,-46.9).lineTo(46.9,-46.9).lineTo(46.9,46.9).closePath();
	this.shape.setTransform(46.9,46.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.BDbox, new cjs.Rectangle(0,0,93.8,93.8), null);


(lib.Background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#97D1F8").beginStroke().moveTo(-150.8,200.4).lineTo(-150.8,-200.4).lineTo(150.8,-200.4).lineTo(150.8,200.4).closePath();
	this.shape.setTransform(150.8,200.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Background, new cjs.Rectangle(0,0,301.6,400.8), null);


(lib.GameOverVew = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// YOU WON!
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#80B8F4").beginStroke().moveTo(-2.5,17.9).lineTo(-2.5,12.9).lineTo(2.5,12.9).lineTo(2.5,17.9).closePath().moveTo(-1.4,9).lineTo(-2.7,-10).lineTo(-2.7,-17.9).lineTo(2.7,-17.9).lineTo(2.7,-10).lineTo(1.5,9).closePath();
	this.shape.setTransform(278.4,70.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#80B8F4").beginStroke().moveTo(9.2,17.9).lineTo(-9.5,-10.2).lineTo(-9.6,-10.2).lineTo(-9.6,17.9).lineTo(-14.1,17.9).lineTo(-14.1,-17.9).lineTo(-9.2,-17.9).lineTo(9.5,10.2).lineTo(9.6,10.2).lineTo(9.6,-17.9).lineTo(14.1,-17.9).lineTo(14.1,17.9).closePath();
	this.shape_1.setTransform(253.4,70.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#80B8F4").beginStroke().moveTo(-12.4,13.3).curveTo(-17.1,8,-17.1,0.5).curveTo(-17.1,-8.3,-12.3,-13.4).curveTo(-7.6,-18.5,0,-18.5).curveTo(7.6,-18.5,12.3,-13.4).curveTo(17.1,-8.3,17.1,0).curveTo(17.1,8.4,12.3,13.4).curveTo(7.5,18.5,0,18.5).curveTo(-7.7,18.5,-12.4,13.3).closePath().moveTo(-8.8,-10.8).curveTo(-12.2,-7.1,-12.2,0.6).curveTo(-12.2,6.8,-8.8,10.6).curveTo(-5.4,14.4,-0,14.4).curveTo(5.4,14.5,8.8,10.7).curveTo(12.2,6.8,12.2,0).curveTo(12.2,-6.9,8.8,-10.7).curveTo(5.3,-14.5,0.1,-14.5).curveTo(-5.3,-14.5,-8.8,-10.8).closePath();
	this.shape_2.setTransform(215.9,70.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#80B8F4").beginStroke().moveTo(8.6,17.9).lineTo(0.8,-10.3).curveTo(0.2,-12.5,0,-13.6).lineTo(-0.1,-13.6).lineTo(-1.1,-9.3).lineTo(-8.7,17.9).lineTo(-13.5,17.9).lineTo(-23,-17.9).lineTo(-18.2,-17.9).lineTo(-12.7,5.6).curveTo(-11.6,10.2,-11.3,12.4).lineTo(-11.2,12.9).lineTo(-11.1,12.9).curveTo(-10.1,8.3,-9.6,6.2).lineTo(-2.8,-17.9).lineTo(3,-17.9).lineTo(8.1,0.2).curveTo(10,7,10.8,12.9).lineTo(10.9,12.9).curveTo(11.4,10,12.6,5.1).lineTo(18.3,-17.9).lineTo(23,-17.9).lineTo(13.2,17.9).closePath();
	this.shape_3.setTransform(172.9,70.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#80B8F4").beginStroke().moveTo(-7.6,16.7).curveTo(-10.6,15.3,-11.9,13).curveTo(-13.3,10.6,-13.7,8.2).curveTo(-14.1,5.6,-14.1,2.5).lineTo(-14.1,-18.2).lineTo(-9.3,-18.2).lineTo(-9.3,2.4).curveTo(-9.3,5.7,-8.9,8).curveTo(-8.4,10.3,-6.4,12.1).curveTo(-4.5,13.9,-0.3,13.9).curveTo(3.9,13.9,5.9,12.5).curveTo(8,11.1,8.7,8.6).curveTo(9.3,6.2,9.3,2.4).lineTo(9.3,-18.2).lineTo(14.1,-18.2).lineTo(14.1,2.5).curveTo(14.1,5.3,13.8,7.6).curveTo(13.5,9.9,12.2,12.4).curveTo(10.9,14.9,7.9,16.6).curveTo(5,18.2,0.1,18.2).curveTo(-4.7,18.2,-7.6,16.7).closePath();
	this.shape_4.setTransform(117.3,70.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#80B8F4").beginStroke().moveTo(-12.4,13.3).curveTo(-17.1,8,-17.1,0.5).curveTo(-17.1,-8.3,-12.3,-13.4).curveTo(-7.6,-18.5,0,-18.5).curveTo(7.6,-18.5,12.3,-13.4).curveTo(17.1,-8.3,17.1,0).curveTo(17.1,8.4,12.3,13.4).curveTo(7.5,18.5,0,18.5).curveTo(-7.7,18.5,-12.4,13.3).closePath().moveTo(-8.8,-10.8).curveTo(-12.2,-7.1,-12.2,0.6).curveTo(-12.2,6.8,-8.8,10.6).curveTo(-5.4,14.4,-0,14.4).curveTo(5.4,14.5,8.8,10.7).curveTo(12.2,6.8,12.2,0).curveTo(12.2,-6.9,8.8,-10.7).curveTo(5.3,-14.5,0.1,-14.5).curveTo(-5.3,-14.5,-8.8,-10.8).closePath();
	this.shape_5.setTransform(79.8,70.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#80B8F4").beginStroke().moveTo(-2.6,17.9).lineTo(-2.6,2.7).lineTo(-16.4,-17.9).lineTo(-10.6,-17.9).lineTo(-2.8,-5.8).curveTo(-1.6,-4,0.1,-1.1).curveTo(1,-3,10.9,-17.9).lineTo(16.4,-17.9).lineTo(2.2,2.7).lineTo(2.2,17.9).closePath();
	this.shape_6.setTransform(43.7,70.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},14).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},10).wait(1));

	// RestartButton
	this.instance = new lib.RestartButton();
	this.instance.parent = this;
	this.instance.setTransform(148,254.5,1,1,0,0,0,74.8,33.2);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.RestartButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	// BD box
	this.instance_1 = new lib.BDbox();
	this.instance_1.parent = this;
	this.instance_1.setTransform(180,31,1,1,0,0,0,46.9,46.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(2));

	// BD box
	this.instance_2 = new lib.BDbox();
	this.instance_2.parent = this;
	this.instance_2.setTransform(125.8,368,1,1,0,0,0,46.9,46.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(9));

	// BD box
	this.instance_3 = new lib.BDbox();
	this.instance_3.parent = this;
	this.instance_3.setTransform(140.7,31,1,1,0,0,0,46.9,46.9);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},14,cjs.Ease.get(1)).wait(11));

	// BD box
	this.instance_4 = new lib.BDbox();
	this.instance_4.parent = this;
	this.instance_4.setTransform(269.7,105.2,1,1,0,0,0,46.9,46.9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(6));

	// BD box
	this.instance_5 = new lib.BDbox();
	this.instance_5.parent = this;
	this.instance_5.setTransform(105.2,245,1,1,0,0,0,46.9,46.9);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(7).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(4));

	// BD box
	this.instance_6 = new lib.BDbox();
	this.instance_6.parent = this;
	this.instance_6.setTransform(180,280.8,1,1,0,0,0,46.9,46.9);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(9));

	// BD box
	this.instance_7 = new lib.BDbox();
	this.instance_7.parent = this;
	this.instance_7.setTransform(32,292.8,1,1,0,0,0,46.9,46.9);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({alpha:1},14,cjs.Ease.get(1)).wait(11));

	// BD box
	this.instance_8 = new lib.BDbox();
	this.instance_8.parent = this;
	this.instance_8.setTransform(253.1,39,1,1,0,0,0,46.9,46.9);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(8));

	// BD box
	this.instance_9 = new lib.BDbox();
	this.instance_9.parent = this;
	this.instance_9.setTransform(125.8,199,1,1,0,0,0,46.9,46.9);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({alpha:1},14,cjs.Ease.get(1)).wait(11));

	// BD box
	this.instance_10 = new lib.BDbox();
	this.instance_10.parent = this;
	this.instance_10.setTransform(280,361,1,1,0,0,0,46.9,46.9);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(8).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(3));

	// BD box
	this.instance_11 = new lib.BDbox();
	this.instance_11.parent = this;
	this.instance_11.setTransform(41,368,1,1,0,0,0,46.9,46.9);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(4).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(7));

	// BD box
	this.instance_12 = new lib.BDbox();
	this.instance_12.parent = this;
	this.instance_12.setTransform(46.9,140.7,1,1,0,0,0,46.9,46.9);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({alpha:1},14,cjs.Ease.get(1)).wait(11));

	// BD box
	this.instance_13 = new lib.BDbox();
	this.instance_13.parent = this;
	this.instance_13.setTransform(199,114,1,1,0,0,0,46.9,46.9);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(2).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(9));

	// BD box
	this.instance_14 = new lib.BDbox();
	this.instance_14.parent = this;
	this.instance_14.setTransform(175.9,199,1,1,0,0,0,46.9,46.9);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(7).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(4));

	// BD box
	this.instance_15 = new lib.BDbox();
	this.instance_15.parent = this;
	this.instance_15.setTransform(105.2,310,1,1,0,0,0,46.9,46.9);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(4).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(7));

	// BD box
	this.instance_16 = new lib.BDbox();
	this.instance_16.parent = this;
	this.instance_16.setTransform(259,280.8,1,1,0,0,0,46.9,46.9);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({alpha:1},14,cjs.Ease.get(1)).wait(11));

	// BD box
	this.instance_17 = new lib.BDbox();
	this.instance_17.parent = this;
	this.instance_17.setTransform(113,110,1,1,0,0,0,46.9,46.9);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(10));

	// BD box
	this.instance_18 = new lib.BDbox();
	this.instance_18.parent = this;
	this.instance_18.setTransform(32,226,1,1,0,0,0,46.9,46.9);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(7).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(4));

	// BD box
	this.instance_19 = new lib.BDbox();
	this.instance_19.parent = this;
	this.instance_19.setTransform(199,353.1,1,1,0,0,0,46.9,46.9);
	this.instance_19.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({alpha:1},14,cjs.Ease.get(1)).wait(11));

	// BD box
	this.instance_20 = new lib.BDbox();
	this.instance_20.parent = this;
	this.instance_20.setTransform(259,187,1,1,0,0,0,46.9,46.9);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(9).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(2));

	// BD box
	this.instance_21 = new lib.BDbox();
	this.instance_21.parent = this;
	this.instance_21.setTransform(46.9,46.9,1,1,0,0,0,46.9,46.9);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(3).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-15.9,348.9,415.9);


// stage content:
(lib.无标题2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 
	this.instance = new lib.GameOverVew();
	this.instance.parent = this;
	this.instance.setTransform(150,200,1,1,0,0,0,150,200);

	this.instance_1 = new lib.Background();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-207.5,165,0.995,0.998,0,0,0,150.8,200.4);

	this.NumberedBox = new lib.NumberedBox();
	this.NumberedBox.name = "NumberedBox";
	this.NumberedBox.parent = this;
	this.NumberedBox.setTransform(444.4,219.8,1,1,0,0,0,27,27);
	new cjs.ButtonHelper(this.NumberedBox, 0, 1, 2, false, new lib.NumberedBox(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.NumberedBox},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207.5,165,854,435);
// library properties:
lib.properties = {
	id: '09B02287DD57E54DB40A8362411BAFDF',
	width: 300,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['09B02287DD57E54DB40A8362411BAFDF'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;