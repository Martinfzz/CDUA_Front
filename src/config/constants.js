const prod = {
  url: {
    BASE_URL: "",
  },
};

const dev = {
  url: {
    BASE_URL: "http://4a0a820dcc75.ngrok.io",
  },
};

const config = process.env.NODE_ENV === "development" ? dev : prod;

export default config;
