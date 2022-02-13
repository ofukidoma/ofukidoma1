(function () {
  var menu = [
    {
      id: 1,
      name: "ABECHI, EMMANUEL",
      position: "THE CHAIRMAN",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about:
        "He had three Chairmans commendation letters. I) for meritorious service to the Agency,2000. II)Investigation on illicit drug trafficking, 2001 and III)dedication to duty and operational excellence, 2003. Courses attended include: Assistant Narcotics Superintendent course 2/1999. Money laundering, financial & Asset investigation Nigeria Intelligence Agency (NIA) Basic intelligence course Centre for Management Development (CMD) Workshop on Team building United Nation office of Drug and crime (UNODC) CBT course on Airport Interdiction. He is from Apa local government in Benue State and holds BA(Hon)Public Administration degree, from Ahamadu Bello University, Zaria .",
      portfolio:
        "Chairman/Chief Executive officer of Caesersgate Holiday Resort ltd, a hospitality company incorporated in 2010.",
    },
    {
      id: 2,
      name: "ODEH, ANDREW",
      position: "THE VICE CHAIRMAN",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 3,
      name: "ALI, DAHIRU G.",
      position: "THE SECRETARY",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 4,
      name: "ONAZI, ADA ABECHI",
      position: "THE ASSISTANT SECRETARY",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 5,
      name: "JUMBO, OCHIGBO",
      position: "THE FINANCIAL SECRETARY",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 6,
      name: "RTD. COMPTROLLER OKPE, SYLVESTER",
      position: "THE TREASURER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Foche.jpg?alt=media&token=095d1099-d8f0-462e-acf0-b8586c83cc47",
      about:
        "He had three Chairmans commendation letters. I) for meritorious service to the Agency,2000. II)Investigation on illicit drug trafficking, 2001 and III)dedication to duty and operational excellence, 2003. Courses attended include: Assistant Narcotics Superintendent course 2/1999. Money laundering, financial & Asset investigation Nigeria Intelligence Agency (NIA) Basic intelligence course Centre for Management Development (CMD) Workshop on Team building United Nation office of Drug and crime (UNODC) CBT course on Airport Interdiction. He is from Apa local government in Benue State and holds BA(Hon)Public Administration degree, from Ahamadu Bello University, Zaria .",
      portfolio:
        "He attended St. Barnards Primary School, Okpoga, Mt. St. Michaels Secondary School, Aliade and University of Calabar, in Cross River State where he had his Bachelor of Arts and Master of Arts Degrees",
    },
    {
      id: 7,
      name: "AGBO, MATHIAS A.",
      position: "THE AUDITOR",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 8,
      name: "ADOKWU, ENONCHE",
      position: "THE ASSISTANT FIN/SEC",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 9,
      name: "INALEGWU, ERIC",
      position: "THE PRO",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 10,
      name: "OTOWO, OBAIYA",
      position: "THE PROVOST",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 11,
      name: "OCHE, ALEX",
      position: "THE LEGAL ADVISER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 12,
      name: "OGBONOKO, DANIEL",
      position: "EX-OFFICIO",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 13,
      name: "AMEH, SYLVA",
      position: "PATRON",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 14,
      name: "IDAKWO, ANDREW S.",
      position: "PATRON",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 15,
      name: "AMANYI, GODWIN O",
      position: "PATRON (INTERNAL)",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 16,
      name: "OGENYI, OCHAPA",
      position: "CHAIR,SCREENING CMTE",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 17,
      name: "OGAH, ALEICHENU R",
      position: "CHAIR, WELFARE CMTE",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 18,
      name: "ANTHONY ABOKI OKWA",
      position: "CHAIR, PROJECT CMTE",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidomawebsite.appspot.com/o/TEAM%2Fmd2.jpg?alt=media&token=6c9277a4-f39c-42b4-82c9-cd878909cab0",
      about: "",
      portfolio:
        "Anthony Aboki Okwa is a Fellow of the Nigerian Institute of Building (NIOB), and DG of C-STEMP Construction Skills Training and Empowerment Project Ltd/Gte.",
    },
    {
      id: 19,
      name: "EDACHE, AUSTINE",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 20,
      name: "OBE, DAN E.",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 21,
      name: "ECHE, AGWUNGWU E.",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 22,
      name: "OGBOLE, EBE",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 23,
      name: "OGENYI, FELIX",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 24,
      name: "IBIRAMA, ADA F",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 25,
      name: "AGIDANI, SOLOMON",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 26,
      name: "IKPE, ENE R.",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 27,
      name: "OKPOZU, JONATHAN",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 28,
      name: "ADOLE ONCHE",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 29,
      name: "ANYEBE, ALPHONSUS",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 30,
      name: "AMEH, STEVEN",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 31,
      name: "ADOKWU, TONI",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 32,
      name: "ECHONO, GARBA",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 33,
      name: "OKPACHU, EMMAUEL",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 34,
      name: "AJENE, HENRY A.",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 35,
      name: "PAUL, OLOCHE S",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 36,
      name: "ABUTU, MATHIAS",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 37,
      name: "ABECHI, OKOPI",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 38,
      name: "ADAGBOYI, EMMA",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 39,
      name: "IDAKWO, JOHN",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 40,
      name: "OFIKWU, PETER O.",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 41,
      name: "AGADA, SIMON O.",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 42,
      name: "OGBOLE, PAUL H.",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 43,
      name: "OGALE, DANIEL O.",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 44,
      name: "IDAKWO, JAMES",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 45,
      name: "ALAPA, NELSON",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 46,
      name: "EGAHI, ADA",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 47,
      name: "AGIDA, TEDDY E.",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 48,
      name: "ECHONO SUNNY T.",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 49,
      name: "ODEH, ANEBI E",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 50,
      name: "AJE, OCHOCHE",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 51,
      name: "EZA, SAM OKIBE",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 52,
      name: "OFIKWU, ADOYI C.Y",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 53,
      name: "KABIR, HALIMA",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 54,
      name: "STEPHEN, EDOKA S.",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 55,
      name: "ONAJI, AMEH TONY",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 56,
      name: "OGAH, PATRICK",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 57,
      name: "OGAH, AGBO",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 58,
      name: "ODUMU, BENSON",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 59,
      name: "OTOWO, HENRY O.",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 60,
      name: "AGBO, CHARLES",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 61,
      name: "ADANU, EMMANUEL",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 62,
      name: "EIMONYE, ENE",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 63,
      name: "ODU, EMMANUEL",
      position: "CHAIR, FINANCE",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 64,
      name: "IDOKO, DAVID",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 65,
      name: "OMALE, FRANK",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 66,
      name: "AKOGWU, JONAH",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 67,
      name: "ADUGBA, EMMANUEL",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 68,
      name: "OTOBO, AKOR",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 69,
      name: "OBOGO, JOSEPH",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 70,
      name: "IGOJI, OWOICHO",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 71,
      name: "UKWENYA, RAY I.",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 72,
      name: "ODEH, LEMUEL",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 73,
      name: "OKLOHO, JOHN",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 74,
      name: "EJEH, EMMANUEL",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 75,
      name: "AMEH, EMMANUEL",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 76,
      name: "MORGAN, MONDAY",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 77,
      name: "ONUH, STEVE",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 78,
      name: "ONAH, ISU S.",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 79,
      name: "ODEH, LUKE",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 80,
      name: "AMEH, SAMUEL O.",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 81,
      name: "OCHOGA, JOHNSON A.O",
      position: "CHAIR, SECURITY CMTE",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 82,
      name: "IYANYA, OJAY O.",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 83,
      name: "AGADA, JOHNSON",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 84,
      name: "AJOGI, EMMANUEL",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 85,
      name: "JONAH O. GODWIN",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 86,
      name: "OBANDE, ORINYA",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 87,
      name: "GARBA, A. INNOCENT",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 88,
      name: "ADEJO, EMMA USMAN",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 89,
      name: "AGBO J. MADAKI",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 90,
      name: "AKOR, EMMANUEL",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 91,
      name: "AMEH, JOHN AGABA",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 92,
      name: "ONAZI, SUNDAY O.",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 93,
      name: "EDEH, PAUL",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 94,
      name: "AJENU, EMMANUEL E.",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 95,
      name: "OCHEFU, YAKUBU",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
    {
      id: 96,
      name: "ODEH, A. OGBOLE",
      position: "MEMBER",
      img: "https://firebasestorage.googleapis.com/v0/b/ofukidoma1-8a9d7.appspot.com/o/TEAM%2Fdp.jpg?alt=media&token=cc34bb82-9633-47a3-8fbe-38249327300d",
      about: "",
      portfolio: "",
    },
  ];

  menu.forEach(function (obj) {
    db.collection("TEAM")
      .doc(`${obj.id}`)
      .set({
        name: obj.name,
        position: obj.position,
        img: obj.img,
        about: obj.about,
        portfolio: obj.portfolio,
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  });
})();