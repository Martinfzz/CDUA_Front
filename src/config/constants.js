const prod = {
  url: {
    BASE_URL: "",
  },
};

const dev = {
  url: {
    BASE_URL: "http://localhost:3001",
  },
};

const config = process.env.NODE_ENV === "development" ? dev : prod;

export default config;
