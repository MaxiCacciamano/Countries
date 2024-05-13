const {Region, Countries} = require('../db.js');
const axios = require('axios');

const GetCountries = async()=>{
    try{
        let arr = []
        const apiCountries = await axios.get(`https://restcountries.com/v3.1/all`);
        arr.push(apiCountries.data);
        const mapsCountries = arr.map(c=>{
            return{
                name: c.name.nativeName.deu.official,
                image: c.flags.png,
                population: c.population,
                capital: c.capital,
                subregion: c.subregion,
                toplevel: c.tld,
                currencies: c.currencies.EUR.name,
                lenguages: c.languages.deu
            }
        })
        return mapsCountries;
    }
    catch(err){
        console.log("error en GetCountries ")
    }
}



const GetCountriId = async()=>{
    try{
        const dbInfo = await Countries.findAll({
            include:[
                {
                    model: Region,
                    attributes: ["name"],
                    through: { attributes:[]}
                }
            ]
        })
    }
    catch(err){
        console.log("error al traer por id", err)
    }
}