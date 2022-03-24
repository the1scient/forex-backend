const request = require("supertest");
const app = require("./server.ts");



describe("Test endpoints", () => {

  type responseProps = {
    statusCode: Number
  }

  test("It should response the GET method", () => {
    return request(app)
      .get("/")
      .then((response: responseProps) => {
        expect(response.statusCode).toBe(200);
       
      });
  });



  test('It should response with GET method in the trades route', () => {
    
    return request(app)
      .get("/trades")
      .then((response: responseProps) => {
        expect(response.statusCode).toBe(200);
      });

    
  });

// create a test to verify if post method is working
  it.todo('It should response with POST method in the post route'/**, () => {
    return request(app)
      .post("/post")
      .send({
        instrument: "GBP/USD",
        rate: 1.32,
        type: "BUY",
        amount: 100
      })
      .then((response: responseProps) => {
        expect(response.statusCode).toBe(200);
      });
  } */) ;
  

// create a test that returns an error if instrument is missing in post route
  test('It should return an error if instrument is missing', () => {
    return request(app)
      .post("/post")
      .send({
        rate: 1.32,
        type: "BUY",
        amount: 100
      })
      .then((response: responseProps) => {
        expect(response.statusCode).toBe(500);        
      });
  });
  

  // create a test that returns an error if rate is missing in post route
  it.todo('It should return an error if rate is missing'/** , () => {
    return request(app)
      .post("/post")
      .send({
        instrument: "GBP/USD",
        type: "BUY",
        amount: 100
      })
      .then((response: responseProps) => {
        expect(response.statusCode).toBe(500);        
      });
  }   */) ;


  // create a test that returns an error if type is missing in post route
  test('It should return an error if type is missing', () => {
    return request(app)
      .post("/post")
      .send({
        instrument: "GBP/USD",
        rate: 1.32,
        amount: 100
      })
      .then((response: responseProps) => {
        expect(response.statusCode).toBe(500);        
      });
  });




// create a test that returns an error if amount is missing in post route
  test('It should return an error if amount is missing', () => {
    return request(app)
      .post("/post")
      .send({
        instrument: "GBP/USD",
        rate: 1.32,
        type: "BUY"
      })
      .then((response: responseProps) => {
        expect(response.statusCode).toBe(500);        
      });
  });



});

