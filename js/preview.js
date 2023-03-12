
export class Preview{
  output;
  jsonOutput;
  constructor(previewInput){
    this.output = JSON.parse(JSON.stringify(previewInput));
  }

  call(){
    this.displayJson();
    this.displayHTML();
  }
  displayJson(){
    this.jsonOutput = JSON.parse(JSON.stringify(this.output));
    this.jsonOutput.blocks = this.jsonOutput.blocks.map((item) => {
      delete item.blockID
      return item;
    })
    document.querySelector('#output-monospace').innerHTML =  this.syntaxHighlight(JSON.stringify(this.jsonOutput, undefined, 4))
  }
  displayHTML(){
    var template = Handlebars.templates.preview(this.output)
    document.querySelector('.output').innerHTML = template;
  }
  syntaxHighlight(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
  }
}


