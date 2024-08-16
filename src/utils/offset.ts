const GetOffset = (pageNum: number, limit: number) => {

    return (pageNum-1)*limit
}

export {GetOffset}