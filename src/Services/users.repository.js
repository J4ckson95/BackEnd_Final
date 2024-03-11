export default class usersRepository {
    constructor(dao) {
        this.dao = dao
    }
    async createUser(user) { return this.dao.createUser(user) }
    async findUserByEmail(email) { return this.dao.findByEmail(email) }
}