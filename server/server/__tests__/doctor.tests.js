import supertest from "supertest";
import app from "../app";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const request = supertest(app);

let token;

let doctorId
const doctor = {
    name: "doctor1",
    surname: "doctor1",
    email: "doctor1@gmail.com",
    password: "123123123",
    bio: "this is bio",
    role: "doctor",
    specialization: "xirurg",
    experience: 7,
    country: "Uzbekistan"
}

const doctorLogin = {
    email: "doctor1@gmail.com",
    password: "123123123"
}


describe("Test doctors route", () => {

    beforeAll(async () => {
        console.log("Running before all the tests in the suite")
        await mongoose.connect(process.env.MONGO_URL_TEST, { useNewUrlParser: true, useUnifiedTopology: true });
    } )

    it("should test that true is true", () => {
        expect(true).toBe(true);
    } )


     //register doctor
     it("should register a doctor", async () => {
        const res = await request.post('/auth/doctor/register').send(doctor);
        expect(res.status).toBe(201);
        expect(res.body.message).toBe('Doctor created');
        doctorId = res.body.id
    } )

    // login doctor
    it("should login doctor", async () => {
        const response = await request.post('/auth/doctor/login').send(doctorLogin);
        expect(response.status).toBe(200);
        expect(response.body.token).toBeDefined();
        token = response.body.token;
    } )
    

    // get request all doctors
    it('should get all doctors', async () => {
        const res = await request.get('/doctors');
        expect(res.status).toBe(200);
    } )

    // get request one doctor
    it('should get one doctor', async () => {
        const res = await request.get(`/doctors/${doctorId}`).set('Authorization', `Bearer ${token}`);
        expect(res.status).toBe(200);
    } )

    // update doctor
    it('should update doctor', async () => {
        const res = await request.put(`/doctors/${doctorId}`).set('Authorization', `Bearer ${token}`).send({
            email: "newEmail@gmail.com"
        });
        expect(res.status).toBe(200);
        expect(res.body.message).toBe('Doctor updated');
    } )
        
    // update doctor avatar
    it('should update doctor avatar', async () => {
        const res = await request.put(`/doctors/${doctorId}/avatar`).set('Authorization', `Bearer ${token}`).attach('avatar', './server/tests/doctor.jpg');
        expect(res.status).toBe(200);
        expect(res.body.message).toBe('Doctor avatar updated');
    } )

    //delete doctor
    it('should delete doctor', async () => {
        const res = await request.delete(`/doctors/${doctorId}`).set('Authorization', `Bearer ${token}`);
        expect(res.status).toBe(204);
    } )

})