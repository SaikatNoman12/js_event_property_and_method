/*== 1. event.stopPropagation() ==*/
let parent = document.getElementById('parent');
let child = document.getElementById('child');

parent.onclick = (event) => {
    alert('parent') // check event type;
}
child.onclick = (event) => {
    event.stopPropagation();
    alert('child');
}


/* == 2. check event type == */
let checkType = document.getElementById('checkType');
checkType.onclick = (event) => {
    alert(event.type());
}


/* == 3. event.which. Use for onmousedown() & onmouseup() event. Input use onkeyup() & onkeydown(). == */
function onMouseDown(event) {
    alert(e.which);
}


/* == 4. event.preventDefault() use. == */
document.getElementById('preventDefault').addEventListener('click', function (event) {
    event.preventDefault();
})
