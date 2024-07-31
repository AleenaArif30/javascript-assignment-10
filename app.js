function zoomIn(e){
//  e.src= "https://online.hbs.edu/Style%20Library/api/resize.aspx?imgpath=/PublishingImages/overhead-view-of-business-strategy-meeting.jpg&w=1200&h=630"
 e.style.transform = "scale(2)"
}
function zoomOut(e){
// e.src= "https://i.pinimg.com/originals/f2/a5/0d/f2a50df4f11e22db732b96692906dfe8.gif"
e.style.transform = "scale(1)"
}

// function myFunction(btn){
//    var table=  document.getElementById("mytable")
//     var row = btn.parentNode.parentNode;
//     table.myFunction.remove()
// }
function myFunction(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

var counter = 0
function increase(){
    counter++
    document.getElementById("counter").innerHTML = counter
}

function decrease(){
    counter--
    document.getElementById("counter").innerHTML = counter
}