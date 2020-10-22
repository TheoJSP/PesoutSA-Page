$(document).ready(()=>{
    //SCROLL 
    $(window).scroll(()=>{
        if(this.scrollY > 20){
            $(".navbar").addClass("sticky")
        }else{
            $(".navbar").removeClass("sticky")
        }
    });
})