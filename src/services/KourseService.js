import data from "../data";

const kourseService={
    load: function(id){
        return fetch(data[id]).then(res=>
            res.json());
    }
}
export default kourseService;