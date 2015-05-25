module.exports = function(ctx){
  var tag = ctx.extend.tag;
    tag.register('classtag', function(args, content){	
	var result = '';

	//    args.unshift('pullquote');
	result += '<div class="' + args[0] + '">';
	if(args[1]){
	    result += '<div class="' + args[1] + '">';
	}
	result += ctx.render.renderSync({text: content, engine: 'markdown'});
	result += '</div>';
	if(args[1]){
	    result += '</div>';
	}
	return result;    
}, {ends: true});
