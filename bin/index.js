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
                            "\"\x1b[38;2;187;221;34mSo what if I am?\x1b[0m\" \"\x1b[38;2;51;170;238mAh.. Well...\x1b[0m\" \"\x1b[38;2;187;221;34mLook, I need to go now.\x1b[0m\" \n" +
                            "...Shiho crosses the street ahead of you before you can say another word.",
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
                            "\x1b[3m\x1b[38;2;238;102;102mThere's another one! \n\x1b[38;2;51;170;238mThey are all so pretty! \n\x1b[38;2;255;221;69mWe should all make a wish! I'm gonna wish we could stay like this, together, forever! \n\x1b[38;2;187;221;34mSaki, you're not supposed to tell us your wish! \n\x1b[38;2;255;221;69mOh..Well I'm sure it will come true anyways!\x1b[0m \n\n\n" + 
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
                            "All of a sudden, your phone screen starts flashing white! You...",
                        choices: [
                            {name: "pick up your phone.", value: "schoolSekai_1a"},
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
                        prompt: "The moment you pick up your phone, it stops flashing, and you realize that it is unlocked and open to your music playlists. \n" + 
                            "\x1b[3m\x1b[38;2;51;170;238mUntitled?\x1b[0m You squint at the new music track. \x1b[3m\x1b[38;2;51;170;238mWhat song is that?\x1b[0m \n" + 
                            "As you try to see the details of the music file, you accidentally click it, and your phone starts flashing more frequently than before. \n" + 
                            "Suddenly, translucent red, blue and yellow triangular shards appear and the world around you begins to fade into light as the shards begin to whirl around your body. \n" +
                            "\"\x1b[38;2;51;170;238mEhhhh?! What's happening?\x1b[0m\"",
                        choices: [
                            {name: "-> next", value: "schoolSekai_1a"}
                        ]
                    },
                    schoolSekai_1a: {
                        //intial convo w/ miku + luka
                        prompt: "___________________________________________________________________________ \n" +
                            "After a moment, the haze of triangles clears and your surroundings come back into focus. \n" + 
                            "\x1b[3m\x1b[38;2;51;170;238mwhat is this place? where am I?\x1b[0m Disoriented from the experience, you have barely shaken off your dizziness before you hear a familiar voice. \n" + 
                            "\"\x1b[38;2;51;204;186mThis is your SEKAI.\x1b[0m\" A girl with her marroon-tipped hair in dark blueish-green twintails extends a hand to help you up from the floor that you have just realized you are sitting on. \n" + 
                            "As you take the offered hand, you take the chance to scrutinize the person who has just helped you and you notice that she is wearing a school band uniform, but more importantly, she seems very familiar to you, and once you see her face, you recognize her instantly. \"\x1b[38;2;51;170;238mAre you..Miku!?\x1b[0m\" \n" + 
                            "\"\x1b[38;2;51;204;186mThat's my name~ Nice to meet you, Ichika.\x1b[0m\" \n" +
                            "\"\x1b[38;2;51;170;238mThis can't be real.. and how do you know my name?\x1b[0m\" You ask. \n" + 
                            "\"\x1b[38;2;255;186;204mThat is because this place- this SEKAi is created from the feelings of you and your friends.\x1b[0m\" \n" + 
                            "\"\x1b[38;2;51;170;238mLuka's here too!?\x1b[0m\" You gasp in surprise. \n" + 
                            "\"\x1b[38;2;255;186;204mSorry to surprise you. However, there's nothing to be afraid of, we are here to help you.\x1b[0m\" \n" + 
                            "\"\x1b[38;2;51;170;238mHelp me... with what?\x1b[0m\" \n" + 
                            "\"\x1b[38;2;51;204;186mHelping you discover your- no, you and your friends feelings!\x1b[0m\"",
                        choices: [
                            {name: "-> next", value: "schoolSekai_1b"}
                        ] 
                    },
                    schoolSekai_1b: {
                        //flashback sequence
                        prompt: "\"\x1b[38;2;51;204;186mYou haven't forgotten who your friends are, right?~\x1b[0m\"" + 
                            "\"\x1b[3m\x1b[38;2;255;221;69mI'm gonna wish we could stay like this, together, forever!\x1b[0m\" \"\x1b[3m\x1b[38;2;238;102;102mIt's nothing.\x1b[0m\" \"\x1b[3m\x1b[38;2;187;221;34mLook, I need to go now.\x1b[0m\" \n" + 
                            "\"\x1b[38;2;51;170;238mBut we aren't... And Saki...\x1b[0m\"",
                        choices: [
                            {name: "-> next", value: "schoolSekai_1c"}
                        ]
                    },
                    schoolSekai_1c: {
                        //sekai section after flashbakc sequence
                        prompt: "\"\x1b[38;2;51;204;186mIt will be okay, Ichika. I'm sure you all share the same feelings.\x1b[0m\" \n" + 
                            "\"\x1b[38;2;51;170;238mWhat?\x1b[0m\" \n" + //ichi
                            "\"\x1b[38;2;51;204;186mSo, don't worry. You'll see each other again, here.\x1b[0m\" \n" + //miku
                            "\"\x1b[38;2;255;186;204mMiku and I will be waiting for you as well, so make sure to bring everyone here next time.\x1b[0m\" \n" + //luka
                            "You see colorful shards begin to form around you, and as your surroundings begin to fade once more, you manage to gasp out one last question: \"\x1b[38;2;51;170;238mWhat exactly are you trying to tell me? Miku! Luka!\x1b[0m\" \n\n",  //ichi
                        choices: [
                            {name: "-> next", value: "ichiroom_2"}
                        ]
                    },
                    ichiroom_2: {
                        //ichi wakes up and wnders + minor not flashback things (plain dialogue; may be changed later) + end of opening! maybe include comment from narrator about ending of opening
                        prompt: "\n\n\n\n" + 
                            "..You blink open your eyes to find yourself face down on your desk. \n" + 
                            "\x1b[3m\x1b[38;2;51;170;238mAh, I must have fallen asleep... That was such an odd dream\x1b[0m You stretch, yawning as you glance out the window. \x1b[3m\x1b[38;2;51;170;238m..its dark outside... I must have been asleep for a while\x1b[0m \n" +
                            "\x1b[3m\x1b[38;2;51;170;238m!..Wow,\x1b[0m You pause, mid-yawn, and turn fully towards the window. \"\x1b[38;2;51;170;238mThe stars are so bright tonight...\x1b[0m\" \n" +
                            "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \n" + 
                            "\"\x1b[38;2;238;102;102mHuh.. The stars are so pretty...\x1b[0m\"\n" + //hon
                            "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \n" + 
                            "\"\x1b[38;2;187;221;34mHmm?.. The stars are so visible tonight.. it's... been a while since I've looked up at the stars like this.\x1b[0m\" \n" + 
                            "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \n" +  
                            "\"\x1b[38;2;255;221;69mHmmhmmhm ♪ hmmhmhmm ♪ I'm glad I changed to a new lip gloss! Now I'm all set for tomorrow.. I can't wait to start going to school again after so long! I bet Icchan and the others will be so surprised!\x1b[0m\" \n" + 
                            "\"\x1b[38;2;255;221;69mOh! The stars are really super bright tonight! Whoa! A shooting star!\x1b[0m\" \n" + 
                            "\"\x1b[38;2;255;221;69mI'll never forget that beautiful meteor shower we all saw together, a long time ago... Another shooting star? Well, I guess I should make another wish!\x1b[0m\" \n" + 
                            "\"\x1b[38;2;255;221;69mI wish that the four of us will be able to watch a meteor shower again, just like we did back then!\x1b[0m\" \n" + "\n\n\n\n\n\n\x1b[38;2;51;170;238m" + 
                            "                                                      +++++   ++                   \n" +
                            "     *                                            ++++         +                   \n" +
                            "   ***                                         ++++           ++                   \n" +
                            "   ***             ***       ****           *++               +                    \n" +
                            "   ***          ****+++++  ****+++++     **+                 +                *    \n" +
                            "   ***         ***     +++***     +++  ***                + +               *++    \n" +
                            "   ***        **++  *+++++*+       + ***                 ++                 *++    \n" +
                            "    +++        +++        +++      **                                       *++    \n" +
                            "     +++++++++++++++        ++++ ** *****+++    ****+++    ****+++    ****+++++    \n" +
                            "                              ***  ****   ++++****   ++++****   ++++****   +++++   \n" +
                            "                             **    ***      ++**     +++***     +++***      +++    \n" +
                            "                           ***     +++      ++++*   ++++*+++  *+++++++*     +      \n" +
                            "                        ****       +++      +++++++       +++++     +++++++        \n" +
                            "                      *****        +++      +    +          +          ++          \n" +
                            "                      *****        +                                               \n" +
                            "                        *  *                                                       \n" +
                            "                        *                                                          \x1b[0m\n" + 
                            "\x1b[3m\x1b[38;2;224;196;204mCongratulations, you have finished the opening section of Leo/need's story and reached a checkpoint! \n" + 
                            "Do you want to...\x1b[0m",
                        choices: [
                            {name: "continue", value: "LNplaceholder"}, 
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
                        prompt: "\x1b[3m\x1b[38;2;244;196;255muh oh! if you're seeing this, then that means that this part of the story hasn't been finished yet! \n" + 
                            "Would you like to...\x1b[0m",
                        choices: [
                            {name: "try again?", value: "LNclass1C_1"},
                            {name: "try a new path?", value: "chooseGroup"},
                            {name: "Exit game", value: "itisfinished"}
                        ]
                    }
                    //{name: "sec1", value: "opening", 
                },
                momojan: {
                    //minori submits her idol aplication and hopoes + flashback
                    MMJmiya_1: { 
                        prompt: "You are walking to school, and you see a nearby mailbox and pause your walk to put an envelope into it. \n" + 
                            "\"\x1b[38;2;255;205;172mOk, I've put it in.. Oh, I hope my application gets accepted this time!\x1b[0m\" \n" + 
                            "\x1b[3m\x1b[38;2;255;205;172mI've always wanted to be an idol, but my applications keep getting rejected...\x1b[0m You stand in front of the mailbox, unmoving and deep in thought. \n" + 
                            "\"\x1b[3m\x1b[38;2;153;205;255mTomorrow will be a better day.\x1b[0m\" \n" + 
                            "\"\x1b[3m\x1b[38;2;153;205;255mIt's my duty to spread hope as an idol.. So I'll keep trying harder and harder to become the best idol for all of you!\x1b[0m\" \n" + 
                            "\"\x1b[38;2;255;205;172mI'll just have to keep trying harder and harder!\x1b[0m\" Glancing at your watch, you gasp, startled. \n" +
                            "\"\x1b[38;2;255;205;172m..Oh no, I'm going to be laaaaaaaaaate!\x1b[0m\"",
                        choices: [
                            {name: "-> next", value: "MMJmiyagirlsroof_1a"},
                            {name: "try a different path?", value: "chooseGroup"},
                            {name: "Exit game", value: "itisfinished"}
                        ]
                    },
                    MMJmiyagirlsroof_1a: {
                        //minori trains on roof
                        prompt: "___________________________________________________________________________ \n" + 
                            "After school, you go up to the roof of the school to practice your dancing so you can become the best idol you can be! \n" +
                            "\x1b[3m\x1b[38;2;225;205;172m1,2,3,4.. 1,2,3,whoa!\x1b[0m You misstep, and realizing it too late, you fall on your back. \n" + 
                            "\x1b[3m\x1b[38;2;225;205;172m*Haa..* I always mess up during that section..\x1b[0m You push yourself up to a sitting position on the roof floor for a bit to rest, and you look at the sky over the rooftop, noting how the sun has begun to start setting. \n" + 
                            "\x1b[3m\x1b[38;2;255;205;172mI guess I should start packing up now..\x1b[0m After resting for a bit longer, you..",
                        choices: [
                            {name: "begin to pack up your things.", value: "MMJdeadend_1aa"},
                            {name: "continue practicing.", value: "MMJmiyagirlsroof_1b"}
                        ]
                    },
                    MMJdeadend_1aa: {
                        //minori dicides to elave early, she is not accepted to th eagency she aplleid to she never bcomes and idol i guess
                        prompt: "After packing up your things, you exit the rooftop, glancing back once to see the sunset.",
                        choices: [
                            {name: "-> next", value: "MMJdeadend_1b"}
                        ]
                    }, 
                    MMJdeadend_1b: {
                        //minor regjected over and over ag
                        prompt: "Unfortunately, your application is rejected, \x1b[3magain,\x1b[0m and all of the applications that you put together and submit are also rejected. \n" + 
                            "You don't ever \x1b[3mstop\x1b[0m sending in applications, but you slowly start to lose hope in your dream.. \n\n\n\n\n\n\n"  + 
                            "\x1b[3m\x1b[38;2;224;196;255mWell, that was a rather unsatisfying ending, don't you think? \nA truly resilient hope, dimming ever so slowly...\n.\n.\n.\n..Would you like to...\x1b[0m",
                        choices: [ 
                            {name: "try again?", value: "MMJmiya_1"}, 
                            {name: "try a new path?", value: "chooseGroup"}, 
                            {name: "Exit game", value: "itisfinished"}
                        ]
                    },
                    MMJmiyagirlsroof_1b: {
                        //minor loioks in (pls pls expand on 1st line before shipping)
                        prompt: "\x1b[3m\x1b[38;2;225;205;172mNo, I need to focus! I bet Haruka's excercise routine is way more difficult than this!\x1b[0m \n" + 
                            "You stand up, ready to start practicing.. \"\x1b[38;2;225;205;172mDid my phone just flash?\x1b[0m\" \n" + 
                            "The screen of your phone has started flashing white. \n" + 
                            "Although, the music that you are practicing with is still playing.. You decide to...",
                        choices: [
                            {name: "check your phone.", value: "stageSekai_1a"},
                            {name: "continue practicing.", value: "MMJdeadend_1ab"}
                        ]
                    },
                    MMJdeadend_1ab: {
                        prompt: "You continue practicing, and while you aren't quite able to perfect that one move, you \x1b[3malmost\x1b[0m perfect the rest of the song!",
                        choices: [
                            {name: "-> next", value: "MMJdeadend_b"}
                        ]
                    },
                    MMJmiyagirlsroof_1c: {
                        prompt: "Picking up your phone, you notice a new song in your workout playlist. \n" + 
                            "\"\x1b[38;2;225;205;172mUntitled? I don't remember downloading this song...\x1b[0m\" You press on the song's icon, and as your phone stops flashing white, the song icon starts flashing instead! \n" + 
                            "Suddenly, translucent red, blue, and yellow triangles appear around you and the world around you begins to fade into light as the shards begin to swirl around your body. \n" + 
                            "\"\x1b[38;2;225;205;172mWait! What's happening?\x1b[0m\"",
                        choices: [
                            {name: "-> next", value: "stageSekai_1a "}
                        ]
                    },
                    stageSekai_1a: {
                        //minori arrives and describes the setting of the sekai
                        prompt: "___________________________________________________________________________ \n" +
                            "You open your eyes, squinting at the bright lights all around you. \"\x1b[38;2;225;205;172mWhere am I? What is this place?\x1b[0m\" \n" + 
                            "As your eyes adjust to the light, you can finally take in your surroundings, and you realize that you are in a concert hall, like the ones that you've seen Haruka perform in! \n" + 
                            "\x1b[3m\x1b[38;2;225;205;172mI must be dreamiing... I've always wanted to perform in a place like this as an idol!...\x1b[0m As you look around, your eyes shining with awe, a voice calls out to you from behind. \n" + 
                            "\"\x1b[38;2;51;204;186mHello, Minori!\x1b[0m\" You whip around to see who spoke and you see a girl with her greenish-blue hair in twintails wave at you friendlily. \n" + 
                            "\"\x1b[38;2;225;201;172mWh-Who are you?!\x1b[0m\"",
                        choices: [ 
                            {name: "-> next", value: "stageSekai_1b"}
                        ]
                    },
                    stageSekai_1b: {
                        //minori talks to miku and rin idk i think endd on miku metioning that others are forgetting
                        prompt: "\"\x1b[38;2;225;205;172mWait.. You're Miku, aren't you?\x1b[0m\" The girl nods, smiling, and you notice she is wearing a white and gray idol-style dress with teal accents. \n" + 
                            "\"\x1b[38;2;255;204;17mHey, don't forget about me! Welcome to your SEKAI, Minori-chan!\x1b[0m\" Another girl, this time with her hair styled in a yellow bob, runs up behind the first girl. \n" + 
                            "\"\x1b[38;2;225;205;172mWell now, I absolutely \x1b[3mhave\x1b[23m to be dreaming.. How else would I be speaking to Miku and Rin otherwise?\x1b[0m\" You exclaim, noticing that Rin is also wearing the same outfit as Miku, but instead with yellow accents. \"\x1b[38;2;225;205;172mThen, what is this place?\x1b[0m\" \n" + 
                            "\"\x1b[38;2;51;204;186mThat is because this place is your SEKAI!\x1b[0m\" \n" + //miku
                            "\"\x1b[38;2;225;205;172mHuuuh? SEKAI?\x1b[0m\" \n" + //minori
                            "\"\x1b[38;2;255;204;17mYup! A world created from all of your true feelings! And we're here in this SEKAI to help you discover those feelings!\x1b[0m\" \n" + //rin
                            "\"\x1b[38;2;51;204;186mThat's right! Because when you all discover your true feelings, they will give birth to songs!\x1b[0m\" \n" + //miku
                            "\"\x1b[38;2;225;205;172mWait-Wait! True feelings? Songs? I don't understand anything that you guys are talking about!\x1b[0m\" \n" + //minori
                            "\"\x1b[38;2;255;204;17mNot even a bit? Well, it seems that you've already found your true feelings either way.\x1b[0m\" \n" + //rin
                            "\"\x1b[38;2;225;205;172mMy true feelings? Do you mean my dream of becoming an idol?\x1b[0m\" \n" + //minori
                            "\"\x1b[38;2;51;204;186mIt might be that or it might not, but either way you should try to hold on to those feelings and not forget them.. Because the others are starting to lose sight of theirs.\x1b[0m\" \n",
                        choices: [
                            {name: "-> next", value: "stageSekai_1c"}
                        ]
                    },
                    stageSekai_1c: {
                        //ending of talk with miku
                        prompt: "\"\x1b[38;2;225;205;172mAh, what do you mean by that? Could you be a bit more specific?\x1b[0m\" You ask, tilting your head to the side in confusion. \n" + 
                            "\"\x1b[38;2;51;204;186m...\x1b[0m\" Miku peeks her head out of the side of the stage, and quickly pulls it back in worry. \n" + 
                            "\"\x1b[38;2;51;204;186mAhh! the show is about to start! Sorry, Minori.. We have to go now. See you around!\x1b[0m\" Before she even finishes her sentence, Miku runs out onto the stage to start the show. \n" + 
                            "\"\x1b[38;2;255;204;17mWe'll both be cheering for all of you!\x1b[0m\" You open your mouth to respond, but Rin is gone before she can hear you. \n" + 
                            "\"\x1b[38;2;225;205;172m..wait!\x1b[0m\" The last thing you see is the girls waving to the audience as everything both fades and brightens into white light. \n\n",
                        choices: [
                            {name: "-> next", value: "MMJmiyagirlsroof_2"}
                        ]
                    },
                    MMJmiyagirlsroof_2: {
                        //minori wakes up + haru cameo & checkpoint
                        prompt: "\n\n\n\n" + 
                            "\x1b[3m\x1b[38;2;255;205;172m*Achoo!*\x1b[0m You open your eyes to find yourself slumped on the side of the roof. \n" + 
                            "\x1b[3m\x1b[38;2;255;205;172mHaaaa!? I fell asleep?..and on the roof too... I must have been really tired..\x1b[0m You stand up and stretch, yawning. \n" + 
                            "\"\x1b[38;2;255;205;172mWhelp, time to get back to practicing!\x1b[0m\"" +
                            "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \n" + 
                            "\"\x1b[38;2;153;205;255mAre my documents ready?\x1b[0m\" A blue-haired girl asks a teacher." + 
                            "The teacher replies affimatively. \"Yes.. but are you sure? There is still time to..\" " + 
                            "\"\x1b[38;2;153;205;255mI won't need to. After all... I have decided to quit being an idol.\x1b[0m\"" +
                            "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \n" + 
                            "\"\x1b[38;2;255;205;172mOkay, I'm going to tackle that part that I keep messing up on!\x1b[0m\" \n" + 
                            "\x1b[3m\x1b[38;2;255;205;172mAs long as I keep trying harder and harder, I will be able to become a great idol like Haruka!\x1b[0m \n" + "\n\n\n\n\n\n\x1b[38;2;108;203;32m" +
                            "   .::::    ::::.  ;+++;.  ::::::::. ::::::::::..::::    ::::.  ;+++;.  ::::::::. ::::::::::.    \n" +
                            "  x     :xx:     +       +:         .                ;Xx.     x       +.         :           x   \n" +
                            " :x xxxx;  xxxx;  +xxxxxx   ;;;;;;;;. ;;;;;;;;;  ..;x:  :+++:  ;++xxx+  :;;;++++;  ;;;;;;;;; x:  \n" +
                            " :x xxxxxxxxxxx+ +xx   xxx. ++;   :;; ;+;        ;++xxx+++XX; ++;   ;x+.:;;;   ;;; ;;;       x.  \n" +
                            " :x xxx. xx .xx+.xx;    xx; ++x$$$$X. ;++xxxx+   ;++  ;: .XX;.++.   ....:;+;;;;;;. ;;;++++; ;+   \n" +
                            " :x +xx.    .xx; xxxx;;xxx  ++;  ;+;  ;++;:::::  ;++     .XX; +XX+:;++; .;+:  ;;;  ;;;::;;;. x:  \n" +
                            " :x :++      ++:   xxxx+.   ++;   ;;: ;;+xxxxx+  ;++......xx:...+XXx:....++:...+++.+++++;;;; x:  \n" +
                            "  ++:::. :+++.   ........................................................................  :++   \n" +
                            "    x:    +++   ......................................................................... :+     \n" +    
                            "   :+ ;++++++   ....;;;;+..+;;+......+;;;+..;;;;+++.....+;++;;+..;;;;+++++++++...+++++... :+     \n" +
                            "    x .++: ++++ ....++++;..++++......+;;;+..+++++++++++;;;++++;..++++++++++++++  ;++++. ;+x      \n" +
                            "    :x:     +:   ...++++;..++++:     ;;;;;  ++++++++++;;;;+++++  ++++;    .++++; ;++++. x        \n" +
                            "       x .;;;;.     ;;;;:  ++++:     ;;;;;  +++++ .+++;;  +++++  +++++;;;++++++. :++++  x        \n" +
                            "       x  +;;++    ;++;+;  +++++    :;;;;;  +++++ :    .. +++++  +++++;;;+++++. : .++  +;        \n" +
                            "       ;+ :+++++++++++++   :+++++++;;;;;;   ;;;;; ++XXxx: ;;;;;  +++++;;;;;:  :X. ;;;; :x        \n" +
                            "        ;+ .++++++++++; :Xx  ++++++;;;;;  . ;;;;; +:   x: ;;;;;  ++++; ++++XX+.x :;;;;  x        \n" +
                            "         .x;  .++++;  .x:  x+  :;++;;   xX: ;;;;. +:   x; :;;;:  :;;;. x:      ++  ::  x:        \n" +
                            "            ;+++::;+x+.      ;+x+;;;+x+.  +x+++++x;     +x+++++xx+++++x:         +x+xx;          \x1b[0m\n" +
                            "\x1b[3m\x1b[38;2;224;196;255mCongratulations, you have finsihed the opening section of MORE! MORE! JUMP!'s story and unlocked a checkpoint! \n" + 
                            "Do you want to...\x1b[0m",
                        choices: [
                            {name: "continue", value: "MMJplaceholder"}, 
                            {name: "choose a new path?", value: "chooseGroup"}, 
                            {name: "Exit game", value: "itisfinished"}
                        ]
                    },
                    MMJplaceholder: {
                        prompt: "\x1b[38;2;224uh oh! if you're seeing this, then that means that this part of the story has n't been finished yet! \n" + 
                            "Would you like to...\x1b[0m",
                        choices: [
                            {name: "try again?", value: "MMJmiya_1"}, 
                            {name: "try a new path?", value: "chooseGroup"},
                            {name: "Exit game", value: "itisfinished"}
                        ]
                    }
                },
                vivibasu: {
                    VBSpoverror_1: {
                        //explanation in form of error message explaining why pov is an instead of kohane
                        prompt: "\x1b[38;2;224;196;255mUh oh!~ The character you selected isn't available right now! Looks like I'll just have to tell this story through different eyes! \x1b[0m\n.",
                        choices: [
                            {name: "-> next", value: "VBSwkgarage_1a"},
                            {name: "try a different path?", value: "chooseGroup"},
                            {name: "Exit game", value: "itisfinished"}
                        ]
                    },
                    VBSwkgarage_1a: {
                        //an is working and she is talking to the patrons + flshback of seeing RAD WEEKEND
                        prompt: ". \n. \n. \n" + 
                        "A girl with stars in her hair finshes making a coffee for a customer at the small cafe, WEEKEND GARAGE. \n" + 
                        "\"\x1b[38;2;0;187;220mOkay, here's your coffee!\x1b[0m\" The girl hands the drink to the customer, who smiles apreciatively. \n" + //an
                        "\"Thanks, An. Ah, are you still looking for a music partner?\" asks the customer, taking a sip of her drink. \n" + 
                        "\"\x1b[38;2;0;187;220mYeah, I haven't been able to find the right person yet...\x1b[0m\" \n" + 
                        "Another customer chimes in, \"I heard you got an offer from some musician! I heard she's joining a big label soon...\" \n" + 
                        "\"\x1b[38;2;0;187;220mOh, yeah.. I...\x1b[0m\"", 
                        choices: [
                            {name: "\x1b[38;2;0;187;220mmight accept her offer.\x1b[0m\"", value: "VBSdeadend_1a"},
                            {name: "\x1b[38;2;0;187;220mrejected her offer.\x1b[0m\"", value: "VBSwkgarage_1b"},
                            {name: "try a different path?", value: "chooseGroup"},
                            {name: "Exit game", value: "itisfinished"}
                        ]
                    },
                    VBSdeadend_1a: {
                        //an-chan talks about how she chose her partner
                        prompt: "\"\x1b[38;2;0;187;220mShe seemed like a pretty good choice.\x1b[0m\" An replied thoughtfully. \n" + 
                            "\"\x1b[38;2;0;187;220mShe did say that it was impossible to surpass RAD WEEKEND though...\x1b[0m\" \n" +
                            "The first customer put down her drink with a clink, \"Really! If I was you I wouldn't accept that offer then!\" \n" + 
                            "\"No, remember she's getting signed soon! She might still be a good choice!\" The other customer countered. \n" + 
                            "An thought for some time. \"\x1b[38;2;0;187;220mI think I'll accept. After all, she can probably be convinced to change her mind!\x1b[0m\"",
                        choices: [
                            {name: "-> next", value: "VBSdeadend_1b"}
                        ]
                    },
                    VBSdeadend_1b: {
                        //partner is very terrible to work with and you eventually break up (much harder to find new partner b/c everyone already assumes you have one)
                        prompt: "An and her new music partner get along pretty well, but often fight over their future goals. \n" + 
                            "Eventually, their partnership dissolves and An is left without a partner. \x1b[3mAgain.\x1b[0m \n" + 
                            "\x1b[38;2;224;196;255mOh dear~ Looks like An's chosen the wrong partner! \n" + 
                            "Would you like to...\x1b[0m", 
                        choices: [
                            {name: "try again?", value: "VBSwkgarage_1a"},
                            {name: "try a new path?", value: "chooseGroup"},
                            {name: "Exit game", value: "itisfinished"}
                        ]
                    },
                    VBSwkgarage_1b: {
                        //explains that an-chan rsufed this partner b/c she said that it was impossibel to surpass RAD WEEKEND
                        prompt: "\"\x1b[38;2;0;187;220mI was thinking of choosing her, but she kept on insisting that it's impossible to surpass RAD WEEKEND!\x1b[0m\" \n" + 
                            "The first customer placed down her drink, \"Well, obvously that's a deal breaker!\" \n" + 
                            "\"Well, I can kinda sympathatize with her... I can't even imagine what an event better than that would be like.\" The second customer chimed in. \n" + 
                            "\"\x1b[38;2;0;187;220mI guess that's a normal reaction... but I'm still going to do it!\x1b[0m\" An said determinedly.",
                        choices: [
                            {name: "-> next", value: "VBSwkgarage_1c"}
                        ]
                    },
                    VBSwkgarage_1c: {
                        prompt: "___________________________________________________________________________ \n" +
                            "An finishes cleaning up the tables. \"\x1b[38;2;0;187;220mAll finished!\x1b[0m\" \n" + 
                            "\"\x1b[38;2;0;187;220mDad, cafe hours are over now! I'm leaving!\x1b[0m\" An yelled up the stairs. \n" + 
                            "\"Another street performance? Try not to get into any fights with the other musicians, okay?\" \n" + 
                            "\"\x1b[38;2;0;187;220mPlease! I'm not a kid anymore!\x1b[0m\" An huffed indignantly. \"\x1b[38;2;0;187;220mAnyways, bye!\x1b[0m\"",
                        choices: [
                            {name: "-> next", value: "VBSscramCross_1a"}
                        ]
                    },
                    VBSscramCross_1a: {
                        //an sings on crossing (choice: phone or no phone)
                        prompt: "An adjusts the settings on her microphone. \x1b[3m\x1b[38;2;0;187;220mMic set and checked! Time to start singing!\x1b[0m She glances around, surveying the small crowd that has grown as she was setting up. \n" + 
                            "\"Hey An, we're ready for the show! I brought a friend along this time so you better go for broke!\" One of the onlookers calls out. \n" + 
                            "\"\x1b[38;2;0;187;220mThanks, everyone! I'll do my best!\x1b[0m\" An says to the growing crowd. \n" + 
                            "\x1b[3m\x1b[38;2;0;187;220m♪♫ Half way down to K.O (fuwa fuwa) ♪ I'll float until tomorrow ♫ Time to get it started now ♪♫ \n" +
                            "Yup. My voice is in top form today. I'll whip this crowd into a frenzy! \n" +
                            "♪♫ Fall to tears, or laugh or jeer, just never let me go ♪ Come and say no, bellow echo down the road ♪♫ \x1b[0m \n" +
                            "\"\x1b[38;2;255;103;154mOh, wow.\x1b[0m\" \x1b[9mYou\x1b[0m stop by the performance on your way back from school. \n" + 
                            "\x1b[3m\x1b[38;2;0;187;220m♪♫ We'll dance to the beat, we'll dance to the beat ♫ All us lonely souls will set it free now♪♫\x1b[0m \n" +
                            "\x1b[3m\x1b[38;2;255;103;154mShe's so confident.. I'd never have the courage to sing on the street like that...\x1b[0m \n" + 
                            "\x1b[3m\x1b[38;2;0;187;220m♪♫ I'll see you again, survive until the end ♪ Sayonara bye bye lets go ♪♫\x1b[0m The song comes to an end and \x1b[9myou\x1b[0m leave, not having the time to stay for the next song. ",
                        choices: [
                            {name: "-> next", value: "VBSplaceholder"}
                        ]
                    },
                    VBSscramCross_1b: {
                        prompt: "c",
                        choices: [
                            {name: "d", value: "r"}
                        ]
                    },
                    VBSdeadend_2: {
                        prompt: "d",
                        choices: [
                            {name: "d", value: "d"}
                        ]
                    },
                    streetSekai_1a: {
                        //an meets kohane in sekai
                    },
                    streetSekai_1b: {
                        //miku len and meiko explaination
                    },
                    VBSwkgarage_2: {
                        prompt: "idk" + 
                        "idk vro" + "\n\n\n\n\n\n\x1b[38;2;238;17;102m" +                    
                        "     ...      ....                                                                            \n" +
                        "  .X&&&&&X..:$&&&&&+.:X&$+.          .....         ........             .........             \n" +
                        " :&XxxxxxX&X&xxxxxx$&&xxx$&.       .X&XX$$:        ;&XXX$&&$$X;.   .;X$$$&$$$$&&&$x:          \n" +
                        " $$xxxxxxx$&Xxxxxxxx&&xxxX&.       ;&xxxx&x    :X&&&&x;;;;;;;;x$&XX&x;;;$&+;;;;;;;+$&+.       \n" +
                        " x$x++++++xX+++++++x&&$xX&$$&&x.x&&$$&XX&&.    $X+++X&;;;;;;;;;;;;$x;;;;x&X;;;;;;;;;;$x       \n" +
                        "  x&x+++;+;+;+;+++X&&x+;;+&+;+X&X+++&++;+$$$&$$$X;++$&$xxx$&$Xx;::+X:$+:;&&;::;;:::::x&       \n" +
                        "  .x&&X;;;;;;;;;$&&&&$;;;x&;;;;x;;;;&;;;;X$;;;+;;;;&&&&&+::&X+;:x&&;:&x::X&+::x&x:::;$x       \n" +
                        "    x&&X::::::;$&&&&&&:::x&&+:::::x&&+::;&+:;Xx:::;&&&&&&::x&&&X::xx:;;::+&x:::;::::$x.       \n" +
                        "    :&&&+....:X&&&&&&$:..+&&&+...+&&&;...&X:;...:..$&&&&&$x+:..:;Xx.;&&:..&$:....:X&x         \n" +
                        "    .X&&$&$$$&&&&&&&&&&$&&&&&&$x$&&&&$;:X&&&$$$&&$$&&&&;...;x$&&&+..+&X::;X&+..+$&&X          \n" +
                        "      ..:&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&XX&&&&&&&&&&&&&&&&&&$x$&&x;&+          \n" +
                        "      .&X.        ;&&&&&;.     .;&&&&; .x&&&&&&X  +&&&&&&&: :&&&&&&&&$.       .:$&;           \n" +
                        "     .&x. .;;;;;;X&&&&;. ..:::..  ;&&; .x&&&&&&X  +&&&&&$.   .X&&&&&&$. .::::..  .$x          \n" +
                        "     .&+. :XXXXX$&&&&+  :&&&&&&&;. +&; .x&&&&&&X  +&&&&x. .;. .+&&&&&$. :&&&&&&+. ;&.         \n" +
                        "     .&&+.        .X&:  X&&$$$&&X. ;&; .x&&&&&&X  +&&&:. :$&$.  :$&&&$. :&&&&&&$. :&;         \n" +
                        "     .X&&&&&&&&&x  :&X. .x&X..:$&+.x&+. ;$&&&&&; .x&X.  :&&&&&;. .X&&$. :$&&&&$:  +&;         \n" +
                        "    :$X..........  x&&X.        :$&&&&:   .....  ;&x.  ..x$.x$..   +&$.         .x&&.         \n" +
                        "   :&X+++++++++++X&&&&$$&X++++++++X&&&&&X++;;++X&&X++++++X&+$&++++++x&++++++++x$&$&;          \n" +
                        "   :&$xxxxxxxxxxxX&&&&&&$x;;;;;;;;X&&&&&XxxxxxxX&&x;;;;;;X&&&&;;;;;;;&xxxxxxxxx$&X.           \n" +
                        "    :;;+X&&&&&&&&&+..:&&&&&$$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&X;..             \n" +
                        "             .X$+.    +&X.     .X&&&+.+&&&x.     .x$&&&&&&&&&&&&&&$;. .x$$$;.                 \n" +
                        "                                .....  ...              ..x&&&&$;..                           \x1b[0m\n" +
                        "Congratulations, you have finished the opening section of Vivid BAD SQUAD's story and unlocked a checkpoint! \n" + 
                        "Would you like to...\x1b[0m",
                        choices: [
                            {name: "-> next", value: "VBSplaceholder"},
                            {name: "choose a new path", value: "chooseGroup"},
                            {name: "Exit game", value: "itisfinished"}
                        ]
                    },
                    VBSplaceholder: {
                        prompt: "d"
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
                    message: "Who would you like to play as? \n" + 
                        "~WARNING~WARNING~WARNING~WARNING~WARNING~ \n" + 
                        "(Only the FIRST TWO selections work as intended and the others will be fixed in the next update, so do NOT continue any further!!!!!!!! \n~WARNING~WARNING~WARNING~WARNING~WARNING~ \n\n or do, I can't really stop you, can I? \n         • ᴗ < ",
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
                            console.log("\x1b[3m\x1b[38;2;224;196;255mThank you for playing!!\x1b[0m");
                            return;
                        }
                    }
                } else if (group === "momojan") {
                    let sceneName = "MMJmiya_1";
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
                            console.log("\x1b[3m\x1b[38;2;224;196;255mThank you for playing!\x1b[0m")
                            return;
                        }
                    }

                } else if (group === "vivibasu") {
                    let sceneName = "VBSpoverror_1"; 
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
                            console.log("\x1b[3m\x1b[38;2;224;196;255mThank you for playing!\x1b[0m")
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
                            console.log("\x1b[3m\x1b[38;2;224;196;255mThank you for playing!\x1b[0m")
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
                            console.log("\x1b[3m\x1b[38;2;224;196;255mThank you for playing!\x1b[0m")
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
            console.log("                 NOTE: currently unfinished, however, at least one of the main stories is playable!")
            console.log("  helpme         Shows this information, duh!");
        }
    )
    .demandCommand(1, "Choose a command. Try 'miklu greeting --name=YourName' to say hello to Miklu!")
    .help()
    .parseAsync();


