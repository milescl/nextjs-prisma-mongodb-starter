import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getProducts = async () => {

    try {
        const allElement = await prisma.products.findMany()
        await prisma.$disconnect()
        console.log(allElement)
        return allElement
    } catch (error) {
        console.error(error)
        await prisma.$disconnect()
        process.exit(1)
    } finally {
        await prisma.$disconnect()
    }

}
