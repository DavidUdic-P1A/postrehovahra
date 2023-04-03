let scoreA = 0 // skóre hráče A
let scoreB = 0 // skóre hráče B
let gameStarted = false


function showIcon() {
    let icon = Math.randomRange(0, 1) 
    gameStarted = true 
    basic.clearScreen() 
    basic.showIcon(icon) 
    basic.pause(2000) 
    basic.clearScreen() 
}


function checkButton() {
    let buttonPressed = false 
    let buttonA = input.buttonIsPressed(Button.A) 
    let buttonB = input.buttonIsPressed(Button.B) 
    if (buttonA && !buttonB) { 
        buttonPressed = true
        if (gameStarted) { 
            scoreA += 1
        }
    } else if (buttonB && !buttonA) {
        buttonPressed = true
        if (gameStarted) { 
            scoreB += 1
        }
    }
    return buttonPressed
}


function showWinner() {
    gameStarted = false 
    if (scoreA > scoreB) {
        basic.showString("A WIN!")
    } else if (scoreB > scoreA) { 
        basic.showString("B WIN!")
    } else { 
        basic.showString("TIE!")
    }
    basic.pause(3000) 
}