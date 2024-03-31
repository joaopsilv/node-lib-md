    function extractLinks(arrLinks){
        return arrLinks.map((objectLink) => Object.values(objectLink).join())
    }

    async function checkStatus(listURLs){
        const arrStatus = await Promise.all(
            listURLs.map(async(url) => {
                try{
                    const response = await fetch(url)
                    return `${response.status} - ${response.statusText}`
                } catch (error){
                    return handleError(error)
                }
            })
        )
        return arrStatus
    }

    function handleError(error){
        if (error.cause.code === "ENOTFOUND"){
            return "Link not found!"
        } else{
            return "An error occurred."
        }
    }

    export default async function validatedList(list){
        const links = extractLinks(list)
        const status = await checkStatus(links)
        return list.map((object, index) => ({
            ...object,
            status: status[index]
        }))
    }