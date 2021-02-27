const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'] // white keys 
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'] // black keys

const keys = document.querySelectorAll('.key') // key elements
const whiteKeys = document.querySelectorAll('.key.white') // we move all white and black keys to theis variables here in order to use below.az
const blackKeys = document.querySelectorAll('.key.black')

keys.forEach(key => {
  key.addEventListener('click', () => playNote(key)) // whenever we click on a key an event will be caught and playNote will be called
})

// other than jmouse click this piano will listen to the keys defined above and when keydown  this event listener will Worker.
document.addEventListener('keydown', e => { 
  if (e.repeat) return // if the key pressed for a while dont do any thing in order to play the note once.
  const key = e.key
  const whiteKeyIndex = WHITE_KEYS.indexOf(key) 
  const blackKeyIndex = BLACK_KEYS.indexOf(key)

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]) // if there is a key pressed play the index  of that letter's note
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.musicalnote) // the musicalnote variable comes from the html page.
  noteAudio.currentTime = 0 // catches the next click or hit without waiting the sound to finish
  noteAudio.play()
  key.classList.add('active') // change the color when you hit the key.
  noteAudio.addEventListener('ended', () => { // audio finish olunca ended becomes true and the change color removed
    key.classList.remove('active')
  })
}