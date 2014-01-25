/**
 * Animable.js
 *
 * https://github.com/JWhile/Animable.js
 *
 * Animable.js
 */

var anime;

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
// function next(long now):boolean
Animation.prototype.next = function(now)
{
    var n = (now - this.start) / this.time * this.diff + this.from;

    if(n > 1)
    {
        return true;
    }
    if(n !== this.last)
    {
        this.last = n;

        this.update(n);
    }

    return false;
};

var animations = []; // :Array<Animation>
var loop = false; // :boolean

// function next():void
var next = function()
{
    loop = (animations.length > 0);

    if(loop)
    {
        newFrame(next);

        var now = Date.now();

        for(var i = 0; i < animations.length; ++i)
        {
            if(animations[i].next(now))
            {
                animations.splice(i, 1);

                --i;
            }
        }
    }
};

// function anime(function update, int from, int to, int time):void
anime = function(update, from, to, time)
{
    animations.push(new Animation(from, to, time, update));

    if(!loop)
    {
        newFrame(next);
    }
};

})();
