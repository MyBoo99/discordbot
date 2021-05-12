const Discord = require('discord.js');
const axios = require('axios')
const client = new Discord.Client();

const prefix = '$';

client.once('ready', ( ) => {
    console.log('jdvz test gmr bot');
});

client.on('message', async message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const arg = message.content.slice(prefix.length).split(/ +/);
    const command = arg.shift().toLowerCase();
	var coin = 'gmr-finance'
    if(command === 'price'){
		let getPrice = async () => {
				let response = await axios.get(
					"https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd"
					);
				let price = response.data
				return price

			}
			let pricevalue = await getPrice();
			var text = pricevalue;
			console.log(text)
			console.log(pricevalue);
			message.reply(`\n *${text}*`);
			message.reply(`\n *${pricevalue.coin.usd}* `);
			
    }
});

client.login('ODQwNTE1Mjk5MDg1OTEwMDM3.YJZU3w.TmvUJuzGRr4xkhB7J1Z_gQbZ8Aw');

