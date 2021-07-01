import * as feature from "./features.js";

const features = feature.getFeatures();

console.log(features[0].name);

$(".video_cont").click(function(){
    $(".para_right_below").html(features[0].fpara) , $("#featureImage").attr("src" , features[0].img) , $(".feature_name").html(features[0].name); 
});

$(".notes_cont").click(function(){
    $(".para_right_below").html(features[5].fpara) , $("#featureImage").attr("src" , features[5].img) , $(".feature_name").html(features[5].name); 
});

$(".ss_cont").click(function(){
    $(".para_right_below").html(features[3].fpara) , $("#featureImage").attr("src" , features[3].img) , $(".feature_name").html(features[3].name); 
});

$(".rec_cont").click(function(){
    $(".para_right_below").html(features[4].fpara) , $("#featureImage").attr("src" , features[4].img) , $(".feature_name").html(features[4].name); 
});

$(".chat_cont").click(function(){
    $(".para_right_below").html(features[1].fpara) , $("#featureImage").attr("src" , features[1].img) , $(".feature_name").html(features[1].name); 
});

$(".call_cont").click(function(){
    $(".para_right_below").html(features[2].fpara) , $("#featureImage").attr("src" , features[2].img) , $(".feature_name").html(features[2].name); 
});