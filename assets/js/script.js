

window.addEventListener("load", () => {
    $("#title").hide().delay(2000).fadeIn(1000);
    $("#nav").hide().delay(3000).fadeIn(1000);

    $("#nude-dot").css({"animation-name":"hop","animation-duration":"1s","animation-iteration-count":"3","animation-fill-mode":"forward","animation-delay":"0.5s"});
    $("#periwinkle-dot").css({"animation-name":"hop","animation-duration":"1s","animation-iteration-count":"3","animation-fill-mode":"forward","animation-delay":"0.5s"});
    $("#muted-dot").css({"animation-name":"hop","animation-duration":"1s","animation-iteration-count":"1","animation-fill-mode":"forward","animation-delay":"0.5s"});

    $("#orange-dot").css({"animation-name":"hop","animation-duration":"1s","animation-iteration-count":"3","animation-fill-mode":"forward","animation-delay":"0.6s"});
    $("#lilac-dot").css({"animation-name":"hop","animation-duration":"1s","animation-iteration-count":"3","animation-fill-mode":"forward","animation-delay":"0.6s"});
    $("#almond-dot").css({"animation-name":"hop","animation-duration":"1s","animation-iteration-count":"3","animation-fill-mode":"forward","animation-delay":"0.6s"});
    $("#mentos-dot").css({"animation-name":"hop","animation-duration":"1s","animation-iteration-count":"3","animation-fill-mode":"forward","animation-delay":"0.6s"});
    $("#red-dot").css({"animation-name":"hop","animation-duration":"1s","animation-iteration-count":"3","animation-fill-mode":"forward","animation-delay":"0.6s"});
    $("#cheddar-dot").css({"animation-name":"hop","animation-duration":"1s","animation-iteration-count":"3","animation-fill-mode":"forward","animation-delay":"0.6s"});

    $("#green-dot").css({"animation-name":"hop","animation-duration":"1s","animation-iteration-count":"3","animation-fill-mode":"forward","animation-delay":"0.7s"});
    $("#pink-dot").css({"animation-name":"hop","animation-duration":"1s","animation-iteration-count":"3","animation-fill-mode":"forward","animation-delay":"0.7s"});
    $("#cloudy-dot").css({"animation-name":"hop","animation-duration":"1s","animation-iteration-count":"3","animation-fill-mode":"forward","animation-delay":"0.7s"});
    $("#shadow-dot").css({"animation-name":"hop","animation-duration":"1s","animation-iteration-count":"3","animation-fill-mode":"forward","animation-delay":"0.7s"});

    $("#coral-dot").css({"animation-name":"hop","animation-duration":"1s","animation-iteration-count":"3","animation-fill-mode":"forward","animation-delay":"0.8s"});
    $("#celadon-dot").css({"animation-name":"hop","animation-duration":"1s","animation-iteration-count":"3","animation-fill-mode":"forward","animation-delay":"0.8s"});
    $("#blue-dot").css({"animation-name":"hop","animation-duration":"1s","animation-iteration-count":"3","animation-fill-mode":"forward","animation-delay":"0.8s"});

    $("#violet-dot").css({"animation-name":"hop","animation-duration":"1s","animation-iteration-count":"3","animation-fill-mode":"forward","animation-delay":"0.9s"});
    $("#grass-dot").css({"animation-name":"hop","animation-duration":"1s","animation-iteration-count":"3","animation-fill-mode":"forward","animation-delay":"0.9s"});
    $("#moss-dot").css({"animation-name":"hop","animation-duration":"1s","animation-iteration-count":"3","animation-fill-mode":"forward","animation-delay":"0.9s"});

    $("#peach-dot").css({"animation-name":"hop","animation-duration":"1s","animation-iteration-count":"3","animation-fill-mode":"forward","animation-delay":"1s"});
    $("#dirty-white-dot").css({"animation-name":"hop","animation-duration":"1s","animation-iteration-count":"3","animation-fill-mode":"forward","animation-delay":"1s"});
    $("#lavender-dot").css({"animation-name":"hop","animation-duration":"1s","animation-iteration-count":"3","animation-fill-mode":"forward","animation-delay":"1s"});
    $("#steel-blue-dot").css({"animation-name":"hop","animation-duration":"1s","animation-iteration-count":"3","animation-fill-mode":"forward","animation-delay":"1s"});
    $("#silver-dot").css({"animation-name":"hop","animation-duration":"1s","animation-iteration-count":"3","animation-fill-mode":"forward","animation-delay":"1s"});
    $("#purple-dot").css({"animation-name":"hop","animation-duration":"1s","animation-iteration-count":"3","animation-fill-mode":"forward","animation-delay":"1s"});

    $("#ecru-dot").css({"animation-name":"hop","animation-duration":"1s","animation-iteration-count":"3","animation-fill-mode":"forward","animation-delay":"1.1s"});
    $("#mint-dot").css({"animation-name":"hop","animation-duration":"1s","animation-iteration-count":"3","animation-fill-mode":"forward","animation-delay":"1.1s"});
    $("#cotton-candy-dot").css({"animation-name":"hop","animation-duration":"1s","animation-iteration-count":"3","animation-fill-mode":"forward","animation-delay":"1.1s"});

})

