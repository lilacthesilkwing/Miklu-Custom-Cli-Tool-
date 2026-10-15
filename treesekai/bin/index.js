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
    
    //miklu cli tool introduction
    .command(
        "$0",
        "Introduction to the CLI tool, Miklu",
        () => {},
        () => {
            console.log("Hello! I'm Hacksune Miklu! I'm a Hatsune Miku inspired CLI tool that can talk to you about Project Sekai. \n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣀⣀⠀⠀⣀⡠⠴⠒⠚⠉⠉⠓⠒⠦⣄⣶⠒⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ \n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡷⢬⣉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠠⡌⠻⣧⢻⣧⣤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ \n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣖⠗⡋⢹⠀⠀⢰⡄⠀⠀⢸⣷⡀⠀⣠⠽⣆⢼⣇⢻⣸⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ \n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡜⣡⣶⢋⡏⠙⢢⣏⣇⠀⠀⠈⣇⡵⡏⠀⠀⢹⡏⢾⣿⠃⢿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ \n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⢿⢻⣏⣿⡇⡄⣾⠀⠹⡄⠄⠀⡇⠀⠹⣤⠈⠹⣿⣾⢸⠀⢘⣷⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ \n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣴⣯⣿⣽⣿⣷⢸⡗⠦⣄⡹⣼⣄⣿⣴⠛⠹⡄⡇⣿⣿⠾⠚⢹⢿⢽⣽⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀ \n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣞⣾⣿⢿⣯⢻⢻⡴⠞⠁⠈⠻⣿⣌⡉⠓⣿⣰⡿⠀⠀⠀⠸⡜⡾⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀ \n⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⣡⠊⢸⣹⠁⠈⠙⣾⡄⠁⠀⢰⠛⠉⠉⠉⢳⣀⣿⣿⠃⠀⠀⣀⣀⣧⣿⡞⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀ \n⠀⠀⠀⠀⠀⠀⠀⣠⠋⡴⠁⠀⠸⢿⣤⣤⣤⣹⣿⣷⣶⣾⣷⣶⣶⣺⣋⣽⣿⣷⠶⠟⠛⠋⢧⠀⠀⠸⡜⣷⠀⠀⠀⠀⠀⠀⠀⠀ \n⠀⠀⠀⠀⠀⢀⡜⠁⡰⠁⠀⠀⢠⡿⠀⠀⠀⠉⠉⠉⠙⢻⡟⣹⣿⠃⣿⠋⠁⠀⠀⠀⠀⠀⠸⡄⠀⠀⢣⠹⣧⠀⠀⠀⠀⠀⠀⠀ \n⠀⠀⠀⠀⢠⠏⡀⢠⠇⠀⠀⢠⡿⠁⠀⠀⠀⠀⣤⣶⡴⠚⢻⠡⣸⠀⢹⣆⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠸⡄⢻⣇⠀⠀⠀⠀⠀⠀ \n⠀⠀⠀⢀⡏⣼⠁⢸⠀⠀⠀⣾⠃⠀⠀⠀⠀⠀⢻⣿⣧⣀⣬⠋⠁⠀⣠⣿⣶⣆⠀⠀⠀⠀⠀⡇⠀⠀⠀⡇⠈⣿⡀⠀⠀⠀⠀⠀ \n⠀⠀⠀⣸⣸⣿⠀⡇⠀⢰⣸⡟⠀⠀⠀⣀⣠⠴⠚⣟⣻⣧⣯⣗⣤⣾⣿⣿⡿⠋⠀⠀⠀⠀⣸⣤⠀⠀⠀⡇⡆⢻⠃⠀⠀⠀⠀⠀ \n⠀⠀⠀⣿⡿⢸⡀⣇⠀⣸⣿⡁⠀⣾⣻⡁⣀⣤⣶⠟⠋⠉⠛⢿⣋⣻⡏⠉⠀⠀⠀⠀⠀⢰⣿⡇⠀⠀⠀⣷⡇⣸⡄⠀⠀⠀⠀⠀ \n⠀⠀⠀⠿⠇⠀⢧⢸⠀⣿⡿⠇⠀⠈⠛⠛⠋⠉⠀⠀⠀⠀⠀⡟⠀⣿⠇⠀⠀⠀⠀⠀⢠⣿⣿⡇⠀⠀⣰⡿⣧⣿⠃⠀⠀⠀⠀⠀ \n⠀⠀⠀⠀⠀⠀⠀⢿⣄⣹⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡇⠀⣿⠀⠀⠀⠀⠀⠀⣸⡿⢸⠁⢠⣾⠋⢰⣿⡏⠀⠀⠀⠀⠀⠀ \n⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣶⣶⡿⠀⠀⠀⠀⠀⠀⠉⠁⢸⣶⡟⠁⠀⠾⠟⠀⠀⠀⠀⠀⠀⠀ \n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ \n type in 'miklu greeting' then either 'legacy', 'L/n', 'MMJ', 'VBS', 'WxS', or 'n25' \n to see one of my six unique greetings! \n...or try typing in 'miklu helpme' to see all my commands!")
        }
    )

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
                default: "friend",
                describe: "The name of the person to greet"
                })
                
                //legacy miklu's greeting option
                .command(
                    "legacy",
                    "Original Miklu's greeting~",
                    () => {},
                    ({ name }) => {
                        console.log(`Hello, ${name}! I'm Hacksune Miklu!`);
                    }
                )
                
                //Leo/need miklu's greeting option
                .command(
                    "L/n",
                    "Leo/need's Miklu's greeting~",
                    () => {},
                    ({ name }) => {
                        console.log(`Hello, ${name}! I'm the Miklu from the School Sekai! Nice to meet you!`);
                    }
                )

                //MORE! MORE! JUMP! miklu's greeting option
                .command(
                    "MMJ",
                    "MORE! MORE! JUMP! Miklu's greeting!",
                    () => {},
                    ({ name }) => {
                        console.log(`Hallo, ${name}! I'm the Miklu from the Stage Sekai! It's so nice to meet you!`);
                    }
                )

                //Vivid BAD SQUAD miklu's greeting option
                .command(
                    "VBS",
                    "Vivid BAD SQUAD Miklu's greeting~",
                    () => {},
                    ({ name }) => {
                        console.log(`Hello, ${name}! I'm the Miklu from the Street Sekai. Nice to meet you.`);
                    }

                )

                //Wonderlands x Showtime miklu's greeting option
                .command(
                    "WxS",
                    "Wonderlands x Showtime Miklu's greeting~",
                    () => {},
                    ({ name }) => {
                        console.log(`Wonderhoy, ${name}! I'm Miklu from the Wonderlands Sekai, and it's so wonderhoy to meet you all!!!`);
                    }
                )

                //Nightcord at 25:00 miklu's greeting option
                .command(
                    "n25",
                    "Nightcord at 25 Miklu's greeting~",
                    () => {},
                    ({ name }) => {
                        console.log(`Hello, ${name}... I'm from the Empty Sekai... Its.. nice to meet you.`);
                    }
                )
    )

    //miklu's role/group summary
    .command(
        "desc",
        "Each miklu's summary of their sekai + their group + job? if applicable",
        (command) => 
            command
            //sets up option for the command
            .option("name", {
                alias: "n",
                type: "string",
                default: "miklu",
                describe: "The summary of their group + their role" 
            })

            //legacy miklu's role explanation
            .command(
                "legacy",
                "Explains Miklu's role in the Tree of Feeling Sekai",
                () => {},
                () => {
                    console.log("This place is called the Tree of Feelings sekai, and as you might have guessed, \n this tree is made of all the feelings of the owners of these sekais! \n\n Oh, you want to know what I am doing? \n I watch over all the sekai's and their owners. \n I hope they can all find their true feelings!")
                }
            )

            //Leo/need miklu's sekai description + character descriptions 
            .command(
                "L/n",
                "Leo/need miklu's description of her sekai and group members",
                (command) => 
                    command
                    .option ("name", {
                        alias: "n",
                        type: "string",
                        default: "miklu",
                        describe: "sekai description + character description",
                    })

                    //Leo/need miklu's sekai description
                    .command(
                        "$0",
                        "Leo/need miklu's description of her sekai",
                        () => {},
                        ({ name }) => {
                            console.log("Well, as you've probably guessed based on the name, this sekai mostly resembles an empty school.")
                            console.log("There are even lots of enpty classrooms and an acessible roof where you can see the stars at night!\n")
                            console.log("Oh, you want to know what I'm doing?")
                            console.log(" I'm tuning my guitar so I can practice with the girls and Luka later!")
                        }
                    )

                    //Leo/need miklu's description of Ichika Hoshino unfinshed
                    .command(
                        "IchiH",
                        "Leo/need miklu's description of Ichika Hoshino",
                        () => {},
                        ({ name }) => {
                            console.log("Ichika is the group leader (not band leader!) and she's a huge fan of Hacksune Miklu (that's me!) in general, but she especially loves my music!")
                            console.log(" (she even left a whole bunch of cds in the sekai the last time she was here so that Leo/need could practice with them!)")
                            console.log("She also enjoys taking care of her cacti and loves yakisoba buns and she hates peas and thrill rides.")
                        }
                    )

                    //Leo/need miklu's description of Saki Tenma uninehs
                    .command(
                        "SakiT",
                        "Leo/need miklu's description of Saki Tenma",
                        () => {},
                        ({ name }) => {
                            console.log("fasion/ake iup ideos beading she can juuggle snaks (hate rice porrite + bieng alone) phenny plushies")
                        }
                    )

                    //Leo/need miklu's description of Honami Mochizuki unfineds
                    .command(
                        "HonaM",
                        "Leo/need miklu's description of Honami Mochizuki",
                        () => {},
                        ({ name }) => {
                            console.log("leaedr of the band walking her dog shibao gardenign apple pie (hates cheese and drawing) stargazing guide")
                        }
                    )

                    //Leo/need miklu's description of Shiho Hinomori unfineshed
                    .command(
                        "ShihH",
                        "Leo/need miklu's description of Shiho Hinomori",
                        () => {},
                        ({ name }) => {
                            console.log("girl band gigs and playing guitar ramen salibury steak (dislaike tofu + shikusku) bass guitsar she might be down to play bass though")
                        }
                    )
            )

            //MORE! MORE! JUMP! miklu's sekai description + character description
            .command(
                "MMJ",
                "MORE! MORE! JUMP! miklu's description of her sekai and her group members",
                (command) => 
                    command
                    .option("name", {
                        alias: "n",
                        type: "string",
                        default: "miklu",
                        describe: "sekai description + character description"
                    })

                    //MORE! MORE! JUMP! miklu's sekai description
                    .command(
                        "$0",
                        "MORE! MORE! JUMP! miklu's description of her sekai",
                        () => {},
                        ({ name }) => {
                            console.log("This sekai has soooo many different stages in it!")
                            console.log("If you look out over the stages, you can see all the ligth sticks waving in the crowd!\n")
                            console.log("Ah! I'm late for my idol trainng session with Rin!")
                        }
                    )

                    //MORE! MORE! JUMP! miklu's description of Minori Hanasato
                    .command(
                        "MinoH",
                        "u",
                        () => {},
                        ({ name }) => {
                            console.log("dance covers dirry lookign ofater animals coming up eith cahtchpashese salmon (dislikes brocoili +reladxing activitys) uidol merch")
                        }
                    )

                    //MORE! MORE! JUMP! miklu's description of Haruka Kiritani
                    .command(
                        "HaruK",
                        "h",
                        () => {},
                        ({ name }) => {
                            console.log("ffcoloectin pengiun themed mecrh sweet things (dislikes wasabi and idleness) glow stick")
                        }
                    )

                    //MORE! MORE! JUMP! miklu's description of Airi Momoi
                    .command(
                        "AiriM",
                        "d",
                        () => {},
                        ({ name }) => {
                            console.log("reaseching idols shopping japanese sweeets (dislikes liver + ccats) homemade airir fan wjfodfd")
                        }
                    )

                    //MORE! MORE! JUMP! miklu's description of Shizuku Hinomori
                    .command(
                        "ShizH",
                        "d",
                        () => {},
                        ({ name }) => {
                            console.log("reading taking walks archery udon nnodles tofu skin (dislikes spicy fooods reading mpas using computers) towel for airi")
                        }
                    )
            )

            //Vivid BAD Squad miklu's sekai description
            .command(
                "VBS",
                "Vivid BAD Squad miklu's description of her sekai and group members",
                (command) =>
                    command
                    .option("name", {
                        alias: "n",
                        type: "string",
                        default: "miklu",
                        describe: "sekai description + character descriptions"
                    })
                    
                    //Vivid BAD Squad miklu's sekai description
                    .command(
                        "$0",
                        "Vivid BAD Squad miklu's description of her sekai",
                        () => {},
                        ({ name }) => {
                            console.log("This sekai is mostly a bunch of streets and alleyways. ")
                            console.log("Although, MEIKO has a cafe over there. She makes pretty good coffee and desserts, too\n")
                            console.log("Well, I've got to go practice with the Kagamines.")
                            console.log(" I promised I'd sing with them later today. See you around!")
                        }
                    )

                    //Vivid BAD Squad miklu's description of Kohane Azuzawa
                    .command(
                        "KohaA",
                        "hamptster",
                        () => {},
                        ({ name }) => {
                            console.log("hampptesr")
                        }
                    )

                    //Vivid BAD Squad miklu's description of An Shiraishi
                    .command(
                        "AnS",
                        "d",
                        () => {},
                        ({ name }) => {
                            console.log("g")
                        }
                        
                    )

                    //Vivid BAD Squad miklu's description of Akito Shinonome
                    .command(
                        "AkitS",
                        "f",
                        () => {},
                        ({ name }) => {
                            console.log("g")
                        }
                    )

                    //Vivid BAD Squad miklu's description of Toya Aoyagi
                    .command(
                        "ToyaA",
                        "k",
                        () => {},
                        ({ name }) => {
                            console.log("jk")
                        }
                    )
            )

            //Wonderlands x Showtime miklu's sekai description
            .command(
                "WxS",
                "Wonderlands x Showtime miklu's description of her sekai and group members",
                (command) =>
                    command
                    .option("name", {
                        alias: "n",
                        type: "string",
                        default: "miklu",
                        describe: "sekai description + character descriptions"
                    })

                    //
                    .command(
                        "$0",
                        "Wonderlands x Showtime miklu's description of her sekai",
                        () => {},
                        ({ name }) => {
                            console.log("This sekai has so many different things in it, I'm so excited to show all of them to you! \nShould I show you the super fwoosh-fwoosh train or - the plushies might also be holding a show right now... \nUuuee! There's so much to choose from... \n\nOh, you wonder why this sekai is called the wonderland sekai and not something like the park sekai? \n I'll go find Tsukasa-kun and ask him right now! Tsukasa-kunnnn!")
                            console.log("Should I show you the super fwoosh-fwoosh train or - the plushies are holding a show right now too!...")
                            console.log("Uuuee! There's so much to choose from...\n")
                            console.log("Oh, you wonder why this sekai is called the wonderland sekai is called the wonderland sekai and not something like the park sekai?")
                            console.log("I'll go find Tsukasa-kun and ask him right now! Tsukasa-kunnnn!")
                        }
                    )

                    //Wonderlands x Showtime miklu's description of Tsukasa Tenma
                    .command(
                        "TsukT",
                        "d",
                        () => {},
                        ({ name }) => {
                            console.log("fih")
                        }
                    )

                    //Wonderlands x Showtime miklu's description of Emu Otori
                    .command(
                        "EmuO",
                        "m",
                        () => {},
                        ({ name }) => {
                            console.log("k")
                        }
                    )

                    //Wonderlands x Showtime miklu's description of Nene Kusanagi
                    .command(
                        "NeneK",
                        "f",
                        () => {},
                        ({ name }) => {
                            console.log("vvv")
                        }
                    )

                    //Wonderlands x Showtime miklu's description of Rui Kamishiro
                    .command(
                        "RuiK",
                        "f",
                        () => {},
                        ({ name }) => {
                            console.log("dj")
                        }
                    )
            )

            //Nightcord at 25:00 miklu's sekai description 
            .command(
                "n25",
                "Nightcord at 25:00 miklu's description of her sekai and group members",
                (command) =>
                    command
                    .option("name", {
                        alias: "n",
                        type: "string",
                        default: "miklu",
                        describe: "sekai description + character descriptions"

                    })

                    .command(
                        "$0",
                        "Nightcord at 25:00 miklu's description of her sekai",
                        () => {},
                        ({ name }) => {
                            console.log("Ah... You want to know about this sekai?")
                            console.log(" ...there isn't very much here to see though. Sorry...\n") 
                            console.log("...Mafu- Yuki and the others sometime bring us things from outside...")
                            console.log(" so you could see those later.")
                        }
                    )

                    //Nightcord at 25:00 miklu's description of Kanade Yoisaki
                    .command(
                        "K",
                        "",
                        () => {},
                        ({ name }) => [
                            console.log("kanad")
                        ]
                    )

                    //Nightcord at 25:00 miklu's description of Mafuyu Asahina

                    //Nightcord at 25:00 miklu's description of Ena Shinonome

                    //Nightcord at 25:00 miklu's description of Mizuki Akiyama
            )
    )

    //silly stuff here(tbd)

    //help command
    .command(
        "helpme",
        "Show help information",
        () => {},
        () => {
            console.log("Miklu's CLI Commands Help!");
            console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠟⢛⣛⣋⣙⣛⠛⠿⢿⣿⣿⣿⡿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢋⣉⣉⣉⣙⡛⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⢋⣡⣴⣶⣿⣿⣿⣿⣿⣿⣿⣶⣄⠙⠛⣡⣤⣶⣶⣤⣌⡙⠻⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⣴⣿⣿⣿⣿⣿⣿⣿⣶⣤⡉⠻⣿⣿⡿⠟⢁⣤⣾⣿⣿⣿⣿⣿⣿⠿⠋⡠⠤⠤⠈⢛⣤⣾⠛⢋⣉⡙⠻⡿⠋⣠⠴⢂⣤⠙⢛⣉⣥⣤⣌⠙⢿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠸⠟⢠⣾⣿⣿⣿⣿⣿⣿⣿⠟⢁⣠⣤⣶⣾⣿⣿⣿⣿⣿⣷⣶⣤⣌⡀⠀⠚⣡⣴⣿⣿⡷⠈⢿⣿⣿⣿⣷⡈⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⠃⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⣠⣴⣿⣿⣿⠿⢋⣤⡆⠈⣿⣿⣿⣿⡇⢹\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢠⣾⣿⣿⠿⠿⢿⣿⣿⡿⠁⡼⠿⠿⠛⣛⣋⣉⣉⣉⣉⣉⣉⣙⣛⠋⣰⣿⣿⡿⢋⣡⣾⡿⠟⣡⡄⢸⣿⣿⠿⠃⣠\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⢠⣿⣿⡿⢁⣶⡗⢀⠙⡿⢁⣤⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢰⡿⠟⣡⣴⣿⠿⢋⣴⣾⣿⡷⠀⠉⣡⣴⠟⣩\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⢠⣿⣿⣿⢁⣾⡿⢠⣿⡇⠁⣾⡿⠿⠟⢛⣉⣉⣩⡭⠭⣥⣬⣭⣭⣉⠁⢉⣴⣾⡿⠛⣡⣶⣿⣿⠟⠉⠀⣀⠈⢋⣠⣾⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⣿⣿⣿⣿⣿⣿⣿⣿⡟⢀⣿⣿⣿⠃⣼⣿⠁⣾⣿⠀⠠⠶⠒⢉⡉⣁⢠⡄⣴⡂⡆⢰⣆⢠⡀⣤⠀⢹⠟⢋⣴⣾⣿⡿⠋⣡⡾⠁⠐⣹⠀⣿⣿⡿⢋\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⢠⣿⣿⣿⣿⣿⣿⣿⣿⠀⣾⣿⣿⠇⣰⣿⠃⣼⣿⠇⠀⣠⢀⡾⡸⢠⣿⢸⡇⣿⣷⠸⡈⢿⡆⢱⠸⣷⡄⢀⠉⠛⠛⠁⠐⠛⠋⠁⢴⣾⡏⢸⠟⣡⣶⢿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⠁⣤⣶⣶⣦⠀⣿⡇⣰⣿⡟⠀⣰⠇⣼⠇⡇⣼⣿⢸⡇⣿⣿⡆⡇⢸⣿⡀⡆⢻⣿⡄⡇⠸⣿⣌⠹⡆⣤⡑⢤⡈⠁⠰⠾⢋⣴⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⠃⣸⣿⣿⠿⡿⢀⣿⣴⣿⣿⠀⠀⣿⢰⣿⠀⡇⣿⠛⠸⠇⠿⠛⠁⢁⣨⣥⣤⣤⣤⣤⣤⣤⠀⠀⣌⣀⠁⠹⢿⣦⠙⡄⢠⡈⠛⢿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⠃⠀⣿⣿⠃⢶⣦⣬⣉⠙⠻⠇⡄⠀⠹⡀⢿⡄⠇⠙⠁⠀⣀⠐⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢸⡆⢻⣿⣿⠀⣤⡈⠒⢡⣿⣿⡇⡆⣀\n⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸⡟⠛⠻⢿⡟⢰⣧⣌⠙⢧⡈⠛⢿⣿⣿⣄⢠⡇⢰⣦⣤⣤⣤⠖⠊⣤⣾⣿⡇⢠⣼⣿⣿⣿⣿⣿⣿⣿⡿⠃⠘⠓⠈⣛⣿⠀⣽⣿⣷⣤⡈⠛⠚⠡⠟\n⣿⣿⣿⣿⣿⣿⣿⣿⡇⠘⢠⣿⣶⣤⣁⡘⠛⠻⣿⣶⣶⣶⠘⣿⣿⠃⣸⡇⠘⠿⠟⠋⠁⠐⠒⠠⢍⠙⠁⣿⣿⣿⣿⣿⣿⣿⣿⣥⡆⢠⣾⣿⡄⢿⣿⠀⣿⣿⣿⣿⣿⡇⠀⣶⣾\n⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠋⠙⣿⣿⣿⣿⣿⣶⣄⠙⢿⣿⣿⡿⠃⡔⠻⠃⠀⢀⡀⠒⠀⡁⠒⢦⡀⠁⢸⣿⣿⣿⣿⣿⠟⠁⣾⡟⢀⣾⣿⣿⣇⢸⣿⠀⣿⣿⣿⣿⣿⡇⢠⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⠏⣰⣦⣀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣄⠉⠉⣤⣾⣿⣷⡄⢰⡿⠁⠐⣸⣧⠀⠀⢹⠂⣾⣿⣿⣿⠟⠁⢀⡾⠋⣰⣿⣿⣿⣿⣿⠀⠇⣰⣿⣿⡏⢹⣿⠇⣼⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣀⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠠⠠⡈⠻⣿⣿⣧⠘⡇⢰⣶⣿⣿⣷⡄⢸⠀⠿⠟⢋⡡⠂⠐⣋⡤⠞⣋⠩⠝⠛⠋⠉⡀⢀⣿⣿⣿⠇⢸⡿⢠⣿⣿⣿\n⣿⣿⣿⣿⣿⡿⠟⣛⠀⠐⢈⡉⠻⢿⣿⣿⣿⣿⣿⠏⠀⠀⣤⣿⣦⣈⠛⠿⣆⠡⡀⠿⣿⡟⡩⠂⣸⣦⣶⣾⣿⣷⣶⣾⡟⠁⠀⢀⣤⣴⣶⣾⡿⠁⣼⣿⣿⠏⠀⡾⠁⣼⣿⣿⣿\n⣿⣿⣿⡿⢩⣴⣿⡿⠃⣴⣿⣿⣷⣦⣌⡛⠿⣿⠋⣰⠀⣇⠙⣿⣿⣿⣷⡆⣈⠀⢀⣠⣌⣉⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣤⣄⣈⠉⠙⠛⢁⣾⡿⠛⢁⡴⠀⢃⣼⣿⣿⣿⣿\n⣿⠟⣫⣴⣿⣿⠟⢁⣾⣿⣿⣿⣿⣿⣿⣿⠖⢀⣴⡟⠸⣿⣧⣌⠛⠿⣿⠇⢹⣷⣄⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄⠀⣀⠁⣀⡒⠈⣇⣠⣾⣿⣿⣿⣿⣿\n⣧⣾⣿⣿⡿⠃⣰⣿⣿⣿⣿⣿⣿⣿⡿⠃⣠⣿⣿⡇⣼⠸⣿⣿⣿⣶⣤⠀⣸⣿⡿⠀⠿⣿⣿⣿⣿⠀⣄⡙⠻⢿⣿⣿⣿⣿⣿⣿⣿⡿⠋⣰⣿⠀⣿⣿⡆⢸⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⠟⢀⣾⣿⣿⣿⣿⣿⣿⣿⡟⢁⣼⣿⣿⣿⠀⡿⢰⣿⣿⣿⣿⣿⠀⡿⠋⣠⣾⣦⠈⠛⢿⣿⣦⣌⣉⠗⠆⣹⣿⣿⣿⡿⠟⢋⣠⣴⣿⣿⡇⢸⡿⠁⢸⣿⣿⣿⣿⣿⣿⣿\n⣿⡿⠋⣴⣿⣿⣿⣿⣿⣿⣿⣿⠟⢠⣾⣿⣿⣿⣿⠀⣡⣾⣿⣿⣿⣿⣿⣀⣤⣾⣿⣿⣿⡀⠁⠀⠈⠙⠻⠿⠿⠿⠟⢛⣉⣤⣴⣾⣿⣿⠿⢛⣉⣤⠸⠁⣴⠘⣿⣿⣿⣿⣿⣿⣿\n⡟⢁⣾⣿⣿⣿⣿⣿⣿⣿⣿⠋⣠⣿⣿⣿⣿⠟⠃⠘⠛⠻⠿⠿⣿⣿⣿⣿⣿⡿⠿⠿⠿⠃⣤⣄⣀⣀⣀⣀⡀⠾⢋⣤⣙⠿⠿⠿⠛⣁⣴⣿⣿⣿⣤⣾⣿⡄⢹⣿⣿⣿⣿⣿⣿\n⢠⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⢀⢉⣉⣉⣛⣁⠀⢻⣿⠿⠷⢶⣤⣤⣈⠁⢤⡀⠶⣶⣿⣷⣤⡈⠻⣿⣿⣿⣿⣇⠀⣌⣉⣙⠛⠻⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠘⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣏⣠⣆⢸⡄⣿⣿⣿⣿⣷⠈⣭⣭⣉⣒⠲⠮⢭⣷⡀⠙⢦⣌⠻⣿⣿⣿⣦⣌⠻⢿⣿⣿⢠⣿⣿⣿⣿⠃⣴⠂⠀⣉⠙⠿⣿⣿⣿⣿⣿⡀⣿⣿⣿⣿⣿⣿\n⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⡇⣿⣿⣿⣿⣿⠀⢸⣿⣿⣿⣿⣿⣶⣶⣤⣆⠀⡉⠳⣤⡙⠿⣿⣿⣷⣄⡙⠇⣼⣿⣿⡿⣡⡾⠁⣄⠳⡈⠳⣄⠈⠻⢿⣿⣿⣇⢸⣿⣿⣿⣿⣿\n⣄⠙⠿⠿⠿⢿⣿⣿⣿⣿⡿⢰⡇⣿⣿⣿⣿⣿⠀⣶⠬⢍⣉⣛⠻⠿⠿⣿⣿⡀⢸⢰⣄⠙⠲⣌⡙⠿⣿⣿⣶⣉⠻⣧⡰⣯⡀⠇⣿⡀⠱⡄⢈⠳⣄⠀⠉⠻⣿⠀⣿⣿⣿⣿⣿\n⣿⣿⣶⣶⣶⣶⣶⡄⢨⣉⠁⠺⠃⠿⠿⠿⠿⠇⢠⣿⣿⣶⣶⣮⣭⣉⣑⠒⠶⡇⠈⡆⢻⡆⢢⠀⡉⠓⠦⢍⡙⣿⣷⣌⠛⢦⣿⡆⠘⣇⠀⠈⢆⠹⣌⠓⢌⠢⡈⠁⢹⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⡇⣿⣿⣷⣿⣿⣿⣶⠀⢄⠒⠄⣙⠛⠿⠿⣿⣿⣿⣿⣿⣿⡇⠀⢈⣀⣤⣤⣤⣴⣄⠐⠀⡆⣽⣿⣿⣷⣦⡈⠀⢢⠸⡄⠸⣆⠣⡘⢷⣆⠱⢌⠢⠀⢻⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣿⡆⠈⠻⢶⣤⣭⣍⣓⣒⠒⠲⢿⣿⣿⠁⣀⠸⣿⣿⡿⠿⠟⠛⠀⠘⢧⣭⣉⣙⣛⡛⠛⠓⢄⠁⠳⠀⢻⣦⡐⢄⠻⣷⡈⡆⠀⢸⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣿⠇⣼⣶⣦⣤⣬⣉⣉⠉⠛⠛⠛⠛⠛⠀⢻⢠⡄⢢⠰⣦⠰⡘⣿⣦⢰⠀⡄⢠⠈⣍⠉⠉⣉⢁⡀⢀⠈⠻⣷⡈⠆⢻⡇⡇⠀⠘⣿⣿⣿]\n")
            console.log("============================================================================\n");
            console.log("Commands:");
            console.log("  greeting  All of the Miklus' greetings for you!"); 
            console.log("     legacy    Original miklu's greeting");
            console.log("     L/n       Leo/need miklu's greeting");
            console.log("     MMJ       MORE! MORE JUMP! miklu's greeting");
            console.log("     VBS       Vivid BAD Squad miklu's greeting");
            console.log("     WxS       Wonderlands x Showtime miklu's greeting");
            console.log("     n25       Nightcord at 25 miklu's greeting");
            console.log("  desc      Each miklu's summary of their sekai's appearance or their main role!");
            console.log("     legacy    Explains miklu's role in the Tree of Feelings Sekai");
            console.log("     L/n       Leo/need miklu's description of her sekai");
            console.log("     MMJ       MORE! MORE! JUMP! miklu's description of her sekai");
            console.log("     VBS       Vivid BAD Squad miklu's description of her sekai");
            console.log("     WxS       Wonderlands x Showtime miklu's description of her sekai"); 
            console.log("     n25       Nightcord at 25:00 miklu's description of her sekai");
            console.log("  helpme    Shows this information, duh!");
        }
    )
    .demandCommand(1, "Choose a command. Try 'miklu greeting --name=YourName' to say hello to Miklu!")
    .help()
    .parse();

    //to do: test miklu desc legacy (+ all the other legacy commands)
    //       test all the new desc commands (just leonii for now) 
    // eventually: visiual novel from the pov of all the main characters fallowing through main story 2nd person with bad end being world link 2 based
    // difjirbvignbn bmb.kujgifngpeifiehieirffffieofosfdiswfffwerwhgjfheifhewihfiw
