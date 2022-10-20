$('a.btn').on('click', function(e){
    var texto_boton = 'follow';
    $(this).toggleClass('btn-following');
    if( $(this).hasClass('btn-following') )
      texto_boton = 'unfollow';
    $(this).text( texto_boton );
  });