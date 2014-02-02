# Animable

_v1.0.0_

Make Builder Animable !

### Exemple

[Exemple](http://jwhile.github.io/#Animable)

### Références

##### function anime(update, from, to, time)

Exécute `update` a 60 fps en lui transmettant la valeur actuelle en 1er paramètre.

* `update` _function_ Fonction exécuté à chaque frame.
* `from` _Number_ Nombre de départ.
* `to` _Number_ Nombre de fin.
* `time` _int_ Durée de l'animation.

##### Builder::anime(property, to, time, callback)

Anime la `property` CSS de l'élément.
Détecte automatiquement le valeur de départ et l'unité.
`callback` est exécuté une fois l'animation terminée.

* `property` _String_ Propriété CSS.
* `to` _int_ Valeur de fin (sans l'unité).
* `time` _int_ Durée de l'animation.
* `callback` _function_ Fonction exécuté à la fin de l'animation. _(Optionnel)_

### License

> The MIT License (MIT)
> 
> Copyright (c) 2014 juloo
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of
> this software and associated documentation files (the "Software"), to deal in
> the Software without restriction, including without limitation the rights to
> use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
> the Software, and to permit persons to whom the Software is furnished to do so,
> subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
> FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
> COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
> IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
> CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
