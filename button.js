  function button_event(){
    var word='movie'
  while(true){
    var answer=prompt(word)
    if(word[word.length-1]===answer[0]){
      word=answer;
    }else{
      alert('write again')
    }
   }
  }


  var Body = {
    setBackColor:function(color){
      document.querySelector('body').style.backgroundColor=color;
    },
    setColor:function(color){
      document.querySelector('body').style.color=color;
    }
  }

    function handler(self){
    var target=document.querySelector('body')
    if(self.value==='night'){
      Body.setBackColor('black');
      Body.setColor('white');
      self.value='day';
    } else {
      Body.setBackColor('white');
      Body.setColor('black');
      self.value='night';
    }
  }



function page(){
  if(confirm('Go to the next page') == true){
    location.replace('1.html');
  } else {
      return;
  }
}


function page1(){
  if(confirm('Back to the previous page') == true){
    location.replace('index.html');
  } else {
    return;
  }
}

function page2(){
  if(confirm('Go to the next page') == true){
    location.replace('2.html');
  } else {
    return;
  }
}


function page3(){
  if(confirm('Back to the previous page') == true){
    location.replace('1.html');
  } else {
    return;
  }
}

function page4(){
  if(confirm('Go to the next page') == true){
    location.replace('3.html');
  } else {
    return;
  }
}
