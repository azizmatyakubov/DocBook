import supertest from "supertest";
import app from "../app";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const request = supertest(app);

let token;
let patient = {
    name: "patient",
    surname: "patient",
    email: "patient@gmail.com",
    password: "123123123",   
};
const patientLogin = {
    email: "patient@gmail.com",
    password: "123123123"
};

describe("Test users route", () => {

    beforeAll(async () => {
        console.log("Running before all the tests in the suite")
        await mongoose.connect(process.env.MONGO_URL_TEST, { useNewUrlParser: true, useUnifiedTopology: true });
    } )
    
    it("should test that true is true", () => {
        expect(true).toBe(true);
    } );

    // it("should register a patient", async () => {
    //     const res = await request.post("/auth/patient/register").send(patient);
    //     expect(res.status).toBe(201);
    //     expect(res.body.message).toBe("Patient is created");
    //     patient.id = res.body.id;
    // });

    // it("should login user", async () => {
    //     const res = await request.post("/auth/patient/login").send(patientLogin);
    //     expect(res.status).toBe(200);
    //     expect(res.body.token).toBeDefined();
    //     token = res.body.token;
    // });

    // it("should get all users", async () => {
    //     const response = await request.get("/users").set("Authorization", token);
    //     expect(response.status).toBe(200);
    //     expect(response.body.data).toBeDefined();
    // } );
    // it("should get one user", async () => {
    //     const response = await request.get(`/users/${user.id}`).set("Authorization", token);
    //     expect(response.status).toBe(200);
    //     expect(response.body.data).toBeDefined();
    // } );
    // it("should update one user", async () => {
    //     const response = await request
    //     .put(`/users/${user.id}`)
    //     .set("Authorization", token)
    //     .send({
    //         email: "newEmail@gmail.com"
    //     });
    //     expect(response.status).toBe(200);
    //     expect(response.body.message).toBe("User updated");
    // } );

    // it("should delete one user", async () => {
    //     const response = await request
    //     .delete(`/users/${user.id}`)
    //     .set("Authorization", token);
    //     expect(response.status).toBe(200);
    //     expect(response.body.message).toBe("User deleted");
    // });

    afterAll(async() => {
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
    })
} );



