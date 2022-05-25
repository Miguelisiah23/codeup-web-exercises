$(function (){
    "use strict"
    $.get("../data/blog.json").done(function (posts){
        posts.forEach(function (post){
            let blog = "<div class='brdr'>"+
                "<h2>" + post.title + "</h2>"
                + "<p>"+ post.date + "</p>" +
                "<p>" + post.content +"</p>" +
                "<p>"+post.categories+"</p>" +
                "</div>"
            $("#posts").append(blog)
        });
    });




});
