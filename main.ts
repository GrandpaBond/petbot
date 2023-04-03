function all_mouths () {
    show_eyes(EYES_OPEN)
    show_mouth(MOUTH_FLAT)
    basic.pause(1000)
    show_mouth(MOUTH_GRIN)
    basic.pause(1000)
    show_mouth(MOUTH_HMMM)
    basic.pause(1000)
    show_mouth(MOUTH_LEFT)
    basic.pause(1000)
    show_mouth(MOUTH_OK)
    basic.pause(1000)
    show_mouth(MOUTH_OPEN)
    basic.pause(1000)
    show_mouth(MOUTH_RIGHT)
    basic.pause(1000)
    show_mouth(MOUTH_SHOUT)
    basic.pause(1000)
    show_mouth(MOUTH_SULK)
    basic.pause(1000)
}
function show_eyes (eyes: number) {
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
function maybe_blink () {
    if (input.runningTime() > next_blink && !(blinking)) {
        show_eyes(EYES_SHUT)
        blinking = true
    }
    if (blinking && input.runningTime() > next_blink + blinktime) {
        show_eyes(my_eyes)
        next_blink = input.runningTime() + randint(blinkgap, 2 * blinkgap)
        blinking = false
    }
}
input.onButtonPressed(Button.A, function () {
    my_eyes = EYES_LEFT
    my_mouth = MOUTH_LEFT
    show_eyes(my_eyes)
    show_mouth(my_mouth)
    basic.pause(500)
    mood_level = 100
    my_mood = MOOD_CURIOUS
})
function setup_eyes () {
    EYES_LEFT = 873
    EYES_MAD = 347
    EYES_OPEN = 891
    EYES_POP = 561
    EYES_RIGHT = 882
    EYES_SAD = 874
    EYES_SHUT = 864
}
function show_mouth (mouth: number) {
    pixels = mouth
    for (let index = 0; index <= 14; index++) {
        x = index % 5
        y = 2 + Math.floor(index / 5)
        if (pixels % 2 == 1) {
            led.plot(x, y)
        } else {
            led.unplot(x, y)
        }
        pixels = Math.floor(pixels / 2)
    }
}
input.onGesture(Gesture.SixG, function () {
    my_mood = MOOD_ANGRY
    mood_level = 100
})
function all_eyes () {
    show_mouth(MOUTH_FLAT)
    show_eyes(EYES_OPEN)
    basic.pause(1000)
    show_eyes(EYES_SHUT)
    basic.pause(1000)
    show_eyes(EYES_LEFT)
    basic.pause(1000)
    show_eyes(EYES_RIGHT)
    basic.pause(1000)
    show_eyes(EYES_SAD)
    basic.pause(1000)
    show_eyes(EYES_MAD)
    basic.pause(1000)
    show_eyes(EYES_POP)
    basic.pause(1000)
}
input.onButtonPressed(Button.B, function () {
    my_eyes = EYES_RIGHT
    my_mouth = MOUTH_RIGHT
    show_eyes(my_eyes)
    show_mouth(my_mouth)
    basic.pause(500)
    my_mood = MOOD_CURIOUS
    mood_level = 100
})
function maybe_react () {
    mood_level += -1
    if (mood_level > 50) {
        if (my_mood == MOOD_AWAKE) {
            my_eyes = EYES_OPEN
            my_mouth = MOUTH_FLAT
        } else if (my_mood == MOOD_HAPPY) {
            my_eyes = EYES_OPEN
            my_mouth = MOUTH_GRIN
        } else if (my_mood == MOOD_SAD) {
            my_eyes = EYES_SAD
            my_mouth = MOUTH_SULK
        } else if (my_mood == MOOD_ASLEEP) {
            my_eyes = EYES_SHUT
            my_mouth = MOUTH_OPEN
        } else if (my_mood == MOOD_ANGRY) {
            my_eyes = EYES_MAD
            my_mouth = MOUTH_SHOUT
        } else if (my_mood == MOOD_CURIOUS) {
            my_eyes = EYES_POP
            my_mouth = MOUTH_OK
        }
    } else if (mood_level < 0) {
        blinktime += 100
        blinkgap += -100
    } else if (mood_level < -50) {
        my_mood = MOOD_ASLEEP
    } else if (mood_level < -500) {
        my_mood = MOOD_DEAD
        basic.showIcon(IconNames.Skull)
    }
}
function setup_mouths () {
    MOUTH_FLAT = 448
    MOUTH_GRIN = 14880
    MOUTH_HMMM = 14464
    MOUTH_LEFT = 6176
    MOUTH_OK = 4544
    MOUTH_OPEN = 4420
    MOUTH_RIGHT = 12800
    MOUTH_SHOUT = 14784
    MOUTH_SULK = 17856
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
function setup_moods () {
    MOOD_DEAD = -1
    MOOD_AWAKE = 0
    MOOD_HAPPY = 1
    MOOD_SAD = 2
    MOOD_ASLEEP = 3
    MOOD_ANGRY = 4
    MOOD_CURIOUS = 5
}
function tryout () {
    show_eyes(EYES_OPEN)
    show_mouth(MOUTH_FLAT)
    basic.pause(1000)
    show_eyes(EYES_SHUT)
    basic.pause(200)
    show_eyes(EYES_OPEN)
    basic.pause(1000)
    show_mouth(MOUTH_GRIN)
    basic.pause(2000)
    show_mouth(MOUTH_FLAT)
    basic.pause(5000)
    show_eyes(EYES_SAD)
    show_mouth(MOUTH_SULK)
    basic.pause(1000)
    show_eyes(EYES_SHUT)
    basic.pause(200)
    show_eyes(EYES_SAD)
    basic.pause(1000)
    show_mouth(MOUTH_GRIN)
    basic.pause(2000)
    show_mouth(MOUTH_FLAT)
    basic.pause(5000)
    basic.pause(1000)
    basic.pause(1000)
}
let MOOD_DEAD = 0
let MOOD_ASLEEP = 0
let MOOD_SAD = 0
let MOOD_HAPPY = 0
let MOOD_ANGRY = 0
let EYES_SAD = 0
let EYES_RIGHT = 0
let EYES_POP = 0
let EYES_MAD = 0
let MOOD_CURIOUS = 0
let mood_level = 0
let my_mouth = 0
let EYES_LEFT = 0
let my_eyes = 0
let EYES_SHUT = 0
let blinking = false
let y = 0
let x = 0
let pixels = 0
let MOUTH_SULK = 0
let MOUTH_SHOUT = 0
let MOUTH_RIGHT = 0
let MOUTH_OPEN = 0
let MOUTH_OK = 0
let MOUTH_LEFT = 0
let MOUTH_HMMM = 0
let MOUTH_GRIN = 0
let MOUTH_FLAT = 0
let EYES_OPEN = 0
let MOOD_AWAKE = 0
let my_mood = 0
let next_blink = 0
let blinktime = 0
let blinkgap = 0
pins.touchSetMode(TouchTarget.P1, TouchTargetMode.Capacitive)
pins.touchSetMode(TouchTarget.P2, TouchTargetMode.Capacitive)
setup_eyes()
setup_mouths()
blinkgap = 3000
blinktime = 500
next_blink = input.runningTime() + blinkgap
my_mood = MOOD_AWAKE
maybe_react()
basic.forever(function () {
	
})
loops.everyInterval(200, function () {
    if (!(my_mood == MOOD_DEAD)) {
        maybe_blink()
        maybe_react()
    }
})
