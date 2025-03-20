// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorEl =document.getElementById("modal")
errorEl.classList.add ("hidden")
const errorMsgEl = document.getElementById("modal-message")
const heartEls = document.querySelectorAll(".like-glyph")
heartEls.forEach(heartEl => {
    heartEl.addEventListener('click',function(){
      mimicServerCall()
        .then( () => {
          if(heartEl.innerText === EMPTY_HEART){
            heartEl.innerText = FULL_HEART
            heartEl.classList.add ("activated-heart")
          }
          else{
            heartEl.innerText = EMPTY_HEART
            heartEl.classList.remove("activated-heart")
          }
        })
        .catch(function(error){
          errorMsgEl.innerText = error
          errorEl.classList.remove('hidden')

          setTimeout(function(){
            errorEl.classList.add ("hidden")
          }, 3000)
        })
    })
    
});


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
