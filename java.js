onmousemove = function(e)
{
    let cursor = document.getElementById("customCursor");
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
}   