---
title: Contact
position: 3
show: true
link: "#contact"
---

<form method="post" action="#">
    <div class="field half first">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" />
    </div>
    <div class="field half">
        <label for="email">Email</label>
        <input type="text" name="email" id="email" />
    </div>
    <div class="field">
        <label for="message">Message</label>
        <textarea name="message" id="message" rows="4"></textarea>
    </div>
    <ul class="actions">
        <li><input type="submit" value="Send Message" class="special" /></li>
        <li><input type="reset" value="Reset" /></li>
    </ul>
</form>
<ul class="icons">
    <li><a href="https://github.com/{{ site.owner.github }}" class="icon fa-github" target="_blank"><span class="label">GitHub</span></a></li>
    <li><a href="https://www.linkedin.com/in/{{ site.owner.linkedin }}" class="icon fa-linkedin" target="_blank"><span class="label">Linked In</span></a></li>
    <li><a href="https://twitter.com/{{ site.owner.twitter }}" class="icon fa-twitter" target="_blank"><span class="label">Twitter</span></a></li>
    <li><a href="https://www.instagram.com/{{ site.owner.instagram }}" class="icon fa-instagram" target="_blank"><span class="label">Instagram</span></a></li>
</ul>