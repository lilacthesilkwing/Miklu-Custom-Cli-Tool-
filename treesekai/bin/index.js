#!/usr/bin/env node

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const args = yargs(hideBin(process.argv))
    .scriptName("miklu")
    .command(
        "greeting", 
        "Miklu's greeting to you~", 
        (command) => 
            command.option("name", {
                alias: "n",
                type: "string",
                default: "Miklu",
                describe: "The name of the person to greet"
            }),
            ({ name }) => {
                console.log(`Hallo, friend! I'm Hacksune Miklu!`);
            }
    )
    .command(
        "help"
    )
    .demandCommand(1, "Choose a command. Try 'miklu greeting --name=YourName' to say hello to Miklu!")
    .help()
    .parse();
