import chalk from "chalk"
import fs from "fs"
import getArchive from "./link-extractor.js"
import validatedList from "./http-validate.js"

const pathing = process.argv

async function processText(args){
    const pathing = args[2]
    const validate = args[3] === 'validate'

    try{
        fs.lstatSync(pathing)
    } catch(error){
        if(error.code === "ENOENT"){
            console.log(chalk.red(error.code, "| This directory or file does not exist!"))
            return
        }
    }

    if (fs.lstatSync(pathing).isFile()){
        const result = await getArchive(pathing)
        printList(validate, result)
    } else if (fs.lstatSync(pathing).isDirectory()){
        const archives = await fs.promises.readdir(pathing)
        archives.forEach(async(archiveName) =>{
            const list = await getArchive(`${pathing}/${archiveName}`)
            printList(validate, list, archiveName)
        })
    }
}

async function printList(validate, result, identifiers = ''){
    if (validate){
        console.log(
            chalk.bold.yellow("Validated List:\n"),
            chalk.underline.green(identifiers),
            await validatedList(result))
    } else{
        console.log(
            chalk.bold.yellow("List of Links:\n"),
            chalk.underline.green(identifiers),
            result)
    }
}

processText(pathing)