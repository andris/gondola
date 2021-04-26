input.buttonA.onEvent(ButtonEvent.Click, function () {
    light.showAnimation(light.rainbowAnimation, 500)
    light.showRing(
    `green green green green green green green green green green`
    )
    servos.A2.run(50)
    pause(52000)
    servos.A2.stop()
    light.showRing(
    `purple white pink purple blue green yellow purple orange red`
    )
    pause(2000)
    light.showRing(
    `orange orange orange orange orange orange orange orange orange orange`
    )
    servos.A2.run(-50)
    pause(52000)
    servos.A2.stop()
    light.showRing(
    `purple white pink purple blue green yellow purple orange red`
    )
})
forever(function () {
	
})
