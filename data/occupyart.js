unsafeWindow.doThings = function(data){
    $("#preface").append('<ul class="galeria-mod"></ul>');
    var el = $(".galeria-mod");

    $.each(data.rows, function(index, content){
        el.append('<li><img src="'+content.value.img+'"></li>')

        if(index == data.total_rows-1){
            console.log("bang");
            
            el.bxSlider();
        }
    });

    //aca modificar los CSS
}


self.port.on("replacePage", function(message){

    var el = $("#preface");
    el.empty();

    $.ajax({
        url: "http://ocuppytadeo.iriscouch.com/exhibicion/_design/all_works/_view/all_works",
        type: 'get',
        dataType: 'jsonp',
        //jsonp: 'jsonp',
        jsonpCallback: 'window.doThings'       
    });
});




