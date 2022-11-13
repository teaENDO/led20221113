let X = 0
let Y = 0
basic.forever(function () {
    X = 0
    Y = 0
    led.plot(0, 0)
    basic.pause(100)
    X += 1
    for (let X = 0; X <= 4; X++) {
        for (let Y = 0; Y <= X; Y++) {
            led.plot(X, Y)
            basic.pause(100)
        }
    }
})
