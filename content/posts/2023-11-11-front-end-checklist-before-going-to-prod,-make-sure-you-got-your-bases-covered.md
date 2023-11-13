---
title: "Front-end Checklist: Before Going to Prod, Make Sure You Got Your Bases Covered"
description: ""
tags: []
category:
    - web
publishedAt: 2023-11-12T03:48:12.163Z
updatedAt: 2023-11-12T03:48:12.711Z
image: ""
author: ""
isPublished: false
type: Post
---
[github.com](https://github.com/thedaviddias/Front-End-Checklist)

# thedaviddias/Front-End-Checklist: 🗂 The perfect Front-End Checklist for modern websites and meticulous developers

angleKH

18–22 minutes

----------

##   
[![Front-End Checklist](https://raw.githubusercontent.com/thedaviddias/Front-End-Checklist/master/data/images/logo-front-end-checklist.jpg)](https://raw.githubusercontent.com/thedaviddias/Front-End-Checklist/master/data/images/logo-front-end-checklist.jpg)

Front-End Checklist

----------

### ![rotating_light](https://github.githubassets.com/images/icons/emoji/unicode/1f6a8.png) Currently working on a V2 of frontendchecklist.io,  
feel free to [discuss](https://github.com/thedaviddias/Front-End-Checklist/discussions) any feature you would like to see in the next version

----------

#### The Front-End Checklist is an exhaustive list of all elements you need to have / to test before launching your website / HTML page to production.

 [![PRs Welcome](https://camo.githubusercontent.com/0ff11ed110cfa69f703ef0dcca3cee6141c0a8ef465e8237221ae245de3deb3d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5052732d77656c636f6d652d627269676874677265656e2e7376673f7374796c653d666c61742d737175617265)](http://makeapullrequest.com/) [ ![Contributors](https://camo.githubusercontent.com/4aa098f8dd3ba3a7ef5d3cdf8a446144cc7c939e50ded629055e56c8a33deba1/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f636f6e7472696275746f72732f7468656461766964646961732f46726f6e742d456e642d436865636b6c6973742e7376673f7374796c653d666c61742d737175617265) ](https://github.com/thedaviddias/Front-End-Checklist/graphs/contributors) [ ![Front‑End_Checklist followed](https://camo.githubusercontent.com/8072e14bbbee2ad3fa40a5b99d029bb33942dc45f2e596225ffee15f48100131/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f46726f6e74e28091456e645f436865636b6c6973742d666f6c6c6f7765642d627269676874677265656e2e7376673f7374796c653d666c61742d737175617265) ](https://github.com/thedaviddias/Front-End-Checklist/) [![CC0](https://camo.githubusercontent.com/7de1b7fd70687fa6d07e273737f0465ef27971f193842c2d2c4a4ac01b3946bf/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d4343302d677265656e2e7376673f7374796c653d666c61742d737175617265)](https://creativecommons.org/publicdomain/zero/1.0/) 

How To Use • Contributing • [Website](https://frontendchecklist.io/) • [Product Hunt](https://www.producthunt.com/posts/front-end-checklist)

Other Checklists:  
 [![video_game](https://github.githubassets.com/images/icons/emoji/unicode/1f3ae.png) Front-End Performance Checklist](https://github.com/thedaviddias/Front-End-Performance-Checklist#---------front-end-performance-checklist-) • [![gem](https://github.githubassets.com/images/icons/emoji/unicode/1f48e.png) Front-End Design Checklist](https://github.com/thedaviddias/Front-End-Design-Checklist#front-end-design-checklist)

It is based on Front-End developers' years of experience, with the additions coming from some other open-source checklists.

----------

## How to use?

All items in the **Front-End Checklist** are required for the majority of the projects, but some elements can be omitted or are not essential (in the case of an administration web app, you may not need RSS feed for example). We choose to use 3 levels of flexibility:

Some resources possess an emoticon to help you understand which type of content / help you may find on the checklist:

> You can contribute to the _**Front-End Checklist App**_ reading the [CONTRIBUTING.md file](https://github.com/thedaviddias/Front-End-Checklist/blob/master/CONTRIBUTING.md) which explains everything about the project.

----------

## Head

> **Notes:** You can find [a list of everything](https://github.com/joshbuchea/HEAD) that could be found in the `<head>` of an HTML document.

### Meta tag

-   **Doctype:** [![High](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/high.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/high.svg) The Doctype is HTML5 and is at the top of all your HTML pages.

<!doctype html> <!-- HTML5 -->

> -   ![book](https://github.githubassets.com/images/icons/emoji/unicode/1f4d6.png) [Determining the character encoding - HTML5 W3C](https://www.w3.org/TR/html5/syntax.html#determining-the-character-encoding)

_The next 2 meta tags (Charset and Viewport) need to come first in the head._

-   **Charset:** [![High](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/high.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/high.svg) The charset (UTF-8) is declared correctly.

<!-- Set character encoding for the document -->
<meta charset="utf-8">

-   **Viewport:** [![High](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/high.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/high.svg) The viewport is declared correctly.

<!-- Viewport for responsive web design -->
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">

-   **Title:** [![High](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/high.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/high.svg) A title is used on all pages (SEO: Google calculates the pixel width of the characters used in the title, and it cuts off between 472 and 482 pixels. The average character limit would be around 55-characters).

<!-- Document Title -->
<title>Page Title less than 55 characters</title>

-   **Description:** [![High](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/high.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/high.svg) A meta description is provided, it is unique and doesn't possess more than 150 characters.

<!-- Meta Description -->
<meta name="description" content="Description of the page less than 150 characters">

> -   ![book](https://github.githubassets.com/images/icons/emoji/unicode/1f4d6.png) [Meta Description - HTML - MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#Adding_an_author_and_description)

-   **Favicons:** [![Medium](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/medium.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/medium.svg) Each favicon has been created and displays correctly. If you have only a `favicon.ico`, put it at the root of your site. Normally you won't need to use any markup. However, it's still good practice to link to it using the example below. Today, **PNG format is recommended** over `.ico` format (dimensions: 32x32px).

<!-- Standard favicon -->
<link rel="icon" type="image/x-icon" href="https://example.com/favicon.ico">
<!-- Recommended favicon format -->
<link rel="icon" type="image/png" href="https://example.com/favicon.png">

-   **Apple Web App Meta:** [![Low](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/low.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/low.svg) Apple meta-tags are present.

<!-- Apple Touch Icon (at least 200x200px) -->
<link rel="apple-touch-icon" href="/custom-icon.png">

<!-- To run the web application in full-screen -->
<meta name="apple-mobile-web-app-capable" content="yes">

<!-- Status Bar Style (see Supported Meta Tags below for available values) -->
<!-- Has no effect unless you have the previous meta tag -->
<meta name="apple-mobile-web-app-status-bar-style" content="black">

-   **Windows Tiles:** [![Low](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/low.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/low.svg) Windows tiles are present and linked.

<!-- Microsoft Tiles -->
<meta name="msapplication-config" content="browserconfig.xml" />

Minimum required xml markup for the `browserconfig.xml` file is as follows:

<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
   <msapplication>
     <tile>
        <square70x70logo src="small.png"/>
        <square150x150logo src="medium.png"/>
        <wide310x150logo src="wide.png"/>
        <square310x310logo src="large.png"/>
     </tile>
   </msapplication>
</browserconfig>

> -   ![book](https://github.githubassets.com/images/icons/emoji/unicode/1f4d6.png) [Browser configuration schema reference](https://msdn.microsoft.com/en-us/library/dn320426(v=vs.85).aspx)

-   **Canonical:** [![Medium](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/medium.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/medium.svg) Use `rel="canonical"` to avoid duplicate content.

<!-- Helps prevent duplicate content issues -->
<link rel="canonical" href="http://example.com/2017/09/a-new-article-to-read.html">

### HTML tags

-   **Language attribute:** [![High](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/high.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/high.svg) The `lang` attribute of your website is specified and related to the language of the current page.

-   **Direction attribute:** [![Medium](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/medium.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/medium.svg) The direction of lecture is specified on the html tag (It can be used on another HTML tag).

> -   ![book](https://github.githubassets.com/images/icons/emoji/unicode/1f4d6.png) [dir - HTML - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir)

-   **Alternate language:** [![Low](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/low.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/low.svg) The language tag of your website is specified and related to the language of the current page.

<link rel="alternate" href="https://es.example.com/" hreflang="es">

-   **x-default:** [![Low](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/low.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/low.svg) The language tag of your website for international landing pages.

<link rel="alternate" href="https://example.com/" hreflang="x-default" />

> -   ![book](https://github.githubassets.com/images/icons/emoji/unicode/1f4d6.png) [x-default - Google](https://webmasters.googleblog.com/2013/04/x-default-hreflang-for-international-pages.html)

-   **Conditional comments:** [![Low](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/low.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/low.svg) Conditional comments are present for IE if needed.

> -   ![book](https://github.githubassets.com/images/icons/emoji/unicode/1f4d6.png) [About conditional comments (Internet Explorer) - MSDN - Microsoft](https://msdn.microsoft.com/en-us/library/ms537512(v=vs.85).aspx)

-   **RSS feed:** [![Low](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/low.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/low.svg) If your project is a blog or has articles, an RSS link was provided.
    
-   **CSS Critical:** [![Medium](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/medium.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/medium.svg) The CSS critical (or "above the fold") collects all the CSS used to render the visible portion of the page. It is embedded before your principal CSS call and between `<style></style>` in a single line (minified).
    

> -   ![hammer_and_wrench](https://github.githubassets.com/images/icons/emoji/unicode/1f6e0.png) [Critical by Addy Osmani on GitHub](https://github.com/addyosmani/critical) automates this.

-   **CSS order:** [![High](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/high.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/high.svg) All CSS files are loaded before any JavaScript files in the `<head>`. (Except the case where sometimes JS files are loaded asynchronously on top of your page).

### Social meta

Visualize and generate automatically our social meta tags with [Meta Tags](https://metatags.io/)

_**Facebook OG**_ and _**Twitter Cards**_ are, for any website, highly recommended. The other social media tags can be considered if you target a particular presence on those and want to ensure the display.

-   **Facebook Open Graph:** [![Low](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/low.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/low.svg) All Facebook Open Graph (OG) are tested and no one is missing or with false information. Images need to be at least 600 x 315 pixels, although 1200 x 630 pixels is recommended.

> **Notes:** Using `og:image:width` and `og:image:height` will specify the image dimensions to the crawler so that it can render the image immediately without having to asynchronously download and process it.

<meta property="og:type" content="website">
<meta property="og:url" content="https://example.com/page.html">
<meta property="og:title" content="Content Title">
<meta property="og:image" content="https://example.com/image.jpg">
<meta property="og:description" content="Description Here">
<meta property="og:site_name" content="Site Name">
<meta property="og:locale" content="en_US">
<!-- Next tags are optional but recommended -->
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">

-   **Twitter Card:** [![Low](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/low.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/low.svg)

<meta name="twitter:card" content="summary">
<meta name="twitter:site" content="@site_account">
<meta name="twitter:creator" content="@individual_account">
<meta name="twitter:url" content="https://example.com/page.html">
<meta name="twitter:title" content="Content Title">
<meta name="twitter:description" content="Content description less than 200 characters">
<meta name="twitter:image" content="https://example.com/image.jpg">

 **![arrow_up](https://github.githubassets.com/images/icons/emoji/unicode/2b06.png) back to top**

----------

## HTML

### Best practices

-   **HTML5 Semantic Elements:** [![High](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/high.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/high.svg) HTML5 Semantic Elements are used appropriately (header, section, footer, main...).

> -   ![book](https://github.githubassets.com/images/icons/emoji/unicode/1f4d6.png) [HTML Reference](http://htmlreference.io/)

-   **Error pages:** [![High](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/high.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/high.svg) Error 404 page and 5xx exist. Remember that the 5xx error pages need to have their CSS integrated (no external call on the current server).
    
-   **Noopener:** [![Medium](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/medium.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/medium.svg) In case you are using external links with `target="_blank"`, your link should have a `rel="noopener"` attribute to prevent tab nabbing. If you need to support older versions of Firefox, use `rel="noopener noreferrer"`.
    

> -   ![book](https://github.githubassets.com/images/icons/emoji/unicode/1f4d6.png) [About rel=noopener](https://mathiasbynens.github.io/rel-noopener/)

-   **Clean up comments:** [![Low](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/low.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/low.svg) Unnecessary code needs to be removed before sending the page to production.

### HTML testing

-   **W3C compliant:** [![High](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/high.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/high.svg) All pages need to be tested with the W3C validator to identify possible issues in the HTML code.

> -   ![hammer_and_wrench](https://github.githubassets.com/images/icons/emoji/unicode/1f6e0.png) [W3C validator](https://validator.w3.org/)

-   **HTML Lint:** [![High](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/high.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/high.svg) I use tools to help me analyze any issues I could have on my HTML code.

> -   ![hammer_and_wrench](https://github.githubassets.com/images/icons/emoji/unicode/1f6e0.png) [Dirty markup](https://www.10bestdesign.com/dirtymarkup/)

> -   ![hammer_and_wrench](https://github.githubassets.com/images/icons/emoji/unicode/1f6e0.png) [webhint](https://webhint.io/)

-   **Link checker:** [![High](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/high.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/high.svg) There are no broken links in my page, verify that you don't have any 404 error.

> -   ![hammer_and_wrench](https://github.githubassets.com/images/icons/emoji/unicode/1f6e0.png) [W3C Link Checker](https://validator.w3.org/checklink)

-   **Adblockers test:** [![Medium](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/medium.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/medium.svg) Your website shows your content correctly with adblockers enabled (You can provide a message encouraging people to disable their adblocker).

> -   ![book](https://github.githubassets.com/images/icons/emoji/unicode/1f4d6.png) [Use AdBlocking in your Dev Environment](https://andreicioara.com/use-adblocking-in-your-dev-environment-48db500d9b86)

 **![arrow_up](https://github.githubassets.com/images/icons/emoji/unicode/2b06.png) back to top**

----------

## Webfonts

> **Notes:** Using web fonts may cause Flash Of Unstyled Text/Flash Of Invisible Text - consider having fallback fonts and/or utilizing web font loaders to control behavior.
> 
> -   ![book](https://github.githubassets.com/images/icons/emoji/unicode/1f4d6.png) [Google Technical considerations about webfonts](https://developers.google.com/fonts/docs/technical_considerations)

-   **Webfont format:** [![High](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/high.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/high.svg) WOFF, WOFF2 and TTF are supported by all modern browsers.

-   **Webfont size:** [![High](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/high.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/high.svg) Webfont sizes don't exceed 2 MB (all variants included).
    
-   **Webfont loader:** [![Low](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/low.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/low.svg) Control loading behavior with a webfont loader
    

> -   ![hammer_and_wrench](https://github.githubassets.com/images/icons/emoji/unicode/1f6e0.png) [Typekit Web Font Loader](https://github.com/typekit/webfontloader)

 **![arrow_up](https://github.githubassets.com/images/icons/emoji/unicode/2b06.png) back to top**

----------

## CSS

> **Notes:** Take a look at [CSS guidelines](https://cssguidelin.es/) and [Sass Guidelines](https://sass-guidelin.es/) followed by most Front-End developers. If you have a doubt about CSS properties, you can visit [CSS Reference](http://cssreference.io/). There is also a short [Code Guide](http://codeguide.co/) for consistency.

-   **JS prefix:** [![Low](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/low.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/low.svg) All classes (or id- used in JavaScript files) begin with **js-** and are not styled into the CSS files.

<div id="js-slider" class="my-slider">
<!-- Or -->
<div id="id-used-by-cms" class="js-slider my-slider">

> -   ![hammer_and_wrench](https://github.githubassets.com/images/icons/emoji/unicode/1f6e0.png) [Autoprefixer CSS online](https://autoprefixer.github.io/)

### Performance

-   **Unused CSS:** [![Low](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/low.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/low.svg) Remove unused CSS.

### CSS testing

-   **Stylelint:** [![High](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/high.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/high.svg) All CSS or SCSS files are without any errors.

-   **Responsive web design:** [![High](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/high.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/high.svg) All pages were tested at the following breakpoints: 320px, 768px, 1024px (can be more / different according to your analytics). **Responsive Checker -**

-   **CSS Validator:** [![Medium](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/medium.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/medium.svg) The CSS was tested and pertinent errors were corrected.

> -   ![hammer_and_wrench](https://github.githubassets.com/images/icons/emoji/unicode/1f6e0.png) [CSS Validator](https://jigsaw.w3.org/css-validator/)

-   **Desktop Browsers:** [![High](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/high.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/high.svg) All pages were tested on all current desktop browsers (Safari, Firefox, Chrome, Internet Explorer, EDGE...).
    
-   **Mobile Browsers:** [![High](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/high.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/high.svg) All pages were tested on all current mobile browsers (Native browser, Chrome, Safari...).
    
-   **OS:** [![High](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/high.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/high.svg) All pages were tested on all current OS (Windows, Android, iOS, Mac...).
    
-   **Design fidelity:** [![Low](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/low.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/low.svg) Depending on the project and the quality of the creatives, you may be asked to be close to the design. You can use some tools to compare creatives with your code implementation and ensure consistency.
    

> [Pixel Perfect - Chrome Extension](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi?hl=en)

-   **Reading direction:** [![High](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/high.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/high.svg) All pages need to be tested for LTR and RTL languages if they need to be supported.

 **![arrow_up](https://github.githubassets.com/images/icons/emoji/unicode/2b06.png) back to top**

----------

## Images

> **Notes:** For a complete understanding of image optimization, check the free ebook **[Essential Image Optimization](https://images.guide/)** from Addy Osmani.

### Best practices

-   **Optimization:** [![High](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/high.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/high.svg) All images are optimized to be rendered in the browser. WebP format could be used for critical pages (like Homepage).

-   **Picture/Srcset:** [![Medium](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/medium.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/medium.svg) You use picture/srcset to provide the most appropriate image for the current viewport of the user.

> -   ![book](https://github.githubassets.com/images/icons/emoji/unicode/1f4d6.png) [How to Build Responsive Images with srcset](https://www.sitepoint.com/how-to-build-responsive-images-with-srcset/)

> -   ![book](https://github.githubassets.com/images/icons/emoji/unicode/1f4d6.png) [Alt-texts: The Ultimate Guide](https://axesslab.com/alt-texts/)

-   **Lazy loading:** [![Medium](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/medium.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/medium.svg) Images are lazyloaded (A noscript fallback is always provided).

> -   ![hammer_and_wrench](https://github.githubassets.com/images/icons/emoji/unicode/1f6e0.png) [Native lazy loading polyfill](https://github.com/mfranzke/loading-attribute-polyfill/)

 **![arrow_up](https://github.githubassets.com/images/icons/emoji/unicode/2b06.png) back to top**

----------

## JavaScript

### Best practices

> -   ![book](https://github.githubassets.com/images/icons/emoji/unicode/1f4d6.png) [Minify Resources (HTML, CSS, and JavaScript)](https://developers.google.com/speed/docs/insights/MinifyResources)

-   **JavaScript security:** [![High](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/high.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/high.svg)

> -   ![book](https://github.githubassets.com/images/icons/emoji/unicode/1f4d6.png) [Guidelines for Developing Secure Applications Utilizing JavaScript](https://www.owasp.org/index.php/DOM_based_XSS_Prevention_Cheat_Sheet#Guidelines_for_Developing_Secure_Applications_Utilizing_JavaScript)

-   **`noscript` tag:** [![Medium](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/medium.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/medium.svg) Use `<noscript>` tag in the HTML body if a script type on the page is unsupported or if scripting is currently turned off in the browser. This will be helpful in client-side rendering heavy apps such as React.js, see [examples](https://webdesign.tutsplus.com/tutorials/quick-tip-dont-forget-the-noscript-element--cms-25498).

<noscript>
  You need to enable JavaScript to run this app.
</noscript>

-   **Non-blocking:** [![Medium](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/medium.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/medium.svg) JavaScript files are loaded asynchronously using `async` or deferred using `defer` attribute.

> -   ![book](https://github.githubassets.com/images/icons/emoji/unicode/1f4d6.png) [Remove Render-Blocking JavaScript](https://developers.google.com/speed/docs/insights/BlockingJS)

-   **Optimized and updated JS libraries:** [![Medium](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/medium.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/medium.svg) All JavaScript libraries used in your project are necessary (prefer Vanilla Javascript for simple functionalities), updated to their latest version and don't overwhelm your JavaScript with unnecessary methods.

-   **Modernizr:** [![Low](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/low.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/low.svg) If you need to target some specific features you can use a custom Modernizr to add classes in your `<html>` tag.

> -   ![hammer_and_wrench](https://github.githubassets.com/images/icons/emoji/unicode/1f6e0.png) [Customize your Modernizr](https://modernizr.com/download?setclasses)

### JavaScript testing

-   **ESLint:** [![High](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/high.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/high.svg) No errors are flagged by ESLint (based on your configuration or standards rules).

> -   ![book](https://github.githubassets.com/images/icons/emoji/unicode/1f4d6.png) [ESLint - The pluggable linting utility for JavaScript and JSX](https://eslint.org/)

 **![arrow_up](https://github.githubassets.com/images/icons/emoji/unicode/2b06.png) back to top**

----------

## Security

### Scan and check your web site

> -   [securityheaders.io](https://securityheaders.io/)
> -   [Observatory by Mozilla](https://observatory.mozilla.org/)

### Best practices

-   **HTTPS:** [![High](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/high.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/high.svg) HTTPS is used on every page and for all external content (plugins, images...).

-   **HTTP Strict Transport Security (HSTS):** [![Medium](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/medium.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/medium.svg) The HTTP header is set to 'Strict-Transport-Security'.

-   **Cross Site Request Forgery (CSRF):** [![High](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/high.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/high.svg) You ensure that requests made to your server-side are legitimate and originate from your website / app to prevent CSRF attacks.

> -   ![book](https://github.githubassets.com/images/icons/emoji/unicode/1f4d6.png) [Cross-Site Request Forgery (CSRF) Prevention Cheat Sheet - OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)

-   **Cross Site Scripting (XSS):** [![High](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/high.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/high.svg) Your page or website is free from XSS possible issues.

-   **Content Type Options:** [![Medium](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/medium.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/medium.svg) Prevents Google Chrome and Internet Explorer from trying to mime-sniff the content-type of a response away from the one being declared by the server.

> -   ![book](https://github.githubassets.com/images/icons/emoji/unicode/1f4d6.png) [X-Content-Type-Options - Scott Helme](https://scotthelme.co.uk/hardening-your-http-response-headers/#x-content-type-options)

-   **X-Frame-Options (XFO):** [![Medium](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/medium.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/medium.svg) Protects your visitors against clickjacking attacks.

-   **Content Security Policy:** [![Medium](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/medium.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/medium.svg) Defines how content is loaded on your site and from where it is permitted to be loaded. Can also be used to protect against clickjacking attacks.

 **![arrow_up](https://github.githubassets.com/images/icons/emoji/unicode/2b06.png) back to top**

----------

## Performance

### Best practices

-   **Goals to achieve:** [![Medium](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/medium.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/medium.svg) Your pages should reach these goals:
    -   First Meaningful Paint under 1 second
    -   Time To Interactive under 5 seconds for the "average" configuration (a $200 Android on a slow 3G network with 400ms RTT and 400kbps transfer speed) and under 2 seconds for repeat visits
    -   Critical file size under 170Kb gzipped

-   **Minified HTML:** [![Medium](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/medium.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/medium.svg) Your HTML is minified.
    
-   **Lazy loading:** [![Medium](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/medium.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/medium.svg) Images, scripts and CSS need to be lazy loaded to improve the response time of the current page (See details in their respective sections).
    
-   **Cookie size:** [![Medium](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/medium.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/medium.svg) If you are using cookies be sure each cookie doesn't exceed 4096 bytes and your domain name doesn't have more than 20 cookies.
    

-   **Third party components:** [![Medium](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/medium.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/medium.svg) Third party iframes or components relying on external JS (like sharing buttons) are replaced by static components when possible, thus limiting calls to external APIs and keeping your user's activity private.

> -   ![hammer_and_wrench](https://github.githubassets.com/images/icons/emoji/unicode/1f6e0.png) [Simple sharing buttons generator](https://simplesharingbuttons.com/)

### Preparing upcoming requests

> -   ![book](https://github.githubassets.com/images/icons/emoji/unicode/1f4d6.png) [Explanation of the following techniques](https://css-tricks.com/prefetching-preloading-prebrowsing/)

-   **DNS resolution:** [![Low](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/low.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/low.svg) DNS of third-party services that may be needed are resolved in advance during idle time using `dns-prefetch`.

<link rel="dns-prefetch" href="https://example.com">

-   **Preconnection:** [![Low](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/low.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/low.svg) DNS lookup, TCP handshake and TLS negotiation with services that will be needed soon is done in advance during idle time using `preconnect`.

<link rel="preconnect" href="https://example.com">

-   **Prefetching:** [![Low](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/low.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/low.svg) Resources that will be needed soon (e.g. lazy loaded images) are requested in advance during idle time using `prefetch`.

<link rel="prefetch" href="image.png">

-   **Preloading:** [![Low](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/low.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/low.svg) Resources needed in the current page (e.g. scripts placed at the end of `<body>`) in advance using `preload`.

<link rel="preload" href="app.js">

> -   ![book](https://github.githubassets.com/images/icons/emoji/unicode/1f4d6.png) [Difference between prefetch and preload](https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf)

### Performance testing

-   **Google PageSpeed:** [![High](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/high.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/high.svg) All your pages were tested (not only the homepage) and have a score of at least 90/100.

 **![arrow_up](https://github.githubassets.com/images/icons/emoji/unicode/2b06.png) back to top**

----------

## Accessibility

> **Notes:** You can watch the playlist [A11ycasts with Rob Dodson](https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g) ![video_camera](https://github.githubassets.com/images/icons/emoji/unicode/1f4f9.png)

### Best practices

-   **Progressive enhancement:** [![Medium](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/medium.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/medium.svg) Major functionality like main navigation and search should work without JavaScript enabled.

> -   ![book](https://github.githubassets.com/images/icons/emoji/unicode/1f4d6.png) [Enable / Disable JavaScript in Chrome Developer Tools](https://www.youtube.com/watch?v=kBmvq2cE0D8)

-   **Color contrast:** [![Medium](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/medium.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/medium.svg) Color contrast should at least pass WCAG AA (AAA for mobile).

> -   ![hammer_and_wrench](https://github.githubassets.com/images/icons/emoji/unicode/1f6e0.png) [Contrast ratio](https://leaverou.github.io/contrast-ratio/)

#### Headings

> -   ![video_camera](https://github.githubassets.com/images/icons/emoji/unicode/1f4f9.png) [Why headings and landmarks are so important -- A11ycasts #18](https://www.youtube.com/watch?v=vAAzdi1xuUY&index=9&list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g)

### Semantics

-   **Specific HTML5 input types are used:** [![Medium](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/medium.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/medium.svg) This is especially important for mobile devices that show customized keypads and widgets for different types.

> -   ![book](https://github.githubassets.com/images/icons/emoji/unicode/1f4d6.png) [Mobile Input Types](http://mobileinputtypes.com/)

### Form

-   **Label:** [![High](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/high.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/high.svg) A label is associated with each input form element. In case a label can't be displayed, use `aria-label` instead.

> -   ![book](https://github.githubassets.com/images/icons/emoji/unicode/1f4d6.png) [Using the aria-label attribute - MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)

### Accessibility testing

-   **Accessibility standards testing:** [![High](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/high.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/high.svg) Use the WAVE tool to test if your page respects the accessibility standards.

> -   ![hammer_and_wrench](https://github.githubassets.com/images/icons/emoji/unicode/1f6e0.png) [Wave testing](http://wave.webaim.org/)

> -   ![video_camera](https://github.githubassets.com/images/icons/emoji/unicode/1f4f9.png) [Managing Focus - A11ycasts #22](https://www.youtube.com/watch?v=srLRSQg6Jgg&index=5&list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g)

 **![arrow_up](https://github.githubassets.com/images/icons/emoji/unicode/2b06.png) back to top**

----------

## SEO

-   **Google Analytics:** [![Low](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/low.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/low.svg) Google Analytics is installed and correctly configured.

-   **Search Console:** [![Low](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/low.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/low.svg) Search Console is installed and correctly configured. It is a free service offered by Google that helps you monitor, maintain, and troubleshoot your site's presence in Google Search results.

> -   ![hammer_and_wrench](https://github.githubassets.com/images/icons/emoji/unicode/1f6e0.png) [Search Console](https://search.google.com/search-console/about)

-   **Headings logic:** [![Medium](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/medium.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/medium.svg) Heading text helps to understand the content in the current page.

> -   ![hammer_and_wrench](https://github.githubassets.com/images/icons/emoji/unicode/1f6e0.png) [Tota11y, tab Headings](http://khan.github.io/tota11y/#Try-it)

-   **sitemap.xml:** [![High](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/high.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/high.svg) A sitemap.xml exists and was submitted to Google Search Console (previously Google Webmaster Tools).

> -   ![hammer_and_wrench](https://github.githubassets.com/images/icons/emoji/unicode/1f6e0.png) [Sitemap generator](https://websiteseochecker.com/html-sitemap-generator/)

-   **robots.txt:** [![High](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/high.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/high.svg) The robots.txt is not blocking webpages.

-   **Structured Data:** [![High](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/high.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/high.svg) Pages using structured data are tested and are without errors. Structured data helps crawlers understand the content in the current page.

-   **Sitemap HTML:** [![Medium](https://github.com/thedaviddias/Front-End-Checklist/raw/master/data/images/priority/medium.svg)](https://github.com/thedaviddias/Front-End-Checklist/blob/master/data/images/priority/medium.svg) An HTML sitemap is provided and is accessible via a link in the footer of your website.

> -   ![book](https://github.githubassets.com/images/icons/emoji/unicode/1f4d6.png) [Sitemap guidelines - Google Support](https://support.google.com/webmasters/answer/183668?hl=en)

 **![arrow_up](https://github.githubassets.com/images/icons/emoji/unicode/2b06.png) back to top**

----------

## Translations

The Front-End Checklist is also available in other languages. Thanks for all translators and their awesome work!

----------

## Front-End Checklist Badge

If you want to show you are following the rules of the Front-End Checklist, put this badge on your README file!

➔ [![Front‑End_Checklist followed](https://camo.githubusercontent.com/b03b5bac74248e99b1bb7b8704da05f0153d531bd56eb133361d02141fc2d0ce/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f46726f6e74254532253830253931456e645f436865636b6c6973742d666f6c6c6f7765642d627269676874677265656e2e737667)](https://github.com/thedaviddias/Front-End-Checklist/)

[![Front‑End_Checklist followed](https://img.shields.io/badge/Front‑End_Checklist-followed-brightgreen.svg)](https://github.com/thedaviddias/Front-End-Checklist/)

 **![arrow_up](https://github.githubassets.com/images/icons/emoji/unicode/2b06.png) back to top**

----------

## Contributing

**Open an issue or a pull request to suggest changes or additions.**

### Guide

The **Front-End Checklist** repository consists of two branches:

#### 1. `master`

This branch consists of the `README.md` file that is automatically reflected on the [Front-End Checklist](https://frontendchecklist.io/) website.

#### 2. `develop`

This branch will be used to make some significant changes to the structure, content if needed. It is preferable to use the master branch to fix small errors or add a new item.

## Support

If you have any question or suggestion, don't hesitate to use Gitter or Twitter:

-   [Chat on Gitter](https://gitter.im/Front-End-Checklist/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link)
-   [Facebook](https://www.facebook.com/frontendchecklist/)
-   [Twitter](https://twitter.com/thedaviddias)

## Author

**[David Dias](https://github.com/thedaviddias)**

## Contributors

This project exists thanks to all the people who contribute. [[Contribute]](https://github.com/thedaviddias/Front-End-Checklist/blob/master/.github/CONTRIBUTING.md). [![](https://camo.githubusercontent.com/70f3d143d173a96e13731dc665ce4aa0a9fcf0791abdd76958e96165306d8238/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f66726f6e742d656e642d636865636b6c6973742f636f6e7472696275746f72732e7376673f77696474683d383930)](https://github.com/thedaviddias/Front-End-Checklist/graphs/contributors)

## Backers

Thank you to all our backers! ![pray](https://github.githubassets.com/images/icons/emoji/unicode/1f64f.png) [[Become a backer](https://opencollective.com/front-end-checklist#backer)]

[![](https://camo.githubusercontent.com/7fcf1d01fe29e86b46423e6d1f9d73375a667e52784fe8632cff5416f8e4ef79/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f66726f6e742d656e642d636865636b6c6973742f6261636b6572732e7376673f77696474683d383930)](https://opencollective.com/front-end-checklist#backers)

## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/front-end-checklist#sponsor)]

[![](https://camo.githubusercontent.com/cbc8d2a4b98bd7860994148d34126f7de996b4b1b9ace3be9cbba3a22e82a751/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f66726f6e742d656e642d636865636b6c6973742f73706f6e736f722f302f6176617461722e737667)](https://opencollective.com/front-end-checklist/sponsor/0/website) [![](https://camo.githubusercontent.com/d7341457db989f060cad44a035c5c7150b77a851c93f3ab1b9fa464ce3913543/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f66726f6e742d656e642d636865636b6c6973742f73706f6e736f722f312f6176617461722e737667)](https://opencollective.com/front-end-checklist/sponsor/1/website) [![](https://camo.githubusercontent.com/ac699d127fe717f1ecfe91f0683b736f05de9b889fcfe088d6479f32d4e4e6f4/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f66726f6e742d656e642d636865636b6c6973742f73706f6e736f722f322f6176617461722e737667)](https://opencollective.com/front-end-checklist/sponsor/2/website) [![](https://camo.githubusercontent.com/8711daf3be955a3cae0367a9d5509f35af27b5008b0a84c18955d971f4d6dacc/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f66726f6e742d656e642d636865636b6c6973742f73706f6e736f722f332f6176617461722e737667)](https://opencollective.com/front-end-checklist/sponsor/3/website) [![](https://camo.githubusercontent.com/ae88eaf35d680c6607977f125bf11dbf937b92b197fa9e6666ce35ef5d615949/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f66726f6e742d656e642d636865636b6c6973742f73706f6e736f722f342f6176617461722e737667)](https://opencollective.com/front-end-checklist/sponsor/4/website) [![](https://camo.githubusercontent.com/697c377e4bf72e84bc1593745fa59ff22f01f7af701799ee7c3a2d04f3bae88e/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f66726f6e742d656e642d636865636b6c6973742f73706f6e736f722f352f6176617461722e737667)](https://opencollective.com/front-end-checklist/sponsor/5/website) [![](https://camo.githubusercontent.com/baeadb505e86c8ef7f9804be350fe124cd32987c5e1c7c17249e1af2cf8fc4c0/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f66726f6e742d656e642d636865636b6c6973742f73706f6e736f722f362f6176617461722e737667)](https://opencollective.com/front-end-checklist/sponsor/6/website) [![](https://camo.githubusercontent.com/91f08eae67eae32212de7ffe1b073fcfb938a3de5376df13f6c2ce6a2e0bccc8/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f66726f6e742d656e642d636865636b6c6973742f73706f6e736f722f372f6176617461722e737667)](https://opencollective.com/front-end-checklist/sponsor/7/website) [![](https://camo.githubusercontent.com/33b38cf60ab40859c6c54e4b5b517889fc2b49ee8d869ef1de1009430ea8cb4d/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f66726f6e742d656e642d636865636b6c6973742f73706f6e736f722f382f6176617461722e737667)](https://opencollective.com/front-end-checklist/sponsor/8/website) [![](https://camo.githubusercontent.com/9e334997b04e95bbae7cc7e5761dffa425c39358e2f2b51a59cd53b96bf785a3/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f66726f6e742d656e642d636865636b6c6973742f73706f6e736f722f392f6176617461722e737667)](https://opencollective.com/front-end-checklist/sponsor/9/website)

## License

[![CC0](https://camo.githubusercontent.com/a15e10f28f401c8ed71f4fe09cc74e6f0cfa0c806bd9275b91af7dabfeab2b17/68747470733a2f2f692e6372656174697665636f6d6d6f6e732e6f72672f702f7a65726f2f312e302f38387833312e706e67)](https://creativecommons.org/publicdomain/zero/1.0/)

 **![arrow_up](https://github.githubassets.com/images/icons/emoji/unicode/2b06.png) back to top**
