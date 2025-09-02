import request from "supertest";
import app from "../index.js";

describe("GET /", () => {
  it("returns ok:true", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body.ok).toBe(true);
  });
});

