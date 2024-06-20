import http from "@/api";

export const getProduct = (limit : any , page: any)=>{
    return http.get(`/products?page=${page}&limit=${limit}`)
}