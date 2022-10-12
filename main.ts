let A = 0
input.onButtonPressed(Button.A, function () {
    A = 1
    while (A == 1) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    }
})
input.onButtonPressed(Button.B, function () {
    A = 0
})
basic.forever(function () {
	
})
