$(document).ready(() => {
  //Toggle Handle 
    $("#menu").click(function () {
        $("ul").toggleClass("active");
      });
      $("ul").click(function () {
        $("ul").toggleClass("active");
      });
      
     
     

//Collapse component handle
$("#b1").click(function () {
   
    $("#div1").toggle();
    $("#div2").hide();
    $("#div3").hide();
})
$("#b2").click(function () {
   
    $("#div2").toggle();
    $("#div1").hide();
    $("#div3").hide();
})
$("#b3").click(function () {
   
    $("#div3").toggle();
    $("#div2").hide();
    $("#div1").hide();
})


//modal class handle
$("#myModal").css("display", "block");
  $("#close").click(function () {
    $("#myModal").css("display", "none");
  })
 
 let modal = document.getElementById('myModal');
 console.log(modal)
 
$(window).click(function(event){
    console.log(event.target)
  if (event.target == modal){
    $("#myModal").css("display", "none");
  }
})
})