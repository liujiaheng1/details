const getId = () => {
    const time = new Date().getTime()
    const ran = parseInt(Math.random() * time)
    const c = parseInt(Math.random() * 10)
    const id = parseInt((time + ran) / c)
    return id
}

export default getId