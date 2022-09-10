import Http from "@/api/request/index"
// import axios from "axios"

const getAllList = () => {
    return Http({
        url: '/',
        method: "get",
    })
}

const deleteData = (id) => {
    console.log(id);
    return Http({
        url: `/remove?id=${id}`,
        method: "delete",
    })
}

const addFood = (time, food, money, id) => {
    return Http({
        url: `/add`,
        method: "post",
        data: {
            time,
            food,
            money,
            id,
        }
    })
}

const findTime = (time) => {
    return Http({
        url: `/find?time=${time}`,
        method: "delete",
    })
}


export default {
    getAllList,
    deleteData,
    addFood,
    findTime
}