// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.like').forEach(likeButton => {
    likeButton.addEventListener('click', function() {
      if (likeButton.classList.contains('activated-heart')) {
        likeButton.classList.remove('activated-heart');
        likeButton.querySelector('.like-glyph').innerHTML = EMPTY_HEART;
      } else {
        mimicServerCall()
          .then(() => {
            likeButton.classList.add('activated-heart');
            likeButton.querySelector('.like-glyph').innerHTML = FULL_HEART;
          })
          .catch(error => {
            const modal = document.getElementById('modal');
            const modalMessage = document.getElementById('modal-message');
            modalMessage.innerText = error;
            modal.classList.remove('hidden');
            setTimeout(function() {
              modal.classList.add('hidden');
            }, 3000); 
          });
      }
    });
  });
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
