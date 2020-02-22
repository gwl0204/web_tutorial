  function ndchanger(self){
      var tag=document.querySelector('body');
      if(self.value==='night')
      { 
        tag.style.backgroundColor='black';
        tag.style.color='white';
        self.value='day';
      }
      else
      {
        tag.style.backgroundColor='white';
        tag.style.color='black';
        self.value='night';
      }
  }