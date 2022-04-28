export class Menu {
	
	 /*
     // Protected Field Example (add it inside screenModel's fields array):
     {
          name: "customProtectedField",
          position: {
               column: 2,
               row: 1
          },
          content: "someCustomText",
          length: 14,
          foreground: "red",
          background: "blue",
          protected: true,
          visible: true,
          blinking: true,
          underlined: true,
          isIntensified: true,
          style: "font-size: 20px; margin: 1px; padding; 1%; z-index: 99;"
     }

     // Input Field Example (add it inside screenModel's fields array):
     {
          name: "customUnprotectedField",
          position: {
               column: 3,
               row: 5
          },
          content: "text...",
          length: 10,
          datatype: "ALPHANUMERIC",
          foreground: "",
          background: "",
          protected: false,
          visible: true
          isIntensified: true,
          style: "font-size: 20px; color: green; margin: 1px; padding; 1%; z-index: 99; background-color: lightseagreen;"
     }
     */
     	
    static readonly screenModel = {
     name : "Menu",
     fields : [
          {
               name : "Message",
               position : {
                    column : 2,
                    row : 1
               },
               content : "{runtime} COMUMP0002-D Program not found                                                 ",
               length : 79
          },
          {
               name : "POS82",
               position : {
                    column : 2,
                    row : 2
               },
               content : "{runtime} 10:32:03",
               length : 8
          },
          {
               name : "POS91",
               position : {
                    column : 11,
                    row : 2
               },
               content : "{runtime}       ",
               length : 6
          },
          {
               name : "POS98",
               position : {
                    column : 18,
                    row : 2
               },
               content : "{runtime} TID",
               length : 3
          },
          {
               name : "POS102",
               position : {
                    column : 22,
                    row : 2
               },
               content : "{runtime}     ",
               length : 4
          },
          {
               name : "POS106",
               position : {
                    column : 26,
                    row : 2
               },
               content : "{runtime} 8",
               length : 1
          },
          {
               name : "POS108",
               position : {
                    column : 28,
                    row : 2
               },
               content : "{runtime}         ",
               length : 8
          },
          {
               name : "POS117",
               position : {
                    column : 37,
                    row : 2
               },
               content : "{runtime} -DEMOCO-",
               length : 8
          },
          {
               name : "POS126",
               position : {
                    column : 46,
                    row : 2
               },
               content : "{runtime}         ",
               length : 8
          },
          {
               name : "POS135",
               position : {
                    column : 55,
                    row : 2
               },
               content : "{runtime} User",
               length : 4
          },
          {
               name : "POS140",
               position : {
                    column : 60,
                    row : 2
               },
               content : "{runtime} PN      ",
               length : 8
          },
          {
               name : "POS149",
               position : {
                    column : 69,
                    row : 2
               },
               content : "{runtime}    ",
               length : 3
          },
          {
               name : "POS153",
               position : {
                    column : 73,
                    row : 2
               },
               content : "{runtime} 19.04.05",
               length : 8
          },
          {
               name : "POS162",
               position : {
                    column : 2,
                    row : 3
               },
               content : "{runtime}                                ",
               length : 31
          },
          {
               name : "POS194",
               position : {
                    column : 34,
                    row : 3
               },
               content : "{runtime} -- COM-PASS --",
               length : 14
          },
          {
               name : "POS209",
               position : {
                    column : 49,
                    row : 3
               },
               content : "{runtime}                            ",
               length : 27
          },
          {
               name : "POS237",
               position : {
                    column : 77,
                    row : 3
               },
               content : "{runtime} USTS",
               length : 4
          },
          {
               name : "POS242",
               position : {
                    column : 2,
                    row : 4
               },
               content : "{runtime}       ",
               length : 6
          },
          {
               name : "POS249",
               position : {
                    column : 9,
                    row : 4
               },
               content : "{runtime} Suspended Programs",
               length : 18
          },
          {
               name : "POS268",
               position : {
                    column : 28,
                    row : 4
               },
               content : "{runtime}                         ",
               length : 24
          },
          {
               name : "POS293",
               position : {
                    column : 53,
                    row : 4
               },
               content : "{runtime} Program Services",
               length : 16
          },
          {
               name : "POS310",
               position : {
                    column : 70,
                    row : 4
               },
               content : "{runtime}      ",
               length : 5
          },
          {
               name : "POS316",
               position : {
                    column : 76,
                    row : 4
               },
               content : "{runtime}      ",
               length : 5
          },
          {
               name : "POS322",
               position : {
                    column : 2,
                    row : 5
               },
               content : "{runtime} ---------------------------------",
               length : 33
          },
          {
               name : "POS356",
               position : {
                    column : 36,
                    row : 5
               },
               content : "{runtime}      ",
               length : 5
          },
          {
               name : "POS362",
               position : {
                    column : 42,
                    row : 5
               },
               content : "{runtime} ---------------------------------------",
               length : 39
          },
          {
               name : "POS402",
               position : {
                    column : 2,
                    row : 6
               },
               content : "{runtime} Programs",
               length : 8
          },
          {
               name : "POS411",
               position : {
                    column : 11,
                    row : 6
               },
               content : "{runtime}    ",
               length : 3
          },
          {
               name : "POS415",
               position : {
                    column : 15,
                    row : 6
               },
               content : "{runtime} Name",
               length : 4
          },
          {
               name : "POS420",
               position : {
                    column : 20,
                    row : 6
               },
               content : "{runtime}    ",
               length : 3
          },
          {
               name : "POS424",
               position : {
                    column : 24,
                    row : 6
               },
               content : "{runtime} C",
               length : 1
          },
          {
               name : "POS426",
               position : {
                    column : 26,
                    row : 6
               },
               content : "{runtime} Level",
               length : 5
          },
          {
               name : "POS433",
               position : {
                    column : 33,
                    row : 6
               },
               content : "{runtime} PF",
               length : 2
          },
          {
               name : "POS436",
               position : {
                    column : 36,
                    row : 6
               },
               content : "{runtime}      ",
               length : 5
          },
          {
               name : "POS442",
               position : {
                    column : 42,
                    row : 6
               },
               content : "{runtime} Service Description",
               length : 19
          },
          {
               name : "POS462",
               position : {
                    column : 62,
                    row : 6
               },
               content : "{runtime}   ",
               length : 2
          },
          {
               name : "POS465",
               position : {
                    column : 65,
                    row : 6
               },
               content : "{runtime} Programs",
               length : 8
          },
          {
               name : "POS475",
               position : {
                    column : 75,
                    row : 6
               },
               content : "{runtime} ID",
               length : 2
          },
          {
               name : "POS479",
               position : {
                    column : 79,
                    row : 6
               },
               content : "{runtime} PF",
               length : 2
          },
          {
               name : "POS482",
               position : {
                    column : 2,
                    row : 7
               },
               content : "{runtime} --------",
               length : 8
          },
          {
               name : "POS491",
               position : {
                    column : 11,
                    row : 7
               },
               content : "{runtime}  ",
               length : 1
          },
          {
               name : "POS493",
               position : {
                    column : 13,
                    row : 7
               },
               content : "{runtime} --------",
               length : 8
          },
          {
               name : "POS502",
               position : {
                    column : 22,
                    row : 7
               },
               content : "{runtime}  ",
               length : 1
          },
          {
               name : "POS504",
               position : {
                    column : 24,
                    row : 7
               },
               content : "{runtime} -",
               length : 1
          },
          {
               name : "POS506",
               position : {
                    column : 26,
                    row : 7
               },
               content : "{runtime} -----",
               length : 5
          },
          {
               name : "POS513",
               position : {
                    column : 33,
                    row : 7
               },
               content : "{runtime} --",
               length : 2
          },
          {
               name : "POS516",
               position : {
                    column : 36,
                    row : 7
               },
               content : "{runtime}      ",
               length : 5
          },
          {
               name : "POS522",
               position : {
                    column : 42,
                    row : 7
               },
               content : "{runtime} --------------------",
               length : 20
          },
          {
               name : "POS543",
               position : {
                    column : 63,
                    row : 7
               },
               content : "{runtime}  ",
               length : 1
          },
          {
               name : "POS545",
               position : {
                    column : 65,
                    row : 7
               },
               content : "{runtime} --------",
               length : 8
          },
          {
               name : "POS555",
               position : {
                    column : 75,
                    row : 7
               },
               content : "{runtime} --",
               length : 2
          },
          {
               name : "POS559",
               position : {
                    column : 79,
                    row : 7
               },
               content : "{runtime} --",
               length : 2
          },
          {
               name : "POS562",
               position : {
                    column : 2,
                    row : 8
               },
               content : "{runtime}         ",
               length : 8
          },
          {
               name : "POS571",
               position : {
                    column : 11,
                    row : 8
               },
               content : "{runtime}  ",
               length : 1
          },
          {
               name : "POS573",
               position : {
                    column : 13,
                    row : 8
               },
               content : "{runtime} ",
               length : 8
          },
          {
               name : "POS582",
               position : {
                    column : 22,
                    row : 8
               },
               content : "{runtime}  ",
               length : 1
          },
          {
               name : "POS584",
               position : {
                    column : 24,
                    row : 8
               },
               content : "{runtime} ",
               length : 1
          },
          {
               name : "POS587",
               position : {
                    column : 27,
                    row : 8
               },
               content : "{runtime} 1",
               length : 1
          },
          {
               name : "POS589",
               position : {
                    column : 29,
                    row : 8
               },
               content : "{runtime}   ",
               length : 2
          },
          {
               name : "POS593",
               position : {
                    column : 33,
                    row : 8
               },
               content : "{runtime} ",
               length : 2
          },
          {
               name : "POS596",
               position : {
                    column : 36,
                    row : 8
               },
               content : "{runtime}      ",
               length : 5
          },
          {
               name : "POS602",
               position : {
                    column : 42,
                    row : 8
               },
               content : "{runtime} Dataset Maintenance ",
               length : 20
          },
          {
               name : "POS623",
               position : {
                    column : 63,
                    row : 8
               },
               content : "{runtime}  ",
               length : 1
          },
          {
               name : "POS625",
               position : {
                    column : 65,
                    row : 8
               },
               content : "{runtime} UDS     ",
               length : 8
          },
          {
               name : "POS634",
               position : {
                    column : 74,
                    row : 8
               },
               content : "{runtime}  ",
               length : 1
          },
          {
               name : "POS636",
               position : {
                    column : 76,
                    row : 8
               },
               content : "{runtime} A",
               length : 1
          },
          {
               name : "POS639",
               position : {
                    column : 79,
                    row : 8
               },
               content : "{runtime} ",
               length : 2
          },
          {
               name : "POS642",
               position : {
                    column : 2,
                    row : 9
               },
               content : "{runtime}         ",
               length : 8
          },
          {
               name : "POS651",
               position : {
                    column : 11,
                    row : 9
               },
               content : "{runtime}  ",
               length : 1
          },
          {
               name : "POS653",
               position : {
                    column : 13,
                    row : 9
               },
               content : "{runtime} ",
               length : 8
          },
          {
               name : "POS662",
               position : {
                    column : 22,
                    row : 9
               },
               content : "{runtime}  ",
               length : 1
          },
          {
               name : "POS664",
               position : {
                    column : 24,
                    row : 9
               },
               content : "{runtime} ",
               length : 1
          },
          {
               name : "POS667",
               position : {
                    column : 27,
                    row : 9
               },
               content : "{runtime} 2",
               length : 1
          },
          {
               name : "POS669",
               position : {
                    column : 29,
                    row : 9
               },
               content : "{runtime}   ",
               length : 2
          },
          {
               name : "POS673",
               position : {
                    column : 33,
                    row : 9
               },
               content : "{runtime} ",
               length : 2
          },
          {
               name : "POS676",
               position : {
                    column : 36,
                    row : 9
               },
               content : "{runtime}      ",
               length : 5
          },
          {
               name : "POS682",
               position : {
                    column : 42,
                    row : 9
               },
               content : "{runtime} PDS Maintenance     ",
               length : 20
          },
          {
               name : "POS703",
               position : {
                    column : 63,
                    row : 9
               },
               content : "{runtime}  ",
               length : 1
          },
          {
               name : "POS705",
               position : {
                    column : 65,
                    row : 9
               },
               content : "{runtime} UPDS    ",
               length : 8
          },
          {
               name : "POS714",
               position : {
                    column : 74,
                    row : 9
               },
               content : "{runtime}  ",
               length : 1
          },
          {
               name : "POS716",
               position : {
                    column : 76,
                    row : 9
               },
               content : "{runtime} B",
               length : 1
          },
          {
               name : "POS719",
               position : {
                    column : 79,
                    row : 9
               },
               content : "{runtime} ",
               length : 2
          },
          {
               name : "POS722",
               position : {
                    column : 2,
                    row : 10
               },
               content : "{runtime}         ",
               length : 8
          },
          {
               name : "POS731",
               position : {
                    column : 11,
                    row : 10
               },
               content : "{runtime}  ",
               length : 1
          },
          {
               name : "POS733",
               position : {
                    column : 13,
                    row : 10
               },
               content : "{runtime} ",
               length : 8
          },
          {
               name : "POS742",
               position : {
                    column : 22,
                    row : 10
               },
               content : "{runtime}  ",
               length : 1
          },
          {
               name : "POS744",
               position : {
                    column : 24,
                    row : 10
               },
               content : "{runtime} ",
               length : 1
          },
          {
               name : "POS747",
               position : {
                    column : 27,
                    row : 10
               },
               content : "{runtime} 3",
               length : 1
          },
          {
               name : "POS749",
               position : {
                    column : 29,
                    row : 10
               },
               content : "{runtime}   ",
               length : 2
          },
          {
               name : "POS753",
               position : {
                    column : 33,
                    row : 10
               },
               content : "{runtime} ",
               length : 2
          },
          {
               name : "POS756",
               position : {
                    column : 36,
                    row : 10
               },
               content : "{runtime}      ",
               length : 5
          },
          {
               name : "POS762",
               position : {
                    column : 42,
                    row : 10
               },
               content : "{runtime}                     ",
               length : 20
          },
          {
               name : "POS783",
               position : {
                    column : 63,
                    row : 10
               },
               content : "{runtime}  ",
               length : 1
          },
          {
               name : "POS785",
               position : {
                    column : 65,
                    row : 10
               },
               content : "{runtime}         ",
               length : 8
          },
          {
               name : "POS794",
               position : {
                    column : 74,
                    row : 10
               },
               content : "{runtime}  ",
               length : 1
          },
          {
               name : "POS796",
               position : {
                    column : 76,
                    row : 10
               },
               content : "{runtime}  ",
               length : 1
          },
          {
               name : "POS799",
               position : {
                    column : 79,
                    row : 10
               },
               content : "{runtime} ",
               length : 2
          },
          {
               name : "POS802",
               position : {
                    column : 2,
                    row : 11
               },
               content : "{runtime}         ",
               length : 8
          },
          {
               name : "POS811",
               position : {
                    column : 11,
                    row : 11
               },
               content : "{runtime}  ",
               length : 1
          },
          {
               name : "POS813",
               position : {
                    column : 13,
                    row : 11
               },
               content : "{runtime} ",
               length : 8
          },
          {
               name : "POS822",
               position : {
                    column : 22,
                    row : 11
               },
               content : "{runtime}  ",
               length : 1
          },
          {
               name : "POS824",
               position : {
                    column : 24,
                    row : 11
               },
               content : "{runtime} ",
               length : 1
          },
          {
               name : "POS827",
               position : {
                    column : 27,
                    row : 11
               },
               content : "{runtime} 4",
               length : 1
          },
          {
               name : "POS829",
               position : {
                    column : 29,
                    row : 11
               },
               content : "{runtime}   ",
               length : 2
          },
          {
               name : "POS833",
               position : {
                    column : 33,
                    row : 11
               },
               content : "{runtime} ",
               length : 2
          },
          {
               name : "POS836",
               position : {
                    column : 36,
                    row : 11
               },
               content : "{runtime}      ",
               length : 5
          },
          {
               name : "POS842",
               position : {
                    column : 42,
                    row : 11
               },
               content : "{runtime} System Job Queue    ",
               length : 20
          },
          {
               name : "POS863",
               position : {
                    column : 63,
                    row : 11
               },
               content : "{runtime}  ",
               length : 1
          },
          {
               name : "POS865",
               position : {
                    column : 65,
                    row : 11
               },
               content : "{runtime} UQ      ",
               length : 8
          },
          {
               name : "POS874",
               position : {
                    column : 74,
                    row : 11
               },
               content : "{runtime}  ",
               length : 1
          },
          {
               name : "POS876",
               position : {
                    column : 76,
                    row : 11
               },
               content : "{runtime} D",
               length : 1
          },
          {
               name : "POS879",
               position : {
                    column : 79,
                    row : 11
               },
               content : "{runtime} ",
               length : 2
          },
          {
               name : "POS882",
               position : {
                    column : 2,
                    row : 12
               },
               content : "{runtime}         ",
               length : 8
          },
          {
               name : "POS891",
               position : {
                    column : 11,
                    row : 12
               },
               content : "{runtime}  ",
               length : 1
          },
          {
               name : "POS893",
               position : {
                    column : 13,
                    row : 12
               },
               content : "{runtime} ",
               length : 8
          },
          {
               name : "POS902",
               position : {
                    column : 22,
                    row : 12
               },
               content : "{runtime}  ",
               length : 1
          },
          {
               name : "POS904",
               position : {
                    column : 24,
                    row : 12
               },
               content : "{runtime} ",
               length : 1
          },
          {
               name : "POS907",
               position : {
                    column : 27,
                    row : 12
               },
               content : "{runtime} 5",
               length : 1
          },
          {
               name : "POS909",
               position : {
                    column : 29,
                    row : 12
               },
               content : "{runtime}   ",
               length : 2
          },
          {
               name : "POS913",
               position : {
                    column : 33,
                    row : 12
               },
               content : "{runtime} ",
               length : 2
          },
          {
               name : "POS916",
               position : {
                    column : 36,
                    row : 12
               },
               content : "{runtime}      ",
               length : 5
          },
          {
               name : "POS922",
               position : {
                    column : 42,
                    row : 12
               },
               content : "{runtime} The Editor          ",
               length : 20
          },
          {
               name : "POS943",
               position : {
                    column : 63,
                    row : 12
               },
               content : "{runtime}  ",
               length : 1
          },
          {
               name : "POS945",
               position : {
                    column : 65,
                    row : 12
               },
               content : "{runtime} UEDIT   ",
               length : 8
          },
          {
               name : "POS954",
               position : {
                    column : 74,
                    row : 12
               },
               content : "{runtime}  ",
               length : 1
          },
          {
               name : "POS956",
               position : {
                    column : 76,
                    row : 12
               },
               content : "{runtime} E",
               length : 1
          },
          {
               name : "POS959",
               position : {
                    column : 79,
                    row : 12
               },
               content : "{runtime} ",
               length : 2
          },
          {
               name : "POS962",
               position : {
                    column : 2,
                    row : 13
               },
               content : "{runtime}         ",
               length : 8
          },
          {
               name : "POS971",
               position : {
                    column : 11,
                    row : 13
               },
               content : "{runtime}  ",
               length : 1
          },
          {
               name : "POS973",
               position : {
                    column : 13,
                    row : 13
               },
               content : "{runtime} ",
               length : 8
          },
          {
               name : "POS982",
               position : {
                    column : 22,
                    row : 13
               },
               content : "{runtime}  ",
               length : 1
          },
          {
               name : "POS984",
               position : {
                    column : 24,
                    row : 13
               },
               content : "{runtime} ",
               length : 1
          },
          {
               name : "POS987",
               position : {
                    column : 27,
                    row : 13
               },
               content : "{runtime} 6",
               length : 1
          },
          {
               name : "POS989",
               position : {
                    column : 29,
                    row : 13
               },
               content : "{runtime}   ",
               length : 2
          },
          {
               name : "POS993",
               position : {
                    column : 33,
                    row : 13
               },
               content : "{runtime} ",
               length : 2
          },
          {
               name : "POS996",
               position : {
                    column : 36,
                    row : 13
               },
               content : "{runtime}      ",
               length : 5
          },
          {
               name : "POS1002",
               position : {
                    column : 42,
                    row : 13
               },
               content : "{runtime} SPF                 ",
               length : 20
          },
          {
               name : "POS1023",
               position : {
                    column : 63,
                    row : 13
               },
               content : "{runtime}  ",
               length : 1
          },
          {
               name : "POS1025",
               position : {
                    column : 65,
                    row : 13
               },
               content : "{runtime} SPF     ",
               length : 8
          },
          {
               name : "POS1034",
               position : {
                    column : 74,
                    row : 13
               },
               content : "{runtime}  ",
               length : 1
          },
          {
               name : "POS1036",
               position : {
                    column : 76,
                    row : 13
               },
               content : "{runtime} F",
               length : 1
          },
          {
               name : "POS1039",
               position : {
                    column : 79,
                    row : 13
               },
               content : "{runtime} ",
               length : 2
          },
          {
               name : "POS1042",
               position : {
                    column : 2,
                    row : 14
               },
               content : "{runtime}         ",
               length : 8
          },
          {
               name : "POS1051",
               position : {
                    column : 11,
                    row : 14
               },
               content : "{runtime}  ",
               length : 1
          },
          {
               name : "POS1053",
               position : {
                    column : 13,
                    row : 14
               },
               content : "{runtime} ",
               length : 8
          },
          {
               name : "POS1062",
               position : {
                    column : 22,
                    row : 14
               },
               content : "{runtime}  ",
               length : 1
          },
          {
               name : "POS1064",
               position : {
                    column : 24,
                    row : 14
               },
               content : "{runtime} ",
               length : 1
          },
          {
               name : "POS1067",
               position : {
                    column : 27,
                    row : 14
               },
               content : "{runtime} 7",
               length : 1
          },
          {
               name : "POS1069",
               position : {
                    column : 29,
                    row : 14
               },
               content : "{runtime}   ",
               length : 2
          },
          {
               name : "POS1073",
               position : {
                    column : 33,
                    row : 14
               },
               content : "{runtime} ",
               length : 2
          },
          {
               name : "POS1076",
               position : {
                    column : 36,
                    row : 14
               },
               content : "{runtime}      ",
               length : 5
          },
          {
               name : "POS1082",
               position : {
                    column : 42,
                    row : 14
               },
               content : "{runtime}                     ",
               length : 20
          },
          {
               name : "POS1103",
               position : {
                    column : 63,
                    row : 14
               },
               content : "{runtime}  ",
               length : 1
          },
          {
               name : "POS1105",
               position : {
                    column : 65,
                    row : 14
               },
               content : "{runtime}         ",
               length : 8
          },
          {
               name : "POS1114",
               position : {
                    column : 74,
                    row : 14
               },
               content : "{runtime}  ",
               length : 1
          },
          {
               name : "POS1116",
               position : {
                    column : 76,
                    row : 14
               },
               content : "{runtime}  ",
               length : 1
          },
          {
               name : "POS1119",
               position : {
                    column : 79,
                    row : 14
               },
               content : "{runtime} ",
               length : 2
          },
          {
               name : "POS1122",
               position : {
                    column : 2,
                    row : 15
               },
               content : "{runtime}         ",
               length : 8
          },
          {
               name : "POS1131",
               position : {
                    column : 11,
                    row : 15
               },
               content : "{runtime}  ",
               length : 1
          },
          {
               name : "POS1133",
               position : {
                    column : 13,
                    row : 15
               },
               content : "{runtime} ",
               length : 8
          },
          {
               name : "POS1142",
               position : {
                    column : 22,
                    row : 15
               },
               content : "{runtime}  ",
               length : 1
          },
          {
               name : "POS1144",
               position : {
                    column : 24,
                    row : 15
               },
               content : "{runtime} ",
               length : 1
          },
          {
               name : "POS1147",
               position : {
                    column : 27,
                    row : 15
               },
               content : "{runtime} 8",
               length : 1
          },
          {
               name : "POS1149",
               position : {
                    column : 29,
                    row : 15
               },
               content : "{runtime}   ",
               length : 2
          },
          {
               name : "POS1153",
               position : {
                    column : 33,
                    row : 15
               },
               content : "{runtime} ",
               length : 2
          },
          {
               name : "POS1156",
               position : {
                    column : 36,
                    row : 15
               },
               content : "{runtime}      ",
               length : 5
          },
          {
               name : "POS1162",
               position : {
                    column : 42,
                    row : 15
               },
               content : "{runtime}                     ",
               length : 20
          },
          {
               name : "POS1183",
               position : {
                    column : 63,
                    row : 15
               },
               content : "{runtime}  ",
               length : 1
          },
          {
               name : "POS1185",
               position : {
                    column : 65,
                    row : 15
               },
               content : "{runtime}         ",
               length : 8
          },
          {
               name : "POS1194",
               position : {
                    column : 74,
                    row : 15
               },
               content : "{runtime}  ",
               length : 1
          },
          {
               name : "POS1196",
               position : {
                    column : 76,
                    row : 15
               },
               content : "{runtime}  ",
               length : 1
          },
          {
               name : "POS1199",
               position : {
                    column : 79,
                    row : 15
               },
               content : "{runtime} ",
               length : 2
          },
          {
               name : "POS1202",
               position : {
                    column : 2,
                    row : 16
               },
               content : "{runtime}         ",
               length : 8
          },
          {
               name : "POS1211",
               position : {
                    column : 11,
                    row : 16
               },
               content : "{runtime}  ",
               length : 1
          },
          {
               name : "POS1213",
               position : {
                    column : 13,
                    row : 16
               },
               content : "{runtime} ",
               length : 8
          },
          {
               name : "POS1222",
               position : {
                    column : 22,
                    row : 16
               },
               content : "{runtime}  ",
               length : 1
          },
          {
               name : "POS1224",
               position : {
                    column : 24,
                    row : 16
               },
               content : "{runtime} ",
               length : 1
          },
          {
               name : "POS1227",
               position : {
                    column : 27,
                    row : 16
               },
               content : "{runtime} 9",
               length : 1
          },
          {
               name : "POS1229",
               position : {
                    column : 29,
                    row : 16
               },
               content : "{runtime}   ",
               length : 2
          },
          {
               name : "POS1233",
               position : {
                    column : 33,
                    row : 16
               },
               content : "{runtime} ",
               length : 2
          },
          {
               name : "POS1236",
               position : {
                    column : 36,
                    row : 16
               },
               content : "{runtime}      ",
               length : 5
          },
          {
               name : "POS1242",
               position : {
                    column : 42,
                    row : 16
               },
               content : "{runtime}                     ",
               length : 20
          },
          {
               name : "POS1263",
               position : {
                    column : 63,
                    row : 16
               },
               content : "{runtime}  ",
               length : 1
          },
          {
               name : "POS1265",
               position : {
                    column : 65,
                    row : 16
               },
               content : "{runtime}         ",
               length : 8
          },
          {
               name : "POS1274",
               position : {
                    column : 74,
                    row : 16
               },
               content : "{runtime}  ",
               length : 1
          },
          {
               name : "POS1276",
               position : {
                    column : 76,
                    row : 16
               },
               content : "{runtime}  ",
               length : 1
          },
          {
               name : "POS1279",
               position : {
                    column : 79,
                    row : 16
               },
               content : "{runtime} ",
               length : 2
          },
          {
               name : "POS1282",
               position : {
                    column : 2,
                    row : 17
               },
               content : "{runtime}                                                                                ",
               length : 79
          },
          {
               name : "POS1362",
               position : {
                    column : 2,
                    row : 18
               },
               content : "{runtime} Enter Input:",
               length : 12
          },
          {
               name : "POS1375",
               position : {
                    column : 15,
                    row : 18
               },
               content : "{runtime}     ",
               length : 4
          },
          {
               name : "POS1380",
               position : {
                    column : 20,
                    row : 18
               },
               content : "{runtime}                                         ",
               length : 40
          },
          {
               name : "POS1421",
               position : {
                    column : 61,
                    row : 18
               },
               content : "{runtime}    ",
               length : 3
          },
          {
               name : "POS1425",
               position : {
                    column : 65,
                    row : 18
               },
               content : "{runtime} HELP  ",
               length : 6
          },
          {
               name : "POS1432",
               position : {
                    column : 72,
                    row : 18
               },
               content : "{runtime}    ",
               length : 3
          },
          {
               name : "POS1436",
               position : {
                    column : 76,
                    row : 18
               },
               content : "{runtime} ?",
               length : 1
          },
          {
               name : "POS1438",
               position : {
                    column : 78,
                    row : 18
               },
               content : "{runtime}    ",
               length : 3
          },
          {
               name : "Command",
               position : {
                    column : 2,
                    row : 19
               },
               content : "{runtime} *ABC                                                                           ",
               length : 79
          },
          {
               name : "POS1522",
               position : {
                    column : 2,
                    row : 20
               },
               content : "{runtime} -------------------------------------------------------------------------------",
               length : 79
          },
          {
               name : "POS1602",
               position : {
                    column : 2,
                    row : 21
               },
               content : "{runtime} LU Name:",
               length : 8
          },
          {
               name : "POS1611",
               position : {
                    column : 11,
                    row : 21
               },
               content : "{runtime} DAEETCO3",
               length : 8
          },
          {
               name : "POS1620",
               position : {
                    column : 20,
                    row : 21
               },
               content : "{runtime}     ",
               length : 4
          },
          {
               name : "POS1625",
               position : {
                    column : 25,
                    row : 21
               },
               content : "{runtime} HC TID:",
               length : 7
          },
          {
               name : "POS1633",
               position : {
                    column : 33,
                    row : 21
               },
               content : "{runtime}       ",
               length : 6
          },
          {
               name : "POS1640",
               position : {
                    column : 40,
                    row : 21
               },
               content : "{runtime}       ",
               length : 6
          },
          {
               name : "POS1647",
               position : {
                    column : 47,
                    row : 21
               },
               content : "{runtime} Recall:",
               length : 7
          },
          {
               name : "POS1655",
               position : {
                    column : 55,
                    row : 21
               },
               content : "{runtime} = ",
               length : 2
          },
          {
               name : "POS1658",
               position : {
                    column : 58,
                    row : 21
               },
               content : "{runtime}       ",
               length : 6
          },
          {
               name : "POS1665",
               position : {
                    column : 65,
                    row : 21
               },
               content : "{runtime} Language:",
               length : 9
          },
          {
               name : "POS1675",
               position : {
                    column : 75,
                    row : 21
               },
               content : "{runtime} 001",
               length : 3
          },
          {
               name : "POS1679",
               position : {
                    column : 79,
                    row : 21
               },
               content : "{runtime}   ",
               length : 2
          },
          {
               name : "POS1842",
               position : {
                    column : 2,
                    row : 24
               },
               content : "{runtime} Columns:",
               length : 8
          },
          {
               name : "POS1851",
               position : {
                    column : 11,
                    row : 24
               },
               content : "{runtime} 80  ",
               length : 4
          },
          {
               name : "POS1856",
               position : {
                    column : 16,
                    row : 24
               },
               content : "{runtime}                                                                  ",
               length : 65
          }
     ],
     language : {
          name : "English"
     },
     cursor : {
          position : {
               column : 1,
               row : 1
          },
          fieldIndex : 0
     },
     transformations : [
          {
               type : "HostKeyTransformation",
               hostKeys : [
                    {
                         type : "PositionedHostKey",
                         action : "[PA1]",
                         caption : "NO",
                         displayText : "NO",
                         displayPosition : {
                              row : 23,
                              column : 58
                         },
                         actionPosition : {
                              row : 22,
                              column : 58
                         },
                         actionLength : 3,
                         captionLength : 2,
                         captionPosition : {
                              row : 23,
                              column : 58
                         }
                    }
               ],
               regionsToHide : [
                    {
                         bottomRight : {
                              row : 22,
                              column : 80
                         },
                         topLeft : {
                              row : 22,
                              column : 1
                         }
                    },
                    {
                         bottomRight : {
                              row : 23,
                              column : 80
                         },
                         topLeft : {
                              row : 23,
                              column : 1
                         }
                    }
               ]
          }
     ],
     screenSize : {
          rows : 24,
          columns : 80
     }
}
}