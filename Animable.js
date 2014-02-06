/**
 * Animable.js
 *
 * https://github.com/JWhile/Animable.js
 *
 * version 1.1.0
 */

var anime,stopAnime;

(function(){ // namespace

// class Animation
function Animation(id, from, to, time, update)
{
    this.id = id; // :int

    this.from = from; // :float
    this.diff = to - from; // :float

    this.start = Date.now(); // :long
    this.time = time; // :int

    this.update = update; // :function
}
// function next(long now):boolean
Animation.prototype.next = function(now)
{
    var n = (now - this.start) / this.time;

    if(n >= 1)
    {
        this.update(this.diff + this.from);

        return true;
    }

    this.update(n * this.diff + this.from);

    return false;
};

var lastAnimId = 0; // :int
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

// function anime(function update, float from, float to, int time):int
anime = function(update, from, to, time)
{
    animations.push(new Animation(++lastAnimId, from, to, time, update));

    if(!loop)
    {
        newFrame(next);
    }

    return lastAnimId;
};

// function stopAnime(int id):void
stopAnime = function(id)
{
    for(var i = 0; i < animations.length; ++i)
    {
        if(animations[i].id === id)
        {
            animations.splice(i, 1);

            --i;
        }
    }
};

if(typeof Builder === 'function')
{
    // function anime(String property, int to, int time, function callback = null):@Chainable
    Builder.prototype.anime = function(property, to, time, callback)
    {
        var self = this;

        var style = Builder.getStyle(this.node, property);
        var unit = (style.match(/em$|px$|%$/i) || [''])[0];

        anime(function(value)
        {
            if(value === to)
            {
                if(callback != null)
                {
                    callback();
                }
            }

            self.node.style[property] = value + unit;

        }, parseInt(style), to, time);

        return this;
    };
}

})();
