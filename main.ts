input.onButtonPressed(Button.A, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    led.plot(4, 0)
})
input.onGesture(Gesture.Shake, function () {
    led.unplot(4, 0)
    led.unplot(0, 0)
})
basic.forever(function () {
	
})
