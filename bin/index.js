#!/usr/bin/env node

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const { input, select } = require("@inquirer/prompts");
const { command } = require("yargs");

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
                    "Original Miklu's greeting!",
                    () => {},
                    ({ name }) => {
                        console.log(`Hello, ${name}! I'm Hacksune Miklu!`);
                    }
                )
                
                //Leo/need miklu's greeting option
                .command(
                    "leonii",
                    "Leo/need's Miklu's greeting!",
                    () => {},
                    ({ name }) => {
                        console.log(`Hello, ${name}! I'm the Miklu from the School Sekai! Nice to meet you!`);
                    }
                )

                //MORE! MORE! JUMP! miklu's greeting option
                .command(
                    "momojan",
                    "MORE! MORE! JUMP! Miklu's greeting!",
                    () => {},
                    ({ name }) => {
                        console.log(`Hallo, ${name}! I'm the Miklu from the Stage Sekai! It's so nice to meet you!`);
                    }
                )

                //Vivid BAD SQUAD miklu's greeting option
                .command(
                    "vivibasu",
                    "Vivid BAD SQUAD Miklu's greeting!",
                    () => {},
                    ({ name }) => {
                        console.log(`Hello, ${name}! I'm the Miklu from the Street Sekai. Nice to meet you.`);
                    }

                )

                //Wonderlands x Showtime miklu's greeting option
                .command(
                    "wondasho",
                    "Wonderlands x Showtime Miklu's greeting!",
                    () => {},
                    ({ name }) => {
                        console.log(`Wonderhoy, ${name}! I'm Miklu from the Wonderlands Sekai, and it's so wonderhoy to meet you all!!!`);
                    }
                )

                //Nightcord at 25:00 miklu's greeting option
                .command(
                    "niigo",
                    "Nightcord at 25 Miklu's greeting!",
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
                "leonii",
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
                            console.log("There are lots of enpty classrooms and even an acessible roof where you can see the stars at night!\n")
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
                            console.log("If you look out over the stages, you can see all the light sticks waving in the crowd!\n")
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
                            console.log("She enjoys looking after animals and used to be part of the Animal Care Committee before she switched over to a credit based course to focus on her idol duties!")
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
                            console.log("Shizuku is super elegant and she loves reading and taking walks, although she tends to always end up lost!")
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
                            console.log("Although, MEIKO has a cafe over there. She makes pretty good coffee and desserts, too.\n")
                            console.log("Well, I've got to go practice with the Kagamines.")
                            console.log(" I promised I'd sing with them later today. See you around!")
                        }
                    )

                    //Vivid BAD SQUAD miklu's description of Kohane Azuzawa
                    .command(
                        "KohaA",
                        "Vivid BAD SQUAD miklu's description of Kohane Azuzawa ",
                        () => {},
                        ({ name }) => {
                            console.log("Kohane is the newest member of the Vivids, one of the two duos that make up Vivid BAD SQUAD.")
                            console.log("She is really good at photography and she loves taking care of her pet snake, Count Pearl.")
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
                            console.log("This sekai has so many different things in it, I'm so excited to show all of them to you!")
                            console.log("Should I show you the super fwoosh-fwoosh train or - the plushies are holding a show right now too!...")
                            console.log("Uuuee! There's so much to choose from...\n")
                            console.log("Oh, you wonder why this sekai is called the wonderland sekai and not something like the park sekai?")
                            console.log("I'll go find Tsukasa-kun and ask him right now! Tsukasa-kunnnn!")
                        }
                    )

                    //Wonderlands x Showtime miklu's description of Tsukasa Tenma
                    .command(
                        "TsukT",
                        "Wonderlands x Showtime miklu's description of Tsukasa Tenma",
                        () => {},
                        ({ name }) => {
                            console.log("Tsukasa-kun is the leader of the troupe and also the original owner of this sekai! ")
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
                            console.log("He loves planning our shows and coming up with super cool tricks for Tsukasa-kun to do and-")
                            console.log(" Hi, Robo-Nene!! He also built Robo-Nene and he makes balloon animals!")
                            console.log("He loves soda candy, but he hates vegtables and cleaning!")
                        }
                    )
            )

            //Nightcord at 25:00 miklu's sekai description + character descriptions
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

                    //Nightcord at 25:00 miklu's description of her sekai
                    .command(
                        "$0",
                        "Nightcord at 25:00 miklu's description of her sekai",
                        () => {},
                        ({ name }) => {
                            console.log("Ah... potatoYou want to know about this sekai?")
                            console.log(" ...there isn't very much here to see though. Sorry...\n") 
                            console.log("...Mafu- Yuki and the others sometime bring us things from outside...")
                            console.log(" so you could see those later... ")
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
                            console.log(" she doesn't like smelly foods, direct sunlight, or housework... she said Mochizuki-san helps her out a lot with that..")
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
                            console.log("She also likes curry rice and french fries... but she doesn't like mushrooms... ")
                        }
                    )
            )
    )

    //mikcalculator
    .command(
        "calc",
        "cacls",
        () => {},
        async () => {
            //prompts for the calculation type
            const operation = await select({
                message: "Which calculation would you like me to perform?",
                choices: [
                    {name: "Add (+)", value: "add"},
                    {name: "Subtract (-)", value: "subtract"},
                    {name: "Multiply (*)", value: "multiply"},
                    {name: "Divide (/), ", value: "divide"}   
                ]
            })

            //variables for the 2 numbers being used in the calculation
            const firstNum = Number(await input({message: "What's your first number?"}));
            const secondNum = Number(await input({message: "Great! What's your second number?" }));

            //codes to check if answer is valid
            if (!Number.isFinite(firstNum) || !Number.isFinite(secondNum)) {
                console.log("Oops!~ It seems that at least one of your numbers isn't valid! \nPlease enter a valid number or I can't perform the calculation! >_<");
                return;
            }
            if (operation === "divide" && secondNum === 0) {
                console.log("Ahhh! Did you just try to divide by zero?? You CAN't do that!!!!11!!1!!11!!!")
                return;
            }

            //codes for the result
            let result;

            //codes for the different calculations 
            if (operation === "add") {
                result = firstNum + secondNum;
            } else if (operation === "subtract") {
                result = firstNum - secondNum;
            } else if (operation === "multiply"){
                result = firstNum * secondNum;
            } else if (operation === "divide") {
                result = firstNum / secondNum;
            }

            //gives user the answer
            console.log(`Your answer is...... ${result}!`);
        }
    )

    //Project Sekai Story Adventure!
    //will be worked on more week 2!
    .command(
        "letsplay",
        "Play through one of the main stories as a Project Sekai group leader!",
        () => {},
        async () => {
            //decides what path you are playing as (which sekai?)
            const storySelection = {
                //work on leonii now, other groups to be worked on later
                leonii: {
                    LNclass1C_1: {
                        prompt: "You sit in a clasroom, taking notes as the teacher reviews English sentence stucture. \n" + 
                            "Writng down the information in your notebook, you happen to look outside, and you see Honami and another classmate in the school courtyard. \n" + 
                            "You look at her, and your eyes meet for a split second, as she mouths something that looks like your name. You...", //ichika is inclass -> sees honami +eycontact byt look away + meet shiho at scramble crossing
                        choices: [
                            {name: "wave at her.", value: "LNclass1C_1a"},
                            {name: "continue to look out the window.", value: "LNclass1C_1b"},
                            {name: "turn back to your notebook and continue taking notes.", value: "deadend1_a"},
                            {name: "try a different path?", value: "chooseGroup"},
                            {name: "Exit game", value: "itisfinished"}
                        ]
                    },
                    LNclass1C_1a: {
                        // \x1b[38;2;51;170;238m for ichika's thoughts/words
                        prompt: "Eyes widening in recognition, Honami smiles at you, but quickly looks away. \n" + 
                            "\x1b[3m\x1b[38;2;51;170;238mshe still remembers me\x1b[0m\x1b[23m" + ", you think, smiling to yourself. \n" +
                            "The person siting next to her notices her distraction, asking her what is wrong. \n" + 
                            "Honami replies, saying that it was nothing, and the two of them leave for their next class, as you turn back to your notes.",
                        choices: [ 
                            {name: "-> next", value: "LNscramCross_1"} 
                        ]
                    },
                    LNclass1C_1b: {
                        prompt: "Honami continues staring at the window for such a long time that the person sitting next to her turns to her, asking what is wrong. \n" + 
                            "Honami replies, saying that it was nothing, and the two of them leave for their next class, as you turn back to your notes.",
                        choices: [
                            {name: "-> next", value: "LNscramCross_1"}
                        ]
                    },
                    deadend1_a: {
                        prompt: "You turn back to your notes, missing the wistful look Honami sends to the window before leaving.",
                        choices: [
                            {name: "-> next", value: "deadend1_ba"}
                        ]
                    },
                    deadend1_ba: { 
                        prompt: "At Scramble Crossing, you are too focused on getting home to notice Shiho looking at you from a short distance away, \n" + 
                            "and you cross the busy street without ever looking her way.",
                        choices: [
                            {name: "-> next", value: "deadend1_c"}
                        ]
                    },
                    deadend1_c: {
                        prompt: "You make it home, and after dinner, you place your phone facedown on your desk as you begin your homework, \n" +
                            "ignoring the flashes of light coming from the screen. After you finish your homework, you go to sleep, ready to do this again the next day!\n\n" + 
                            "and again \n\n\nand again \n\n\n\n\x1b[3mand again \n\n\n\n\n\n\x1b[38;2;224;196;255mthis is boring. Do you wanna... \x1b[0m",
                        choices: [
                            {name: "try again?", value: "LNclass1C_1"},
                            {name: "try a new path!", value: "chooseGroup"},
                            {name: "Exit game", value: "itisfinished"}
                        ]
                    },
                    LNscramCross_1: {
                        prompt: "___________________________________________________________________________ \n" +
                            "While waiting for the light to change at Scramble Crossing, you notice Shiho near you at the crosswalk.\n" +
                            "\"\x1b[38;2;187;221;34mIchika?\x1b[0m\" Shiho questions. You decide to...",
                        choices: [
                            {name: "turn away from her.", value: "deadend1_bb"},
                            {name: "wave at her.", value: "LNscramCross_1a"},
                            {name: "dash over to her and start a conversation.", value: "LNscramCross_1b"}
                        ]    
                    },
                    deadend1_bb: {
                        prompt: "You cross quickly across the busy interesction, missing the chance to reply to Shiho.",
                        choices: [
                            {name: "-> next", value: "deadend1_c"}
                        ]
                    },
                    LNscramCross_1a: { 
                        prompt: "Waving at Shiho, you begin to make your way over to her, but by the time you reach her, the light has changed and she is gone.",
                        choices: [
                            {name: "-> next", value: "LNscramWalk_1"}
                        ]
                    },
                    LNscramCross_1b: {
                        prompt: "\"\x1b[38;2;51;170;238mShiho...! Um, you have your bass guitar... Are you going to practice?\x1b[0m\" \n" + 
                            "\"\x1b[38;2;187;221;34mSo what if I am?\x1b[0m\" \"\x1b[38;2;51;170;238mAh.. Well...\x1b[0m\" ...Shiho crosses the street ahead of you before you can say another word.",
                        choices: [
                            {name: "-> next", value: "LNscramWalk_1"}
                        ]
                    },
                    LNscramWalk_1: {
                        prompt: "\x1b[3m\x1b[38;2;51;170;238mHaa... I wasn't able to talk to her again this time...,\x1b[0m you sigh dejectedly as you turn around a corner. \n" + 
                            "\x1b[3m\x1b[38;2;51;170;238mHonami and Shiho,... When did I get so awkward around them?... And Saki isn't...\x1b[0m \n" + 
                            "\"\x1b[38;2;51;170;238mIs is always going to be like this? Never talking to each other again until we graduate?\x1b[0m\" Absorbed in your thoughts, your head snaps up as you suddenly hear a familiar tune coming from nearby. You...",
                        choices: [
                            {name: "pause, and turn towards the sound.", value: "LNscramWalk_1a"},
                            {name: "ignore the sound and continue walking towards home.", value: "LNscramWalk_1b"}
                        ] 
                    },
                    LNscramWalk_1a: {
                        //maybe link intergalactic bound music video? + make sure to run this one to check it later
                        prompt: "\x1b[3m\x1b[38;2;51;170;238mAh.. It's one of Miku's music videos..\x1b[0m  You turn your head towards the large screen and see Hatsune Miku's Intergalactic Bound music video playing. \n" +
                            "\x1b[3m\x1b[38;2;51;204;186m♪♫ Our hearts are connected through these sound waves~ ♪ Nothing but up!up!up! ♫ Cut though the clouds! ♪ \n" + 
                            "♫ Jump! Jump! Without a doubt~ ♪ Nothing but up!up!up! ♫ Intergalactic Bound~ ♪♫ \x1b[0m \n" + 
                            "\"\x1b[38;2;51;170;238mMiku is so.. amazing... She's so free and versatile... She can probably do anything.. \x1b[3mUnlike me..\x1b[0m\" \n" + 
                            "\x1b[3m\x1b[38;2;51;204;186m♪ Whoa oh, whoa oh oh ♫ Intergalactic Bound ♪\x1b[0m  You turn back around and make your way back home as the music slowly fades away.", 
                        choices: [
                            {name: "-> next", value: "ichiroom_1"}
                        ]
                    },
                    LNscramWalk_1b: {
                        prompt: "\x1b[3m\x1b[38;2;51;170;238mWe used to be such good friends...\x1b[0m \n\n" + 
                            "\x1b[38;2;68;85;221m" +
                            "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ \n" +
                            "⠀⠀⠀⠀⠀⠀⠀⠀⠠⣀⡀⠀⠀⠀⠀⠀⢀⣜⠉⣏⠀⠀⠀⠀⠀⠀⠀⢀⣴⠃ \n" +
                            "⠀⠀⠀⠀⠀⠀⠀⠀⠚⡬⠧⠀⠀⠀⠀⠀⠀⠈⠎⠉⠀⠀⠀⠀⠀⣠⢶⡿⠃⠀ \n" +
                            "⠀⠀⠀⠀⠀⣄⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠠⡒⢕⢕⠕⠁⠀⠀ \n" +
                            "⠀⠀⠀⠀⠀⡇⠙⢦⡀⠀⢀⣀⠤⡴⠀⠀⢀⡀⠤⢒⡨⠐⡉⠔⡡⠂⠀⠀⠀⠀ \n" +
                            "⠀⠀⠀⠀⠀⠃⠀⠀⠈⠉⠁⠀⢰⠃⢀⡉⠤⠐⠈⡁⠔⢊⠔⠈⠀⠀⠀⠀⠀⠀ \n" +
                            "⠀⠀⢀⡤⠚⠁⠀⠀⠀⠀⠀⢀⠏⠁⣀⠠⠔⠂⢁⠠⠂⠁⠀⠀⠀⠀⠀⠀⠀⠀ \n" +
                            "⠠⢶⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⡁⠀⡀⠄⠂⠁⠀⠀⠀⠀⡀⢀⠀⠀⠀⠀⠀ \n" +
                            "⠀⠀⠀⠉⠑⢲⠀⠀⠀⢀⣀⣀⣀⡙⣅⠀⠀⠀⠀⠀⠀⠠⠔⡈⣫⡀⠀⠀⠀⠀ \n" +
                            "⠀⠀⠀⠀⠀⠘⡆⠀⡰⠋⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠏⠀⠀⠀⠀⠀⠀ \n" +
                            "⠀⢠⡀⣀⠀⠀⢣⠜⠁⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ \n" + 
                            "⠠⢮⢀⣢⡀⠀⠈⠀⠀⠀⠀⠀⠀⢀⠏⠒⢺⠃⠀⠀⠀⠀⠀⠀⠀⠀⢠⣀⡀⠀ \n" +
                            "⠀⠀⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠃⡄⢠⢈⣆⠀⠀⠀⠀⠀⠀⠀⠐⠻⡼⠆⠀ \n" +
                            "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ \n" +
                            //"insert shooting star art here" + hona, ichi, saki, shih, saki; use rgb 68 85 221 to color stars maybe 5 stars w/ miklu colored star in middle
                            "\x1b[3m\x1b[38;2;238;102;102mThere's another one! \n\x1b[38;2;51;170;238mThey are all so pretty! \n\x1b[38;2;255;221;69mWe should all make a wish! I'm gonna wish we could stay like this forever! \n\x1b[38;2;187;221;34mSaki, you're not supposed to tell us your wish! \n\x1b[38;2;255;221;69mOh..Well I'm sure it will come true anyways!\x1b[0m \n\n\n" + 
                            "\x1b[3m\x1b[38;2;51;170;238mThe stars were so bright that night...\x1b[0m  You walk back home, reminicing about your past.",
                        //you walk home, still abosrbded in thoughts about your friends *insert flashback here specifialcl of the own where theye afre on the junghle gym an them see the shoting stars* i wish we could be close like that again.... (maybe different place)
                        choices: [
                            {name: "-> next", value: "ichiroom_1"}
                        ]
                    },
                    ichiroom_1: {
                        prompt: "___________________________________________________________________________ \n" + 
                            "Once you get home, you enter your room. The first thing you do is...",
                        choices: [
                            {name: "open your closet.", value: "ichiroom_1a"},
                            {name: "sit down and begin working on your homework.", value: "ichiroom_1b"}
                        ]
                    },
                    ichiroom_1a: {
                        // ichi finds her old guitar cover idust and remarkt hat it sprobalb/c s heo sdoues't using it any more -> closes clos after dagging guitarcase to rest on side of desk
                        prompt: "\x1b[3m\x1b[38;2;51;170;238m*Haa..*\x1b[0m You notice your old guitar case in the corner of your closet, and pull it out. \n" + 
                            "\x1b[3m\x1b[38;2;51;170;238m*Achoo!* My guitar case is covered in dust... I'll probably never pick it up again though..\x1b[0m \n" + 
                            "You pull the guitar case out of your closet and dust it off regardless, carefully leaning it on the side of your dresser. \n" + 
                            "\x1b[3m\x1b[38;2;51;170;238mWe had promised to stay together and create a band together, but now...\x1b[0m \n" +
                            "...Leaving the guitar case unopened, you turn around to close the closet and...",
                        choices: [
                            {name: "sit down and begin working on your homework.", value: "ichiroom_1b"}
                        ]
                    },
                    ichiroom_1b: {
                        //ichi is seated and begins to work when she notcies phone screen flashing. 
                        prompt: "Pulling out an assignment, you begin to fill it out. \n" +
                            "Suddenly, your phone screen starts flashing white! You...",
                        choices: [
                            {name: "check your phone.", value: "schoolSekai_1"},
                            {name: "ignore it and continue working.", value: "deadend2"}
                        ]
                    },
                    deadend2: {
                        //similar to deadend1_c minus the 1st part
                        prompt: "You continue to finish your homework, completing it much faster than you usually do. \n" + 
                            "After dinner, you check your phone, but nothing seems to be wrong, although the brightness of the screen has dulled a bit, and won't brighten up, no matter what you do. \n" + 
                            "You decide to go back to sleep, and soon you will wake up and do all of those things again. \n\n" + 
                            "and again \n\n\nand again \n\n\n\n\x1b[3mand again \n\n\n\n\n\n\x1b[38;2;224;196;255mthis is boring. Do you want to...\x1b[0m",
                        choices: [
                            {name: "try again?", value: "LNclass1C_1"},
                            {name: "try a new path!", value: "chooseGroup"},
                            {name: "Exit game", value: "itisfinished"}
                        ]
                    },
                    ichiroom_1c: {
                        //contians scetion before ichi gets teleported to school sekai 
                        prompt: "ns",
                        choices: [
                            {name: "-> next", value: "f"}
                        ]
                    },
                    schoolSekai_1a: {
                        //intial convo w/ miku + luka
                        prompt: " " + 
                            "\"Hello? IS anoy 1 thiere?\" idk ichika get tlak to miku and she comes tback to be still stand uin gup woith nophien and she gos to class. the end",
                        choices: [
                            {name: "potato", value: "chooseGroup"},
                            {name: "end it all!!!!!", value: "itisfinished"}
                        ] 
                    },
                    schoolSekai_1b: {
                        //flashback sequence
                        prompt: "idk"
                    },
                    schoolSekai_1c: {
                        //sekai section after flashbakc sequence
                        prompt: "idk"
                    },
                    ichiroom_2: {
                        //ichi wakes up and wnders + minor not flashback things + end of opening! maybe include comment from narrator about ending of opening
                        prompt: "idk",
                        choices: [
                            {name: "-> next", value: "LNplaceholder"}, 
                            {name: "choose a new path?", value: "chooseGroup"},  
                            {name: "Exit game", value: "itisfinished"}
                        ]
                    },
                    //leads to saki + other dead end 

                    afterSaki: {
                        prompt: "that one scene where saki jumpscares Ichika in the main story",
                        choices: [
                            {name: "greet saki!", value: "goodchoice"},
                            {name: "stay silent like a chud", value: "smhichansmh"}
                        ]                       
                    },
                    goodchoice: {
                        prompt: "hello! saki is weaired tf out and she hate u now.",
                        choices: {
                            name: "back", value: "walkingtoclass"
                        }
                    },
                    smhichansmh: {
                        prompt: "h",
                        choices: {
                            name: "back", value: "walkingtoclass"
                        }
                    },
                    LNplaceholder: {
                        prompt: "uh oh! if you're seeing this, then that means that this part of the story hasn't been finished yet!",
                        choices: [
                            {name: "try again?", value: "LNclass1C_1"},
                            {name: "try a new path?", value: "chooseGroup"},
                            {name: "Exit game", value: "itisfinished"}
                        ]
                    }
                    //{name: "sec1", value: "opening", prompt: "Ichika does something idk what it is"}
                },
                momojan: {
                    minori: { 
                        prompt: "mimrnori dwatches idoll!!! as phone blinks!!!!",
                        choices: [       
                            {name: "tapp random thing", value: "harula"},
                            {name: "leeave it alone :(", value: "airli"},
                            {name: "try a different path?", value: "chooseGroup"},
                            {name: "Exit game", value: "itisfinished"}
                        ]
                    },
                    harula: {
                        prompt: "miku pops ou an ebeocems i ahuluscianotion",
                        choices: [
                            {name: "go back!", value: "minori"},
                            {name: "diff path?", value: "airli"}
                        ]
                    },
                    airli: {
                        prompt: "didnt work. minori dead :(",
                        choices: [
                            {name: "begin", value: "minori"},
                            {name: "diff path?", value: "harula"}
                        ]
                    }
                },
                vivibasu: {
                    koha: {
                        prompt: "hamptster gose on walk home form schoool. should she take her normal path or choose a new path?",
                        choices: [
                            {name: "same old, same old", value: "anchanzero"},
                            {name: "choose a new path", value: "ginger"},
                            {name: "try a different path?", value: "chooseGroup"},
                            {name: "Exit game", value: "itisfinished"}
                        ]
                    },
                    anchanzero: {
                        prompt: "ohane goes home. thae end.",
                        choices: [
                            {name: "go back to the beginning?", value: "koha"},
                            {name: "diff path?", value: "ginger"}
                        ]
                    },
                    ginger: {
                        prompt: "haopmter finsds new place! what!!!!!!",
                        choices: [
                            {name: "diff path?", value: "anchanzero"},
                            {name: "go back tot he beginning?", value: "koha"}
                        ]
                    }
                }, 
                wondasho: {
                    tsukasaskun: {
                        prompt: "tsukasa gets emoployed!!! a job so cool frfr",
                        choices: [
                            {name: "get to job early", value: "emu"},
                            {name: "get to job late", value: "nane"},
                            {name: "try a different path?", value: "chooseGroup"},
                            {name: "Exit game", value: "itisfinished"}
                        ]
                    },
                    emu: {
                        prompt: "tuskas doen not get ajob b/c he is choppped!!! unemplyed loser lol *insert emu jumpscare here*",
                        choices: [
                            {name: "go back to the beginndg?", value: "tsukasaskun"},
                            {name: "dvo", value: "nane"}
                        ]
                    },
                    nane: {
                        prompt: "tsuksa get a job!!!!! employed ending! no wnderstage :(",
                        choices: [
                            {name: "sosd", value: "emu"},
                            {name: "dofodj", value: "tsukasaskun"}
                        ]
                    }
                    //{name: "sec1", value: "opening", prompt: "Tsukasa seeks employment"}
                },
                niigo: {
                    kande: {
                        prompt: "kanade sees a her screen flashing!!! what uis happlened?",
                        choices: [
                            {name: "click the screen", value: "mafu"},
                            {name: "don't click the screen", value: "enams"},
                            {name: "try a different path?", value: "chooseGroup"},
                            {name: "Exit game", value: "itisfinished"}
                        ]
                    },
                    mafu: {
                        prompt: "kandade gets transprted to new place- oh my gosh is that Hatsune Miku from the hit game Project Sekai Colorful Stage featuring Hatsune Miku!!!!!??!?!????!??!?!??!?!?!?!?!?!?!?? omg wow so cool!!!!!",
                        choices: [
                            {name: "so", value: "kande"},
                            {name: "emoved", value: "enams"}
                        ]
                    },
                    enams: {
                        prompt: "xidj",
                        choices: [
                            {name: "dinc", value: "kande"},
                            {name: "omcos", value: "mafu"}
                        ]
                    }
                    //{name: "sec1", value: "opening", prompt: "Kanade compose"}
                }
            };

            //setts upp....
            let chooseAnotherGroup = true; 
            while (chooseAnotherGroup) {
                let chooseAnotherGroup = false;
                //actual player selection 
                const group = await select({
                    message: "Who would you like to play as? \n~WARNING~WARNING~WARNING~WARNING~WARNING~ \n(This function does not work as intended and will be fixed in the next update, so do NOT continue any further!!!!!!!! \n~WARNING~WARNING~WARNING~WARNING~WARNING~ \n\n or do, I can't really stop you, can I?",
                    choices: [
                        { name: "Ichika Hoshino", value: "leonii" },
                        { name: "Minori Hanasato", value: "momojan" },
                        { name: "Kohane Azuzawa", value: "vivibasu" },
                        { name: "Tsukasa Tenma", value: "wondasho" },
                        { name: "Kanade Yoisaki", value: "niigo" }
                    ]
                });
            

                if (group === "leonii") {
                    //starts beginning scene
                    let sceneName = "LNclass1C_1";
                    //does somethimg idk
                    while (storySelection[group][sceneName]) {
                        const scene = storySelection[group][sceneName];
                        console.log(scene.prompt); 

                        sceneName = await select({
                            message: "...",
                            choices: scene.choices
                        })

                        if (sceneName === "chooseGroup") {
                            chooseAnotherGroup = true;
                            break;
                        }

                        if (sceneName === "itisfinished") {
                            console.log("Thank you for playing!!");
                            return;
                        }
                    }
                } else if (group === "momojan") {
                    let sceneName = "minori";
                    while (storySelection[group][sceneName]) {
                        const scene = storySelection[group][sceneName];
                        console.log(scene.prompt);

                        sceneName = await select({
                            message: "...",
                            choices: scene.choices
                        })

                        if (sceneName === "chooseGroup") {
                            chooseAnotherGroup = true;
                            break;
                        }

                        if (sceneName === "itisfinished") {
                            console.log("Thank you for playing!")
                            return;
                        }
                    }

                } else if (group === "vivibasu") {
                    let sceneName = "koha"; 
                    while (storySelection[group][sceneName]) {
                        const scene = storySelection[group][sceneName];
                        console.log(scene.prompt);

                        sceneName = await select({
                            message: "...",
                            choices: scene.choices
                        })

                        if (sceneName === "chooseGroup") {
                            chooseAnotherGroup = true;
                            break;
                        }

                        if (sceneName === "chooseGroup") {
                            console.log("Thank you for playing!")
                            return;
                        }
                    }

                } else if (group === "wondasho") {
                    let sceneName = "tsukasaskun";
                    while (storySelection[group][sceneName]) {
                        const scene = storySelection[group][sceneName];
                        console.log(scene.prompt)

                        sceneName = await select({
                            message: "...",
                            choices: scene.choices
                        })

                        if (sceneName === "chooseGroup") {
                            chooseAnotherGroup = true;
                            break;
                        }

                        if (sceneName === "itisfinished") {
                            console.log("Thank you for playing!")
                            return;
                        }
                    }

                } else if (group === "niigo") {
                    let sceneName = "kande";
                    while (storySelection[group][sceneName]) {
                        const scene = storySelection[group][sceneName];
                        console.log(scene.prompt);

                        sceneName = await select({
                            message: "...",
                            choices: scene.choices
                        })

                        if (sceneName === "chooseGroup") {
                            chooseAnotherGroup = true;
                            break;
                        }
                        
                        if (sceneName === "itisfinished") {
                            console.log("Thank you for playing!")
                            return;
                        }
                    }
                }
            }
        }
    )
            //silly stuff here(tbd)
    
    //help command
    .command(
        "helpme",
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
            console.log("  greeting       All of the Miklus' greetings for you!")
            console.log("     legacy          Original miklu's greeting")
            console.log("     leonii          Leo/need miklu's greeting")
            console.log("     momojan         MORE! MORE JUMP! miklu's greeting");
            console.log("     vivibasu        Vivid BAD Squad miklu's greeting");
            console.log("     wondasho        Wonderlands x Showtime miklu's greeting");
            console.log("     niigo           Nightcord at 25 miklu's greeting\n");
            console.log("  desc           Each miklu's summary of their sekai's appearance or their main role!");
            console.log("     legacy          Explains miklu's role in the Tree of Feelings Sekai");
            console.log("     leonii          Leo/need miklu's description of the School Sekai"); 
            console.log("        IchiH             Leo/need miklu's description of Ichika Hoshino");
            console.log("        SakiT             Leo/need miklu's description of Saki Tenma");
            console.log("        HonaM             Leo/need miklu's description of Honami Mochizuki");
            console.log("        ShihH             Leo/need miklu's description of Shiho Hinomori");
            console.log("     momojan         MORE! MORE! JUMP! miklu's description of the Stage Sekai");
            console.log("        MinoH             MORE! MORE! JUMP! miklu's description of Minori Hanasato");
            console.log("        HaruK             MORE! MORE! JUMP! miklu's description of Haruka Kiritani");
            console.log("        AiriM             MORE! MORE! JUMP! miklu's description of Airi Momoi");
            console.log("        ShizH             MORE! MORE! JUMP! miklu's description of Shizuku Hinomori");
            console.log("     vivibasu        Vivid BAD SQUAD miklu's description of the Street Sekai");
            console.log("        KohaA             Vivid BAD SQUAD miklu's description of Kohane Azuzawa"); 
            console.log("        AnS               Vivid BAD SQUAD miklu's description of An Shiraishi");
            console.log("        AkitS             Vivid BAD SQUAD miklu's description of Akito Shinonome");
            console.log("        ToyaA             Vivid BAD SQUAD miklu's description of Toya Aoyagi")
            console.log("     wondasho        Wonderlands x Showtime miklu's description of the Wonderlands Sekai"); 
            console.log("        TsukT             Wonderlands x Showtime miklu's description of Tsukasa Tenma")
            console.log("        EmuO              Wonderlands x Showtime miklu's description of Emu Otori")
            console.log("        NeneK             Wonderlands x Showtime miklu's description of Nene Kusanagi")
            console.log("        RuiK              Wonderlands x Showtime miklu's description of Rui Kamishiro")
            console.log("     niigo           Nightcord at 25:00 miklu's description of the Empty Sekai");
            console.log("        K                 Nightcord at 25:00 miklu's description of Kanade Yoisaki");
            console.log("        Yuki              Nightcord at 25:00 miklu's description of Mafuyu Asahina")
            console.log("        Enanan            Nightcord at 25:00 miklu's description of Ena Shinonome")
            console.log("        Amia              Nightcord at 25:00 miklu's description of Mizuki Akiyama\n")
            console.log("  calc           Does arthmitheic functions (+ - * /) \n");
            console.log("  letsplay       Text-based choose-your-own-adveture game that allows you to experience each groups main story as the group leader");
            console.log("                 NOTE: currently unfinished, however, at least one of the main stories is partially playable")
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

//instructions for publishing
//RUN: npm link (to test) -> npm version patch -> npm login -> npm publish i think

//color codes notes
// \x1b[36m to start and \x1b[0m to end (same end for all methods)
// 1st number can be replaced with: 36->cyan; 31->red; 32->green; 33->yellow; 34->blue; 35->magenta (don't use! can't be used for all 26 characters)
// rgb true color: \x1b[38;2;<r>;<g>;<b>m to begin 
// pjsk character hex codes: (will be changed to rgb codes)
//  l/n - 4455dd->68,85,221: ichi - 33aaee->51,170,238; saki - ffdd45->255,221,69; hona - ee6666->238,102,102; shio - bbdd22->187,221,34
//  mmj - 6ccb20->108,203,32: mino - ffcdac->225,205,172; haru - 99cdff->153,205,255; airi - ffa9cc->255,169,204; shizu - 9aeede->154,238,222
//  vbs - ee1166->238,17,102: koha - ff679a->255,103,154; an - 00bbdc->0,187,220; ginger - ff7721->255,119,33; toya - 0077dd->0,119,221
//  wxs - ff9900->255,153,0: tsuk - ffbb00->255,187,0; emu - ff66bc->255,102,188; nene - 34dd9a->52,221,154; rui - bb88ed->187,136,237
//  n25 - 884499->136,68,153: kana - bb6588->187,101,136; mafu - 8889cc->136,137,204; ena - ccaa87->204,170,135; mizu - e4a8ca->228,168,202
//  vs - 00cdba->0,205,186: miku - 33ccba->51,204,186; rin - ffcc11->255,204,17; len - ffee12->255,238,18; luka - ffbacc->255,186,204; meiko - de4444->222,68,68; kaito - 3367cd->51,103,203
//  narrator - e0c4ff->224,196,255

// all scene separators are 75 '_'s long

//polish ideas: 
// add colors to the character descriptions