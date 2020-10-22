$(function() {

    //Read and display data from endpoint
    $.get('https://private-anon-613824dd4f-wad20postit.apiary-mock.com/posts', function(response) {
        
        for (post of response) { //We go through every post and display its data
            //I created different divs and everything based on given html file.
            let div1 = $('<div class="post">');

            let div2 = $('<div class="post-author">');
            let span = $('<span class="post-author-info">');

            let avatar = $('<img>').attr('src', post.author.avatar);
            let name = $('<small>').text(post.author.firstname + " " + post.author.lastname);
            span.append(avatar);
            span.append(name);

            let date = $('<small>').text(post.createTime)
            div2.append(span);
            div2.append(date);

            div1.append(div2);

            if (post.media != null ){
                let div3 = $('<div class="post-image">');
                if (post.media.type == 'image'){
                    let img = $('<img>').attr('src', post.media.url);
                    div3.append(img);
                }
                if (post.media.type == 'video'){
                    let video = $('<video controls>').attr('src', post.media.url);
                    div3.append(video);
                }

                div1.append(div3);
            }

            let div4 = $('<div class="post-title">');
            let text = $('<h3>').text(post.text);
            div4.append(text);

            div1.append(div4);

            let div5 = $('<div class="post-actions">');
            let button = $('<button>').attr('type',"button").attr('name',"like").attr('class',"like-button").text(post.likes);
            div5.append(button);

            div1.append(div5);
            

            $(".main-container").append(div1);
        }

        
        //Like button interactive - changes color, when liked
        $(".like-button").click(function(){
            $(this).toggleClass('liked')   
        });
    });
    
});

