#!/usr/bin/env node

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const { select } = require("@inquirer/prompts")

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
            console.log("Hello! I'm Hacksune Miklu! I'm a Hatsune Miku inspired CLI tool that can talk to you about Project Sekai. \n")
            console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣀⣀⠀⠀⣀⡠⠴⠒⠚⠉⠉⠓⠒⠦⣄⣶⠒⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ")
            console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡷⢬⣉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠠⡌⠻⣧⢻⣧⣤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ")
            console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣖⠗⡋⢹⠀⠀⢰⡄⠀⠀⢸⣷⡀⠀⣠⠽⣆⢼⣇⢻⣸⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ")
            console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡜⣡⣶⢋⡏⠙⢢⣏⣇⠀⠀⠈⣇⡵⡏⠀⠀⢹⡏⢾⣿⠃⢿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ")
            console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⢿⢻⣏⣿⡇⡄⣾⠀⠹⡄⠄⠀⡇⠀⠹⣤⠈⠹⣿⣾⢸⠀⢘⣷⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ")
            console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣴⣯⣿⣽⣿⣷⢸⡗⠦⣄⡹⣼⣄⣿⣴⠛⠹⡄⡇⣿⣿⠾⠚⢹⢿⢽⣽⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀ ")
            console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣞⣾⣿⢿⣯⢻⢻⡴⠞⠁⠈⠻⣿⣌⡉⠓⣿⣰⡿⠀⠀⠀⠸⡜⡾⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀ ")
            console.log("⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⣡⠊⢸⣹⠁⠈⠙⣾⡄⠁⠀⢰⠛⠉⠉⠉⢳⣀⣿⣿⠃⠀⠀⣀⣀⣧⣿⡞⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀ ")
            console.log("⠀⠀⠀⠀⠀⠀⠀⣠⠋⡴⠁⠀⠸⢿⣤⣤⣤⣹⣿⣷⣶⣾⣷⣶⣶⣺⣋⣽⣿⣷⠶⠟⠛⠋⢧⠀⠀⠸⡜⣷⠀⠀⠀⠀⠀⠀⠀⠀ ")
            console.log("⠀⠀⠀⠀⠀⢀⡜⠁⡰⠁⠀⠀⢠⡿⠀⠀⠀⠉⠉⠉⠙⢻⡟⣹⣿⠃⣿⠋⠁⠀⠀⠀⠀⠀⠸⡄⠀⠀⢣⠹⣧⠀⠀⠀⠀⠀⠀⠀ ")
            console.log("⠀⠀⠀⠀⢠⠏⡀⢠⠇⠀⠀⢠⡿⠁⠀⠀⠀⠀⣤⣶⡴⠚⢻⠡⣸⠀⢹⣆⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠸⡄⢻⣇⠀⠀⠀⠀⠀⠀ ")
            console.log("⠀⠀⠀⢀⡏⣼⠁⢸⠀⠀⠀⣾⠃⠀⠀⠀⠀⠀⢻⣿⣧⣀⣬⠋⠁⠀⣠⣿⣶⣆⠀⠀⠀⠀⠀⡇⠀⠀⠀⡇⠈⣿⡀⠀⠀⠀⠀⠀ ")
            console.log("⠀⠀⠀⣸⣸⣿⠀⡇⠀⢰⣸⡟⠀⠀⠀⣀⣠⠴⠚⣟⣻⣧⣯⣗⣤⣾⣿⣿⡿⠋⠀⠀⠀⠀⣸⣤⠀⠀⠀⡇⡆⢻⠃⠀⠀⠀⠀⠀ ")
            console.log("⠀⠀⠀⣿⡿⢸⡀⣇⠀⣸⣿⡁⠀⣾⣻⡁⣀⣤⣶⠟⠋⠉⠛⢿⣋⣻⡏⠉⠀⠀⠀⠀⠀⢰⣿⡇⠀⠀⠀⣷⡇⣸⡄⠀⠀⠀⠀⠀ ")
            console.log("⠀⠀⠀⠿⠇⠀⢧⢸⠀⣿⡿⠇⠀⠈⠛⠛⠋⠉⠀⠀⠀⠀⠀⡟⠀⣿⠇⠀⠀⠀⠀⠀⢠⣿⣿⡇⠀⠀⣰⡿⣧⣿⠃⠀⠀⠀⠀⠀ ")
            console.log("⠀⠀⠀⠀⠀⠀⠀⢿⣄⣹⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡇⠀⣿⠀⠀⠀⠀⠀⠀⣸⡿⢸⠁⢠⣾⠋⢰⣿⡏⠀⠀⠀⠀⠀⠀ ")
            console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣶⣶⡿⠀⠀⠀⠀⠀⠀⠉⠁⢸⣶⡟⠁⠀⠾⠟⠀⠀⠀⠀⠀⠀⠀ ")
            console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ")
            console.log("type in 'miklu greeting' then either 'legacy', 'L/n', 'MMJ', 'VBS', 'WxS', or 'n25'")
            console.log("to see one of my six unique greetings!")
            console.log(" ...or try typing in 'miklu helpme' to see all my commands!")
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
                default: "friend",
                describe: "The summary of their group + their role" 
            })

            //legacy miklu's role explanation
            .command(
                "legacy",
                "Explains Miklu's role in the Tree of Feeling Sekai",
                () => {},
                () => {
                    console.log("This place is called the Tree of Feelings sekai, and as you might have guessed,")
                    console.log("this tree is made of all the feelings of the owners of these sekais! \n")
                    console.log("Oh, you want to know what I am doing?")
                    console.log("I watch over all the sekai's and their owners.")
                    console.log("I hope they can all find their true feelings!")
                }
            )

            //Leo/need miklu's sekai description + character descriptions 
            .command(
                "leoni",
                "Leo/need miklu's description of her sekai and group members",
                (command) => 
                    command.option ("name", {
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

                    //Leo/need miklu's description of Ichika Hoshino 
                    .command(
                        "IchiH",
                        "Leo/need miklu's description of Ichika Hoshino",
                        () => {},
                        ({ name }) => {
                            console.log("Ichika is the group leader (not band leader!) and the band's guitarist. ")
                            console.log("She's a huge fan of Hacksune Miklu (that's me!) in general, but she especially loves my music!")
                            console.log(" (she even left a whole bunch of cds in the sekai the last time she was here so that Leo/need could practice with them!)")
                            console.log("She also enjoys taking care of her cacti and loves yakisoba buns, but she hates peas and thrill rides.")
                        }
                    )

                    //Leo/need miklu's description of Saki Tenma 
                    .command(
                        "SakiT",
                        "Leo/need miklu's description of Saki Tenma",
                        () => {},
                        ({ name }) => {
                            console.log("Saki is the band's keyboardist.")
                            console.log("She loves working with fashion and make-up and she even knows how to juggle!")
                            console.log("She also likes eating snacks but she hates rice porridge.")
                        }
                    )

                    //Leo/need miklu's description of Honami Mochizuki 
                    .command(
                        "HonaM",
                        "Leo/need miklu's description of Honami Mochizuki",
                        () => {},
                        ({ name }) => {
                            console.log("Honami is the leader of the band and the band's drummer.")
                            console.log("She likes walking her dog, Shibao, gardening, and she knows a lot about astronomy.")
                            console.log("She left a whole bunch of stargazing guides in the sekai so we couldd try to find some constalations in the sekai's night sky!")
                            console.log("She loves apple pie and she hates cheese and drawing (it's one of her weak spots).")
                        }
                    )

                    //Leo/need miklu's description of Shiho Hinomori 
                    .command(
                        "ShihH",
                        "Leo/need miklu's description of Shiho Hinomori",
                        () => {},
                        ({ name }) => {
                            console.log("Shiho is the band's bassist.")
                            console.log("She likes going to girl band gigs and practicing on her bass, so she's usually down to play bass.")
                            console.log("She loves ramen and salisbury steak but she dislikes tofu and her sister's clingyness.")
                            console.log("She also loves rabbits and cute fluffy animals, but don't tell her I told you that!")
                        }
                    )
            )

            //MORE! MORE! JUMP! miklu's sekai description + character description
            .command(
                "momojan",
                "MORE! MORE! JUMP! miklu's description of her sekai and her group members",
                (command) => 
                    command.option("name", {
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
                        "MORE! MORE! JUMP! miklu's description of Minori Hanasato",
                        () => {},
                        ({ name }) => {
                            console.log("Minori is super cheerful and she loves making dance covers with the rest of MORE! MORE! JUMP!")
                            console.log(" She even helped come up with most of the name for the group and her idol catchphrases!")
                            console.log("She enjoys looking after animals and used to be part of the Animal Care Committee before she switched over to a credit based course to focus on becoming a better idol")
                            console.log("She especially loves collecting ASRUN idol merch, but she dislikes brocoli and relaxing activities, so she is always working hard to become an even better idol!")
                            console.log("  Oh, and her favorite food is salmon!")
                        }
                    )

                    //MORE! MORE! JUMP! miklu's description of Haruka Kiritani
                    .command(
                        "HaruK",
                        "MORE! MORE! JUMP! miklu's description of Haruka Kiritani",
                        () => {},
                        ({ name }) => {
                            console.log("Haruka is very calm and she loves penguin themed collectibles, plushies, anything really!")
                            console.log("She also likes sweet thing, but she dislikes wasabi and being idle and she's just as hardworking as Minori!")
                        }
                    )

                    //MORE! MORE! JUMP! miklu's description of Airi Momoi
                    .command(
                        "AiriM",
                        "MORE! MORE! JUMP! miklu's description of Airi Momoi",
                        () => {},
                        ({ name }) => {
                            console.log("Airi is super passionate and she loves researching idols and shopping!")
                            console.log("She also likes japanese sweeets, but she dislikes liver and she's allergic to cats. :(")
                        }
                    )

                    //MORE! MORE! JUMP! miklu's description of Shizuku Hinomori
                    .command(
                        "ShizH",
                        "MORE! MORE! JUMP! miklu's description of Shizuku Hinomori",
                        () => {},
                        ({ name }) => {
                            console.log("Shizuku is super elegant and she loves reading and taking walks, even though she gets lost really easily!")
                            console.log("She's great at archery and she loves udon noodles and tofu skin, but she dislikes spicy foods.")
                            console.log("She also doesn't like using computers or reading maps, which is probably why she gets lost so often!")
                        }
                    )
            )

            //Vivid BAD SQUAD miklu's sekai description + character description
            .command(
                "vivibasu", 
                "Vivid BAD SQUAD miklu's description of her sekai and group members",
                (command) =>
                    command.option("name", {
                        alias: "n",
                        type: "string",
                        default: "friend",
                        describe: "sekai description + character descriptions"
                    })
                    
                    //Vivid BAD SQUAD miklu's sekai description
                    .command(
                        "$0",
                        "Vivid BAD SQUAD miklu's description of her sekai",
                        () => {},
                        ({ name }) => {
                            console.log("This sekai is mostly a bunch of streets and alleyways. ")
                            console.log("Although, MEIKO has a cafe over there. She makes pretty good coffee and desserts, too\n")
                            console.log("Well, I've got to go practice with the Kagamines.")
                            console.log(" I promised I'd sing with them later today. See you around!")
                        }
                    )

                    //Vivid BAD SQUAD miklu's description of Kohane Azuzawa
                    .command(
                        "KohaA",
                        "Vivid BAD SQUAD miklu's description of Kohane Azuzawa",
                        () => {},
                        ({ name }) => {
                            console.log("Kohane is the newest member of the Vivids, one of the two duos that make up Vivid BAD SQUAD.")
                            console.log("She is really good at phaotgaphy and she loves taking care of her pet snake, Count Pearl.")
                            console.log("She likes peach buns and sesame balls, but she dislikes pickled foods and public speaking.")
                        }
                    )

                    //Vivid BAD SQUAD miklu's description of An Shiraishi
                    .command(
                        "AnS",
                        "Vivid BAD SQUAD miklu's description of An Shiraishi",
                        () => {},
                        ({ name }) => {
                            console.log("An is the oldest member of the Vivids, one of the two duos that make up Vivid BAD SQUAD.")
                            console.log("She is good at making different styles of coffee and tea, and she enjoys growing mint.")
                            console.log("She likes rum raisin ice cream, but she dislikes tomatoes and scary stories or ghosts.")
                        }
                        
                    )

                    //Vivid BAD SQUAD miklu's description of Akito Shinonome
                    .command(
                        "AkitS",
                        "Vivid BAD SQUAD miklu's description of Akito Shinonome",
                        () => {},
                        ({ name }) => {
                            console.log("Akito is the youngest member (by age) of the BAD DOGS, one of the two duos that makes up Vivid BAD SQUAD.")
                            console.log("He has a good sense of fashion and he's pretty good at beatboxing.")
                            console.log("He likes pancakes and cheescake, but he dislikes carrots and is afraid of dogs.")
                        }
                    )

                    //Vivid BAD SQUAD miklu's description of Toya Aoyagi
                    .command(
                        "ToyaA",
                        "Vivid BAD SQUAD miklu's description of Toya Aoyagi",
                        () => {},
                        ({ name }) => {
                            console.log("Toya is the oldest member (by age) of the BAD DOGS, one of the two duos that makes up Vivid BAD SQUAD.")
                            console.log("He enjoys reading and he's good at playing the piano and violin.")
                            console.log("He also likes coffee and cookies, but he doesn't like squid and he's afraid of heights.")
                        }
                    )
            )

            //Wonderlands x Showtime miklu's sekai description + character descrptions
            .command(
                "wondasho",
                "Wonderlands x Showtime miklu's description of her sekai and group members",
                (command) =>
                    command.option("name", {
                        alias: "n",
                        type: "string",
                        default: "miklu",
                        describe: "sekai description + character descriptions"
                    })

                    //Wonderlands x Showtime miklu's sekai description
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
                        "Wonderlands x Showtime miklu's description of Tsukasa Tenma",
                        () => {},
                        ({ name }) => {
                            console.log("Tsukasa-kun is the leader of the troupe and also the original owner of this sekai!")
                            console.log("He likes musicals, making costumes, and he even has 100 super-duper cool poses! and he can even play the piano all fwuaafwuaa!")
                            console.log("He told me he likes ginger fried pork and... a-cu-wa pat-sa? Buuut he hates peppers and really hates bugs!")
                        }
                    )

                    //Wonderlands x Showtime miklu's description of Emu Otori
                    .command(
                        "EmuO",
                        "Wonderlands x Showtime miklu's description of Emu Otori",
                        () => {},
                        ({ name }) => {
                            console.log("Emu-chan is our super fwuaafwuaaa dreamer!")
                            console.log("She loves exploring the neighborhood and she's super good at acrobatics!")
                            console.log("She likes all foods, but she really loves takiyaki! Although, she doesn't really like dusk...")
                        }
                    )

                    //Wonderlands x Showtime miklu's description of Nene Kusanagi
                    .command(
                        "NeneK",
                        "Wonderlands x Showtime miklu's descrption of Nene Kusanagi",
                        () => {},
                        ({ name }) => {
                            console.log("Nene-chan is our lalala songstress because she's sooo amazing at singing!")
                            console.log("She loves fighing games, musicals and movies!")
                            console.log("She also likes grapefruit, but she doesn't like mint flavored things or crowded places.")
                        }
                    )

                    //Wonderlands x Showtime miklu's description of Rui Kamishiro
                    .command(
                        "RuiK",
                        "Wonderlands x Showtime miklu's description of Rui Kamishiro",
                        () => {},
                        ({ name }) => {
                            console.log("Rui-kun is our super amazing director!")
                            console.log("He loves planning our shows and coming up with super (insrt ound effects here) tricks for Tsukasa-kun to do and-")
                            console.log(" Hi, Robo-Nene!! He also built Robo-Nene and he makes super (poofy sound effect here) balloon art. and soda candy. planing shows ballon art invineting soda candy (dislikes vegatbels + cleanig menial tasks)")
                            console.log("He loves soda candy, but he hates vegtables and cleaning!")
                        }
                    )
            )

            //Nightcord at 25:00 miklu's sekai description 
            .command(
                "niigo",
                "Nightcord at 25:00 miklu's description of her sekai and group members",
                (command) =>
                    command.option("name", {
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
                            console.log(" so you could see those later...")
                        }
                    )

                    //Nightcord at 25:00 miklu's description of Kanade Yoisaki
                    .command(
                        "K",
                        "Nightcord at 25:00 miklu's description of Kanade Yoisaki",
                        () => {},
                        ({ name }) => {
                            console.log("K... Kanade is Nightcord at 25:00's composer...")
                            console.log("She spends most of her time composing, and she likes finding new music, movies, anime, manga, and art.")
                            console.log(" ...she's also really good at tracking time down to the second.")
                            console.log("She also likes canned foods and instant noodles... she brought me some once... ")
                            console.log(" she doesn't like smelly foods, direct sunlight, or housework.")
                        }
                    )

                    //Nightcord at 25:00 miklu's description of Mafuyu Asahina
                    .command(
                        "Yuki",
                        "Nightcord at 25:00 miklu's desciption of Mafuyu Asahina",
                        () => {},
                        ({ name }) => {
                            console.log("Yuki... Mafuyu is Nightcord at 25:00's lyricist..")
                            console.log("She has a really cool aquarium... no fish, but nice to look at...")
                            console.log("She's also really good at sqeaking english and she likes... her mom's cooking...")
                        }
                    )

                    //Nightcord at 25:00 miklu's description of Ena Shinonome
                    .command(
                        "Enanan",
                        "Nightcord at 25:00 miklu's description of Ena Shinonome",
                        () => {},
                        ({ name }) => {
                            console.log("Enanan... Ena is Nightcord at 25:00's artist... she makes the cover art for the music videos...")
                            console.log("She likes drawing, and taking selfies for her social media page... and she likes fashion accessories.")
                            console.log("She's also good at picking out ingredient for cooking... she likes pancakes and cheesecake... and she hates carrots and gettting up early...")
                            console.log(" ..probably because the group usually meets up really late at night...")
                        }
                    )

                    //Nightcord at 25:00 miklu's description of Mizuki Akiyama
                    .command(
                        "Amia",
                        "Nightcord at 25:00 miklu's description of Mizuki Akiyama",
                        () => {},
                        ({ name }) => {
                            console.log("Amia... Mizuki is Nightcord at 25:00's animator and video editor..")
                            console.log("She likes making collages and redesiging clothes... she also sews a lot of her clothes..") 
                            console.log(" ..I've seen her try some of her accesories on Rin... I'm not sure if she likes them, though...")
                            console.log("She also likes curry rice and french fries... but she doesn't like mushrooms... miking hobies collages reesignin clothes curry rice french fries")
                        }
                    )
            )
    )

    //visual novel thing 
    .command(
        "letsplay",
        "visual novel section based on Project Sekai events", 
        (comand) =>
            command.option
    )

    //Project Sekai Story Adventure!
    .command(
        "story",
        "Play through one of the main stories as a Project Sekai group leader!",
        (command) => 
            command.option

    )

    //silly stuff here(tbd)

    //help command
    .command(
        "help me",
        "Show help information",
        () => {},
        () => {
            console.log("Miklu's CLI Commands Help!");
            console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠟⢛⣛⣋⣙⣛⠛⠿⢿⣿⣿⣿⡿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿")
            console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢋⣉⣉⣉⣙⡛⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⢋⣡⣴⣶⣿⣿⣿⣿⣿⣿⣿⣶⣄⠙⠛⣡⣤⣶⣶⣤⣌⡙⠻⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿")
            console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⣴⣿⣿⣿⣿⣿⣿⣿⣶⣤⡉⠻⣿⣿⡿⠟⢁⣤⣾⣿⣿⣿⣿⣿⣿⠿⠋⡠⠤⠤⠈⢛⣤⣾⠛⢋⣉⡙⠻⡿⠋⣠⠴⢂⣤⠙⢛⣉⣥⣤⣌⠙⢿⣿")
            console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠸⠟⢠⣾⣿⣿⣿⣿⣿⣿⣿⠟⢁⣠⣤⣶⣾⣿⣿⣿⣿⣿⣷⣶⣤⣌⡀⠀⠚⣡⣴⣿⣿⡷⠈⢿⣿⣿⣿⣷⡈⣿")
            console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⠃⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⣠⣴⣿⣿⣿⠿⢋⣤⡆⠈⣿⣿⣿⣿⡇⢹")
            console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢠⣾⣿⣿⠿⠿⢿⣿⣿⡿⠁⡼⠿⠿⠛⣛⣋⣉⣉⣉⣉⣉⣉⣙⣛⠋⣰⣿⣿⡿⢋⣡⣾⡿⠟⣡⡄⢸⣿⣿⠿⠃⣠")
            console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⢠⣿⣿⡿⢁⣶⡗⢀⠙⡿⢁⣤⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢰⡿⠟⣡⣴⣿⠿⢋⣴⣾⣿⡷⠀⠉⣡⣴⠟⣩")
            console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⢠⣿⣿⣿⢁⣾⡿⢠⣿⡇⠁⣾⡿⠿⠟⢛⣉⣉⣩⡭⠭⣥⣬⣭⣭⣉⠁⢉⣴⣾⡿⠛⣡⣶⣿⣿⠟⠉⠀⣀⠈⢋⣠⣾⣿")
            console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⣿⣿⣿⣿⣿⣿⣿⣿⡟⢀⣿⣿⣿⠃⣼⣿⠁⣾⣿⠀⠠⠶⠒⢉⡉⣁⢠⡄⣴⡂⡆⢰⣆⢠⡀⣤⠀⢹⠟⢋⣴⣾⣿⡿⠋⣡⡾⠁⠐⣹⠀⣿⣿⡿⢋")
            console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⢠⣿⣿⣿⣿⣿⣿⣿⣿⠀⣾⣿⣿⠇⣰⣿⠃⣼⣿⠇⠀⣠⢀⡾⡸⢠⣿⢸⡇⣿⣷⠸⡈⢿⡆⢱⠸⣷⡄⢀⠉⠛⠛⠁⠐⠛⠋⠁⢴⣾⡏⢸⠟⣡⣶⢿")
            console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⠁⣤⣶⣶⣦⠀⣿⡇⣰⣿⡟⠀⣰⠇⣼⠇⡇⣼⣿⢸⡇⣿⣿⡆⡇⢸⣿⡀⡆⢻⣿⡄⡇⠸⣿⣌⠹⡆⣤⡑⢤⡈⠁⠰⠾⢋⣴⣿")
            console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⠃⣸⣿⣿⠿⡿⢀⣿⣴⣿⣿⠀⠀⣿⢰⣿⠀⡇⣿⠛⠸⠇⠿⠛⠁⢁⣨⣥⣤⣤⣤⣤⣤⣤⠀⠀⣌⣀⠁⠹⢿⣦⠙⡄⢠⡈⠛⢿⣿")
            console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⠃⠀⣿⣿⠃⢶⣦⣬⣉⠙⠻⠇⡄⠀⠹⡀⢿⡄⠇⠙⠁⠀⣀⠐⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢸⡆⢻⣿⣿⠀⣤⡈⠒⢡⣿⣿⡇⡆⣀")
            console.log("⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸⡟⠛⠻⢿⡟⢰⣧⣌⠙⢧⡈⠛⢿⣿⣿⣄⢠⡇⢰⣦⣤⣤⣤⠖⠊⣤⣾⣿⡇⢠⣼⣿⣿⣿⣿⣿⣿⣿⡿⠃⠘⠓⠈⣛⣿⠀⣽⣿⣷⣤⡈⠛⠚⠡⠟")
            console.log("⣿⣿⣿⣿⣿⣿⣿⣿⡇⠘⢠⣿⣶⣤⣁⡘⠛⠻⣿⣶⣶⣶⠘⣿⣿⠃⣸⡇⠘⠿⠟⠋⠁⠐⠒⠠⢍⠙⠁⣿⣿⣿⣿⣿⣿⣿⣿⣥⡆⢠⣾⣿⡄⢿⣿⠀⣿⣿⣿⣿⣿⡇⠀⣶⣾")
            console.log("⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠋⠙⣿⣿⣿⣿⣿⣶⣄⠙⢿⣿⣿⡿⠃⡔⠻⠃⠀⢀⡀⠒⠀⡁⠒⢦⡀⠁⢸⣿⣿⣿⣿⣿⠟⠁⣾⡟⢀⣾⣿⣿⣇⢸⣿⠀⣿⣿⣿⣿⣿⡇⢠⣿⣿")
            console.log("⣿⣿⣿⣿⣿⣿⣿⠏⣰⣦⣀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣄⠉⠉⣤⣾⣿⣷⡄⢰⡿⠁⠐⣸⣧⠀⠀⢹⠂⣾⣿⣿⣿⠟⠁⢀⡾⠋⣰⣿⣿⣿⣿⣿⠀⠇⣰⣿⣿⡏⢹⣿⠇⣼⣿⣿")
            console.log("⣿⣿⣿⣿⣿⣿⣿⣀⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠠⠠⡈⠻⣿⣿⣧⠘⡇⢰⣶⣿⣿⣷⡄⢸⠀⠿⠟⢋⡡⠂⠐⣋⡤⠞⣋⠩⠝⠛⠋⠉⡀⢀⣿⣿⣿⠇⢸⡿⢠⣿⣿⣿")
            console.log("⣿⣿⣿⣿⣿⡿⠟⣛⠀⠐⢈⡉⠻⢿⣿⣿⣿⣿⣿⠏⠀⠀⣤⣿⣦⣈⠛⠿⣆⠡⡀⠿⣿⡟⡩⠂⣸⣦⣶⣾⣿⣷⣶⣾⡟⠁⠀⢀⣤⣴⣶⣾⡿⠁⣼⣿⣿⠏⠀⡾⠁⣼⣿⣿⣿")
            console.log("⣿⣿⣿⡿⢩⣴⣿⡿⠃⣴⣿⣿⣷⣦⣌⡛⠿⣿⠋⣰⠀⣇⠙⣿⣿⣿⣷⡆⣈⠀⢀⣠⣌⣉⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣤⣄⣈⠉⠙⠛⢁⣾⡿⠛⢁⡴⠀⢃⣼⣿⣿⣿⣿")
            console.log("⣿⠟⣫⣴⣿⣿⠟⢁⣾⣿⣿⣿⣿⣿⣿⣿⠖⢀⣴⡟⠸⣿⣧⣌⠛⠿⣿⠇⢹⣷⣄⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄⠀⣀⠁⣀⡒⠈⣇⣠⣾⣿⣿⣿⣿⣿")
            console.log("⣧⣾⣿⣿⡿⠃⣰⣿⣿⣿⣿⣿⣿⣿⡿⠃⣠⣿⣿⡇⣼⠸⣿⣿⣿⣶⣤⠀⣸⣿⡿⠀⠿⣿⣿⣿⣿⠀⣄⡙⠻⢿⣿⣿⣿⣿⣿⣿⣿⡿⠋⣰⣿⠀⣿⣿⡆⢸⣿⣿⣿⣿⣿⣿⣿")
            console.log("⣿⣿⣿⠟⢀⣾⣿⣿⣿⣿⣿⣿⣿⡟⢁⣼⣿⣿⣿⠀⡿⢰⣿⣿⣿⣿⣿⠀⡿⠋⣠⣾⣦⠈⠛⢿⣿⣦⣌⣉⠗⠆⣹⣿⣿⣿⡿⠟⢋⣠⣴⣿⣿⡇⢸⡿⠁⢸⣿⣿⣿⣿⣿⣿⣿")
            console.log("⣿⡿⠋⣴⣿⣿⣿⣿⣿⣿⣿⣿⠟⢠⣾⣿⣿⣿⣿⠀⣡⣾⣿⣿⣿⣿⣿⣀⣤⣾⣿⣿⣿⡀⠁⠀⠈⠙⠻⠿⠿⠿⠟⢛⣉⣤⣴⣾⣿⣿⠿⢛⣉⣤⠸⠁⣴⠘⣿⣿⣿⣿⣿⣿⣿")
            console.log("⡟⢁⣾⣿⣿⣿⣿⣿⣿⣿⣿⠋⣠⣿⣿⣿⣿⠟⠃⠘⠛⠻⠿⠿⣿⣿⣿⣿⣿⡿⠿⠿⠿⠃⣤⣄⣀⣀⣀⣀⡀⠾⢋⣤⣙⠿⠿⠿⠛⣁⣴⣿⣿⣿⣤⣾⣿⡄⢹⣿⣿⣿⣿⣿⣿")
            console.log("⢠⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⢀⢉⣉⣉⣛⣁⠀⢻⣿⠿⠷⢶⣤⣤⣈⠁⢤⡀⠶⣶⣿⣷⣤⡈⠻⣿⣿⣿⣿⣇⠀⣌⣉⣙⠛⠻⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠘⣿⣿⣿⣿⣿⣿")
            console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣏⣠⣆⢸⡄⣿⣿⣿⣿⣷⠈⣭⣭⣉⣒⠲⠮⢭⣷⡀⠙⢦⣌⠻⣿⣿⣿⣦⣌⠻⢿⣿⣿⢠⣿⣿⣿⣿⠃⣴⠂⠀⣉⠙⠿⣿⣿⣿⣿⣿⡀⣿⣿⣿⣿⣿⣿")
            console.log("⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⡇⣿⣿⣿⣿⣿⠀⢸⣿⣿⣿⣿⣿⣶⣶⣤⣆⠀⡉⠳⣤⡙⠿⣿⣿⣷⣄⡙⠇⣼⣿⣿⡿⣡⡾⠁⣄⠳⡈⠳⣄⠈⠻⢿⣿⣿⣇⢸⣿⣿⣿⣿⣿")
            console.log("⣄⠙⠿⠿⠿⢿⣿⣿⣿⣿⡿⢰⡇⣿⣿⣿⣿⣿⠀⣶⠬⢍⣉⣛⠻⠿⠿⣿⣿⡀⢸⢰⣄⠙⠲⣌⡙⠿⣿⣿⣶⣉⠻⣧⡰⣯⡀⠇⣿⡀⠱⡄⢈⠳⣄⠀⠉⠻⣿⠀⣿⣿⣿⣿⣿")
            console.log("⣿⣿⣶⣶⣶⣶⣶⡄⢨⣉⠁⠺⠃⠿⠿⠿⠿⠇⢠⣿⣿⣶⣶⣮⣭⣉⣑⠒⠶⡇⠈⡆⢻⡆⢢⠀⡉⠓⠦⢍⡙⣿⣷⣌⠛⢦⣿⡆⠘⣇⠀⠈⢆⠹⣌⠓⢌⠢⡈⠁⢹⣿⣿⣿⣿")
            console.log("⣿⣿⣿⣿⣿⣿⣿⡇⣿⣿⣷⣿⣿⣿⣶⠀⢄⠒⠄⣙⠛⠿⠿⣿⣿⣿⣿⣿⣿⡇⠀⢈⣀⣤⣤⣤⣴⣄⠐⠀⡆⣽⣿⣿⣷⣦⡈⠀⢢⠸⡄⠸⣆⠣⡘⢷⣆⠱⢌⠢⠀⢻⣿⣿⣿")
            console.log("⣿⣿⣿⣿⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣿⡆⠈⠻⢶⣤⣭⣍⣓⣒⠒⠲⢿⣿⣿⠁⣀⠸⣿⣿⡿⠿⠟⠛⠀⠘⢧⣭⣉⣙⣛⡛⠛⠓⢄⠁⠳⠀⢻⣦⡐⢄⠻⣷⡈⡆⠀⢸⣿⣿⣿")
            console.log("⣿⣿⣿⣿⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣿⠇⣼⣶⣦⣤⣬⣉⣉⠉⠛⠛⠛⠛⠛⠀⢻⢠⡄⢢⠰⣦⠰⡘⣿⣦⢰⠀⡄⢠⠈⣍⠉⠉⣉⢁⡀⢀⠈⠻⣷⡈⠆⢻⡇⡇⠀⠘⣿⣿⣿")
            console.log("============================================================================\n");
            console.log("Commands:");
            console.log("  greeting       All of the Miklus' greetings for you!"); 
            console.log("     legacy          Original miklu's greeting");
            console.log("     leoni           Leo/need miklu's greeting");
            console.log("     momojan         MORE! MORE JUMP! miklu's greeting");
            console.log("     vivibasu        Vivid BAD Squad miklu's greeting");
            console.log("     wondasho        Wonderlands x Showtime miklu's greeting");
            console.log("     niigo           Nightcord at 25 miklu's greeting\n");
            console.log("  desc           Each miklu's summary of their sekai's appearance or their main role!");
            console.log("     legacy          Explains miklu's role in the Tree of Feelings Sekai");
            console.log("     leoni           Leo/need miklu's description of her sekai");
            console.log("        IchiH             Leo/need miklu's description of Ichika Hoshino");
            console.log("        SakiT             Leo/need miklu's description of Saki Tenma");
            console.log("        HonaM             Leo/need miklu's description of Honami Mochizuki");
            console.log("        ShihH             Leo/need miklu's description of Shiho Hinomori");
            console.log("     momojan         MORE! MORE! JUMP! miklu's description of her sekai");
            console.log("        MinoH             MORE! MORE! JUMP! miklu's description of Minori Hanasato");
            console.log("        HaruK             MORE! MORE! JUMP! miklu's description of Haruka Kiritani");
            console.log("        AiriM             MORE! MORE! JUMP! miklu's description of Airi Momoi");
            console.log("        ShizH             MORE! MORE! JUMP! miklu's description of Shizuku Hinomori");
            console.log("     vivibasu        Vivid BAD SQUAD miklu's description of her sekai");
            console.log("        KohaA             Vivid BAD SQUAD miklu's description of Kohane Azuzawa"); 
            console.log("        AnS               Vivid BAD SQUAD miklu's description of An Shiraishi");
            console.log("        AkitS             Vivid BAD SQUAD miklu's description of Akito Shinonome");
            console.log("        ToyaA             Vivid BAD SQUAD miklu's description of Toya Aoyagi")
            console.log("     wondasho        Wonderlands x Showtime miklu's description of her sekai"); 
            console.log("        TsukT             Wonderlands x Showtime miklu's description of Tsukasa Tenma")
            console.log("        EmuO              Wonderlands x Showtime miklu's description of Emu Otori")
            console.log("        NeneK             Wonderlands x Showtime miklu's description of Nene Kusanagi")
            console.log("        RuiK              Wonderlands x Showtime miklu's description of Rui Kamishiro")
            console.log("     niigo           Nightcord at 25:00 miklu's description of her sekai");
            console.log("        K                 Nightcord at 25:00 miklu's description of Kanade Yoisaki");
            console.log("        Yuki              Nightcord at 25:00 miklu's description of Mafuyu Asahina")
            console.log("        Enanan            Nightcord at 25:00 miklu's description of Ena Shinonome")
            console.log("        Amia              Nightcord at 25:00 miklu's description of Mizuki Akiyama\n")
            console.log("  helpme         Shows this information, duh!");
        }
    )
    .demandCommand(1, "Choose a command. Try 'miklu greeting --name=YourName' to say hello to Miklu!")
    .help()
    .parseAsync();

//






//to do: test miklu desc legacy (+ all the other legacy commands)
//       test all the new desc commands (just leonii for now) 
// eventually: visiual novel from the pov of all the main characters fallowing through main story 2nd person with bad end being world link 2 based
// cgh;jjhllb   nbhhghghghb  trt lhnbjj hjih ujbjhh