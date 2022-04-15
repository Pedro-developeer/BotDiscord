const Discord = require("discord.js")

module.exports = {
    name: "ban", 
    aliases: ["ban"],

    run: async (client, message, args) => {

        if (!message.member.permissions.has("BAN_MEMBERS")) {
            message.reply(`
            You are not allowed to do that.`)
        } else {

            let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            let motivo = args[1];

            if (!motivo) motivo = "Undefined.";

            if (!user) {

                let embed = new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setDescription(`\` ban [membro] [motivo]\``);

                message.reply({ embeds: [embed] })

            } else {

                user.ban({ reason: motivo }).then(() => message.reply(`User \`${user.user.tag}\` has been successfully banned.`)).catch(e => {
                    message.reply(`Unable to ban user \`${user.user.tag}\`.`)
                })

            }
        }

    }
}