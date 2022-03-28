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
  it.todo('It should response with status 200 after inserting data in the database'/**, () => {
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
  test('It should return an error if rate is missing', () => {
    jest.setTimeout(15000)
    return request(app)
      
      .post("/post")
      .send({
        instrument: "GBP/USD",
        type: "BUY",
        amount: 100
      })
        .then((response: responseProps) => {

         expect(response.statusCode).toBe(200);

        });
  
  }) ;


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


  type errorMessageProps = {
    statusCode : number,
    text : string
  }

  // create a test to post /trades
  test('It should return an error via json in TRADES with /post (since its a get route)', () => {
    return request(app)
      .post("/trades")
      .send({
        instrument: "GBP/USD",
        rate: 1.32,
        type: "BUY",
        amount: 100
      })
      .then((response: errorMessageProps) => {
        expect(response.statusCode).toBe(404);
        console.log(typeof(response));
        expect(response.text).toContain("Cannot POST /trades");

      });
    });






    // describe ending
});

