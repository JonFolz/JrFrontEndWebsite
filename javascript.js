/* Alert message */
function message() {
  alert("Thanks for checking out my page!");
}







/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function button1() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  function button2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }

  function button3() {
    document.getElementById("myDropdown3").classList.toggle("show")
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


