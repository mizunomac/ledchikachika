function OnOff (port: number) {
    if (port == 0) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        if (port == 1) {
            pins.digitalWritePin(DigitalPin.P1, 1)
        } else {
            pins.digitalWritePin(DigitalPin.P2, 1)
        }
    }
    basic.pause(500)
    if (port == 0) {
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else {
        if (port == 1) {
            pins.digitalWritePin(DigitalPin.P1, 0)
        } else {
            pins.digitalWritePin(DigitalPin.P2, 0)
        }
    }
    basic.pause(500)
}
basic.forever(function () {
    OnOff(0)
    OnOff(1)
    OnOff(2)
})
