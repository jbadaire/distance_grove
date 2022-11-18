let distance = 0
basic.forever(function () {
    distance = grove.measureInCentimetersV2(DigitalPin.P0)
    basic.showNumber(distance)
})
