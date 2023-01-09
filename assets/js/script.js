$("#title").on("mousemove",(event)=>{
    let a = event.pageX - event.target.offsetLeft;
    let b = event.pageY - event.target.offsetTop;

    $("#title").css("--a",`${ a }px`);
    $("#title").css("--b",`${ b }px`);

})


$("#bio").on("click",()=>{
    $("#biography").css({"left":"13vw","opacity":"100%"});
    $(".dot").css("z-index","-1");
    $("#social-media").css({"top":"-100vh","opacity":"0%"});

})

$("#bio-collapse").on("mousedown",()=>{
    $("#biography").css({"left":"16vw","opacity":"100%"});
})

$("#bio-collapse").on("mouseup",()=>{
    $("#biography").css({"left":"-100vw","opacity":"0%"});
    $(".dot").not("#coral-dot, #peach-dot, #violet-dot, #shadow-dot, #green-dot").css("z-index","0");
})

$("#social-link").on("click",()=>{
    $("#social-media").css({"top":"27vh","opacity":"100%"});
    $(".dot").css("z-index","-1");
    $("#biography").css({"left":"-100vw","opacity":"0%"});
})

$("#social-collapse").on("mousedown",()=>{
    $("#social-media").css({"top":"29vh","opacity":"100%"});
})
$("#social-collapse").on("mouseup",()=>{
    $("#social-media").css({"top":"-100vh","opacity":"0%"});
    $(".dot").not("#coral-dot, #peach-dot, #violet-dot, #shadow-dot, #green-dot").css("z-index","0");
})


$("body").on("mousemove",(event) => {
    let x = event.pageX;
    let y = event.pageY;
    $("body").css("--x",`${ x }px`);
    $("body").css("--y",`${ y }px`);
})

$("#green-dot").on("mouseenter",function() {
    $("#green-dot").css({"height":"12vw","width":"12vw","box-shadow":"none"});
})
$("#green-dot").on("mouseleave",function() {
    $("#green-dot").css({"height":"10vw","width":"10vw","box-shadow":"inset 0px 0px 50px white"});
})

$("#blue-dot").on("mouseenter",function() {
    $("#blue-dot").css({"height":"14vw","width":"14vw","box-shadow":"none"});
})
$("#blue-dot").on("mouseleave",function() {
    $("#blue-dot").css({"height":"12vw","width":"12vw","box-shadow":"inset 0px 0px 50px white"});
})

$("#lavender-dot").on("mouseenter",function() {
    $("#lavender-dot").css({"height":"16vw","width":"16vw","box-shadow":"none"});
})
$("#lavender-dot").on("mouseleave",function() {
    $("#lavender-dot").css({"height":"14vw","width":"14vw","box-shadow":"inset 0px 0px 50px white"});
})

$("#nude-dot").on("mouseenter",function() {
    $("#nude-dot").css({"height":"18vw","width":"18vw","box-shadow":"none"});
})
$("#nude-dot").on("mouseleave",function() {
    $("#nude-dot").css({"height":"16vw","width":"16vw","box-shadow":"inset 0px 0px 50px white"});
})

$("#pink-dot").on("mouseenter",function() {
    $("#pink-dot").css({"height":"20vw","width":"20vw","box-shadow":"none"});
})
$("#pink-dot").on("mouseleave",function() {
    $("#pink-dot").css({"height":"18vw","width":"18vw","box-shadow":"inset 0px 0px 50px white"});
})

$("#violet-dot").on("mouseenter",function() {
    $("#violet-dot").css({"height":"22vw","width":"22vw","box-shadow":"none"});
})
$("#violet-dot").on("mouseleave",function() {
    $("#violet-dot").css({"height":"20vw","width":"20vw","box-shadow":"inset 0px 0px 50px white"});
})

$("#almond-dot").on("mouseenter",function() {
    $("#almond-dot").css({"height":"24vw","width":"24vw","box-shadow":"none"});
})
$("#almond-dot").on("mouseleave",function() {
    $("#almond-dot").css({"height":"22vw","width":"22vw","box-shadow":"inset 0px 0px 50px white"});
})

$("#ecru-dot").on("mouseenter",function() {
    $("#ecru-dot").css({"height":"26vw","width":"26vw","box-shadow":"none"});
})
$("#ecru-dot").on("mouseleave",function() {
    $("#ecru-dot").css({"height":"24vw","width":"24vw","box-shadow":"inset 0px 0px 50px white"});
})

$("#moss-dot").on("mouseenter",function() {
    $("#moss-dot").css({"height":"28vw","width":"28vw","box-shadow":"none"});
})
$("#moss-dot").on("mouseleave",function() {
    $("#moss-dot").css({"height":"26vw","width":"26vw","box-shadow":"inset 0px 0px 50px white"});
})

$("#coral-dot").on("mouseenter",function() {
    $("#coral-dot").css({"height":"30vw","width":"30vw","box-shadow":"none"});
})
$("#coral-dot").on("mouseleave",function() {
    $("#coral-dot").css({"height":"28vw","width":"28vw","box-shadow":"inset 0px 0px 50px white"});
})

$("#peach-dot").on("mouseenter",function() {
    $("#peach-dot").css({"height":"22vw","width":"22vw","box-shadow":"none"});
})
$("#peach-dot").on("mouseleave",function() {
    $("#peach-dot").css({"height":"20vw","width":"20vw","box-shadow":"inset 0px 0px 50px white"});
})

$("#shadow-dot").on("mouseenter",function() {
    $("#shadow-dot").css({"height":"16vw","width":"16vw","box-shadow":"none"});
})
$("#shadow-dot").on("mouseleave",function() {
    $("#shadow-dot").css({"height":"14vw","width":"14vw","box-shadow":"inset 0px 0px 50px white"});
})

