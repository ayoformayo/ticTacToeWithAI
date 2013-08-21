function onSuccess(success){
  console.log(success)
}
$(document).ready(function() {
  $('td').on('click', function(){
    var datum = $(this).index()
    var row = $(this).parent().index()
    var board = []
    $('td').each(function(){
      board.push($(this).attr('class'))
    })
    var coordinates = {column: datum, row: row, board: board}
    // console.log(row)
    $.post('/',coordinates,onSuccess)
  })
});
