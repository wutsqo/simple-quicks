/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2F80ED",
        "dark-gray": "#4F4F4F",
        "light-gray": "#828282",
        "lighter-gray": "#E0E0E0",
        "indicator-orange": "#F8B76B",
        "indicator-blue": "#8785FF",
        "indicator-read": "#EB5757",
        "indicator-yellow": "#F2C94C",
        "chat-1-primary": "#FCEED3",
        "chat-1-secondary": "#E5A443",
        "chat-2-primary": "#EEDCFF",
        "chat-2-secondary": "#9B51E0",
        "chat-3-primary": "#D2F2EA",
        "chat-3-secondary": "#43B78D",
        "sticker-1": "#E9F3FF",
        "sticker-2": "#FDCFA4",
        "sticker-3": "#F9E9C3",
        "sticker-4": "#AFEBDB",
        "sticker-5": "#CBF1C2",
        "sticker-6": "#CFCEF9",
        "sticker-7": "#F9E0FD",
      },
      height: {
        112: "28rem",
        128: "32rem",
        144: "36rem",
        160: "40rem",
        176: "44rem",
        192: "48rem",
        "quick-start": "68px",
        "quick-tab": "60px",
      },
      width: {
        112: "28rem",
        128: "32rem",
        144: "36rem",
        160: "40rem",
        176: "44rem",
        192: "48rem",
        "quick-start": "68px",
        "quick-tab": "60px",
      },
      borderRadius: {
        "5px": "5px",
      },
      fontSize: {
        "2xs": "0.625rem",
      },
    },
  },
  plugins: [],
}
