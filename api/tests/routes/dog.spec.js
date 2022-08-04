/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Dog, Temperament, conn } = require("../../src/db.js");


const agent = session(app);
const dog = {
  name: "Pato",
  weight: "14 - 16" ,
  height: "23 - 29",
  life_span: "10 -14"
};
const temps=[1,6,8,9]

describe("Get Dogs routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() => Dog.sync({ force: true }).then(() => Dog.create(dog)));
  describe("GET /dogs", () => {
    it("should get 200", () => agent.get("/dogs").expect(200));
    it('espera que sea html', function(){
      return agent.get('/')
        .expect('Content-Type', /html/);
    });
  });
  describe("GET /dogs/:id", () => {
    it("should get 200", () => agent.get("/dogs/8").expect(200));
    it('espera que sea html', function(){
      return agent.get('/')
        .expect('Content-Type', /html/);
    });
  });

  describe("GET /dogs/temperaments", () => {
    it("should get 200", () => agent.get("/temperaments").expect(200));
    it('espera que sea html', function(){
      return agent.get('/')
        .expect('Content-Type', /html/);
    });
  });


  describe('POST /dogs/post', function () {
    it('responde con 200', function(){
      agent.post('/dogs/post')
        .send({
          name: "Perritu",
          weight: "50 - 56", 
          height: "35 -40",
          image: "", 
          life_span: "5-10"
        })
        .expect(200);
    });
   
  });

});
