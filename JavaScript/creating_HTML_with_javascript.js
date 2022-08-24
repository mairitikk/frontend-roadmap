var technolgies= ["HTML", "CSS", "Javascript", "DOM"];

function createMenu (items) {
  // let's greate a new element for containing the menu
  var menu = document.createElement("ul");
  //iterate over the items and create one LI for each element
  items.forEach(function(element, index, array){
    var menuItem= document.createElement("li");
    var textNode= document.createTextNode(element);
    menuItem.appendChild(textNode);
    menu.appendChild(menuItem);
    
  });
  document.body.appendChild(menu);
}
 
createMenu(technolgies);