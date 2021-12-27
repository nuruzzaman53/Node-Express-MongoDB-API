import express,{Application,Request,Response,NextFunction} from 'express'

const app: Application = express()

const addingFunction = (a: number,b: number) : number => {
    return a + b
}

app.get = (req:Request, res:Response, next:NextFunction): void => {
   console.log(addingFunction(5,6))
}

app.use(express.json())

app.listen(5102,():void => {
    console.log('App is listening on port 5102')
})