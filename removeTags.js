var data = "<html><head><title>My Title</title></head><body><h1>Heading</h1><p>This is a paragraph</p></body></html>";

function html(data){
    var removeStartTags = new RegExp("<([a-z0-9\=\"]+)>","gi");
    var removeEndTags= /<\/(\w)+>/g;
    var temp = data.replace(removeStartTags, '$1:{');
    var output = temp.replace(removeEndTags, '}');
    return console.log(output);
}

html(data);