$("#grass-dot").on("mouseenter",function() {
    $("#grass-dot").css({"height":"12vw","width":"12vw","box-shadow":"none"});
})
$("#grass-dot").on("mouseleave",function() {
    $("#grass-dot").css({"height":"10vw","width":"10vw","box-shadow":"inset 0px 0px 50px white"});
})

$("#dirty-white-dot").on("mouseenter",function() {
    $("#dirty-white-dot").css({"height":"8vw","width":"8vw","box-shadow":"none"});
})
$("#dirty-white-dot").on("mouseleave",function() {
    $("#dirty-white-dot").css({"height":"6vw","width":"6vw","box-shadow":"inset 0px 0px 50px white"});
})

$("#mint-dot").on("mouseenter",function() {
    $("#mint-dot").css({"height":"8vw","width":"8vw","box-shadow":"none"});
})
$("#mint-dot").on("mouseleave",function() {
    $("#mint-dot").css({"height":"6vw","width":"6vw","box-shadow":"inset 0px 0px 50px white"});
})

$("#periwinkle-dot").on("mouseenter",function() {
    $("#periwinkle-dot").css({"height":"9vw","width":"9vw","box-shadow":"none"});
})
$("#periwinkle-dot").on("mouseleave",function() {
    $("#periwinkle-dot").css({"height":"7vw","width":"7vw","box-shadow":"inset 0px 0px 50px white"});
})

$("#lilac-dot").on("mouseenter",function() {
    $("#lilac-dot").css({"height":"9vw","width":"9vw","box-shadow":"none"});
})
$("#lilac-dot").on("mouseleave",function() {
    $("#lilac-dot").css({"height":"7vw","width":"7vw","box-shadow":"inset 0px 0px 50px white"});
})

$("#mentos-dot").on("mouseenter",function() {
    $("#mentos-dot").css({"height":"9vw","width":"9vw","box-shadow":"none"});
})
$("#mentos-dot").on("mouseleave",function() {
    $("#mentos-dot").css({"height":"7vw","width":"7vw","box-shadow":"inset 0px 0px 50px white"});
})

$("#steel-blue-dot").on("mouseenter",function() {
    $("#steel-blue-dot").css({"height":"9vw","width":"9vw","box-shadow":"none"});
})
$("#steel-blue-dot").on("mouseleave",function() {
    $("#steel-blue-dot").css({"height":"7vw","width":"7vw","box-shadow":"inset 0px 0px 50px white"});
})

$("#muted-dot").on("mouseenter",function() {
    $("#muted-dot").css({"height":"9vw","width":"9vw","box-shadow":"none"});
})
$("#muted-dot").on("mouseleave",function() {
    $("#muted-dot").css({"height":"7vw","width":"7vw","box-shadow":"inset 0px 0px 50px white"});
})

$("#silver-dot").on("mouseenter",function() {
    $("#silver-dot").css({"height":"11vw","width":"11vw","box-shadow":"none"});
})
$("#silver-dot").on("mouseleave",function() {
    $("#silver-dot").css({"height":"9vw","width":"9vw","box-shadow":"inset 0px 0px 50px white"});
})

$("#cloudy-dot").on("mouseenter",function() {
    $("#cloudy-dot").css({"height":"11vw","width":"11vw","box-shadow":"none"});
})
$("#cloudy-dot").on("mouseleave",function() {
    $("#cloudy-dot").css({"height":"9vw","width":"9vw","box-shadow":"inset 0px 0px 50px white"});
})

$("#cotton-candy-dot").on("mouseenter",function() {
    $("#cotton-candy-dot").css({"height":"7vw","width":"7vw","box-shadow":"none"});
})
$("#cotton-candy-dot").on("mouseleave",function() {
    $("#cotton-candy-dot").css({"height":"5vw","width":"5vw","box-shadow":"inset 0px 0px 50px white"});
})

$("#red-dot").on("mouseenter",function() {
    $("#red-dot").css({"height":"7vw","width":"7vw","box-shadow":"none"});
})
$("#red-dot").on("mouseleave",function() {
    $("#red-dot").css({"height":"5vw","width":"5vw","box-shadow":"inset 0px 0px 50px white"});
})

$("#orange-dot").on("mouseenter",function() {
    $("#orange-dot").css({"height":"10vw","width":"10vw","box-shadow":"none"});
})
$("#orange-dot").on("mouseleave",function() {
    $("#orange-dot").css({"height":"8vw","width":"8vw","box-shadow":"inset 0px 0px 50px white"});
})

$("#cheddar-dot").on("mouseenter",function() {
    $("#cheddar-dot").css({"height":"10vw","width":"10vw","box-shadow":"none"});
})
$("#cheddar-dot").on("mouseleave",function() {
    $("#cheddar-dot").css({"height":"8vw","width":"8vw","box-shadow":"inset 0px 0px 50px white"});
})

$("#celadon-dot").on("mouseenter",function() {
    $("#celadon-dot").css({"height":"6vw","width":"6vw","box-shadow":"none"});
})
$("#celadon-dot").on("mouseleave",function() {
    $("#celadon-dot").css({"height":"4vw","width":"4vw","box-shadow":"inset 0px 0px 50px white"});
})

$("#purple-dot").on("mouseenter",function() {
    $("#purple-dot").css({"height":"7vw","width":"7vw","box-shadow":"none"});
})
$("#purple-dot").on("mouseleave",function() {
    $("#purple-dot").css({"height":"5vw","width":"5vw","box-shadow":"inset 0px 0px 50px white"});
})