const fetchJSONPlaceHolder = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const json = await response.json()
    return json  
}

export {
    fetchJSONPlaceHolder,
}