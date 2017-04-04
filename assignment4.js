// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types

(function() {
  // Magic!
  console.log('Keepin\'n it clean with an external script!');
  var arr;
  $.get('http://www.mattbowytz.com/simple_api.json?data=programming', function(d){
  		arr= d.data;			
  }, 'json');
  $(".flexsearch-input").bind("keyup", function(){
  		var input= $(this);
  		var text= input.val();
  		var html= '';
  		if(text.length!= 0){
  			for(var i= 0; i< arr.length; i++){
  				if(arr[i].substring(0, text.length)== text){
  					html+= '<li><a href= https://www.google.com/#q='+arr[i]+'*&>'+ arr[i]+ '</a></li>';
  				}
  			}
  		}
  		$("#result").html(html);
  });
})();