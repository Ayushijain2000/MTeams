$(".meeting_info").click(function(){
    $("#dashBoard").css({display:"flex"}), $(".call_container").css({width:"55%"}) , $(".messenger_container").css({width: "25%"}), $(".notes_cont").css({display:"none"}),  $(".watch_cont").css({position:"absolute" , top: "28.2%" , left: "27%"});; 
 });

 $("#hide_meeting_info").click(function(){
    $("#dashBoard").css({display:"none"}), $(".call_container").css({width:"75%"}) , $(".messenger_container").css({width: "25%"}) ,$(".notes_cont").css({display: "none"});
    $(".watch_cont").css({position:"absolute" , top: "28.2%" , left: "6%"});
 });

 $(".notes_btn").click(function(){
   $(".notes_cont").css({display: "flex"}) ,$("#dashBoard").css({display:"none"}) , $(".call_container").css({width:"55%"}) , $(".messenger_container").css({width: "25%"}),  $(".watch_cont").css({position:"absolute" , top: "28.2%" , left: "27%"});;
 })

 $("#reactionBtn").mouseover(function(){
  $(".emoji_holder").css({display: "flex"});
 });

 $("#reactionBtn").mouseout(function(){
   $(".emoji_holder").css({display: "none"});
  });

$(".emoji_holder").mouseover(function(){
   $(".emoji_holder").css({display: "flex"});
});

$(".emoji_holder").mouseout(function(){
   $(".emoji_holder").css({display: "none"});
});

 