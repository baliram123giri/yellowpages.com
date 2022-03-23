// Create a media condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia('(min-width: 768px)')
const mediaQuerymax = window.matchMedia('(max-width: 768px)')
// Check if the media query is true
var collpase = document.querySelector(".collapse")
var collpase2 = document.querySelector(".accordion-collapse1")
var collpase3 = document.querySelector(".accordion-collapse2")
var collpase4 = document.querySelector(".accordion-collapse3")
if (mediaQuery.matches) {
  collpase.removeAttribute("id")
  collpase2.removeAttribute("id")
  collpase3.removeAttribute("id")
  collpase4.removeAttribute("id")
  collpase.classList.add("show")
  collpase2.classList.add("show")
  collpase3.classList.add("show")
  collpase4.classList.add("show")

  $(document).ready(function(){
    //here getting mobile content
   $(".accordion-list").removeClass("accordion-list")
     
    var mobileNav =  $("#mobile_aside" ).html()
    function getContHover (child){
      var hoverContent = $(`#mobile_aside .${child || "Auto"}`).html()
         $(".hover_items").html(hoverContent)
    }
    getContHover()
  
    $(document).on("mouseover",".desktop .first_ele ", function(e){
         console.log(e.target)
        var selector =  !e.target.querySelector("span")?"": e.target.querySelector("span").innerHTML
            selector = selector.split(" ")[0]
           $(".desktop .first_ele ").hover(  getContHover(selector))       
    })
   
    $("#desktop_site_nav").html(mobileNav)
    var deskTopHeadings = $("#desktop_site_nav .answer")
        deskTopHeadings.hide()
  })
 
  $(".browse").on("click",()=>{
      $(".desktop").toggleClass("d-none")
  })
  
}

if(mediaQuerymax.matches){
    document.getElementById("mobile_login").innerHTML= $(".user").html()
    var div = $(".nav_items_box");
     $("#close").on("click", ()=>{
        div.animate({right: '-280px'}, "slow");
        // $(".nav_items_box").addClass("d-none")
    })
    $(".menu_bar").on("click", ()=>{
        div.animate({right: '0px'}, "slow");
        // $(".nav_items_box").removeClass("d-none")
    })
    $("#close").focusout(function() {
         alert("hello")
    });
}

