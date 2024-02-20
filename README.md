# csc193A_Assignment_5

Fancify My Text
Overview
Create an interactive web page where users can enter text into a textarea and apply styling effects to it by clicking on UI controls. This project involves creating HTML and JavaScript files to implement the functionality.

Steps
HTML Setup: Start with the provided HTML file (fancifymytext.html) and add the necessary UI controls:

Textarea for entering text, styled within a bordered field set box labeled "Text".
Another bordered field set box labeled "Fancify" containing:
A "Bigger!" button.
Two radio buttons labeled "FancyShmancy" and "BoringBetty".
JavaScript Test: Create a JavaScript file (fancifymytext.js) and test it by displaying an alert message when the page loads.

javascript
Copy code
``alert("Hello, world!");``
Basic Event Handling: Modify the JavaScript code to display the alert message only when the "Bigger" button is clicked.

javascript
Copy code
``function showAlert() {
    alert("Hello, world!");
}``
Add an onclick handler attribute to the "Bigger" button in the HTML.

Linking JavaScript: Ensure the HTML page links to the JavaScript file using a script tag.

Font Size Increase: Modify the JavaScript function to increase the font size of the textarea to 24pt when the "Bigger" button is clicked.

javascript
Copy code
``function increaseFontSize() {
    document.getElementById("textArea").style.fontSize = "24pt";
}``
Styling with Radio Buttons: Implement functionality to apply styles to the textarea based on the selected radio button.

Add an onchange event to the radio buttons.
Update the JavaScript function to toggle bold font weight based on the selected radio button.
Additional Styles: Enhance the styling for the "FancyShmancy" option by adding blue color and underline to the text.

Uppercase and Suffix: Create a new button in the HTML labeled "Moo" that, when clicked, uppercases the text in the textarea and adds a suffix of "-Moo" to the last word of each sentence.

javascript
Copy code
``function addMoo() {
    let textArea = document.getElementById("textArea");
    let text = textArea.value;
    // Uppercase text
    textArea.value = text.toUpperCase();
    // Add "-Moo" to the last word of each sentence
    let sentences = text.split(".");
    for (let i = 0; i < sentences.length; i++) {
        let words = sentences[i].trim().split(" ");
        if (words.length > 0) {
            words[words.length - 1] += "-Moo";
            sentences[i] = words.join(" ");
        }
    }
    textArea.value = sentences.join(".");
}``
Conclusion
By following these steps, you'll create a dynamic web page where users can enter text and apply various styling effects using JavaScript event handling.





