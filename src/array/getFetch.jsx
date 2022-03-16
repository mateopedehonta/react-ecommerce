import productos from "./productos";

const getFetch = new Promise((res,rej)=>{
    setTimeout(() => {
        res(productos)
    }, 1000);
})

export default getFetch