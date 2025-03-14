import request from "supertest";
import { app } from "../../index"; // Corrigido

describe("Requisitions in API", () => {

    // GET route test:
    test("Should get all orders", async () => {
        const response = await request(app).get("/orders");

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true); // Corrigido
    });

    // CREATE route test:
    test("Should create a new order", async () => {
        const response = await request(app).post("/orders");

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("id");
        expect(response.body.state).toBe("pending");
    });

    // UPDATE route test:
    test("Should update an order state", async () => {
        const newOrder = await request(app).post("/orders")
        const orderId = newOrder.body.id

        const response = await request(app).put(`/orders/${orderId}`)

        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty("id", orderId)
        expect(response.body.state).not.toBe("pending")
    });

    // FILTER route test:
    test("should filter orders by state", async () => {
        await request(app).post("/orders") // Criando um pedido inicial para teste

        const response = await request(app).get("/orders/filter?state=pending")

        expect(response.status).toBe(200)
        expect(Array.isArray(response.body)).toBe(true)
        expect(response.body.every((order: { state: string; }) => order.state === "pending")).toBe(true)
    })

    // DELETE ALL route test:
    test("Should delete all orders", async () => {
        
        await request(app).post("/orders");  
        const response = await request(app).delete("/orders/delete-all");

        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Well done, you did it! Orders Deleted.");
    });
  
});
