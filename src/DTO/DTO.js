export class registerDTO {
    constructor(user) {
        this.first_name = user?.name ?? null
        this.last_name = user?.lastName ?? null
        this.age = user?.age ?? null
        this.email = user?.email ?? null
        this.password = user?.password ?? null
        this.cartId = user?.cartId ?? null
    }
}