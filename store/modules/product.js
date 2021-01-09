import config from '../../api/config'

const state={
    getProList:{list:[],"total":"","pageSize":"","pageNum":""},
    addProduct:'',
	getCartList:"",
}

const mutations ={
    getProList(state,result){
      result.data.data.list.forEach(element => {
         element.productInfo= JSON.parse(element.productInfo)
     });
     state.getProList=result.data.data
    },
	
	
	addProduct(state,result){
	    state.addProduct=result.data.data;
	},
	
	
	getCartList(state,result){
		 var cartList=result.data.data;
		 state.getCartList=cartList	
	},


}

const actions={
       getProList({state,commit},params){
		console.log("商品列表入参",params)
        let res=  config.list(params)
        Promise.resolve(res).then(result=>{
            var [errmsg,res]=result
            console.log("商品列表出参",res)
            commit('getProList',res)
        }
           
        )
      },

      addProduct({state,commit},params){
        console.log("添加商品入参",params)
        var res=  config.add(params)
        Promise.resolve(res).then(result=>{
            var[errmsg,res]=result
            console.log("添加商品出参",res)
            commit('addProduct',res)
        }
           
        )
      },
      delete({state,commit},params){
        console.log("删除商品入参",params)
        var res= config.delete(params)  
        Promise.resolve(res).then(result=>{
            params.productId='';
            let res=  config.list(params)
            Promise.resolve(res).then(result=>{
 
            console.log("商品列表出参",result)
            commit('getProList',result)
        })
        })
      },
      update({state,commit},params){
        console.log("修改商品入参",params)
        var res= config.update(params)  
        Promise.resolve(res).then(result=>{
            params.productId='';
            params.productName='';
            let res=  config.list(params)
            Promise.resolve(res).then(result=>{
            console.log("商品列表出参",result)
            commit('getProList',result)
        })
        })
      },
	  
	  getCartList({state,commit},params){
	    console.log("购物车列表入参",params)
	    let res=  config.cartList(params)
	    Promise.resolve(res).then(result=>{
	        var [errmsg,res]=result
	        console.log("购物车列表出参",res)
	        commit('getCartList',res)
	    }
	       
	    )
	  },

}
export default {
    namespaced:true,
    state,
    actions,
    mutations
}