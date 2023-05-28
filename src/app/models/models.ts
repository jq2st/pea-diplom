export interface CarCard {
    id: number,
    brand: string, 
    model: string,
    info: string,
    year: string,
    mass: string,
    country: string,
    class: string,
    shape: string,
    fuel: string,
    image: string,
    price: number,
}

export interface Order {
    created_at?: Date,
    fio: string,
    name: string,
    description: string,
    phone: string
}

export interface AdminUser {
    created_at: Date,
    id: number,
    login: string,
    name: string,
    phone: string,
    isAdmin: boolean
}