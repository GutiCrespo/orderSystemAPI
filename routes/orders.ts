import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const router = Router()
const prisma = new PrismaClient()

// Get
router.get('/', async (req, res) =>{
    const orders = await prisma.order.findMany()
    res.status(200).json(orders)
})

// Post
router.post('/', async (req, res) =>{
        
    // Para inserir um registro:
    const orders = await prisma.order.create({
        data: {
            state: "pending"
        }
    })
    res.status(201).json(orders)
})

// Delete
router.delete('/:id', async (req, res) =>{
    const { id } = req.params

    // Para deletar um registro:
    const orders = await prisma.order.delete({
        // Verifica qual o ID a ser excluído:
        where: {id: Number(id)}
    })
    res.status(200).json(orders)
})

// Put
router.put('/:id', async (req, res) =>{
    const { id } = req.params
    
    try {
    // Encontrando a order a ser alterada
    const order = await prisma.order.findUnique({
        where: { id: Number(id) }
    });

    if (!order) {
        return res.status(404).json({ error: 'Order not found' });
    }

    let newState: 'pending' | 'in_progress' | 'completed';

    if (order.state === "pending") {
        newState = "in_progress";
    } else if (order.state === "in_progress") {
        newState = 'completed';
    } else {
        return res.status(400).json({ error: 'Impossible to change a "completed" value' });
    }

    const updatedOrder = await prisma.order.update({
        where: { id: Number(id) },
        data: { state: newState }
    });

    return res.status(200).json(updatedOrder);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error to update order' });
}

})

export default router;