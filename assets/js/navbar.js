const navigator = `
<nav id="menu">
    <header class="major">
        <h2>Menu</h2>
    </header>
    <ul>
        <li><a href="index.html">Startseite</a></li>
        <li>
            <span class="opener">Grundlagen</span>
            <ul>
                <li><a href="aboutbuttons.html">Über Buttons</a></li>
                <li><a href="scenes.html">Szenen</a></li>
                <li><a href="variables.html">Punkte Zählen</a></li>
                <li><a href="movement.html">Figuren bewegen</a></li>
                <li><a href="inworks.html">Figuren auswählen</a></li>
                <li><a href="inworks.html">Hintergründe auswählen</a></li>												
            </ul>
        </li>
        <li><a href="gdd.html">Spieleentwicklungsdokument</a></li>
        <li>
            <span class="opener">Beispielprojekte</span>
            <ul>
                <li><a href="inworks.html">T-Rex Hüpf</a></li>
            </ul>
        </li>
        <li><a href="resources.html">Extra Materialien</a></li>
    </ul>
</nav>
`;


document.getElementById("navjs").innerHTML = navigator;