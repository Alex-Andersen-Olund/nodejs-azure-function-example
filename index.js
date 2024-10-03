const { app } = require("@azure/functions");

async function check(request, context) {
  context.log(`Http function processed request for url "${request.url}"`);

  return {
    status: 200,
    jsonBody: {
      env: process.env,
      message: "Serverless function is working.",
    },
  };
}

app.http("check", {
  route: "check",
  methods: ["GET"],
  authLevel: "anonymous",
  handler: check,
});

module.exports = check;
