import fs from 'fs'

// \[[^[\]]*?\] -> "[Texto]"
// \(https?:\/\/[^\s?#.].[^\s]*\) -> "(Link)"
// \[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\) -> "[Texto](Link)"
function extractLinks(text){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm
    const matchs = [...text.matchAll(regex)]
    const results = matchs.map(match => ({
        [match[1]]: match[2]
    }))
    return results.length !== 0 ? results : "There are no links in this file!"
}

async function getArchive(pathing){
    const encoding = 'utf-8'
    const text = await fs.promises.readFile(pathing, encoding)
    return extractLinks(text)
}
 
export default getArchive