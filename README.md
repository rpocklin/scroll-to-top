## CSS 3 - Scroll To Top

Based of initial work done by [mahioo](http://labs.mitgux.com/smooth-scroll-to-top-using-css3-animations)

A scrolling using only CSS3 animations, the only reference to `window` is to calculate the current vertical offset of the screen.

It manipulates the `margin-top` and CSS3 transitions to allow complete control over the scroll function and duration via CSS.  It also has CSS3 fade-in and fade-out for the scroll up image (chevron), which appears in the bottom right corner.  This is optional (you could show it always) but is included since it's makes it slicker and more complete.

In order to detect whether to show the scroll image, it uses a separate function which binds on `$(window).scroll` which is the same as most other plugins which do the same.  If you don't want this, just make it always visible by adding the `visible` class to the `#scroll-to-top` anchor.  

If you do want to use this functionality but are concerned about performance, shim a `debounce` function in between `$(window).scroll` and the target function, i've found a value of around `50` is quite usable and has the added feature of only appearing once the user slows or stops scrolling for the first time.

### Comparison

As part of a speed comparison I did, I found it very hard to use any benchmarking to reflect the quality/smoothness
of the animations in different browsers/hardware, so I leave it up to you to simulate.

Here is a list of the scroll plugins used in the [demo](demo.html)
1.  [Kryogenix](http://kryogenix.org/code/browser/smoothscroll)
2.  [TweenLite - ScrollToPlugin](http://www.greensock.com/tweenlite/)
3.  [ScrollTo](http://www.dconnell.co.uk/blog/index.php/2012/03/12/scroll-to-any-element-using-jquery/)
4.  [ScrollUp](https://github.com/markgoodyear/scrollup)
5.  This one.&nbsp;&nbsp;&nbsp;Obviously.

### [Demo](demo.html)

On the demo page, you can adjust the artifical `load` created to simulate different CPU intensity
levels, which are bound to a simple math function to keep the CPU busy.  Some browsers/hardware handle this better
than others, so adjust it using the **More load** / **Less load** links at the top,
or just hack the URL parameter `load=?`
where _higher = more load_.

### Notes
AFAIK everything included in here is open source, if you have any issues please [contact me](mailto:rpocklin@gmail.com).