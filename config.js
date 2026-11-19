// config.js (Students edit only this file)
window.SITE_CONFIG = {
  pageTitle: "Academic Digital Twin Case Study | Student Showcase",
  homeUrl: "https://roadwayvr.com",

  hero: {
    profileImage: "assets/img/image1.jpg",

    // NEW: course code tag shown above the course project pill
    courseTag: "SMRTTECH 4SC3",

    // updated tagline text (big pill)
    tagline: "Course Project: Smart Cities and Communities",

    studentName: "Mahir Nasar",
    program: "B.Tech Automation / Engineering",
    university: "McMaster University, Canada",
    email: "mahir.nasar@mcmaster.com"
  },

  disclaimer: {
    short:
      "Academic project for a university course. Educational purposes only. Not an official city analysis, consultation, or endorsement.",
    long:
      "This website presents a student academic project created for coursework. Any analyses, results, and potential improvements are simulation-based and provided for educational purposes only. They do not represent official work, endorsement, or consultation for any city or agency.",
    videoOverlaySuggestion:
      "Academic Project · Educational Use Only · Not Official City Work"
  },

  theme: {
    heroBg: "#111111",
    heroText: "#ffffff",
    pageBg: "#f8fafc",
    accent: "#7c3aed"
  },

  dividers: {
    dividerBg: "#f9f9f9",
    dividerText: "#ffffff"
  },

  footer: {
	  footerBg: "#111111",
	  footerText: "#ffffff",
	  footerBorder: "#222222",
	
	  homeLinkText: "RoadwayVR",
	
	  templateCredit:
	    "This academic showcase template was developed by RoadwayVR.",
	
	  templateCreditLinkText:
	    "Learn more at RoadwayVR.com",
	
	  templateCreditUrl:
	    "https://roadwayvr.com"
  },

  intro: {
    projectTitleLabel: "Project Title",
    projectTitle: "Comparison of Human Driven and Computer Driven Vehicle Simulations",
    heroVideo: "assets/video/video.mp4",
    heroVideoPoster: "",
    heroVideoAlt: "Autoplay preview video (academic project)",
    videoCaption:
      "Autoplay preview (≈20 seconds): raw video → Traffic Simulation → Results"
  },

  caseStudy: {
    title: "Introduction",

    backgroundTitle: "Background",
    backgroundBullets: [
			"Vehicles flowrate is rapidly increasing.",
			"Introduction of FSD brings safety questions.",
			"The vehicles dominates research and infrastructure receives little attention.",
			"Desperate need to predict interactions of two vehicle types in todays infrastrucutre"
    ],

    problemTitle: "Problem Statement",
    problemBullets: [
			"Highway travel are hard to assess.",
			"3D asset creation is time-consuming.",
			"2D models lack immersion.",
			"Results are difficult to communicate."
    ],

    objectivesTitle: "Project Objectives",
    objectivesBullets: [
			"Simulate vehicle speed, signaling, and capacity in SUMO.",
			"Create vehicle models for each type.",
			"Create a realistic roadway network in SUMO.",
			"Present results in different styles through KPIs, figures, and a showcase website."
    ]
  },

  overview: {
    title: "Methodology",
    steps: [
      {
        title: "Step 1: Vehicle Movement and Signaling (SUMO Simulation)",
				text: "Build the road network.",
        image: "assets/img/image2.jpg"
      },
      {
				title: "Step 2: Vehicle Model Developement (SUMO)",
				text: "Create a vehicle model for HDV and CAV.",
        image: "assets/img/image3.jpg"
      },
      {
				title: "Step 3: Infrastructure Intervention (SUMO)",
				text: "Add an extra turn lane on northbound traffic",
        image: "assets/img/image4.jpg"
      },
      {
				title: "Step 4: Results & Communication (Figures + Showcase Website)",
				text: "Summarize results using figures, KPIs, and the showcase website.",
        image: "assets/img/image5.jpg"
      }
    ]
  },

  implementation: {
    title: "Methodology Steps (Demo Modules)",
    modules: [
      {
        title: "Module 1:Roadway network development (SUMO)",
        bullets: [
				  { text: "Build a simulated road network in SUMO with accurate road network design" },
          { text: "Design fixed turn signals and stops along the road." },
        ],
        image: "assets/img/image2.jpg"
      },
      {
        title: "Module 2: Vehicle Model Developement (SUMO)",
        bullets: [
          { text: "Create HDV and CAV models." },
          { text: "Implement individual simulations with both models" },
          { text: "Compare the results of the two simulations ." }
        ],
        image: "assets/img/image3.jpg"
      },
      {
        title: "Module 3: Infratstructure interventions",
        bullets: [
				  { text: "Added an extra lane for northbound traffic" },
          { text: "Ran the HDV simulation with updated road network" },
          { text: "Compare speed and flow density with intervention to measure infrastructure change." }
        ],
        image: "assets/img/image4.jpg"
      },
      {
        title: "Module 4: Results & Communication",
        bullets: [
          { text: "Dashboard or plot set: KPI cards, bar charts, and/or time series." },
          { text: "Scenario story: what changed, what improved, and what tradeoffs appeared." },
          { text: "Limitations + next steps: what data would strengthen confidence." }
        ],
        image: "assets/img/image5.jpg"
      }
    ]
  },

	results: {
			title: "Results & Potential Improvements",
			subtitle:
				"Vehicle simulation outputs across two scenarios showing speed, flow rate and traffic density. Results are for educational purposes only.",

			charts: {
				left: {
					title: "Scenario 1 — Human Driven Vehicles",
					src: "assets/img/image6.jpg",
					alt: "Scenario 1 Human driven vehicle flowrate"
				},
				right: {
					title: "Scenario 2 — Computer Driven Vehicles",
					src: "assets/img/image7.jpg",
					alt: "Scenario 2 Computer Driven Vehicle flowrate"
				}
			},

			discussionTitle: "Discussion",
			discussionBullets: [
				"Scenario 1 provides a baseline to demonstrate how traffic is currently affecting the city",
				"Scenario 2 applies a computer driven vehicle model to show how FSD vehicles would behave in the city",
				"Self driven vehicles perform marginally better than Human driven vehicles",
				"Intervention makes little difference to traffic density"
			]
		},

  team: {
    title: "Team & Acknowledgments",
    subtitle:
      "This section clarifies academic context, roles, tools, and sources. Clear attribution improves credibility and shows ethical data handling.",

    members: [
      { name: "Mahir Nasar", role: "Roadway network development and analysis" },
		{ name: "Aaron Upadhayay", role: "Roadway network development and analysis" },
		 { name: "Larry Tcherner", role: "Roadway network development and analysis" }
    ],

    acknowledgments: [
      "Workshop: Railway Engineering",
      "Institution: RoadwayVR University",
      "Instructor: Ahmad Mohammadi",
      "Tools: SUMO, Blender, Unity, Python"
    ],

    repoLabel: "Project Repository",
    repoUrl: "https://github.com/MahirNasar/MahirNasar.github.io"
  }
};
