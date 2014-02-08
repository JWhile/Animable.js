/**
 * Animable.js
 *
 * https://github.com/JWhile/Animable.js
 *
 * version 1.4.0
 *
 * Les smooth effects qui suivent sont basés sur les Easing Functions de Robert Penner
 * http://robertpenner.com/easing/
 */

smooth['CubicIn'] = function(t, c, d)
{
    t /= d;

    return c * t * t * t;
};

smooth['CubicOut'] = function(t, c, d)
{
    t /= d;
    t--;

    return c * (t * t * t + 1);
};

smooth['CubicInOut'] = function(t, c, d)
{
    t /= d / 2;

    if(t < 1)
    {
        return c / 2 * t * t * t;
    }

    t -= 2;

    return c / 2 * (t * t * t + 2);
};

smooth['QuartIn'] = function(t, c, d)
{
    t /= d;

    return c * t * t * t * t;
};

smooth['QuartOut'] = function(t, c, d)
{
    t /= d;
    t--;

    return -c * (t * t * t * t - 1);
};

smooth['QuartInOut'] = function(t, c, d)
{
    t /= d / 2;

    if(t < 1)
    {
        return c / 2 * t * t * t * t;
    }

    t -= 2;

    return -c / 2 * (t * t * t * t - 2);
};

smooth['QuintIn'] = function(t, c, d)
{
    t /= d;

    return c * t * t * t * t * t;
};

smooth['QuintOut'] = function(t, c, d)
{
    t /= d;
    t--;

    return c * (t * t * t * t * t + 1);
};

smooth['QuintInOut'] = function(t, c, d)
{
    t /= d / 2;

    if(t < 1)
    {
        return c / 2 * t * t * t * t * t;
    }

    t -= 2;

    return c / 2 * (t * t * t * t * t + 2);
};

smooth['SineIn'] = function(t, c, d)
{
    return -c * Math.cos(t / d * (Math.PI / 2)) + c;
};

smooth['SineOut'] = function(t, c, d)
{
    return c * Math.sin(t / d * (Math.PI / 2));
};

smooth['SineInOut'] = function(t, c, d)
{
    return -c / 2 * (Math.cos(Math.PI * t/d) - 1);
};

smooth['ExpoIn'] = function(t, c, d)
{
    return c * Math.pow(2, 10 * (t / d - 1));
};

smooth['ExpoOut'] = function(t, c, d)
{
    return c * (-Math.pow(2, -10 * t/d) + 1);
};

smooth['ExpoInOut'] = function(t, c, d)
{
    t /= d / 2;

    if(t < 1)
    {
        return c / 2 * Math.pow(2, 10 * (t - 1));
    }

    t--;

    return c / 2 * (-Math.pow(2, -10 * t) + 2);
};

smooth['CircIn'] = function(t, c, d)
{
    t /= d;

    return -c * (Math.sqrt(1 - t * t) - 1);
};

smooth['CircOut'] = function(t, c, d)
{
    t /= d;
    t--;

    return c * Math.sqrt(1 - t * t);
};

smooth['CircInOut'] = function(t, c, d)
{
    t /= d / 2;

    if(t < 1)
    {
        return -c / 2 * (Math.sqrt(1 - t * t) - 1);
    }

    t -= 2;

    return c / 2 * (Math.sqrt(1 - t * t) + 1);
};
