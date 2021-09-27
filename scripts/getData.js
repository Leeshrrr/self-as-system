//  var d = $.ajax({
//      url: "../JSON-file/items.json", //json文件位置，文件名
//      type: "GET", //请求方式为get
//      dataType: "json", //返回数据格式为json
//      async: false,
//      success: function(data) { //请求成功完成后要执行的方法 
//      }
//  });
//  var data2 = d.responseJSON;



//  console.log(data2);
//  console.log(data2[23]);
//  for (let i = 0; i < data2.length; i++) {
//      console.log(data2[i].NUMBER);
//  }

var data2 = [{
        "NUMBER": 1,
        "SUBTOTAL": 6.27,
        "DATE": "8/23",
        "TIME": "15:35",
        "COMPANY": "TRADER JOES",
        "PAYMENT": "CREDIT CARD",
        "BAG": 0,
        "THING": [{ "ID": 0, "TYPE": "FOOD", "SUBTYPE": "DRINK", "NAME": "MILK QUART WHOLE", "PRICE": 1.99, "AMOUNT": 1 },
            { "ID": 0, "TYPE": "FOOD", "SUBTYPE": "VEGETABLE", "NAME": "CUCUMBERS PERSIAN 14OZ", "PRICE": 1.99, "AMOUNT": 1 },
            { "ID": 0, "TYPE": "FOOD", "SUBTYPE": "VEGETABLE", "NAME": "TOMATOES ON THE VINE ORG", "PRICE": 2.99, "AMOUNT": 1 }
        ]
    },
    {
        "NUMBER": 2,
        "SUBTOTAL": 28.04,
        "DATE": "8/23",
        "TIME": "15:12",
        "COMPANY": "TARGET",
        "PAYMENT": "CREDIT CARD",
        "BAG": 1,
        "THING": [{ "ID": 284101345, "TYPE": "FOOD", "SUBTYPE": "DESSERT", "NAME": "YOCRUNCH", "PRICE": 2.69, "AMOUNT": 1 },
            { "ID": 271650110, "TYPE": "FOOD", "SUBTYPE": "DRINK", "NAME": "STARBUCKS", "PRICE": 3.49, "AMOUNT": 1 },
            { "ID": 63002795, "TYPE": "DAILY", "SUBTYPE": "SHAMPOO", "NAME": "SHAMPOO CONO", "PRICE": 6.49, "AMOUNT": 1 },
            { "ID": 63022843, "TYPE": "DAILY", "SUBTYPE": "TISSUE", "NAME": "HEAD N SHLOR", "PRICE": 6.59, "AMOUNT": 1 },
            { "ID": 253070076, "TYPE": "DAILY", "SUBTYPE": "CLEANSER", "NAME": "UP FACIAL REGULAR", "PRICE": 4.99, "AMOUNT": 1 },
            { "ID": 200052242, "TYPE": "DAILY", "SUBTYPE": "TABLE WARE", "NAME": "DINING BOWL", "PRICE": 0.50, "AMOUNT": 1 },
            { "ID": 200050746, "TYPE": "DAILY", "SUBTYPE": "HOME", "NAME": "MBD", "PRICE": 2.00, "AMOUNT": 1 },
            { "ID": 4100019, "TYPE": "BAG", "SUBTYPE": "BAG", "NAME": "TARGET BAG", "PRICE": 0.05, "AMOUNT": 1 },
            { "ID": 45497387449486, "TYPE": "DAILY", "SUBTYPE": "CONTAINER", "NAME": "SOFT POLYETHYLENE", "PRICE": 11.90, "AMOUNT": 1 }
        ]
    },
    {
        "NUMBER": 3,
        "SUBTOTAL": 11.90,
        "DATE": "8/23",
        "TIME": "13:41",
        "COMPANY": "MUJI",
        "PAYMENT": "CASH",
        "BAG": 0,
        "THING": [{ "ID": 42563604325, "TYPE": "DAILY", "SUBTYPE": "HAND SOUP", "NAME": "FIELD DAY HAND SOUP LIQ LAVENDER", "PRICE": 5.99, "AMOUNT": 1 }]
    },
    {
        "NUMBER": 4,
        "SUBTOTAL": 26.72,
        "DATE": "8/24",
        "TIME": "12:10",
        "COMPANY": "WESTSIDE MARKET",
        "PAYMENT": "CREDIT CARD",
        "BAG": 1,
        "THING": [{ "ID": 749174097552, "TYPE": "DAILY", "SUBTYPE": "LAUNDRY LIQUID", "NAME": "LAUNDRY LIQUID LAVENDER", "PRICE": 8.99, "AMOUNT": 1 },
            { "ID": 76013, "TYPE": "FOOD", "SUBTYPE": "MEAT", "NAME": "HALF ROTISSERIE CHICKEN", "PRICE": 5.99, "AMOUNT": 1 },
            { "ID": 6565, "TYPE": "BAG", "SUBTYPE": "BAG", "NAME": "PAPER BAGS", "PRICE": 0.05, "AMOUNT": 2 },
            { "ID": 28400200684, "TYPE": "FOOD", "SUBTYPE": "SNACK", "NAME": "HONEY BARBECUE CHIPS", "PRICE": 3.79, "AMOUNT": 1 }
        ]
    },
    {
        "NUMBER": 5,
        "SUBTOTAL": 32.83,
        "DATE": "8/26",
        "TIME": "18:47",
        "COMPANY": "WESTSIDE MARKET",
        "PAYMENT": "CREDIT CARD",
        "BAG": 1,
        "THING": [{ "ID": 95222144649, "TYPE": "FOOD", "SUBTYPE": "MEAT", "NAME": "NATURE'S YOKE JUMBO EGGS", "PRICE": 4.79, "AMOUNT": 1 },
            { "ID": 813868020352, "TYPE": "FOOD", "SUBTYPE": "DRINK", "NAME": "FARMLAND AND WHOLE MILK", "PRICE": 1.99, "AMOUNT": 1 },
            { "ID": 10085, "TYPE": "FOOD", "SUBTYPE": "MEAL", "NAME": "DILL SHRIMP APP 12OZ", "PRICE": 8.99, "AMOUNT": 1 },
            { "ID": 6565, "TYPE": "BAG", "SUBTYPE": "BAG", "NAME": "PAPER BAGS", "PRICE": 0.05, "AMOUNT": 2 },
            { "ID": 129, "TYPE": "FOOD", "SUBTYPE": "FRUIT", "NAME": "FRESH WATERMELON", "PRICE": 3.99, "AMOUNT": 1 },
            { "ID": 15, "TYPE": "FOOD", "SUBTYPE": "VEGETABLE", "NAME": "BABY SPINACH", "PRICE": 2.99, "AMOUNT": 1 },
            { "ID": 17, "TYPE": "FOOD", "SUBTYPE": "VEGETABLE", "NAME": "MESCULIN GREENS", "PRICE": 2.99, "AMOUNT": 1 },
            { "ID": 33383012292, "TYPE": "FOOD", "SUBTYPE": "FRUIT", "NAME": "ORGANIC FUJI APPLES", "PRICE": 6.99, "AMOUNT": 1 }
        ]
    },
    { "NUMBER": 6, "SUBTOTAL": 8.99, "DATE": "8/27", "TIME": "17:30", "COMPANY": "WESTSIDE MARKET", "PAYMENT": "CREDIT CARD", "BAG": 0, "THING": [{ "ID": 10085, "TYPE": "FOOD", "SUBTYPE": "MEAL", "NAME": "DILL SHRIMP APP 12OZ", "PRICE": 8.99, "AMOUNT": 1 }] },
    {
        "NUMBER": 7,
        "SUBTOTAL": 15.71,
        "DATE": "8/27",
        "TIME": "16:49",
        "COMPANY": "TARGET",
        "PAYMENT": "CREDIT CARD",
        "BAG": 0,
        "THING": [{ "ID": 431183826, "TYPE": "CLOTHE", "SUBTYPE": "CLOTHE", "NAME": "ORIGINAL USE", "PRICE": 10.00, "AMOUNT": 1 },
            { "ID": 271650110, "TYPE": "FOOD", "SUBTYPE": "DRINK", "NAME": "STARBUCKS", "PRICE": 3.49, "AMOUNT": 1 },
            { "ID": 271900216, "TYPE": "FOOD", "SUBTYPE": "DRINK", "NAME": "COKE", "PRICE": 1.99, "AMOUNT": 1 }
        ]
    },
    { "NUMBER": 8, "SUBTOTAL": 8.99, "DATE": "8/28", "TIME": "15:53", "COMPANY": "WESTSIDE MARKET", "PAYMENT": "CREDIT CARD", "BAG": 0, "THING": [{ "ID": 10085, "TYPE": "FOOD", "SUBTYPE": "MEAL", "NAME": "DILL SHRIMP APP 12OZ", "PRICE": 8.99, "AMOUNT": 1 }] },
    {
        "NUMBER": 9,
        "SUBTOTAL": 36.71,
        "DATE": "8/29",
        "TIME": "19:30",
        "COMPANY": "HMART",
        "PAYMENT": "CREDIT CARD",
        "BAG": 1,
        "THING": [{ "ID": 1124, "TYPE": "FOOD", "SUBTYPE": "MEAT", "NAME": "CHICKEN 1/4 LEGS", "PRICE": 2.62, "AMOUNT": 1 },
            { "ID": 8373280010002, "TYPE": "FOOD", "SUBTYPE": "VEGETABLE", "NAME": "HAKUBAKU ORGANIC UDON 9.5OZ", "PRICE": 3.99, "AMOUNT": 1 },
            { "ID": 3096, "TYPE": "FOOD", "SUBTYPE": "VEGETABLE", "NAME": "CABBAGE", "PRICE": 2.99, "AMOUNT": 1 },
            { "ID": 11152145952, "TYPE": "FOOD", "SUBTYPE": "VEGETABLE", "NAME": "SPICY SRIRACHA PEAS 9.9OZ", "PRICE": 5.99, "AMOUNT": 1 },
            { "ID": 5507, "TYPE": "FOOD", "SUBTYPE": "MEAT", "NAME": "H MART PEELED SHRIMP", "PRICE": 4.05, "AMOUNT": 1 },
            { "ID": 4907174102546, "TYPE": "FOOD", "SUBTYPE": "DESSERT", "NAME": "DOMREMY MILLECREPE 145G", "PRICE": 6.99, "AMOUNT": 1 },
            { "ID": 751666103054, "TYPE": "FOOD", "SUBTYPE": "VEGETABLE", "NAME": "N/S GLORY INGREDIENT TOMATOES 10.5OZ", "PRICE": 3.99, "AMOUNT": 1 },
            { "ID": 898249002813, "TYPE": "FOOD", "SUBTYPE": "FRUIT", "NAME": "BIOLOGIQUE ORGANIC KIWI 16OZ", "PRICE": 5.99, "AMOUNT": 1 },
            { "ID": 10148409, "TYPE": "BAG", "SUBTYPE": "BAG", "NAME": "SHOPPING BAG", "PRICE": 0.05, "AMOUNT": 2 }
        ]
    },
    {
        "NUMBER": 10,
        "SUBTOTAL": 12.98,
        "DATE": "8/30",
        "TIME": "17:25",
        "COMPANY": "WESTSIDE MARKET",
        "PAYMENT": "CREDIT CARD",
        "BAG": 0,
        "THING": [{ "ID": 30018, "TYPE": "FOOD", "SUBTYPE": "DESSERT", "NAME": "HOMEMADE PLAIN CHEESECAKEMADE B", "PRICE": 3.99, "AMOUNT": 1 },
            { "ID": 10069, "TYPE": "FOOD", "SUBTYPE": "DESSERT", "NAME": "HOMEMADE SHRIMP APP 11OZ", "PRICE": 8.99, "AMOUNT": 1 }
        ]
    },
    {
        "NUMBER": 11,
        "SUBTOTAL": 4.78,
        "DATE": "8/31",
        "TIME": "21:53",
        "COMPANY": "CVS PHARMACY",
        "PAYMENT": "CREDIT CARD",
        "BAG": 0,
        "THING": [{ "ID": 0, "TYPE": "FOOD", "SUBTYPE": "SNACK", "NAME": "COMBOS PIZZA PRTZL", "PRICE": 3.19, "AMOUNT": 1 },
            { "ID": 0, "TYPE": "FOOD", "SUBTYPE": "DESSERT", "NAME": "DAISY CHOC OUND", "PRICE": 1.59, "AMOUNT": 1 }
        ]
    },
    {
        "NUMBER": 12,
        "SUBTOTAL": 40.23,
        "DATE": "9/3",
        "TIME": "18:29",
        "COMPANY": "WESTSIDE MARKET",
        "PAYMENT": "CREDIT CARD",
        "BAG": 0,
        "THING": [{ "ID": 891071001474, "TYPE": "FOOD", "SUBTYPE": "DESSERT", "NAME": "FRENCH SLICED BRIOCHE", "PRICE": 7.99, "AMOUNT": 1 },
            { "ID": 10069, "TYPE": "FOOD", "SUBTYPE": "MEAL", "NAME": "HOMEMADE SHRIMP APP 11OZ", "PRICE": 8.99, "AMOUNT": 1 },
            { "ID": 50216, "TYPE": "FOOD", "SUBTYPE": "MEAT", "NAME": "CHICKEN STIR FRY", "PRICE": 3.29, "AMOUNT": 1 },
            { "ID": 272, "TYPE": "FOOD", "SUBTYPE": "VEGETABLE", "NAME": "ORGANIC YAMS", "PRICE": 3.99, "AMOUNT": 1 },
            { "ID": 856735004000, "TYPE": "FOOD", "SUBTYPE": "FRUIT", "NAME": "ORGANIC GRAPE TOTOES", "PRICE": 5.99, "AMOUNT": 1 },
            { "ID": 314, "TYPE": "FOOD", "SUBTYPE": "FRUIT", "NAME": "FRESH PERSIAN CUCUMBERS", "PRICE": 4.99, "AMOUNT": 1 },
            { "ID": 895203001011, "TYPE": "FOOD", "SUBTYPE": "VEGETABLE", "NAME": "BABY SPINACH", "PRICE": 4.99, "AMOUNT": 1 }
        ]
    },
    {
        "NUMBER": 13,
        "SUBTOTAL": 17.45,
        "DATE": "9/4",
        "TIME": "20:27",
        "COMPANY": "WESTSIDE MARKET",
        "PAYMENT": "CREDIT CARD",
        "BAG": 1,
        "THING": [{ "ID": 12000813313, "TYPE": "FOOD", "SUBTYPE": "DRINK", "NAME": "FRAP VAN", "PRICE": 3.50, "AMOUNT": 2 },
            { "ID": 12000181467, "TYPE": "FOOD", "SUBTYPE": "SNACK", "NAME": "FRAOOUCCINO WHITE CHOCOLATE", "PRICE": 3.50, "AMOUNT": 2 },
            { "ID": 6565, "TYPE": "FOOD", "SUBTYPE": "BAG", "NAME": "PAPER BAGS", "PRICE": 0.05, "AMOUNT": 1 },
            { "ID": 129, "TYPE": "FOOD", "SUBTYPE": "FRUIT", "NAME": "FRESH WATERMELON", "PRICE": 3.99, "AMOUNT": 1 },
            { "ID": 232, "TYPE": "FOOD", "SUBTYPE": "FRUIT", "NAME": "PRODUCE BACH", "PRICE": 5.79, "AMOUNT": 1 }
        ]
    },
    {
        "NUMBER": 14,
        "SUBTOTAL": 28.24,
        "DATE": "9/5",
        "TIME": "14:41",
        "COMPANY": "TRADER JOES",
        "PAYMENT": "CREDIT CARD",
        "BAG": 0,
        "THING": [{ "ID": 0, "TYPE": "FOOD", "SUBTYPE": "DRINK", "NAME": "MILK QUART WHOLE", "PRICE": 1.29, "AMOUNT": 1 },
            { "ID": 0, "TYPE": "FOOD", "SUBTYPE": "VEGETABLE", "NAME": "BEANS GRN HARICOTS VERTS", "PRICE": 2.69, "AMOUNT": 1 },
            { "ID": 0, "TYPE": "FOOD", "SUBTYPE": "FRUIT", "NAME": "STRAWBERRIES 1LB", "PRICE": 3.99, "AMOUNT": 1 },
            { "ID": 0, "TYPE": "FOOD", "SUBTYPE": "VEGETABLE", "NAME": "PEPPERS SHISHITO 6OZ", "PRICE": 2.29, "AMOUNT": 1 },
            { "ID": 0, "TYPE": "FOOD", "SUBTYPE": "MEAT", "NAME": "BBQ CUT SALMON", "PRICE": 9.39, "AMOUNT": 1 },
            { "ID": 0, "TYPE": "FOOD", "SUBTYPE": "DESSERT", "NAME": "MOCHI GREAN TEA", "PRICE": 4.49, "AMOUNT": 1 },
            { "ID": 0, "TYPE": "FOOD", "SUBTYPE": "FRUIT", "NAME": "BANANA", "PRICE": 0.38, "AMOUNT": 1 },
            { "ID": 0, "TYPE": "FOOD", "SUBTYPE": "FRUIT", "NAME": "LEMON", "PRICE": 0.39, "AMOUNT": 2 },
            { "ID": 0, "TYPE": "FOOD", "SUBTYPE": "FRUIT", "NAME": "KIWI", "PRICE": 0.49, "AMOUNT": 6 }
        ]
    },
    {
        "NUMBER": 15,
        "SUBTOTAL": 19.20,
        "DATE": "9/5",
        "TIME": "14:13",
        "COMPANY": "CVS PHARMACY",
        "PAYMENT": "CREDIT CARD",
        "BAG": 0,
        "THING": [{ "ID": 0, "TYPE": "DAILY", "SUBTYPE": "TOOTHPASTE", "NAME": "CRST KIDS SPRK TP", "PRICE": 4.39, "AMOUNT": 1 },
            { "ID": 0, "TYPE": "DAILY", "SUBTYPE": "FACIAL CLEANSER", "NAME": "CVS SK BR DLY CLN", "PRICE": 9.49, "AMOUNT": 1 },
            { "ID": 0, "TYPE": "FOOD", "SUBTYPE": "MEAL", "NAME": "HOTPKT BCN EGG CH", "PRICE": 4.09, "AMOUNT": 1 }
        ]
    },
    {
        "NUMBER": 16,
        "SUBTOTAL": 53.21,
        "DATE": "9/6",
        "TIME": "13:14",
        "COMPANY": "BLICK ART MATERIALS STORES",
        "PAYMENT": "CASH",
        "BAG": 0,
        "THING": [{ "ID": 214161000, "TYPE": "STUDY", "SUBTYPE": "PAINTING TOOLS", "NAME": "MAPED PENCIL SHARPNR SNGL HOLE", "PRICE": "", "AMOUNT": 1 },
            { "ID": 215531001, "TYPE": "STUDY", "SUBTYPE": "PAINTING TOOLS", "NAME": "DUST FREE VINYL ERASER EA", "PRICE": "", "AMOUNT": 1 },
            { "ID": 30681006, "TYPE": "STUDY", "SUBTYPE": "PAINTING TOOLS", "NAME": "PLASTIC PALETTES HVDTY 6 WELL", "PRICE": "", "AMOUNT": 1 },
            { "ID": 556180060, "TYPE": "STUDY", "SUBTYPE": "PAINTING TOOLS", "NAME": "C-THRU RULER 8TH GRPH 12IN", "PRICE": "", "AMOUNT": 1 },
            { "ID": 201030169, "TYPE": "STUDY", "SUBTYPE": "PAINTING TOOLS", "NAME": "SET16 REG CRAYON TUCK BOX", "PRICE": "", "AMOUNT": 1 },
            { "ID": 562071006, "TYPE": "STUDY", "SUBTYPE": "PAINTING TOOLS", "NAME": "HELIX SWING ARM PROTRACTOR 6IN", "PRICE": "", "AMOUNT": 1 },
            { "ID": 3501019, "TYPE": "STUDY", "SUBTYPE": "PAINTING TOOLS", "NAME": "PRANG WASHABLE WC SET 16 OVAL", "PRICE": "", "AMOUNT": 1 },
            { "ID": 657781003, "TYPE": "STUDY", "SUBTYPE": "PEN", "NAME": "DBL ENDED PENS 10CT PENS/PNCLS", "PRICE": "", "AMOUNT": 1 },
            { "ID": 224290129, "TYPE": "STUDY", "SUBTYPE": "PEN", "NAME": "BLICK�CLRD PENCLS SCHLSTC 12PK", "PRICE": "", "AMOUNT": 1 },
            { "ID": 222202021, "TYPE": "STUDY", "SUBTYPE": "PEN", "NAME": "BLICK�GRAPHITE PENCIL 2B", "PRICE": "", "AMOUNT": 1 },
            { "ID": 207592020, "TYPE": "STUDY", "SUBTYPE": "PEN", "NAME": "PIT ARTS PEN BLK SUPR FINE NIB", "PRICE": "", "AMOUNT": 1 },
            { "ID": 222202061, "TYPE": "STUDY", "SUBTYPE": "PEN", "NAME": "BLICK�GRAPHITE PENCIL 6B", "PRICE": "", "AMOUNT": 1 },
            { "ID": 133231037, "TYPE": "STUDY", "SUBTYPE": "PAPER", "NAME": "SEQUENTL300 BRST 11X17 SMTH PD", "PRICE": "", "AMOUNT": 1 }
        ]
    },
    {
        "NUMBER": 17,
        "SUBTOTAL": 12.98,
        "DATE": "9/7",
        "TIME": "22:23",
        "COMPANY": "WESTSIDE MARKET",
        "PAYMENT": "CREDIT CARD",
        "BAG": 0,
        "THING": [{ "ID": 30097, "TYPE": "FOOD", "SUBTYPE": "BREAD", "NAME": "FINGER ROLLS MADE FROM WESTSIDE", "PRICE": 3.99, "AMOUNT": 1 },
            { "ID": 10069, "TYPE": "FOOD", "SUBTYPE": "MEAL", "NAME": "HOMEMADE SHRIMP APP 11OZ", "PRICE": 8.99, "AMOUNT": 1 }
        ]
    },
    {
        "NUMBER": 18,
        "SUBTOTAL": 6.11,
        "DATE": "9/7",
        "TIME": "21:54",
        "COMPANY": "CVS PHARMACY",
        "PAYMENT": "CREDIT CARD",
        "BAG": 0,
        "THING": [{ "ID": 0, "TYPE": "FOOD", "SUBTYPE": "SNACK", "NAME": "CKIE&CRM KING", "PRICE": 2.69, "AMOUNT": 1 },
            { "ID": 0, "TYPE": "FOOD", "SUBTYPE": "DESSERT", "NAME": "DAISY BROWNIE", "PRICE": 1.59, "AMOUNT": 1 },
            { "ID": 0, "TYPE": "FOOD", "SUBTYPE": "DESSERT", "NAME": "DAISY CHOC OUND", "PRICE": 1.59, "AMOUNT": 1 }
        ]
    },
    {
        "NUMBER": 19,
        "SUBTOTAL": 28.38,
        "DATE": "9/10",
        "TIME": "17:32",
        "COMPANY": "WESTSIDE MARKET",
        "PAYMENT": "CREDIT CARD",
        "BAG": 1,
        "THING": [{ "ID": 10069, "TYPE": "FOOD", "SUBTYPE": "MEAL", "NAME": "HOMEMADE SHRIMP APP 11OZ", "PRICE": 8.99, "AMOUNT": 1 },
            { "ID": 6565, "TYPE": "BAG", "SUBTYPE": "BAG", "NAME": "PAPER BAGS", "PRICE": 0.05, "AMOUNT": 1 },
            { "ID": 856735004000, "TYPE": "FOOD", "SUBTYPE": "FRUIT", "NAME": "ORGANIC GRAPE TOTOES", "PRICE": 5.99, "AMOUNT": 1 },
            { "ID": 202, "TYPE": "FOOD", "SUBTYPE": "VEGETABLE", "NAME": "PRODUCE BACH", "PRICE": 5.49, "AMOUNT": 1 },
            { "ID": 4547, "TYPE": "FOOD", "SUBTYPE": "VEGETABLE", "NAME": "BROCCOLI RABE", "PRICE": 4.99, "AMOUNT": 1 },
            { "ID": 3083, "TYPE": "FOOD", "SUBTYPE": "VEGETABLE", "NAME": "BRUSSELS SOROUTS", "PRICE": 2.87, "AMOUNT": 1 }
        ]
    },
    {
        "NUMBER": 20,
        "SUBTOTAL": 15.48,
        "DATE": "9/10",
        "TIME": "16:37",
        "COMPANY": "NEW SCHOOL DINING",
        "PAYMENT": "STUDENT CARD",
        "BAG": 0,
        "THING": [{ "ID": 0, "TYPE": "FOOD", "SUBTYPE": "DESSERT", "NAME": "COCONUT", "PRICE": 4.49, "AMOUNT": 1 },
            { "ID": 0, "TYPE": "FOOD", "SUBTYPE": "MEAL", "NAME": "J&O CHEF SALAD", "PRICE": 10.99, "AMOUNT": 1 }
        ]
    },
    {
        "NUMBER": 21,
        "SUBTOTAL": 20.97,
        "DATE": "9/12",
        "TIME": "18:57",
        "COMPANY": "WESTSIDE MARKET",
        "PAYMENT": "CREDIT CARD",
        "BAG": 0,
        "THING": [{ "ID": 10085, "TYPE": "FOOD", "SUBTYPE": "MEAL", "NAME": "DILL SHRIMP APP 12OZ", "PRICE": 8.99, "AMOUNT": 1 },
            { "ID": 11008, "TYPE": "FOOD", "SUBTYPE": "MEAL", "NAME": "NOODLES&VEGETABLES W.S", "PRICE": 8.99, "AMOUNT": 1 },
            { "ID": 72945601369, "TYPE": "FOOD", "SUBTYPE": "SNACK", "NAME": "SARA HONEY WHEAT ", "PRICE": 2.99, "AMOUNT": 1 }
        ]
    },
    {
        "NUMBER": 22,
        "SUBTOTAL": 19.45,
        "DATE": "9/14",
        "TIME": "11:51",
        "COMPANY": "WESTSIDE MARKET",
        "PAYMENT": "CREDIT CARD",
        "BAG": 0,
        "THING": [{ "ID": 748924519016, "TYPE": "FOOD", "SUBTYPE": "DESSERT", "NAME": "ORIGINAL NY CHEESECAKE", "PRICE": 3.99, "AMOUNT": 1 },
            { "ID": 10069, "TYPE": "FOOD", "SUBTYPE": "MEAL", "NAME": "HOMEMADE SHRIMP APP 11OZ", "PRICE": 8.99, "AMOUNT": 1 },
            { "ID": 232, "TYPE": "FOOD", "SUBTYPE": "FRUIT", "NAME": "PRODUCE BACH", "PRICE": 6.47, "AMOUNT": 1 }
        ]
    },
    { "NUMBER": 23, "SUBTOTAL": 7.35, "DATE": "9/14", "TIME": "19:15", "COMPANY": "VIVI BUBBLE TEA", "PAYMENT": "CREDIT CARD", "BAG": 0, "THING": [{ "ID": 0, "TYPE": "FOOD", "SUBTYPE": "DRINK", "NAME": "JASMINE FRESH MILK LARGE", "PRICE": 7.35, "AMOUNT": 1 }] },
    {
        "NUMBER": 24,
        "SUBTOTAL": 37.79,
        "DATE": "9/15",
        "TIME": "18:25",
        "COMPANY": "DAINOBU",
        "PAYMENT": "CREDIT CARD",
        "BAG": 1,
        "THING": [{ "ID": 2800000009038, "TYPE": "BAG", "SUBTYPE": "BAG", "NAME": "PAPER BAG FEE", "PRICE": 0.05, "AMOUNT": 1 },
            { "ID": 4589850825781, "TYPE": "FOOD", "SUBTYPE": "DRINK", "NAME": "POKKA SAPPORO ALMOND BREEZE CLEAR T", "PRICE": 3.99, "AMOUNT": 1 },
            { "ID": 835143013705, "TYPE": "FOOD", "SUBTYPE": "DRINK", "NAME": "MATCHA MILK TEA 500ML TEAS T", "PRICE": 2.09, "AMOUNT": 1 },
            { "ID": 2800000008918, "TYPE": "FOOD", "SUBTYPE": 0, "NAME": "SHIRO-DASHI TATSUTAAGE", "PRICE": 5.99, "AMOUNT": 1 },
            { "ID": 4907174102546, "TYPE": "FOOD", "SUBTYPE": "DESSERT", "NAME": "DOMREMY MILLECREPE 176G", "PRICE": 7.19, "AMOUNT": 1 },
            { "ID": 74410396718, "TYPE": "FOOD", "SUBTYPE": "MEAL", "NAME": "SUPER BIG TONKOTSU CUP NOODLE", "PRICE": 3.29, "AMOUNT": 1 },
            { "ID": 71757051119, "TYPE": "FOOD", "SUBTYPE": "MEAL", "NAME": "SHRIMP SHUMAI DUMPLINGS 8OZ", "PRICE": 4.79, "AMOUNT": 1 },
            { "ID": 4589525390088, "TYPE": "FOOD", "SUBTYPE": "DESSERT", "NAME": "TOKYO BREAD SHIO BUTTER PAN 70G", "PRICE": 2.69, "AMOUNT": 1 },
            { "ID": 74410650889, "TYPE": "FOOD", "SUBTYPE": "DESSERT", "NAME": "COFFEE BREAD D-PLUS", "PRICE": 2.29, "AMOUNT": 1 },
            { "ID": 74410650940, "TYPE": "FOOD", "SUBTYPE": "DESSERT", "NAME": "HOKKAIDO CREAM BREAD D-PLUS", "PRICE": 2.29, "AMOUNT": 1 },
            { "ID": 2800000000127, "TYPE": "FOOD", "SUBTYPE": "MEAT", "NAME": "SPICY CHICKEN KARAAGE", "PRICE": 2.39, "AMOUNT": 1 }
        ]
    },
    {
        "NUMBER": 25,
        "SUBTOTAL": 9.67,
        "DATE": "9/16",
        "TIME": "22:13",
        "COMPANY": "WESTSIDE MARKET",
        "PAYMENT": "STUDENT CARD",
        "BAG": 0,
        "THING": [{ "ID": 898999000503, "TYPE": "FOOD", "SUBTYPE": "DRINK", "NAME": "VITA COCO COCONUT WATER PURE", "PRICE": 4.00, "AMOUNT": 1 },
            { "ID": 898999000503, "TYPE": "FOOD", "SUBTYPE": "DRINK", "NAME": "VITA COCO COCONUT WATER PURE", "PRICE": 4.00, "AMOUNT": 1 },
            { "ID": 722252100672, "TYPE": "FOOD", "SUBTYPE": "SNACK", "NAME": "LUNA WHT CHOC MACADAMIA", "PRICE": 1.67, "AMOUNT": 1 }
        ]
    },
    {
        "NUMBER": 26,
        "SUBTOTAL": 35.11,
        "DATE": "9/18",
        "TIME": "19:57",
        "COMPANY": "HMART",
        "PAYMENT": "CREDIT CARD",
        "BAG": 1,
        "THING": [{ "ID": 999105, "TYPE": "CLOTHE", "SUBTYPE": "CLOTHE", "NAME": "ASIAN GROCERY", "PRICE": 3.99, "AMOUNT": 1 },
            { "ID": 3096, "TYPE": "CLOTHE", "SUBTYPE": "CLOTHE", "NAME": "NAPA CABBAGE", "PRICE": 2.26, "AMOUNT": 1 },
            { "ID": 5113, "TYPE": "CLOTHE", "SUBTYPE": "CLOTHE", "NAME": "SALMON (FARM)", "PRICE": 7.43, "AMOUNT": 1 },
            { "ID": 8859559600276, "TYPE": "CLOTHE", "SUBTYPE": "CLOTHE", "NAME": "CHACHA SUNFLOWER SEEDS CARAMEL 160G", "PRICE": 4.49, "AMOUNT": 1 },
            { "ID": 11152145952, "TYPE": "CLOTHE", "SUBTYPE": "CLOTHE", "NAME": "HAPI SPICY SRIRACHA PEAS 9.9OZ", "PRICE": 5.99, "AMOUNT": 1 },
            { "ID": 1081, "TYPE": "CLOTHE", "SUBTYPE": "CLOTHE", "NAME": "H MART GROUND BEEF", "PRICE": 4.13, "AMOUNT": 1 },
            { "ID": 4066, "TYPE": "CLOTHE", "SUBTYPE": "CLOTHE", "NAME": "STRING BEANS", "PRICE": 2.23, "AMOUNT": 1 },
            { "ID": 28346071409, "TYPE": "CLOTHE", "SUBTYPE": "CLOTHE", "NAME": "SOYBEAN SPROUT USA 12OZ", "PRICE": 2.49, "AMOUNT": 1 },
            { "ID": 4011, "TYPE": "CLOTHE", "SUBTYPE": "CLOTHE", "NAME": "BANANA", "PRICE": 2.00, "AMOUNT": 1 },
            { "ID": 10148409, "TYPE": "CLOTHE", "SUBTYPE": "CLOTHE", "NAME": "SHOPPING BAG", "PRICE": 0.05, "AMOUNT": 2 }
        ]
    },
    {
        "NUMBER": 27,
        "SUBTOTAL": 273.71,
        "DATE": "9/19",
        "TIME": "15:31",
        "COMPANY": "NORDSTROM RACK",
        "PAYMENT": "CREDIT CARD",
        "BAG": 1,
        "THING": [{ "ID": 194956878131, "TYPE": "CLOTHE", "SUBTYPE": "SHOES", "NAME": "WMS ACT SH : WMNS NIKE COURT LEGACY", "PRICE": 42.97, "AMOUNT": 1 },
            { "ID": 194432405516, "TYPE": "CLOTHE", "SUBTYPE": "SHOES", "NAME": "YNG WMS SH : CTAS MADISON OX BLACK /", "PRICE": 29.98, "AMOUNT": 1 },
            { "ID": 5715206540193, "TYPE": "CLOTHE", "SUBTYPE": "CLOTHE", "NAME": "YNG WM APP : VMBETTY SWEAT TOP : TIE", "PRICE": 28.97, "AMOUNT": 1 },
            { "ID": 5054103892968, "TYPE": "CLOTHE", "SUBTYPE": "CLOTHE", "NAME": "WM BTR EAR : PEACE TEE : LILAC : 12 - U", "PRICE": 10.97, "AMOUNT": 1 },
            { "ID": 888254115943, "TYPE": "CLOTHE", "SUBTYPE": "CLOTHE", "NAME": "WMNS ACTIV : WOMENS SATURDAY 2.0 CA", "PRICE": 14.97, "AMOUNT": 1 },
            { "ID": 194322953394, "TYPE": "CLOTHE", "SUBTYPE": "CLOTHE", "NAME": "WMNS GOOD : MIDI BRA W/LARGE MESH", "PRICE": 14.97, "AMOUNT": 1 },
            { "ID": 194116844709, "TYPE": "CLOTHE", "SUBTYPE": "CLOTHE", "NAME": "YNG WM APP : WM FLYING V FT BOXY WH", "PRICE": 26.97, "AMOUNT": 1 },
            { "ID": 195586031309, "TYPE": "CLOTHE", "SUBTYPE": "CLOTHE", "NAME": "YNG WM APP : EFFORT LESS LIFESTYLE B", "PRICE": 26.97, "AMOUNT": 1 },
            { "ID": 195239539756, "TYPE": "CLOTHE", "SUBTYPE": "CLOTHE", "NAME": "WMNS ACTIV : W NSW WVN GX JKT FTRA:", "PRICE": 49.97, "AMOUNT": 1 },
            { "ID": 191984947396, "TYPE": "CLOTHE", "SUBTYPE": "CLOTHE", "NAME": "WMNS ACTIV : W 3S TP TRIC: BLACK: L", "PRICE": 26.97, "AMOUNT": 1 }
        ]
    },
    { "NUMBER": 28, "SUBTOTAL": 18.50, "DATE": "9/19", "TIME": "13:13", "COMPANY": "KYURAMEN", "PAYMENT": "CREDIT CARD", "BAG": 0, "THING": [{ "ID": 0, "TYPE": "FOOD", "SUBTYPE": "MEAL", "NAME": "RAMEN #CP1", "PRICE": 18.50, "AMOUNT": 1 }] }
]