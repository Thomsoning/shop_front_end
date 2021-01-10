import config from '../../api/config'

const state={
    getCategoryList:{list:[]}
}

const mutations ={
    getCategoryList(state,result){
      result.data.data.forEach(element => {
         element.productInfo= JSON.parse(element.productInfo)
     });
     state.getCategoryList=result.data.data
    }


}

const actions={
       getCategoryList({state,commit},params){
		console.log("category.js-->商品分类入参",params)
        let res=  config.categoryList(params)
        Promise.resolve(res).then(result=>{
            var [errmsg,res]=result
            console.log("category.js-->商品分类出参",res)
            commit('getCategoryList',res)
        }
           
        )
      }

}
export default {
    namespaced:true,
    state,
    actions,
    mutations
}