/**
 * Animable.js
 *
 * https://github.com/JWhile/Animable.js
 *
 * version 1.4.1
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
    n--;

    return n * n * n + 1;
};

smooth['CubicInOut'] = function(n)
{
    n *= 2;

    if(n < 1)
    {
        return 1 / 2 * n * n * n;
    }

    n -= 2;

    return 1 / 2 * (n * n * n + 2);
};

smooth['QuartIn'] = function(n)
{
    return n * n * n * n;
};

smooth['QuartOut'] = function(n)
{
    n--;

    return -1 * (n * n * n * n - 1);
};

smooth['QuartInOut'] = function(n)
{
    n *= 2;

    if(n < 1)
    {
        return 1 / 2 * n * n * n * n;
    }

    n -= 2;

    return -1 / 2 * (n * n * n * n - 2);
};

smooth['QuintIn'] = function(n)
{
    return n * n * n * n * n;
};

smooth['QuintOut'] = function(n)
{
    n--;

    return n * n * n * n * n + 1;
};

smooth['QuintInOut'] = function(n)
{
    n *= 2;

    if(n < 1)
    {
        return 1 / 2 * n * n * n * n * n;
    }

    n -= 2;

    return 1 / 2 * (n * n * n * n * n + 2);
};

smooth['SineIn'] = function(n)
{
    return -1 * Math.cos(n * (Math.PI / 2)) + 1;
};

smooth['SineOut'] = function(n)
{
    return Math.sin(n * (Math.PI / 2));
};

smooth['SineInOut'] = function(n)
{
    return -1 / 2 * (Math.cos(Math.PI * n) - 1);
};

smooth['ExpoIn'] = function(n)
{
    return Math.pow(2, 10 * (n - 1));
};

smooth['ExpoOut'] = function(n)
{
    return -Math.pow(2, -10 * n) + 1;
};

smooth['ExpoInOut'] = function(n)
{
    n *= 2;

    if(n < 1)
    {
        return 1 / 2 * Math.pow(2, 10 * (n - 1));
    }

    n--;

    return 1 / 2 * (-Math.pow(2, -10 * n) + 2);
};

smooth['CircIn'] = function(n)
{
    return -1 * (Math.sqrt(1 - n * n) - 1);
};

smooth['CircOut'] = function(n)
{
    n--;

    return Math.sqrt(1 - n * n);
};

smooth['CircInOut'] = function(n)
{
    n *= 2;

    if(n < 1)
    {
        return -1 / 2 * (Math.sqrt(1 - n * n) - 1);
    }

    n -= 2;

    return 1 / 2 * (Math.sqrt(1 - n * n) + 1);
};
