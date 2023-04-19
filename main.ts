enum RadioMessage {
    message1 = 49434
}
function welcome_face () {
    basic.showLeds(`
        # . # . #
        . # # # .
        . . # . .
        . # # # .
        . # . # .
        `)
    basic.pause(50)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . # # # .
        . # . # .
        `)
    basic.pause(50)
    basic.showLeds(`
        # . # . #
        . # # # .
        . . # . .
        . # # # .
        . # . # .
        `)
    basic.pause(50)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . # # # .
        . # . # .
        `)
    basic.pause(50)
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        # . . . #
        . # # # .
        `)
}
function playSprite () {
    led.setBrightness(255)
    // Create a dot in the middle of the matrix
    my_dot = game.createSprite(2, 2)
    while (true) {
        if (input.acceleration(Dimension.Y) < -40) {
            y = y - 1
            my_dot.change(LedSpriteProperty.Y, -1)
        } else if (input.acceleration(Dimension.Y) > 40) {
            y = y + 1
            my_dot.change(LedSpriteProperty.Y, 1)
        } else {
        	
        }
        basic.pause(50)
        if (input.acceleration(Dimension.X) < -40) {
            x = x - 1
            my_dot.change(LedSpriteProperty.X, -1)
        } else if (input.acceleration(Dimension.X) > 40) {
            x = x + 1
            my_dot.change(LedSpriteProperty.X, 1)
        } else {
        	
        }
        basic.pause(50)
    }
}
let x = 0
let y = 0
let my_dot: game.LedSprite = null
serial.redirectToUSB()
serial.writeLine("Felix sin microbit")
welcome_face()
music.setVolume(208)
while (true) {
    serial.writeLine("" + (input.soundLevel()))
    basic.pause(50)
    if (input.logoIsPressed()) {
        for (let index = 0; index <= 2; index++) {
            music.playTone(262, music.beat(BeatFraction.Quarter))
            basic.showNumber(3 - index)
        }
        basic.clearScreen()
        music.playTone(494, music.beat(BeatFraction.Whole))
        basic.showString("GO!")
        playSprite()
    }
}
