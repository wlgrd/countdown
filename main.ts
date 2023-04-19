enum RadioMessage {
    message1 = 49434
}
function playSprite () {
    serial.redirectToUSB()
    serial.writeLine("Felix sin microbit")
    basic.showNumber(0)
    mysprite = game.createSprite(2, 2)
    basic.pause(100)
    while (true) {
        mysprite.move(Math.round(Math.map(input.acceleration(Dimension.X), 0, 1023, 0, 4)))
        basic.pause(20)
        mysprite.turn(Direction.Right, 90)
        mysprite.move(Math.round(Math.map(input.acceleration(Dimension.Y), 0, 1023, 0, 4)))
        basic.pause(20)
        mysprite.turn(Direction.Left, 90)
    }
    mysprite.move(1)
}
let mysprite: game.LedSprite = null
playSprite()
while (true) {
    if (input.logoIsPressed()) {
        for (let index = 0; index <= 2; index++) {
            music.playTone(262, music.beat(BeatFraction.Quarter))
            basic.showNumber(3 - index)
        }
        basic.clearScreen()
        music.setVolume(195)
        music.playTone(494, music.beat(BeatFraction.Whole))
        basic.showString("GO!")
    }
}
