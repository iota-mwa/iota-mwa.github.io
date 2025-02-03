(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.647)").s().p("Egx4Ae1Qg6gTgsgWQibgVh/grQj0hTAAh1IAAgHQhDgRg9gXQjnhYAAh9QAAh9DnhXQBJgcBTgTIgCgQQAAh+EfhbIAcgJQB2gjCIgWQA5g2B0gsQDhhWFAAAQDGAACiAhQAigOAogOQD0hTFYAAQFZAAD0BTQA6AUArAVQCcAVB/ArQD0BTAAB2IgBAGQBEARA9AXQDlBYAAB9QAAB9jlBYQhJAbhTAUIABAPQAAB/keBbIgcAIQk6Bem8AAQjeAAi8gXQgfBfjPBGQj0BTlZAAQlYAAj0hTgEAskAP6IgVgFQjWg+AAhVIABgKQg+gOg2gSQisg8AAhUQAAhUCsg7QAtgQAzgLIgBgFQAAhPC2g4QBfgdB0gOQAhgOArgOQC2g3EBAAQEBAAC2A3QC2A4AABPIgBAOQBxAOBdAcQC2A4AABPQAAAmgrAhQCDAzAABDQAABPi2A4QijAyjgAGIgbAIIgVAFQjrBAlLAAQlMAAjqhAgANfLuQjAgXipgwQk9hagziAQgFgLgCgKQi1gWijgvQk8hZgziAQgZg+Asg1QjrhRgshsQg0h/D1haQDahRFVgJIAlgNIAdgJQE/hmH+AAQH/AAGSBmIAkAJQFxBjA4CKQADAIACAIQBoAWBgAeQEvBfA3CHQA3CIjiBfQg8AZhGATIAEAHQAzB/j0BaQiAAwipAWQgoAYg7AVQiCAwiuAXQiXATi4AAQi5AAingTgEgvVADvQiahEgXhdQiNAWilAAQlMAAjqhbIgVgJQjWhYAAh7IABgPQg+gTg2gbQishWAAh6QAAh6CshWQAtgXAzgQIgBgHQAAhyC2hRQBfgrB0gUQAhgVArgTQC2hREBAAQEBAAC2BRQAeANAZAOQB5ggCUAAQDvAACoBUQBWArArA0QBmAWBYAiIAVAJQDVBZAAB7IgBAPQA+ATA3AbQCsBWAAB6QAAB6isBWQguAXgyAQIAAAHQAABxi2BRQhfArh0AUQggAVgsATQi2BRkBAAQkBAAi2hRgEAt4gFiQjJg1gbhKIgEgNQh1gNhngbQjJg0gbhLQgNgjAggfQiVgwgXg/QgbhKCjg1QCSgvDegFIAYgIIATgFQDVg8FMAAQFLAAEAA8IAXAFQDrA6AdBQIADAKQBCAMA9ASQDAA4AdBPQAdBPiYA4QgoAOgvALIACAEQAbBKiiA1QhVAbhwANQgbAOgnANQijA0kBAAQkBAAjJg0gA2grBQgxgSglgSQiDgRhrgmQjOhHAAhkIAAgGQg5gOgzgUQjChLAAhsQAAhrDChLQA+gYBGgQIgCgOQAAhsDyhOIAXgHQEJhRF3AAQC6AACgAUQATg8BjgwQAkgSAugQIAMgEIPIAAIAMAEQAuAQAjASIAEACQCDASBsAlQDNBHAABkIAAAGQA5AOAzAUQDDBMAABqQAABsjDBLQg9AYhGAQIABANQAABtjxBOIgYAHQhkAfhzASQgwAuhhAmQi+BKkNAAQinAAiJgdQgcANgiAMQjOBHkiAAQkjAAjNhHgEgrvgfEIAogNQC+g2D+AAQD/AAC9A2IApANg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-460.1,-205.6,920.3,411.29999999999995);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.647)").s().p("Egx4AdkQg6gUgsgWQibgUh/grQj0hTAAh2IAAgHQhDgQg9gXQjnhYAAh9QAAh9DnhXQBJgcBTgUIgCgPQAAh/EfhaIAcgJQB2gkCIgWQA5g1B0gtQDhhVFAAAQDGAACiAhQAigOAogPQD0hSFYAAQFZAAD0BSQA6AVArAVQCcAUB/AsQD0BTAAB1IgBAHQBEAQA9AYQDlBXAAB+QAAB8jlBZQhJAbhTAUIABAPQAAB/keBbIgcAIQk6Bem8AAQjeAAi8gXQgfBfjPBGQj0BTlZAAQlYAAj0hTgEAskAOpIgVgGQjWg9AAhWIABgJQg+gOg2gTQisg7AAhUQAAhUCsg8QAtgPAzgMIgBgEQAAhPC2g4QBfgdB0gOQAhgOArgOQC2g4EBABQEBgBC2A4QC2A4AABPIgBAOQBxAOBdAcQC2A4AABPQAAAmgrAhQCDAyAABEQAABPi2A4QijAyjgAFIgbAIIgVAGQjrBAlLAAQlMAAjqhAgAH2JWQk9hbgzh/QgFgLgCgKQi1gWijgvQk8hZgziAQgZg+Asg1QjrhRgshsQg0h/D1haQDahRFVgJIAlgNIAdgKQE/hlH+gBQH/ABGSBlIAkAKQFxBjA4CKQADAHACAJQBoAWBgAdQEvBgA3CIQA3CHjiBfQg8AZhGATIAEAGQAzCAj0BaQiAAwipAVQgoAYg7AWQjzBamMAAQmMAAk9hagEgvVACeQiahFgXhcQiNAWilAAQlMAAjqhaIgVgJQjWhZAAh8IABgOQg+gUg2gbQishWAAh6QAAh5CshXQAtgWAzgQIgBgHQAAhzC2hRQBfgqB0gUQAhgVArgTQC2hREBgBQEBABC2BRQAeANAZAOQB5ghCUAAQDvABCoBUQBWAqArA1QBmAVBYAjIAVAJQDVBZAAB7IgBAPQA+ATA3AbQCsBWAAB6QAAB6isBWQguAWgyARIAAAGQAABzi2BQQhfArh0AUQggAUgsAUQi2BRkBAAQkBAAi2hRgEAt4gG0QjJg0gbhLIgEgMQh1gOhngaQjJg1gbhKQgNgkAggeQiVgwgXg/QgbhLCjg1QCSguDegFIAYgIIATgFQDVg8FMAAQFLAAEAA8IAXAFQDrA6AdBQIADAJQBCANA9ASQDAA4AdBPQAdBOiYA5QgoAOgvAKIACAFQAbBKiiA1QhVAbhwANQgbAOgnAMQijA0kBAAQkBAAjJg0gA2gsTQgxgRglgSQiDgRhrgmQjOhHAAhlIAAgFQg5gPgzgTQjChMAAhrQAAhrDChMQA+gXBGgQIgCgOQAAhtDyhNIAXgHQEJhRF3AAQC6AACgAUQAahSCug8QDOhHEiAAQEiAADOBHQAxARAkASQCDATBsAkQDNBIAABkIAAAGQA5AOAzAUQDDBLAABrQAABsjDBKQg9AZhGAQIABANQAABsjxBOIgYAIQhkAfhzASQgwAuhhAmQi+BKkNAAQingBiJgcQgcAMgiAMQjOBIkigBQkjABjNhIg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-460.1,-197.5,920.3,395);


