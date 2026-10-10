#!/usr/bin/env node

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

// Define the CLI commands and options is what it told me to write, but... 
// i honestly hnave no ide what this code does, but...

// it looks like it makes a command line interface 
// for a character named Miklu to greet people in different ways 
// based on the command used. 
// It uses the yargs library to parse command line arguments and define commands and options. 
// The code defines a "greeting" command with subcommands for different greetings, 
// and a "help" command to show help information. 
// The user can specify their name with the --name option when using the greeting command. 

// every thign after the 2nd 'but' was just suggested btw i have no idea what im doing
const args = yargs(hideBin(process.argv))
    .scriptName("miklu")
    
    //miklu's main greeting command
    .command(
        "greeting", 
        "Miklu's greeting to you~", 
        (command) => 
            command
                //Sets up an option for the command
                .option("name", {
                alias: "n",
                type: "string",
                default: "Miklu",
                describe: "The name of the person to greet"
                })
                
                //og miklu's greeting option
                .command(
                    "og",
                    "Original Miklu's greeting~",
                    () => {},
                    ({ name }) => {
                        console.log("Hallo, ${name}! I'm Hacksune Miklu!");
                    }
                )
                
                //Leo/need miklu's greeting option
                .command(
                    "L/n",
                    "Leo/need's Miklu's greeting~",
                    () => {},
                    ({ name }) => {
                        console.log("Hello! I\'m the Miklu from the School Sekai! Nice to meet you!");
                    }
                )

                //MORE! MORE! JUMP! miklu's greeting option
                .command(
                    "MMJ",
                    "MORE! MORE! JUMP! Miklu's greeting!",
                    () => {},
                    ({ name }) => {
                        console.log('Hallo!~I\'m the Miklu from the Stage Sekai! It\'s so nice to meet you all!');
                    }
                )

                //Vivid BAD Squad miklu's greeting option
                .command(
                    "VBS",
                    "Vivid BAD Squad Miklu's greeting~",
                    () => {},
                    ({ name }) => {
                        console.log("Hello, I\'m the Miklu from the Street Sekai. Nice to meet you.");
                    }

                )

                //Wonderlands x Showtime miklu's greeting option
                .command(
                    "WxS",
                    "Wonderlands x Showtime Miklu's greeting~",
                    () => {},
                    ({ name }) => {
                        console.log("Wonderhoy! I\'m Miklu from the Wonderlands Sekai, and it\'s so wonderhoy to meet you all!!!");
                    }
                )

                //Nightcord at 25 miklu's greeting option
                .command(
                    "n25",
                    "Nightcord at 25 Miklu's greeting~",
                    () => {},
                    ({ name }) => {
                        console.log("Hello... I'm from the Empty Sekai... Its.. nice to meet you.");
                    }
                )
    )

    //miklu's role/group summary
    .command(
        "summary",
        "summairves ig",
        (command) => 
            command
            //sets up thing
            .option("name", {
                alias: "n",
                type: "string",
                default: "miklu",
                describe: "The summary of their group + their role"

            })
            .command(
                "og",
                "og miklu's role",
                () => {},
                ({ name }) => {
                    console.log("hello")
                }
            )
    )



    //help command
    .command(
        "help",
        "Show help information",
        () => {},
        () => {
            console.log("Miklu's CLI Help!");
            console.log("==================");
            console.log("Commands:");
            console.log("  greeting  Miklu's greeting to you~");
            console.log("  help      Show help information");
        }
    )
    .demandCommand(1, "Choose a command. Try 'miklu greeting --name=YourName' to say hello to Miklu!")
    .help()
    .parse();
