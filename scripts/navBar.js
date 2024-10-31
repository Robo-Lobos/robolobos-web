
/*
here is where you would add more links to the navbar when needed
put this on pages that you want to have a navbar generally near the top

<div id="navbar"><script src="../scripts/navBar.js"></script><script>loadNavbar();</script></div>

*/


function loadNavbar() {
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
  