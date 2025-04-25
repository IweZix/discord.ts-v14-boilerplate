import { readdirSync } from 'fs';
import { config } from '@/utils/config';

import FastLogging from 'fastlogging';
import { REST, Routes } from 'discord.js';

const logger = new FastLogging(true, true);

export const loadCommands = async (client: any) => {
    let count = 0;
    let commandDataArray: any[] = [];

    const dirsCommands = readdirSync('./src/commands');

    for (const dir of dirsCommands) {
        const filesDirs = readdirSync(`./src/commands/${dir}`).filter((file) =>
            file.endsWith('.ts')
        );

        for (const file of filesDirs) {
            const command = require(`../commands/${dir}/${file}`);
            client.commands.set(command.data.name, command);
            count++;

            try {
                commandDataArray.push(command.data.toJSON());
            } catch (error) {
                logger.error(`[Commands] => Failed to load command ${command.data.name}: ${error}`);
            }
        }
    }

    logger.info(`[Commands] => ${count} commands loaded`);

    const rest = new REST({ version: '10' }).setToken(config.token);

    try {
        logger.info(`[Discord] => Deploying slash commands...`);
        await rest.put(
            Routes.applicationCommands(config.id),
            { body: commandDataArray }
        );
        logger.info(`[Discord] => Slash commands deployed successfully!`);
    } catch (error) {
        logger.error(`[Discord] => Failed to deploy slash commands: ${error}`);
    }
};
