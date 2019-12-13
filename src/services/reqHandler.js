const appKey='kid_SJ1J8BWCr';
const appSecret='5b997ed04ad14a99bea8a4009ebe5e12';
const hostURL='https://baas.kinvey.com';

let reqHandler={
    login:(payload)=>{
    return    fetch(`${hostURL}/user/${appKey}/login`, {
        method:'POST',
        headers:{
            Authorization: 'Basic '+btoa(`${appKey}:${appSecret}`),
            'Content-type':'application/json'
        },
        body:JSON.stringify(payload)
    }).then(res=>{
        return res.json()
    })
            

            
    },
        register: (payload)=>{
            return fetch(`https://baas.kinvey.com/user/${appKey}`,{
                method:'POST',
                headers:{
                    Authorization: 'Basic '+btoa(`${appKey}:${appSecret}`),
                    'Content-type':'application/json'
                },
                body:JSON.stringify(payload)
            }).then(res=>{
                return res.json()
            })
        },
    pullPost:()=>{
     return   fetch(`${hostURL}/appdata/${appKey}/posts?query={}&sort={"_kmd.ect": -1}`,{
            method:'GET',
            headers:{
                Authorization:'Kinvey '+localStorage.getItem('token')
            }
        }).then(res=>{
            return res.json()
        })
    },
    creatPost:payload=>{
        return   fetch(`${hostURL}/appdata/${appKey}/posts`,{
            method:'POST',
            headers:{
                Authorization:'Kinvey '+localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(payload)
        }).then(res=>{
            return res.json()
        })
    }
}
export default reqHandler;