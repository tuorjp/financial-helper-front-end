import api from ".";

export type SingleCategory = {
  id?: number;
  name: string;
  type: number;
}

export type ManyCategories = SingleCategory[]

class CategoryService {
  async create(data: SingleCategory): Promise<SingleCategory | null> {
    try {
      console.log('DATA', data)
      const response = await api.post<SingleCategory>('/category', data)
      console.log('RESPONSE', response)
      return response.data
    } catch (error) {
      console.error(error)
      return null
    }
  }

  async list(): Promise<ManyCategories> {
    try {
      const response = await api.get<ManyCategories>('/category')
      console.log('RESPONSE', response)
      return response.data
    } catch (error) {
      console.error(error)
      return []
    }
  }
}

const useCategoryService = () => {
  return new CategoryService()
}

export { useCategoryService }