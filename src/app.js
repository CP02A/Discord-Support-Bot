const Discord = require('discord.js');
const fetch = require("node-fetch");
const client = new Discord.Client();

const Server = require('./Server');

var servers = new Map();

client.on('ready', () => {
    client.guilds.forEach(obj => {
        servers.set(obj.id, new Server.Server(obj));
        obj.createChannel('Support 1', { type: 'text', parent: obj.channels.get('644126251757338624') }).then(value => {
            servers.get(obj.id).addChannel(value);
        });
        obj.createChannel('Support 2', { type: 'text', parent: obj.channels.get('644126251757338624') }).then(value => {
            servers.get(obj.id).addChannel(value);
        });
        obj.createChannel('Support 3', { type: 'text', parent: obj.channels.get('644126251757338624') }).then(value => {
            servers.get(obj.id).addChannel(value);
        });
    });
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if(!msg.author.equals(client.user)) {
        if(msg.content.toLowerCase() === 'shutdown') {
            servers.forEach(obj => {
                obj.getChannels().forEach(obj2 => {
                    obj2.delete();
                    console.log('deleting: ' + obj2.name);
                });
            });
            setTimeout(() => process.kill(process.pid, 'SIGTERM'), 1000);
        }
        if(msg.content.toLowerCase() === 'cleanup') {
            client.channels.get('644126251757338624').children.forEach(obj => obj.delete());
            servers = new Map();
            client.guilds.forEach(obj => {
                servers.set(obj.id, new Server.Server(obj));
                obj.createChannel('Support 1', { type: 'text', parent: obj.channels.get('644126251757338624') }).then(value => {
                    servers.get(obj.id).addChannel(value);
                });
                obj.createChannel('Support 2', { type: 'text', parent: obj.channels.get('644126251757338624') }).then(value => {
                    servers.get(obj.id).addChannel(value);
                });
                obj.createChannel('Support 3', { type: 'text', parent: obj.channels.get('644126251757338624') }).then(value => {
                    servers.get(obj.id).addChannel(value);
                });
            });
        }
        msg.reply(msg.content);
    }
});

client.login('NjQ0MTIxNzk5NTY2NTU3MTg1.XcvbMQ.spPHutbKPzRy-kIoysuKyXcB1aw');