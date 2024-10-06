/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      keyframes: {
        randomMove1: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(20px, -20px)" },
          "50%": { transform: "translate(-20px, 20px)" },
          "75%": { transform: "translate(10px, -15px)" },
        },
        randomMove2: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(-10px, 10px)  rotate(90deg)" },

          "50%": { transform: "translate(15px, -10px) rotate(-10deg)" },
          "75%": { transform: "translate(-20px, 5px) rotate(180deg)" },
        },
        randomMove3: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(30px, 10px)" },
          "50%": { transform: "translate(-15px, -20px)" },
          "75%": { transform: "translate(10px, 20px)" },
        },
      },
      animation: {
        random1: "randomMove1 3s infinite ease-in-out",
        random2: "randomMove2 7s infinite ease-in-out",
        random3: "randomMove3 10s infinite ease-in-out",
      },
	  
	 
    },
	
  },
  plugins: [require("tailwindcss-animate")],
};
