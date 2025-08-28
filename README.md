1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:
 -> getElementById is unique in that it returns a single element with the specified ID.

 -> getElementsByClassName returns a live HTMLCollection of elements with the specified class name.

 -> querySelector returns the first element that matches a specified CSS selector.

 -> querySelectorAll returns a static NodeList of all elements that match the specified CSS selector.

2. How do you create and insert a new element into the DOM?
-> To create and insert a new element into the DOM, you can use the following steps:

1. Create the new element using `document.createElement()`.
2. Set any attributes or properties on the new element as needed.
3. Find the parent element where you want to insert the new element.
4. Insert the new element into the DOM using methods like `appendChild()` or `replaceChild()`.

3. What is Event Bubbling and how does it work?
-> Event bubbling a DOM event propagation mechanism where an event, like a click, triggers on a child element and then "bubbles" or travels up the DOM tree to its parent elements and ancestors, up to the document root.

Example:
    document.getElementById("parent").addEventListener("click", function() {
        alert("Parent Div Clicked");
    });

4. What is Event Delegation in JavaScript? Why is it useful?
-> Event delegation is a technique in JavaScript where a single event listener is added to a parent element instead of adding individual listeners to each child element. This takes advantage of event bubbling, allowing the parent element to handle events triggered by its child elements.
 
 It is useful:
 ->Cleaner Code
 ->Performance Efficient
 ->Handles Dynamic Content

 5. What is the difference between preventDefault() and stopPropagation() methods?
 ->preventDefault()→ Stops the browser’s default behavior.
    ->stopPropagation()→ Stops the event from bubbling up to parent elements.
    
