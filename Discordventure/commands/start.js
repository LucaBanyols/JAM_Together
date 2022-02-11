const { ReactionEmoji, ReactionCollector } = require("discord.js");

const fr = "🇫🇷";
const gb = "🇬🇧";
const es = "🇪🇸";
const run = "🏃‍♂️";
const combat = "⚔️";
const vie = "❤️";
const emote_events = ["🎁", "⚔️", "🛏️"]
const boss = "👹";
const boss_1 = "⛎";
const boss_2 = "♈";
const boss_3 = "♉";
const boss_4 = "♊";
const boss_5 = "♋";
const boss_6 = "♌";
const boss_7 = "♍";
const boss_8 = "♎";
const boss_9 = "♏";
const boss_10 = "♐";
const boss_11 = "♑";
const boss_12 = "♒";
const boss_13 = "♓";

var m_life;
var speed;
var hp_lost = 0;
var hp = 100;
var attack = 0;
var fuite = 0;
var end = 0;

const text_events = [
    ["trésor", "treasure", "tesoro"],
    ["dragon", "dragon", "dragón"],
    ["endroit pour se reposer", "place to rest", "lugar para descansar"]
];

module.exports = {
    name: 'start',
    description: 'simple test command',
    async execute(message, langage, args) {
        let msg = await message.channel.send(`**\`Choose the language you want!\`**`);
        await msg.react(fr);
        await msg.react(gb);
        await msg.react(es);

        const reacts = await msg.awaitReactions(reaction => reaction.emoji.name === fr ||  reaction.emoji.name === gb ||  reaction.emoji.name === es, {time: 15000});

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
            message.channel.send(`**\`Bonjour!\`**`);
            langage = 1;
        } else if ((nb_gb > nb_fr) && (nb_gb > nb_es)) {
            message.channel.send(`**\`Hello!\`**`);
            langage = 2;
        } else if ((nb_es > nb_fr) && (nb_es > nb_gb)) {
            message.channel.send(`**\`¡Hola!\`**`);
            langage = 3;
        } else {
            message.channel.send(`**\`Egalité, séléction de la langue par défaut: Français.\`**`);
            langage = 1;
        }

        game_gestion(message, hp, langage, attack, fuite);

        async function game_gestion(message, hp, langage, attack, fuite) {
            if (end === 10) {
                if (langage === 1) {
                    message.channel.send(`**\`STATISTIQUES :\n⚔️ = ${attack}\n🏃‍♂️ = ${fuite}\`**`);
                } else if (langage === 1) {
                    message.channel.send(`**\`STATISTICS :\n⚔️ = ${attack}\n🏃‍♂️ = ${fuite}\`**`);
                } else {
                    message.channel.send(`**\`ESTADÍSTICAS :\n⚔️ = ${attack}\n🏃‍♂️ = ${fuite}\`**`);
                }
                let mesg = await message.channel.send(`**\------------------------------------------- ${boss} BOSS ${boss} --------------------------------------------\**`);
                await mesg.react(boss_1);
                await mesg.react(boss_2);
                await mesg.react(boss_3);
                await mesg.react(boss_4);
                await mesg.react(boss_5);
                await mesg.react(boss_6);
                await mesg.react(boss_7);
                await mesg.react(boss_8);
                await mesg.react(boss_9);
                await mesg.react(boss_10);
                await mesg.react(boss_11);
                await mesg.react(boss_12);
                await mesg.react(boss_13);

                const reacts = await mesg.awaitReactions(reaction => reaction.emoji.name === boss_1 ||  reaction.emoji.name === boss_2 ||  reaction.emoji.name === boss_3 || reaction.emoji.name === boss_4 ||  reaction.emoji.name === boss_5 ||  reaction.emoji.name === boss_6 || reaction.emoji.name === boss_7 ||  reaction.emoji.name === boss_8 ||  reaction.emoji.name === boss_9 || reaction.emoji.name === boss_10 ||  reaction.emoji.name === boss_11 ||  reaction.emoji.name === boss_12 || reaction.emoji.name === boss_13, {time: 16000});

                try {
                    nb_boss_1 = reacts.get(boss_1).count-1 + attack;
                } catch (error) {
                    nb_boss_1 = 0;
                }
                try {
                    nb_boss_2 = reacts.get(boss_2).count-1 + attack;
                } catch (error) {
                    nb_boss_2 = 0;
                }
                try {
                    nb_boss_3 = reacts.get(boss_3).count-1 + attack;
                } catch (error) {
                    nb_boss_3 = 0;
                }
                try {
                    nb_boss_4 = reacts.get(boss_4).count-1 + attack;
                } catch (error) {
                    nb_boss_4 = 0;
                } try {
                    nb_boss_5 = reacts.get(boss_5).count-1 + attack;
                } catch (error) {
                    nb_boss_5 = 0;
                }
                try {
                    nb_boss_6 = reacts.get(boss_6).count-1 + attack;
                } catch (error) {
                    nb_boss_6 = 0;
                } try {
                    nb_boss_7 = reacts.get(boss_7).count-1 + attack;
                } catch (error) {
                    nb_boss_7 = 0;
                }
                try {
                    nb_boss_8 = reacts.get(boss_8).count-1 + attack;
                } catch (error) {
                    nb_boss_8 = 0;
                }
                try {
                    nb_boss_9 = reacts.get(boss_9).count-1 + attack;
                } catch (error) {
                    nb_boss_9 = 0;
                } try {
                    nb_boss_10 = reacts.get(boss_10).count-1 + attack;
                } catch (error) {
                    nb_boss_10 = 0;
                }
                try {
                    nb_boss_11 = reacts.get(boss_11).count-1 + attack;
                } catch (error) {
                    nb_boss_11 = 0;
                }
                try {
                    nb_boss_12 = reacts.get(boss_12).count-1 + attack;
                } catch (error) {
                    nb_boss_12 = 0;
                } try {
                    nb_boss_13 = reacts.get(boss_13).count-1 + attack;
                } catch (error) {
                    nb_boss_13 = 0;
                }
                nb_final = nb_boss_1;
                if (nb_final < nb_boss_1) {
                    nb_final = nb_boss_1;
                }
                if (nb_final < nb_boss_2) {
                    nb_final = nb_boss_2;
                }
                if (nb_final < nb_boss_3) {
                    nb_final = nb_boss_3;
                }
                if (nb_final < nb_boss_4) {
                    nb_final = nb_boss_4;
                }
                if (nb_final < nb_boss_4) {
                    nb_final = nb_boss_4;
                }
                if (nb_final < nb_boss_5) {
                    nb_final = nb_boss_5;
                }
                if (nb_final < nb_boss_5) {
                    nb_final = nb_boss_5;
                }
                if (nb_final < nb_boss_6) {
                    nb_final = nb_boss_6;
                }
                if (nb_final < nb_boss_7) {
                    nb_final = nb_boss_7;
                }
                if (nb_final < nb_boss_8) {
                    nb_final = nb_boss_8;
                }
                if (nb_final < nb_boss_9) {
                    nb_final = nb_boss_9;
                }
                if (nb_final < nb_boss_10) {
                    nb_final = nb_boss_10;
                }
                if (nb_final < nb_boss_11) {
                    nb_final = nb_boss_11;
                }
                if (nb_final < nb_boss_12) {
                    nb_final = nb_boss_12;
                }
                if (nb_final < nb_boss_13) {
                    nb_final = nb_boss_13;
                }
                multiplicateur = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
                last_val = (nb_final) * multiplicateur;
                message.channel.send(`**\`${nb_final} * ${multiplicateur} = ${boss} - ${last_val}${vie}\`**`);
                if (langage === 1) {
                    if (last_val > 200) {
                        message.channel.send(`**\`[VOUS AVEZ VAINCU LE MAÎTRE DU DONJON.]\`**`)
                        message.channel.send(`**\`----------------------------------------------  FIN  ----------------------------------------------\n (n'oubliez pas votre récompense :)\`**`);
                        message.channel.send(`https://discordventure-reward.000webhostapp.com/`);
                    } else {

                        message.channel.send(`**\`Le Boss prépare son coup...\n\`**`);
                        message.channel.send(`**\`[VOUS AVEZ PERDU...]\`**`);
                        message.channel.send(`**\`----------------------------------------------  FIN  ----------------------------------------------\n\`**`);
                    }
                } else if (langage === 2) {
                    if (last_val > 200) {
                        message.channel.send(`**\`[YOU HAVE OVERCOME THE DUNGEON MASTER.]\`**`)
                        message.channel.send(`**\`----------------------------------------------  END  ----------------------------------------------\n (n'oubliez pas votre récompense :)\`**`);
                        message.channel.send(`https://discordventure-reward.000webhostapp.com/`);
                    } else {

                        message.channel.send(`**\`The Boss prepares his move...\n\`**`);
                        message.channel.send(`**\`[YOU LOSE...]\`**`);
                        message.channel.send(`**\`----------------------------------------------  END  ----------------------------------------------\n\`**`);
                    }
                } else {
                    if (last_val > 200) {
                        message.channel.send(`**\`[HAS SUPERADO AL MAESTRO DUNGEON.]\`**`)
                        message.channel.send(`**\`----------------------------------------------  FIN  ----------------------------------------------\n (n'oubliez pas votre récompense :)\`**`);
                        message.channel.send(`https://discordventure-reward.000webhostapp.com/`);
                    } else {

                        message.channel.send(`**\`El Boss prepara su jugada...\n\`**`);
                        message.channel.send(`**\`[PERDISTE...]\`**`);
                        message.channel.send(`**\`----------------------------------------------  FIN  ----------------------------------------------\n\`**`);
                    }
                }
            } else {
                end += 1
                nb = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
                game(message, hp, langage, nb, attack, fuite);
            }
        }

        async function game(message, hp, langage, nb, attack, fuite) {
            if (langage === 1) {
                msg = await message.channel.send(`**\` Quel chemin emprunter ? \`**`);
            } else if (langage === 2) {
                msg = await message.channel.send(`**\` What is your way ? \`**`);
            } else if (langage === 3) {
                msg = await message.channel.send(`**\` ¿ Qué camino tomar ? \`**`);
            }

            var nb1 = Math.floor(Math.random() * (3 - 1 + 1));
            var nb2 = Math.floor(Math.random() * (3 - 1 + 1));
            while (nb2 == nb1) {
                nb2 = Math.floor(Math.random() * (3 - 1 + 1));
            }
            left = emote_events[nb1];
            right = emote_events[nb2];

            if (langage === 1) {
                message.channel.send(`**\` À gauche un ` + text_events[nb1][langage-1] + `\`**`);
                message.channel.send(`**\` À droite un ` + text_events[nb2][langage-1] + `\`**`);
            } else if (langage === 2) {
                message.channel.send(`**\` To the left a ` + text_events[nb1][langage-1] + `\`**`);
                message.channel.send(`**\` To the right a ` + text_events[nb2][langage-1] + `\`**`);
            } else {
                message.channel.send(`**\` A la izquierda un ` + text_events[nb1][langage-1] + `\`**`);
                message.channel.send(`**\` A la derecha un ` + text_events[nb2][langage-1] + `\`**`);
            }

            await msg.react(left);
            await msg.react(right);

            const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === left ||  reaction.emoji.name === right, {time: 15000});

            try {
                ri = reactions.get(right).count-1;
            } catch (error) {
                ri = 0;
            }
            try {
                le = reactions.get(left).count-1;
            } catch (error) {
                le = 0;
            }
            
            var event_choose;
            if (langage === 1) {
                ({ hp, attack, fuite } = await francais(message, hp, langage, msg, nb1, nb2, le, ri, event_choose, attack, fuite));
            } else if (langage === 2) {
                ({ hp, attack, fuite } = await anglais(message, hp, langage, msg, nb1, nb2, le, ri, event_choose, attack, fuite));
            } else {
                ({ hp, attack, fuite } = await espagnol(message, hp, langage, msg, nb1, nb2, le, ri, event_choose, attack, fuite));
            }
            game_gestion(message, hp, langage, attack, fuite, attack, fuite);
        }

        async function francais(message, hp, langage, msg, nb1, nb2, le, ri, event_choose, attack, fuite) {
            message.channel.send(`**\`Votes terminés! \n\n${text_events[nb1][langage-1]}: ${le}\n${text_events[nb2][langage-1]}: ${ri}\`**`);
            ({ event_choose } = await found_event_choose(nb1, nb2, le, ri, event_choose, langage));
            if (event_choose == 0) {
                ({ hp, attack, fuite } = await tresor(message, langage, hp, attack, fuite));
            } else if (event_choose == 1) {
                ({ hp, attack, fuite } = await dragon(message, langage, hp, attack, fuite));
            } else {
                ({ hp } = await repos(message, langage, hp));
            }
            return { hp, attack, fuite };
        }

        async function anglais(message, hp, langage, msg, nb1, nb2, le, ri, event_choose, attack, fuite) {
            message.channel.send(`**\`Votes ended! \n\n${text_events[nb1][langage-1]}: ${le}\n${text_events[nb2][langage-1]}: ${ri}\`**`);
            ({ event_choose } = await found_event_choose(nb1, nb2, le, ri, event_choose, langage));
            if (event_choose == 0) {
                ({ hp, attack, fuite } = await tresor(message, langage, hp, attack, fuite));
            } else if (event_choose == 1) {
                ({ hp, attack, fuite } = await dragon(message, langage, hp, attack, fuite));
            } else {
                ({ hp } = await repos(message, langage, hp));
            }
            return { hp, attack, fuite };
        }

        async function espagnol(message, hp, langage, msg, nb1, nb2, le, ri, event_choose, attack, fuite) {
            message.channel.send(`**\`¡Votos terminados! \n\n${text_events[nb1][langage-1]}: ${le}\n${text_events[nb2][langage-1]}: ${ri}\`**`);
            ({ event_choose } = await found_event_choose(nb1, nb2, le, ri, event_choose, langage));
            if (event_choose == 0) {
                ({ hp, attack, fuite } = await tresor(message, langage, hp, attack, fuite));
            } else if (event_choose == 1) {
                ({ hp, attack, fuite } = await dragon(message, langage, hp, attack, fuite));
            } else {
                ({ hp } = await repos(message, langage, hp));
            }
            return { hp, attack, fuite };
        }

        async function found_event_choose(nb1, nb2, le, ri, event_choose) {
            if (le > ri) {
                event_choose = nb1;
                if (langage === 1) {
                    message.channel.send(`**\`Vous avez choisi : ${text_events[event_choose][langage-1]}\`**`);
                } else if (langage === 2) {
                    message.channel.send(`**\`You chose : ${text_events[event_choose][langage-1]}\`**`);
                } else {
                    message.channel.send(`**\`Has elegido : ${text_events[event_choose][langage-1]}\`**`);
                }
            } else if (ri > le) {
                event_choose = nb2;
                if (langage === 1) {
                    message.channel.send(`**\`Vous avez choisi : ${text_events[event_choose][langage-1]}\`**`);
                } else if (langage === 2) {
                    message.channel.send(`**\`You chose : ${text_events[event_choose][langage-1]}\`**`);
                } else {
                    message.channel.send(`**\`Has elegido : ${text_events[event_choose][langage-1]}\`**`);
                }
            } else {
                var nb_rand = Math.random() * 11
                if (nb_rand < 5) {
                    event_choose = nb1;
                } else {
                    event_choose = nb2;
                }
                if (langage === 1) {
                    message.channel.send(`**\`Égalité! Le hasard a choisi : ${text_events[event_choose][langage-1]}\`**`);
                } else if (langage === 2) {
                    message.channel.send(`**\`Equality! Chance has chosen : ${text_events[event_choose][langage-1]}\`**`);
                } else {
                    message.channel.send(`**\`Igualdad! El azar eligió : ${text_events[event_choose][langage-1]}\`**`);
                }
            }
            return { event_choose };
        }

        async function tresor(message, langage, hp, attack, fuite) {
            var nb_rand = Math.floor(Math.random() * 2) + 1;
            var chest = Math.floor(Math.random() * 15) + 10;
            if (nb_rand == 1) {
                if (langage === 1) {
                    message.channel.send(`**\`💥 Le coffre étais piégé !! 💥\`**`);
                    message.channel.send(`**\`Vous recevez ${chest} point de dégâts !\`**`);
                    hp -= chest;
                    message.channel.send(`**\`❤️ Vous avez ${hp} point de vie ! ❤️\`**`);
                } else if (langage === 2) {
                    message.channel.send(`**\`💥 The trunk was a trap !! 💥\`**`);
                    message.channel.send(`**\`You receive ${chest} damage points !\`**`);
                    hp -= chest;
                    message.channel.send(`**\`❤️ You have ${hp} life points! ❤️\`**`);
                } else {
                    message.channel.send(`**\`💥 ¡La caja fuerte estaba atrapada! 💥\`**`);
                    message.channel.send(`**\`¡Recibes ${chest} puntos de daño!\`**`);
                    hp -= chest;
                    message.channel.send(`**\`❤️ ¡Tienes ${hp} puntos de vida! ❤️\`**`);
                }
            } else {
                if (langage === 1) {
                    message.channel.send(`**\`✨ Le coffre contenait une potion de soin ! ✨\`**`);
                    message.channel.send(`**\`Vous recevez ${chest} point de vie supplémentaire et 1 point de vitesse!\`**`);
                    hp += chest;
                    fuite += 1;
                    message.channel.send(`**\`❤️ Vous avez ${hp} point de vie ! ❤️\`**`);
                } else if (langage === 2) {
                    message.channel.send(`**\`✨ The chest contained a healing potion! ✨\`**`);
                    message.channel.send(`**\`You receive ${chest} additional life points and 1 speed point!\`**`);
                    hp += chest;
                    fuite += 1;
                    message.channel.send(`**\`❤️ You have ${hp} life points! ❤️\`**`);
                } else {
                    message.channel.send(`**\`✨ ¡El cofre contenía una poción curativa! ✨\`**`);
                    message.channel.send(`**\`¡Recibes ${chest} puntos de vida adicionales y 1 punto de velocidad!\`**`);
                    hp += chest;
                    fuite += 1;
                    message.channel.send(`**\`❤️ ¡Tienes ${hp} puntos de vida! ❤️\`**`);
                }
            }
            return { hp , attack, fuite};
        }

        async function repos(message, langage, hp) {
            var chest = Math.floor(Math.random() * 15) + 10;
            
            if (langage === 1) {
                message.channel.send(`**\`💤 Vous vous reposez et récupérez des points de vie supplémentaire ! 💤\`**`);
                message.channel.send(`**\`Vous recevez ${chest} point de vie supplémentaire !\`**`);
                hp += chest;
                message.channel.send(`**\`❤️ Vous avez ${hp} point de vie ! ❤️\`**`);
            } else if (langage === 2) {
                message.channel.send(`**\`💤 You rest and recover extra life points ! 💤\`**`);
                message.channel.send(`**\`You receive ${chest} additional life points!\`**`);
                hp += chest;
                message.channel.send(`**\`❤️ You have ${hp} life points! ❤️\`**`);
            } else {
                message.channel.send(`**\`💤 ¡Descansas y recuperas puntos de vida extra! 💤\`**`);
                message.channel.send(`**\`¡Recibes ${chest} puntos de vida adicionales!\`**`);
                hp += chest;
                message.channel.send(`**\`❤️ ¡Tienes ${hp} puntos de vida! ❤️\`**`);
            }
            return { hp };
        }

        async function dragon(message, langage, hp, attack, fuite) {
            m_life = Math.floor(Math.random() * (6 - 1 + 1) + 1);
            speed = Math.floor(Math.random() * (6 - 1 + 1) + 1);
            if (langage === 1) {
                message.channel.send(`**\`🐉 Un dragon apparaît! 🐉\n${vie} points de vie: ${m_life}\n${run} vitesse: ${speed}\`**`);
                message.channel.send(`**\`STATISTIQUES :\n⚔️ = ${attack}\n🏃‍♂️ = ${fuite}\`**`);
                mesg = await message.channel.send(`**\`Que voulez-vous faire ?\`**`);
            } else if (langage === 2) {
                message.channel.send(`**\`🐉 A dragon appears! 🐉\n${vie} health points: ${m_life}\n${run} speed: ${speed}\`**`);
                message.channel.send(`**\`STATISTICS :\n⚔️ = ${attack}\n🏃‍♂️ = ${fuite}\`**`);
                mesg = await message.channel.send(`**\`What do you want to do ?\`**`);
            } else {
                message.channel.send(`**\`🐉 ¡Aparece un dragón! 🐉\n${vie} puntos de salud: ${m_life}\n${run} velocidad: ${speed}\`**`);
                message.channel.send(`**\`ESTADÍSTICAS :\n⚔️ = ${attack}\n🏃‍♂️ = ${fuite}\`**`);
                mesg = await message.channel.send(`**\`Que quereis hacer ?\`**`);
            }

            await mesg.react(combat);
            await mesg.react(run);

            const reactions = await mesg.awaitReactions(reaction => reaction.emoji.name === combat ||  reaction.emoji.name === run, {time: 15000});

            try {
                co = reactions.get(combat).count + attack;
            } catch (error) {
                co = 0;
            }
            try {
                ru = reactions.get(run).count + fuite;
            } catch (error) {
                ru = 0;
            }

            if (ru > co) {
                if (langage === 1) {
                    if (ru > speed) {
                        message.channel.send(`**\`${run} Tu as réussis à t'échapper!\`**`);
                    } else {
                        hp -= 10;
                        message.channel.send(`**\`${run} Tu n'as pas réussis à t'enfuir, tu perds 10 ${vie}!\n${vie} = ${hp}\`**`);
                    }
                } else if (langage === 2) {
                    if (ru > speed) {
                        message.channel.send(`**\`${run} You managed to escape!\`**`);
                    } else {
                        hp -= 10;
                        message.channel.send(`**\`${run} You did not manage to escape you lost 10 ${vie}!\n${vie} = ${hp}\`**`);
                    }
                } else {
                    if (ru > speed) {
                        message.channel.send(`**\`${run} ¡Te las arreglaste para escapar!\`**`);
                    } else {
                        hp -= 10;
                        message.channel.send(`**\`${run} No lograste escapar perdiste 10 ${vie}!\n${vie} = ${hp}\`**`);
                    }
                }
            } else {
                if (langage === 1) {
                    if (co > m_life) {
                        message.channel.send(`**\`${combat} Tu as tué le monstre!\`**`);
                        what_case = Math.floor(Math.random() * (2 - 1 + 1) + 1);
                        if (what_case === 1) {
                            attack += 1;
                            message.channel.send(`**\`${combat} Tu as gagné 1 point d'attaque!\`**`);
                        } else {
                            vi = Math.floor(Math.random() * (4- 1 + 1) + 1);
                            message.channel.send(`**\`${combat} Tu as gagné ${vi} point de vitesse!\`**`);
                            fuite += vi;
                        }
                    } else {
                        hp_lost = m_life - (co + 1);
                        hp -= hp_lost;
                        message.channel.send(`**\`${combat} Tu as réussis a t'enfuir mais tu as perdu ${hp_lost} ${vie}!\n${vie} = ${hp}\`**`);
                    }
                } else if (langage === 2) {
                    if (co > m_life) {
                        message.channel.send(`**\`${combat} You kill the monster!\`**`);
                        what_case = Math.floor(Math.random() * (2 - 1 + 1) + 1);
                        if (what_case === 1) {
                            attack += 1;
                            message.channel.send(`**\`${combat} You won 1 attack point!\`**`);
                        } else {
                            vi = Math.floor(Math.random() * (4- 1 + 1) + 1);
                            message.channel.send(`**\`${combat} You won ${vi} speed point!\`**`);
                            fuite += vi;
                        }
                    } else {
                        hp_lost = m_life - (co + 1);
                        hp -= hp_lost;
                        message.channel.send(`**\`${combat} The monster has hurt you but you manage to escape but you lose ${hp_lost} ${vie}!\n${vie} = ${hp}\`**`);
                    }
                } else {
                    if (co > m_life) {
                        message.channel.send(`**\`${combat} ¡Matas al monstruo!\`**`);
                        what_case = Math.floor(Math.random() * (2 - 1 + 1) + 1);
                        if (what_case === 1) {
                            attack += 1;
                            message.channel.send(`**\`${combat} Has ganado 1 punto de ataque!\`**`);
                        } else {
                            vi = Math.floor(Math.random() * (4- 1 + 1) + 1);
                            message.channel.send(`**\`${combat} Has ganado ${vi} punto de velocidad!\`**`);
                            fuite += vi;
                        }
                    } else {
                        hp_lost = m_life * 5;
                        hp -= hp_lost;
                        message.channel.send(`**\`${combat} El monstruo te ha hecho daño pero te las arreglas para escapar pero pierdes ${hp_lost} ${vie}!\n${vie} = ${hp}\`**`);
                    } 
                }
            }

            return { hp , attack, fuite};
        }

    }
}