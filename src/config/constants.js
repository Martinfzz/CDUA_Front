const prod = {
  url: {
    BASE_URL: "",
  },
};

const dev = {
  url: {
    BASE_URL: "http://ec8c02bfceac.ngrok.io",
  },
};

const config = process.env.NODE_ENV === "development" ? dev : prod;

export default config;
