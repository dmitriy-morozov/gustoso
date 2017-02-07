$(document).ready(function()  {
	   $(".accordeon-item--first").css('z-index', '5');
	   $(".accordeon-item--second").css('z-index', '2');
       $(".accordeon-item--third").css('z-index', '1');
	}); 
$('#accordeon-item--first').click(function() {
            if($("#accordeon-item--first").is(':checked')) { 
               $(".accordeon-item--first").css('z-index', '5');
               $(".accordeon-item--second").css('z-index', '2');
               $(".accordeon-item--third").css('z-index', '1');
            };
         
         });
         
         $('#accordeon-item--second').click(function() {
            if($("#accordeon-item--second").is(':checked')) { 
               $(".accordeon-item--second").css('z-index', '5');
               $(".accordeon-item--first").css('z-index', '1');
               $(".accordeon-item--third").css('z-index', '2');
            };
         
         });
         
         $('#accordeon-item--third').click(function() {
            if($("#accordeon-item--third").is(':checked')) { 
               $(".accordeon-item--third").css('z-index', '5');
               $(".accordeon-item--first").css('z-index', '1');
               $(".accordeon-item--second").css('z-index', '2');
            };
         
         });
