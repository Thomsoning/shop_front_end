
export default{
    post(url,params={}) {
        let{isLoading=true}=params;
        return uni.request({
            header:{
            'Content-Type':'application/json;charset=UTF-8',
            'token':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJoencifQ.YqWDSsPa_2FLTb9Zh2-UWmjq4tpus5Yiz_MHVe8etaI'
            },
            method:'POST',
            url:"http://49.233.188.52:8090"+url,
            data: params,
            timeout:30000,
            isLoading,
			dataType:"json",
           

        })
    }
}