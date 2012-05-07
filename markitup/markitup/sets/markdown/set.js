// -------------------------------------------------------------------
// markItUp!
// -------------------------------------------------------------------
// Copyright (C) 2008 Jay Salvat
// http://markitup.jaysalvat.com/
// -------------------------------------------------------------------
// MarkDown tags example
// http://en.wikipedia.org/wiki/Markdown
// http://daringfireball.net/projects/markdown/
// -------------------------------------------------------------------
// Feel free to add more tags
// -------------------------------------------------------------------
mySettings = {
  previewParserPath:  '',
  onShiftEnter:    {keepDefault:false, openWith:'\n\n'},
  markupSet: [
    {name:'Naslov 1', key:'1', openWith:'## ', placeHolder:'Naslov...' },
    {name:'Naslov 2', key:'2', openWith:'### ', placeHolder:'Naslov...' },
    {name:'Naslov 3', key:'3', openWith:'#### ', placeHolder:'Naslov...' },
    {name:'Naslov 4', key:'4', openWith:'##### ', placeHolder:'Naslov...' },
    {name:'Naslov 5', key:'5', openWith:'###### ', placeHolder:'Naslov...' },
    {name:'Naslov 6', key:'6', openWith:'####### ', placeHolder:'Naslov...' },
    {separator:'---------------' },
    {name:'Bold', key:'B', openWith:'**', closeWith:'**'},
    {name:'Italic', key:'I', openWith:'_', closeWith:'_'},
    {separator:'---------------' },
    {name:'Centriraj naslov', className:'center', replaceWith:function(markItUp){
      return '[CENTER]\r\n' + markItUp.selection + '\r\n[/CENTER]\r\n';
    }},
    {separator:'---------------' },
    {name:'Novi red', openWith:'[br]\r\n', className:'pilcrow' },
    {separator:'---------------' },
    {name:'Lista s točkama', openWith:'- ' },
    {name:'Numerirana lista', openWith:function(markItUp) {
      return markItUp.line+'. ';
    }},
    {separator:'---------------' },
    {name:'Slika (s eksternog servera)', key:'P', replaceWith:'![[![Opisni tekst]!]]([![Url:!:http://]!] "[![Title]!]")'},
    {name:'Link', key:'L', openWith:'[', closeWith:']([![Url:!:http://]!] "[![Title]!]")', placeHolder:'Opis...' },
    {separator:'---------------'},
    {name:'Grb RH', openWith:'[RH-GRB]\r\n', className:'GrbRH' }
    //{name:'Citat', openWith:'> '},
    //{name:'Code Block / Code', openWith:'(!(\t|!|`)!)', closeWith:'(!(`)!)'}
  ]
}

// mIu nameSpace to avoid conflict.
miu = {
  markdownTitle: function(markItUp, char) {
    heading = '';
    n = $.trim(markItUp.selection||markItUp.placeHolder).length;
    for(i = 0; i < n; i++) {
      heading += char;
    }
    return '\n'+heading;
  }
}
