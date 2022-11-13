for (let X = 0; X <= 4; X++) {
    for (let Y = 0; Y <= X; Y++) {
        led.plot(X, Y)
        basic.pause(200)
    }
}
basic.forever(function () {
	
})
