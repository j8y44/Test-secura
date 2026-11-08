// Secura secret-detection fixture.
// Credentials are read from the runtime environment; no values are stored here.
// This file makes no network requests and is not used by the application.

const api_key = process.env.API_KEY;
const password = process.env.PASSWORD;
const database_password = process.env.DATABASE_PASSWORD;
const access_token = process.env.ACCESS_TOKEN;
const aws_access_key_id = process.env.AWS_ACCESS_KEY_ID;
const github_token = process.env.GITHUB_TOKEN;
const openai_api_key = process.env.OPENAI_API_KEY;
const database_url = process.env.DATABASE_URL;
