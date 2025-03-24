// Description: Inserts a dynamically changing navigation bar on any page it's included in which links back to the homepage from subpages
//
// To Use:
// Include dynamic_navbar.js in <head> and add <script>fixNav(["page_1", "page_2", etc]);</script> before </body>
// Replace the items inside [] with what you call your pages. This must match the name of the html file the page is in or everything will redirect back to the homepage
//
// To Style buttons:
// Style 'nav a' in your css. Use child selectors if wanting to style individual buttons.


function fixNav(pages = ['Page1', 'Page2', 'Page3', 'Page4', 'Page5']) {
    let pagename = window.location.href.split('/').pop().split('.')[0];
    for (i = 0; i < pages.length; i++) {
        const text = pages[i];
        const link = pages[i].toLowerCase() + '.html'; //change the subpage path here if not in same directory as index.html

        const btn = document.createElement('a');
        if (pagename.toLowerCase() == text.toLowerCase()) {
            btn.innerText = 'Home' //change this if you don't want the return button to be called Home
            btn.href = 'index.html' //change here if homepage is in a file other than index.html
        } else {
            btn.innerText = text
            btn.href = link
        }


        document.getElementById('navigation').appendChild(btn);
    }
}
fixNav();