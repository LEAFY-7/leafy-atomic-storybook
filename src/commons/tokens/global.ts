export const globalToken = {
  green: { value: "#00927a", type: "color", description: "primary" },
  lgreen: { value: "#80d0c7", type: "color", description: "secondary" },
  white: { value: "#fafafa", type: "color", description: "basic" },
  lgrey: { value: "#dfdfdf", type: "color", description: "basic" },
  grey: { value: "#859398", type: "color", description: "basic" },
  black: { value: "#0e111b", type: "color", description: "basic" },
  red: { value: "#df5555", type: "color", description: "semantic" },
  yellow: { value: "#ffd500", type: "color", description: "semantic" },
  blossom: { value: "#fff8f84d", type: "color", description: "chat bg" },

  "small-shadow": {
    value: {
      x: 5,
      y: 5,
      blur: 10,
      spread: 0,
      color: "#0e111b",
      type: "dropShadow",
    },
    type: "boxShadow",
    description: "outer shadow for small div",
  },
  "big-shadow": {
    value: {
      x: 5,
      y: 30,
      blur: 30,
      spread: 0,
      color: "#0e111b",
      type: "dropShadow",
    },
    type: "boxShadow",
    description: "outer shadow for big div",
  },
  shadow: { value: 15, type: "opacity", description: "opacity for shadow" },
  show: { value: "true", type: "boolean" },
  hide: { value: "false", type: "boolean" },
};
