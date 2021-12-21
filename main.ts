Bit_IR.onPressEvent(RemoteButton.PLAY, function () {
    pins.analogWritePin(AnalogPin.P1, 1023)
})
Bit_IR.onPressEvent(RemoteButton.Add, function () {
    pins.analogWritePin(AnalogPin.P2, 512)
})
Bit_IR.onPressEvent(RemoteButton.NEXT, function () {
    pins.analogWritePin(AnalogPin.P1, 512)
})
Bit_IR.onPressEvent(RemoteButton.EQ, function () {
    pins.analogWritePin(AnalogPin.P2, 1023)
})
Bit_IR.onPressEvent(RemoteButton.Minus, function () {
    pins.analogWritePin(AnalogPin.P2, 0)
})
Bit_IR.onPressEvent(RemoteButton.CH_MINUS, function () {
    pins.analogWritePin(AnalogPin.P0, 0)
})
Bit_IR.onPressEvent(RemoteButton.CH_Add, function () {
    pins.analogWritePin(AnalogPin.P0, 1023)
})
Bit_IR.onPressEvent(RemoteButton.PREV, function () {
    pins.analogWritePin(AnalogPin.P1, 0)
})
Bit_IR.onPressEvent(RemoteButton.CH, function () {
    pins.analogWritePin(AnalogPin.P0, 512)
})
Bit_IR.init(Pins.P8)
