## 01.0 - Intro to Semantic HTML

### Exercise 1:
When coding websites in the past, you may have used Divs to help divide your content up. Semantic HTML tags make it easier to tell what content is contained inside of a tag. Let's convert this page to use the newer semantic HTML tags.

#### Instructions
1. Change the opening tag `<div class="header">` to `<header>`. Change the closing tag.
2. Change the opening tag `<div class="nav">` to `<nav>`. Change the closing tag.
3. Change the opening tag `<div class="main">` to `<main>`. Change the closing tag.
4. Change **each** of the `<div class="article">` tags to `<article>`. Don't forget to change the closing tag.
5. Change the opening tag `<div class="footer">` to `<footer>`. Change the closing tag.
6. Analyze your Repl website at the following link: https://kalicube.pro/tools/html5-viewer

### Exercise 2:
Now that you've began to use semantic HTML5 tags, build the structure of a blog on your own!

#### Instructions - HTML
1. Build a `<header>` tag with an `<h1>` inside with the title of your blog.
2. Build a `<nav>` section with appropriate fake links.
3. Build a `<main>` section.
4. Build an `<aside>` section. In this section, write a short blurb about the author of the blog (you)!

#### Instructions - JavaScript
1. Target the `<main>` section in JavaScript, and save it to a variable.
2. Create an array called posts, and create 3 objects inside. Your objects should be `image`, `title`, and `post` (this should sound similar...)
3. Create a for of loop that loops through your array of objects. Using insertAdjacentHTML, post the data from the objects **in the appropriate semantic HTML tag** with the `image`, `title`, and `post`.
