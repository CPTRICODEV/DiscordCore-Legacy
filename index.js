// Discord GatewayIntentBits (Discord bot permission)
const { Client, GatewayIntentBits, Partials, Collection  } = require('discord.js')
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember} = Partials;

// Gets The config.
const config = require('./config.json')

// Handlers (Loads the commands and Evetets)


// Gives the client, all the permissions there is required.
const client = new Client({ 
    intents: [Guilds, GuildMember, GuildMembers], 
    partials: [User, Message, GuildMember, ThreadMember]
});

client.commands = new Collection();



// starting the bot, and starts the handlers 
client.login(config.bot.TOKEN) .then(() => {
    loadEvents(client);
    loadCommands(client);
}).catch((err) => console.log(err));