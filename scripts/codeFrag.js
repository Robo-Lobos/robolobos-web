
/*
this JavaScript file is used to load universal elements to pages where the script is called and run.


To add a code fragment to your page, use this format (with codeFragment, and loadCodeFragment changed to better identify the fragment):
<div id="codeFragment"><script src="../scripts/codeFrag.js"></script><script>loadCodeFragment();</script></div>



*/


function loadNavbar() { //<div id="navbar"><script src="../scripts/navBar.js"></script><script>loadNavbar();</script></div>
    const navbarHTML = `
      <ul>
        <li><a href="../" class="rainbow_navbar_text_animated">Home</a></li>
        <li><a href="../team" class="rainbow_navbar_text_animated">Team</a></li>
        <li><a href="../docs" class="rainbow_navbar_text_animated">Docs</a></li>
        <li><a href="../lebonbon/" class="rainbow_navbar_text_animated">Lebonbon</a></li>
      </ul>
    `;
    document.getElementById('navbar').innerHTML = navbarHTML;
  }

function loadFooter() { //<div id="footer"><script src="../scripts/codeFrag.js"></script><script>loadFooter();</script></div>
    const footerHTML = `
        <div class="footer-content" style="
            display: flex; 
            justify-content: center; 
            align-items: center; 
            font-size: 0.9em; 
            padding: 0.5em;
            background: linear-gradient(to bottom, #000000, #333333);">
            <div class="footer-section" style="margin: 0 1em;">
                <small style="color: white; text-shadow: 2px 2px 4px rgba(0,0,0,0.8);">RoboLobos • Building the future</small>
            </div>
            <div class="footer-section" style="margin: 0 1em;">
                <small style="color: white; text-shadow: 2px 2px 4px rgba(0,0,0,0.8);">mail@robolobos.club</small>
            </div>
            <div class="footer-section" style="margin: 0 1em;">
                <a href="https://github.com/Robo-Lobos" class="social-link"><small style="color: white; text-shadow: 2px 2px 4px rgba(0,0,0,0.8);">GitHub</small></a>
                <a href="#" class="social-link"><small style="color: white; text-shadow: 2px 2px 4px rgba(0,0,0,0.8);">Instagram</small></a>
            </div>
            <div class="footer-section" style="margin: 0 1em;">
                <small style="color: white; text-shadow: 2px 2px 4px rgba(0,0,0,0.8);">&copy; ${new Date().getFullYear()}</small>
            </div>
        </div>
    `;
    document.getElementById('footer').innerHTML = footerHTML;
}
  