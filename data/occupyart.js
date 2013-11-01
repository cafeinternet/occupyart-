self.port.on("replacePage", function(message){
    $.ajax({
        url: "http://ocuppytadeo.iriscouch.com/exhibicion/_design/all_works/_view/all_works",
        type: 'get',
        dataType: 'jsonp',
        success: function(data){
            $.each(data.rows, function(index, element){
                var autor = element.value.autor;
                var titulo = element.value.titulo;
                var img = element.value.img;
                var comentario = element.value.comentario;
                                                                    
                console.log(img);
                //aca se modifica la pagina
                $("body").html('<img src="'+img+'">');
        })
      }
    }

});
