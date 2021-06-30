$(".meeting_info").click(function(){
    $("#dashBoard").css({display:"flex"}), $(".call_container").css({width:"55%"}) , $("messenger_container").css({width: "25%"}), $(".notes_cont").css({display:"none"}); 
 });

 $("#hide_meeting_info").click(function(){
    $("#dashBoard").css({display:"none"}) , $(".call_container").css({width:"75%"}) , $("messenger_container").css({width: "25%"}) ,$(".notes_cont").css({display: "none"});
 });

 $(".notes_btn").click(function(){
   $(".notes_cont").css({display: "flex"}) ,$("#dashBoard").css({display:"none"}) , $(".call_container").css({width:"55%"}) , $("messenger_container").css({width: "25%"});
 })
