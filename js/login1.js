define(['jquery'],function($){
    function loginTest(){
        $('.body button').click(function(){
            $.ajax({
                type:'post',
                url:'../php/login.php',
                success:function(res){
                    console.log(res);
                },
                error:function(err){
                    console.log(err);
                }
            })
        })
       
    }
    return {

    }
})