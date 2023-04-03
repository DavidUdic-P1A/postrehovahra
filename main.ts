let scoreA = 0 
let scoreB = 0 
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

basic.forever(function () {
    if (!gameStarted) { 
        basic.showString("PRESS A OR B")
        while (!checkButton()) {
            
        }
        showIcon()
    } else { 
        if (input.buttonIsPressed(Button.AB)) { 
            showWinner() 
            scoreA = 0 
            scoreB = 0
        } else { 
            checkButton()
        }
    }
})