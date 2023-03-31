function show_eyes (eyes: number) {
    pixels = eyes % 32
    for (let x = 0; x <= 4; x++) {
        if (pixels % 2 == 1) {
            led.plot(4 - x, 0)
        } else {
            led.unplot(4 - x, 0)
        }
        pixels = Math.round(pixels / 2)
    }
    pixels = Math.round(eyes / 32)
    for (let x = 0; x <= 4; x++) {
        if (pixels % 2 == 1) {
            led.plot(4 - x, 1)
        } else {
            led.unplot(4 - x, 1)
        }
        pixels = Math.round(pixels / 2)
    }
}
function setup_eyes () {
    EYES_LEFT = 882
    EYES_MAD = 347
    EYES_OPEN = 891
    EYES_POP = 561
    EYES_RIGHT = 873
    EYES_SAD = 874
    EYES_SHUT = 864
}
function show_mouth (mouth: number) {
    pixels = mouth % 32
    others = Math.round(mouth / 32)
    for (let x = 0; x <= 4; x++) {
        if (pixels % 2 == 1) {
            led.plot(4 - x, 2)
        } else {
            led.unplot(4 - x, 2)
        }
        pixels = Math.round(pixels / 2)
    }
    pixels = others % 32
    for (let x = 0; x <= 4; x++) {
        if (pixels % 2 == 1) {
            led.plot(4 - x, 3)
        } else {
            led.unplot(4 - x, 3)
        }
        pixels = Math.round(pixels / 2)
    }
    pixels = Math.round(others / 32)
    for (let x = 0; x <= 4; x++) {
        if (pixels % 2 == 1) {
            led.plot(4 - x, 4)
        } else {
            led.unplot(4 - x, 4)
        }
        pixels = Math.round(pixels + 2)
    }
}
function setup_mouths () {
    MOUTH_FLAT = 448
    MOUTH_GRIN = 558
    MOUTH_HMM = 142
    MOUTH_LEFT = 76
    MOUTH_OK = 452
    MOUTH_OPEN = 4420
    MOUTH_RIGHT = 262
    MOUTH_SHOUT = 462
    MOUTH_SULK = 465
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
let bit_value = 0
let binary = 0
let MOUTH_SULK = 0
let MOUTH_SHOUT = 0
let MOUTH_OPEN = 0
let MOUTH_OK = 0
let MOUTH_HMM = 0
let others = 0
let EYES_SAD = 0
let EYES_POP = 0
let EYES_MAD = 0
let pixels = 0
let MOUTH_LEFT = 0
let EYES_LEFT = 0
let MOUTH_RIGHT = 0
let EYES_RIGHT = 0
let MOUTH_GRIN = 0
let EYES_SHUT = 0
let MOUTH_FLAT = 0
let EYES_OPEN = 0
setup_eyes()
setup_mouths()
show_eyes(EYES_OPEN)
show_mouth(MOUTH_FLAT)
basic.pause(1000)
show_eyes(EYES_SHUT)
basic.pause(200)
show_eyes(EYES_OPEN)
show_mouth(MOUTH_GRIN)
basic.pause(1000)
show_mouth(MOUTH_FLAT)
basic.pause(2000)
show_eyes(EYES_RIGHT)
show_mouth(MOUTH_RIGHT)
basic.pause(1000)
show_eyes(EYES_LEFT)
show_mouth(MOUTH_LEFT)
basic.pause(1000)
show_mouth(MOUTH_FLAT)
basic.forever(function () {
	
})
