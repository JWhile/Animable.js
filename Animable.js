/**
 * Animable.js
 *
 * https://github.com/JWhile/Animable.js
 *
 * Animable.js
 */

(function(){ // namespace

// class Animation
function Animation(from, to, time, update)
{
    this.from = from; // :int
    this.diff = to - from; // :int

    this.last = from; // :int

    this.start = Date.now(); // :long
    this.time = time; // :int

    this.update = update; // :function
}
// function next(long now):void
Animation.prototype.next = function(now)
{
    var n = (now - this.start) / this.time * this.diff + this.from;

    if(n !== this.last)
    {
        this.last = n;

        this.update(n);
    }
};

var animations = []; // :Array<Animation>

var next = function()
{
    newFrame(next);

    for(var i = 0; i < animations.length; ++i)
    {
        animations[i].next();
    }
};

})();
