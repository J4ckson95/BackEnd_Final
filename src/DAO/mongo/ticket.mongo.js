import ticketModel from "./model/ticket.model.js";
export default class ticket {
    async createTicket(data) { return await ticketModel.create(data) }
}