var categories = document.querySelectorAll(".category");

for (let i = 0; i < categories.length; i++) {
    let category = categories[i].querySelectorAll(".card");

    for (let x = 0; x < category.length; x++){
        category[x].addEventListener("click", function() {


            for (let j = 0; j < category.length; j++){
                let temp = category[j];
                temp.classList.remove("active-card")
            }

            this.classList.add("active-card");

        });
    }
}

var button = document.querySelector(".button");
var keyboard_dict = {
    "40%": {
        "ANSI WKL Aluminum": {
            "name": "ION x ai30: Equinox",
            "picture": "https://i.imgur.com/BfT6eUL.png"
        },
        // "ANSI WKL Polycarbonate": {
        //     "name": "Not Available",
        //     "picture": "/images/not_available"
        // },
        // "ANSI WKL Injection Mold": {
        //     "name": "Not Available",
        //     "picture": "/images/not_available"                    
        // },
        "ANSI HHKB Aluminum": {
            "name": "Pandora60",
            "picture": "https://pearlboards.net/cdn/shop/products/GreenAlu553C-SS_Back_550x.jpg"
        },
        "ANSI HHKB Polycarbonate": {
            "name": "Neuro",
            "picture": "https://www.keebtalk.com/uploads/db8059/original/2X/6/6a64232404f5bba4bb9128cf8278d4a118d43d1e.jpeg"
        },
        // "ANSI HHKB Injection Mold": {
        //     "name": "Not Available",
        //     "picture": ""
        // },
        "ANSI None Aluminum": {
            "name": "Vortex 40%",
            "picture": "https://vortexgear.store/cdn/shop/files/DSC_2799.png?v=1690948046&width=533"
        },
        // "ANSI None Polycarbonate": {
        //     "name": "Not Available",
        //     "picture": ""
        // },
        "ANSI None Injection Mold": {
            "name": "Minimi40",
            "picture": "https://i.imgur.com/JZ737BR.jpg"
        },


        "ISO WKL Aluminum": {
            "name": "humble40",
            "picture": "https://i.imgur.com/WAF87oc.jpg"
        },
        // "ISO WKL Polycarbonate": {
        //     "name": "Not Available",
        //     "picture": "/images/not_available"
        // },
        // "ISO WKL Injection Mold": {
        //     "name": "Not Available",
        //     "picture": "/images/not_available"                    
        // },
        // "ISO HHKB Aluminum": {
        //     "name": "Not Available",
        //     "picture": "/images/not_available"
        // },
        // "ISO HHKB Polycarbonate": {
        //     "name": "Not Available",
        //     "picture": "/images/not_available"
        // },
        // "ISO HHKB Injection Mold": {
        //     "name": "Not Available",
        //     "picture": "/images/not_available"
        // },
        // "ISO None Aluminum": {
        //     "name": "Not Available",
        //     "picture": "/images/not_available"
        // },
        // "ISO None Polycarbonate": {
        //     "name": "Not Available",
        //     "picture": "/images/not_available"
        // },
        // "ISO None Injection Mold": {
        //     "name": "Not Available",
        //     "picture": "/images/not_available"
        // },



        "Alice WKL Aluminum": {
            "name": "Prime Elise",
            "picture": "https://elgueymk.com/static/3b6de00964559b487e128c3df4333727/35eb1/55343052-d4b6-4bd5-959a-a021e783f161_prime-elise-darling-blue.jpg"
        },
        "Alice WKL Polycarbonate": {
            "name": "Alix40",
            "picture": "/images/alix40.jpeg"
        },
        // "Alice WKL Injection Mold": {
        //     "name": "Not Available",
        //     "picture": "/images/not_available"                    
        // },
        "Alice HHKB Aluminum": {
            "name": "Cisne",
            "picture": "https://i.imgur.com/56YLlpP.jpeg"
        },
        // "Alice HHKB Polycarbonate": {
        //     "name": "Not Available",
        //     "picture": "temp"
        // },
        "Alice HHKB Injection Mold": {
            "name": "temp",
            "picture": "temp"
        },
        // "Alice None Aluminum": {
        //     "name": "temp",
        //     "picture": "temp"
        // },
        // "Alice None Polycarbonate": {
        //     "name": "temp",
        //     "picture": "temp"
        // },
        // "Alice None Injection Mold": {
        //     "name": "temp",
        //     "picture": "temp"
        // },

    },
    "60%": {
        "ANSI WKL Aluminum": {
            "name": "Brutal60",
            "picture": "https://cannonkeys.com/cdn/shop/products/CK050922-248-Edit_460x.jpg?v=1687201289"
        },
        "ANSI WKL Polycarbonate": {
            "name": "Flame60",
            "picture": "https://ucarecdn.com/e4cd6283-201d-4d8a-ba86-05dbd5e3e9f0~26/nth/0/-/format/auto/-/quality/lighter/"
        },
        // "ANSI WKL Injection Mold": {
        //     "name": "",
        //     "picture": ""                    
        // },
        "ANSI HHKB Aluminum": {
            "name": "Tokyo60",
            "picture": "https://massdrop-s3.imgix.net/product-images/massdrop-x-tokyo-keyboard-tokyo60-keyboard-kit/FP/xZBMh1GQTtyCKoC3ebAE_PC.png?bg=f0f0f0"
        },
        "ANSI HHKB Polycarbonate": {
            "name": "PH60",
            "picture": "https://i.imgur.com/RZnhvun.jpg"
        },
        "ANSI HHKB Injection Mold": {
            "name": "D60LITE",
            "picture": "https://kbdfans.com/cdn/shop/products/untitled.928_460x.png?v=1667553122"                    
        },
        "ANSI None Aluminum": {
            "name": "MM-Class60",
            "picture": "https://www.mmkeyboard.com/cdn/shop/files/class60grey-wk_2048x2048.jpg?v=1684837169"
        },
        // "ANSI None Polycarbonate": {
        //     "name": "",
        //     "picture": ""
        // },
        // "ANSI None Injection Mold": {
        //     "name": "",
        //     "picture": ""
        // },


        // "ISO WKL Aluminum": {
        //     "name": "",
        //     "picture": ""
        // },
        // "ISO WKL Polycarbonate": {
        //     "name": "",
        //     "picture": ""
        // },
        // "ISO WKL Injection Mold": {
        //     "name": "",
        //     "picture": ""                    
        // },
        // "ISO HHKB Aluminum": {
        //     "name": "",
        //     "picture": ""
        // },
        // "ISO HHKB Polycarbonate": {
        //     "name": "temp",
        //     "picture": "temp"
        // },
        "ISO HHKB Injection Mold": {
            "name": "Vortex M0110",
            "picture": "https://vortexgear.store/cdn/shop/products/M0110Scene10.png?v=1672996236&width=1680"
        },
        "ISO None Aluminum": {
            "name": "SKBXX",
            "picture": "https://geekhack.org/index.php?action=dlattach;topic=92403.0;attach=181433;image"
        },
        // "ISO None Polycarbonate": {
        //     "name": "temp",
        //     "picture": "temp"
        // },
        // "ISO None Injection Mold": {
        //     "name": "temp",
        //     "picture": "temp"
        // },



        "Alice WKL Aluminum": {
            "name": "Type K",
            "picture": "https://i.imgur.com/0ZEbEZt.jpg"
        },
        "Alice WKL Polycarbonate": {
            "name": "Amano",
            "picture": "https://i.imgur.com/mqGPnHY.jpg"
        },
        // "Alice WKL Injection Mold": {
        //     "name": "",
        //     "picture": ""                    
        // },
        "Alice HHKB Aluminum": {
            "name": "BMEK",
            "picture": "https://i.imgur.com/9a9p8JQ.jpg"
        },
        // "Alice HHKB Polycarbonate": {
        //     "name": "temp",
        //     "picture": "temp"
        // },
        // "Alice HHKB Injection Mold": {
        //     "name": "temp",
        //     "picture": "temp"
        // },
        // "Alice None Aluminum": {
        //     "name": "temp",
        //     "picture": "temp"
        // },
        // "Alice None Polycarbonate": {
        //     "name": "temp",
        //     "picture": "temp"
        // },
        // "Alice None Injection Mold": {
        //     "name": "temp",
        //     "picture": "temp"
        // },
    },
    "65%": {
        "ANSI WKL Aluminum": {
            "name": "Vertigo",
            "picture": "https://i.imgur.com/1bAaxJW.jpg"
        },
        "ANSI WKL Polycarbonate": {
            "name": "Bacca60",
            "picture": "https://www.keebtalk.com/uploads/db8059/original/3X/c/9/c975a570312532e11e56ea2fea8ed656d67a74b4.jpeg"
        },
        "ANSI WKL Injection Mold": {
            "name": "Baur Lite",
            "picture": "https://www.alexotos.com/wp-content/uploads/2023/04/DSCF0532_otherback.jpg"                    
        },
        "ANSI HHKB Aluminum": {
            "name": "Angry Miao AM 65",
            "picture": "https://ae01.alicdn.com/kf/Sd356a7db82904e4b951af829841e6615H/Angry-Miao-Am-65-Less-Mechanical-Keyboard-HHKB-Custom-Hotswap-Pc-Gaming-Wireless-Bluetooth-RGB-Backlit.jpg"
        },
        "ANSI HHKB Polycarbonate": {
            "name": "",
            "picture": ""
        },
        // "ANSI HHKB Injection Mold": {
        //     "name": "",
        //     "picture": ""
        // },
        "ANSI None Aluminum": {
            "name": "Venn 65%",
            "picture": "https://typeplus.net/cdn/shop/products/Silver_900x.jpg?v=1669190355"
        },
        "ANSI None Polycarbonate": {
            "name": "E6.5",
            "picture": "https://i.imgur.com/ljk37kT.jpg"
        },
        "ANSI None Injection Mold": {
            "name": "NK65",
            "picture": "https://novelkeys.com/cdn/shop/products/Mictlan_NK65_16x9-2_1512x.jpg?v=1652967829"
        },


        // "ISO WKL Aluminum": {
        //     "name": "",
        //     "picture": ""
        // },
        // "ISO WKL Polycarbonate": {
        //     "name": "",
        //     "picture": ""
        // },
        // "ISO WKL Injection Mold": {
        //     "name": "",
        //     "picture": ""                    
        // },
        // "ISO HHKB Aluminum": {
        //     "name": "temp",
        //     "picture": "temp"
        // },
        // "ISO HHKB Polycarbonate": {
        //     "name": "temp",
        //     "picture": "temp"
        // },
        // "ISO HHKB Injection Mold": {
        //     "name": "temp",
        //     "picture": "temp"
        // },
        // "ISO None Aluminum": {
        //     "name": "Keychron K6",
        //     "picture": "https://mechanicalkeyboards.com/shop/images/products/large_KeychronK6-W-UKEZ6_main.jpg"
        // },
        // "ISO None Polycarbonate": {
        //     "name": "temp",
        //     "picture": "temp"
        // },
        // "ISO None Injection Mold": {
        //     "name": "temp",
        //     "picture": "temp"
        // },



        "Alice WKL Aluminum": {
            "name": "Owlab Spring",
            "picture": "https://i.redd.it/cmqeo4v4odf81.jpg"
        },
        // "Alice WKL Polycarbonate": {
        //     "name": "",
        //     "picture": ""
        // },
        // "Alice WKL Injection Mold": {
        //     "name": "",
        //     "picture": ""                    
        // },
        // "Alice HHKB Aluminum": {
        //     "name": "temp",
        //     "picture": "temp"
        // },
        // "Alice HHKB Polycarbonate": {
        //     "name": "temp",
        //     "picture": "temp"
        // },
        // "Alice HHKB Injection Mold": {
        //     "name": "temp",
        //     "picture": "temp"
        // },
        // "Alice None Aluminum": {
        //     "name": "temp",
        //     "picture": "temp"
        // },
        // "Alice None Polycarbonate": {
        //     "name": "temp",
        //     "picture": "temp"
        // },
        // "Alice None Injection Mold": {
        //     "name": "temp",
        //     "picture": "temp"
        // },
    },
    "75%": {
        "ANSI WKL Aluminum": {
            "name": "Dawn",
            "picture": "https://i.redd.it/45e75gr3q1l31.jpg"
        },
        "ANSI WKL Polycarbonate": {
            "name": "Singa",
            "picture": "https://i.redd.it/tnsjyrsub8g21.jpg"
        },
        // "ANSI WKL Injection Mold": {
        //     "name": "",
        //     "picture": ""                    
        // },
        // "ANSI HHKB Aluminum": {
        //     "name": "",
        //     "picture": ""
        // },
        // "ANSI HHKB Polycarbonate": {
        //     "name": "",
        //     "picture": ""
        // },
        // "ANSI HHKB Injection Mold": {
        //     "name": "",
        //     "picture": ""
        // },
        "ANSI None Aluminum": {
            "name": "GOK 7V",
            "picture": "https://i.imgur.com/stEoAJf.png"
        },
        "ANSI None Polycarbonate": {
            "name": "KL-90",
            "picture": "/images/kl-90.jpg"
        },
        // "ANSI None Injection Mold": {
        //     "name": "",
        //     "picture": ""
        // },


        // "ISO WKL Aluminum": {
        //     "name": "",
        //     "picture": ""
        // },
        // "ISO WKL Polycarbonate": {
        //     "name": "",
        //     "picture": ""
        // },
        // "ISO WKL Injection Mold": {
        //     "name": "",
        //     "picture": ""                    
        // },
        // "ISO HHKB Aluminum": {
        //     "name": "temp",
        //     "picture": "temp"
        // },
        // "ISO HHKB Polycarbonate": {
        //     "name": "temp",
        //     "picture": "temp"
        // },
        // "ISO HHKB Injection Mold": {
        //     "name": "temp",
        //     "picture": "temp"
        // },
        // "ISO None Aluminum": {
        //     "name": "temp",
        //     "picture": "temp"
        // },
        // "ISO None Polycarbonate": {
        //     "name": "temp",
        //     "picture": "temp"
        // },
        // "ISO None Injection Mold": {
        //     "name": "temp",
        //     "picture": "temp"
        // },



        "Alice WKL Aluminum": {
            "name": "Calice",
            "picture": "https://i.imgur.com/saX6bcq.jpg"
        },
        // "Alice WKL Polycarbonate": {
        //     "name": "",
        //     "picture": ""
        // },
        // "Alice WKL Injection Mold": {
        //     "name": "",
        //     "picture": ""                    
        // },
        // "Alice HHKB Aluminum": {
        //     "name": "temp",
        //     "picture": "temp"
        // },
        // "Alice HHKB Polycarbonate": {
        //     "name": "temp",
        //     "picture": "temp"
        // },
        // "Alice HHKB Injection Mold": {
        //     "name": "temp",
        //     "picture": "temp"
        // },
        // "Alice None Aluminum": {
        //     "name": "temp",
        //     "picture": "temp"
        // },
        // "Alice None Polycarbonate": {
        //     "name": "temp",
        //     "picture": "temp"
        // },
        // "Alice None Injection Mold": {
        //     "name": "temp",
        //     "picture": "temp"
        // },
    },
    "TKL": {
        "ANSI WKL Aluminum": {
            "name": "MATRIX 8XV 3.0",
            "picture": "https://novelkeys.com/cdn/shop/products/Keycap_Tiles_v1.0.1_template_1_68a8d22b-1278-419b-9a4e-1d28c8ae0cde_1512x.jpg?v=1678799328"
        },
        // "ANSI WKL Polycarbonate": {
        //     "name": "",
        //     "picture": ""
        // },
        // "ANSI WKL Injection Mold": {
        //     "name": "",
        //     "picture": ""                    
        // },
        // "ANSI HHKB Aluminum": {
        //     "name": "",
        //     "picture": ""
        // },
        // "ANSI HHKB Polycarbonate": {
        //     "name": "",
        //     "picture": ""
        // },
        // "ANSI HHKB Injection Mold": {
        //     "name": "",
        //     "picture": ""
        // },
        // "ANSI None Aluminum": {
        //     "name": "",
        //     "picture": ""
        // },
        // "ANSI None Polycarbonate": {
        //     "name": "",
        //     "picture": ""
        // },
        "ANSI None Injection Mold": {
            "name": "Monokei Standard - Yuji Edition",
            "picture": "https://novelkeys.com/cdn/shop/files/jjk-product-listing-yuji-01_7d6335ba-ca12-44f8-ba7a-ca6c87f285a7_1512x.jpg?v=1690391153"
        },


        "ISO WKL Aluminum": {
            "name": "MATRIX 8XV 3.0",
            "picture": "https://novelkeys.com/cdn/shop/products/Keycap_Tiles_v1.0.1_template_1_68a8d22b-1278-419b-9a4e-1d28c8ae0cde_1512x.jpg?v=1678799328"
        },
        // "ISO WKL Polycarbonate": {
        //     "name": "",
        //     "picture": ""
        // },
        // "ISO WKL Injection Mold": {
        //     "name": "",
        //     "picture": ""                    
        // },
        // "ISO HHKB Aluminum": {
        //     "name": "temp",
        //     "picture": "temp"
        // },
        // "ISO HHKB Polycarbonate": {
        //     "name": "temp",
        //     "picture": "temp"
        // },
        // "ISO HHKB Injection Mold": {
        //     "name": "temp",
        //     "picture": "temp"
        // },
        // "ISO None Aluminum": {
        //     "name": "temp",
        //     "picture": "temp"
        // },
        // "ISO None Polycarbonate": {
        //     "name": "temp",
        //     "picture": "temp"
        // },
        // "ISO None Injection Mold": {
        //     "name": "temp",
        //     "picture": "temp"
        // },



        // "Alice WKL Aluminum": {
        //     "name": "",
        //     "picture": ""
        // },
        // "Alice WKL Polycarbonate": {
        //     "name": "",
        //     "picture": ""
        // },
        // "Alice WKL Injection Mold": {
        //     "name": "",
        //     "picture": ""                    
        // },
        // "Alice HHKB Aluminum": {
        //     "name": "temp",
        //     "picture": "temp"
        // },
        // "Alice HHKB Polycarbonate": {
        //     "name": "temp",
        //     "picture": "temp"
        // },
        // "Alice HHKB Injection Mold": {
        //     "name": "temp",
        //     "picture": "temp"
        // },
        // "Alice None Aluminum": {
        //     "name": "temp",
        //     "picture": "temp"
        // },
        // "Alice None Polycarbonate": {
        //     "name": "temp",
        //     "picture": "temp"
        // },
        // "Alice None Injection Mold": {
        //     "name": "temp",
        //     "picture": "temp"
        // },
    }
}

button.addEventListener("click", function() {
    var active_cards = document.querySelectorAll(".active-card");

    let size = active_cards[0].querySelector("h3").innerHTML;
    let layout = active_cards[1].querySelector("h3").innerHTML;
    let style = active_cards[2].querySelector("h3").innerHTML;
    let material = active_cards[3].querySelector("h3").innerHTML;
    // let mounting_system = active_cards[4].querySelector("h3").innerHTML;

    console.log(size);
    console.log(layout);
    console.log(style);
    console.log(material);
    // console.log(mounting_system);

    let temp = keyboard_dict[size];
    let key = layout + " " + style + " " + material;

    let results = document.querySelector("#result-compiled");
    let h3 = results.querySelector("h3");
    let img = results.querySelector("img");

    if (key in temp) {
        h3.innerText = temp[key]["name"];
        img.src = temp[key]["picture"];
    }
    else {
        h3.innerText = "Not Available"
        img.src = "/images/not-available";
    }
});
