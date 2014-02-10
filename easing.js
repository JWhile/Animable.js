/**
 * Animable.js
 *
 * https://github.com/JWhile/Animable.js
 *
 * version 1.5.1
 *
 * easing.js
 *
 * Les smooth effects qui suivent sont basés sur les Easing Functions de Robert Penner
 * http://robertpenner.com/easing/
 */

smooth['CubicIn'] = function(n)
{
    return n * n * n;
};

smooth['CubicOut'] = function(n)
{
    return --n * n * n + 1;
};

smooth['CubicInOut'] = function(n)
{
    if((n *= 2) < 1)
    {
        return 0.5 * n * n * n;
    }

    return 0.5 * ((n -= 2) * n * n + 2);
};

smooth['QuartIn'] = function(n)
{
    return n * n * n * n;
};

smooth['QuartOut'] = function(n)
{
    return -(--n * n * n * n - 1);
};

smooth['QuartInOut'] = function(n)
{
    if((n *= 2) < 1)
    {
        return 0.5 * n * n * n * n;
    }

    return -0.5 * ((n -= 2) * n * n * n - 2);
};

smooth['QuintIn'] = function(n)
{
    return n * n * n * n * n;
};

smooth['QuintOut'] = function(n)
{
    return --n * n * n * n * n + 1;
};

smooth['QuintInOut'] = function(n)
{
    if((n *= 2) < 1)
    {
        return 0.5 * n * n * n * n * n;
    }

    return 0.5 * ((n -= 2) * n * n * n * n + 2);
};

smooth['SineIn'] = function(n)
{
    return 1 - Math.cos(Math.PI / 2 * n);
};

smooth['SineOut'] = function(n)
{
    return Math.sin(Math.PI / 2 * n);
};

smooth['SineInOut'] = function(n)
{
    return -0.5 * (Math.cos(Math.PI * n) - 1);
};

smooth['ExpoIn'] = function(n)
{
    return Math.pow(2, 10 * (n - 1));
};

smooth['ExpoOut'] = function(n)
{
    return 1 - Math.pow(2, -10 * n);
};

smooth['ExpoInOut'] = function(n)
{
    if((n *= 2) < 1)
    {
        return 0.5 * Math.pow(2, 10 * (n - 1));
    }

    return 0.5 * (-Math.pow(2, --n * -10) + 2);
};

smooth['CircIn'] = function(n)
{
    return 1 - Math.sqrt(1 - n * n);
};

smooth['CircOut'] = function(n)
{
    return Math.sqrt(1 - (--n) * n);
};

smooth['CircInOut'] = function(n)
{
    if((n *= 2) < 1)
    {
        return -0.5 * (Math.sqrt(1 - n * n) - 1);
    }

    return 0.5 * (Math.sqrt(1 - (n -= 2) * n) + 1);
};
