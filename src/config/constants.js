const prod = {
  url: {
    BASE_URL: "",
  },
};

const dev = {
  url: {
    BASE_URL: "http://0c83-2a02-810a-8340-4cc-30e6-b809-dc30-4f7d.ngrok.io",
  },
};

const config = process.env.NODE_ENV === "development" ? dev : prod;

export default config;
