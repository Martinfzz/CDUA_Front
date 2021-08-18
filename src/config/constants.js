const prod = {
  url: {
    BASE_URL: "",
  },
};

const dev = {
  url: {
    BASE_URL: "http://603f7de14430.ngrok.io",
  },
};

const config = process.env.NODE_ENV === "development" ? dev : prod;

export default config;