$("#title").on("click",()=>{
    location.reload();
})


$("#title").on("mousemove",(event)=>{
    let a = event.pageX - event.target.offsetLeft;
    let b = event.pageY - event.target.offsetTop;

    $("#title").css("--a",`${ a }px`);
    $("#title").css("--b",`${ b }px`);

})

$("#biography").on("mousemove",(event)=>{
    
    let c = event.pageX - $("#biography")[0].offsetLeft;
    let d = event.pageY - $("#biography")[0].offsetTop;
    $("#biography").css({"--c":`${ c }px`, "--d":`${ d }px`});
})


$("#bio").on("click",()=>{


    $("#biography").css({"left":"13vw","opacity":"100%"});
    $(".dot").css("z-index","-1");
    $("#social-media").css({"top":"-100vh","opacity":"0%"});
    $("#contact-info").css({"left":"200vw","opacity":"0%"});

    $("#bio").on("mousedown",()=>{
        $("#biography").css({"animation":"alert","animation-duration":"0.5s","animation-iteration-count":"1","animation-fill-mode":"forward"})
    })
    $("#bio").on("mouseleave",()=>{
        $("#biography").css("animation","none");
    })

})

$("#bio-collapse").on("mousedown",()=>{
    $("#biography").css({"left":"16vw","opacity":"100%"});
})

$("#bio-collapse").on("mouseup",()=>{
    $("#biography").css({"left":"-100vw","opacity":"0%"});
    $(".dot").not("#coral-dot, #lilac-dot, #almond-dot, #peach-dot, #violet-dot, #shadow-dot, #green-dot").css("z-index","0");
})

$("#social-media").on("mousemove",(event)=>{

    let e = event.pageX - $("#social-media")[0].offsetLeft;
    let f = event.pageY - $("#social-media")[0].offsetTop;
    $("#social-media").css({"--e":`${ e }px`, "--f":`${ f }px`});
})

$("#social-link").on("click",()=>{
    $("#social-media").css({"top":"27vh","opacity":"100%"});
    $(".dot").css("z-index","-1");
    $("#biography").css({"left":"-100vw","opacity":"0%"});
    $("#contact-info").css({"left":"200vw","opacity":"0%"});

    $("#social-link").on("mousedown",()=>{
        $("#social-media").css({"animation":"alert","animation-duration":"0.5s","animation-iteration-count":"1","animation-fill-mode":"forward"})
    })
    $("#social-link").on("mouseleave",()=>{
        $("#social-media").css("animation","none");
    })
})

$("#social-collapse").on("mousedown",()=>{
    $("#social-media").css({"top":"29vh","opacity":"100%"});
})
$("#social-collapse").on("mouseup",()=>{
    $("#social-media").css({"top":"-100vh","opacity":"0%"});
    $(".dot").not("#coral-dot, #lilac-dot, #almond-dot, #peach-dot, #violet-dot, #shadow-dot, #green-dot").css("z-index","0");
})

$("#contact-info").on("mousemove",(event)=>{

    let g = event.pageX - $("#contact-info")[0].offsetLeft;
    let h = event.pageY - $("#contact-info")[0].offsetTop;
    $("#contact-info").css({"--g":`${ g }px`, "--h":`${ h }px`});
})

$("#contact").on("click",()=>{
    $("#contact-info").css({"left":"13vw","opacity":"100%"});
    $(".dot").css("z-index","-1");
    $("#social-media").css({"top":"-100vh","opacity":"0%"});
    $("#biography").css({"left":"-100vw","opacity":"0%"});

    $("#contact").on("mousedown",()=>{
        $("#contact-info").css({"animation":"alert","animation-duration":"0.5s","animation-iteration-count":"1","animation-fill-mode":"forward"})
    })
    $("#contact").on("mouseleave",()=>{
        $("#contact-info").css("animation","none");
    })

})

$("#contact-collapse").on("mousedown",()=>{
    $("#contact-info").css({"left":"10vw","opacity":"100%"});
})

$("#contact-collapse").on("mouseup",()=>{
    $("#contact-info").css({"left":"200vw","opacity":"0%"});
    $(".dot").not("#coral-dot, #lilac-dot, #almond-dot, #peach-dot, #violet-dot, #shadow-dot, #green-dot").css("z-index","0");
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