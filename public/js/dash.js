$(".meeting_info").click(function(){
    $("#dashBoard").css({display:"flex"}), $(".call_container").css({width:"55%"}) , $(".messenger_container").css({width: "25%"}), $(".notes_cont").css({display:"none"}),  $(".watch_cont").css({position:"absolute" , top: "10%" , left: "40%"}),
    $(".emoji_holder").css({position:"absolute" , bottom: "12%" , right: "20%"});
 });

 $("#hide_meeting_info").click(function(){
    $("#dashBoard").css({display:"none"}), $(".call_container").css({width:"75%"}) , $(".messenger_container").css({width: "25%"}) ,$(".notes_cont").css({display: "none"});
    $(".watch_cont").css({position:"absolute" , top: "10%" , left: "17%"}),
    $(".emoji_holder").css({position:"absolute" , bottom: "12%" , right: "35%"});
 });

 $(".notes_btn").click(function(){
   $(".notes_cont").css({display: "flex"}) ,$("#dashBoard").css({display:"none"}) , $(".call_container").css({width:"55%"}) , $(".messenger_container").css({width: "25%"}),  $(".watch_cont").css({position:"absolute" , top: "10%" , left: "40%"}),
   $(".emoji_holder").css({position:"absolute" , bottom: "12%" , right: "20%"});
 })

 $("#reactionBtn").click(function(){
  $(".emoji_holder").css({display: "flex"});
 });

$(".emoji_holder").mouseover(function(){
   $(".emoji_holder").css({display: "flex"});
});

$(".emoji_holder").mouseout(function(){
   $(".emoji_holder").css({display: "none"});
});

 