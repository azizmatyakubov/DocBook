import PdfPrinter from "pdfmake";

export const getPdfReadableStream = (appointment) => {
    const fonts = {
        Helvetica: {
            normal: "Helvetica",
            bold: "Helvetica-Bold"
        },
        Times: {    
            normal: "Times-Roman",
            bold: "Times-Bold"
        },

    }

    const printer = new PdfPrinter(fonts)

    const docDefinition = {
     
        content: [
          {
            "nodeName": "DIV",
            "stack": [
              {
                "text": " ",
                "style": [
                  "html-div"
                ]
              },
              {
                "text": "Good morning",
                "nodeName": "H1",
                "fontSize": 24,
                "bold": true,
                "marginBottom": 5,
                "style": [
                  "html-h1",
                  "html-div"
                ]
              },
              {
                "text": " ",
                "style": [
                  "html-div"
                ]
              },
              {
                "text": [
                  {
                    "text": " You have successfully made an appointment  ",
                    "margin": [
                      0,
                      5,
                      0,
                      10
                    ],
                    "style": [
                      "html-p",
                      "html-div"
                    ]
                  },
                  {
                    "text": "\n",
                    "nodeName": "BR"
                  },
                  {
                    "text": " ",
                    "margin": [
                      0,
                      5,
                      0,
                      10
                    ],
                    "style": [
                      "html-p",
                      "html-div"
                    ]
                  },
                  {
                    "text": "\n",
                    "nodeName": "BR"
                  },
                  {
                    "text": " ",
                    "margin": [
                      0,
                      5,
                      0,
                      10
                    ],
                    "style": [
                      "html-p",
                      "html-div"
                    ]
                  },
                  {
                    "text": " Learn more",
                    "color": "blue",
                    "decoration": [
                      "underline"
                    ],
                    "style": [
                      "html-a",
                      "html-p",
                      "html-div"
                    ],
                    "link": "http://localhost:3000/dashboard",
                    "nodeName": "A"
                  },
                  {
                    "text": ". ",
                    "margin": [
                      0,
                      5,
                      0,
                      10
                    ],
                    "style": [
                      "html-p",
                      "html-div"
                    ]
                  }
                ],
                "nodeName": "P",
                "margin": [
                  0,
                  5,
                  0,
                  10
                ],
                "style": [
                  "html-p",
                  "html-div"
                ]
              },
              {
                "text": " ",
                "style": [
                  "html-div"
                ]
              },
              {
                "nodeName": "TABLE",
                "marginBottom": 5,
                "style": [
                  "html-table",
                  "html-div"
                ],
                "table": {
                  "body": [
                    [
                      {
                        "text": "Doctor",
                        "nodeName": "TH",
                        "bold": true,
                        "fillColor": "#EEEEEE",
                        "width": 113,
                        "style": [
                          "html-th",
                          "html-tr",
                          "html-tbody",
                          "html-table",
                          "html-div"
                        ]
                      },
                      {
                        "text": "Date",
                        "nodeName": "TH",
                        "bold": true,
                        "fillColor": "#EEEEEE",
                        "width": 113,
                        "style": [
                          "html-th",
                          "html-tr",
                          "html-tbody",
                          "html-table",
                          "html-div"
                        ]
                      },
                      {
                        "text": "Time",
                        "nodeName": "TH",
                        "bold": true,
                        "fillColor": "#EEEEEE",
                        "width": 113,
                        "style": [
                          "html-th",
                          "html-tr",
                          "html-tbody",
                          "html-table",
                          "html-div"
                        ]
                      }
                    ],
                    [
                      {
                        "text": appointment.doctor,
                        "nodeName": "TD",
                        "height": 23,
                        "style": [
                          "html-td",
                          "html-tr",
                          "html-tbody",
                          "html-table",
                          "html-div"
                        ]
                      },
                      {
                        "text": appointment.date,
                        "nodeName": "TD",
                        "height": 23,
                        "style": [
                          "html-td",
                          "html-tr",
                          "html-tbody",
                          "html-table",
                          "html-div"
                        ]
                      },
                      {
                        "text": appointment.time,
                        "nodeName": "TD",
                        "height": 23,
                        "style": [
                          "html-td",
                          "html-tr",
                          "html-tbody",
                          "html-table",
                          "html-div"
                        ]
                      }
                    ]
                  ],
                  "widths": [
                    113,
                    113,
                    113
                  ],
                  "heights": [
                    "auto",
                    23
                  ]
                }
              },
              {
                "text": " ",
                "style": [
                  "html-div"
                ]
              },
              {
                "text": "If you have any question, you can contact +123 455 667 ",
                "nodeName": "DIV",
                "margin": [
                  0,
                  24
                ],
                "style": [
                  "html-div"
                ]
              },
              {
                "text": " ",
                "style": [
                  "html-div"
                ]
              }
            ]
          },
          {
            "text": " ",
            "style": []
          }
        ],
        styles: {
          "green": {
            "color": "green"
          }
        },
        defaultStyle: {
            "font": "Helvetica",
        },
      }

    // const docDefinition = {
    //     content: [
            
    //         {
    //             text: `Movie title: hello \n\n`,
    //             style: "header"
    //         },
           
    //     ],


    const pdfReadableStream = printer.createPdfKitDocument(docDefinition, {})
    pdfReadableStream.end()
    return pdfReadableStream

}