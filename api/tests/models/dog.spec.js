const { Dog, conn } = require("../../src/db.js");
const { expect } = require("chai");

describe("Dog model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    beforeEach(() => Dog.sync({ force: true }));
    describe("name", () => {
      it("should throw an error if name is null", (done) => {
        Dog.create({})
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
      it("should work when its a valid name", () => {
        Dog.create({ name: "Pug" });
      });
      it("should throw an error if height is null", (done) => {
        Dog.create({
          name: "Pato",
        })
          .then(() => done(new Error("height is require")))
          .catch(() => done());
      });
      it("should throw an error if height is null", (done) => {
        Dog.create({
          name: "Pato",
          weight: { metric: "23 - 29" },
        })
          .then(() => done(new Error("height is require")))
          .catch(() => done());
      });
      it("should throw an error if weight is null", (done) => {
        Dog.create({
          name: "Pato",
          weight: { metric: "23 - 29" },
        })
          .then(() => done(new Error("weight is require")))
          .catch(() => done());
      });
      it("should throw an error if weight is null", (done) => {
        Dog.create({
          name: "Pato",
          weight: { metric: "14 - 16" },
          height: { metric: "23 - 29" },
        })
          .then(() => done(new Error("weight is require")))
          .catch(() => done());
      });
      it("should throw an error if life_span is null", (done) => {
        Dog.create({
          name: "Pato",
          weight: { metric: "23 - 29" },
          height: { metric: "23 - 29" },
        })
          .then(() => done(new Error("life_span is require")))
          .catch(() => done());
      });
      it("should throw an error if life_span is null", (done) => {
        Dog.create({
          name: "Pato",
          weight: { metric: "14 - 16" },
          height: { metric: "23 - 29" },
          life_span: "10 -14",
          temperament: [1,2,3]
        })
          .then(() => done(new Error("life_span is require")))
          .catch(() => done());
      });
      it("should throw an error if createdByMe is different of boolean", (done) => {
        Dog.create({
          name: "Pato",
          weight: { metric: "14 - 16" },
          height: { metric: "23 - 29" },
          createdByMe: 12,
        })
          .then(() => done(new Error("createdByMe should be boolean")))
          .catch(() => done());
      });
    });
  });
});
