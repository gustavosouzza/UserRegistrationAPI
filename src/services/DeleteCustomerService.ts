import prismaClient from "../prisma";
interface DeletCustomerProps {
	id: string;
}
class DeleteCustomerService {
	async execute({ id }: DeletCustomerProps) {
		if (!id) {
			throw new Error("Solicitação Invalida");
		}
		const findCustomer = await prismaClient.customer.findFirst({
			where: {
				id: id,
			},
		});
		if (!findCustomer) {
			throw new Error("Cliente não encontrado");
		}

		await prismaClient.customer.delete({
			where: {
				id: findCustomer.id,
			},
		});
		return { message: "Deletado com sucesso" };
	}
}
export { DeleteCustomerService };
