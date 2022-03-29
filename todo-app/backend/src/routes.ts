import { Prisma, PrismaClient } from '@prisma/client'
import express from "express"

const prisma = new PrismaClient()
const routes = express.Router()

routes.post(`/todo`, async (req, res) => {
    const { description, done } = req.body
    const result = await prisma.todo.create({
        data: {
            description,
            done,
        },
    })
    res.json(result)
})

type PutRequestBody = {
    done: boolean
}

routes.put('/todo/:id', async (req, res) => {
    const { id } = req.params
    const body = req.body as PutRequestBody

    try {
        const todoItem = await prisma.todo.update({
            where: { id: Number(id) },
            data: {
                // TODO
                // done: body.done
                done: true
            },
        })

        res.status(200).json(todoItem)
    } catch (error) {
        console.error(error)
        res.status(500).send(error);
    }
})


routes.delete(`/todo/:id`, async (req, res) => {
    const { id } = req.params
    const todoItem = await prisma.todo.delete({
        where: {
            id: Number(id),
        },
    })
    res.json(todoItem)
})

routes.get(`/todo/:id`, async (req, res) => {
    const { id }: { id?: string } = req.params

    const todoItem = await prisma.todo.findUnique({
        where: { id: Number(id) },
    })
    res.json(todoItem)
})

routes.get(`/todo`, async (req, res) => {

    const todoItens = await prisma.todo.findMany({})
    res.json(todoItens)
})

routes.use('/api', routes)

export default routes