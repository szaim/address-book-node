[1]:https://html5boilerplate.com/
[2]:http://getskeleton.com/
[3]:https://necolas.github.io/normalize.css/
[4]:https://modernizr.com/
[5]:https://www.srihash.org/
[6]:https://www.w3.org/TR/wai-aria/roles
[7]:http://mcdlr.com/wai-aria-cheatsheet/
[8]:https://www.w3.org/WAI/WCAG20/quickref/
[9]:https://www.smashingmagazine.com/2009/04/progressive-enhancement-what-it-is-and-how-to-use-it/
[10]:https://github.com/jpdevries/webguidelines/blob/master/README.md

<h2 id="title">A Frontend Template With jQuery</h2>

This repo is my current go-to frontend template for progressively enhanced projects. I liked the ideas presented in the excellent [HTML5 Boilerplate][1], but found that it had more than I needed, or implemented features in a different way than I wanted to.

<h3 id="included-assets">What's in it?</h3>

I've borrowed some things from the HTML5 Boilerplate. No point in fixing what ain't broke, etc:

<ul>
    <li><code>&lt;!--[if]--&gt;</code> tags for supporting older versions of IE.</li>
    <li> <a href="https://necolas.github.io/normalize.css/">Normalize</a> for consistent CSS behavior across browsers.</li>
    <li> <a href="https://modernizr.com/">Modernizr</a> for progressive enhancement.</li>
    <li>jQuery from a CDN with a local fallback.</li>
    <li>Code to hook up Google Analytics if necessary.</li>
</ul>

But I have also made some different choices to suit my needs and preferences.

<ul>
    <li><a href="http://getskeleton.com/">Skeleton.css</a> for lightweight responsiveness.</li>
    <li><a href="https://www.srihash.org/">Subresource Integrity</a> on the jQuery CDN link for better security.</li>
    <li><a href="https://www.w3.org/TR/wai-aria/roles">Aria <code>role</code> attributes</a> on the HTML5 section tags for better screen-reader compatibility.</li>
</ul>

If I don't have the time or the need to roll my own CSS grid system, I find that CSS is more than enough. It is not overly opinionated about how you should organize your HTML, and it does not offer so many features as to be dizzying to new users; nor does it bring a ton of weight to small projects.

<h3 id="how-to-use">How do do I use it?</h3>

Easy: clone it and start coding! I kept this template intentionally simple so that I (and you, if you use it!) can clone it, change it as you need, and use it at the front of a project quickly, although you <i>could</i> use this template with other tools if you wanted to. For instance, I use the Atom and the [sass-autocompile](https://atom.io/packages/sass-autocompile) plugin to render Sass to css without the hassle of a build process.

<h3 id="additional-considerations">Some additional considerations:</h3>


You do not have to follow the philosophy of [progressive enhancement][9], but you should try. I built this template to remind myself to serve HTML5 first wherever possible, because not all users will have good connections or access to JavaScript at all!

Try to keep accessibility in mind! The `role` attributes you see in this repo are only the beginning. Check out this [ARIA cheat-sheet][7] if you are unfamiliar with ARIA and refer to the [WCAG guidelines][8] to learn other steps you should take toward accessible web architecture. These [broader guidelines][10]&#42; might be helpful if you are interested in the philosophy of accessibility as much as the how-to.

If you spot any errors in this project or have any suggestions for a better template, feel free to <b>[open an issue](https://github.com/dengeist/template/issues)</b> or <b>[contact me](mailto:eliasjmason@gmail.com)</b>! Your feedback is always welcome!

<hr>
<small>
    <p id="disclaimer">	&#42; full disclosure: I am a co-author of these guidelines.</p>
</small>
