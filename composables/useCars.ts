// @ refers to the root directory
import cars from '@/data/cars.json'

export const useCars = () => {
    return {
        cars,
    }
}