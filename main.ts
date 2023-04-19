enum RadioMessage {
    message1 = 49434
}
serial.redirectToUSB()
serial.writeLine("Felix sin microbit")
while (true) {
    if (input.buttonIsPressed(Button.A)) {
        for (let index = 0; index <= 2; index++) {
            music.playTone(262, music.beat(BeatFraction.Quarter))
            basic.showNumber(3 - index)
        }
        music.playTone(392, music.beat(BeatFraction.Whole))
        basic.clearScreen()
        basic.showString("GO!")
    }
}
