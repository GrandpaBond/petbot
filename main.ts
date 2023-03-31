function setup_eyes () {
    EYES_LEFT = 315
    EYES_MAD = 874
    EYES_OPEN = 891
    EYES_POP = 561
    EYES_RIGHT = 603
    EYES_SAD = 347
    EYES_SHUT = 27
}
function show_mouth (mouth: number) {
    pixels = mouth
    for (let index = 0; index <= 14; index++) {
        x = 2 + index % 5
        y = Math.floor(index / 5)
        if (pixels % 2 == 1) {
            led.plot(x, y)
        } else {
            led.unplot(x, y)
        }
        pixels = Math.floor(pixels / 2)
    }
}
function setup_mouths () {
    MOUTH_FLAT = 448
    MOUTH_GRIN = 14880
    MOUTH_HMM = 14464
    MOUTH_LEFT = 6400
    MOUTH_OK = 4544
    MOUTH_OPEN = 4420
    MOUTH_RIGHT = 12352
    MOUTH_SHOUT = 14784
    MOUTH_SULK = 17856
}
function make_eyes (row0: number, row1: number) {
    binary = 0
    bit_value = 1
    pixels = row0
    for (let x = 0; x <= 4; x++) {
        bit_value = 0
    }
    pixels = row1
    for (let x = 0; x <= 4; x++) {
    	
    }
    return binary
}
function show_eyes3 (eyes: number) {
    pixels = eyes
    for (let index = 0; index <= 9; index++) {
        x = index % 5
        y = Math.floor(index / 5)
        if (pixels % 2 == 1) {
            led.plot(x, y)
        } else {
            led.unplot(x, y)
        }
        pixels = Math.floor(pixels / 2)
    }
}
let bit_value = 0
let binary = 0
let MOUTH_SULK = 0
let MOUTH_SHOUT = 0
let MOUTH_RIGHT = 0
let MOUTH_OPEN = 0
let MOUTH_OK = 0
let MOUTH_LEFT = 0
let MOUTH_HMM = 0
let MOUTH_GRIN = 0
let MOUTH_FLAT = 0
let y = 0
let x = 0
let pixels = 0
let EYES_SHUT = 0
let EYES_SAD = 0
let EYES_RIGHT = 0
let EYES_POP = 0
let EYES_OPEN = 0
let EYES_MAD = 0
let EYES_LEFT = 0
setup_eyes()
setup_mouths()
basic.pause(1000)
basic.pause(200)
basic.pause(1000)
basic.pause(2000)
basic.pause(1000)
basic.pause(1000)
basic.forever(function () {
	
})
