module.exports = {
    name: 'population',
    description: 'simple server command',
    execute(message) {
        message.reply(`\nNom du donjon : ${message.channel.name}\nNombre d'aventuriers : ${message.guild.memberCount}`);
    }
};