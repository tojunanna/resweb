
$(document).ready(function(){ 
      
    $('#contact_submit').on('click',function(){
        var l = Ladda.create(document.querySelector('#contact_submit'));
        l.start();

        $.post('/',
            {
                name: $('#name').val(),
                email:$('#email').val(),
				subject:$('#subject').val(),
                message:$('#message').val(),
                //csrfmiddlewaretoken:CSRFTOKEN
            }
        )
        .done(function(data){
            
            if (data.data == 100){
                swal('success',data.alert,'success')
                $('#name').val("");
                $('#email').val('');
                $('#message').val('')
                
                l.stop();
                // window.location.reload();
            }else{
                swal("Error!",data.alert,'error')
                l.stop();
                console.log('an error occured');
            }

        })
        .fail(function(){

        })
    })

    $('#subscribe_submit').on('click',function(){
        var l = Ladda.create(document.querySelector('#subscribe_submit'));
        l.start();

        $.post('/subscribe',
            {
                name: " ",
                email:$('#email').val(),
                // message:$('#message').val(),
                csrfmiddlewaretoken:CSRFTOKEN
            }
        )
        .done(function(data){
            
            if (data.data == 100){
                swal('success',data.alert,'success')
                // $('#name').val("");
                $('#email').val('');
                
                
                l.stop();
                // window.location.reload();
            }else{
                swal("Error!",data.alert,'error')
                l.stop();
                console.log('an error occured');
            }

        })
        .fail(function(){

        })
    })




    
})







