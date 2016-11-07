let state = {
  power: false,
  masterVolume: 1,
  tempo: 120,
  playing: false,
  step: 0,
  waveShapes: {
    shape1: `sine`,
    shape2: `sine`,
    shape3: `sine`,
    shape4: `sine`,
    shape5: `sine`,
  },
  knobs: {
    knob1: {
      value: 0,
      name: `Knob 1`,
    },
    knob2: {
      value: 0,
      name: `Knob 2`,
    },
    knob3: {
      value: 0,
      name: `Knob 3`,
    },
    knob4: {
      value: 0,
      name: `Knob 4`,
    },
    knob5: {
      value: 0,
      name: `Knob 5`,
    },
  },
  sliders: {
    slider1: {
      value: 0,
      name: `Slider 1`,
    },
    slider2: {
      value: 0,
      name: `Slider 2`,
    },
    slider3: {
      value: 0,
      name: `Slider 3`,
    },
    slider4: {
      value: 0,
      name: `Slider 4`,
    },
  },
  activeKeys: [],
  octave: 2,
}

/*----------------------------------------------------------------------------*/

export default state
