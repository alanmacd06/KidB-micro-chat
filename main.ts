input.onButtonPressed(Button.A, function () {
    radio.sendString("Oi mate!")
})
radio.onReceivedString(function (receivedString) {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Pippy")
})
radio.setGroup(1)
