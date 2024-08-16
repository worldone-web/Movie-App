import fetch from 'node-fetch'
const {APIKEY} = process.env //환경변수를 통한 APIKEY 암호화

export default async function handler(request,response){
    const { title, page, id} = JSON.parse(request.body)
    const url = id 
        ? `https://www.omdbapi.com?apikey=${APIKEY}&i=${id}&plot=full`
        : `https://www.omdbapi.com?apikey=${APIKEY}&s=${title}&page=${page}`

    const res = await fetch(url)
    const json = await res.json()

    response
        .status(200)
        .json(json)
}