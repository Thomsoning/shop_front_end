import http from './http'
export default {
    list(params){
		console.log("商品列表入参",params)
        return http.post('/frontend/product/list',params)
    },
    add(params){
        return http.post('/backend/product/add',params)
    },
    delete(params){
        return http.post('/backend/product/delete',params)
    },
    update(params){
        return http.post('/backend/product/update',params)
    },
	cartList(params){
	    return http.post('/frontend/cart/list',params)
	},
	addCart(params){
	    return http.post('/frontend/cart/add',params)
	},
	

}