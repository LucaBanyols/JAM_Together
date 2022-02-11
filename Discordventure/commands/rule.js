const coffre = "🎁";
const repos = "🛏️";
const combat = "⚔️";
const fr = "🇫🇷";
const gb = "🇬🇧";
const es = "🇪🇸";
const { ReactionEmoji, ReactionCollector, BroadcastDispatcher } = require("discord.js");

module.exports = {
    name: 'rule',
    description: 'simple rule command',
    async execute(message) {
        let mesg = await message.channel.send(`**\`Choisissez le language\`**`);
        await mesg.react(fr);
        await mesg.react(gb);
        await mesg.react(es);

        const reacts = await mesg.awaitReactions(reaction => reaction.emoji.name === fr ||  reaction.emoji.name === gb ||  reaction.emoji.name === es, {time: 8000});

        try {
            nb_fr = reacts.get(fr).count;
        } catch (error) {
            nb_fr = 0;
        }
        try {
            nb_gb = reacts.get(gb).count;
        } catch (error) {
            nb_gb = 0;
        }
        try {
            nb_es = reacts.get(es).count;
        } catch (error) {
            nb_es = 0;
        }
        if ((nb_fr > nb_es) && (nb_fr > nb_gb)) {
            message.channel.send(`**\`Règles:\nChoisissez en communauté les acions qui vous amèneront face au Boss\n\`**`);
            message.channel.send(`**\`${combat}Combats: Lors des combats, vous pouvez attaquer ou fuir en ayant un apperçu de la vitesse et des points de vie de votre adversaire. Si le nombre de votes sur un élément est supérieur à la variable du monstre, vous l'emportez et gagnez de la vitesse ou des points de dégâts. Sinon, vous perdez des points de vie.\n\`**`);
            message.channel.send(`**\`${repos}Lit: Le personnage se repose et gagne des points de vie.\n\`**`);
            message.channel.send(`**\`${coffre}Trésor: Le personnage gagne de la vitesse ou des points de vie.\n\`**`); 
            message.channel.send(`**\`${coffre}Trésor Piégé: Le trésor était piégé et vous fait perdre des points de vie.\n\`**`);  
        } else if ((nb_gb > nb_fr) && (nb_gb > nb_es)) {
            message.channel.send(`**\`Rules: \ nChoose as a community the actions that will bring you to face the Boss\n\`**`);
            message.channel.send(`**\`${combat}Fights: During a fight, you can attack or flee with a glimpse of your opponent's speed and health points. If the number of votes on an item is greater than the monster's variable, you win and gain speed or damage points. Otherwise, you lose life. \ N\`**`);
            message.channel.send(`**\`${repos}Bed: The character rests and gains health points.\n\`**`);
            message.channel.send(`**\`${coffre}Treasure: The character gains speed or health points.\n\`**`); 
            message.channel.send(`**\`${coffre}Trapped Treasure: The treasure was trapped and causes you to lose life points.\n\`**`);
        } else if ((nb_es > nb_fr) && (nb_es > nb_gb)) {
            message.channel.send(`**\`Reglas: \ nelige como comunidad las acciones que te llevarán a enfrentarte al Boss\n\`**`);
            message.channel.send(`**\`${combat}Combate: durante el combate, puedes atacar o huir al echar un vistazo a la velocidad y los puntos de salud de tu oponente. Si el número de votos sobre un objeto es mayor que la variable del monstruo, ganas y obtienes velocidad o puntos de daño. De lo contrario, perderá puntos de vida.\n\`**`);
            message.channel.send(`**\`${repos}Cama: El personaje descansa y gana puntos de vida.\n\`**`);
            message.channel.send(`**\`${coffre}Tesoro: el personaje gana velocidad o puntos de vida.\n\`**`); 
            message.channel.send(`**\`${coffre}Tresoro Trampa: El tesoro quedó atrapado y hace que pierdas puntos de vida.\n\`**`);
        } else {
            message.channel.send(`**\`Egalité, séléction de la langue par défaut: Français.\`**`);
            message.channel.send(`**\`Règles:\nChoisissez en communauté les acions qui vous amèneront face au Boss\n\`**`);
            message.channel.send(`**\`${combat}Combats: Lors des combats, vous pouvez attaquer ou fuir en ayant un apperçu de la vitesse et des points de vie de votre adversaire. Si le nombre de votes sur un élément est supérieur à la variable du monstre, vous l'emportez et gagnez de la vitesse ou des points de dégâts. Sinon, vous perdez des points de vie.\n\`**`);
            message.channel.send(`**\`${repos}Lit: Le personnage se repose et gagne des points de vie.\n\`**`);
            message.channel.send(`**\`${coffre}Trésor: Le personnage gagne de la vitesse ou des points de vie.\n\`**`); 
            message.channel.send(`**\`${coffre}Trésor Piégé: Le trésor était piégé et vous fait perdre des points de vie.\n\`**`);
        }
    }
};