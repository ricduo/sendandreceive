radio.onReceivedValue(function (name, value) {
    if (name == "xval") {
        x = value
    } else if (name == "yval") {
        y = value
    } else if (name == "zval") {
        z = value
    }
})
let z = 0
let y = 0
let x = 0
radio.setGroup(99)
basic.forever(function () {
    radio.sendValue("xval", input.acceleration(Dimension.X))
    radio.sendValue("yval", input.acceleration(Dimension.Y))
    radio.sendValue("zval", input.acceleration(Dimension.Z))
    basic.showNumber(input.acceleration(Dimension.X))
    basic.showNumber(input.acceleration(Dimension.Y))
    basic.showNumber(input.acceleration(Dimension.Z))
})
basic.forever(function () {
    serial.writeValue("x", x)
    serial.writeValue("y", y)
    serial.writeValue("z", z)
})