//to do: test miklu desc legacy (+ all the other legacy commands)
//       test all the new desc commands (just leonii for now) 
// eventually: visiual novel from the pov of all the main characters fallowing through main story 2nd person with bad end being world link 2 based

//instructions for publishing
//RUN: npm link (to test) -> npm version patch -> npm login -> npm publish ./Miklu-Custom-Cli-Tool- 2nd part not necessary sometimes tho i think

//color codes notes
// \x1b[36m to start and \x1b[0m to end (same end for all methods) [to end just italics use \x1b[23m]
// 1st number can be replaced with: 36->cyan; 31->red; 32->green; 33->yellow; 34->blue; 35->magenta (don't use! can't be used for all 26 characters)
// rgb true color: \x1b[38;2;<r>;<g>;<b>m to begin 
// pjsk character hex codes: (will be changed to rgb codes)
//  l/n - 4455dd->68,85,221: ichi - 33aaee->51,170,238; saki - ffdd45->255,221,69; hona - ee6666->238,102,102; shio - bbdd22->187,221,34
//  mmj - 6ccb20->108,203,32: mino - ffcdac->225,205,172; haru - 99cdff->153,205,255; airi - ffa9cc->255,169,204; shizu - 9aeede->154,238,222
//  vbs - ee1166->238,17,102: koha - ff679a->255,103,154; an - 00bbdc->0,187,220; ginger - ff7721->255,119,33; toya - 0077dd->0,119,221
//  wxs - ff9900->255,153,0: tsuk - ffbb00->255,187,0; emu - ff66bc->255,102,188; nene - 34dd9a->52,221,154; rui - bb88ed->187,136,237
//  n25 - 884499->136,68,153: kana - bb6588->187,101,136; mafu - 8889cc->136,137,204; ena - ccaa87->204,170,135; mizu - e4a8ca->228,168,202
//  vs - 00cdba->0,205,186: miku - 33ccba->51,204,186; rin - ffcc11->255,204,17; len - ffee12->255,238,18; luka - ffbacc->255,186,204; meiko - de4444->222,68,68; kaito - 3367cd->51,103,203
//  narrator (a playful miku!) - e0c4ff->224,196,255

// all scene separators are 75 '_'s long & pov switches are 50 '~'s long

//polish ideas: 
// add colors to the character descriptions