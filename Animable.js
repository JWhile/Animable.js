/**
 * Animable.js
 *
 * https://github.com/JWhile/Animable.js
 *
 * version 1.3.1
 */

var anime,stopAnime,smooth;

(function(){ // namespace

// class Animation
function Animation(id, from, to, time, update, smooth)
{
    this.id = id; // :int

    this.from = from; // :float
    this.diff = to - from; // :float

    this.start = Date.now(); // :long
    this.time = time; // :int

    this.update = update; // :function

    this.smooth = smooth; // :function
}
// function next(long now):boolean
Animation.prototype.next = function(now)
{
    var currTime = now - this.start;

    if(currTime >= this.time)
    {
        this.update(this.diff + this.from);

        return true;
    }

    this.update(this.from + this.smooth(currTime, this.diff, this.time));

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

// var smooth:Map<String, function>
smooth = {

    // function(int currTime, float endValue, int endTime):float
    'Line': function(currTime, endValue, endTime)
    {
        return currTime / endTime * endValue;
    },

    // function(int currTime, float endValue, int endTime):float
    'In': function(currTime, endValue, endTime)
    {
        var progression = currTime / endTime;

        return progression * progression * endValue;
    },

    // function(int currTime, float endValue, int endTime):float
    'Out': function(currTime, endValue, endTime)
    {
        var progression = currTime / endTime;

        return progression * (progression - 2) * endValue * -1;
    },

    // function(int currTime, float endValue, int endTime):float
    'InOut': function(currTime, endValue, endTime)
    {
        var progression = currTime / (endTime / 2);

        if(progression < 1)
        {
            return endValue / 2 * progression * progression;
        }

        --progression;

        return -endValue / 2 * (progression * (progression - 2) - 1);
    },

/**
 * Les effets qui suivent sont basés sur les *Easing Functions* de *Robert Panner* <http://robertpenner.com/easing/>
 *
 * t = currTime
 * c = endValue
 * d = endTime
 */
    'CubicIn': function(t, c, d)
    {
        t /= d;

        return c * t * t * t;
    },

    'CubicOut': function(t, c, d)
    {
        t /= d;
        t--;

        return c * (t * t * t + 1);
    },

    'CubicInOut': function(t, c, d)
    {
        t /= d / 2;

        if(t < 1)
        {
            return c / 2 * t * t * t;
        }

        t -= 2;

        return c / 2 * (t * t * t + 2);
    },

    'QuartIn': function(t, c, d)
    {
        t /= d;

        return c * t * t * t * t;
    },

    'QuartOut': function(t, c, d)
    {
        t /= d;
        t--;

        return -c * (t * t * t * t - 1);
    },

    'QuartInOut': function(t, c, d)
    {
        t /= d / 2;

        if(t < 1)
        {
            return c / 2 * t * t * t * t;
        }

        t -= 2;

        return -c / 2 * (t * t * t * t - 2);
    },

    'QuintIn': function(t, c, d)
    {
        t /= d;

        return c * t * t * t * t * t;
    },

    'QuintOut': function(t, c, d)
    {
        t /= d;
        t--;

        return c * (t * t * t * t * t + 1);
    },

    'QuintInOut': function(t, c, d)
    {
        t /= d / 2;

        if(t < 1)
        {
            return c / 2 * t * t * t * t * t;
        }

        t -= 2;

        return c / 2 * (t * t * t * t * t + 2);
    },

    'SineIn': function(t, c, d)
    {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c;
    },

    'SineOut': function(t, c, d)
    {
        return c * Math.sin(t / d * (Math.PI / 2));
    },

    'SineInOut': function(t, c, d)
    {
        return -c / 2 * (Math.cos(Math.PI * t/d) - 1);
    },

    'ExpoIn': function(t, c, d)
    {
        return c * Math.pow(2, 10 * (t / d - 1));
    },

    'ExpoOut': function(t, c, d)
    {
        return c * (-Math.pow(2, -10 * t/d) + 1);
    },

    'ExpoInOut': function(t, c, d)
    {
        t /= d / 2;

        if(t < 1)
        {
            return c / 2 * Math.pow(2, 10 * (t - 1));
        }

        t--;

        return c / 2 * (-Math.pow(2, -10 * t) + 2);
    },

    'CircIn': function(t, c, d)
    {
        t /= d;

        return -c * (Math.sqrt(1 - t * t) - 1);
    },

    'CircOut': function(t, c, d)
    {
        t /= d;
        t--;

        return c * Math.sqrt(1 - t * t);
    },

    'CircInOut': function(t, c, d)
    {
        t /= d / 2;

        if(t < 1)
        {
            return -c / 2 * (Math.sqrt(1 - t * t) - 1);
        }

        t -= 2;

        return c / 2 * (Math.sqrt(1 - t * t) + 1);
    }
};

// function anime(function update, float from, float to, int time, function userSmooth = null):int
anime = function(update, from, to, time, userSmooth)
{
    animations.push(new Animation(++lastAnimId, from, to, time, update, (typeof userSmooth === 'function')? userSmooth : smooth.Line));

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
    // function anime(String property, int to, int time, function callback = null, function userSmooth = null):@Chainable
    Builder.prototype.anime = function(property, to, time, callback, userSmooth)
    {
        this.stopAnime(''+ property);

        var self = this;

        var style = Builder.getStyle(this.node, property);
        var unit = (style.match(/em$|px$|%$/i) || [''])[0];

        this._animations[property] = anime(function(value)
        {
            if(value === to)
            {
                delete self._animations[property];

                if(callback != null)
                {
                    callback();
                }
            }

            self.node.style[property] = value + unit;

        }, parseInt(style), to, time, userSmooth);

        return this;
    };

    // function stopAnime(String property = null):void
    Builder.prototype.stopAnime = function(property)
    {
        this._animations = this._animations || {}; // Map<String, int>

        if(typeof property === 'string')
        {
            if(this._animations[property])
            {
                stopAnime(this._animations[property]);

                delete this._animations[property];
            }
        }
        else
        {
            for(var key in this._animations)
            {
                if(this._animations.hasOwnProperty(key))
                {
                    stopAnime(this._animations[key]);
                }
            }

            this._animations = {};
        }
    };
}

})();
