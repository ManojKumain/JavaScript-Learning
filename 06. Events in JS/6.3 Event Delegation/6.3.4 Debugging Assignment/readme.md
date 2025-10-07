🧩 Debugging Assignment: “Buggy Color Palette”

The goal: clicking a color box should change the page background and update the status paragraph.

But the current code has 3 subtle bugs. Your task: find and fix them.

❌ Buggy Code
<div id="palette">
  <div class="color-box" data-color="red" style="width:50px;height:50px;background:red;"></div>
  <div class="color-box" data-color="green" style="width:50px;height:50px;background:green;"></div>
  <div class="color-box" data-color="blue" style="width:50px;height:50px;background:blue;"></div>
</div>

<p id="status">Click a color box to change the background!</p>

<script>
const palette = document.querySelector("#palette");
const status = document.querySelector("#status");

palette.addEventListener("click", function(e) {
    if(e.target.className = "color-box") {
        const color = e.target.data-color;
        document.body.style.backgroundcolor = color;
        status.text = "Background changed to " + color;
    }
});
</script>

🎯 Your Tasks

Fix all the mistakes so that:

Clicking a .color-box changes document.body.style.backgroundColor correctly.

The paragraph text updates correctly.

Only the boxes respond to clicks.

Understand why each bug happens — this is what separates beginners from pros.

💡 Hints

Check the comparison vs assignment (= vs ===).

Check how you access data-* attributes.

Check CSS property names (backgroundcolor vs backgroundColor).

Check paragraph text property (textContent vs text).