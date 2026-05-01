import { createClient } from "redis";

const client = await createClient({
  url: "redis://localhost:6789",
})
  .on("error", (err) => console.log("Redis Client Error", err))
  .connect();

await client.set("key", "qiymat");
const value = await client.get("key");
console.log(value);

client.destroy();
