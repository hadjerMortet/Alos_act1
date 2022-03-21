var unirest = require("unirest")
    // question2
function NomRestau(Restaurant,lettre){
	return Restaurant.filter(Restaurant => Restaurant.name[0] == lettre )
}
//la signification de "no-cache":
//aucun cache dans l'intégrité de chemin d'accès ne doit maintenir une copie mise en cache de la réponse.
//Cela vous sert à spécifier que la requete suivante pour le meme contenu sera obligatoirement renvoyée par le serveur et non par un proxy ou le cache du navigateur.
var req = unirest("GET" , "http://localhost:3000/Restaurant").headers({
    "cache-control": "no-cache"}).then((res) => {
	if (res.error) throw new Error(res.error)
	
var DixPremiers = res.body.slice(0, 10)
    console.log("les Dix Premiers Restaurant sont:\n")
	console.log(DixPremiers)
	
	console.log("Les Restaurant qui commencent par la lettre M sont:\n")
	console.log(NomRestau(res.body, "M"))
})
