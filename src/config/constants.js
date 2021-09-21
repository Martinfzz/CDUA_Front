const prod = {
  url: {
    BASE_URL: "",
  },
};

const dev = {
  url: {
    BASE_URL: "http://10.0.2.2:3000",
  },
};

const config = process.env.NODE_ENV === "development" ? dev : prod;

export default config;
