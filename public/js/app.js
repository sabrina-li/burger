$(document).ready(function(){
    console.log("here");
    $('#newBurgerFrom').submit(function(e){
        e.preventDefault();
        if($('#newBurger').val()){
            $.ajax({
                url: "api/burger",
                method:"POST",
                data: {burger_name:$('#newBurger').val()}
            }).then(res=>{
                console.log(res);
                location.reload();
            })
        }
      });

      $('.burger-devour').on('click',function(event){
          
        if($(this).attr('data')){
            $.ajax({
                url: "api/burger",
                method:"PUT",
                data: {id:$(this).attr('data'),devour:true}
            }).then(res=>{
                console.log(res);
                location.reload();
            })
        }
      })
})