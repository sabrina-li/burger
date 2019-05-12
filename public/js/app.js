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
      
})