(lib.Thebody = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B3B3B3").s().p("AoXEjQpHAUlbgWQQJg+GfgtQgGBDADBIICkBfQgZiIAHh0QFhgwFWhWQiiESm0AGIB4BqQAsgDAqgFQiDBOl0A3IglABQmwAAAIj7gAJhFyQFAhjBnkqQBogfBngiQDNDtC0gIQCzgHBihUQALgJAJgKQEbFgyZAAQi+AAjkgJgA7tD8QApgFApgIIgYAYIg6gLgA+3B+QABgRALgSIAbAjIgYAAIgPAAgA1ghBIh2ByQjKA+iPAMQEciKCzgygAEBodQGRAMEhAPIAAAAIABAAICyAJIqhgBQr1AesIB7IhXBVQiAgJh8AVQiBjUcNhJg");
	this.shape.setTransform(-180.5595,106.8722);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AFeIKQG0gGCikSQlWBWlhAwQgHB0AZCIIilhfQgDhIAGhDQmdAtwKA+IknARIAtgrIAYgYQgpAIgpAFQj4Acj4hbIAAiRQCABPCmADIAnAAIgbgjIgvg8QEZjtE2gyQB8gVCAAJIBXhVQMIh7L1geIKhABICPAAIAJgQQiogpiiAvIgBABIAAgBICYlEQCzBcBmB6QBRgzB0AAQDUAAB4B4QB4B4gPDIQgNCxhQBWQgJAKgLAJQhiBUizAHQi0AIjNjuQhnAihoAfQhnErlABjQhTAahhAMQgqAFgsADgA6wFPQCPgMDKg+IB2hzQizAykcCLg");
	this.shape_1.setTransform(-193.2718,85.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#880808").s().p("AoXEjQpHAUlbgWQQJg+GfgtQgGBDADBIICkBfQgZiIAHh0QFhgwFWhWQiiESm0AGIB4BqQAsgDAqgFQiDBOl0A3IglABQmwAAAIj7gAJhFyQFAhjBnkqQBogfBngiQDNDtC0gIQCzgHBihUQALgJAJgKQEbFgyZAAQi+AAjkgJgA7tD8QApgFApgIIgYAYIg6gLgA+3B+QABgRALgSIAbAjIgYAAIgPAAgA1ghBIh2ByQjKA+iPAMQEciKCzgygAEBodQGRAMEhAPIAAAAIABAAICyAJIqhgBQr1AesIB7IhXBVQiAgJh8AVQiBjUcNhJg");
	this.shape_2.setTransform(-180.5595,106.8722);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AFeIKQG0gGCikSQlWBWlhAwQgHB0AZCIIilhfQgDhIAGhDQmdAtwKA+IknARIAtgrIAYgYQgpAIgpAFQjUAYjTg/QglgLgkgNIAAiRQAjAVAmAQQBkArB5ACIAnAAIgbgjIgvg8QEZjtE2gyQB8gVCAAJIBXhVQMIh7L1geIKhABICPAAIAJgQQiogpiiAvIgBABIAAgBICYlEQCzBcBmB6QBRgzB0AAQDUAAB4B4QB4B4gPDIQgNCxhQBWQgJAKgLAJQhiBUizAHQi0AIjNjuQhnAihoAfQhnErlABjQhTAahhAMQgqAFgsADgA6wFPQCPgMDKg+IB2hzQizAykcCLg");
	this.shape_3.setTransform(-193.2718,85.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AE5IKQG0gGCjkSQlWBWliAwQgHB0AZCIIikhfQgDhIAFhDQmdAtwJA+IknARIAtgrIAYgYQgpAIgqAFQjTAYjUg/IAAiEQBlArB5ACIAnAAIgbgjIgwg8QEajtE2gyQB7gVCAAJIBYhVQMHh7L1geIKiABICOAAIAKgQQiogpiiAvIgBABIAAgBICXlEQC0BcBlB6QBRgzB0AAQDUAAB4B4QB4B4gODIQgNCxhQBWQgJAKgLAJQhjBUizAHQi0AIjMjuQhnAihoAfQhnErlABjQhTAahhAMQgqAFgtADgA7VFPQCQgMDJg+IB2hzQizAykcCLg");
	this.shape_4.setTransform(-189.6468,85.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_4},{t:this.shape_2}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-407.5,22.9,428.5,138.2);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("AmenPQMOhjAuOEIAACI");
	this.shape.setTransform(139.55,48.0602);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AnvROQH0kslzoRQgogWgmgcIAAHtIrOpYIH3iBQheiigBjIQABkwDWjWQCcicDKgqQMNhjAvOFQgbASgbAaQguAvAABCQAABCAuAuQAvAuBCAAIARgBIG4ChIqrISIAAovQg4A1g9AnQn/KcJ1C5g");
	this.shape_1.setTransform(116.3,110.8852);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AEiIJQgvgvAAhCQAAhBAvgvQAbgbAbgRIAACHIAAiHQgvuFsNBjQBMgQBUAAQEvgBDWDXQDWDWAAEvQAAAfgCAdQAPgBAgAzQAhAzAABDQAABCgIA2QgHAvgyAHIgRAAQhCAAgvgug");
	this.shape_2.setTransform(146.625,56.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,-0.3,232.6,221.4), null);


(lib.restart = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AogMJQk3jyg7mEQgokJBejtIi4i3ILFjCIi7LHIilijQgkCPAYCcQAuEuDzC9QDyC9ExgfQExgfDIjpQDJjpgQkxQgPkxjfjUQjejUkzAAIAAjZQGJAAEeEQQEdEQAUGHQAUGHkBErQkBErmIAoQg3AFg2AAQlFAAkMjQg");
	this.shape.setTransform(20.5222,32.5832);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.545)").s().p("AgJCKQgLgGgFgLQgFgLAAgXIAAiQIgiAAIAAgHQANgFAOgNQANgMALgRIAOggIAHAAIAABGIAyAAIAAAQIgyAAIAACLQAAAVAGAHQAGAHAJAAQAIAAAHgFQAIgFAEgJIAJAAQgIAXgPAMQgPALgQAAQgLAAgJgGg");
	this.shape_1.setTransform(10.375,-62.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.545)").s().p("AhNBvIAAgJQARAAAIgFQAGgEACgIIABgXIAAhSIgBgtQgCgHgEgDQgEgEgGABQgHgBgKAEIgCgJIBBgaIAKAAIAAAxQAagwAcgBQANABAJAHQAIAIAAAKQAAAKgGAGQgHAHgIAAQgIgBgKgHQgKgJgFAAQgEAAgFAFQgLAJgKAXIAABlQAAASAEAJQADAHAHAEQAIAEAOAAIAAAJg");
	this.shape_2.setTransform(-4.2,-59.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.545)").s().p("AhSBhQgPgPAAgZQABgPAGgMQALgQAXgOQAYgNA2gUIAAgIQAAghgKgMQgKgLgTAAQgOAAgJAIQgJAHAAALIABANQAAALgGAGQgGAGgJAAQgIAAgFgGQgGgGAAgLQAAgUAVgRQAUgRAmAAQAbAAASAKQAOAHAGAQQAFAKAAAfIAABIIABAlQABAHADADIAGACIAHgCIASgRIAAANQgaAjgYAAQgLAAgHgHQgHgIAAgUQggAagJAEQgMAGgOAAQgWAAgPgQgAgWAAQgTALgIALQgIALAAANQAAARAKAMQAKALANAAQASAAAcgYIAAhRg");
	this.shape_3.setTransform(-22.35,-59.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.545)").s().p("AgJCKQgLgGgFgLQgFgLAAgXIAAiQIgiAAIAAgHQANgFAOgNQANgMALgRIAOggIAHAAIAABGIAyAAIAAAQIgyAAIAACLQAAAVAGAHQAGAHAJAAQAIAAAHgFQAIgFAEgJIAJAAQgIAXgPAMQgPALgQAAQgLAAgJgGg");
	this.shape_4.setTransform(-40.175,-62.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.545)").s().p("AgrBrIgMgDQgGAAgDAHIgHAAIAAhNIAHAAQAHAhASAQQATARAWAAQAQAAAKgJQAKgKAAgNQAAgRgLgLQgLgLghgQQgigQgLgOQgKgNAAgVQAAgaASgSQASgSAdAAQAMAAASAGIAPADIAGgBIAFgIIAIAAIAABJIgIAAQgJgigNgNQgPgMgUAAQgQAAgLAJQgKAIAAALQAAANAIAJQAHAKAWALIAiAQQAvAXAAAmQAAAdgWASQgWASgcAAQgSAAgagHg");
	this.shape_5.setTransform(-56.075,-59.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.545)").s().p("Ag+BUQgcgeAAgzQAAg2AcgfQAdgfApAAQAkAAAYAYQAXAYAAAnIiUAAQAAAvAYAbQAXAcAfAAQAVAAAPgMQAQgMAKgcIAIAFQgFAggYAbQgYAagjAAQgmAAgbgegAAqgnQgBgVgEgIQgGgNgMgIQgLgHgMAAQgTAAgQAPQgPAPgDAbIBjAAIAAAAg");
	this.shape_6.setTransform(-76.175,-59.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.545)").s().p("ABJCfIhqiUIgUAAIgGAAIgIAAIAABcQAAAeAHAHQAJAKASAAIAMAAIAAAJIiIAAIAAgJIAMAAQAUAAAJgNQAFgHAAgbIAAjNQAAgegHgHQgJgKgSAAIgMAAIAAgJIB0AAQAxAAAZAIQAXAHARAUQARAUAAAbQAAAegTAVQgTAVgoAIIBBBbQAXAgAQAKQAQAKAaADIAAAJgAhDiIIAACEIAIABIAGAAQAtAAAWgUQAXgUAAgeQAAgdgSgTQgTgTgeAAQgNAAgYAEg");
	this.shape_7.setTransform(-102.425,-64.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,255,26,0.541)").s().p("AgJCEQgKgGgEgLQgFgKgBgWIAAiJIgfAAIAAgHQAMgFANgLQANgMAJgQIAOgfIAGAAIAABDIAwAAIAAAPIgwAAIAACEQABATAFAHQAGAHAJAAQAHAAAHgEQAHgFADgJIAJAAQgHAWgOALQgPALgPAAQgKAAgJgFg");
	this.shape_8.setTransform(10,-58.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,255,26,0.541)").s().p("AhJBpIAAgIQAQAAAIgFQAFgEACgHIABgWIAAhOIgBgqQgBgHgEgDQgEgDgGAAQgHAAgJADIgCgIIA+gZIAJAAIAAAuQAZguAbAAQAMAAAIAHQAIAIAAAKQAAAIgGAHQgGAFgIAAQgHABgKgIQgKgIgEAAQgEAAgFAEQgKAKgKAUIAABhQAAASAEAIQACAGAIAEQAHAEAOAAIAAAIg");
	this.shape_9.setTransform(-3.875,-55.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,255,26,0.541)").s().p("AAcBjQgHgHAAgTQgfAZgHADQgMAGgOAAQgVAAgOgOQgOgOAAgZQAAgOAHgLQAJgPAXgOQAXgMAzgTIAAgIQAAgfgKgLQgJgLgSAAQgOAAgJAHQgIAIAAAKIAAANQAAAJgEAHQgGAFgJAAQgHAAgFgGQgGgFAAgKQAAgUATgQQAUgQAjAAQAbAAARAJQANAHAHAPQADAJAAAeIAABEIABAkQACAHADACIAFACIAHgBIASgRIAAAMQgZAigXAAQgLAAgGgIgAgWAAQgRAKgIALQgIALAAAMQAAARAKAKQAKAKANAAQAQABAbgXIAAhNg");
	this.shape_10.setTransform(-21.05,-55.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,255,26,0.541)").s().p("AgJCEQgKgGgEgLQgGgKAAgWIAAiJIggAAIAAgHQAMgFANgLQANgMALgQIAMgfIAHAAIAABDIAwAAIAAAPIgwAAIAACEQAAATAHAHQAFAHAIAAQAIAAAHgEQAHgFADgJIAJAAQgHAWgOALQgPALgPAAQgKAAgJgFg");
	this.shape_11.setTransform(-38,-58.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,255,26,0.541)").s().p("AgoBmIgMgDQgGAAgCAGIgIAAIAAhIIAIAAQAFAeASAQQASAQAVAAQAPAAAKgJQAKgJAAgNQAAgPgLgKQgLgLgfgQQghgPgJgNQgLgMABgUQgBgZASgRQARgRAbAAQALAAASAFIAPADIAFgBIAFgHIAHAAIAABFIgHAAQgJgggNgMQgNgMgTAAQgRAAgJAJQgJAHAAALQAAAMAGAJQAIAJAVAKIAfAQQAtAWAAAjQAAAcgUARQgWARgZAAQgTAAgXgGg");
	this.shape_12.setTransform(-53.1,-55.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,255,26,0.541)").s().p("Ag7BPQgagcAAgwQAAg0AbgdQAagdAoAAQAiAAAWAXQAWAWAAAmIiMAAQAAAsAWAaQAXAaAdAAQAUAAAPgLQAOgLAKgbIAHAEQgEAfgXAaQgWAYgiAAQgkAAgagdgAAoglQgBgTgEgJQgGgMgKgHQgMgHgLAAQgSgBgPAPQgOAPgDAZIBeAAIAAAAg");
	this.shape_13.setTransform(-72.225,-55.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,255,26,0.541)").s().p("ABGCXIhmiNIgSAAIgGAAIgHAAIAABYQAAAcAGAHQAJAKAQAAIAMAAIAAAIIiBAAIAAgIIALAAQAUAAAIgNQAEgGAAgaIAAjDQAAgcgGgHQgJgKgRAAIgLAAIAAgIIBuAAQAvAAAXAHQAXAHAQATQAQATAAAaQAAAbgSAVQgTAUgmAIIA+BXQAWAeAPAJQAPAKAZADIAAAIgAg/iBIAAB+IAHAAIAFAAQArAAAWgTQAVgSABgeQgBgbgSgSQgRgSgcAAQgNAAgWAEg");
	this.shape_14.setTransform(-97.15,-60);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006F10").s().p("AgJCEQgKgGgEgLQgFgKgBgWIAAiJIgfAAIAAgHQAMgFANgLQANgMAJgQIAOgfIAGAAIAABDIAwAAIAAAPIgwAAIAACEQABATAFAHQAGAHAJAAQAHAAAHgEQAHgFADgJIAJAAQgHAWgOALQgPALgPAAQgKAAgJgFg");
	this.shape_15.setTransform(10,-58.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006F10").s().p("AhJBpIAAgIQAQAAAIgFQAFgEACgHIABgWIAAhOIgBgqQgBgHgEgDQgEgDgGAAQgHAAgJADIgCgIIA+gZIAJAAIAAAuQAZguAbAAQAMAAAIAHQAIAIAAAKQAAAIgGAHQgGAFgIAAQgHABgKgIQgKgIgEAAQgEAAgFAEQgKAKgKAUIAABhQAAASAEAIQACAGAIAEQAHAEAOAAIAAAIg");
	this.shape_16.setTransform(-3.875,-55.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006F10").s().p("AAcBjQgHgHAAgTQgfAZgHADQgMAGgOAAQgVAAgOgOQgOgOAAgZQAAgOAHgLQAJgPAXgOQAXgMAzgTIAAgIQAAgfgKgLQgJgLgSAAQgOAAgJAHQgIAIAAAKIAAANQAAAJgEAHQgGAFgJAAQgHAAgFgGQgGgFAAgKQAAgUATgQQAUgQAjAAQAbAAARAJQANAHAHAPQADAJAAAeIAABEIABAkQACAHADACIAFACIAHgBIASgRIAAAMQgZAigXAAQgLAAgGgIgAgWAAQgRAKgIALQgIALAAAMQAAARAKAKQAKAKANAAQAQABAbgXIAAhNg");
	this.shape_17.setTransform(-21.05,-55.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#006F10").s().p("AgJCEQgKgGgEgLQgGgKAAgWIAAiJIggAAIAAgHQAMgFANgLQANgMALgQIAMgfIAHAAIAABDIAwAAIAAAPIgwAAIAACEQAAATAHAHQAFAHAIAAQAIAAAHgEQAHgFADgJIAJAAQgHAWgOALQgPALgPAAQgKAAgJgFg");
	this.shape_18.setTransform(-38,-58.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#006F10").s().p("AgoBmIgMgDQgGAAgCAGIgIAAIAAhIIAIAAQAFAeASAQQASAQAVAAQAPAAAKgJQAKgJAAgNQAAgPgLgKQgLgLgfgQQghgPgJgNQgLgMABgUQgBgZASgRQARgRAbAAQALAAASAFIAPADIAFgBIAFgHIAHAAIAABFIgHAAQgJgggNgMQgNgMgTAAQgRAAgJAJQgJAHAAALQAAAMAGAJQAIAJAVAKIAfAQQAtAWAAAjQAAAcgUARQgWARgZAAQgTAAgXgGg");
	this.shape_19.setTransform(-53.1,-55.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#006F10").s().p("Ag7BPQgagcAAgwQAAg0AbgdQAagdAoAAQAiAAAWAXQAWAWAAAmIiMAAQAAAsAWAaQAXAaAdAAQAUAAAPgLQAOgLAKgbIAHAEQgEAfgXAaQgWAYgiAAQgkAAgagdgAAoglQgBgTgEgJQgGgMgKgHQgMgHgLAAQgSgBgPAPQgOAPgDAZIBeAAIAAAAg");
	this.shape_20.setTransform(-72.225,-55.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#006F10").s().p("ABGCXIhmiNIgSAAIgGAAIgHAAIAABYQAAAcAGAHQAJAKAQAAIAMAAIAAAIIiBAAIAAgIIALAAQAUAAAIgNQAEgGAAgaIAAjDQAAgcgGgHQgJgKgRAAIgLAAIAAgIIBuAAQAvAAAXAHQAXAHAQATQAQATAAAaQAAAbgSAVQgTAUgmAIIA+BXQAWAeAPAJQAPAKAZADIAAAIgAg/iBIAAB+IAHAAIAFAAQArAAAWgTQAVgSABgeQgBgbgSgSQgRgSgcAAQgNAAgWAEg");
	this.shape_21.setTransform(-97.15,-60);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AoELjQkojmg4lxQgmj8BajhIiwiuIKii4IiyKkIicibQgjCIAXCTQAsEgDnCzQDmCzEhgdQEigeC+jdQC/jdgPkiQgPkijTjJQjTjKkkAAIAAjOQF2AAEPEDQEPECATF0QATFzj0EcQj0Ecl0AmQg1AFgzAAQk1AAj+jFg");
	this.shape_22.setTransform(19.5936,31.8944);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121,-93.1,246.1,224.2);


(lib.Music = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("Forestofdreams");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjeCeIjIAAIAAkLIDIAAIKFkZIAAMMg");
	this.shape.setTransform(-84.675,20.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Aj9EsQhskxB3kxQB3kxEfiaICNEJQi+BlhPDJQhNDJBGDJQBIDKC6BsIiWEEQkZilhtkxg");
	this.shape_1.setTransform(-17.6694,20.3191,0.4199,0.4199,178.2364);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AkbDwQg9kgB8kLQB9kLEDiKICMEJQirBbhSCwQhRCwAnC9QAoC+CTCAIjEDhQjejAg9kgg");
	this.shape_2.setTransform(9.9195,19.879,0.72,0.72,172.9991);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AjXEiQh0kVBlkaQBmkcEIiNIB1DbQi0BghFDBQhEDABOC9QBPC8C5BXIhpDhQkPh/h1kWg");
	this.shape_3.setTransform(48.7829,20.6555,1,1,-175.9995);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AjTCXIi+AAIAAj+IC+AAIJlkLIAALlg");
	this.shape_4.setTransform(-81.7,20.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3,p:{scaleX:1,scaleY:1,rotation:-175.9995,x:48.7829,y:20.6555}},{t:this.shape_2,p:{scaleX:0.72,scaleY:0.72,rotation:172.9991,x:9.9195,y:19.879}},{t:this.shape_1,p:{scaleX:0.4199,scaleY:0.4199,rotation:178.2364,x:-17.6694,y:20.3191}},{t:this.shape,p:{scaleX:1,scaleY:1,x:-84.675,y:20.9}}]}).to({state:[{t:this.shape_4},{t:this.shape_3,p:{scaleX:0.95,scaleY:0.95,rotation:-175.9998,x:45.0786,y:20.5978}},{t:this.shape_2,p:{scaleX:0.684,scaleY:0.684,rotation:172.9996,x:8.2072,y:19.864}},{t:this.shape_1,p:{scaleX:0.3989,scaleY:0.3989,rotation:178.2377,x:-17.993,y:20.2553}}]},1).to({state:[{t:this.shape,p:{scaleX:0.9,scaleY:0.9,x:-78.707,y:20.7599}},{t:this.shape_3,p:{scaleX:0.9,scaleY:0.9,rotation:-176.0002,x:41.3742,y:20.49}},{t:this.shape_2,p:{scaleX:0.648,scaleY:0.648,rotation:173.0002,x:6.4448,y:19.799}},{t:this.shape_1,p:{scaleX:0.3779,scaleY:0.3779,rotation:178.237,x:-18.3632,y:20.1882}}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127,-49.9,203.6,139);


(lib.arrow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADoDWQ4YguyhEeIAesfQRhCnYMh1IlYq8QcPLDNhErMgrNAPZg");
	this.shape.setTransform(60.025,0.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9E9E9").s().p("AD9DqQ6lgz0LE4IAhtnQTGC2aXh/Il4r7QezMCOuFGMgvGAQxg");
	this.shape_1.setTransform(60.025,0.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF667").s().p("ADoDWQ4YguyhEeIAesfQRhCnYMh1IlYq8QcPLDNhErMgrNAPZg");
	this.shape_2.setTransform(60.025,0.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-213.9,-108,547.9,217.1);


(lib.Steph = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(191,142.95,1,1,0,0,0,116.3,110.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:200.65,y:148.7},0).wait(1).to({x:210.65,y:153.9},0).wait(1).to({x:220.95,y:158.45},0).wait(1).to({x:231.55,y:162.2},0).wait(1).to({x:242.4,y:165.15},0).wait(1).to({x:253.5,y:167.05},0).wait(1).to({x:264.75,y:167.9},0).wait(1).to({x:276,y:167.6},0).wait(1).to({x:287.15,y:166.1},0).wait(1).to({x:298.1,y:163.4},0).wait(1).to({x:308.7,y:159.65},0).wait(1).to({x:318.9,y:154.9},0).wait(1).to({x:328.65,y:149.3},0).wait(1).to({x:338,y:142.95},0).wait(1).to({x:331.15,y:150.75},0).wait(1).to({x:322.1,y:156.15},0).wait(1).to({x:312.4,y:160.3},0).wait(1).to({x:302.35,y:163.55},0).wait(1).to({x:292.1,y:166},0).wait(1).to({x:281.65,y:167.75},0).wait(1).to({x:271.15,y:168.85},0).wait(1).to({x:260.6,y:169.15},0).wait(1).to({x:250.1,y:168.55},0).wait(1).to({x:239.6,y:167},0).wait(1).to({x:229.35,y:164.55},0).wait(1).to({x:219.4,y:161.1},0).wait(1).to({x:209.85,y:156.55},0).wait(1).to({x:201.1,y:150.7},0).wait(1).to({x:194,y:142.95},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(74.7,32.1,379.6,247.70000000000002);


// stage content:
(lib.ezra = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [1,65,200,214,273];
	// timeline functions:
	this.frame_1 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.Arrow.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_11.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_11()
		{
			this.gotoAndPlay(3);
		}
	}
	this.frame_65 = function() {
		this.stop();
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.Arrow_1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_2()
		{
			this.gotoAndPlay(65);
		}
	}
	this.frame_200 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.arrow1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_4.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_4()
		{
			this.gotoAndPlay(202);
		}
	}
	this.frame_214 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.body.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_8.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_8()
		{
			this.gotoAndPlay(216);
		}
	}
	this.frame_273 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		
		
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.restart.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_10.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_10()
		{
			this.gotoAndPlay(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(64).call(this.frame_65).wait(135).call(this.frame_200).wait(14).call(this.frame_214).wait(59).call(this.frame_273).wait(2));

	// arrow
	this.instance = new lib.Music();
	this.instance.setTransform(768.65,20.45,0.41,0.41,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Music(), 3);

	this.Arrow = new lib.arrow();
	this.Arrow.name = "Arrow";
	this.Arrow.setTransform(339.6,369.3,0.1996,0.1996,-131.6074,0,0,20.2,0.6);
	this.Arrow.alpha = 0.5391;
	new cjs.ButtonHelper(this.Arrow, 0, 1, 2, false, new lib.arrow(), 3);

	this.Arrow_1 = new lib.arrow();
	this.Arrow_1.name = "Arrow_1";
	this.Arrow_1.setTransform(438.95,517.7,0.1996,0.1996,-131.6074,0,0,0.5,-0.2);
	this.Arrow_1.alpha = 0.5391;
	new cjs.ButtonHelper(this.Arrow_1, 0, 1, 2, false, new lib.arrow(), 3);

	this.arrow1 = new lib.arrow();
	this.arrow1.name = "arrow1";
	this.arrow1.setTransform(113.95,512.45,0.37,0.37,175.003,0,0,0.1,0.3);
	new cjs.ButtonHelper(this.arrow1, 0, 1, 2, false, new lib.arrow(), 3);

	this.restart = new lib.restart();
	this.restart.name = "restart";
	this.restart.setTransform(383.7,411.5,0.54,0.54,0,0,0,0.3,0.4);
	new cjs.ButtonHelper(this.restart, 0, 1, 2, false, new lib.restart(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Arrow},{t:this.instance}]}).to({state:[]},2).to({state:[{t:this.Arrow_1}]},63).to({state:[]},1).to({state:[{t:this.arrow1}]},134).to({state:[]},1).to({state:[{t:this.restart}]},72).wait(2));

	// mc
	this.instance_1 = new lib.Steph("synched",0);
	this.instance_1.setTransform(141.35,464.7,1,1,0,0,0,116.3,110.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},50).wait(15).to({_off:false,startPosition:5},0).to({scaleX:1.56,scaleY:1.56,x:165.1,y:383.4,startPosition:25},50).to({_off:true},1).wait(159));

	// Words
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.706)").s().p("AA9BzIg4iOIhACOIgJAAIhIi7QgHgSgHgGQgHgGgPgDIAAgJIBeAAIAAAJQgNABgEADQgEAEAAAHQAAAHAEALIAwCAIAwhoIgMghQgGgPgKgFQgFgEgPAAIAAgJIBqAAIAAAJQgSAAgHAGQgFAEAAAIIACAKIAzCAIAvh7QAFgNAAgIQAAgFgFgDQgFgEgOAAIAAgJIBHAAIAAAJQgWADgKAZIhKDAg");
	this.shape.setTransform(259.975,117.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.706)").s().p("AAMCtIAAgJIAFAAQAQAAAGgEQAGgFADgJIAAgXIAAhPQAAglgEgKQgDgLgJgHQgIgFgMAAQgMAAgLAGQgOAGgRATIAAB2QAAAXACAGQACAFAIAEQAGADASAAIAAAJIhwAAIAAgJQAQAAAIgEQAFgCADgHQADgHAAgVIAAjJQAAgngCgIQgCgJgEgEQgEgDgGAAIgRAEIgDgIIBDgbIAMAAIAACjQAbgeAPgIQAPgJAQABQATgBANALQAOALAHAVQAFAQgBApIAABPQABAVADAIQACAGAHAEQAFACAQAAIAAAJg");
	this.shape_1.setTransform(290.6,111);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.706)").s().p("AhBBXQgdgfAAg1QAAg5AegfQAdghAsAAQAlAAAYAZQAZAZAAApIiaAAQAAAxAYAcQAZAdAgAAQAVAAARgMQAQgMALgeIAIAFQgGAigYAbQgZAcglAAQgnAAgdgggAArgpQgBgVgEgJQgGgOgMgIQgMgHgMAAQgUAAgQAPQgQAQgDAcIBmAAIAAAAg");
	this.shape_2.setTransform(314.425,117.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.706)").s().p("AhQBzIAAgJQARAAAJgFQAGgEACgIIACgYIAAhWIgCgvQgCgHgEgDQgEgEgHAAQgHAAgKAEIgCgJIBEgbIAKAAIAAAyQAbgyAdAAQAOAAAJAIQAIAIAAALQAAAJgGAHQgGAHgJAAQgJgBgKgHQgLgJgFAAQgEAAgFAEQgLAKgLAYIAABqQAAATAEAJQADAGAIAFQAIAEAPAAIAAAJg");
	this.shape_3.setTransform(333.875,116.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.706)").s().p("AhBBXQgdgfAAg1QAAg5AegfQAdghAsAAQAlAAAYAZQAZAZAAApIiaAAQAAAxAYAcQAZAdAgAAQAVAAARgMQAQgMALgeIAIAFQgGAigYAbQgZAcglAAQgnAAgdgggAArgpQgBgVgEgJQgGgOgMgIQgMgHgMAAQgUAAgQAPQgQAQgDAcIBmAAIAAAAg");
	this.shape_4.setTransform(314.425,117.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.706)").s().p("AAeBtQgHgIAAgUQghAagJAEQgNAGgPAAQgXAAgPgPQgQgQABgaQgBgRAIgMQAJgQAagPQAYgNA5gVIAAgJQAAgigKgMQgLgNgUAAQgPAAgJAJQgKAIAAALIABAOQAAALgFAGQgHAGgJAAQgJAAgGgGQgFgGAAgLQAAgVAVgSQAWgRAnAAQAdAAASAKQAPAHAHAQQAEALAAAgIAABLIABAnQACAIADACIAGACIAGgBIAUgSIAAAOQgbAkgZAAQgMAAgHgIgAgYAAQgTALgJAMQgHALgBAOQAAASALAMQALALANAAQASAAAegYIAAhVg");
	this.shape_5.setTransform(388.5,117.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.706)").s().p("ABRBzIAAgJIAFAAQAOAAAIgFQAGgEACgJIABgXIAAhgQAAgbgGgLQgKgQgVAAQgNAAgNAHQgNAGgSASIgBADIABAKIAABqQAAAWACAGQADAFAHAEQAHAEARAAIAAAJIhwAAIAAgJQASAAAHgEQAHgFADgIIABgYIAAhgQAAgbgIgMQgLgQgTAAQgNAAgNAIQgUAKgLAOIAAB3QAAAWADAGQADAHAGADQAGADASAAIAAAJIhuAAIAAgJQAPAAAGgDQAGgDADgIQADgHAAgUIAAhVQAAglgCgLQgBgHgEgDQgEgEgGAAQgHAAgJAEIgEgJIBDgbIALAAIAAAvIAdgcQALgJAMgFQANgFAMAAQAVAAAPAMQAPAMAFAXQAZgdARgJQASgJASAAQASAAAOAJQANAJAIAVQAGAOAAAeIAABgQAAAVADAHQACAGAHADQAHAEAOAAIAAAJg");
	this.shape_6.setTransform(418.225,116.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.706)").s().p("AhGClIAAgJIALAAQAVABAKgMQAFgJAAgdIAAjVQABgZgEgIQgCgHgIgDQgLgGgMgBIgLAAIAAgJICNAAIAAAJIgMAAQgVAAgJANQgGAHAAAeIAADVQAAAZAEAIQACAGAIAEQAKAHAMgBIAMAAIAAAJg");
	this.shape_7.setTransform(458.4,111.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.706)").s().p("AgXClQgIgJAAgLQAAgLAIgIQAIgIALAAQALAAAIAIQAIAIAAALQAAALgJAJQgIAIgKgBQgLABgIgIgAgKBYQABgfAGgUQAFgUATgjQAPgbAEgQQAEgOAAgPQAAgfgQgSQgQgTgXAAQgWAAgMAKQgMAKAAAMQAAAJAHANQAIANAAAHQAAAJgGAGQgGAGgIAAQgKAAgIgKQgJgKAAgSQAAgcAYgWQAYgUAogBQAxABAYAcQASAWAAAbQAAARgIATQgIASgWAaQgkAngIARQgIARAAAdg");
	this.shape_8.setTransform(477.925,111.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.706)").s().p("AgKCQQgLgGgFgMQgFgLAAgYIAAiWIgjAAIAAgIQANgFAOgNQAOgNALgRIAPgiIAHAAIAABJIA1AAIAAARIg1AAIAACQQAAAWAHAIQAGAHAKAAQAIAAAHgFQAIgFAEgKIAJAAQgIAYgQAMQgPAMgRAAQgLAAgKgGg");
	this.shape_9.setTransform(194.375,173.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.706)").s().p("Ag0CuIAAgJQARgBAGgDQAFgDAEgHQADgHAAgVIAAhWQAAglgCgKQgCgHgEgDQgEgDgGAAQgGAAgLAEIgDgJIBCgcIALAAIAACzQABAVADAHQACAHAHADQAGADAPABIAAAJgAgPiCQgHgIAAgKQAAgLAHgGQAIgIAJABQAKgBAHAIQAIAGAAALQAAAKgIAIQgHAHgKAAQgJAAgIgHg");
	this.shape_10.setTransform(233.05,170.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.706)").s().p("AAMCuIAAgJIAFAAQAPAAAHgFQAGgFADgJIAAgXIAAhPQAAglgDgKQgFgMgIgFQgIgGgMAAQgMAAgMAGQgNAHgRASIAAB2QgBAXADAFQADAGAGAEQAIAEARAAIAAAJIhvAAIAAgJQAPAAAIgFQAFgDADgGQADgHAAgVIAAjKQAAgmgCgJQgCgIgDgDQgFgDgGAAIgQADIgEgJIBDgaIAMAAIAACjQAageAQgIQAPgIAQgBQATABAOAKQANAKAHAXQAFAPAAApIAABPQAAAVADAIQADAGAGADQAFADAQABIAAAJg");
	this.shape_11.setTransform(213.5,170.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.706)").s().p("AgsBvIgOgDQgFABgDAGIgIAAIAAhQIAIAAQAHAjATARQATARAXAAQARAAALgKQAKgKAAgOQAAgRgMgLQgMgMgigRQgjgQgLgPQgLgOAAgVQAAgbATgTQATgTAeAAQAMABATAFIAQAEIAGgCIAFgIIAIAAIAABMIgIAAQgJgjgOgNQgPgNgVAAQgSAAgKAJQgLAIAAAMQAAANAIAKQAIAKAXAMIAjARQAxAXAAAoQAAAegXATQgXASgcAAQgUABgagIg");
	this.shape_12.setTransform(249.925,176.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.706)").s().p("AgzCuIAAgJQAQgBAFgDQAGgDADgHQAEgHAAgVIAAhWQAAglgCgKQgCgHgEgDQgDgDgHAAQgGAAgKAEIgEgJIBCgcIALAAIAACzQAAAVAEAHQACAHAHADQAFADAQABIAAAJgAgPiCQgHgIAAgKQAAgLAHgGQAIgIAJABQAKgBAIAIQAHAGAAALQAAAKgHAIQgIAHgKAAQgJAAgIgHg");
	this.shape_13.setTransform(278.85,170.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.706)").s().p("AgsBvIgOgDQgFABgDAGIgIAAIAAhQIAIAAQAHAjATARQATARAXAAQARAAALgKQAKgKAAgOQAAgRgMgLQgMgMgigRQgjgQgLgPQgLgOAAgVQAAgbATgTQATgTAeAAQAMABATAFIAQAEIAGgCIAFgIIAIAAIAABMIgIAAQgJgjgOgNQgPgNgVAAQgSAAgKAJQgLAIAAAMQAAANAIAKQAIAKAXAMIAjARQAxAXAAAoQAAAegXATQgXASgcAAQgUABgagIg");
	this.shape_14.setTransform(249.925,176.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.706)").s().p("AALBzIAAgJIAGAAQAPAAAGgEQAGgFADgKIABgXIAAhaQAAgegIgPQgIgNgTAAQgcAAgcAfIAAB1QAAAXACAGQAEAGAFAEQAHADASAAIAAAJIhvAAIAAgJIAFAAQARAAAGgJQAGgIAAgZIAAhSQAAgogCgIQgCgJgDgEQgEgDgGAAQgIAAgJAEIgEgJIBEgbIALAAIAAAvQAngvAiAAQATAAANAJQANAJAIAVQAFAOAAAfIAABeQAAAVADAJQADAFAGAEQAGADARAAIAAAJg");
	this.shape_15.setTransform(317.65,176.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,0,0.706)").s().p("AgFBHIgNhHIgFgpQgBgPAHgHQAGgHALAAQAKAAAIAHQAGAHAAAMIgGAsIgNBHg");
	this.shape_16.setTransform(334.55,160.975);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.706)").s().p("AgKCQQgLgGgFgMQgFgLAAgYIAAiWIgjAAIAAgIQANgFAOgNQAOgNALgRIAPgiIAHAAIAABJIA1AAIAAARIg1AAIAACQQAAAWAHAIQAGAHAKAAQAIAAAHgFQAIgFAEgKIAJAAQgIAYgQAMQgPAMgRAAQgLAAgKgGg");
	this.shape_17.setTransform(194.375,173.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.706)").s().p("AA9BzIg4iOIhACOIgJAAIhIi7QgHgSgHgGQgHgGgPgDIAAgJIBeAAIAAAJQgNABgEADQgEAEAAAHQAAAHAEALIAwCAIAwhoIgMghQgGgPgKgFQgFgEgPAAIAAgJIBqAAIAAAJQgSAAgHAGQgFAEAAAIIACAKIAzCAIAvh7QAFgNAAgIQAAgFgFgDQgFgEgOAAIAAgJIBHAAIAAAJQgWADgKAZIhKDAg");
	this.shape_18.setTransform(259.975,117.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.706)").s().p("AAMCuIAAgJIAFAAQAQAAAGgFQAGgFACgJIABgXIAAhPQAAglgEgKQgDgMgJgFQgIgGgMAAQgMAAgLAGQgNAHgTASIAAB2QABAXACAFQACAGAIAEQAGAEARAAIAAAJIhuAAIAAgJQAOAAAJgFQAFgDADgGQADgHAAgVIAAjKQAAgmgCgJQgCgIgDgDQgEgDgHAAIgQADIgEgJIBDgaIALAAIAACjQAcgeAPgIQAPgIAQgBQATABANAKQAOAKAHAXQAEAPABApIAABPQAAAVADAIQADAGAFADQAGADAQABIAAAJg");
	this.shape_19.setTransform(414.05,170.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(0,0,0,0.706)").s().p("AhBBXQgdgfAAg1QAAg5AegfQAdghAsAAQAlAAAYAZQAZAZAAApIiaAAQAAAxAYAcQAZAdAgAAQAVAAARgMQAQgMALgeIAIAFQgGAigYAbQgZAcglAAQgnAAgdgggAArgpQgBgVgEgJQgGgOgMgIQgMgHgMAAQgUAAgQAPQgQAQgDAcIBmAAIAAAAg");
	this.shape_20.setTransform(314.425,117.175);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,0,0,0.706)").s().p("AhQBzIAAgJQARAAAJgFQAGgEACgJIACgYIAAhVIgCguQgCgIgEgEQgEgDgHAAQgHAAgKAEIgCgJIBEgbIAKAAIAAAyQAbgyAdAAQAOAAAJAIQAIAIAAALQAAAJgGAHQgGAGgJABQgJAAgKgJQgLgJgFAAQgEAAgFAGQgLAJgLAXIAABrQAAASAEAKQADAGAIAFQAIAEAPAAIAAAJg");
	this.shape_21.setTransform(457.325,176.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(0,0,0,0.706)").s().p("AhBBXQgdgfAAg1QAAg5AegfQAdghAsAAQAlAAAYAZQAZAZAAApIiaAAQAAAxAYAcQAZAdAgAAQAVAAARgMQAQgMALgeIAIAFQgGAigYAbQgZAcglAAQgnAAgdgggAArgpQgBgVgEgJQgGgOgMgIQgMgHgMAAQgUAAgQAPQgQAQgDAcIBmAAIAAAAg");
	this.shape_22.setTransform(314.425,117.175);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(0,0,0,0.706)").s().p("AgFBHIgNhHIgFgpQAAgPAFgHQAHgHALAAQAKAAAHAHQAIAHgBAMIgGAsIgNBHg");
	this.shape_23.setTransform(521.1,160.975);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(0,0,0,0.706)").s().p("AhGCmIAAgJIALAAQAVAAAKgNQAFgHAAgeIAAjVQABgZgEgIQgCgGgIgFQgLgFgMAAIgLAAIAAgJICNAAIAAAJIgMAAQgVgBgJAMQgGAJAAAdIAADVQAAAZAEAIQACAGAIAFQAKAFAMABIAMAAIAAAJg");
	this.shape_24.setTransform(508.35,171.15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(0,0,0,0.706)").s().p("ABRBzIAAgJIAFAAQAOAAAIgGQAGgEACgIIABgYIAAheQAAgcgGgMQgKgPgVAAQgNAAgNAGQgNAHgSARIgBADIABALIAABpQAAAYACAFQADAGAHAEQAHADARAAIAAAJIhwAAIAAgJQASAAAHgEQAHgEADgKIABgYIAAheQAAgcgIgMQgLgPgTAAQgNAAgNAGQgUALgLANIAAB3QAAAXADAGQADAHAGADQAGADASAAIAAAJIhuAAIAAgJQAPAAAGgDQAGgEADgGQADgIAAgVIAAhUQAAglgCgKQgBgIgEgEQgEgDgGAAQgHAAgJAEIgEgJIBDgbIALAAIAAAwIAdgcQALgKAMgFQANgFAMAAQAVAAAPAMQAPAMAFAYQAZgeARgJQASgJASAAQASAAAOAJQANAJAIAVQAGAOAAAfIAABeQAAAVADAJQACAEAHAFQAHADAOAAIAAAJg");
	this.shape_25.setTransform(545.175,176.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(0,0,0,0.706)").s().p("AgsBvIgOgDQgFAAgDAHIgIAAIAAhQIAIAAQAHAiATASQATARAXAAQARAAALgKQAKgKAAgOQAAgRgMgLQgMgLgigSQgjgQgLgPQgLgOAAgVQAAgcATgSQATgTAeAAQAMABATAFIAQADIAGgBIAFgIIAIAAIAABNIgIAAQgJglgOgNQgPgNgVABQgSgBgKAKQgLAIAAAMQAAANAIAKQAIAKAXAMIAjARQAxAXAAAoQAAAegXATQgXASgcABQgUAAgagIg");
	this.shape_26.setTransform(197.225,233.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(0,0,0,0.706)").s().p("Ah0CpIAAgJIAGAAQANgBAKgFQAEgCADgHQACgFAAgZIAAjSQAAgWgCgGQgCgGgEgDQgEgCgHAAIgPADIgDgIIBFgcIAJAAIAAA0QARgdASgMQAQgMATAAQAiAAAXAaQAbAhAAAzQAAA6ghAlQgbAfgqABQgRAAgNgGQgKgEgMgLIAABFQAAAXADAGQADAGAHADQAGAFASAAIAAAJgAgIh+QgJAEgUAWIAABUQAAAaACAIQAEAOANALQANALATAAQAZgBAPgSQAUgaAAgrQAAg0gXgcQgPgSgWgBQgMAAgKAHg");
	this.shape_27.setTransform(243.175,238.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(0,0,0,0.706)").s().p("AAuBzIAAgvQgdAfgPAIQgOAIgQAAQgUAAgNgLQgOgLgFgRQgFgRgBgfIAAhjQABgQgEgGQgDgGgHgDQgHgEgSABIAAgJIBPAAIAACUQAAAgALAJQAKAKAQAAQAJAAAOgHQANgGASgTIAAh9QABgTgIgHQgGgHgXAAIAAgJIBNAAIAACGQAAAnACAJQACAIADAEQAFADAFAAQAIAAAJgEIAEAIIhEAcg");
	this.shape_28.setTransform(219.1,234.225);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(0,0,0,0.706)").s().p("Ah0CpIAAgJIAGAAQANgBAKgFQAEgCADgHQACgFAAgZIAAjSQAAgWgCgGQgCgGgEgDQgEgCgHAAIgPADIgDgIIBFgcIAJAAIAAA0QARgdASgMQAQgMATAAQAiAAAXAaQAbAhAAAzQAAA6ghAlQgbAfgqABQgRAAgNgGQgKgEgMgLIAABFQAAAXADAGQADAGAHADQAGAFASAAIAAAJgAgIh+QgJAEgUAWIAABUQAAAaACAIQAEAOANALQANALATAAQAZgBAPgSQAUgaAAgrQAAg0gXgcQgPgSgWgBQgMAAgKAHg");
	this.shape_29.setTransform(243.175,238.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(0,0,0,0.706)").s().p("AhSBOQgZgiAAgqQAAgeAPgeQAQgfAZgOQAYgPAbAAQAzAAAfAnQAaAhAAArQAAAcgOAgQgPAegZAQQgZAQgeAAQgzAAgegpgAggheQgNAIgIATQgIATAAAeQAAAwATAkQATAjAfAAQAYAAAPgUQAQgTAAgvQAAg7gagiQgRgYgaAAQgNAAgNAIg");
	this.shape_30.setTransform(294.075,233.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(0,0,0,0.706)").s().p("AgsBvIgOgDQgFAAgDAHIgIAAIAAhQIAIAAQAHAiATASQATARAXAAQARAAALgKQAKgKAAgOQAAgRgMgLQgMgLgigSQgjgQgLgPQgLgOAAgVQAAgcATgSQATgTAeAAQAMABATAFIAQADIAGgBIAFgIIAIAAIAABNIgIAAQgJglgOgNQgPgNgVABQgSgBgKAKQgLAIAAAMQAAANAIAKQAIAKAXAMIAjARQAxAXAAAoQAAAegXATQgXASgcABQgUAAgagIg");
	this.shape_31.setTransform(197.225,233.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(0,0,0,0.706)").s().p("AhBBXQgdgfAAg1QAAg5AegfQAdghAsAAQAlAAAYAZQAZAZAAApIiaAAQAAAxAYAcQAZAdAgAAQAVAAARgMQAQgMALgeIAIAFQgGAigYAbQgZAcglAAQgnAAgdgggAArgpQgBgVgEgJQgGgOgMgIQgMgHgMAAQgUAAgQAPQgQAQgDAcIBmAAIAAAAg");
	this.shape_32.setTransform(314.425,117.175);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(0,0,0,0.706)").s().p("AAoCxIAAggQgRARgPAHQgPAIgSAAQgkAAgcgeQgbggAAgvQAAgxAegnQAegnAwAAQAdgBATAUIAAgqQAAgmgCgJQgCgJgEgDQgEgDgFAAIgRAEIgEgJIBDgbIALAAIAAEBQAAAnACAKQACAIAEADQAEAEAFAAQAHAAALgEIACAIIhCAcgAgxgZQgWAZAAAwQAAAyAVAaQAVAaAbAAQAVAAAVgWIAAhzQgCgQgHgOQgHgNgMgIQgMgGgLgBQgVABgRATg");
	this.shape_33.setTransform(361.575,228.05);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(0,0,0,0.706)").s().p("AgKCQQgLgGgFgMQgFgLAAgYIAAiWIgjAAIAAgIQANgFAOgNQAOgNALgRIAPgiIAHAAIAABJIA1AAIAAARIg1AAIAACQQAAAWAHAIQAGAHAKAAQAIAAAHgFQAIgFAEgKIAJAAQgIAYgQAMQgPAMgRAAQgLAAgKgGg");
	this.shape_34.setTransform(194.375,173.025);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(0,0,0,0.706)").s().p("AhSBOQgZgiAAgqQAAgeAPgeQAQgfAZgOQAYgPAbAAQAzAAAfAnQAaAhAAArQAAAcgOAgQgPAegZAQQgZAQgeAAQgzAAgegpgAggheQgNAIgIATQgIATAAAeQAAAwATAkQATAjAfAAQAYAAAPgUQAQgTAAgvQAAg7gagiQgRgYgaAAQgNAAgNAIg");
	this.shape_35.setTransform(294.075,233.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(0,0,0,0.706)").s().p("AglCqQgUgIgVgNIAAjnQAAgmgCgJQgCgJgEgDQgEgDgFAAQgHAAgLAEIgDgJIBDgbIALAAIAACiQAhgtAkAAQAjAAAZAdQAaAdAAAzQAAA7goAlQgiAfgpAAQgTAAgUgHgAgNgSQgKAFgPANIAACGQANAMANAHQAMAGAOAAQAWAAAUgZQATgYAAgvQAAgqgTgXQgUgXgYABQgMgBgNAHg");
	this.shape_36.setTransform(448.625,228.05);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(0,0,0,0.706)").s().p("AhBBXQgdgfAAg1QAAg5AegfQAdghAsAAQAlAAAYAZQAZAZAAApIiaAAQAAAxAYAcQAZAdAgAAQAVAAARgMQAQgMALgeIAIAFQgGAigYAbQgZAcglAAQgnAAgdgggAArgpQgBgVgEgJQgGgOgMgIQgMgHgMAAQgUAAgQAPQgQAQgDAcIBmAAIAAAAg");
	this.shape_37.setTransform(314.425,117.175);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(0,0,0,0.706)").s().p("AAMBzIAAgJIAFAAQAPAAAHgFQAFgFADgIIABgYIAAhaQAAgfgIgOQgIgNgTAAQgcAAgcAfIAAB1QgBAXADAFQAEAIAFADQAGADATAAIAAAJIhvAAIAAgJIAFAAQARAAAGgIQAGgJAAgZIAAhRQAAgpgCgIQgBgKgFgDQgDgDgHAAQgGAAgKAEIgEgJIBEgbIALAAIAAAvQAmgvAjAAQASAAAOAJQANAJAIAVQAFAPAAAeIAABeQAAAWAEAHQACAHAHADQAFADAQAAIAAAJg");
	this.shape_38.setTransform(274.7,306.05);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(0,0,0,0.706)").s().p("AhGClIAAgJIAMAAQAUAAAKgLQAFgJABgdIAAjVQAAgZgEgIQgDgGgHgFQgLgFgLAAIgMAAIAAgJICNAAIAAAJIgMAAQgUAAgKAMQgGAHAAAeIAADVQAAAZADAIQADAGAHAFQALAFAMAAIAMAAIAAAJg");
	this.shape_39.setTransform(241.35,301);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(0,0,0,0.706)").s().p("AAoCxIAAggQgRARgPAIQgPAHgSAAQgkAAgcgfQgbgeAAgxQAAgvAegnQAegoAwgBQAdABATASIAAgpQAAgmgCgJQgCgJgEgDQgEgDgFAAIgRADIgEgIIBDgbIALAAIAAECQAAAnACAIQACAJAEAEQAEADAFAAQAHAAALgEIACAIIhCAcgAgxgZQgWAZAAAwQAAAxAVAbQAVAaAbAAQAVAAAVgWIAAh0QgCgPgHgNQgHgPgMgGQgMgIgLABQgVgBgRAUg");
	this.shape_40.setTransform(344.825,300.55);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(0,0,0,0.706)").s().p("AhSBOQgZgiAAgqQAAgeAPgeQAQgeAZgPQAYgOAbAAQAzAAAfAmQAaAhAAAqQAAAegOAeQgPAfgZAPQgZARgegBQgzAAgegogAggheQgNAHgIAUQgIATAAAfQAAAvATAjQATAkAfAAQAYAAAPgTQAQgUAAgvQAAg7gagjQgRgXgaAAQgNAAgNAIg");
	this.shape_41.setTransform(395.275,306.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(0,0,0,0.706)").s().p("AheCTQgSgLAAgNIACgNQAFgIAMgQIAZgbQgMgHgGgHQgEgFAAgIQAAgJAGgLQAIgMAZgTQgVgLgLgRQgLgTAAgVQAAgiAZgXQAZgYAnAAQAfAAAXAQIAwAAIAMAAIACACIACAIIgCAIIgBACIgNABIgdAAQAOASAAAbQAAAggZAWQgYAWgmAAQgSAAgRgFQgLAJgDAGQgEAIAAAEQAAAFAEADQAEAEAMACIAiABIBAAEQAXADANAOQAOAOAAATQAAAcgaAZQgmAjg8AAQgwAAgggWgAhHBUQgGALAAAJQAAALAOAKQAZAPAsAAQAtgBAVgPQAUgQAAgRQAAgNgMgFQgNgGglgBQg3gBgdgEQgMAMgFALgAgoiOQgMAOABAeQAAAmAQAWQANAQATAAQASAAAMgOQAMgOAAgeQAAgngRgWQgMgPgTAAQgSAAgNAOg");
	this.shape_42.setTransform(433.1,311.45);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(0,0,0,0.706)").s().p("AhSBOQgZgiAAgqQAAgeAPgeQAQgeAZgPQAYgOAbAAQAzAAAfAmQAaAhAAAqQAAAegOAeQgPAfgZAPQgZARgegBQgzAAgegogAggheQgNAHgIAUQgIATAAAfQAAAvATAjQATAkAfAAQAYAAAPgTQAQgUAAgvQAAg7gagjQgRgXgaAAQgNAAgNAIg");
	this.shape_43.setTransform(395.275,306.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(0,0,0,0.706)").s().p("AglCqQgUgHgVgPIAAjmQAAgmgCgJQgCgJgEgDQgEgDgFAAQgHAAgLADIgDgIIBDgbIALAAIAACiQAhgtAkAAQAjAAAZAeQAaAdAAAxQAAA8goAkQgiAggpAAQgTAAgUgHgAgNgSQgKAFgPAOIAACGQANAMANAGQAMAGAOAAQAWAAAUgYQATgZAAgvQAAgrgTgVQgUgYgYAAQgMABgNAGg");
	this.shape_44.setTransform(494.375,300.55);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(0,0,0,0.706)").s().p("AAeBtQgHgIAAgUQghAagKAEQgNAGgPAAQgXAAgOgPQgPgQgBgaQAAgRAIgMQAKgQAZgPQAYgNA5gVIAAgJQAAgigKgMQgLgNgUAAQgPAAgJAJQgKAIABALIAAAOQAAALgGAGQgFAGgKAAQgIAAgGgGQgGgGAAgLQAAgVAWgSQAVgRAmAAQAdAAAUAKQAOAHAHAQQAEALAAAgIAABLIACAnQABAIACACIAHACIAHgBIAUgSIAAAOQgcAkgZAAQgMAAgHgIgAgYAAQgTALgIAMQgJALABAOQAAASAKAMQAKALAOAAQASAAAegYIAAhVg");
	this.shape_45.setTransform(519.75,306.275);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(0,0,0,0.706)").s().p("AAQCtIAAgJQAJAAAEgCQACgDAAgFQAAgFgJgNIhDhXIA3gzIAVgVIACgGQAAgFgEgDQgEgEgJgBIAAgHIBhAAIAAAHQgUABgNAGQgOAGgQAOIg4A0IA4BIIAhAmQAMAMAIADQAGACAQAAIAAAJgAh7CtIAAgJQAQAAAKgDQAEgDADgFQAEgJAAgTIAAjLIgCgvQgCgKgEgCQgEgEgGAAIgPAEIgEgIIBCgbIAMAAIAADdIAABKQAAAWADAHQADAHAFADQAGACATAAIAAAJg");
	this.shape_46.setTransform(564.95,300.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(0,0,0,0.706)").s().p("AhBBXQgcghAAg2QAAg0AfghQAgghArABQAgAAAWARQAVARAAATQAAAJgGAGQgGAFgLABQgOAAgHgJQgFgFgBgPQgBgPgJgHQgIgIgQABQgXgBgPATQgUAXAAAoQAAAnAUAeQAUAgAgAAQAYAAATgRQAOgMAMgdIAHAEQgJAsgaAXQgaAYggAAQgmAAgcgfg");
	this.shape_47.setTransform(541.075,306.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgsBvIgOgDQgFABgDAGIgIAAIAAhQIAIAAQAHAiATASQATARAXAAQARAAALgKQAKgKAAgOQAAgQgMgMQgMgMgigRQgjgRgLgOQgLgOAAgVQAAgbATgTQATgSAeAAQAMAAATAFIAQAEIAGgCIAFgHIAIAAIAABLIgIAAQgJgjgOgNQgPgOgVAAQgSABgKAIQgLAKAAALQAAAOAIAJQAIAKAXAMIAjARQAxAXAAAoQAAAegXATQgXASgcAAQgUAAgagHg");
	this.shape_48.setTransform(303.575,303.35);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AhGClIAAgJIAMAAQAUAAAJgMQAHgHAAgeIAAjVQgBgZgDgIQgDgGgHgFQgKgFgMAAIgMAAIAAgJICNAAIAAAJIgMAAQgVAAgIAMQgHAHAAAeIAADVQAAAZADAIQADAGAHAFQALAFAMAAIAMAAIAAAJg");
	this.shape_49.setTransform(285.2,297.95);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQAMAAAHAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape_50.setTransform(319.2,312.475);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape_51.setTransform(331.7,312.475);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQAMAAAHAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape_52.setTransform(319.2,312.475);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgKCQQgLgGgFgMQgFgLAAgYIAAiWIgjAAIAAgIQANgFAOgNQAOgNALgRIAPgiIAHAAIAABJIA1AAIAAARIg1AAIAACQQAAAWAHAIQAGAHAKAAQAIAAAHgFQAIgFAEgKIAJAAQgIAYgQAMQgPAMgRAAQgLAAgKgGg");
	this.shape_53.setTransform(357.675,299.825);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAMCtIAAgJIAFAAQAQABAGgFQAGgFACgJIABgXIAAhPQAAglgEgKQgDgMgJgFQgIgGgMAAQgMAAgLAGQgNAHgTASIAAB2QAAAXADAGQACAFAIAEQAGADARAAIAAAJIhuAAIAAgJQAOABAJgFQAFgCADgHQADgHAAgVIAAjKQAAgmgCgJQgCgJgEgCQgDgDgHgBIgQAEIgEgIIBDgbIALAAIAACjQAbgeAQgIQAPgIAQAAQATAAANAKQAPAKAGAXQAEAOABAqIAABPQAAAVADAIQADAGAFADQAGADAQAAIAAAJg");
	this.shape_54.setTransform(376.8,297.15);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAeBtQgHgIAAgUQgiAagIAEQgNAGgQAAQgWAAgQgPQgOgQAAgaQAAgRAGgMQAKgQAZgPQAZgNA5gVIAAgJQAAgigLgMQgLgNgSAAQgQAAgJAJQgKAIAAALIABAOQAAALgGAGQgGAGgIAAQgJAAgHgGQgFgGAAgLQAAgVAWgSQAVgRAnAAQAdAAATAKQAOAHAGAQQAFALAAAgIAABLIACAnQAAAIADACIAHACIAHgBIATgSIAAAOQgbAkgZAAQgMAAgHgIgAgYAAQgTALgJAMQgIALAAAOQAAASALAMQALALANAAQATAAAdgYIAAhVg");
	this.shape_55.setTransform(401.25,303.225);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgKCQQgLgGgFgMQgFgLAAgYIAAiWIgjAAIAAgIQANgFAOgNQAOgNALgRIAPgiIAHAAIAABJIA1AAIAAARIg1AAIAACQQAAAWAHAIQAGAHAKAAQAIAAAHgFQAIgFAEgKIAJAAQgIAYgQAMQgPAMgRAAQgLAAgKgGg");
	this.shape_56.setTransform(357.675,299.825);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("ABRBzIAAgJIAFAAQAOAAAIgGQAGgDACgJIABgYIAAheQAAgcgGgMQgKgPgVAAQgNAAgNAGQgNAHgSASIgBACIABALIAABpQAAAYACAFQADAFAHAFQAHADARAAIAAAJIhwAAIAAgJQASAAAHgEQAHgEADgJIABgZIAAheQAAgcgIgMQgLgPgTAAQgNAAgNAGQgUALgLAOIAAB2QAAAXADAGQADAGAGAEQAGADASAAIAAAJIhuAAIAAgJQAPAAAGgDQAGgDADgIQADgHAAgVIAAhUQAAglgCgKQgBgIgEgEQgEgDgGAAQgHAAgJAEIgEgJIBDgbIALAAIAAAwIAdgcQALgKAMgFQANgFAMAAQAVAAAPAMQAPAMAFAYQAZgeARgJQASgJASAAQASAAAOAJQANAJAIAVQAGAOAAAfIAABeQAAAWADAIQACAEAHAFQAHADAOAAIAAAJg");
	this.shape_57.setTransform(457.325,303);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AhBBXQgdgfAAg1QAAg5AegfQAdghAsAAQAlAAAYAZQAZAZAAApIiaAAQAAAxAYAcQAZAdAgAAQAVAAARgMQAQgMALgeIAIAFQgGAigYAbQgZAcglAAQgnAAgdgggAArgpQgBgVgEgJQgGgOgMgIQgMgHgMAAQgUAAgQAPQgQAQgDAcIBmAAIAAAAg");
	this.shape_58.setTransform(487.975,303.325);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgXClQgIgJAAgKQAAgMAIgIQAIgIALAAQALAAAIAIQAIAIAAAMQAAAKgJAJQgIAIgKAAQgLAAgIgIgAgKBYQABgfAGgUQAFgUATgjQAPgbAEgPQAEgPAAgQQAAgfgQgRQgQgTgXAAQgWAAgMAKQgMAKAAAMQAAAJAHANQAIANAAAHQAAAJgGAGQgGAGgIAAQgKAAgIgKQgJgLAAgSQAAgbAYgVQAYgWAoAAQAxAAAYAeQASAVAAAbQAAARgIATQgIATgWAZQgkAngIARQgIARAAAdg");
	this.shape_59.setTransform(510.025,297.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AhGCmIAAgJIALAAQAVAAAJgNQAHgHgBgeIAAjVQAAgZgDgIQgCgGgIgFQgLgFgMAAIgLAAIAAgJICNAAIAAAJIgMAAQgUgBgKAMQgGAJAAAdIAADVQAAAZAEAIQACAGAIAFQAKAFAMABIAMAAIAAAJg");
	this.shape_60.setTransform(143.75,297.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgFBHIgNhHIgFgpQAAgPAFgHQAHgHALAAQAKAAAHAHQAIAHgBAMIgGAsIgNBHg");
	this.shape_61.setTransform(156.5,287.425);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("ABRBzIAAgJIAFAAQAOAAAIgGQAGgEACgIIABgYIAAheQAAgcgGgMQgKgPgVAAQgNAAgNAGQgNAHgSARIgBADIABALIAABpQAAAYACAFQADAGAHAEQAHADARAAIAAAJIhwAAIAAgJQASAAAHgEQAHgEADgKIABgYIAAheQAAgcgIgMQgLgPgTAAQgNAAgNAGQgUALgLANIAAB3QAAAXADAGQADAHAGADQAGADASAAIAAAJIhuAAIAAgJQAPAAAGgDQAGgEADgGQADgIAAgVIAAhUQAAglgCgKQgBgIgEgEQgEgDgGAAQgHAAgJAEIgEgJIBDgbIALAAIAAAwIAdgcQALgKAMgFQANgFAMAAQAVAAAPAMQAPAMAFAYQAZgeARgJQASgJASAAQASAAAOAJQANAJAIAVQAGAOAAAfIAABeQAAAVADAJQACAEAHAFQAHADAOAAIAAAJg");
	this.shape_62.setTransform(180.575,302.65);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AhSBOQgZgiAAgqQAAgeAPgeQAQgeAZgPQAYgPAbAAQAzABAfAmQAaAhAAArQAAAdgOAeQgPAfgZAQQgZAPgeAAQgzAAgegogAggheQgNAIgIATQgIATAAAeQAAAwATAjQATAkAfAAQAYAAAPgUQAQgTAAgvQAAg7gagjQgRgXgaAAQgNAAgNAIg");
	this.shape_63.setTransform(249.875,303);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAMCuIAAgJIAFAAQAPAAAHgFQAGgFACgJIABgXIAAhPQAAglgDgKQgEgMgJgFQgIgGgMAAQgMAAgLAGQgOAHgSASIAAB2QABAXACAFQADAGAGAEQAIAEAQAAIAAAJIhuAAIAAgJQAOAAAJgFQAFgDADgGQADgHAAgVIAAjKQAAgmgCgJQgCgIgDgDQgFgDgGAAIgQADIgEgJIBDgaIALAAIAACjQAcgeAPgIQAPgIAQgBQATABAOAKQANAKAHAXQAEAPABApIAABPQgBAVAEAIQADAGAFADQAGADAQABIAAAJg");
	this.shape_64.setTransform(274.9,296.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape_65.setTransform(206.15,312.125);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAMCuIAAgJIAFAAQAQAAAGgFQAGgFADgJIAAgXIAAhPQAAglgEgKQgDgMgJgFQgIgGgMAAQgMAAgLAGQgNAHgTASIAAB2QAAAXADAFQACAGAIAEQAGAEARAAIAAAJIhvAAIAAgJQAQAAAIgFQAFgDADgGQADgHAAgVIAAjKQAAgmgCgJQgCgIgEgDQgDgDgHAAIgRADIgDgJIBDgaIALAAIAACjQAbgeAQgIQAPgIAQgBQATABANAKQAPAKAGAXQAEAPAAApIAABPQABAVADAIQACAGAGADQAGADAQABIAAAJg");
	this.shape_66.setTransform(351.25,296.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAeBtQgHgIAAgUQgiAagIAEQgNAGgPAAQgYAAgPgPQgOgQAAgaQAAgRAGgMQAKgQAZgPQAZgNA5gVIAAgJQAAgigLgMQgKgNgTAAQgQAAgJAJQgKAIAAALIABAOQAAALgFAGQgGAGgJAAQgJAAgHgGQgFgGAAgLQAAgVAWgSQAVgRAnAAQAdAAASAKQAPAHAGAQQAFALAAAgIAABLIABAnQABAIAEACIAGACIAHgBIATgSIAAAOQgbAkgZAAQgMAAgHgIgAgYAAQgTALgJAMQgIALAAAOQAAASALAMQALALANAAQATAAAdgYIAAhVg");
	this.shape_67.setTransform(375.7,302.875);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAJAIQAHAIAAAKQAAALgHAIQgJAIgLAAQgKAAgIgIg");
	this.shape_68.setTransform(406,312.125);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAJAIQAHAIAAAKQAAALgHAIQgJAIgLAAQgKAAgIgIg");
	this.shape_69.setTransform(406,312.125);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("ABRBzIAAgJIAFAAQAOAAAIgGQAGgEACgIIABgYIAAheQAAgcgGgMQgKgPgVAAQgNAAgNAGQgNAHgSARIgBADIABALIAABpQAAAYACAFQADAGAHAEQAHADARAAIAAAJIhwAAIAAgJQASAAAHgEQAHgEADgKIABgYIAAheQAAgcgIgMQgLgPgTAAQgNAAgNAGQgUALgLANIAAB3QAAAXADAGQADAHAGADQAGADASAAIAAAJIhuAAIAAgJQAPAAAGgDQAGgEADgGQADgIAAgVIAAhUQAAglgCgKQgBgIgEgEQgEgDgGAAQgHAAgJAEIgEgJIBDgbIALAAIAAAwIAdgcQALgKAMgFQANgFAMAAQAVAAAPAMQAPAMAFAYQAZgeARgJQASgJASAAQASAAAOAJQANAJAIAVQAGAOAAAfIAABeQAAAVADAJQACAEAHAFQAHADAOAAIAAAJg");
	this.shape_70.setTransform(180.575,302.65);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAeBtQgHgIAAgUQghAagJAEQgOAGgOAAQgYAAgOgPQgPgQAAgaQgBgRAIgMQAKgQAZgPQAYgNA5gVIAAgJQAAgigKgMQgLgNgUAAQgPAAgJAJQgKAIAAALIABAOQAAALgFAGQgHAGgJAAQgIAAgGgGQgGgGAAgLQAAgVAVgSQAWgRAnAAQAcAAATAKQAPAHAHAQQAEALAAAgIAABLIABAnQACAIADACIAGACIAGgBIAVgSIAAAOQgcAkgZAAQgMAAgHgIgAgYAAQgTALgJAMQgHALAAAOQgBASALAMQALALANAAQASAAAegYIAAhVg");
	this.shape_71.setTransform(488.05,302.875);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAQCuIAAgJQAJAAAEgDQADgCAAgGQAAgFgKgNIhEhXIA4gzIAVgVIACgGQAAgFgEgDQgEgEgJAAIAAgIIBhAAIAAAIQgUAAgNAGQgOAFgPAPIg5A0IA5BIIAgAnQALALAJADQAHACAOABIAAAJgAh7CuIAAgJQARgBAIgEQAGgCACgGQAEgIAAgUIAAjKIgCgwQgCgIgDgDQgEgEgHAAIgPAEIgEgJIBCgaIALAAIAADdIAABKQAAAWAEAHQADAGAFADQAFADATABIAAAJgAguAxg");
	this.shape_72.setTransform(511.1,296.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgsBvIgOgDQgFABgDAGIgIAAIAAhQIAIAAQAHAjATARQATARAXAAQARAAALgKQAKgKAAgOQAAgRgMgLQgMgMgigRQgjgQgLgPQgLgOAAgVQAAgbATgTQATgTAeAAQAMABATAFIAQAEIAGgCIAFgIIAIAAIAABMIgIAAQgJgjgOgNQgPgNgVAAQgSAAgKAJQgLAIAAAMQAAANAIAKQAIAKAXAMIAjARQAxAXAAAoQAAAegXATQgXASgcAAQgUABgagIg");
	this.shape_73.setTransform(555.475,303);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgsBvIgOgDQgFABgDAGIgIAAIAAhQIAIAAQAHAjATARQATARAXAAQARAAALgKQAKgKAAgOQAAgRgMgLQgMgMgigRQgjgQgLgPQgLgOAAgVQAAgbATgTQATgTAeAAQAMABATAFIAQAEIAGgCIAFgIIAIAAIAABMIgIAAQgJgjgOgNQgPgNgVAAQgSAAgKAJQgLAIAAAMQAAANAIAKQAIAKAXAMIAjARQAxAXAAAoQAAAegXATQgXASgcAAQgUABgagIg");
	this.shape_74.setTransform(555.475,303);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AhBBXQgdgfAAg1QAAg5AegfQAdghAsAAQAlAAAYAZQAZAZAAApIiaAAQAAAxAYAcQAZAdAgAAQAVAAARgMQAQgMALgeIAIAFQgGAigYAbQgZAcglAAQgnAAgdgggAArgpQgBgVgEgJQgGgOgMgIQgMgHgMAAQgUAAgQAPQgQAQgDAcIBmAAIAAAAg");
	this.shape_75.setTransform(534.575,302.975);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AALBzIAAgJIAGAAQAPAAAGgEQAHgFACgKIABgXIAAhaQAAgfgIgOQgIgNgTAAQgcAAgdAfIAAB1QABAXACAGQADAGAHAEQAGADARAAIAAAJIhuAAIAAgJIAFAAQARAAAGgJQAGgIAAgZIAAhSQAAgogBgIQgDgJgDgEQgEgDgGAAQgIAAgJAEIgDgJIBDgbIAKAAIAAAvQAngvAkAAQASAAANAJQANAJAIAVQAFAOAAAfIAABeQAAAVADAJQADAFAGAEQAGADARAAIAAAJg");
	this.shape_76.setTransform(631.5,302.65);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgsBvIgOgDQgFABgDAGIgIAAIAAhQIAIAAQAHAjATARQATARAXAAQARAAALgKQAKgKAAgOQAAgRgMgLQgMgMgigRQgjgQgLgPQgLgOAAgVQAAgbATgTQATgTAeAAQAMABATAFIAQAEIAGgCIAFgIIAIAAIAABMIgIAAQgJgjgOgNQgPgNgVAAQgSAAgKAJQgLAIAAAMQAAANAIAKQAIAKAXAMIAjARQAxAXAAAoQAAAegXATQgXASgcAAQgUABgagIg");
	this.shape_77.setTransform(555.475,303);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AhBBXQgdgfAAg1QAAg5AegfQAdghAsAAQAlAAAYAZQAZAZAAApIiaAAQAAAxAYAcQAZAdAgAAQAVAAARgMQAQgMALgeIAIAFQgGAigYAbQgZAcglAAQgnAAgdgggAArgpQgBgVgEgJQgGgOgMgIQgMgHgMAAQgUAAgQAPQgQAQgDAcIBmAAIAAAAg");
	this.shape_78.setTransform(534.575,302.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape,p:{x:259.975,y:117.525}}]},142).to({state:[{t:this.shape,p:{x:259.975,y:117.525}},{t:this.shape_1}]},1).to({state:[{t:this.shape,p:{x:259.975,y:117.525}},{t:this.shape_1},{t:this.shape_2,p:{x:314.425,y:117.175}}]},1).to({state:[{t:this.shape,p:{x:259.975,y:117.525}},{t:this.shape_1},{t:this.shape_2,p:{x:314.425,y:117.175}},{t:this.shape_3}]},1).to({state:[{t:this.shape,p:{x:259.975,y:117.525}},{t:this.shape_1},{t:this.shape_4,p:{x:314.425,y:117.175}},{t:this.shape_3},{t:this.shape_2,p:{x:353.225,y:117.175}}]},1).to({state:[{t:this.shape,p:{x:259.975,y:117.525}},{t:this.shape_1},{t:this.shape_4,p:{x:314.425,y:117.175}},{t:this.shape_3},{t:this.shape_2,p:{x:353.225,y:117.175}},{t:this.shape_5}]},1).to({state:[{t:this.shape,p:{x:259.975,y:117.525}},{t:this.shape_1},{t:this.shape_4,p:{x:314.425,y:117.175}},{t:this.shape_3},{t:this.shape_2,p:{x:353.225,y:117.175}},{t:this.shape_5},{t:this.shape_6}]},1).to({state:[{t:this.shape,p:{x:259.975,y:117.525}},{t:this.shape_1},{t:this.shape_4,p:{x:314.425,y:117.175}},{t:this.shape_3},{t:this.shape_2,p:{x:353.225,y:117.175}},{t:this.shape_5},{t:this.shape_6},{t:this.shape_7}]},1).to({state:[{t:this.shape,p:{x:259.975,y:117.525}},{t:this.shape_1},{t:this.shape_4,p:{x:314.425,y:117.175}},{t:this.shape_3},{t:this.shape_2,p:{x:353.225,y:117.175}},{t:this.shape_5},{t:this.shape_6},{t:this.shape_7},{t:this.shape_8}]},1).to({state:[{t:this.shape,p:{x:259.975,y:117.525}},{t:this.shape_1},{t:this.shape_4,p:{x:314.425,y:117.175}},{t:this.shape_3},{t:this.shape_2,p:{x:353.225,y:117.175}},{t:this.shape_5},{t:this.shape_6},{t:this.shape_7},{t:this.shape_8},{t:this.shape_9,p:{x:194.375,y:173.025}}]},1).to({state:[{t:this.shape,p:{x:259.975,y:117.525}},{t:this.shape_1},{t:this.shape_4,p:{x:314.425,y:117.175}},{t:this.shape_3},{t:this.shape_2,p:{x:353.225,y:117.175}},{t:this.shape_5},{t:this.shape_6},{t:this.shape_7},{t:this.shape_8},{t:this.shape_9,p:{x:194.375,y:173.025}},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape,p:{x:259.975,y:117.525}},{t:this.shape_1},{t:this.shape_4,p:{x:314.425,y:117.175}},{t:this.shape_3},{t:this.shape_2,p:{x:353.225,y:117.175}},{t:this.shape_5},{t:this.shape_6},{t:this.shape_7},{t:this.shape_8},{t:this.shape_9,p:{x:194.375,y:173.025}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_12,p:{x:249.925}}]},1).to({state:[{t:this.shape,p:{x:259.975,y:117.525}},{t:this.shape_1},{t:this.shape_4,p:{x:314.425,y:117.175}},{t:this.shape_3},{t:this.shape_2,p:{x:353.225,y:117.175}},{t:this.shape_5},{t:this.shape_6},{t:this.shape_7},{t:this.shape_8},{t:this.shape_9,p:{x:194.375,y:173.025}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:295.725}}]},1).to({state:[{t:this.shape,p:{x:259.975,y:117.525}},{t:this.shape_1},{t:this.shape_4,p:{x:314.425,y:117.175}},{t:this.shape_3},{t:this.shape_2,p:{x:353.225,y:117.175}},{t:this.shape_5},{t:this.shape_6},{t:this.shape_7},{t:this.shape_8},{t:this.shape_9,p:{x:194.375,y:173.025}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:295.725}},{t:this.shape_15}]},1).to({state:[{t:this.shape,p:{x:259.975,y:117.525}},{t:this.shape_1},{t:this.shape_4,p:{x:314.425,y:117.175}},{t:this.shape_3},{t:this.shape_2,p:{x:353.225,y:117.175}},{t:this.shape_5},{t:this.shape_6},{t:this.shape_7},{t:this.shape_8},{t:this.shape_9,p:{x:194.375,y:173.025}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:295.725}},{t:this.shape_15},{t:this.shape_16}]},1).to({state:[{t:this.shape,p:{x:259.975,y:117.525}},{t:this.shape_1},{t:this.shape_4,p:{x:314.425,y:117.175}},{t:this.shape_3},{t:this.shape_2,p:{x:353.225,y:117.175}},{t:this.shape_5},{t:this.shape_6},{t:this.shape_7},{t:this.shape_8},{t:this.shape_17,p:{x:194.375}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:295.725}},{t:this.shape_15},{t:this.shape_16},{t:this.shape_9,p:{x:346.325,y:173.025}}]},1).to({state:[{t:this.shape_18},{t:this.shape_1},{t:this.shape_4,p:{x:314.425,y:117.175}},{t:this.shape_3},{t:this.shape_2,p:{x:353.225,y:117.175}},{t:this.shape_5},{t:this.shape_6},{t:this.shape_7},{t:this.shape_8},{t:this.shape_17,p:{x:194.375}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:295.725}},{t:this.shape_15},{t:this.shape_16},{t:this.shape_9,p:{x:346.325,y:173.025}},{t:this.shape,p:{x:383.425,y:176.875}}]},1).to({state:[{t:this.shape_18},{t:this.shape_1},{t:this.shape_20,p:{x:314.425,y:117.175}},{t:this.shape_3},{t:this.shape_4,p:{x:353.225,y:117.175}},{t:this.shape_5},{t:this.shape_6},{t:this.shape_7},{t:this.shape_8},{t:this.shape_17,p:{x:194.375}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:295.725}},{t:this.shape_15},{t:this.shape_16},{t:this.shape_9,p:{x:346.325,y:173.025}},{t:this.shape,p:{x:383.425,y:176.875}},{t:this.shape_19},{t:this.shape_2,p:{x:437.875,y:176.525}}]},1).to({state:[{t:this.shape_18},{t:this.shape_1},{t:this.shape_20,p:{x:314.425,y:117.175}},{t:this.shape_3},{t:this.shape_4,p:{x:353.225,y:117.175}},{t:this.shape_5},{t:this.shape_6},{t:this.shape_7},{t:this.shape_8},{t:this.shape_17,p:{x:194.375}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:295.725}},{t:this.shape_15},{t:this.shape_16},{t:this.shape_9,p:{x:346.325,y:173.025}},{t:this.shape,p:{x:383.425,y:176.875}},{t:this.shape_19},{t:this.shape_2,p:{x:437.875,y:176.525}},{t:this.shape_21}]},1).to({state:[{t:this.shape_18},{t:this.shape_1},{t:this.shape_22,p:{x:314.425,y:117.175}},{t:this.shape_3},{t:this.shape_20,p:{x:353.225,y:117.175}},{t:this.shape_5},{t:this.shape_6},{t:this.shape_7},{t:this.shape_8},{t:this.shape_17,p:{x:194.375}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:295.725}},{t:this.shape_15},{t:this.shape_16},{t:this.shape_9,p:{x:346.325,y:173.025}},{t:this.shape,p:{x:383.425,y:176.875}},{t:this.shape_19},{t:this.shape_4,p:{x:437.875,y:176.525}},{t:this.shape_21},{t:this.shape_2,p:{x:476.675,y:176.525}}]},1).to({state:[{t:this.shape_18},{t:this.shape_1},{t:this.shape_22,p:{x:314.425,y:117.175}},{t:this.shape_3},{t:this.shape_20,p:{x:353.225,y:117.175}},{t:this.shape_5},{t:this.shape_6},{t:this.shape_7},{t:this.shape_8},{t:this.shape_17,p:{x:194.375}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:295.725}},{t:this.shape_15},{t:this.shape_16},{t:this.shape_9,p:{x:346.325,y:173.025}},{t:this.shape,p:{x:383.425,y:176.875}},{t:this.shape_19},{t:this.shape_4,p:{x:437.875,y:176.525}},{t:this.shape_21},{t:this.shape_2,p:{x:476.675,y:176.525}},{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_18},{t:this.shape_1},{t:this.shape_22,p:{x:314.425,y:117.175}},{t:this.shape_3},{t:this.shape_20,p:{x:353.225,y:117.175}},{t:this.shape_5},{t:this.shape_6},{t:this.shape_7},{t:this.shape_8},{t:this.shape_17,p:{x:194.375}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:295.725}},{t:this.shape_15},{t:this.shape_16},{t:this.shape_9,p:{x:346.325,y:173.025}},{t:this.shape,p:{x:383.425,y:176.875}},{t:this.shape_19},{t:this.shape_4,p:{x:437.875,y:176.525}},{t:this.shape_21},{t:this.shape_2,p:{x:476.675,y:176.525}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_25}]},1).to({state:[{t:this.shape_18},{t:this.shape_1},{t:this.shape_22,p:{x:314.425,y:117.175}},{t:this.shape_3},{t:this.shape_20,p:{x:353.225,y:117.175}},{t:this.shape_5},{t:this.shape_6},{t:this.shape_7},{t:this.shape_8},{t:this.shape_17,p:{x:194.375}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:295.725}},{t:this.shape_15},{t:this.shape_16},{t:this.shape_9,p:{x:346.325,y:173.025}},{t:this.shape,p:{x:383.425,y:176.875}},{t:this.shape_19},{t:this.shape_4,p:{x:437.875,y:176.525}},{t:this.shape_21},{t:this.shape_2,p:{x:476.675,y:176.525}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_25},{t:this.shape_26,p:{x:197.225}}]},1).to({state:[{t:this.shape_18},{t:this.shape_1},{t:this.shape_22,p:{x:314.425,y:117.175}},{t:this.shape_3},{t:this.shape_20,p:{x:353.225,y:117.175}},{t:this.shape_5},{t:this.shape_6},{t:this.shape_7},{t:this.shape_8},{t:this.shape_17,p:{x:194.375}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:295.725}},{t:this.shape_15},{t:this.shape_16},{t:this.shape_9,p:{x:346.325,y:173.025}},{t:this.shape,p:{x:383.425,y:176.875}},{t:this.shape_19},{t:this.shape_4,p:{x:437.875,y:176.525}},{t:this.shape_21},{t:this.shape_2,p:{x:476.675,y:176.525}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_25},{t:this.shape_26,p:{x:197.225}},{t:this.shape_28},{t:this.shape_27,p:{x:243.175}}]},1).to({state:[{t:this.shape_18},{t:this.shape_1},{t:this.shape_22,p:{x:314.425,y:117.175}},{t:this.shape_3},{t:this.shape_20,p:{x:353.225,y:117.175}},{t:this.shape_5},{t:this.shape_6},{t:this.shape_7},{t:this.shape_8},{t:this.shape_17,p:{x:194.375}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:295.725}},{t:this.shape_15},{t:this.shape_16},{t:this.shape_9,p:{x:346.325,y:173.025}},{t:this.shape,p:{x:383.425,y:176.875}},{t:this.shape_19},{t:this.shape_4,p:{x:437.875,y:176.525}},{t:this.shape_21},{t:this.shape_2,p:{x:476.675,y:176.525}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_25},{t:this.shape_26,p:{x:197.225}},{t:this.shape_28},{t:this.shape_29},{t:this.shape_27,p:{x:268.175}}]},1).to({state:[{t:this.shape_18},{t:this.shape_1},{t:this.shape_22,p:{x:314.425,y:117.175}},{t:this.shape_3},{t:this.shape_20,p:{x:353.225,y:117.175}},{t:this.shape_5},{t:this.shape_6},{t:this.shape_7},{t:this.shape_8},{t:this.shape_17,p:{x:194.375}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:295.725}},{t:this.shape_15},{t:this.shape_16},{t:this.shape_9,p:{x:346.325,y:173.025}},{t:this.shape,p:{x:383.425,y:176.875}},{t:this.shape_19},{t:this.shape_4,p:{x:437.875,y:176.525}},{t:this.shape_21},{t:this.shape_2,p:{x:476.675,y:176.525}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_25},{t:this.shape_26,p:{x:197.225}},{t:this.shape_28},{t:this.shape_29},{t:this.shape_27,p:{x:268.175}},{t:this.shape_30,p:{x:294.075}}]},1).to({state:[{t:this.shape_18},{t:this.shape_1},{t:this.shape_22,p:{x:314.425,y:117.175}},{t:this.shape_3},{t:this.shape_20,p:{x:353.225,y:117.175}},{t:this.shape_5},{t:this.shape_6},{t:this.shape_7},{t:this.shape_8},{t:this.shape_17,p:{x:194.375}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:295.725}},{t:this.shape_15},{t:this.shape_16},{t:this.shape_9,p:{x:346.325,y:173.025}},{t:this.shape,p:{x:383.425,y:176.875}},{t:this.shape_19},{t:this.shape_4,p:{x:437.875,y:176.525}},{t:this.shape_21},{t:this.shape_2,p:{x:476.675,y:176.525}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_25},{t:this.shape_31},{t:this.shape_28},{t:this.shape_29},{t:this.shape_27,p:{x:268.175}},{t:this.shape_30,p:{x:294.075}},{t:this.shape_26,p:{x:316.675}}]},1).to({state:[{t:this.shape_18},{t:this.shape_1},{t:this.shape_32,p:{x:314.425}},{t:this.shape_3},{t:this.shape_22,p:{x:353.225,y:117.175}},{t:this.shape_5},{t:this.shape_6},{t:this.shape_7},{t:this.shape_8},{t:this.shape_17,p:{x:194.375}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:295.725}},{t:this.shape_15},{t:this.shape_16},{t:this.shape_9,p:{x:346.325,y:173.025}},{t:this.shape,p:{x:383.425,y:176.875}},{t:this.shape_19},{t:this.shape_20,p:{x:437.875,y:176.525}},{t:this.shape_21},{t:this.shape_4,p:{x:476.675,y:176.525}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_25},{t:this.shape_31},{t:this.shape_28},{t:this.shape_29},{t:this.shape_27,p:{x:268.175}},{t:this.shape_30,p:{x:294.075}},{t:this.shape_26,p:{x:316.675}},{t:this.shape_2,p:{x:337.375,y:233.875}}]},1).to({state:[{t:this.shape_18},{t:this.shape_1},{t:this.shape_32,p:{x:314.425}},{t:this.shape_3},{t:this.shape_22,p:{x:353.225,y:117.175}},{t:this.shape_5},{t:this.shape_6},{t:this.shape_7},{t:this.shape_8},{t:this.shape_17,p:{x:194.375}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:295.725}},{t:this.shape_15},{t:this.shape_16},{t:this.shape_9,p:{x:346.325,y:173.025}},{t:this.shape,p:{x:383.425,y:176.875}},{t:this.shape_19},{t:this.shape_20,p:{x:437.875,y:176.525}},{t:this.shape_21},{t:this.shape_4,p:{x:476.675,y:176.525}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_25},{t:this.shape_31},{t:this.shape_28},{t:this.shape_29},{t:this.shape_27,p:{x:268.175}},{t:this.shape_30,p:{x:294.075}},{t:this.shape_26,p:{x:316.675}},{t:this.shape_2,p:{x:337.375,y:233.875}},{t:this.shape_33}]},1).to({state:[{t:this.shape_18},{t:this.shape_1},{t:this.shape_32,p:{x:314.425}},{t:this.shape_3},{t:this.shape_22,p:{x:353.225,y:117.175}},{t:this.shape_5},{t:this.shape_6},{t:this.shape_7},{t:this.shape_8},{t:this.shape_34},{t:this.shape_11},{t:this.shape_10},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:295.725}},{t:this.shape_15},{t:this.shape_16},{t:this.shape_17,p:{x:346.325}},{t:this.shape,p:{x:383.425,y:176.875}},{t:this.shape_19},{t:this.shape_20,p:{x:437.875,y:176.525}},{t:this.shape_21},{t:this.shape_4,p:{x:476.675,y:176.525}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_25},{t:this.shape_31},{t:this.shape_28},{t:this.shape_29},{t:this.shape_27,p:{x:268.175}},{t:this.shape_30,p:{x:294.075}},{t:this.shape_26,p:{x:316.675}},{t:this.shape_2,p:{x:337.375,y:233.875}},{t:this.shape_33},{t:this.shape_9,p:{x:392.925,y:230.375}}]},1).to({state:[{t:this.shape_18},{t:this.shape_1},{t:this.shape_32,p:{x:314.425}},{t:this.shape_3},{t:this.shape_22,p:{x:353.225,y:117.175}},{t:this.shape_5},{t:this.shape_6},{t:this.shape_7},{t:this.shape_8},{t:this.shape_34},{t:this.shape_11},{t:this.shape_10},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:295.725}},{t:this.shape_15},{t:this.shape_16},{t:this.shape_17,p:{x:346.325}},{t:this.shape,p:{x:383.425,y:176.875}},{t:this.shape_19},{t:this.shape_20,p:{x:437.875,y:176.525}},{t:this.shape_21},{t:this.shape_4,p:{x:476.675,y:176.525}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_25},{t:this.shape_31},{t:this.shape_28},{t:this.shape_29},{t:this.shape_27,p:{x:268.175}},{t:this.shape_35},{t:this.shape_26,p:{x:316.675}},{t:this.shape_2,p:{x:337.375,y:233.875}},{t:this.shape_33},{t:this.shape_9,p:{x:392.925,y:230.375}},{t:this.shape_30,p:{x:412.025}}]},1).to({state:[{t:this.shape_18},{t:this.shape_1},{t:this.shape_32,p:{x:314.425}},{t:this.shape_3},{t:this.shape_22,p:{x:353.225,y:117.175}},{t:this.shape_5},{t:this.shape_6},{t:this.shape_7},{t:this.shape_8},{t:this.shape_34},{t:this.shape_11},{t:this.shape_10},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:295.725}},{t:this.shape_15},{t:this.shape_16},{t:this.shape_17,p:{x:346.325}},{t:this.shape,p:{x:383.425,y:176.875}},{t:this.shape_19},{t:this.shape_20,p:{x:437.875,y:176.525}},{t:this.shape_21},{t:this.shape_4,p:{x:476.675,y:176.525}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_25},{t:this.shape_31},{t:this.shape_28},{t:this.shape_29},{t:this.shape_27,p:{x:268.175}},{t:this.shape_35},{t:this.shape_26,p:{x:316.675}},{t:this.shape_2,p:{x:337.375,y:233.875}},{t:this.shape_33},{t:this.shape_9,p:{x:392.925,y:230.375}},{t:this.shape_30,p:{x:412.025}}]},1).to({state:[{t:this.shape_18},{t:this.shape_1},{t:this.shape_37},{t:this.shape_3},{t:this.shape_32,p:{x:353.225}},{t:this.shape_5},{t:this.shape_6},{t:this.shape_7},{t:this.shape_8},{t:this.shape_34},{t:this.shape_11},{t:this.shape_10},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:295.725}},{t:this.shape_15},{t:this.shape_16},{t:this.shape_17,p:{x:346.325}},{t:this.shape,p:{x:383.425,y:176.875}},{t:this.shape_19},{t:this.shape_22,p:{x:437.875,y:176.525}},{t:this.shape_21},{t:this.shape_20,p:{x:476.675,y:176.525}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_25},{t:this.shape_31},{t:this.shape_28},{t:this.shape_29},{t:this.shape_27,p:{x:268.175}},{t:this.shape_35},{t:this.shape_26,p:{x:316.675}},{t:this.shape_4,p:{x:337.375,y:233.875}},{t:this.shape_33},{t:this.shape_9,p:{x:392.925,y:230.375}},{t:this.shape_30,p:{x:412.025}},{t:this.shape_36},{t:this.shape_2,p:{x:473.375,y:233.875}}]},1).to({state:[{t:this.shape_18},{t:this.shape_1},{t:this.shape_37},{t:this.shape_3},{t:this.shape_32,p:{x:353.225}},{t:this.shape_5},{t:this.shape_6},{t:this.shape_7},{t:this.shape_8},{t:this.shape_34},{t:this.shape_11},{t:this.shape_10},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:295.725}},{t:this.shape_15},{t:this.shape_16},{t:this.shape_17,p:{x:346.325}},{t:this.shape,p:{x:383.425,y:176.875}},{t:this.shape_19},{t:this.shape_22,p:{x:437.875,y:176.525}},{t:this.shape_21},{t:this.shape_20,p:{x:476.675,y:176.525}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_25},{t:this.shape_31},{t:this.shape_28},{t:this.shape_29},{t:this.shape_27,p:{x:268.175}},{t:this.shape_35},{t:this.shape_26,p:{x:316.675}},{t:this.shape_4,p:{x:337.375,y:233.875}},{t:this.shape_33},{t:this.shape_9,p:{x:392.925,y:230.375}},{t:this.shape_30,p:{x:412.025}},{t:this.shape_36},{t:this.shape_2,p:{x:473.375,y:233.875}}]},9).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_2,p:{x:298.475,y:306.375}}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_4,p:{x:298.475,y:306.375}},{t:this.shape_2,p:{x:320.625,y:306.375}}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_4,p:{x:298.475,y:306.375}},{t:this.shape_2,p:{x:320.625,y:306.375}},{t:this.shape_40}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_4,p:{x:298.475,y:306.375}},{t:this.shape_2,p:{x:320.625,y:306.375}},{t:this.shape_40},{t:this.shape_9,p:{x:376.175,y:302.875}}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_4,p:{x:298.475,y:306.375}},{t:this.shape_2,p:{x:320.625,y:306.375}},{t:this.shape_40},{t:this.shape_9,p:{x:376.175,y:302.875}},{t:this.shape_41,p:{x:395.275}}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_4,p:{x:298.475,y:306.375}},{t:this.shape_2,p:{x:320.625,y:306.375}},{t:this.shape_40},{t:this.shape_9,p:{x:376.175,y:302.875}},{t:this.shape_41,p:{x:395.275}},{t:this.shape_42}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_4,p:{x:298.475,y:306.375}},{t:this.shape_2,p:{x:320.625,y:306.375}},{t:this.shape_40},{t:this.shape_9,p:{x:376.175,y:302.875}},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41,p:{x:457.775}}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_4,p:{x:298.475,y:306.375}},{t:this.shape_2,p:{x:320.625,y:306.375}},{t:this.shape_40},{t:this.shape_9,p:{x:376.175,y:302.875}},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41,p:{x:457.775}},{t:this.shape_44}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_4,p:{x:298.475,y:306.375}},{t:this.shape_2,p:{x:320.625,y:306.375}},{t:this.shape_40},{t:this.shape_9,p:{x:376.175,y:302.875}},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41,p:{x:457.775}},{t:this.shape_44},{t:this.shape_45}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_4,p:{x:298.475,y:306.375}},{t:this.shape_2,p:{x:320.625,y:306.375}},{t:this.shape_40},{t:this.shape_9,p:{x:376.175,y:302.875}},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41,p:{x:457.775}},{t:this.shape_44},{t:this.shape_45},{t:this.shape_47},{t:this.shape_46}]},1).to({state:[]},6).to({state:[{t:this.shape_49},{t:this.shape_48}]},28).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_50,p:{x:319.2,y:312.475}}]},1).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_50,p:{x:319.2,y:312.475}},{t:this.shape_51,p:{x:331.7,y:312.475}}]},1).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_52,p:{x:319.2,y:312.475}},{t:this.shape_51,p:{x:331.7,y:312.475}},{t:this.shape_50,p:{x:344.2,y:312.475}}]},1).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_52,p:{x:319.2,y:312.475}},{t:this.shape_51,p:{x:331.7,y:312.475}},{t:this.shape_50,p:{x:344.2,y:312.475}},{t:this.shape_53,p:{x:357.675,y:299.825}}]},1).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_52,p:{x:319.2,y:312.475}},{t:this.shape_51,p:{x:331.7,y:312.475}},{t:this.shape_50,p:{x:344.2,y:312.475}},{t:this.shape_53,p:{x:357.675,y:299.825}},{t:this.shape_54}]},1).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_52,p:{x:319.2,y:312.475}},{t:this.shape_51,p:{x:331.7,y:312.475}},{t:this.shape_50,p:{x:344.2,y:312.475}},{t:this.shape_53,p:{x:357.675,y:299.825}},{t:this.shape_54},{t:this.shape_55}]},1).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_52,p:{x:319.2,y:312.475}},{t:this.shape_51,p:{x:331.7,y:312.475}},{t:this.shape_50,p:{x:344.2,y:312.475}},{t:this.shape_56,p:{x:357.675,y:299.825}},{t:this.shape_54},{t:this.shape_55},{t:this.shape_53,p:{x:418.675,y:299.825}}]},1).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_52,p:{x:319.2,y:312.475}},{t:this.shape_51,p:{x:331.7,y:312.475}},{t:this.shape_50,p:{x:344.2,y:312.475}},{t:this.shape_56,p:{x:357.675,y:299.825}},{t:this.shape_54},{t:this.shape_55},{t:this.shape_53,p:{x:418.675,y:299.825}},{t:this.shape_57}]},1).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_52,p:{x:319.2,y:312.475}},{t:this.shape_51,p:{x:331.7,y:312.475}},{t:this.shape_50,p:{x:344.2,y:312.475}},{t:this.shape_56,p:{x:357.675,y:299.825}},{t:this.shape_54},{t:this.shape_55},{t:this.shape_53,p:{x:418.675,y:299.825}},{t:this.shape_57},{t:this.shape_58,p:{x:487.975,y:303.325}}]},1).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_52,p:{x:319.2,y:312.475}},{t:this.shape_51,p:{x:331.7,y:312.475}},{t:this.shape_50,p:{x:344.2,y:312.475}},{t:this.shape_56,p:{x:357.675,y:299.825}},{t:this.shape_54},{t:this.shape_55},{t:this.shape_53,p:{x:418.675,y:299.825}},{t:this.shape_57},{t:this.shape_58,p:{x:487.975,y:303.325}},{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},6).to({state:[{t:this.shape_60},{t:this.shape_61}]},1).to({state:[{t:this.shape_60},{t:this.shape_61},{t:this.shape_62,p:{x:180.575}}]},1).to({state:[{t:this.shape_60},{t:this.shape_61},{t:this.shape_62,p:{x:180.575}},{t:this.shape_51,p:{x:206.15,y:312.125}}]},1).to({state:[{t:this.shape_60},{t:this.shape_61},{t:this.shape_62,p:{x:180.575}},{t:this.shape_51,p:{x:206.15,y:312.125}},{t:this.shape_50,p:{x:218.65,y:312.125}}]},1).to({state:[{t:this.shape_60},{t:this.shape_61},{t:this.shape_62,p:{x:180.575}},{t:this.shape_51,p:{x:206.15,y:312.125}},{t:this.shape_50,p:{x:218.65,y:312.125}},{t:this.shape_63}]},1).to({state:[{t:this.shape_60},{t:this.shape_61},{t:this.shape_62,p:{x:180.575}},{t:this.shape_51,p:{x:206.15,y:312.125}},{t:this.shape_50,p:{x:218.65,y:312.125}},{t:this.shape_63},{t:this.shape_64}]},1).to({state:[{t:this.shape_60},{t:this.shape_61},{t:this.shape_62,p:{x:180.575}},{t:this.shape_51,p:{x:206.15,y:312.125}},{t:this.shape_52,p:{x:218.65,y:312.125}},{t:this.shape_63},{t:this.shape_64},{t:this.shape_50,p:{x:293.65,y:312.125}}]},1).to({state:[{t:this.shape_60},{t:this.shape_61},{t:this.shape_62,p:{x:180.575}},{t:this.shape_65},{t:this.shape_52,p:{x:218.65,y:312.125}},{t:this.shape_63},{t:this.shape_64},{t:this.shape_50,p:{x:293.65,y:312.125}},{t:this.shape_51,p:{x:306.15,y:312.125}}]},1).to({state:[{t:this.shape_60},{t:this.shape_61},{t:this.shape_62,p:{x:180.575}},{t:this.shape_65},{t:this.shape_52,p:{x:218.65,y:312.125}},{t:this.shape_63},{t:this.shape_64},{t:this.shape_50,p:{x:293.65,y:312.125}},{t:this.shape_51,p:{x:306.15,y:312.125}},{t:this.shape_53,p:{x:332.125,y:299.475}}]},1).to({state:[{t:this.shape_60},{t:this.shape_61},{t:this.shape_62,p:{x:180.575}},{t:this.shape_65},{t:this.shape_52,p:{x:218.65,y:312.125}},{t:this.shape_63},{t:this.shape_64},{t:this.shape_50,p:{x:293.65,y:312.125}},{t:this.shape_51,p:{x:306.15,y:312.125}},{t:this.shape_53,p:{x:332.125,y:299.475}},{t:this.shape_66}]},1).to({state:[{t:this.shape_60},{t:this.shape_61},{t:this.shape_62,p:{x:180.575}},{t:this.shape_65},{t:this.shape_52,p:{x:218.65,y:312.125}},{t:this.shape_63},{t:this.shape_64},{t:this.shape_50,p:{x:293.65,y:312.125}},{t:this.shape_51,p:{x:306.15,y:312.125}},{t:this.shape_53,p:{x:332.125,y:299.475}},{t:this.shape_66},{t:this.shape_67}]},1).to({state:[{t:this.shape_60},{t:this.shape_61},{t:this.shape_62,p:{x:180.575}},{t:this.shape_65},{t:this.shape_52,p:{x:218.65,y:312.125}},{t:this.shape_63},{t:this.shape_64},{t:this.shape_50,p:{x:293.65,y:312.125}},{t:this.shape_51,p:{x:306.15,y:312.125}},{t:this.shape_56,p:{x:332.125,y:299.475}},{t:this.shape_66},{t:this.shape_67},{t:this.shape_53,p:{x:393.125,y:299.475}}]},1).to({state:[{t:this.shape_60},{t:this.shape_61},{t:this.shape_62,p:{x:180.575}},{t:this.shape_65},{t:this.shape_52,p:{x:218.65,y:312.125}},{t:this.shape_63},{t:this.shape_64},{t:this.shape_50,p:{x:293.65,y:312.125}},{t:this.shape_51,p:{x:306.15,y:312.125}},{t:this.shape_56,p:{x:332.125,y:299.475}},{t:this.shape_66},{t:this.shape_67},{t:this.shape_53,p:{x:393.125,y:299.475}},{t:this.shape_68,p:{x:406}}]},1).to({state:[{t:this.shape_60},{t:this.shape_61},{t:this.shape_62,p:{x:180.575}},{t:this.shape_65},{t:this.shape_52,p:{x:218.65,y:312.125}},{t:this.shape_63},{t:this.shape_64},{t:this.shape_50,p:{x:293.65,y:312.125}},{t:this.shape_51,p:{x:306.15,y:312.125}},{t:this.shape_56,p:{x:332.125,y:299.475}},{t:this.shape_66},{t:this.shape_67},{t:this.shape_53,p:{x:393.125,y:299.475}},{t:this.shape_69},{t:this.shape_68,p:{x:418.5}}]},1).to({state:[{t:this.shape_60},{t:this.shape_61},{t:this.shape_70},{t:this.shape_65},{t:this.shape_52,p:{x:218.65,y:312.125}},{t:this.shape_63},{t:this.shape_64},{t:this.shape_50,p:{x:293.65,y:312.125}},{t:this.shape_51,p:{x:306.15,y:312.125}},{t:this.shape_56,p:{x:332.125,y:299.475}},{t:this.shape_66},{t:this.shape_67},{t:this.shape_53,p:{x:393.125,y:299.475}},{t:this.shape_69},{t:this.shape_68,p:{x:418.5}},{t:this.shape_62,p:{x:456.775}}]},1).to({state:[{t:this.shape_60},{t:this.shape_61},{t:this.shape_70},{t:this.shape_65},{t:this.shape_52,p:{x:218.65,y:312.125}},{t:this.shape_63},{t:this.shape_64},{t:this.shape_50,p:{x:293.65,y:312.125}},{t:this.shape_51,p:{x:306.15,y:312.125}},{t:this.shape_56,p:{x:332.125,y:299.475}},{t:this.shape_66},{t:this.shape_67},{t:this.shape_53,p:{x:393.125,y:299.475}},{t:this.shape_69},{t:this.shape_68,p:{x:418.5}},{t:this.shape_62,p:{x:456.775}},{t:this.shape_71}]},1).to({state:[{t:this.shape_60},{t:this.shape_61},{t:this.shape_70},{t:this.shape_65},{t:this.shape_52,p:{x:218.65,y:312.125}},{t:this.shape_63},{t:this.shape_64},{t:this.shape_50,p:{x:293.65,y:312.125}},{t:this.shape_51,p:{x:306.15,y:312.125}},{t:this.shape_56,p:{x:332.125,y:299.475}},{t:this.shape_66},{t:this.shape_67},{t:this.shape_53,p:{x:393.125,y:299.475}},{t:this.shape_69},{t:this.shape_68,p:{x:418.5}},{t:this.shape_62,p:{x:456.775}},{t:this.shape_71},{t:this.shape_72}]},1).to({state:[{t:this.shape_60},{t:this.shape_61},{t:this.shape_70},{t:this.shape_65},{t:this.shape_52,p:{x:218.65,y:312.125}},{t:this.shape_63},{t:this.shape_64},{t:this.shape_50,p:{x:293.65,y:312.125}},{t:this.shape_51,p:{x:306.15,y:312.125}},{t:this.shape_56,p:{x:332.125,y:299.475}},{t:this.shape_66},{t:this.shape_67},{t:this.shape_53,p:{x:393.125,y:299.475}},{t:this.shape_69},{t:this.shape_68,p:{x:418.5}},{t:this.shape_62,p:{x:456.775}},{t:this.shape_71},{t:this.shape_72},{t:this.shape_58,p:{x:534.575,y:302.975}}]},1).to({state:[{t:this.shape_60},{t:this.shape_61},{t:this.shape_70},{t:this.shape_65},{t:this.shape_52,p:{x:218.65,y:312.125}},{t:this.shape_63},{t:this.shape_64},{t:this.shape_50,p:{x:293.65,y:312.125}},{t:this.shape_51,p:{x:306.15,y:312.125}},{t:this.shape_56,p:{x:332.125,y:299.475}},{t:this.shape_66},{t:this.shape_67},{t:this.shape_53,p:{x:393.125,y:299.475}},{t:this.shape_69},{t:this.shape_68,p:{x:418.5}},{t:this.shape_62,p:{x:456.775}},{t:this.shape_71},{t:this.shape_72},{t:this.shape_58,p:{x:534.575,y:302.975}},{t:this.shape_73,p:{x:555.475}}]},1).to({state:[{t:this.shape_60},{t:this.shape_61},{t:this.shape_70},{t:this.shape_65},{t:this.shape_52,p:{x:218.65,y:312.125}},{t:this.shape_63},{t:this.shape_64},{t:this.shape_50,p:{x:293.65,y:312.125}},{t:this.shape_51,p:{x:306.15,y:312.125}},{t:this.shape_56,p:{x:332.125,y:299.475}},{t:this.shape_66},{t:this.shape_67},{t:this.shape_53,p:{x:393.125,y:299.475}},{t:this.shape_69},{t:this.shape_68,p:{x:418.5}},{t:this.shape_62,p:{x:456.775}},{t:this.shape_71},{t:this.shape_72},{t:this.shape_58,p:{x:534.575,y:302.975}},{t:this.shape_74,p:{x:555.475}},{t:this.shape_73,p:{x:587.425}}]},1).to({state:[{t:this.shape_60},{t:this.shape_61},{t:this.shape_70},{t:this.shape_65},{t:this.shape_52,p:{x:218.65,y:312.125}},{t:this.shape_63},{t:this.shape_64},{t:this.shape_50,p:{x:293.65,y:312.125}},{t:this.shape_51,p:{x:306.15,y:312.125}},{t:this.shape_56,p:{x:332.125,y:299.475}},{t:this.shape_66},{t:this.shape_67},{t:this.shape_53,p:{x:393.125,y:299.475}},{t:this.shape_69},{t:this.shape_68,p:{x:418.5}},{t:this.shape_62,p:{x:456.775}},{t:this.shape_71},{t:this.shape_72},{t:this.shape_75,p:{x:534.575}},{t:this.shape_74,p:{x:555.475}},{t:this.shape_73,p:{x:587.425}},{t:this.shape_58,p:{x:608.125,y:302.975}}]},1).to({state:[{t:this.shape_60},{t:this.shape_61},{t:this.shape_70},{t:this.shape_65},{t:this.shape_52,p:{x:218.65,y:312.125}},{t:this.shape_63},{t:this.shape_64},{t:this.shape_50,p:{x:293.65,y:312.125}},{t:this.shape_51,p:{x:306.15,y:312.125}},{t:this.shape_56,p:{x:332.125,y:299.475}},{t:this.shape_66},{t:this.shape_67},{t:this.shape_53,p:{x:393.125,y:299.475}},{t:this.shape_69},{t:this.shape_68,p:{x:418.5}},{t:this.shape_62,p:{x:456.775}},{t:this.shape_71},{t:this.shape_72},{t:this.shape_75,p:{x:534.575}},{t:this.shape_74,p:{x:555.475}},{t:this.shape_73,p:{x:587.425}},{t:this.shape_58,p:{x:608.125,y:302.975}},{t:this.shape_76}]},1).to({state:[{t:this.shape_60},{t:this.shape_61},{t:this.shape_70},{t:this.shape_65},{t:this.shape_52,p:{x:218.65,y:312.125}},{t:this.shape_63},{t:this.shape_64},{t:this.shape_50,p:{x:293.65,y:312.125}},{t:this.shape_51,p:{x:306.15,y:312.125}},{t:this.shape_56,p:{x:332.125,y:299.475}},{t:this.shape_66},{t:this.shape_67},{t:this.shape_53,p:{x:393.125,y:299.475}},{t:this.shape_69},{t:this.shape_68,p:{x:418.5}},{t:this.shape_62,p:{x:456.775}},{t:this.shape_71},{t:this.shape_72},{t:this.shape_75,p:{x:534.575}},{t:this.shape_77},{t:this.shape_74,p:{x:587.425}},{t:this.shape_58,p:{x:608.125,y:302.975}},{t:this.shape_76},{t:this.shape_73,p:{x:654.025}}]},1).to({state:[{t:this.shape_60},{t:this.shape_61},{t:this.shape_70},{t:this.shape_65},{t:this.shape_52,p:{x:218.65,y:312.125}},{t:this.shape_63},{t:this.shape_64},{t:this.shape_50,p:{x:293.65,y:312.125}},{t:this.shape_51,p:{x:306.15,y:312.125}},{t:this.shape_56,p:{x:332.125,y:299.475}},{t:this.shape_66},{t:this.shape_67},{t:this.shape_53,p:{x:393.125,y:299.475}},{t:this.shape_69},{t:this.shape_68,p:{x:418.5}},{t:this.shape_62,p:{x:456.775}},{t:this.shape_71},{t:this.shape_72},{t:this.shape_78},{t:this.shape_77},{t:this.shape_74,p:{x:587.425}},{t:this.shape_75,p:{x:608.125}},{t:this.shape_76},{t:this.shape_73,p:{x:654.025}},{t:this.shape_58,p:{x:674.725,y:302.975}}]},1).to({state:[{t:this.shape_60},{t:this.shape_61},{t:this.shape_70},{t:this.shape_65},{t:this.shape_52,p:{x:218.65,y:312.125}},{t:this.shape_63},{t:this.shape_64},{t:this.shape_50,p:{x:293.65,y:312.125}},{t:this.shape_51,p:{x:306.15,y:312.125}},{t:this.shape_56,p:{x:332.125,y:299.475}},{t:this.shape_66},{t:this.shape_67},{t:this.shape_53,p:{x:393.125,y:299.475}},{t:this.shape_69},{t:this.shape_68,p:{x:418.5}},{t:this.shape_62,p:{x:456.775}},{t:this.shape_71},{t:this.shape_72},{t:this.shape_78},{t:this.shape_77},{t:this.shape_74,p:{x:587.425}},{t:this.shape_75,p:{x:608.125}},{t:this.shape_76},{t:this.shape_73,p:{x:654.025}},{t:this.shape_58,p:{x:674.725,y:302.975}}]},5).wait(1));

	// The_Body
	this.body = new lib.Thebody();
	this.body.name = "body";
	this.body.setTransform(553.3,383.1);
	this.body._off = true;
	new cjs.ButtonHelper(this.body, 0, 1, 2, false, new lib.Thebody(), 3);

	this.timeline.addTween(cjs.Tween.get(this.body).wait(214).to({_off:false},0).to({_off:true},14).wait(47));

	// light_from_behind
	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(190,162,124,0.2)").s().p("EgsvAifMgRxhN/MB9CAAAMgW3BMxQ5DKQ1pAAQ0XAAxXpCg");
	this.shape_79.setTransform(400.3,278.8293);
	this.shape_79._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_79).wait(214).to({_off:false},0).to({_off:true},14).wait(47));

	// back_of_tunnel
	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#1E120E").s().p("EggVASQMAAAgkfMBArAAAMAAAAkfg");
	this.shape_80.setTransform(383.225,327.575);
	this.shape_80._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_80).wait(214).to({_off:false},0).to({_off:true},14).wait(47));

	// celing
	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#482C24").s().p("EgjAAQcMgbggg3MB9CAAAMgg3Ag3g");
	this.shape_81.setTransform(400.3,105.55);
	this.shape_81._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_81).wait(214).to({_off:false},0).to({_off:true},14).wait(47));

	// floor
	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#321D17").s().p("Eg+gAMKIbg4SMBArAAAMAg3AYSg");
	this.shape_82.setTransform(400.3,522.15);
	this.shape_82._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_82).wait(214).to({_off:false},0).to({_off:true},14).wait(47));

	// Sides
	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#3D251E").s().p("Eg+gAu2MAAAhdrMB9CAAAMAAABdrg");
	this.shape_83.setTransform(400.3,300.125);
	this.shape_83._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_83).wait(214).to({_off:false},0).to({_off:true},14).wait(47));

	// back
	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(0,0,0,0.447)").s().p("AjPpKIGfAAIAAK+Qg+DHhQBbQhqB/iGAoIghANg");
	this.shape_84.setTransform(128.95,236.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(0,0,0,0.718)").s().p("Eg+rAEtIDCAAQgGmsARmzID4g0IAbHrIAAgEICmAAIAACYIHbgmIAAohIAhgNQCGgoBrh/QBQhcA+jGIAAOvIsPGaIAADJIjag1IlnCxIAAGYIixBRgEAt4gAPQi8hUhPgqIn9B1IAAlsIFNAAIAAn/IG+AAIAALoIDSAAIAADhgEgkHgIuIIsg+IAAERIC6AAIAACJImwhlIk2CVgEA6+gLEQhZgzgTgPIiXASIAAl+IHxAAIAAI0QiWhThYgzg");
	this.shape_85.setTransform(397.25,350.925);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(0,0,0,0.447)").s().p("Ai2pKIFYAAIAuK+Qg+DHhQBbQhqB/iGAoIghANg");
	this.shape_86.setTransform(128.95,236.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(0,0,0,0.718)").s().p("Eg+rAEtIDCAAQgGmsARmzID4g0IAbHrIAAgEICmAAIAACYIHbgmIAAohIAhgNQCGgoBrh/QBQhcA+jGIAAOvIsPGaIAADJIjag1IlnCxIAAGYIixBRgEAt4gAPQi8hUhPgqIn9B1IAAlsIFNAAIAAn/IG+AAIAALoIDSAAIAADhgEgkHgIuIIsg+IAAERIDfAAIAACFInVhhIk2CVgEA6+gLEQhZgzgTgPIiXASIAAl+IHxAAIAAI0QiWhThYgzg");
	this.shape_87.setTransform(397.25,350.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_85},{t:this.shape_84}]},132).to({state:[{t:this.shape_85},{t:this.shape_84}]},9).to({state:[]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},58).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[]},1).wait(72));

	// sun
	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(255,242,34,0.718)").s().p("AiQIGIAArnIkeAAQAmhEA7g7QClilDpAAQDTAACbCGIAAEsQi/AiivBbIABBNIgBDoIAABLIAABcg");
	this.shape_88.setTransform(705.675,283.575);
	this.shape_88._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_88).wait(132).to({_off:false},0).wait(9).to({_off:true},1).wait(58).to({_off:false},0).wait(2).to({_off:true},1).wait(72));

	// left_side
	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(255,84,151,0.718)").s().p("AhsjmIDZA0IAAFLIjZBOg");
	this.shape_89.setTransform(60.575,421.35);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(255,10,10,0.718)").s().p("AmvrjINgBfIAAViItgAGg");
	this.shape_90.setTransform(186.25,485.125);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(251,245,223,0.718)").s().p("ABaSxIAA1jIlEgvIAAvPIHVBuMAAAAjzg");
	this.shape_91.setTransform(220.475,438.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_91},{t:this.shape_90},{t:this.shape_89}]},132).to({state:[{t:this.shape_91},{t:this.shape_90},{t:this.shape_89}]},9).to({state:[]},1).to({state:[{t:this.shape_91},{t:this.shape_90},{t:this.shape_89}]},58).to({state:[{t:this.shape_91},{t:this.shape_90},{t:this.shape_89}]},1).to({state:[{t:this.shape_91},{t:this.shape_90},{t:this.shape_89}]},1).to({state:[]},1).wait(72));

	// left_front
	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(255,54,85,0.718)").s().p("AiyElIAAmXIFliyIAAHNIAAAAIAAAAIlXB8g");
	this.shape_92.setTransform(31.725,427.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(255,60,60,0.718)").s().p("ArKLkIAAvJICKg2IAOAAIFYh7IABAAIAAAAIDZhOILLj/IAAEXIAASwg");
	this.shape_93.setTransform(71.5,485.125);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(255,253,208,0.718)").s().p("ABYFEIrLD/IAAoUITnqJIAAQ7IocB6g");
	this.shape_94.setTransform(134.25,378.7375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92}]},132).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92}]},9).to({state:[]},1).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92}]},58).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92}]},1).to({state:[]},1).wait(72));

	// right_sides
	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(246,255,0,0.718)").s().p("AAAg1IABAAIgBBpIAAACg");
	this.shape_95.setTransform(763.7125,306.5125);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(255,182,143,0.718)").s().p("AgyOCIBCAHIANxmIjLhhIAAgFIABABIABkFIAAhKIABi3IAAgTIAAguIAAgYIgBgXIAAgBIAAhFIABhqIgBAAIABkVIFaDIMAAAAouIjhAFg");
	this.shape_96.setTransform(781,414);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(255,102,20,0.718)").s().p("AD/IdIgXgLIkAh5IjnhuIgCjdIAAhaIAAhMIABjnIABhOQCuhbC+giQBKgOBLgEIgBEVIgBBsIAABCIABABIAAAAIABAYIAAAXIAAAuIAAATIgBC3IAABJIgBEFg");
	this.shape_97.setTransform(738,327.525);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(255,89,89,0.718)").s().p("ABeRPIAA2CImQAAIAAqUIJkiMMAAAAing");
	this.shape_98.setTransform(633.5,446.075);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(255,182,143,0.718)").s().p("AgyOCIBCAHIANxmIjLhhIABgEIABkFIAAhKIABi3IAAgTIAAguIAAgYIgBgXIAAgBIAAhFIABhqIgBAAIABkVIFaDIMAAAAouIjhAFg");
	this.shape_99.setTransform(781,414);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(255,102,20,0.718)").s().p("AkBEuIAAjiIAAhbIAAhLIABjoIABhNQCuhcC+giQBKgNBLgFIgBEVIgBBsIAABDIABAAIAAABIABAXIAAAYIAAAtIAAATIgBC4IAABJIgBEFIgBAFg");
	this.shape_100.setTransform(738,327.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95}]},132).to({state:[{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_98}]},9).to({state:[]},1).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95}]},58).to({state:[{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_98}]},1).to({state:[{t:this.shape_100},{t:this.shape_99},{t:this.shape_95},{t:this.shape_98}]},1).to({state:[]},1).wait(72));

	// right_front
	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(255,124,124,0.718)").s().p("AouFOIAAqgIRdCUIAAH1QlsAcmdAAQimAAiugFg");
	this.shape_101.setTransform(720,523.4686);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(255,141,141,0.718)").s().p("AIGNLIxciUIAA4HIStI2IgNRrIhEgGg");
	this.shape_102.setTransform(724.025,420.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_102},{t:this.shape_101}]},132).to({state:[{t:this.shape_102},{t:this.shape_101}]},9).to({state:[]},1).to({state:[{t:this.shape_102},{t:this.shape_101}]},58).to({state:[{t:this.shape_102},{t:this.shape_101}]},1).to({state:[{t:this.shape_102},{t:this.shape_101}]},1).to({state:[]},1).wait(72));

	// front_middle
	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(161,141,255,0.718)").s().p("AlwQUMAAAggnQGFCIFcEuIAAZxg");
	this.shape_103.setTransform(565.95,310.85);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(255,143,198,0.718)").s().p("EADZAiLIDvgEIAAAGgEgHHAiNMAAAhEZIOPHDMAAAAm3IpkAAIgYWfg");
	this.shape_104.setTransform(374.6,340.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_104},{t:this.shape_103}]},132).to({state:[{t:this.shape_104},{t:this.shape_103}]},9).to({state:[]},1).to({state:[{t:this.shape_104},{t:this.shape_103}]},58).to({state:[{t:this.shape_104},{t:this.shape_103}]},1).to({state:[{t:this.shape_104},{t:this.shape_103}]},1).to({state:[]},1).wait(72));

	// left_middle
	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(109,79,255,0.718)").s().p("AofQUIAA4/IQ/noMAAAAgng");
	this.shape_105.setTransform(474.65,310.85);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(172,79,255,0.718)").s().p("A1+rOIJlAAIQ/AAIRyAAIAAWEMgsvAAZg");
	this.shape_106.setTransform(499.675,487.175);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(255,75,165,0.718)").s().p("EgGoAiNMAAAg60INRplMAAABEZg");
	this.shape_107.setTransform(286.45,340.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_107},{t:this.shape_106},{t:this.shape_105}]},132).to({state:[{t:this.shape_105},{t:this.shape_106},{t:this.shape_107}]},9).to({state:[]},1).to({state:[{t:this.shape_107},{t:this.shape_106},{t:this.shape_105}]},58).to({state:[{t:this.shape_105},{t:this.shape_106},{t:this.shape_107}]},1).to({state:[{t:this.shape_105},{t:this.shape_106},{t:this.shape_107}]},1).to({state:[]},1).wait(72));

	// road
	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#747579").s().p("Eg+jAPnMAt+geyQFug2FKA2MBERAeyg");
	this.shape_108.setTransform(400.425,503.6263);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#747579").s().p("Eg+jAPxMAtugfGQGAg2FcA2MBD9AfGg");
	this.shape_109.setTransform(400.425,502.625);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#747579").s().p("Eg+jAP7MAtegfaQGSg2FuA2MBDpAfag");
	this.shape_110.setTransform(400.425,501.625);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#747579").s().p("Eg+jAQFMAtOgfuQGkg3GAA3MBDVAfug");
	this.shape_111.setTransform(400.425,500.6125);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#747579").s().p("Eg+jAQPMAs+ggCQG3g3GRA3MBDBAgCg");
	this.shape_112.setTransform(400.425,499.6125);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#747579").s().p("Eg+jAQZMAsuggWQHJg3GjA3MBCtAgWg");
	this.shape_113.setTransform(400.425,498.6125);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#747579").s().p("Eg+jAQjMAseggqQHbg3G0A3MBCaAgqg");
	this.shape_114.setTransform(400.425,497.6125);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#747579").s().p("Eg+jAQtMAsPgg+QHsg3HGA3MBCGAg+g");
	this.shape_115.setTransform(400.425,496.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#747579").s().p("Eg+jAQ3MAr/ghSQH/g3HXA3MBByAhSg");
	this.shape_116.setTransform(400.425,495.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#747579").s().p("Eg+jARBMArvghmQIRg3HpA3MBBeAhmg");
	this.shape_117.setTransform(400.425,494.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#747579").s().p("Eg+jARLMArfgh6QIjg3H7A3MBBKAh6g");
	this.shape_118.setTransform(400.425,493.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#747579").s().p("Eg+jARWMArPgiPQI2g3IMA3MBA2AiPg");
	this.shape_119.setTransform(400.425,492.5875);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#747579").s().p("Eg+jARgMAq/gijQJIg3IeA3MBAiAijg");
	this.shape_120.setTransform(400.425,491.5875);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#747579").s().p("Eg+jARpMAqvgi2QJag3IvA3MBAPAi2g");
	this.shape_121.setTransform(400.425,490.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#747579").s().p("Eg+jARzMAqfgjJQJsg4JBA4MA/7AjJg");
	this.shape_122.setTransform(400.425,489.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#747579").s().p("Eg+jAR+MAqPgjeQJ/g5JSA5MA/nAjeg");
	this.shape_123.setTransform(400.425,488.5875);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#747579").s().p("Eg+jASIMAqAgjyQKQg5JkA5MA/TAjyg");
	this.shape_124.setTransform(400.425,487.5875);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#747579").s().p("Eg+jASSMApwgkGQKig5J2A5MA+/AkGg");
	this.shape_125.setTransform(400.425,486.5875);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#747579").s().p("Eg+jAScMApggkaQK0g5KIA5MA+rAkag");
	this.shape_126.setTransform(400.425,485.5875);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#747579").s().p("Eg+jASmMApQgkuQLHg5KYA5MA+YAkug");
	this.shape_127.setTransform(400.425,484.575);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#747579").s().p("Eg+jASwMApAglCQLZg5KpA5MA+FAlCg");
	this.shape_128.setTransform(400.425,483.575);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#747579").s().p("Eg+jAS6MAowglWQLrg5K7A5MA9xAlWg");
	this.shape_129.setTransform(400.425,482.575);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#747579").s().p("Eg+jATEMAogglqQL9g5LNA5MA9dAlqg");
	this.shape_130.setTransform(400.425,481.575);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#747579").s().p("Eg+jATOMAoQgl+QMQg6LeA6MA9JAl+g");
	this.shape_131.setTransform(400.425,480.5625);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#747579").s().p("Eg+jATYMAoAgmSQMig6LwA6MA81AmSg");
	this.shape_132.setTransform(400.425,479.5625);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#747579").s().p("Eg+jATiMAnxgmmQMzg6MCA6MA8hAmmg");
	this.shape_133.setTransform(400.425,478.5625);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#747579").s().p("Eg+jATsMAnhgm6QNFg6MUA6MA8NAm6g");
	this.shape_134.setTransform(400.425,477.5625);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#747579").s().p("Eg+jAT2MAnRgnOQNXg6MlA6MA76AnOg");
	this.shape_135.setTransform(400.425,476.5625);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#747579").s().p("Eg+jAUAMAnBgniQNqg6M2A6MA7mAnig");
	this.shape_136.setTransform(400.425,475.55);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#747579").s().p("Eg+jAUKMAmxgn2QN8g6NIA6MA7SAn2g");
	this.shape_137.setTransform(400.425,474.55);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#747579").s().p("Eg+jAUUMAmhgoKQOOg6NaA6MA6+AoKg");
	this.shape_138.setTransform(400.425,473.55);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#747579").s().p("Eg+jAUeMAmRgoeQOgg6NsA6MA6qAoeg");
	this.shape_139.setTransform(400.425,472.55);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#747579").s().p("Eg+jAUoMAmBgoyQOzg6N9A6MA6WAoyg");
	this.shape_140.setTransform(400.425,471.5375);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#747579").s().p("Eg+jAUyMAlxgpGQPFg6OPA6MA6CApGg");
	this.shape_141.setTransform(400.425,470.5375);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#747579").s().p("Eg+jAU8MAlhgpaQPXg6OgA6MA5vApag");
	this.shape_142.setTransform(400.425,469.5375);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#747579").s().p("Eg+jAVGMAlSgpuQPog6OyA6MA5bApug");
	this.shape_143.setTransform(400.425,468.5375);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#747579").s().p("Eg+jAVQMAlCgqCQP7g7PDA7MA5HAqCg");
	this.shape_144.setTransform(400.425,467.525);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#747579").s().p("Eg+jAVaMAkygqWQQNg7PVA7MA4zAqWg");
	this.shape_145.setTransform(400.425,466.525);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#747579").s().p("Eg+jAVkMAkigqpQQfg8PnA8MA4fAqpg");
	this.shape_146.setTransform(400.425,465.5375);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#747579").s().p("Eg+jAVuMAkSgq9QQxg8P5A8MA4LAq9g");
	this.shape_147.setTransform(400.425,464.5375);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#747579").s().p("Eg+jAV4MAkCgrRQREg8QKA8MA33ArRg");
	this.shape_148.setTransform(400.425,463.525);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#747579").s().p("Eg+jAWCMAjygrlQRWg8QcA8MA3jArlg");
	this.shape_149.setTransform(400.425,462.525);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#747579").s().p("Eg+jAWMMAjigr5QRog8QtA8MA3QAr5g");
	this.shape_150.setTransform(400.425,461.525);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#747579").s().p("Eg+jAWWMAjSgsNQR7g8Q+A8MA28AsNg");
	this.shape_151.setTransform(400.425,460.525);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#747579").s().p("Eg+jAWgMAjDgshQSMg9RQA9MA2oAshg");
	this.shape_152.setTransform(400.425,459.5125);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#747579").s().p("Eg+jAWqMAizgs1QSeg9RiA9MA2UAs1g");
	this.shape_153.setTransform(400.425,458.5125);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#747579").s().p("Eg+jAW0MAijgtJQSwg9R0A9MA2AAtJg");
	this.shape_154.setTransform(400.425,457.5125);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#747579").s().p("Eg+jAW+MAiTgtdQTDg9SFA9MA1sAtdg");
	this.shape_155.setTransform(400.425,456.5125);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#747579").s().p("Eg+jAXIMAiDgtxQTVg9SXA9MA1YAtxg");
	this.shape_156.setTransform(400.425,455.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#747579").s().p("Eg+jAXSMAhzguFQTng9SoA9MA1FAuFg");
	this.shape_157.setTransform(400.425,454.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#747579").s().p("Eg+jAXcMAhjguZQT5g9S6A9MA0xAuZg");
	this.shape_158.setTransform(400.425,453.5032);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("rgba(100,95,97,0.749)").s().p("Eg+jAPnMAt+geyQFug2FKA2MBERAeyg");
	this.shape_159.setTransform(400.425,503.625);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("rgba(83,73,72,0.502)").s().p("Eg+jAPnMAt+geyQFug2FKA2MBERAeyg");
	this.shape_160.setTransform(400.425,503.625);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("rgba(67,51,48,0.251)").s().p("Eg+jAPnMAt+geyQFug2FKA2MBERAeyg");
	this.shape_161.setTransform(400.425,503.625);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("rgba(50,29,23,0)").s().p("Eg+jAPnMAt+geyQFug2FKA2MBERAeyg");
	this.shape_162.setTransform(400.425,503.6263);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_108}]},65).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[]},1).to({state:[{t:this.shape_108}]},87).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[]},1).to({state:[]},1).wait(66));

	// green_ground_
	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("Ag/BAIAAh/IB/AAIAAB/g");
	this.shape_163.setTransform(246.925,307.025);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AK1BAIAAh/ICAAAIAAB/gAs0BAIAAh/ICAAAIAAB/g");
	this.shape_164.setTransform(322.625,307.025);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AWsBAIAAh/ICAAAIAAB/gAhBBAIAAh/IB/AAIAAB/gA4rBAIAAh/IB/AAIAAB/g");
	this.shape_165.setTransform(398.55,307.025);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#006205").s().p("EgRvAmhQgnAHglAEQnRA2iHkiIgLAvQiRhjiGh/QgjgOgigQQpbkKm8qcQgcAYgfAWQmGEcoqjOQg0gTg1gXQptkSnCq7QlToNheoXQgeixgEiwQgRrLGrk2QGsk2JtETQJcELG6KcQAdgZAfgWQGrk3JtEUQFOCTEbENIBFAcQHiDWF8HVQBfjimaj5QmZj6WNo4QWMo4KAh7QA9gNA4gGQFqgqChClQAngGAmgEQKOhNABJdICKhsQN4qwKAh8QA8gMA6gHQKihOgUKDQgPHlmRKnQiFDgitD0Qq9PbvMLxQvLLwqiBOQqOBLABpeQhGA5hGA2QvLLxqhBNQhJAIhAAAQkBAAiBiEg");
	this.shape_166.setTransform(464.4481,512.5653);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#006205").s().p("EgRdAnSQgOgMgOgNIgjAGIgqAFQmuAxiVjzQgLgSgLgUIgCgFIgMAtQh+hXh2hsIglghIgYgKIgugUQpPkGm3qGIgYghIgbAVIggAZQl1EPoJitIg7gVIgtgRIg8gZQpckMm8qbIgfgwQlQoLhgoTIgDgQQgfixgEiyIAAgBQgQrQGtk6IAegUQGnkcJdEMIALAFQJZEPG5KcIAQgNIAsgiIATgOQGqkmJkEQIACABQA4AYA1AcQBIAlBFArQDCB4CvCmIABABIA+AaIAHADQHkDXF8HVIAEAFQBgjkmcj7IgFgEQmPj9WPo5IABgBQVuotKHiFIAmgHQAngIAlgGIArgFQFAglCkB9QAXARAUATIATgDIA6gHQJxhJAgIjQADAcAAAeIBchJIAvgkQNNqQJtiTIBKgQIAogHQAogHAngFQJ7hJAWI2QABAngBApQgQHfmDKaIgQAcQiDDcinDvIgKAOQrDPkvSL3IgLAJQvILtqiBQIgFABQqRBLgCpfIAAgEQhFA4hGA2IgCACQvBLrqfBYIgYADQhJAIhAAAQjpAAiChsg");
	this.shape_167.setTransform(465.682,512.5682);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#006205").s().p("EgRmAnpQgPgLgNgNIgkAGIgqAFQmyAxiVj2QgMgRgKgUIgCgEIgNAsQh/hZh3hsIglgiIgYgKIgvgUQpTkJm6qMIgYggIgcAWIggAZQl4ERoNiwQgdgJgegMIgugRIg8gaQphkOm+qiIgfgwQlSoQhioXIgDgRQgeizgEiyIAAgBQgRrXGwk8IAfgVQGpkgJiEPIALAGQJeERG9KiIAQgMQAVgSAXgRIATgOQGtkpJpETIACABQA4AYA2AcQBIAlBGAsQDDB5CwCoIACABIA/AaIAHADQHmDZGAHZIAEAFQBgjmmfj+IgFgDQmSkAWao/IABgBQV5oyKMiGIAngHQAngIAlgGIArgFQFDglClB/QAXAQAVATIASgDIA7gHQJ1hJAgIpQADAbABAdIBdhJIAvglQNTqWJziUIBKgQIApgHQAogHAngFQJ/hIAVI9QABAmgBAqQgRHjmFKfIgRAdQiDDeipDwIgKAPQrIPtvZL+IgKAIQvQL1qoBRIgFABQqWBMgBplIAAgEQhGA5hGA2IgCACQvJLzqlBYIgYADQhJAIhAAAQjsAAiChug");
	this.shape_168.setTransform(466.9303,512.5831);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#006205").s().p("EgRvAoAQgPgLgOgMIgkAGIgrAFQm0AxiWj5QgMgRgKgSIgCgEIgNAqQiBhah4htIglgiIgZgKIgvgUQpWkMm+qSIgZgfIgbAWIggAZQl8EUoRiyIg8gWQgXgIgXgJIg9gaQpkkSnCqoIgfgxQlUoThiodIgCgQQgfi1gEi0IAAgBQgRrdGyk/IAfgVQGskjJoERIALAGQJhETHBKoIAQgLIAsgjIAUgOQGwktJuEWIACABQA4AZA3AcQBJAmBGAsQDFB6CxCpIACABIA/AaIAHAEQHqDbGDHeIAEAEQBhjomikAIgGgDQmVkCWkpFIACgBQWFo4KQiHIAngHQAogJAmgFIAqgGQFGgkCmCBQAYAQAUASIATgDIA8gHQJ4hIAfIuQAFAbABAbIBehKIAwglQNZqdJ4iUIBLgQIAogIQApgHAngEQKDhIAUJEQACAngDAqQgRHnmIKlIgQAcQiFDgipDzIgLAOQrNP2vfMGIgLAIQvXL8qtBSIgGABQqaBMgBpqIgBgEQhGA5hGA3IgDACQvQL6qqBZIgYADQhJAIhAAAQjvAAiDhwg");
	this.shape_169.setTransform(468.1501,512.5828);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#006205").s().p("EgR4AoYQgPgLgOgMIglAFIgrAGQm4AxiWj9QgMgPgKgRIgCgEIgOAoQiBhah5hvIgmghIgZgLIgvgUQpbkOnAqZIgZgdIgcAWIghAZQl+EVoWi0Ig8gVIgvgSIg9gbQpokUnFqvIgfgxQlWoYhiohIgDgRQgfi2gEi2IAAgBQgRrjG1lCIAegVQGwknJsEVIALAFQJnEWHEKuIAQgKIAsgkIAUgOQGzkwJzEYIACABQA5AZA3AdQBJAmBHAsQDGB8CzCrIABABIBAAaIAIADQHtDeGGHiIAEAEQBhjqmlkCIgFgDQmZkFWwpKIABgBQWRo+KViIIAngHQAogJAmgFIArgGQFJglCnCEQAYAPAVASIATgDIA8gHQJ8hIAfI1QAEAZACAbIBfhMIAwglQNhqjJ8iVIBMgQIAogIQAqgHAngEQKGhIATJLQACAngCAqQgSHsmLKqIgQAdQiGDiirD0IgKAPQrSP/vnMNIgLAIQveMEqyBSIgGABQqfBNgBpxIAAgDQhHA6hHA3IgDACQvYMBqvBaIgYADQhJAIhBAAQjxAAiEhxg");
	this.shape_170.setTransform(469.3753,512.597);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#006205").s().p("EgSBAovIgegWIglAFIgrAGQm7AxiXkAQgLgOgLgQIgCgEIgPAmQiChbh6hwIgnghIgYgLIgwgUQpfkRnDqfIgagcIgcAWIghAaQmBEXoai3Ig9gVIgvgTIg9gaQpskXnIq2IgggxQlYodhjomIgDgRQgei3gFi3IAAgBQgRrpG3lGIAfgVQG0kqJwEXIAMAFQJrEZHHK0IAQgKQAWgSAXgRIATgPQG3kzJ4EbIACABQA5AZA4AdQBKAmBHAtQDIB9CzCsIACABIBBAbIAHADQHxDgGIHmIAEAEQBijsmnkEIgGgEQmckGW7pQIABgBQWcpEKaiJIAngIQApgIAmgFIAsgGQFLglCoCGQAYAOAVASIAUgDIA8gHQKAhIAeI7QAFAYADAaIBfhMIAxgmQNoqqKBiVQAmgJAmgHIApgIQAqgHAngEQKKhHASJRQACAogCAqQgSHvmOKwIgRAdQiGDkisD3IgLAOQrXQJvuMTIgKAJQvmMLq4BTIgFABQqkBOgBp3IgBgDQhHA6hIA4IgCACQvgMJq0BaIgYADQhJAIhBAAQj0AAiFhzg");
	this.shape_171.setTransform(470.6005,512.5815);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#006205").s().p("EgSKApGQgQgKgOgLIgmAFIgrAGQm/AxiXkDQgMgNgKgPIgCgEIgQAkQiDhch6hxIgnghIgZgKIgwgVQpjkUnHqmIgagaIgcAXIghAZQmEEaofi5QgegKgfgMIgvgTIg+gaQpwkbnLq8IgggyQlaohhjoqIgDgRQgfi5gEi5IAAgBQgSrvG6lIIAfgWQG3kuJ1EaIAMAFQJvEbHLK6IAQgIIAtgkIATgPQG6k3J9EeIACABQA6AaA4AdQBLAnBHAtQDJB9C1CuIACACIBBAbIAIADQH1DhGKHsIAEADQBjjumqkHIgGgDQmfkJXFpVIABgBQWopKKeiKIAogIQApgIAmgFIAtgGQFOglCoCIQAZAOAWARIATgDIA9gHQKEhIAdJCQAGAWAEAZIBfhNIAxgmQNvqwKGiWQAngJAmgHIApgIQAqgHAogEQKOhHARJYQABAogCArQgTHzmQK2IgRAdQiHDlitD5IgLAPQrcQSv1MaIgLAJQvtMSq9BUIgFABQqpBOgBp8IgBgDQhIA6hIA4IgCACQvoMRq5BaIgYAEQhJAIhBAAQj3AAiGh1g");
	this.shape_172.setTransform(471.8366,512.586);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#006205").s().p("EgSTApdIgfgVIgmAGIgrAGQnCAxiYkHQgMgMgKgNIgCgFIgRAjQiEhdh7hyIgnghIgZgKIgxgVQpnkXnJqsIgbgYIgcAWIgiAaQmHEcoji8Ig9gWIgwgTIg+gbQp1kdnNrDIghgyQlbomhkovIgDgRQgfi6gFi7IAAAAQgRr2G8lLIAfgWQG6kxJ6EcIAMAFQJ0EeHOLAIAQgIIAtgkIAUgPQG9k6KCEgIACACQA6AZA5AeQBLAnBIAuQDLB+C2CwIACABIBCAbIAHAEQH4DjGOHwIAEADQBjjwmtkJIgGgDQmikMXPpaIACgBQWzpQKjiLIApgIQAogIAogGIAsgFQFRglCpCKQAZANAWARIAUgDIA9gHQKJhIAcJIQAGAWAFAXIBghNIAxgnQN2q2KKiXQAogJAmgHIAqgIQAqgHAogEQKShGAQJeQABApgCArQgUH3mSK7IgSAeQiIDniuD7IgLAPQrhQav8MiIgKAIQv2MarBBVIgGABQqtBPgCqCIAAgDQhJA7hIA4IgCACQvwMZq+BaIgZADQhKAJhCAAQj4AAiGh3g");
	this.shape_173.setTransform(473.0636,512.5839);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#006205").s().p("EgScAp0QgQgJgPgLIgmAGIgsAGQnGAxiYkKQgMgLgKgNIgCgEIgRAhQiFhdh8h0IgoggIgZgLIgxgVQpskanMqyIgbgXIgcAXIgiAZQmKEeoni+Ig+gWIgwgTIg/gbQp5khnQrJIghgzQleoqhkozIgDgRQgfi8gFi8IAAgBQgRr8G+lOIAggWQG9k1J/EfIAMAFQJ4EgHRLHIAQgHQAXgTAXgSIAUgPQHAk9KHEjIACABQA7AaA5AeQBMAnBJAuQDLCAC4CxIACACIBCAbIAIADQH8DmGQH1IAEACQBjjymvkLIgGgDQmmkOXbphIABgBQW/pVKoiMIApgIQApgIAngGIAtgFQFTglCrCMQAZANAXAQIATgDIA+gHQKMhIAcJOQAHAVAFAWIBhhOIAygnQN8q9KQiXQAngJAngHIAqgIQAqgHApgEQKVhGAPJlQABApgCArQgVH8mULAIgSAeQiJDpivD9IgLAPQrmQkwDMpIgLAIQv9MirGBVIgGABQqyBPgBqIIgBgCQhJA7hJA5IgCACQv3MgrEBbIgZADQhKAIhCAAQj6AAiIh4g");
	this.shape_174.setTransform(474.2855,512.5878);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#006205").s().p("EgSlAqLQgRgIgPgLIgmAGIgtAGQnIAxiakOQgLgJgKgMIgCgEIgSAgQiGhfh9h0IgoghIgagLIgxgWQpvkcnQq4IgbgWIgdAXIgiAaQmNEgosjAQgegLgggMIgwgTIg/gcQp9kjnUrQIgggzQlgovhlo4IgDgRQggi9gEi+IAAgBQgRsBHAlSIAggXQHAk3KEEhIANAFQJ8EjHVLNIAQgHIAtglIAVgPQHDlBKMEmIACABQA7AbA6AeQBMAoBJAuQDOCBC5CzIACABIBCAcIAIADQH/DoGUH5IAEADQBkj0mzkOIgGgEQmpkQXlpmIACgBQXKpaKtiNIApgJQApgIAogGIAtgFQFWgmCsCPQAZAMAXAQIAUgDIA+gHQKRhIAbJVQAHATAGAVIBihPIAygnQODrDKUiYQAogJAngHIArgIQAqgHApgEQKZhGAOJtQABAogCAsQgWIAmXLFIgRAfQiKDrixD/IgKAPQrsQtwKMvIgLAJQwEMprMBVIgGABQq3BRgBqOIgBgDQhJA9hKA5IgCACQv+MnrJBcIgZADQhKAIhCAAQj9AAiJh6g");
	this.shape_175.setTransform(475.5338,512.5874);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#006205").s().p("EgSvAqjQgQgJgQgKIgnAFIgsAGQnMAyiakRQgLgJgKgKIgCgEQgKAOgJAPQiHhfh9h2IgqggIgZgLIgygWQpzkgnTq+IgbgTIgdAWQgRAOgSAMQmQEjowjDIg/gXIgwgUIhAgcQqBkmnWrWIghgzQlio0hlo9IgDgRQggi/gEi/IAAgBQgSsHHDlVIAggXQHEk7KJEjIAMAGQKBElHYLTIAQgFIAugmIAUgPQHHlFKREpIACABQA8AbA6AeQBMAoBKAvQDPCCC6C1IADABIBDAdIAHADQIDDpGWH+IAEACQBlj2m2kQIgFgDQmtkTXwprIABgBQXWpgKyiPIAqgIQApgJAogFIAugGQFYglCtCQQAaAMAXAPIAUgDIA/gHQKUhHAbJbQAIASAGAUIBihQIAzgnQOKrKKZiZIBQgQIAqgIQArgHApgDQKdhGANJ0QABApgCArQgXIFmZLKIgSAfQiKDtiyEBIgLAPQrxQ2wRM3IgKAIQwMMxrRBWIgGABQq8BRgBqUIgBgCQhKA9hKA6IgCACQwGMurOBdIgaADQhKAIhCAAQj/AAiLh7g");
	this.shape_176.setTransform(476.759,512.6003);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#006205").s().p("EgS3Aq5QgRgIgQgKIgnAGIgtAGQnPAyibkVQgLgHgKgKIgCgDIgUAbQiHhgh/h3IgqggIgZgLIgygWQp4kinVrFIgcgTIgdAYIgjAaQmTEko0jFQgggLgggMIgxgUIhAgcQqFkqnZrcIghg0Qlko4hmpCIgDgRQggjAgEjAIAAgBQgSsOHGlYIAggXQHHk/KOEnIAMAFQKGEnHbLZIAQgEQAWgUAYgSIAUgPQHLlIKVErIACACQA8AaA7AfQBNApBLAvQDQCDC7C2IADACIBDAcIAIADQIHDsGYICIAEACQBlj4m4kSIgGgEQmwkVX8pxIABgBQXhpmK3iPIAqgIQAqgJAogFIAtgGQFcgmCtCTQAaAMAYAOIAUgDIBAgHQKYhHAaJhQAIARAHATIBkhQIAygoQORrQKeiaIBQgQIAsgIQArgHApgEQKhhEAMJ5QABAqgCAsQgYIJmcLQIgSAeQiLDvi0EEIgKAPQr2Q/wYM9IgLAJQwTM4rWBXIgHABQrABSgBqaIgBgCQhKA9hLA7IgCACQwOM2rTBdIgaADQhKAIhCAAQkCAAiLh+g");
	this.shape_177.setTransform(477.9842,512.604);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#006205").s().p("EgTBArRQgRgIgQgKIgnAGIguAGQnSAyibkYQgLgHgKgIIgCgEIgVAaQiIhhh/h4IgrggIgagLIgygWQp8klnYrLIgcgRIgeAXIgjAbQmWEmo4jIIhAgXIgygUIhAgdQqJksndrjIghg0Qllo9hnpGIgDgSQggjBgEjCIAAgBQgSsUHIlbIAggXQHKlCKTEpIAMAFQKKEqHfLfIAQgEQAXgUAXgSIAVgPQHOlLKaEuIACABQA9AbA7AfQBNApBLAwQDSCEC9C4IACABIBEAdIAIADQIKDuGcIGIAEACQBlj6m7kUIgFgEQm0kXYGp3IABgBQXupsK7iQIAqgIQAqgJApgGIAugFQFegmCuCVQAbALAYAOIAUgDIBAgHQKchHAaJnQAJAQAHASIBkhRIAzgoQOYrXKjiaIBRgQIArgIQAsgHApgEQKlhEALKBQABApgCAtQgZINmfLVIgRAfQiNDxi0EFIgLAQQr7RIwfNEIgLAJQwaM/rcBYIgGABQrFBSgBqfIgBgCQhLA+hLA7IgDACQwVM9rYBeIgaADQhLAIhDAAQkEAAiMh/g");
	this.shape_178.setTransform(479.2458,512.6168);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#006205").s().p("EgTKAroQgSgHgQgKIgnAHIguAFQnWAyibkbQgLgGgKgHIgCgDIgWAYQiJhiiAh5IgrggIgagLIgzgXQp/koncrRIgdgPIgdAXIgjAbQmaEoo9jKIhAgYIgygUIhAgdQqNkwngrpIghg0QlopBhnpMIgDgRQggjDgFjDIAAgBQgSsaHKleIAhgYQHOlGKXEsIANAGQKOEsHiLlIAQgDIAvgmIAUgQQHRlOKgExIACABQA9AbA7AfQBPAqBLAwQDTCGC+C4IADACIBFAcIAHAEQIODxGfIKIADACQBmj9m9kWIgGgEQm3kaYRp8IABAAQX5pyLAiRIAqgJQArgIApgGIAugGQFhgmCvCXQAbALAZAOIAUgEIBAgHQKhhGAYJtQAKAPAIAQIBlhRIAzgpQOfrcKnibIBSgRIAsgIQAsgGApgFQKphDAKKHQABAqgDAtQgZIRmhLbIgSAfQiNDzi2EHIgLAQQr/RRwmNLIgLAJQwjNHrhBYIgGABQrKBTgBqlIgBgCQhLA+hMA8IgCACQwdNFreBeIgaADQhKAIhDAAQkHAAiNiBg");
	this.shape_179.setTransform(480.4553,512.5997);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#006205").s().p("EgTTAr/QgSgHgQgIIgoAGIguAFQnZAyickeIgUgKIgCgEIgXAWQiKhjiBh6IgsggIgagLIgzgXQqEkrnerXIgegOIgdAYIgjAaQmdErpBjMIhBgZIgygUIhBgdQqRkznjrwIghg1QlqpFhopQIgDgRQggjFgFjFIAAgBQgSsgHNlhIAhgYQHQlJKdEuIANAGQKTEvHlLrIAQgDIAvgmIAVgPQHUlSKkEzIACABQA+AcA7AfQBPAqBNAxQDUCGC/C7IADABIBFAeIAIADQIRDyGiIQIAEABQBmj+nAkZIgGgEQm7kcYcqBIACgBQYEp4LEiSIArgJQArgJApgFIAvgGQFkgmCvCZQAcALAZANIAVgDIBAgIQKkhGAYJ0QALANAJAPIBlhSIAzgpQOmrjKsibIBTgRIAsgIQAsgHAqgEQKshDAKKOQAAArgCAtQgaIVmkLgIgSAfQiOD1i3EKIgLAPQsFRbwtNSIgLAJQwqNOrmBZIgGABQrPBUgBqrIgBgCQhMA/hMA8IgCACQwlNMriBfIgbADQhKAIhDAAQkKAAiOiDg");
	this.shape_180.setTransform(481.6953,512.5987);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#006205").s().p("EgTcAsWQgSgHgRgIIgoAGIgvAGQncAyickiIgVgIIgCgEIgXAVQiLhkiCh7IgsggIgbgMIgzgXQqIktnhrdIgegNIgeAYIgjAbQmgEspFjPIhBgYIgzgVIhCgdQqVk1nmr3Ighg1QlspLhopUIgDgSQghjGgEjGIAAgBQgSsmHPlkIAhgYQHUlNKhExIANAGQKYExHoLxIAQgCIAvgmIAVgQQHYlVKpE2IACABQA+AcA8AgQBQAqBMAxQDWCIDBC8IADABIBFAeIAIADQIVD1GkITIAEACQBnkBnDkbIgGgEQm+keYnqHIABgBQYQp+LJiTIAsgJQArgIApgGIAvgGQFnglCwCbQAcAJAaANIAUgDIBCgHQKohHAXJ7QALAMAKAOIBmhTIAzgpQOtrqKxicQAqgJApgHIAtgIQAsgHAqgEQKwhDAJKVQAAArgCAtQgbIZmmLmIgSAfQiQD3i4EMIgKAPQsKRkw0NZIgMAJQwxNWrrBaIgHABQrTBUgBqxIgBgCQhNBAhMA9IgCACQwtNTrnBgIgbADQhLAIhDAAQkMAAiPiFg");
	this.shape_181.setTransform(482.9205,512.6109);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#006205").s().p("EgTlAstQgTgGgRgIIgoAGIgvAGQngAyidkmQgKgCgKgDIgCgEIgYATQiMhliDh8IgsggIgbgMIg0gXQqMkwnkrjIgegMIgeAYIgkAbQmjEvpJjRIhCgZIgzgVIhCgdQqZk5npr9Igig2QltpPhppYIgDgSQghjIgEjIIAAAAQgTstHSlnIAhgYQHXlRKnE0IAMAGQKcEzHsL4IAQgBIAwgnIAVgQQHblZKuE5IACACQA+AcA9AgQBQAqBNAyQDXCJDCC9IAEACIBGAeIAIADQIYD3GnIYIAEABQBnkDnGkdIgGgEQnBkhYyqMIABgBQYbqELOiUIAsgJQAsgIApgGIAwgGQFpgmCxCdQAdAKAZAMIAVgDIBCgIQKshGAXKBQALALALANIBmhTIA0gqQO0rwK2idQAqgJAqgIIAsgHQAtgHAqgEQK0hCAIKbQAAArgCAuQgcIdmpLrIgSAgQiQD4i5EOIgLAQQsPRtw7NgIgLAJQw5NdrxBbIgGABQrYBUgBq2IgBgCQhOBAhNA9IgCACQw0NcrtBfIgaAEQhLAIhDAAQkPAAiQiHg");
	this.shape_182.setTransform(484.1688,512.6141);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#006205").s().p("EgTuAtEQgTgGgRgHIgpAGIgvAGQnjAyiekpIgTgDIgCgEIgaARQiNhmiDh9IgtggIgbgLIg0gYQqQkznnrqIgfgKIgeAZIgkAbQmmExpOjUIhCgZIgzgVIhDgeQqdk7nssEIgig2QlvpUhqpdIgDgSQghjJgEjJIAAgBQgTsyHUlrIAigYQHalUKrE2IANAGQKhE2HvL+IAQgBIAwgnIAVgQQHelcKzE8IACABQA/AcA9AhQBRArBOAyQDYCKDDC/IAEABIBGAeIAIAEQIcD5GqIcIAEABQBokFnJkfIgGgEQnEkkY8qRIABgBQYnqKLTiVIAsgJQAsgIAqgGIAwgGQFrgmCzCfQAdAJAaAMIAVgDIBCgIQKwhGAWKHQAMALALALIBnhUIA1gqQO6r2K7ieQArgJAqgIIAsgHQAtgHArgEQK4hCAGKiQABAsgDAuQgdIhmrLwIgSAgQiRD7i6EQIgLAQQsVR1xBNoIgMAJQxANkr2BcIgGABQrdBVgBq8IgBgCQhOBBhOA9IgCACQw7NjrzBgIgaAEQhLAIhDAAQkSAAiRiJg");
	this.shape_183.setTransform(485.394,512.6171);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#006205").s().p("EgT3AtcIglgNIgpAGIgwAFQnmAzieksQgKAAgKgCIgCgDIgaAPQiNhmiFh/IgtgfIgbgMIg1gYQqUk2nqrwIgfgIIgfAYIgkAbQmpE0pSjXQghgLgigOIgzgVIhDgeQqik/nusKIgig3QlypXhqpiIgDgSQghjLgFjLIAAAAQgSs5HWltIAigZQHelYKwE5IANAGQKlE4HyMEIAQABQAYgVAYgTIAVgQQHilfK4E+IACABQA/AdA+AhQBRArBPAyQDZCLDFDBIADACIBHAeIAJAEQIfD6GtIiIADAAQBpkHnMkiIgGgDQnIkmZIqYIABgBQYzqPLXiWIAtgJQAsgIAqgGIAwgGQFugmC0ChQAdAJAaALIAWgDIBCgIQK0hFAWKNQAMAJAMAKIBohVIA1gqQPBr9LAieQArgJAqgIIAtgHQAtgHArgEQK8hBAFKoQABAsgDAuQgdImmuL2IgTAgQiSD8i7ESIgLAQQsZR/xJNuIgMAKQxINsr6BcIgHABQriBWAArCIgCgCQhOBBhOA+IgCACQxENqr3BhIgbAEQhLAIhDAAQkUAAiSiKg");
	this.shape_184.setTransform(486.6186,512.6288);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#006205").s().p("EgUBAtzQgTgGgSgHIgpAHIgwAFQnpAzifkwIgUABIgCgDIgbANQiOhniFiAIgvgfIgbgMIg0gYQqZk5ntr2IgggHIgeAZIglAbQmsE2pWjZIhDgaIg0gVIhDgfQqmlBnysRIgig3Ql0pchqpnIgDgSQghjMgFjMIAAgBQgSs/HYlwIAigZQHhlbK1E7IANAGQKqE7H1MKIAQABIAxgoIAVgQQHlljK9FBIACACQBAAdA+AhQBRArBPAzQDcCMDGDDIADABIBIAfIAIAEQIjD8GvImIAEAAQBpkJnOkkIgGgEQnMkoZTqdIABgBQY+qVLciXIAtgJQAtgIAqgGIAwgGQFxgmC1CjQAdAIAbALIAVgDIBEgIQK4hFAUKTQAOAIAMAJIBphVIA1grQPIsDLEifQAsgJAqgIIAugHQAtgHAsgEQK/hBAEKwQABAsgDAuQgeIqmxL7IgSAhQiTD+i9EUIgLAQQseSIxQN1IgLAKQxQNzsABdIgHABQrmBWgBrIIgBgBQhPBChOA+IgDACQxLNyr8BhIgbADQhMAJhEAAQkVAAiUiMg");
	this.shape_185.setTransform(487.8687,512.6155);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#006205").s().p("EgUJAuKIgmgMIgqAHIgwAFQntAzifkzIgTADIgCgDIgcAMQiQhpiGiAIguggIgcgMIg1gYQqck8nwr8IgggGIgfAZIglAcQmvE3pbjbIhDgaIg1gVIhDgfQqqlFn1sXIgig3Ql2phhrprIgDgTQghjNgFjOIAAgBQgStFHblzIAigZQHklfK6E+IANAGQKuE9H5MRIAQACQAYgVAZgUIAVgQQHolmLCFEIACABQBBAdA+AiQBSArBQA0QDcCNDIDEIADACIBIAfIAJADQImD/GyIqIAEAAQBqkLnSkmIgGgEQnOkrZdqiIABgBQZKqbLhiYIAtgJQAtgJArgFIAwgGQF0gmC1ClQAeAIAbAKIAWgDIBDgIQK8hFAVKaQAOAGAMAIIBqhWIA1grQPPsJLJigQAsgJArgIIAugIQAugHArgDQLDhBAEK3QAAAsgDAvQgfIumzMAIgSAhQiUEAi+EWIgLARQsjSRxXN8IgMAJQxXN7sFBeIgHABQrrBXgBrOIgBgBQhPBChPA/IgDACQxSN5sCBiIgbADQhNAJhEAAQkYAAiTiOg");
	this.shape_186.setTransform(489.0903,512.6231);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#006205").s().p("EgUTAuhIgmgLIgqAHIgwAFQnwAzigk3IgUAGIgCgEIgcALQiRhqiGiBIgvggIgcgMIg2gYQqgk/nzsCIghgEIgfAZIglAbQmyE6pfjeQgigMgigOIg1gWIhEgfQqtlHn4seIgjg4Ql3plhspwIgDgSQghjPgFjQIAAAAQgTtLHdl3IAjgZQHnliK/FAIAOAGQKyFAH8MWIAQADQAYgVAZgTIAWgRQHrlpLHFGIACACQBBAdA/AhQBTAtBQA0QDeCODIDFIAEACIBJAfIAIAEQIqEBG1IvIAEgBQBqkNnUkoIgGgEQnSktZnqoIACgBQZVqhLmiZIAtgJQAtgJAsgGIAxgFQF2gnC2CoQAeAHAcAKIAWgDIBEgIQLAhFATKgIAcAMIBqhWIA2gsQPWsQLOigQAsgJArgIIAvgIQAugHArgEQLHg/ADK9QAAAtgDAvQggIym1MGIgTAhQiVECi+EYIgMAQQsoSaxeOEIgLAJQxfOCsKBfIgHABQrwBXgBrTIgCgBQhPBChQBAIgCACQxaOBsHBiIgcADQhMAJhEAAQkbAAiViQg");
	this.shape_187.setTransform(490.3155,512.6046);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#006205").s().p("EgUcAu4IgmgKIgrAGIgxAGQnzAzihk6IgTAIIgCgEIgdAJQiShqiHiDIgwgfIgcgNIg1gYQqllCn2sIIghgDIgfAZIglAcQm2E8pjjgIhFgaIg1gXIhEgfQqylLn7skIgig4Ql6pqhsp0IgDgTQgijRgEjQIAAgBQgTtRHfl6IAjgZQHrlmLDFDIAOAHQK3FCH/McIAQAEIAygpIAVgRQHvltLMFKIACABQBBAeA/AhQBUAtBQA0QDgCQDKDHIAEACIBJAfIAIAEQIuEDG4IzIADgBQBrkPnXkrIgGgDQnVkwZyqtIACgBQZgqnLriaIAugJQAtgJAsgGIAxgFQF5gnC3CqQAfAHAcAJIAWgDQAjgFAhgDQLEhFATKmQAPAFAOAGIBrhYIA2gsQPdsWLTihIBYgRIAugIQAvgHAsgEQLKg/ACLEQAAAtgDAvQghI3m3MLIgTAhQiWEEjAEaIgLARQsuSjxlOKIgLAKQxmOKsQBfIgHABQr1BYAArZIgCgBQhQBDhQBAIgDACQxhOIsMBjIgcADQhMAJhEAAQkeAAiWiSg");
	this.shape_188.setTransform(491.5638,512.6072);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#006205").s().p("EgUlAvQIgngKIgrAGIgxAGQn2Azihk9IgTAKIgCgEIgfAHQiShriIiEIgxgfIgcgNIg2gYQqolFn5sOIgigCIgfAaIgmAcQm4E+pojjIhFgaIg1gXIhFggQq2lNn+srIgjg4Ql7pvhtp5IgDgTQgijSgEjSIAAAAQgTtYHil8IAigaQHvlpLIFFIAOAHQK7FEIDMjIAQAEQAYgVAagUIAVgRQHylwLRFMIACABQBCAeBAAiQBUAtBRA1QDhCRDLDIIAEACIBJAgIAJAEQIxEFG7I3IADgBQBrkRnZktIgGgEQnZkxZ+qzIABgBQZsqtLvibIAvgJQAugJArgGIAygGQF8gmC4CsQAfAGAcAJIAWgDQAjgFAigDQLIhFASKtIAfAIIBrhZIA3gsQPjsdLYihIBZgRIAugIQAvgHAsgEQLPg+AALKQAAAugDAvQghI7m6MQIgTAiQiXEGjBEcIgLARQszSsxsORIgMAKQxtORsVBgIgHABQr5BYgBrfIgCAAQhRBDhQBBIgDACQxpOPsRBkIgcADQhNAJhEAAQkgAAiXiTg");
	this.shape_189.setTransform(492.789,512.6182);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#006205").s().p("EgUuAvnIgngJIgsAGIgxAGQn6AziilBIgTAMIgCgDIgfAFQiThsiJiFIgxgfIgcgMIg2gZQqtlIn8sVIgiABIggAZIglAcQm8FApsjlIhFgaIg2gXQgjgPgigRQq6lRoBsxIgjg5Ql+pzhtp9IgDgTQgijUgFjTIAAgBQgTteHll/IAjgaQHxltLNFIIAOAHQLAFHIGMpIAQAFQAZgWAZgUIAWgRQH1lzLWFOIACACQBCAeBAAiQBVAuBSA1QDiCSDMDKIAFACIBKAgIAIADQI1EIG9I8IAEgCQBrkTnckvIgGgEQnck0aIq5IACgBQZ3qyL0icIAvgJQAugJAsgGIAygGQF/gmC5CuQAfAGAdAIIAWgDQAjgFAigDQLMhFASKzQAQACAQAEIBshZIA3gtQPqsjLdiiIBZgRIAvgIQAvgHAtgEQLSg+gBLRQAAAugDAwQgiI/m9MVIgTAiQiYEIjCEeIgLARQs4S2xzOYIgLAKQx2OYsZBhIgIABQr+BZAArlIgCAAQhSBEhRBBIgCACQxxOXsWBkIgdADQhMAJhFAAQkiAAiYiVg");
	this.shape_190.setTransform(494.0142,512.6204);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#006205").s().p("EgU3Av+QgVgDgTgFIgsAGIgyAGQn9AziilEIgTAOIgCgDIggADQiUhsiKiHIgxgeIgcgNIg3gZQqxlKn/scIgiACIggAaIgmAcQm/FCpwjnQgjgNgjgOIg2gXIhFggQq/lUoDs4Igkg5Ql/p4huqCIgDgTQgijVgFjVIAAAAQgTtkHnmDIAjgaQH1lwLSFLIAOAGQLEFJIKMvIAQAGIAygqIAWgRQH4l2LbFRIACABQBDAfBAAiQBVAuBTA2QDjCTDODLIAEACIBLAgIAIAEQI5EKHAJAIAEgBQBskVnfkyIgHgEQnfk3aTq+IACgBQaDq3L5idIAvgKQAugJAsgGIAzgGQGBgmC6CwQAfAFAeAIIAWgDQAkgFAigDQLQhFARK6IAhADIBshaIA4gsQPxsqLhiiQAugKAsgIIAwgIQAvgHAtgEQLWg9gCLYQAAAugDAwQgjJDm/MbIgTAiQiZEKjDEgIgMARQs9S+x5OgIgMAKQx9OgsfBhIgHABQsDBagBrrIgCAAQhRBEhSBCIgCACQx5OesbBlIgdADQhNAJhFAAQkkAAiZiXg");
	this.shape_191.setTransform(495.2626,512.6313);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#006205").s().p("EgVAAwVQgVgDgUgEIgsAGIgyAGQoAAzijlHIgSAQIgCgDIgiABQiUhtiLiIIgygeIgcgNQgcgMgcgOQq0lMoDsiIgiADIggAaIgmAdQnCFEp1jqIhGgbIg2gXIhGghQrDlWoGs/Igkg5QmBp9hvqHIgDgTQgijWgFjXIAAAAQgTtqHpmGIAjgbQH4lzLYFOIAOAGQLIFMINM1IAQAHQAZgWAZgVIAXgRQH8l6LfFUIACACQBDAeBBAjQBWAuBTA2QDlCUDPDOIAEACIBLAgIAJAEQI8ELHDJFIAEgBQBskXnik0IgGgFQnjk4aerEIACgBQaPq9L9ieIAwgKQAugJAtgGIAzgGQGDgnC7CzQAgAEAeAHIAWgDIBHgHQLThFARLAIAiABIBthaIA4gtQP4sxLmiiQAvgLAsgHIAwgIQAvgHAtgEQLag9gCLfQAAAugDAxQgkJHnCMgIgUAiQiZEMjEEjIgMARQtCTHyAOmIgNAKQyEOoskBhIgHABQsIBbgBrwIgCgBQhSBGhSBCIgCACQyBOmsgBlIgdADQhNAJhFAAQknAAiaiZg");
	this.shape_192.setTransform(496.4881,512.6298);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#006205").s().p("EgVJAwsQgVgCgUgEIgtAGIgyAGQoEAzijlLIgTATIgCgDIgiAAQiVhviMiIIgygfIgdgNIg3gaQq5lPoGsoIgjAFIggAZIgmAdQnFFHp5jtIhGgbIg3gYQgkgPgjgRQrGlaoKtFIgjg6QmEqBhvqLIgDgTQgijYgFjYIAAgBQgUtwHsmJIAkgbQH7l2LcFQIAOAGQLNFOIQM8IAQAHIAzgqIAWgSQIAl9LkFXIACABQBEAfBBAjQBWAvBUA2QDmCVDQDPIAFACIBMAhIAIAEQJAENHGJKIADgCQBtkZnkk3IgHgEQnmk7aprJIACgBQaarDMCifIAwgKQAvgJAtgGIAzgGQGGgnC8C1QAgAEAeAGIAXgDIBHgHQLYhFAPLGIAkgBIBuhbIA4gtQP/s3LrijQAvgLAsgHIAxgIQAvgHAugEQLdg9gDLmQAAAugDAxQglJMnFMlIgTAjQiaENjGElIgMARQtHTRyHOtIgMAKQyMOvspBiIgIABQsNBcAAr2IgCgBQhTBGhSBDIgDACQyIOtsmBmIgcADQhNAIhFAAQkqAAibiag");
	this.shape_193.setTransform(497.7137,512.6318);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#006205").s().p("EgVSAxEQgVgDgVgEIgsAHIgzAGQoHAziklOIgSAVIgCgDIgjgCQiWhwiNiJIgzgfIgdgNIg4gaQq8lSoJsuIgjAGIghAaIgmAdQnIFJp+jvQgjgNgjgPQgcgLgcgNIhHghQrKlcoNtMIgkg6QmFqFhwqRIgDgTQgijZgFjaIAAAAQgUt2HvmMIAjgcQH/l6LhFTIAOAGQLSFRITNBIAQAJQAZgXAagUIAWgSQIDmALpFZIACABQBEAfBCAkQBXAvBUA3QDoCWDRDRIAFACIBMAgIAJAFQJDEPHJJOIADgCQBukbnok5IgGgEQnqk+a0rOIACgBQamrJMHigIAwgKQAvgJAtgGIA0gGQGJgnC9C3QAgADAfAGIAWgDIBIgHQLbhEAQLMIAkgEIBvhcIA5gtQQGs9LvikQAvgLAtgHIAxgIQAwgHAtgEQLig8gFLsQAAAvgDAxQgmJQnHMrIgTAiQibEQjHEnIgMARQtMTZyOO1IgNAKQyTO2suBjIgIABQsRBcgBr8IgCAAQhTBHhTBDIgDACQyPO0srBnIgdADQhOAIhFAAQksAAicibg");
	this.shape_194.setTransform(498.9394,512.6423);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#006205").s().p("EgVbAxbQgWgCgUgEIguAHIgzAGQoKAziklRIgSAXIgCgDIgkgEQiXhwiOiLIgzgeIgdgOIg4gaQrBlVoMs0IgkAHIggAaQgTAQgUAOQnLFKqCjxIhHgcIg4gYIhHghQrPlgoPtSIgkg6QmIqKhwqVIgDgUQgjjbgEjaIAAgBQgUt8HxmPIAjgcQICl9LmFVIAOAHQLXFSIWNIIAQAJQAZgWAagVIAXgSQIGmELuFcIACACQBFAfBCAkQBXAvBVA3QDpCYDTDSIAFACIBMAhIAJAEQJHESHLJSIAEgCQBukdnqk7IgHgEQntlAa/rUIACgBQaxrPMMihIAxgKQAvgJAtgGIA0gGQGMgnC+C4QAhAEAeAFIAXgDQAlgFAjgDQLghDAOLSIAmgGIBwhcIA5guQQMtEL1ikQAvgLAugIIAwgHQAxgHAugEQLlg8gGLzQAAAvgDAyQgnJUnJMwIgUAjQicERjIEpIgLASQtSTiyVO7IgNALQyaO+s0BjIgIABQsWBdAAsCIgCAAQhUBHhUBEIgCACQyXO8swBnIgeADQhNAIhFAAQkvAAididg");
	this.shape_195.setTransform(500.1883,512.6443);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#006205").s().p("EgVlAxyQgVgCgVgDIguAHIgzAGQoNAzimlVIgSAZIgCgDIgkgFQiYhxiOiMIg0geIgegOIg4gaQrFlYoPs6IgkAJIghAaQgTAPgUAOQnOFNqGj0QgkgNgkgPIg4gYQgkgQgjgSQrTlioTtZIgkg7QmJqOhxqaIgDgTQgjjdgFjcQgUuDHzmSIAkgcQIGmBLqFYIAPAHQLaFVIbNOIAQAKQAZgXAagVIAWgSQIKmHLzFfIACABQBFAgBDAkQBYAwBVA3QDrCZDTDTIAGADIBNAhIAIAEQJLEUHOJXIADgDQBvkfntk9IgGgFQnxlCbKraIABgBQa9rUMRiiIAxgKQAwgJAtgHIA1gFQGOgoC/C7QAhADAfAFIAXgDQAlgFAkgDQLjhDAOLYIAngIIBwhdIA6guQQTtKL6ilQAvgLAugIIAxgHQAxgHAugEQLpg7gHL5QAAAwgDAyQgoJXnLM2IgUAjQidEUjJErIgMARQtXTsycPCIgMALQyjPFs4BkIgIABQsbBdAAsHIgDAAQhUBHhUBFIgDACQyePDs2BoIgdADQhNAIhFAAQkyAAififg");
	this.shape_196.setTransform(501.4143,512.6246);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#006205").s().p("EgVtAyJIgrgEIguAHIg0AGQoRAzillYIgSAbIgCgDIgmgHQiZhyiPiNIg0geIgegNIg5gbQrIlboStBQgSAGgTAFIghAaQgTAQgUAOQnRFPqLj2IhIgdIg4gYIhIgiQrXlmoWtfIgkg7QmLqThyqeIgDgUQgjjegFjeIAAAAQgUuJH2mVIAkgcQIImELwFaIAPAHQLfFYIdNTIAQALQAZgXAbgVIAXgSQIMmKL4FhIACACQBGAfBDAlQBZAwBVA4QDsCaDVDVIAGACIBNAiIAJAEQJOEWHRJbIAEgDQBvkhnwlAIgHgEQnzlFbUrfIACgBQbIraMVijIAygKQAwgKAugGIA1gFQGRgoC/C9QAiADAfAEIAYgDQAlgFAjgDQLohDANLfIApgLIBwhdIA6gvQQbtQL+imQAwgLAugIIAxgIQAxgHAugDQLtg7gHMAQgBAwgDAyQgoJcnOM8IgUAjQieEVjKEtIgMASQtcT1yjPJIgNAKQyqPNs9BlIgIABQsgBeAAsNIgDAAQhVBIhUBFIgDACQymPLs7BoIgdADQhOAJhGAAQk0AAieiig");
	this.shape_197.setTransform(502.6404,512.6313);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#006205").s().p("EgV3AygQgWgBgVgCIguAHIg0AGQoUAzinlcIgRAeIgCgDIgngJQiahziPiOIg1geIgegNIg5gbQrNleoVtHIglAMIghAbIgoAeQnUFRqPj5IhIgdIg5gYIhIgjQrblooZtlIglg8QmNqYhyqjIgDgUQgjjfgFjfIAAgBQgUuOH4mZIAkgcQIMmIL0FdIAPAHQLkFaIgNaIAQAMQAagXAagWIAXgSQIQmOL9FkIACACQBGAgBEAlQBZAwBWA5QDuCbDWDWIAGADIBOAhIAIAFQJSEYHUJfIADgDQBwkjnzlCIgGgEQn3lHbfrlIABgBQbUrgMaikIAygKQAxgKAugGIA1gGQGUgnDAC/QAiACAgAEIAXgDQAmgFAkgDQLrhDANLlIAqgNIBxheIA6gvQQhtXMDimQAxgLAugIIAygIQAxgHAvgDQLwg7gIMIQgBAwgDAyQgpJgnRNBIgUAkQifEXjLEvIgMASQthT9yqPRIgMAKQyyPUtDBmIgIABQskBegBsTIgCABQhWBIhVBGIgCACQyuPStABpIgeADQhOAIhGAAQk2AAigijg");
	this.shape_198.setTransform(503.8915,512.6165);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#006205").s().p("EgWAAy4IgsgDIgvAHIg0AFQoXA0inlfIgSAgIgCgDIgngLQiahziRiQIg2gdIgegOIg5gbQrRlhoYtNIglAOIgiAaIgnAeQnYFTqTj7QgkgNglgQIg5gZQglgQgkgSQrflsoctrIgkg9QmQqchyqnIgDgUQgjjhgFjhIAAAAQgUuVH6mbIAkgdQIPmLL6FfIAPAHQLoFdIkNgIAQAMQAZgXAbgVIAXgTQITmRMBFnIADABQBGAhBEAlQBaAwBXA5QDvCcDYDZIAFACIBPAiIAJAEQJVEaHWJlIAEgEQBwkln2lEIgGgEQn7lKbrrqIABgBQbgrmMfilIAygKQAxgKAugGIA1gGQGXgnDBDBQAiACAhADIAXgDQAmgFAkgDQLwhDAMLsIAqgQIBzhfIA6gvQQotdMIinQAxgLAugIIAzgIQAxgHAvgDQL0g6gJMOQgBAwgDAzQgqJknTNGIgUAkQigEZjNExIgMASQtlUHyyPXIgMALQy5PctIBmIgJABQspBfAAsZIgDABQhVBJhWBGIgDACQy1PZtFBqIgeADQhPAIhHAAQk3AAihikg");
	this.shape_199.setTransform(505.1179,512.6264);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#006205").s().p("EgWJAzPIgsgCIgvAHIg1AFQoaA0ioliIgRAiIgCgDIgogMQich1iRiQIg2geIgfgOIg5gbQrVlkobtTIgmAPIgiAbIgoAeQnaFVqYj9IhJgeIg6gZQgkgQglgTQrjluoftyIgkg9QmSqhhzqsIgDgUQgjjigFjiIAAgBQgUubH8meIAlgdQISmPL+FiIAQAHQLsFfInNnIAQANQAagYAbgVIAXgTQIWmUMHFpIACACQBHAgBFAmQBaAxBXA5QDxCdDZDaIAFADIBPAiIAJAEQJZEcHZJpIAEgEQBwknn4lGIgGgFQn+lMb1rvIABgBQbsrsMjimIAzgKQAxgKAvgGIA1gGQGZgnDDDDQAiABAhADIAYgDQAmgFAkgDQLzhDAMLyIAsgSIBzhfIA7gwQQvtjMMioQAxgLAvgIIAzgIQAygHAvgDQL4g6gLMVQAAAxgEAzQgqJonWNLIgUAlQihEbjOEzIgMASQtrUQy4PeIgNALQzAPjtNBnIgJABQsuBgAAsfIgDABQhWBJhWBHIgDACQy9PhtKBqIgeADQhPAIhHAAQk6AAiiimg");
	this.shape_200.setTransform(506.3443,512.6278);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#006205").s().p("EgWSAzmIgtgBIgvAGIg1AGQoeA0iolmIgRAlIgCgDIgpgOQidh2iSiRIg2geIgfgOIg6gbQrZlnoetZQgTAJgUAHIghAbQgUAQgUAOQneFYqckAIhKgdIg5gaQglgRglgSQrnlyoit4Iglg+QmTqlh0qwIgDgUQgjjkgFjkQgVuhH/miIAlgdQIWmSMDFkIAPAHQLxFiIrNsIAQAOQAZgXAbgWIAXgTQIamYMMFtIACABQBHAhBFAmQBbAxBYA6QDyCeDaDcIAGACIBQAjIAJAEQJcEeHcJuIADgFQBxkpn6lIIgHgFQoBlOb/r1IACgBQb3ryMoinIAzgKQAxgKAwgGIA2gGQGbgoDEDGQAjABAhACIAYgDQAmgFAkgDQL4hDAKL4IAugTIBzhhIA8gwQQ1tqMSioQAxgLAwgIIAygIQAygHAwgDQL8g5gMMbQAAAxgEAzQgrJtnZNRIgUAkQiiEdjOE1IgNATQtwUZy/PlIgMALQzJPqtSBoIgIABQszBgAAskIgDABQhXBKhWBGIgDACQzFPptPBqIgfAEQhOAIhHAAQk9AAijiog");
	this.shape_201.setTransform(507.594,512.6293);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#006205").s().p("EgWbAz9IgugBIgvAHIg2AGQohA0iolpIgSAmIgCgCIgpgQQieh3iTiSIg3geIgegOIg7gbQrdlqohtfIgnASIgiAbQgUAQgUAOQnhFaqgkDIhKgdIg6gaIhKgjQrsl1okt/Igmg+QmVqqh0q1IgDgUQgkjlgFjmQgUunIBmlIAlgdQIZmWMIFnIAPAHQL2FkIuNzIAQAPQAagYAbgWIAXgTQIdmbMQFvIADACQBIAhBFAmQBcAxBYA7QDzCfDcDdIAGADIBQAiIAJAFQJgEgHfJyIADgFQBxkrn9lLIgHgEQoElRcKr7IACgBQcCr3MtioIA0gLQAxgJAwgGIA2gGQGegoDFDIQAjAAAiACIAXgDQAngFAlgDQL7hDAKL/IAvgWIB0hhIA8gxQQ8twMXipQAxgLAwgIIAzgIQAygHAwgDQMAg5gNMiQAAAygEAzQgsJxnbNWIgVAlQiiEejQE4IgMASQt1UizGPtIgNAKQzQPytXBpIgJABQs3BhAAsrIgDACQhYBKhXBHIgCACQzNPxtUBqIgfAEQhPAIhHAAQk/AAikiqg");
	this.shape_202.setTransform(508.8207,512.6389);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#006205").s().p("EgWlA0UIguAAIgwAHIg1AGQolA0iplsIgRAoIgCgCIgqgSQifh3iTiUIg4gdIgfgPIg7gcQrhlsoktlIgnATIgiAbIgpAfQnkFcqkkFQglgOgmgQIg6gaQgmgRglgTQrvl3oouGIglg+QmXqvh1q5IgDgVQgkjngFjmIAAgBQgVutIEmnIAlgeQIcmZMNFpIAQAIQL6FmIxN5IAQAPQAagYAbgWIAYgTQIgmeMVFxIADACQBIAhBGAnQBcAyBZA6QD0ChDdDfIAGACIBRAjIAJAFQJjEiHiJ2IAEgEQBykuoBlNIgGgEQoIlTcVsBIACgBQcOr9MxipIA0gLQAygJAwgGIA2gGQGhgoDGDKQAjgBAiACIAYgDQAngFAlgDQL/hDAKMFIAwgYIB1hiIA8gxQRDt3MbipQAygLAwgIIA0gIQAygHAwgDQMEg5gNMpQgBAygEA0QgtJ1neNbIgUAlQikEhjRE5IgMATQt6UrzNPzIgNALQzXP6tdBpIgJABQs8BhAAswIgDABQhYBMhXBHIgDACQzUP4tZBrIgfAEQhPAIhHAAQlCAAimisg");
	this.shape_203.setTransform(510.0716,512.6371);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#006205").s().p("EgWtA0rIgvABIgwAHIg2AGQooA0iqlwIgQArIgCgCIgsgUQifh4iViVIg4gdIgfgOIg7gdQrllvontsIgoAVIgiAcQgUAQgVAOQnnFeqpkHIhLgeIg7gaIhLgkQrzl7oruMIglg/Qmaqyh1q/IgDgUQgkjpgFjoIAAAAQgVu0IGmqIAmgeQIfmdMSFsIAQAIQL+FpI1N+IAQAQQAagXAbgXIAYgSQIjmjMbF1IACABQBJAiBGAmQBdAzBZA7QD2CiDeDgIAHACIBRAkIAJAEQJnElHkJ7IAEgFQBykwoDlPIgHgFQoLlVcgsGIACgBQcZsDM3iqIA0gLQAygJAwgGIA3gGQGkgoDGDMQAkgBAiABIAZgDQAngFAlgDQMDhCAJMLIAxgbIB2hjIA8gxQRLt9MfiqQAzgLAwgIIA0gIQAzgHAwgEQMHg3gOMvQgBAzgEA0QguJ5nfNhIgVAlQilEijSE8IgMASQt/U1zUP6IgNALQzfQBtiBqIgJABQtBBiAAs2IgDABQhYBMhYBIIgDACQzbP/tfBsIgfAEQhPAIhHAAQlFAAimiug");
	this.shape_204.setTransform(511.2743,512.6164);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#006205").s().p("EgW3A1DIgvABIgwAHIg3AGQorA0iqlzQgJAWgHAXIgCgDIgtgVQigh5iViWQgdgOgcgPIgfgOIg8gdQrplyoqtyQgUAMgUALIgjAbIgpAfQnqFgqtkJIhLgfIg8gaIhLglQr3l9ouuTIgmg/Qmbq3h2rDIgDgVQgkjqgFjqQgVu5IImuIAmgeQIjmhMWFvIAQAIQMDFrI4OFIAQARQAagYAcgXIAXgSQInmmMfF3IADACQBJAiBHAmQBdAzBaA8QD3CjDgDhIAGADIBSAkIAJAEQJqEnHoJ/IADgFQBzkyoGlRIgGgFQoPlYcrsLIACgBQclsJM7irIA0gLQAzgJAwgHIA4gFQGmgoDHDOQAlgCAiABIAZgDQAngFAlgDQMIhCAIMRIAygdIB2hjIA9gyQRRuDMlirQAzgLAxgIIAzgIQA0gHAwgEQMLg3gPM3QgBAygEA0QgvJ+niNmIgVAlQilEljTE9IgNATQuEU+zbQBIgNALQzmQItoBrIgIABQtGBiAAs7IgDABQhZBMhZBJIgCACQzjQHtlBsIgfAEQhPAIhIAAQlHAAinivg");
	this.shape_205.setTransform(512.5484,512.6258);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#006205").s().p("EgXAA1aIgvACIgxAHIg3AGQouA0irl3IgRAwIgCgDIgtgXQihh6iWiXIg5gdIgggOIg8gdQrtl0ott5QgUANgVALIgiAcIgpAfQnuFiqxkMQgmgPgmgQIg8gbQgmgRglgTQr8mBoxuZIgmg/Qmdq8h2rIIgDgVQgljrgFjrQgVvAILmxIAmgeQImmkMcFyIAQAHQMHFuI7OLIAQARQAagYAcgWIAYgTQIqmpMkF5IADACQBJAiBHAnQBeA0BbA8QD5CkDgDjIAHACIBSAkIAJAFQJuEpHrKDIADgFQBzk0oIlUIgHgEQoSlac2sRIACgBQcwsPNAisIA1gLQAzgJAwgHIA4gGQGpgoDIDRQAlgCAjAAIAYgDQAogFAmgDQMLhCAHMXIA0gfIB3hkIA9gyQRYuKMqirQAzgLAxgIIA0gIQA0gHAwgEQMPg2gQM9QgBAzgEA0QgvKCnlNrIgVAmQinEmjUFAIgMATQuKVGziQIIgNAMQzuQPtsBsIgJABQtKBjAAtBIgEABQhZBNhZBJIgDACQzrQOtpBtIgfAEQhQAIhHAAQlKAAioixg");
	this.shape_206.setTransform(513.7755,512.6269);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#006205").s().p("EgXJA1xIgwADIgyAHIg3AGQoxA0irl6QgJAZgIAZIgCgDIgugZQiih6iXiZIg6gcIgfgPIg9gdQrxl3owt/IgpAZIgjAcQgUARgVAOQnxFlq1kPIhNgfIg8gbIhMglQr/mDo0ugIgmhAQmfrAh3rMIgDgVQgljtgFjtQgVvGINm0IAmgeQIqmoMgF1IAQAHQMMFwI+ORIAQATQAbgZAcgWIAXgTQIumtMpF9IADACQBKAiBHAnQBfA0BbA8QD6ClDiDlIAHADIBSAkIAKAFQJxEqHtKJIADgGQB0k2oLlWIgHgEQoVlddBsWIABgBQc8sVNFitIA1gLQA0gJAwgHIA4gGQGsgoDJDSIBJgCIAYgDQAogGAmgDQMPhBAHMeIA1giIB4hkIA9gzQRfuQMuisQA0gLAxgJIA1gHQA0gHAwgEQMTg2gRNEQgBAzgEA1QgwKGnoNxIgVAlQinEpjWFBIgMATQuPVQzpQPIgNALQz1QYtyBsIgJABQtPBkAAtIIgDACQhaBNhZBKIgDACQzzQWtuBtIggAEQhPAIhJAAQlLAAipizg");
	this.shape_207.setTransform(515.0026,512.636);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#006205").s().p("EgXTA2IIgwAEIgyAHIg3AGQo1A0isl9IgQA0IgCgDIgvgaQijh8iXiZIg7gdIgggPQgegOgegPQr2l6ozuFIgpAbIgjAcQgVAQgVAPQn0Fnq5kRIhNggIg9gbIhMglQsEmHo3umIgmhAQmhrFh3rRIgDgVQgljugFjuIAAgBQgWvLIQm3IAngfQIsmrMlF3IAQAHQMRFzJCOXIAQATQAagYAcgXIAYgTQIxmwMuF/IADACQBKAjBIAnQBfA0BbA9QD8CmDjDnIAHACIBTAlIAKAFQJ1EsHwKNIADgGQB1k4oPlYIgGgFQoZlfdLsbIACgBQdIsbNJiuQAbgGAbgFQAzgKAxgGIA5gGQGugoDKDUIBJgDIAZgDQAogGAmgDQMUhBAGMkIA2gkIB4hlIA+gzQRmuWMzitQA0gLAygJIA0gIQA1gHAxgDQMWg2gSNLQgBAzgEA2QgxKKnqN2IgVAmQioEqjXFEIgNATQuUVZzvQWIgOALQz8Qft3BtIgJABQtUBkAAtNIgDACQhbBOhaBKIgDACQz6QdtzBuIggAEQhQAIhIAAQlOAAiri1g");
	this.shape_208.setTransform(516.253,512.6342);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#006205").s().p("EgXbA2fIgxAFIgyAHIg4AGQo4A0itmBIgQA2IgCgCIgvgcQikh9iZiaIg7gdIgggPIg9gdQr5l9o2uLIgqAcIgjAcQgVARgVAPQn3Foq+kTIhNggIg9gbQgngSgmgUQsImJo6utIgmhAQmjrKh4rWIgDgVQgljvgFjwIAAAAQgWvSITm6IAmgfQIwmvMqF6IAQAHQMVF1JFOeIAQAUQAbgZAcgXIAYgTQI0mzMzGCIADABQBLAjBIAoQBgA1BcA9QD9CnDkDoIAHADIBUAlIAKAEQJ4EvHzKRIADgGQB1k6oRlaIgHgFQoclhdXsiIABgBQdUsgNOivQAbgGAbgFQA0gKAxgGIA5gGQGxgoDKDWIBLgEIAZgDQAogGAmgDQMXhBAGMrIA3gnIB5hmIA+gzQRtudM4itQA0gLAygJIA2gIQA0gHAxgDQMbg1gTNRQgBA0gFA1QgyKPnsN7IgVAmQipEtjYFGIgNATQuZViz3QdIgNALQ0EQmt8BuIgJABQtZBlAAtTIgDACQhbBOhbBLIgDACQ0BQkt5BvIggAEQhQAIhIAAQlRAAiri3g");
	this.shape_209.setTransform(517.4803,512.6351);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#006205").s().p("EgXlA23IgxAEIgyAIIg4AGQo8A0itmEIgQA4IgCgCIgwgeQilh+iZibQgegOgegPIgggPIg9gdQr+mAo5uRQgVAPgVAOIgkAdIgqAfQn6FrrCkWIhOggIg9gbQgngSgmgUQsMmNo9uzIgnhBQmlrOh4raIgDgVQgljxgGjyQgVvYIVm9IAmgfQIzmyMvF8IARAHQMZF4JIOkIAQAUQAbgZAcgXIAZgTQI3m3M4GFIADACQBLAjBJAoQBgA1BdA+QD+CoDmDqIAHACIBUAlIAKAFQJ8ExH2KWIADgHQB1k8oUlcIgGgFQoglkdhsnIACgBQdfsmNTiwQAbgGAbgFQA0gKAygGIA5gGQG0goDLDYIBLgFIAZgDQApgGAngDQMbhBAFMxIA4gpIB6hmIA+g0QR0ujM9iuQA0gLAzgJIA1gIQA1gHAygDQMeg1gUNYQgBA0gFA2QgzKTnvOAIgVAnQiqEujZFIIgNATQueVrz9QkIgOAMQ0MQtuBBvIgJABQtdBlAAtYIgEACQhbBPhbBLIgDACQ0JQst+BvIghADQhRAJhJAAQlSAAisi4g");
	this.shape_210.setTransform(518.7096,512.6271);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#006205").s().p("EgXuA3OIgyAFIgzAIIg4AGQo/A0itmHQgJAdgHAdIgCgCIgxggQimh/iaicIg8gdIgggOIg+geQsCmDo8uYQgVARgWAPIgjAcIgrAgQn9FtrGkYIhOghIg+gbQgngTgmgUQsRmPo/u6IgnhBQmnrTh5rfIgDgVQgmjzgFjyQgVvfIXnAIAngfQI2m2M0F/IAQAIQMeF5JMOqIAQAWQAbgZAcgYIAYgTQI7m6M9GHIADACQBLAkBKAoQBgA1BeA/QD/CpDoDrIAHADIBUAlIAKAFQKAEzH4KaIADgHQB2k+oWlfIgHgEQojlndsssIACgBQdqssNYixQAbgGAcgFQA0gKAygGIA5gGQG3gpDMDbIBMgGIAZgDQApgGAngDQMfhBAEM3IA6grIB7hnIA+gzQR7uqNBivQA1gLAzgJIA2gIQA1gHAygDQMig0gVNfQgCA0gEA2Qg0KXnxOGIgWAnQiqEwjbFKIgMATQujV00FQrIgOAMQ0TQ0uGBwIgKABQtiBmAAtfIgDADQhcBPhcBMIgDACQ0QQzuEBwIggADQhRAJhJAAQlVAAiti6g");
	this.shape_211.setTransform(519.9603,512.6279);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#006205").s().p("EgX3A3lIgyAGIgzAIIg5AGQpCA0iumLIgQA9IgCgCIgygiQimh/ibieIg9gcIgggPIg/geQsFmGo/ueQgVARgXAQIgjAdIgrAgQoAFvrLkbIhOghIg+gcIhOgmQsUmSpDvBIgnhBQmprYh6rjIgDgWQglj0gGj0QgVvkIZnEIAngfQI6m5M5GBIAQAIQMiF8JPOwIAQAWQAbgZAdgXIAYgUQI/m9NBGKIADACQBMAjBKApQBhA2BeA+QEBCrDpDsIAHADIBVAmIAKAFQKDE1H7KeIADgHQB3lAoZlhIgHgFQonlod3syIACgBQd2syNciyIA3gLQA1gKAzgGIA5gGQG6gpDNDdQAngFAlgDIAagDQApgFAngDQMjhBADM+IA8guIB7hnIA/g0QSBuxNHivQA1gMAzgIIA2gIQA1gHAygDQMmg0gWNmQgBA0gEA3Qg1Kan0OMIgWAnQirEyjcFMIgNAUQuoV90LQyIgOAMQ0bQ8uLBwIgKABQtnBmABtkIgEADQhdBPhcBNIgCACQ0ZQ7uIBwIghADQhRAJhJAAQlYAAiui8g");
	this.shape_212.setTransform(521.1878,512.6064);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#006205").s().p("EgYAA38IgzAHIgzAHIg5AGQpGA1iumOIgQA/IgCgCIgzgkQiniAicifIg9gcIghgPIg+geQsKmJpCukIgsAiIgkAdQgVARgWAPQoDFxrPkdIhPggIg+gdQgogSgngUQsYmWpGvHIgnhCQmrrch6roIgDgVQgmj2gFj1QgWvrIcnGIAnggQI9m9M+GEIAQAIQMnF/JTO2IAQAXQAbgaAcgXIAZgUQJCnBNGGNIADACQBMAkBLApQBhA2BfA/QECCsDqDuIAIADIBVAmIAKAEQKHE4H+KjIADgIQB3lCocljIgHgFQoqlreCs3IACgBQeBs4NiizIA3gLQA1gKAzgGIA6gGQG8gpDODfIBNgJIAagDQApgFAngDQMnhBADNEIA8gvIB8hpIBAg0QSIu3NLiwQA2gMAzgIIA3gIQA1gHAzgDQMpgzgXNsQgBA1gEA2Qg2Kfn2ORIgWAoQitEzjcFPIgNATQutWH0TQ5IgOALQ0iREuRBxIgJABQtsBnAAtqIgDADQhdBQhdBNIgDACQ0gRCuNBxIghADQhSAJhJAAQlaAAivi+g");
	this.shape_213.setTransform(522.4156,512.615);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#006205").s().p("EgYJA4TIgzAIIg0AHIg5AGQpJA1ivmSIgPBCIgCgDIg0glQioiBidigIg+gcIghgPIg/gfQsOmLpEuqIgtAkIgkAdQgVARgWAPQoGFzrTkfIhQghIg/gdIhPgnQscmYpJvOIgnhCQmtrgh7rtIgDgWQgmj3gFj3QgWvxIenJIAoggQJAnANDGGIAQAIQMrGBJWO8IAQAYQAcgZAcgYIAZgUQJFnENLGPIADACQBNAkBLAqQBiA2BfBAQEECtDrDvIAIADIBWAmIAKAFQKKE6IBKnIADgHQB4lFofllIgHgFQoulteNs9IACgBQeNs+Nmi0IA4gLQA1gKAzgHIA7gGQG+goDPDhIBOgKIAagDQAqgFAngDQMrhAACNJIA+gxIB9hqIA/g0QSQu+NPiwQA2gMA0gIIA3gIQA2gHAygDQMugzgYNzQgCA1gEA3Qg2Kjn5OXIgWAnQiuE2jdFQIgNAUQuzWP0ZRAIgOAMQ0qRLuWByIgKABQtwBoAAtwIgDACQheBRhdBOIgDACQ0oRJuSByIghADQhSAJhJAAQldAAiwjAg");
	this.shape_214.setTransform(523.6434,512.613);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#006205").s().p("EgYSA4rIg0AIIg0AHIg6AGQpMA1ivmVIgQBDIgCgCIg0gmQipiDieigQgfgOgfgPIghgPIg/gfQsSmOpIuwQgWATgXASIgkAdQgWARgWAQQoJF1rYkiIhQghIg/gdQgogTgngUQsgmcpMvUIgohCQmvrlh7ryIgDgWQgmj4gFj5QgWv3IgnMIAoggQJDnENIGJIARAIQMvGEJaPCIAQAZQAbgaAdgYIAZgUQJInHNQGSIADACQBNAkBMAqQBiA2BgBBQEFCtDtDyIAIADIBWAmIAKAFQKOE7IEKsIADgHQB4lHoiloIgHgEQoxlweYtDIACgBQeYtDNri1IA4gLQA2gKAzgHIA7gGQHBgpDQDkIBPgLIAagDQAqgFAngDQMvhAACNQIA/g0IB9hqIBAg1QSWvENVixQA2gMA0gIIA4gIQA2gHAzgDQMxgzgZN6QgCA2gEA3Qg3Knn8OcIgWAoQiuE3jfFTIgNAUQu3WY0hRHIgOAMQ0xRSubBzIgKABQt1BoAAt2IgEADQheBShdBOIgDACQ0wRRuYByIghADQhSAJhKAAQlfAAiwjBg");
	this.shape_215.setTransform(524.8944,512.6216);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#006205").s().p("EgYbA5CQg2AJgzAHQqBBPi5msIgPBFQjHiTi5i8QgwgVgwgXQs+mKpivcQgoAjgqAhQoZGkr7kxQhHgchJgiQtXmWpswLQnTsKiBsYQgpkFgGkFQgXwiJMnLQJNnMNXGYQM/GLJiPdQAnglAqghQJNnMNXGYQBOAlBLAqQBkA3BgBAQEHCvDtDzIBfAqQKYE9IKK2QCElOo0lyQo0lyeltJQektJNvi2QBUgSBOgKQHyg9DeD0QA2gJA0gGQOFhyABOAIC+ihQTGv6Nxi3QBTgSBPgKQOgh0gbO4QgVLOonPsQi3FMjvFqQvFW206RaQ05RaugBzQuEBvABuBQhhBUhgBQQ05RaueBzQhkAMhZAAQlhAAiyjDg");
	this.shape_216.setTransform(526.1213,512.6383);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("rgba(13,81,10,0.749)").s().p("EgQDAnuQg7gdgtgsIgGgDIhDAKIgJABQnLA0iIkbIgDgDIgJAmIgDAFQhKgyhHg6QhAg1g/g6IgIgHIg9gaIgIgEQpYkJm5qWIgFgEQgaAVgaAUIgHAFQmEEZomjLIgHgCQgwgSgxgVIgHgDQiQhAiGhWQiLhZiBhxQkej7julyQkYmyhxm5QgXhcgRhcIAAgBQgeiwgEiwIAAgBQgIk8BQjtQBkkqDsisIADgCQGqk1JrERIAEACQJaELG6KZIACACQAcgYAdgWIADgCQGqk1JsESIACABQFMCTEcEMIABABIBDAcIACABQHhDWF7HTIABABQBfjimZj5Qmaj6WNo4QWMo4J/h7IACAAQA8gNA4gGIACAAQFogpChCkIADAAIBJgKIADAAQKMhLABJaIADAAICHhrIADgCQN1qtJ/h8IAFgBQA5gMA3gGIAGgBQKdhMgTKAIAAAHQgRHimOKiIgEAGQiDDeiqDxIgFAHQnXKUpPIsQhuBnhyBjQi5CijECYIgMAJQuyLbqYBZIgWACIgOACQigARh5gYQlqhJAAnBIgGADIiEBnIgJAHQk3DwkYCrQmyEKloBjQiDAjh5AOIgBAAQhIAIg/AAQinAAhwg3g");
	this.shape_217.setTransform(464.4439,512.5721);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("rgba(25,64,14,0.502)").s().p("EgQFAntQg7gdgsgsIgHgCQgiAGgiAEIgJABQnKAziHkcIgDABIgJAmIgEACQhKgzhGg5QhBg1g/g7IgIgGIg9gaIgIgEQpXkJm5qXIgGgBQgZAVgbAUIgHAFQmEEYomjLIgGgDQgxgSgxgVIgHgDQiPhAiGhWQiLhZiAhxQkej6julyQkZmyhwm6QgYhbgQhcIAAgCQgeiwgEiwIAAAAQgIk9BQjtQBlkpDsitIADgCQGrk0JqERIAEACQJaELG5KaIADAAQAbgYAdgVIADgCQGrk1JrESIACABQFNCTEbEMIABABIBDAcIACABQHhDWF7HTIABAAQBfjhmZj5Qmaj6WNo4IAAAAQWMo4J/h7IACAAQA8gMA3gHIACAAQFogpChCjIADABQAlgGAkgEIADAAQKMhMACJaIACABICHhqIADgCQN1quJ+h8IAGgBQA5gMA3gGIAFgBQKehNgSJ/IAAAHQgQHimOKiIgEAHQiDDdiqDxIgFAHQnWKUpPIsQhuBnhxBjQi5ChjECYIgMAKQuxLbqYBaIgWADIgPACQihARh5gYQlqhIgCm/IgEgCQhCA1hCAyIgJAHQk3DxkZCsQmyEKlpBiQiCAkh6AOIgDAAQhHAIg/AAQinAAhxg4g");
	this.shape_218.setTransform(464.4427,512.5624);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("rgba(38,46,19,0.251)").s().p("EgQIAnsQg6gdgrgsIgIgBIhEAKIgJABQnKAyiGkdIgCAFIgJAmIgGgBQhJgzhHg6QhBg1g/g7IgIgEIg9gbIgIgEQpXkKm4qXIgGACQgaAWgbATIgGAFQmFEXoljMIgHgCQgwgSgygWIgGgDQiPg/iGhXQiLhYiAhxQkdj7julxQkZmyhxm6QgXhcgQhcIAAgBQgeiwgEiwIAAAAQgIk+BRjuQBkkoDtisIADgDQGrkzJqESIAEACQJaELG5KaIADgBQAbgYAdgWIADgCQGrk0JrETIACABQFMCSEbENIACABIBDAbIACABQHhDWF7HUIAAgBQBfjhmZj5Qmaj7WNo3IAAAAQWLo3J/h8IACAAQA8gMA3gHIADAAQFngpCiCjIACABQAmgGAkgEIADAAQKLhMADJZIABADICHhrIADgCQN0qtJ/h9IAFgBQA6gLA2gHIAGgBQKehNgRJ9IAAAHQgQHimNKjIgEAGQiDDdiqDxIgFAHQnWKUpOIsQhtBnhyBjQi4ChjECYIgMAJQuwLbqXBcIgXAEIgPABQijASh5gYQlrhHgDm9IgCgHIiDBoIgJAHQk5DxkZCsQmzEKloBjQiDAkh6AOIgFABQhFAHg+AAQiqAAhyg5g");
	this.shape_219.setTransform(464.4403,512.5845);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("rgba(50,29,23,0)").s().p("EgQKAnrQg6gegrgsQgnAHglAEQnRA2iHkiIgLAvQhNg1hKg8QhBg2g/g7QgjgOgigQQpbkKm8qcQgcAYgfAWQmGEcoqjOQg0gTg1gXQiShAiJhYQiKhZiAhxQkdj6jtlxQkZmzhxm6QgXhbgQhcQgeixgEiwQgIk/BRjuQBkkoDtisQGsk2JtETQJcELG6KcQAdgZAfgWQGrk3JtEUQFOCTEbENIBFAcQHiDWF8HVQBfjimaj5QmZj6WNo4QWMo4KAh7QA9gNA4gGQFqgqChClQAngGAmgEQKOhNABJdICKhsQN4qwKAh8QA8gMA6gHQKihOgUKDQgPHlmRKnQiFDgitD0QnVKUpOIsQhuBnhxBjQi+CmjJCcQuvLbqXBeIgnAFQijATh7gYQlwhHABnHQhGA5hGA2Qk5DykaCtQmzEKloBjQiEAkh6AOQhJAIhAAAQirAAhyg6g");
	this.shape_220.setTransform(464.4481,512.5653);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_163}]},50).to({state:[{t:this.shape_164}]},4).to({state:[{t:this.shape_165}]},5).to({state:[{t:this.shape_166}]},6).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},4).to({state:[{t:this.shape_165}]},5).to({state:[{t:this.shape_165}]},6).to({state:[]},1).to({state:[{t:this.shape_166}]},71).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[]},1).to({state:[]},1).wait(66));

	// clouds
	this.instance_2 = new lib.Tween3("synched",0);
	this.instance_2.setTransform(142.45,142.05,1.2283,1.2787);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween4("synched",0);
	this.instance_3.setTransform(880.4,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},65).to({state:[{t:this.instance_3}]},50).to({state:[]},2).to({state:[{t:this.instance_2}]},86).to({state:[{t:this.instance_2}]},4).to({state:[]},1).to({state:[]},1).wait(66));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(65).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1,x:880.4,y:0.05},50).wait(88).to({_off:false,scaleX:1.2283,scaleY:1.2787,x:142.45,y:142.05},0).to({x:987.05,alpha:0},4).to({_off:true},1).wait(67));

	// sky
	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#CCF2FF").s().p("Eg+jAvKMAAAhdvUA+jgBHA+kABHMAAABdvg");
	this.shape_221.setTransform(400.425,301.7875);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("rgba(166,189,197,0.749)").s().p("Eg+jAvKMAAAhdvUA+jgBHA+kABHMAAABdvg");
	this.shape_222.setTransform(400.425,301.7875);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("rgba(127,136,139,0.502)").s().p("Eg+jAvKMAAAhdvUA+jgBHA+kABHMAAABdvg");
	this.shape_223.setTransform(400.425,301.7875);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("rgba(89,82,81,0.251)").s().p("Eg+jAvKMAAAhdvUA+jgBHA+kABHMAAABdvg");
	this.shape_224.setTransform(400.425,301.7875);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("rgba(50,29,23,0)").s().p("Eg+jAvKMAAAhdvUA+jgBHA+kABHMAAABdvg");
	this.shape_225.setTransform(400.425,301.7875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_221}]},65).to({state:[{t:this.shape_221}]},50).to({state:[]},2).to({state:[{t:this.shape_221}]},86).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[]},1).to({state:[]},1).wait(66));

	// beam
	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAaWMAkjg0rIIKAAMBQSA0rg");
	this.shape_226.setTransform(400,431.475);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAabQSM6bSI6aIIoAAUAn7AaeAoIAaXg");
	this.shape_227.setTransform(400,430.925);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAagQSI6gR96gIJGAAUAnuAaoAoGAaYg");
	this.shape_228.setTransform(400,430.4);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAamQSD6mRz6lIJkAAUAngAayAoFAaZg");
	this.shape_229.setTransform(400,429.85);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAarQR+6rRq6qIKBAAUAnTAa6AoDAabg");
	this.shape_230.setTransform(400,429.325);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAaxQR56xRf6wIKgAAUAnFAbEAoCAadg");
	this.shape_231.setTransform(400,428.775);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAa2QR062RV61IK9AAUAm5AbOAoAAadg");
	this.shape_232.setTransform(400,428.25);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAa7QRv66RM68ILbAAUAmrAbYAn+Aaeg");
	this.shape_233.setTransform(400,427.7);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAbBQRq7BRB7AIL6AAUAmdAbgAn9Aahg");
	this.shape_234.setTransform(400,427.175);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAbGQRm7GQ27FIMXAAUAmRAbqAn7Aahg");
	this.shape_235.setTransform(400,426.625);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAbMQRh7MQt7LIM0AAUAmEAb0An5Aajg");
	this.shape_236.setTransform(400,426.075);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAbRQRc7RQj7QINSAAUAl3Ab8An3Aalg");
	this.shape_237.setTransform(400,425.55);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAbWQRX7VQZ7XINwAAUAlpAcGAn2Aamg");
	this.shape_238.setTransform(400,425);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAbcQRS7cQP7bIOOAAUAlcAcQAn0Aang");
	this.shape_239.setTransform(400,424.475);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAbhQRN7hQF7gIOsAAUAlPAcZAnyAaog");
	this.shape_240.setTransform(400,423.925);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAbmQRJ7mP67lIPKAAUAlBAciAnxAapg");
	this.shape_241.setTransform(400,423.4);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAbsQRD7rPy7sIPnAAUAkzAcsAnwAarg");
	this.shape_242.setTransform(400,422.85);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAbxQQ/7xPm7wIQGAAUAknAc1AntAasg");
	this.shape_243.setTransform(400,422.325);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAb3QQ673Pd72IQiAAUAkaAc/AnsAaug");
	this.shape_244.setTransform(400,421.775);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAb8QQ178PT77IRBAAUAkLAdHAnrAawg");
	this.shape_245.setTransform(400,421.25);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAcBQQw8BPI8AIRgAAUAj+AdRAnpAawg");
	this.shape_246.setTransform(400,420.7);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAcHQQs8GO+8HIR8AAUAjyAdbAnnAayg");
	this.shape_247.setTransform(400,420.15);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAcMQQn8MO08LISaAAUAjkAdkAnmAazg");
	this.shape_248.setTransform(400,419.625);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAcSQQh8SOr8RIS4AAUAjXAduAnkAa1g");
	this.shape_249.setTransform(400,419.075);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAcXQQc8XOh8WITWAAUAjJAd3AnjAa2g");
	this.shape_250.setTransform(400,418.55);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAccQQY8bOW8cIT0AAUAi9AeAAngAa3g");
	this.shape_251.setTransform(400,418);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAciQQT8iOM8hIUSAAUAivAeKAnfAa5g");
	this.shape_252.setTransform(400,417.475);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAcnQQO8nOC8mIUwAAUAihAeTAneAa6g");
	this.shape_253.setTransform(400,416.925);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAcsQQJ8sN58sIVNAAUAiUAedAncAa7g");
	this.shape_254.setTransform(400,416.4);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAcyQQE8yNu8xIVrAAUAiIAemAnaAa9g");
	this.shape_255.setTransform(400,415.85);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAc3QP/82Nl83IWIAAUAh6AewAnZAa9g");
	this.shape_256.setTransform(400,415.3);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAc9QP689Nb88IWnAAUAhsAe5AnXAbAg");
	this.shape_257.setTransform(400,414.775);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAdCQP29CNP9BIXFAAUAhfAfCAnWAbBg");
	this.shape_258.setTransform(400,414.225);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAdHQPx9HNG9HIXiAAUAhTAfMAnTAbCg");
	this.shape_259.setTransform(400,413.7);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAdNQPs9NM89MIYAAAUAhFAfWAnSAbDg");
	this.shape_260.setTransform(400,413.15);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAdSQPn9SMy9RIYeAAUAg4AfeAnQAbFg");
	this.shape_261.setTransform(400,412.625);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAdYQPj9YMn9XIY8AAUAgqAfoAnPAbHg");
	this.shape_262.setTransform(400,412.075);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAddQPd9dMe9cIZaAAUAgdAfyAnNAbHg");
	this.shape_263.setTransform(400,411.55);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAdiQPZ9iMT9iIZ4AAUAgPAf8AnMAbIg");
	this.shape_264.setTransform(400,411);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAdoQPU9oMJ9nIaWAAUAgCAgEAnKAbLg");
	this.shape_265.setTransform(400,410.475);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAdtQPP9tL/9sIa0AAUAf1AgNAnIAbMg");
	this.shape_266.setTransform(400,409.925);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAdzQPK9zL19yIbRAAUAfpAgYAnGAbNg");
	this.shape_267.setTransform(400,409.375);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAd4QPF94Ls93IbuAAUAfbAggAnFAbPg");
	this.shape_268.setTransform(400,408.85);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAd9QPA99Lh99IcOAAUAfNAgrAnDAbPg");
	this.shape_269.setTransform(400,408.3);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAeDQO8+DLW+CIcrAAUAfAAg0AnCAbRg");
	this.shape_270.setTransform(400,407.775);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAeIQO2+ILO+HIdIAAUAezAg9AnAAbSg");
	this.shape_271.setTransform(400,407.225);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAeNQOx+NLE+MIdmAAUAelAhGAm/AbTg");
	this.shape_272.setTransform(400,406.7);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAeTQOt+SK5+TIeEAAUAeYAhQAm9AbVg");
	this.shape_273.setTransform(400,406.15);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAeYQOo+YKv+XIeiAAUAeLAhZAm7AbWg");
	this.shape_274.setTransform(400,405.625);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("rgba(210,180,140,0.188)").s().p("Eg+fAeeQOj+eKl+dIfAAAUAd+AhjAm5AbYg");
	this.shape_275.setTransform(400,405.075);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("rgba(210,180,140,0.141)").s().p("Eg+fAeeQOj+eKl+dIfAAAUAd9AhjAm6AbYg");
	this.shape_276.setTransform(400,405.075);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("rgba(210,180,140,0.094)").s().p("Eg+fAeeQOj+eKl+dIfAAAUAd9AhjAm6AbYg");
	this.shape_277.setTransform(400,405.075);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("rgba(210,180,140,0.047)").s().p("Eg+fAeeQOj+eKl+dIfAAAUAd9AhjAm6AbYg");
	this.shape_278.setTransform(400,405.075);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("rgba(210,180,140,0)").s().p("Eg+fAeeQOj+eKl+dIfAAAUAd+AhjAm5AbYg");
	this.shape_279.setTransform(400,405.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_226}]}).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[]},1).to({state:[{t:this.shape_275}]},158).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[]},2).to({state:[]},14).wait(47));

	// outside
	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#A08679").s().p("AkEC9IAAl5IIJAAIAAF5g");
	this.shape_280.setTransform(260,281.775);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#A08679").s().p("AkTDIIAAmPIInAAIAAGPg");
	this.shape_281.setTransform(260,281.775);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#A08679").s().p("AkiDSIAAmjIJFAAIAAGjg");
	this.shape_282.setTransform(260,281.775);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#A08679").s().p("AkxDdIAAm5IJjAAIAAG5g");
	this.shape_283.setTransform(260,281.775);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#A08679").s().p("Ak/DoIAAnPIKAAAIAAHPg");
	this.shape_284.setTransform(260,281.775);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#A08679").s().p("AlPDzIAAnlIKfAAIAAHlg");
	this.shape_285.setTransform(260,281.775);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#A08679").s().p("AleD+IAAn7IK8AAIAAH7g");
	this.shape_286.setTransform(260,281.8);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#A08679").s().p("AlsEIIAAoPILaAAIAAIPg");
	this.shape_287.setTransform(260,281.775);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#A08679").s().p("Al8ETIAAolIL5AAIAAIlg");
	this.shape_288.setTransform(260,281.8);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#A08679").s().p("AmLEeIAAo7IMWAAIAAI7g");
	this.shape_289.setTransform(260,281.775);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#A08679").s().p("AmZEpIAApRIMzAAIAAJRg");
	this.shape_290.setTransform(260,281.775);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#A08679").s().p("AmoE0IAApnINRAAIAAJng");
	this.shape_291.setTransform(260,281.8);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#A08679").s().p("Am3E+IAAp7INvAAIAAJ7g");
	this.shape_292.setTransform(260,281.775);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#A08679").s().p("AnGFJIAAqRIONAAIAAKRg");
	this.shape_293.setTransform(260,281.8);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#A08679").s().p("AnVFUIAAqnIOrAAIAAKng");
	this.shape_294.setTransform(260,281.775);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#A08679").s().p("AnkFfIAAq8IPJAAIAAK8g");
	this.shape_295.setTransform(260,281.8);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#A08679").s().p("AnyFpIAArRIPmAAIAALRg");
	this.shape_296.setTransform(260,281.775);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#A08679").s().p("AoCF0IAArnIQFAAIAALng");
	this.shape_297.setTransform(260,281.8);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#A08679").s().p("AoQF/IAAr9IQhAAIAAL9g");
	this.shape_298.setTransform(260,281.8);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#A08679").s().p("AofGJIAAsRIRAAAIAAMRg");
	this.shape_299.setTransform(260,281.8);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#A08679").s().p("AovGVIAAsoIRfAAIAAMog");
	this.shape_300.setTransform(260,281.8);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#A08679").s().p("Ao9GfIAAs9IR7AAIAAM9g");
	this.shape_301.setTransform(260,281.775);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#A08679").s().p("ApMGqIAAtTISZAAIAANTg");
	this.shape_302.setTransform(260,281.8);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#A08679").s().p("ApbG1IAAtpIS3AAIAANpg");
	this.shape_303.setTransform(260,281.8);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#A08679").s().p("ApqG/IAAt9ITVAAIAAN9g");
	this.shape_304.setTransform(260,281.8);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#A08679").s().p("Ap5HLIAAuUITzAAIAAOUg");
	this.shape_305.setTransform(260,281.8);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#A08679").s().p("AqIHVIAAupIURAAIAAOpg");
	this.shape_306.setTransform(260,281.8);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#A08679").s().p("AqXHgIAAu/IUvAAIAAO/g");
	this.shape_307.setTransform(260,281.8);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#A08679").s().p("AqlHrIAAvVIVMAAIAAPVg");
	this.shape_308.setTransform(260,281.825);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#A08679").s().p("Aq1H1IAAvpIVqAAIAAPpg");
	this.shape_309.setTransform(260,281.8);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#A08679").s().p("ArDIBIAAwAIWHAAIAAQAg");
	this.shape_310.setTransform(260,281.8);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#A08679").s().p("ArSILIAAwVIWmAAIAAQVg");
	this.shape_311.setTransform(260,281.8);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#A08679").s().p("AriIWIAAwrIXEAAIAAQrg");
	this.shape_312.setTransform(260,281.8);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#A08679").s().p("ArwIhIAAxBIXhAAIAARBg");
	this.shape_313.setTransform(260,281.825);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#A08679").s().p("Ar/IrIAAxVIX/AAIAARVg");
	this.shape_314.setTransform(260,281.8);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#A08679").s().p("AsOI2IAAxrIYdAAIAARrg");
	this.shape_315.setTransform(260,281.825);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#A08679").s().p("AsdJBIAAyBIY7AAIAASBg");
	this.shape_316.setTransform(260,281.8);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#A08679").s().p("AssJMIAAyXIZZAAIAASXg");
	this.shape_317.setTransform(260,281.825);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#A08679").s().p("As7JWIAAysIZ3AAIAASsg");
	this.shape_318.setTransform(260,281.8);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#A08679").s().p("AtKJhIAAzBIaVAAIAATBg");
	this.shape_319.setTransform(260,281.825);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#A08679").s().p("AtZJsIAAzXIazAAIAATXg");
	this.shape_320.setTransform(260,281.825);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#A08679").s().p("AtoJ3IAAztIbQAAIAATtg");
	this.shape_321.setTransform(260,281.8);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#A08679").s().p("At2KCIAA0DIbuAAIAAUDg");
	this.shape_322.setTransform(260,281.825);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#A08679").s().p("AuGKMIAA0YIcNAAIAAUYg");
	this.shape_323.setTransform(260,281.8);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#A08679").s().p("AuVKXIAA0tIcqAAIAAUtg");
	this.shape_324.setTransform(260,281.825);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#A08679").s().p("AujKiIAA1DIdIAAIAAVDg");
	this.shape_325.setTransform(260,281.825);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#A08679").s().p("AuyKtIAA1ZIdlAAIAAVZg");
	this.shape_326.setTransform(260,281.825);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#A08679").s().p("AvBK4IAA1vIeDAAIAAVvg");
	this.shape_327.setTransform(260,281.825);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#A08679").s().p("AvQLCIAA2DIehAAIAAWDg");
	this.shape_328.setTransform(260,281.825);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#A08679").s().p("AvfLNIAA2ZIe/AAIAAWZg");
	this.shape_329.setTransform(260,281.825);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("rgba(173,146,126,0.749)").s().p("AvfLNIAA2ZIe/AAIAAWZg");
	this.shape_330.setTransform(260,281.825);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("rgba(185,157,131,0.502)").s().p("AvfLNIAA2ZIe/AAIAAWZg");
	this.shape_331.setTransform(260,281.825);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("rgba(198,169,135,0.251)").s().p("AvfLNIAA2ZIe/AAIAAWZg");
	this.shape_332.setTransform(260,281.825);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("rgba(210,180,140,0)").s().p("AvfLNIAA2ZIe/AAIAAWZg");
	this.shape_333.setTransform(260,281.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_280}]}).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[]},1).to({state:[{t:this.shape_329}]},158).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[]},2).to({state:[]},14).wait(47));

	// celing
	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#6A4A3A").s().p("A58UiMgkjgpEMB8/AAAMhQSApEg");
	this.shape_334.setTransform(400,131.45);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#6A4A3A").s().p("A6LUdMgkUgo5MB8/AAAMhQDAo5g");
	this.shape_335.setTransform(400,130.9);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#6A4A3A").s().p("A6aUYMgkFgovMB8/AAAMhP0Aovg");
	this.shape_336.setTransform(400,130.375);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#6A4A3A").s().p("A6pUSMgj2gojMB8/AAAMhPlAojg");
	this.shape_337.setTransform(400,129.825);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#6A4A3A").s().p("A63UNMgjogoZMB8/AAAMhPWAoZg");
	this.shape_338.setTransform(400,129.3);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#6A4A3A").s().p("A7HUHMgjYgoOMB8/AAAMhPHAoOg");
	this.shape_339.setTransform(400,128.75);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#6A4A3A").s().p("A7WUCMgjJgoDMB8/AAAMhO5AoDg");
	this.shape_340.setTransform(400,128.225);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#6A4A3A").s().p("A7kT9Mgi7gn5MB8/AAAMhOpAn5g");
	this.shape_341.setTransform(400,127.675);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#6A4A3A").s().p("A70T4MgirgnvMB8/AAAMhOaAnvg");
	this.shape_342.setTransform(400,127.15);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#6A4A3A").s().p("A8DTyMgicgnjMB8/AAAMhOMAnjg");
	this.shape_343.setTransform(400,126.6);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#6A4A3A").s().p("A8RTsMgiOgnYMB8/AAAMhN9AnYg");
	this.shape_344.setTransform(400,126.05);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#6A4A3A").s().p("A8gTnMgh/gnNMB8/AAAMhNuAnNg");
	this.shape_345.setTransform(400,125.525);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#6A4A3A").s().p("A8vTiMghwgnDMB8/AAAMhNfAnDg");
	this.shape_346.setTransform(400,124.975);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#6A4A3A").s().p("A8+TdMghhgm5MB8/AAAMhNQAm5g");
	this.shape_347.setTransform(400,124.45);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#6A4A3A").s().p("A9NTXMghSgmtMB8/AAAMhNBAmtg");
	this.shape_348.setTransform(400,123.9);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#6A4A3A").s().p("A9cTSMghDgmjMB8/AAAMhMyAmjg");
	this.shape_349.setTransform(400,123.375);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#6A4A3A").s().p("A9qTMMgg1gmXMB8/AAAMhMjAmXg");
	this.shape_350.setTransform(400,122.825);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#6A4A3A").s().p("A96THMgglgmNMB8/AAAMhMUAmNg");
	this.shape_351.setTransform(400,122.3);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#6A4A3A").s().p("A+ITCMggXgmDMB8/AAAMhMGAmDg");
	this.shape_352.setTransform(400,121.75);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#6A4A3A").s().p("A+XS8MggIgl3MB8/AAAMhL2Al3g");
	this.shape_353.setTransform(400,121.225);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#6A4A3A").s().p("A+nS3Mgf4gltMB8/AAAMhLnAltg");
	this.shape_354.setTransform(400,120.675);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#6A4A3A").s().p("A+1SxMgfqglhMB8/AAAMhLZAlhg");
	this.shape_355.setTransform(400,120.125);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#6A4A3A").s().p("A/ESsMgfbglXMB8/AAAMhLKAlXg");
	this.shape_356.setTransform(400,119.6);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#6A4A3A").s().p("A/TSnMgfMglNMB8/AAAMhK7AlNg");
	this.shape_357.setTransform(400,119.05);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#6A4A3A").s().p("A/iShMge9glBMB8/AAAMhKsAlBg");
	this.shape_358.setTransform(400,118.525);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#6A4A3A").s().p("A/xScMgeugk3MB8/AAAMhKdAk3g");
	this.shape_359.setTransform(400,117.975);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#6A4A3A").s().p("EggAASXMgefgktMB8/AAAMhKOAktg");
	this.shape_360.setTransform(400,117.45);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#6A4A3A").s().p("EggPASRMgeQgkhMB8/AAAMhJ/Akhg");
	this.shape_361.setTransform(400,116.9);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#6A4A3A").s().p("EggdASMMgeCgkXMB8/AAAMhJwAkXg");
	this.shape_362.setTransform(400,116.375);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#6A4A3A").s().p("EggtASGMgdygkLMB8/AAAMhJiAkLg");
	this.shape_363.setTransform(400,115.825);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#6A4A3A").s().p("Egg7ASBMgdkgkBMB8/AAAMhJTAkBg");
	this.shape_364.setTransform(400,115.275);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#6A4A3A").s().p("EghKAR8MgdVgj3MB8/AAAMhJDAj3g");
	this.shape_365.setTransform(400,114.75);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#6A4A3A").s().p("EghaAR2MgdFgjrMB8/AAAMhI1Ajrg");
	this.shape_366.setTransform(400,114.2);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#6A4A3A").s().p("EghoARxMgc3gjhMB8/AAAMhImAjhg");
	this.shape_367.setTransform(400,113.675);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#6A4A3A").s().p("Egh3ARrMgcogjVMB8/AAAMhIXAjVg");
	this.shape_368.setTransform(400,113.125);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#6A4A3A").s().p("EgiGARmMgcZgjLMB8/AAAMhIIAjLg");
	this.shape_369.setTransform(400,112.6);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#6A4A3A").s().p("EgiVARhMgcKgjBMB8/AAAMhH5AjBg");
	this.shape_370.setTransform(400,112.05);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#6A4A3A").s().p("EgikARbMgb7gi1MB8/AAAMhHqAi1g");
	this.shape_371.setTransform(400,111.525);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#6A4A3A").s().p("EgizARWMgbsgirMB8/AAAMhHbAirg");
	this.shape_372.setTransform(400,110.975);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#6A4A3A").s().p("EgjCARQMgbdgigMB8/AAAMhHMAigg");
	this.shape_373.setTransform(400,110.45);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#6A4A3A").s().p("EgjRARLMgbOgiVMB8/AAAMhG9AiVg");
	this.shape_374.setTransform(400,109.9);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#6A4A3A").s().p("EgjgARGMga/giLMB8/AAAMhGvAiLg");
	this.shape_375.setTransform(400,109.35);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#6A4A3A").s().p("EgjuARAMgaxgh/MB8/AAAMhGgAh/g");
	this.shape_376.setTransform(400,108.825);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#6A4A3A").s().p("Egj+AQ7Mgahgh1MB8/AAAMhGQAh1g");
	this.shape_377.setTransform(400,108.275);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#6A4A3A").s().p("EgkNAQ1MgaSghqMB8/AAAMhGCAhqg");
	this.shape_378.setTransform(400,107.75);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#6A4A3A").s().p("EgkbAQwMgaEghfMB8/AAAMhFzAhfg");
	this.shape_379.setTransform(400,107.2);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#6A4A3A").s().p("EgkqAQrMgZ1ghVMB8/AAAMhFkAhVg");
	this.shape_380.setTransform(400,106.675);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#6A4A3A").s().p("Egk5AQlMgZmghJMB8/AAAMhFVAhJg");
	this.shape_381.setTransform(400,106.125);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#6A4A3A").s().p("EglIAQgMgZXgg/MB8/AAAMhFGAg/g");
	this.shape_382.setTransform(400,105.6);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#6A4A3A").s().p("EglXAQaMgZIgg0MB8/AAAMhE3Ag0g");
	this.shape_383.setTransform(400,105.05);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("rgba(132,101,79,0.749)").s().p("EglXAQaMgZIgg0MB8/AAAMhE3Ag0g");
	this.shape_384.setTransform(400,105.05);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("rgba(158,127,99,0.502)").s().p("EglXAQaMgZIgg0MB8/AAAMhE3Ag0g");
	this.shape_385.setTransform(400,105.05);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("rgba(184,154,120,0.251)").s().p("EglXAQaMgZIgg0MB8/AAAMhE3Ag0g");
	this.shape_386.setTransform(400,105.05);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("rgba(210,180,140,0)").s().p("EglXAQaMgZIgg0MB8/AAAMhE3Ag0g");
	this.shape_387.setTransform(400,105.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_334}]}).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[]},1).to({state:[{t:this.shape_383}]},158).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).to({state:[]},2).to({state:[]},14).wait(47));

	// floor
	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#3D251E").s().p("Eg+fAXZMAkjguxIIKAAMBQSAuxg");
	this.shape_388.setTransform(400,450.35);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#3D251E").s().p("Eg+fAXTMAkUgulIIoAAMBQDAulg");
	this.shape_389.setTransform(400,450.9);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#3D251E").s().p("Eg+fAXOMAkFgubIJGAAMBP0Aubg");
	this.shape_390.setTransform(400,451.425);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#3D251E").s().p("Eg+fAXJMAj2guRIJkAAMBPlAuRg");
	this.shape_391.setTransform(400,451.975);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#3D251E").s().p("Eg+fAXDMAjoguGIKBAAMBPWAuGg");
	this.shape_392.setTransform(400,452.5);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#3D251E").s().p("Eg+fAW+MAjYgt7IKgAAMBPHAt7g");
	this.shape_393.setTransform(400,453.05);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#3D251E").s().p("Eg+fAW4MAjJgtvIK9AAMBO5Atvg");
	this.shape_394.setTransform(400,453.6);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#3D251E").s().p("Eg+fAWzMAi7gtlILbAAMBOpAtlg");
	this.shape_395.setTransform(400,454.125);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#3D251E").s().p("Eg+fAWuMAirgtbIL6AAMBOaAtbg");
	this.shape_396.setTransform(400,454.675);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#3D251E").s().p("Eg+fAWoMAicgtQIMXAAMBOMAtQg");
	this.shape_397.setTransform(400,455.2);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#3D251E").s().p("Eg+fAWjMAiOgtFIM0AAMBN9AtFg");
	this.shape_398.setTransform(400,455.75);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#3D251E").s().p("Eg+fAWdMAh/gs5INSAAMBNuAs5g");
	this.shape_399.setTransform(400,456.3);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#3D251E").s().p("Eg+fAWYMAhwgsvINwAAMBNfAsvg");
	this.shape_400.setTransform(400,456.825);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#3D251E").s().p("Eg+fAWTMAhhgslIOOAAMBNQAslg");
	this.shape_401.setTransform(400,457.375);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#3D251E").s().p("Eg+fAWNMAhSgsaIOsAAMBNBAsag");
	this.shape_402.setTransform(400,457.9);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#3D251E").s().p("Eg+fAWIMAhDgsPIPKAAMBMyAsPg");
	this.shape_403.setTransform(400,458.45);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#3D251E").s().p("Eg+fAWDMAg1gsFIPnAAMBMjAsFg");
	this.shape_404.setTransform(400,458.975);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#3D251E").s().p("Eg+fAV9MAglgr5IQGAAMBMUAr5g");
	this.shape_405.setTransform(400,459.525);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#3D251E").s().p("Eg+fAV4MAgXgrvIQiAAMBMGArvg");
	this.shape_406.setTransform(400,460.075);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#3D251E").s().p("Eg+fAVyMAgIgrkIRBAAMBL2Arkg");
	this.shape_407.setTransform(400,460.6);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#3D251E").s().p("Eg+fAVtMAf4grZIRgAAMBLnArZg");
	this.shape_408.setTransform(400,461.15);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#3D251E").s().p("Eg+fAVoMAfqgrPIR8AAMBLZArPg");
	this.shape_409.setTransform(400,461.675);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#3D251E").s().p("Eg+fAViMAfbgrDISaAAMBLKArDg");
	this.shape_410.setTransform(400,462.225);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#3D251E").s().p("Eg+fAVdMAfMgq5IS4AAMBK7Aq5g");
	this.shape_411.setTransform(400,462.775);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#3D251E").s().p("Eg+fAVXMAe9gquITWAAMBKsAqug");
	this.shape_412.setTransform(400,463.3);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#3D251E").s().p("Eg+fAVSMAeugqjIT0AAMBKdAqjg");
	this.shape_413.setTransform(400,463.85);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#3D251E").s().p("Eg+fAVNMAefgqZIUSAAMBKOAqZg");
	this.shape_414.setTransform(400,464.375);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#3D251E").s().p("Eg+fAVHMAeQgqNIUwAAMBJ/AqNg");
	this.shape_415.setTransform(400,464.925);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#3D251E").s().p("Eg+fAVCMAeCgqDIVNAAMBJwAqDg");
	this.shape_416.setTransform(400,465.475);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#3D251E").s().p("Eg+fAU8MAdygp4IVrAAMBJiAp4g");
	this.shape_417.setTransform(400,466);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#3D251E").s().p("Eg+fAU3MAdkgptIWIAAMBJTAptg");
	this.shape_418.setTransform(400,466.55);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#3D251E").s().p("Eg+fAUyMAdVgpjIWnAAMBJDApjg");
	this.shape_419.setTransform(400,467.075);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#3D251E").s().p("Eg+fAUsMAdFgpXIXFAAMBI1ApXg");
	this.shape_420.setTransform(400,467.625);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#3D251E").s().p("Eg+fAUnMAc3gpNIXiAAMBImApNg");
	this.shape_421.setTransform(400,468.175);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#3D251E").s().p("Eg+fAUhMAcogpCIYAAAMBIXApCg");
	this.shape_422.setTransform(400,468.7);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#3D251E").s().p("Eg+fAUcMAcZgo3IYeAAMBIIAo3g");
	this.shape_423.setTransform(400,469.25);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#3D251E").s().p("Eg+fAUXMAcKgotIY8AAMBH5Aotg");
	this.shape_424.setTransform(400,469.775);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#3D251E").s().p("Eg+fAURMAb7gohIZaAAMBHqAohg");
	this.shape_425.setTransform(400,470.325);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#3D251E").s().p("Eg+fAUMMAbsgoXIZ4AAMBHbAoXg");
	this.shape_426.setTransform(400,470.85);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#3D251E").s().p("Eg+fAUGMAbdgoMIaWAAMBHMAoMg");
	this.shape_427.setTransform(400,471.4);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#3D251E").s().p("Eg+fAUBMAbOgoBIa0AAMBG9AoBg");
	this.shape_428.setTransform(400,471.95);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#3D251E").s().p("Eg+fAT8MAa/gn3IbRAAMBGvAn3g");
	this.shape_429.setTransform(400,472.475);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#3D251E").s().p("Eg+fAT2MAaxgnrIbuAAMBGgAnrg");
	this.shape_430.setTransform(400,473.025);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#3D251E").s().p("Eg+fATxMAahgnhIcOAAMBGQAnhg");
	this.shape_431.setTransform(400,473.55);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#3D251E").s().p("Eg+fATrMAaSgnWIcrAAMBGCAnWg");
	this.shape_432.setTransform(400,474.1);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#3D251E").s().p("Eg+fATmMAaEgnLIdIAAMBFzAnLg");
	this.shape_433.setTransform(400,474.65);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#3D251E").s().p("Eg+fAThMAZ1gnBIdmAAMBFkAnBg");
	this.shape_434.setTransform(400,475.175);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#3D251E").s().p("Eg+fATbMAZmgm1IeEAAMBFVAm1g");
	this.shape_435.setTransform(400,475.725);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#3D251E").s().p("Eg+fATWMAZXgmrIeiAAMBFGAmrg");
	this.shape_436.setTransform(400,476.25);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#3D251E").s().p("Eg+fATQMAZIgmgIfAAAMBE3Amgg");
	this.shape_437.setTransform(400,476.8);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("rgba(98,73,58,0.749)").s().p("Eg+fATQMAZIgmgIfAAAMBE3Amgg");
	this.shape_438.setTransform(400,476.8);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("rgba(136,109,85,0.502)").s().p("Eg+fATQMAZIgmgIfAAAMBE3Amgg");
	this.shape_439.setTransform(400,476.8);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("rgba(173,144,113,0.251)").s().p("Eg+fATQMAZIgmgIfAAAMBE3Amgg");
	this.shape_440.setTransform(400,476.8);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("rgba(210,180,140,0)").s().p("Eg+fATQMAZIgmgIfAAAMBE3Amgg");
	this.shape_441.setTransform(400,476.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_388}]}).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_394}]},1).to({state:[{t:this.shape_395}]},1).to({state:[{t:this.shape_396}]},1).to({state:[{t:this.shape_397}]},1).to({state:[{t:this.shape_398}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_400}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_404}]},1).to({state:[{t:this.shape_405}]},1).to({state:[{t:this.shape_406}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_408}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_410}]},1).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_412}]},1).to({state:[{t:this.shape_413}]},1).to({state:[{t:this.shape_414}]},1).to({state:[{t:this.shape_415}]},1).to({state:[{t:this.shape_416}]},1).to({state:[{t:this.shape_417}]},1).to({state:[{t:this.shape_418}]},1).to({state:[{t:this.shape_419}]},1).to({state:[{t:this.shape_420}]},1).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_422}]},1).to({state:[{t:this.shape_423}]},1).to({state:[{t:this.shape_424}]},1).to({state:[{t:this.shape_425}]},1).to({state:[{t:this.shape_426}]},1).to({state:[{t:this.shape_427}]},1).to({state:[{t:this.shape_428}]},1).to({state:[{t:this.shape_429}]},1).to({state:[{t:this.shape_430}]},1).to({state:[{t:this.shape_431}]},1).to({state:[{t:this.shape_432}]},1).to({state:[{t:this.shape_433}]},1).to({state:[{t:this.shape_434}]},1).to({state:[{t:this.shape_435}]},1).to({state:[{t:this.shape_436}]},1).to({state:[{t:this.shape_437}]},1).to({state:[]},1).to({state:[{t:this.shape_437}]},158).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_439}]},1).to({state:[{t:this.shape_440}]},1).to({state:[{t:this.shape_441}]},1).to({state:[]},2).to({state:[]},14).wait(47));

	// all_the_way_baack
	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#4C3228").s().p("Eg+fAu4MAAAhdvMB8/AAAMAAABdvg");
	this.shape_442.setTransform(400,300.025);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("rgba(110,83,65,0.749)").s().p("Eg+fAu4MAAAhdvMB8/AAAMAAABdvg");
	this.shape_443.setTransform(400,300.025);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("rgba(143,115,90,0.502)").s().p("Eg+fAu4MAAAhdvMB8/AAAMAAABdvg");
	this.shape_444.setTransform(400,300.025);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("rgba(177,148,115,0.251)").s().p("Eg+fAu4MAAAhdvMB8/AAAMAAABdvg");
	this.shape_445.setTransform(400,300.025);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("rgba(210,180,140,0)").s().p("Eg+fAu4MAAAhdvMB8/AAAMAAABdvg");
	this.shape_446.setTransform(400,300.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_442}]}).to({state:[]},50).to({state:[{t:this.shape_442}]},158).to({state:[{t:this.shape_443}]},1).to({state:[{t:this.shape_444}]},1).to({state:[{t:this.shape_445}]},1).to({state:[{t:this.shape_446}]},1).to({state:[]},2).to({state:[]},14).wait(47));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-22.6,94.4,1574.8,802.8000000000001);
// library properties:
lib.properties = {
	id: '4A53998B82F8764380F68F5C2493A28C',
	width: 800,
	height: 600,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"sounds/Forestofdreams.mp3", id:"Forestofdreams"}
	],
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
an.compositions['4A53998B82F8764380F68F5C2493A28C'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;