/* Website content: products, figures, milestones, dashboards, resources.
   Edit values here, keep the structure, then redeploy. */
window.VSK_CONTENT = {
 "SOURCES": {
  "nov26": {
   "t": "Sambhav monthly review, November 2026 (data as on 15 Sept to 20 Oct 2026)",
   "kind": "Programme review"
  },
  "sep26": {
   "t": "Sambhav monthly review, September 2026",
   "kind": "Programme review"
  },
  "aug26": {
   "t": "Sambhav monthly review, August 2026",
   "kind": "Programme review"
  },
  "jul26": {
   "t": "Sambhav monthly review, July 2026 (RRSA cycle table)",
   "kind": "Programme review"
  },
  "may26": {
   "t": "Sambhav monthly review, May 2026",
   "kind": "Programme review"
  },
  "apr26": {
   "t": "Sambhav monthly review, April 2026",
   "kind": "Programme review"
  },
  "mar26": {
   "t": "Sambhav monthly review, March 2026",
   "kind": "Programme review"
  },
  "golive": {
   "t": "VSK Go-Live Readiness and Technical Validation, October 2026",
   "kind": "Department submission"
  },
  "brief": {
   "t": "VSK Brief, UT of DNH\u0026DD, updated 15 January 2025",
   "kind": "Department brief"
  },
  "overview": {
   "t": "VSK DNH\u0026DD overview deck (v2)",
   "kind": "Programme overview"
  },
  "master": {
   "t": "DNH\u0026DD Delivery Master Sheet: scope of work, bots and dashboards register",
   "kind": "Delivery register"
  },
  "sandeshFLN": {
   "t": "Impact Sandesh, May 2026: FLN assessment on SBA 2.0",
   "kind": "Impact story"
  },
  "sandeshMIS": {
   "t": "Impact Sandesh, July 2026: MIS, one source of truth",
   "kind": "Impact story"
  },
  "pgi": {
   "t": "DIET DNH\u0026DD public post and newspaper coverage of PGI 2025-26 (July 2026)",
   "kind": "Public announcement"
  },
  "indiacode": {
   "t": "The Dadra and Nagar Haveli and Daman and Diu (Merger of Union Territories) Act, 2019 (Act 44 of 2019), India Code",
   "kind": "Official",
   "url": "https://www.indiacode.nic.in/handle/123456789/13079"
  },
  "census": {
   "t": "District areas as published for the UT (Daman 72 sq km, Diu 40 sq km, total 603 sq km)",
   "kind": "Reference"
  },
  "geo": {
   "t": "District boundaries: open India districts GeoJSON (udit-001/india-maps-data), simplified",
   "kind": "Map data"
  },
  "rvsk": {
   "t": "RVSK 6A integration status as confirmed by the VSK team, November 2026",
   "kind": "Programme confirmation"
  }
 },
 "UT": {
  "schools": "410",
  "schoolsNote": "as on 15 Sept 2026",
  "schoolsSrc": "nov26",
  "students": "1,47,042",
  "studentsNote": "Grades KG to 12, Sept 2026",
  "teachers": "5,296",
  "ptr": "28",
  "districts": [
   {
    "id": "dnh",
    "name": "Dadra and Nagar Haveli",
    "short": "DNH",
    "schools": 328,
    "enrol": "1,03,874",
    "ptr": 28,
    "blocks": "Silvassa and Khanvel",
    "nas": "Around the national average",
    "pgid": "31st of 784 districts",
    "area": "491 sq km",
    "hq": "Silvassa"
   },
   {
    "id": "daman",
    "name": "Daman",
    "short": "Daman",
    "schools": 61,
    "enrol": "35,091",
    "ptr": 29,
    "blocks": "Daman",
    "nas": "Within the top 50 districts",
    "pgid": "54th of 784 districts",
    "area": "72 sq km",
    "hq": "Daman, home of the VSK at Shiksha Sadan, Moti Daman"
   },
   {
    "id": "diu",
    "name": "Diu",
    "short": "Diu",
    "schools": 21,
    "enrol": "7,521",
    "ptr": 24,
    "blocks": "Diu",
    "nas": "Consistently within the top 10",
    "pgid": "1st of 784 districts",
    "area": "40 sq km",
    "hq": "Diu"
   }
  ]
 },
 "MILESTONES": [
  {
   "v": "2nd",
   "l": "in India on PGI 2025-26",
   "p": "Announced July 2026",
   "go": "journey",
   "src": "pgi"
  },
  {
   "v": "100%",
   "l": "first-time login on MIS, State to School",
   "p": "July 2026",
   "go": "product-mis",
   "src": "sandeshMIS"
  },
  {
   "v": "99.32%",
   "l": "RRSA endline data captured on SBA 2.0",
   "p": "March 2026",
   "go": "product-pragati",
   "src": "sep26"
  },
  {
   "v": "3 of 6",
   "l": "6A pillars integrated with RVSK",
   "p": "November 2026",
   "go": "journey",
   "src": "rvsk"
  },
  {
   "v": "21",
   "l": "dashboards on the Integrated Dashboard Platform",
   "p": "October 2026",
   "go": "product-idp",
   "src": "master"
  },
  {
   "v": "7,500+",
   "l": "participants in 20+ training sessions",
   "p": "Up to October 2026",
   "go": "about",
   "src": "golive"
  }
 ],
 "PILLARS": [
  "Attendance",
  "Assessment",
  "Administration",
  "Accreditation",
  "Adaptive Learning",
  "Artificial Intelligence"
 ],
 "PILLAR_CLASS": {
  "Attendance": "pillar-Attendance",
  "Assessment": "pillar-Assessment",
  "Administration": "pillar-Administration",
  "Accreditation": "pillar-Accreditation",
  "Adaptive Learning": "pillar-Adaptive",
  "Artificial Intelligence": "pillar-AI"
 },
 "AUDIENCES": [
  "Students",
  "Teachers",
  "Head Masters",
  "Parents",
  "Officers"
 ],
 "RVSK": [
  {
   "a": "A1",
   "p": "Attendance",
   "tool": "Smart Attendance",
   "st": "Completed",
   "done": true,
   "note": "Version 2 data adds gender and social category."
  },
  {
   "a": "A2",
   "p": "Assessment",
   "tool": "Pragati (SBA 2.0)",
   "st": "Completed",
   "done": true,
   "note": "Committed by the UT at the CIET-NCERT CPD 3.0 workshop, 6 and 7 Aug 2026."
  },
  {
   "a": "A3",
   "p": "Administration",
   "tool": "MIS and UDISE+",
   "st": "Completed",
   "done": true,
   "note": "School, teacher and student registry data shared with RVSK."
  },
  {
   "a": "A4",
   "p": "Accreditation",
   "tool": "Tool to be identified",
   "st": "In progress",
   "done": false,
   "note": ""
  },
  {
   "a": "A5",
   "p": "Adaptive Learning",
   "tool": "Tool to be identified",
   "st": "In progress",
   "done": false,
   "note": ""
  },
  {
   "a": "A6",
   "p": "Artificial Intelligence",
   "tool": "Tool to be identified",
   "st": "In progress",
   "done": false,
   "note": ""
  }
 ],
 "DASHBOARDS": [
  {
   "n": "Registry Dashboard",
   "g": "Grades 1 to 12",
   "area": "Registry",
   "k": "Schools, teachers and students by management, location, medium, board, category and grade.",
   "u": "https://app.powerbi.com/view?r=eyJrIjoiY2U1NGRjZjAtYWY2MC00MDU2LTkzMGEtYjFhZDIyNGUwZjViIiwidCI6IjljNjhhODZhLTdjMjAtNDhiNC1iMzUyLTExN2RlOTU4MjYzYSJ9"
  },
  {
   "n": "Smart Attendance DNH \u0026 DD",
   "g": "Grades 1 to 12",
   "area": "Attendance",
   "k": "Schools that submitted attendance; teachers and students submitted and present; present percentage by grade.",
   "u": "https://app.powerbi.com/view?r=eyJrIjoiZGFlMDZlNjktMGI1ZS00YWIyLWFkNWUtZjdkNGIzYzEwOWNjIiwidCI6IjljNjhhODZhLTdjMjAtNDhiNC1iMzUyLTExN2RlOTU4MjYzYSJ9"
  },
  {
   "n": "Attendance Trend Dashboard",
   "g": "Grades 1 to 12",
   "area": "Attendance",
   "k": "Teacher and student marking and present rates over the last 30, 15, 7 and 1 days; top and bottom locations; school-level view.",
   "u": "https://app.powerbi.com/view?r=eyJrIjoiNWRiZWIxMjMtMzhiYS00MDM2LTk2ZDItMzNhZjNlYmRiYzE1IiwidCI6IjljNjhhODZhLTdjMjAtNDhiNC1iMzUyLTExN2RlOTU4MjYzYSJ9"
  },
  {
   "n": "Ramta Ramta Shikho Abhiyan (SBA)",
   "g": "Grades 1 and 2, Grades 3 to 8",
   "area": "Learning outcomes",
   "k": "Share of students at each Language and Maths level; division and story level by medium and district.",
   "u": "https://app.powerbi.com/view?r=eyJrIjoiYWQ3Y2EzMzYtNzQxMy00YzlmLWE0MTQtOTYyZDc5MWNjYzY2IiwidCI6IjljNjhhODZhLTdjMjAtNDhiNC1iMzUyLTExN2RlOTU4MjYzYSJ9"
  },
  {
   "n": "Bal Vanchan (Class 2)",
   "g": "Grade 2",
   "area": "Learning outcomes",
   "k": "Story reading levels and oral reading fluency for Class 2.",
   "u": "https://app.powerbi.com/view?r=eyJrIjoiYjFlMTNlNDItZjQ4My00NTI2LTk4YWEtZjI3ZDNkOGFkOGU4IiwidCI6IjljNjhhODZhLTdjMjAtNDhiNC1iMzUyLTExN2RlOTU4MjYzYSJ9"
  },
  {
   "n": "FLS Dashboard",
   "g": "Grade 3",
   "area": "Learning outcomes",
   "k": "Foundational Learning Study mock results for Grade 3.",
   "u": "https://app.powerbi.com/view?r=eyJrIjoiZDhjOWVkMTYtZjkxMi00OGMwLWFhM2QtY2RlNDYzZTg4MWY1IiwidCI6IjljNjhhODZhLTdjMjAtNDhiNC1iMzUyLTExN2RlOTU4MjYzYSJ9"
  },
  {
   "n": "Beyond Basics \u0026 Bridging",
   "g": "Grades 3 to 8",
   "area": "Learning outcomes",
   "k": "Learning levels for students who have cleared foundational levels, bridging to grade-level competencies.",
   "u": "https://app.powerbi.com/view?r=eyJrIjoiZDEzNTc3N2QtMmRkYS00MTI3LWE5YmItN2NiNDBmMWNhZmU1IiwidCI6IjljNjhhODZhLTdjMjAtNDhiNC1iMzUyLTExN2RlOTU4MjYzYSJ9"
  },
  {
   "n": "Swadhyay: Weekly Practice",
   "g": "Grades 1 to 12",
   "area": "Learning outcomes",
   "k": "Participation by school, grade, week and month; subject-wise and learning outcome-wise performance.",
   "u": "https://app.powerbi.com/view?r=eyJrIjoiMjgxNGM3ZjgtY2QwYi00N2Q3LTg5MmEtNGFkMzRjMGYyZDdmIiwidCI6IjljNjhhODZhLTdjMjAtNDhiNC1iMzUyLTExN2RlOTU4MjYzYSJ9"
  },
  {
   "n": "Shikshak Samarthya: Teaching Assistant",
   "g": "Grades 6 to 8",
   "area": "Teachers",
   "k": "Teachers participating; average videos, worksheets and lessons accessed; medium-wise users.",
   "u": "https://app.powerbi.com/view?r=eyJrIjoiZmQyNDk0YWMtZTIyMy00NzI1LTgxZjctMTA0MTczY2Y0NzU0IiwidCI6IjljNjhhODZhLTdjMjAtNDhiNC1iMzUyLTExN2RlOTU4MjYzYSJ9"
  },
  {
   "n": "NAS Mocks",
   "g": "Grades 3, 6 and 9",
   "area": "Assessment",
   "k": "Students in score bands 0–25%, 26–50%, 51–75% and 76–100% by medium, grade, management, block and cluster; school ranking.",
   "u": "https://app.powerbi.com/view?r=eyJrIjoiYjg2ZDRjM2EtMmNiYy00NjQ4LWEyZjQtMGZhZDdkMmNhZmMzIiwidCI6IjljNjhhODZhLTdjMjAtNDhiNC1iMzUyLTExN2RlOTU4MjYzYSJ9"
  },
  {
   "n": "NAS 2021 (Daman and Diu)",
   "g": "Grades 3, 5 and 8",
   "area": "Assessment",
   "k": "UT against the national average and other States and UTs, by class and subject; district averages.",
   "u": "https://app.powerbi.com/view?r=eyJrIjoiYWRiMTViODctMWNjZS00M2E4LWFlZTItYmJjZmMwM2NmMWFjIiwidCI6IjljNjhhODZhLTdjMjAtNDhiNC1iMzUyLTExN2RlOTU4MjYzYSJ9"
  },
  {
   "n": "NAS 2021 (DNH)",
   "g": "Grades 3, 5 and 8",
   "area": "Assessment",
   "k": "UT against the national average and other States and UTs, by class and subject; district averages.",
   "u": "https://app.powerbi.com/view?r=eyJrIjoiMDU4ZTM0NzYtOTAxNS00NjUxLThkMGUtZTNkYjdmNTg4MGNlIiwidCI6IjljNjhhODZhLTdjMjAtNDhiNC1iMzUyLTExN2RlOTU4MjYzYSJ9"
  },
  {
   "n": "CBT Dashboard",
   "g": "Grades 3 to 8",
   "area": "Assessment",
   "k": "Monthly computer-based test performance.",
   "u": "https://app.powerbi.com/view?r=eyJrIjoiOWI2OTk2MDYtNTE4YS00MzFiLThkMzMtNWRmNjFmOGEyNTlkIiwidCI6IjljNjhhODZhLTdjMjAtNDhiNC1iMzUyLTExN2RlOTU4MjYzYSJ9"
  },
  {
   "n": "School Exam Dashboard",
   "g": "Grades 9 to 12",
   "area": "Assessment",
   "k": "Students at Green, Yellow, Orange and Red levels by number of subjects passed, across streams, mediums, districts, blocks, clusters and schools; school ranking by pass percentage.",
   "u": "https://app.powerbi.com/view?r=eyJrIjoiMjdmOGZiZTgtZTYzOS00OGFlLTkyN2QtZDNmZjgxNWE2MDZhIiwidCI6IjljNjhhODZhLTdjMjAtNDhiNC1iMzUyLTExN2RlOTU4MjYzYSJ9"
  },
  {
   "n": "Performance Analysis (Grades 8, 10, 12)",
   "g": "Grades 8, 10 and 12",
   "area": "Assessment",
   "k": "Two years of exam results by district, block and school, built from a new data collection format (Sept to Oct 2026). In final review before rollout.",
   "u": "https://app.powerbi.com/view?r=eyJrIjoiNWI1ODU5NTYtMjA0Zi00NTkwLWJiNTktNzJjNDBkYjVhYmFlIiwidCI6IjljNjhhODZhLTdjMjAtNDhiNC1iMzUyLTExN2RlOTU4MjYzYSJ9",
   "review": true
  },
  {
   "n": "WLE Dashboard (FMB)",
   "g": "Grades 3 to 8",
   "area": "Field monitoring",
   "k": "We Learn English: schools, users, surveys submitted, weekly participation, classes conducted and not conducted by district and cluster.",
   "u": "https://app.powerbi.com/view?r=eyJrIjoiN2EyNzc4MjktMWI3OS00ZDZiLTgyODEtYmExMjcwNGZjYzkxIiwidCI6IjljNjhhODZhLTdjMjAtNDhiNC1iMzUyLTExN2RlOTU4MjYzYSJ9"
  },
  {
   "n": "UDISE School Infrastructure View",
   "g": "Grades 1 to 12",
   "area": "Registry",
   "k": "Student-school, teacher-school and pupil-teacher ratios; schools with science labs, ICT labs, playgrounds and boundary walls.",
   "u": "https://app.powerbi.com/view?r=eyJrIjoiZDk5Y2UyOGQtYTAwMy00N2IwLTk5MGYtMmQ0ZTc2ZjcyMjQ3IiwidCI6IjljNjhhODZhLTdjMjAtNDhiNC1iMzUyLTExN2RlOTU4MjYzYSJ9"
  },
  {
   "n": "APAAR Dashboard",
   "g": "All grades",
   "area": "Registry",
   "k": "APAAR IDs generated and percentage by district, block, cluster, management and grade.",
   "u": "https://app.powerbi.com/view?r=eyJrIjoiYmU0NWNjNDMtYzhhOS00OTFjLWJlYTItMWM1OGExNzVkMzkzIiwidCI6IjljNjhhODZhLTdjMjAtNDhiNC1iMzUyLTExN2RlOTU4MjYzYSJ9"
  },
  {
   "n": "Samarthya (NGO programmes)",
   "g": "All grades",
   "area": "Partners",
   "k": "For each NGO programme: training cycles, master trainers, teachers trained, students impacted and training days.",
   "u": "https://app.powerbi.com/view?r=eyJrIjoiZWQ2MTM1MzAtMDJhYi00YmY5LThjYTctYjE4NTBiMDFjZTA5IiwidCI6IjljNjhhODZhLTdjMjAtNDhiNC1iMzUyLTExN2RlOTU4MjYzYSJ9"
  },
  {
   "n": "MIS Dashboard",
   "g": "All levels",
   "area": "Registry",
   "k": "Target users and first-time login progress on the MIS portal.",
   "u": null,
   "internal": true
  },
  {
   "n": "UDISE+ API Health Dashboard",
   "g": "Grades 1 to 12",
   "area": "Registry",
   "k": "Checks that the UDISE+ to MIS sync is running and complete.",
   "u": null,
   "internal": true
  }
 ],
 "ATT": {
  "months": [
   "Jun",
   "Jul",
   "Aug",
   "Sep*",
   "Oct**"
  ],
  "studentMarking": [
   2,
   29,
   60,
   69,
   67
  ],
  "teacherMarking": [
   16,
   44,
   63,
   73,
   70
  ],
  "schoolsStudent": [
   29,
   95,
   98,
   97,
   99
  ],
  "schoolsTeacher": [
   54,
   92,
   96,
   94,
   98
  ],
  "studentPresent": [
   83,
   83,
   83,
   85,
   86
  ],
  "teacherPresent": [
   88,
   89,
   90,
   91,
   91
  ]
 },
 "RRSA": {
  "labels": [
   "BL AY1",
   "ML AY1",
   "EL AY1",
   "BL AY2",
   "ML AY2",
   "EL AY2",
   "BL AY3",
   "ML AY3",
   "EL AY3",
   "BL AY4",
   "ML AY4",
   "EL AY4",
   "BL AY5"
  ],
  "months": [
   "Nov 22",
   "Jan 23",
   "Mar 23",
   "Jul 23",
   "Dec 23",
   "Mar 24",
   "Jul 24",
   "Dec 24",
   "Mar 25",
   "Jul 25",
   "Nov 25",
   "Mar 26",
   "Jul 26"
  ],
  "story": [
   18.5,
   29,
   46.2,
   36.6,
   53.7,
   72.6,
   57,
   59.5,
   67.1,
   50.7,
   61.2,
   67.5,
   46.8
  ],
  "division": [
   10.6,
   19.4,
   37.8,
   33,
   50.4,
   71.8,
   51,
   59.3,
   65.7,
   49.1,
   58,
   65.1,
   44.4
  ]
 },
 "PGI": {
  "years": [
   "2022-23",
   "2023-24",
   "2024-25",
   "2025-26"
  ],
  "score": [
   586.6,
   592.2,
   683.2,
   723.8
  ]
 },
 "PRODUCTS": [
  {
   "slug": "smart-attendance",
   "name": "Smart Attendance",
   "kind": "ut",
   "type": "Chatbot",
   "tag": "Daily student and teacher attendance, marked on a phone in a few minutes.",
   "pillars": [
    "Attendance"
   ],
   "aud": [
    "Teachers",
    "Head Masters",
    "Officers"
   ],
   "status": {
    "label": "Live",
    "tone": "live",
    "note": "V1 launched across the UT. The mid-day meal tracker is live on the bot; its official UT launch is pending."
   },
   "link": "https://links.swiftchat.ai/bgpJsf",
   "need": "Before VSK, attendance for students and teachers stayed in school registers. Officers saw it weeks later, if at all, and nobody could tell which schools needed a call that day.",
   "flow": [
    "The teacher opens Smart Attendance on SwiftChat with their registered school and teacher details.",
    "They choose student attendance and pick the class. The student list comes from the school registry.",
    "They mark the students who are absent. Everyone else is recorded as present.",
    "The Head Master marks teacher attendance, with the reason for any leave.",
    "The mid-day meal count is recorded in the same bot, ideally before 12 noon.",
    "The submission reaches the Smart Attendance and Attendance Trend dashboards the same day."
   ],
   "roles": {
    "s": "Class teachers mark students. Head Masters mark teachers and the mid-day meal.",
    "r": "CRCs, BRCs, Education Officers and the VSK team check marking daily by district, block and school.",
    "a": "The VSK team and the IVRS operators call schools that are not marking. District and school-wise reports go to the SPD, ASPD and BRCs."
   },
   "feats": [
    [
     "Linked to the registry",
     "Classes and student names come from the school registry, so teachers do not type lists."
    ],
    [
     "Teacher leave with reasons",
     "Head Masters record why a teacher is away, not only that they are away."
    ],
    [
     "Mid-day meal in the same flow",
     "One bot covers attendance and meals, so schools have one daily habit instead of two."
    ],
    [
     "1, 7, 15 and 30-day views",
     "The trend dashboard shows top and bottom schools over each window, so follow-up is aimed, not general."
    ]
   ],
   "results": [
    {
     "v": "99%",
     "l": "of schools submitted student attendance",
     "p": "October 2026, partial month",
     "src": "nov26"
    },
    {
     "v": "2% to 67%",
     "l": "student marking submitted",
     "p": "June to October 2026",
     "src": "nov26"
    },
    {
     "v": "16% to 70%",
     "l": "teacher marking submitted",
     "p": "June to October 2026",
     "src": "nov26"
    },
    {
     "v": "86%",
     "l": "students present, of those marked",
     "p": "October 2026",
     "src": "nov26"
    }
   ],
   "resultNote": "Attendance here is counted as participation (marking submitted). Present rate is shown separately, as a share of those marked.",
   "chart": "attendance",
   "dash": [
    "Smart Attendance DNH \u0026 DD",
    "Attendance Trend Dashboard"
   ],
   "shots": [
    [
     "ch_mark",
     "Channel notice: mark attendance and meals before 12 noon"
    ],
    [
     "p_attn_en",
     "Attendance campaign poster (English)"
    ],
    [
     "p_attn_gu",
     "Attendance campaign poster (Gujarati)"
    ]
   ],
   "rvsk": "Attendance is integrated with RVSK. The version 2 data push adds gender and social category.",
   "demo": [
    {
     "label": "Open the bot",
     "msgs": [
      {
       "f": "bot",
       "t": "Namaste! Welcome to Smart Attendance, VSK DNH\u0026DD.\nWhat would you like to mark today?",
       "o": [
        "Student attendance",
        "Teacher attendance",
        "Mid-day meal"
       ]
      }
     ]
    },
    {
     "label": "Choose the class",
     "msgs": [
      {
       "f": "user",
       "t": "Student attendance"
      },
      {
       "f": "bot",
       "t": "Select the class.",
       "o": [
        "Class 3",
        "Class 4",
        "Class 5",
        "Class 6"
       ]
      },
      {
       "f": "user",
       "t": "Class 5"
      }
     ]
    },
    {
     "label": "Mark absentees",
     "msgs": [
      {
       "f": "bot",
       "t": "Class 5 has 32 students on the registry.\nSend the roll numbers of students who are absent, or tap All present.",
       "o": [
        "All present"
       ]
      },
      {
       "f": "user",
       "t": "Absent: 4, 17"
      }
     ]
    },
    {
     "label": "Confirm and submit",
     "msgs": [
      {
       "f": "bot",
       "t": "Present: 30   Absent: 2\nRoll 4 and roll 17 marked absent. Submit?",
       "o": [
        "Submit",
        "Edit"
       ]
      },
      {
       "f": "user",
       "t": "Submit"
      }
     ]
    },
    {
     "label": "Saved",
     "msgs": [
      {
       "f": "bot",
       "t": "Attendance saved for Class 5. Thank you!\nIt will show on the Smart Attendance dashboard.",
       "o": [
        "Mark another class",
        "Mid-day meal"
       ]
      }
     ]
    }
   ],
   "related": [
    "crm-ivrs",
    "idp",
    "mis"
   ]
  },
  {
   "slug": "pragati",
   "name": "Pragati (SBA 2.0)",
   "kind": "ut",
   "type": "Chatbot",
   "tag": "School-based assessment on the phone: each child’s FLN level, recorded in the classroom.",
   "pillars": [
    "Assessment"
   ],
   "aud": [
    "Teachers",
    "Head Masters",
    "Officers"
   ],
   "status": {
    "label": "Live",
    "tone": "live",
    "note": "V2 launched. Used for the RRSA FLN midline (Nov 2025), endline (Mar 2026) and baseline 2026-27. The NIPUN field assessment flow is live; a formal NIPUN assessment has not yet been run through it."
   },
   "link": "https://links.swiftchat.ai/ht7Cex",
   "need": "The Ramta Ramta Shikho Abhiyan (RRSA) assesses foundational literacy and numeracy for Classes 3 to 8. Results used to be collected on paper and Excel sheets. Compiling them took weeks, errors crept in, and teachers spent hours on data entry.",
   "flow": [
    "The teacher opens the Pragati bot and enters the school code.",
    "They choose the assessment cycle, the class and the subject.",
    "They assess each child and record the level reached: Language from Letter to Story level, Maths up to Division.",
    "The bot shows how many children are still pending, so nobody is missed.",
    "Results reach the RRSA dashboard by district, block, medium and school.",
    "The department plans remediation, such as summer camps, from the endline data."
   ],
   "roles": {
    "s": "Teachers of Classes 3 to 8 assess and record each child.",
    "r": "CRCs and BRCs track pending students school by school; the VSK team validates levels.",
    "a": "The department and DIET use the results for remediation plans and teacher support."
   },
   "feats": [
    [
     "Three steps, no spreadsheets",
     "Enter the school code, choose class and exam, record and submit."
    ],
    [
     "A pending list for every class",
     "Teachers and CRCs see which children are still to be assessed."
    ],
    [
     "Same-cycle insight",
     "Data reaches the dashboard during the cycle, not weeks after it."
    ],
    [
     "Three cycles a year",
     "Baseline, midline and endline run on the same tool, so progress is comparable."
    ]
   ],
   "results": [
    {
     "v": "47,000+",
     "l": "students assessed, Classes 3 to 8",
     "p": "2025-26 cycles",
     "src": "sandeshFLN"
    },
    {
     "v": "99.32%",
     "l": "data collection, RRSA endline",
     "p": "March 2026",
     "src": "sep26"
    },
    {
     "v": "98.65%",
     "l": "data collection, RRSA midline",
     "p": "November 2025",
     "src": "sep26"
    },
    {
     "v": "96.70%",
     "l": "data collection, baseline 2026-27",
     "p": "as on 15 Sept 2026",
     "src": "sep26"
    },
    {
     "v": "+17.0",
     "l": "points, Language at top level, baseline to endline",
     "p": "Jul 2025 to Mar 2026",
     "src": "apr26"
    },
    {
     "v": "+16.2",
     "l": "points, Maths at top level, baseline to endline",
     "p": "Jul 2025 to Mar 2026",
     "src": "apr26"
    }
   ],
   "quotes": [
    {
     "q": "BOT દ્વારા કામ કરવું વધુ સુગમ અને અસરકારક રહ્યું.",
     "gu": true,
     "en": "Working through the bot was easier and more effective.",
     "c": "Smt. P.J. Chudasama, GPS Vanakbara, Diu"
    },
    {
     "q": "User-friendly, reliable, smooth: efficient and convenient for filling the RRSA assessment.",
     "c": "Vaishali J. Damania, GUPS Model (E/M)"
    },
    {
     "q": "We can enter the data in very short time.",
     "c": "Charul Manubhai Patel, GUPS Model, Nani Daman"
    }
   ],
   "chart": "rrsa",
   "dash": [
    "Ramta Ramta Shikho Abhiyan (SBA)",
    "Bal Vanchan (Class 2)",
    "Beyond Basics \u0026 Bridging"
   ],
   "shots": [
    [
     "p_sba",
     "SBA 2.0 guide poster with QR code"
    ],
    [
     "teacherbot",
     "Assessment on the bot in a field session"
    ]
   ],
   "rvsk": "Assessment is integrated with RVSK, as committed by the UT at the CIET-NCERT CPD 3.0 workshop in August 2026.",
   "demo": [
    {
     "label": "Enter school code",
     "msgs": [
      {
       "f": "bot",
       "t": "Welcome to Pragati, School-Based Assessment 2.0.\nPlease enter your school code."
      },
      {
       "f": "user",
       "t": "26010xxxxxx"
      }
     ]
    },
    {
     "label": "Choose assessment",
     "msgs": [
      {
       "f": "bot",
       "t": "Select the assessment.",
       "o": [
        "RRSA Baseline 2026-27",
        "RRSA Midline"
       ]
      },
      {
       "f": "user",
       "t": "RRSA Baseline 2026-27"
      },
      {
       "f": "bot",
       "t": "Select class and subject.",
       "o": [
        "Class 4 · Language",
        "Class 4 · Maths"
       ]
      },
      {
       "f": "user",
       "t": "Class 4 · Language"
      }
     ]
    },
    {
     "label": "Record the level",
     "msgs": [
      {
       "f": "bot",
       "t": "Student 7 of 38\nWhat level did the child read at?",
       "o": [
        "Beginner",
        "Letter",
        "Word",
        "Paragraph",
        "Story"
       ]
      },
      {
       "f": "user",
       "t": "Paragraph"
      }
     ]
    },
    {
     "label": "Track pending",
     "msgs": [
      {
       "f": "bot",
       "t": "Saved. 36 of 38 students done.\n2 students pending in Class 4 Language.",
       "o": [
        "Next student",
        "View pending list"
       ]
      }
     ]
    },
    {
     "label": "Submit the class",
     "msgs": [
      {
       "f": "user",
       "t": "Next student"
      },
      {
       "f": "bot",
       "t": "All 38 students recorded for Class 4 Language. Thank you!\nResults will appear on the RRSA dashboard."
      }
     ]
    }
   ],
   "related": [
    "swadhyay",
    "idp",
    "shikshak-samarthya"
   ]
  },
  {
   "slug": "swadhyay",
   "name": "Swadhyay: Weekly Practice",
   "kind": "ut",
   "type": "Chatbot",
   "tag": "A short weekly quiz for students, with answer keys and remedial videos after every attempt.",
   "pillars": [
    "Assessment",
    "Adaptive Learning"
   ],
   "aud": [
    "Students",
    "Teachers"
   ],
   "status": {
    "label": "Launched · relaunch planned",
    "tone": "partial",
    "note": "V1 launched for Grades 1 to 12. In July 2026, weekly content was shared every Saturday for Grades 6 to 8 (English medium, Science and Maths). A relaunch with the department is planned."
   },
   "link": "https://links.swiftchat.ai/VvvcK1",
   "need": "Teachers had no simple way to see, week by week, which concepts students had not understood, both at their grade and at the prerequisite level below it.",
   "flow": [
    "The student opens Swadhyay on SwiftChat and confirms their school and class.",
    "They take the week’s quiz, built on at-grade and prerequisite concepts.",
    "They see their score with the answer key.",
    "Where an answer was wrong, the bot offers a remedial video.",
    "Teachers and officers see participation and learning outcome-wise results on the Swadhyay dashboard."
   ],
   "roles": {
    "s": "Students attempt the weekly quiz, at school or at home.",
    "r": "Teachers and HMs see class participation; officers see school and grade-wise patterns.",
    "a": "Teachers revisit weak learning outcomes; the VSK team shares participation in reviews."
   },
   "feats": [
    [
     "Two levels each week",
     "Questions check both at-grade and prerequisite concepts, aligned to the UT’s academic calendar."
    ],
    [
     "Answer keys and videos",
     "Every attempt ends with the correct answers and a remedial video."
    ],
    [
     "Learning outcome view",
     "The dashboard breaks results down by learning outcome, not only by marks."
    ],
    [
     "Week and month trends",
     "Participation is tracked by week and month for each school and grade."
    ]
   ],
   "story": {
    "title": "In class at GUPS Ringanwada, Daman",
    "img": "vp1",
    "d": "20 September 2024",
    "t": "When the Hon’ble Vice-President visited the Government Upper Primary School at Ringanwada, students were using the Weekly Practice chatbot in their classroom to revise and test themselves at their own pace.",
    "src": "brief"
   },
   "dash": [
    "Swadhyay: Weekly Practice"
   ],
   "shots": [
    [
     "vp2",
     "Students at the smart panel, GUPS Ringanwada (Sept 2024)"
    ]
   ],
   "demo": [
    {
     "label": "Start the quiz",
     "msgs": [
      {
       "f": "bot",
       "t": "Hi! This week’s Swadhyay quiz for Class 7 Maths is ready.\n10 questions · about 10 minutes",
       "o": [
        "Start quiz"
       ]
      },
      {
       "f": "user",
       "t": "Start quiz"
      }
     ]
    },
    {
     "label": "Answer questions",
     "msgs": [
      {
       "f": "bot",
       "t": "Q3. What is 3/4 of 20?",
       "o": [
        "A) 12",
        "B) 15",
        "C) 16",
        "D) 5"
       ]
      },
      {
       "f": "user",
       "t": "B) 15"
      }
     ]
    },
    {
     "label": "See the score",
     "msgs": [
      {
       "f": "bot",
       "t": "Quiz complete! You scored 7 out of 10.\nWell done on fractions."
      }
     ]
    },
    {
     "label": "Answer key and video",
     "msgs": [
      {
       "f": "bot",
       "t": "You missed Q6 and Q8 (decimals).\nHere is the answer key and a short video to revise."
      },
      {
       "f": "bot",
       "t": "Revise: Decimals on the number line (4 min)",
       "file": true
      }
     ]
    }
   ],
   "related": [
    "shikshak-samarthya",
    "pragati",
    "cg-math-practice"
   ]
  },
  {
   "slug": "shikshak-samarthya",
   "name": "Shikshak Samarthya: Teacher Assistant",
   "kind": "ut",
   "type": "Chatbot",
   "tag": "Lesson plans, videos and worksheets that help teachers teach at the right level.",
   "pillars": [
    "Adaptive Learning"
   ],
   "aud": [
    "Teachers"
   ],
   "status": {
    "label": "Launched · relaunch planned",
    "tone": "partial",
    "note": "V1 launched for Grades 6 to 8 (Maths, Science and Hindi). Tracked weekly in the July 2026 chatbot adoption drive; a relaunch is planned."
   },
   "link": "https://links.swiftchat.ai/8MeEsb",
   "need": "Most classrooms have children at different levels. Teachers need ready material for the grade-level concept and for the prerequisite concept underneath it, without searching across sources.",
   "flow": [
    "The teacher opens Shikshak Samarthya on SwiftChat.",
    "They choose the grade, subject and chapter or concept.",
    "The bot offers a lesson plan, a video and a worksheet for that concept.",
    "Material is available for grade-level and prerequisite concepts.",
    "Use is tracked on the Shikshak Samarthya dashboard by medium."
   ],
   "roles": {
    "s": "Teachers of Grades 6 to 8 request material for their next lesson.",
    "r": "HMs and CRCs see who is using the material; the dashboard shows averages per teacher.",
    "a": "Academic teams plan support where use is low; the VSK team runs refresher training."
   },
   "feats": [
    [
     "Grade-level and prerequisite",
     "Every concept comes with material for students who are behind."
    ],
    [
     "Three formats",
     "Lesson plan for the teacher, video for the class, worksheet for practice."
    ],
    [
     "Maths, Science, Hindi",
     "Covers Grades 6 to 8 in the three subjects."
    ],
    [
     "Usage visibility",
     "Average videos, worksheets and lessons accessed, by medium."
    ]
   ],
   "results": [
    {
     "v": "488",
     "l": "teachers trained in the chatbot adoption drive, across 2 centres",
     "p": "July 2026",
     "src": "jul26"
    }
   ],
   "dash": [
    "Shikshak Samarthya: Teaching Assistant"
   ],
   "demo": [
    {
     "label": "Choose grade",
     "msgs": [
      {
       "f": "bot",
       "t": "Namaste! I am your teaching assistant.\nWhich grade are you teaching?",
       "o": [
        "Grade 6",
        "Grade 7",
        "Grade 8"
       ]
      },
      {
       "f": "user",
       "t": "Grade 7"
      }
     ]
    },
    {
     "label": "Choose subject",
     "msgs": [
      {
       "f": "bot",
       "t": "Select the subject.",
       "o": [
        "Maths",
        "Science",
        "Hindi"
       ]
      },
      {
       "f": "user",
       "t": "Science"
      },
      {
       "f": "bot",
       "t": "Select the chapter.",
       "o": [
        "Nutrition in plants",
        "Heat",
        "Acids, bases and salts"
       ]
      },
      {
       "f": "user",
       "t": "Heat"
      }
     ]
    },
    {
     "label": "Pick the material",
     "msgs": [
      {
       "f": "bot",
       "t": "What do you need for ‘Heat’?",
       "o": [
        "Lesson plan",
        "Video",
        "Worksheet"
       ]
      },
      {
       "f": "user",
       "t": "Lesson plan"
      }
     ]
    },
    {
     "label": "Get it in chat",
     "msgs": [
      {
       "f": "bot",
       "t": "Lesson plan: Heat (Grade 7, 40 minutes)",
       "file": true
      },
      {
       "f": "bot",
       "t": "There is also a prerequisite plan on temperature for students who need it.",
       "o": [
        "Prerequisite plan",
        "Worksheet"
       ]
      }
     ]
    }
   ],
   "related": [
    "swadhyay",
    "pragati",
    "cg-video-library"
   ]
  },
  {
   "slug": "field-monitoring",
   "name": "Field Monitoring Bot (Sarvekshan)",
   "kind": "ut",
   "type": "Chatbot",
   "tag": "Digital surveys and school visit forms for BRCs, CRCs and BRPs, with results the same day.",
   "pillars": [
    "Administration"
   ],
   "aud": [
    "Officers",
    "Teachers"
   ],
   "status": {
    "label": "Launched · relaunch awaiting approval",
    "tone": "partial",
    "note": "V1 launched for the We Learn English (WLE), DBT and SLD surveys. A relaunch with a new School Field Visit Observation form is built, demonstrated to DIET, and awaits department approval."
   },
   "link": "https://links.swiftchat.ai/CgKWn0",
   "need": "Field surveys and school visit notes were filled on paper and reached the UT office late, so the department could not see which programmes were actually running in classrooms that week.",
   "flow": [
    "The department designs the survey or visit form with the VSK team.",
    "The BRC, CRC or BRP opens the Field Monitoring Bot on SwiftChat.",
    "They pick the survey and the school.",
    "They answer the questions during or after the visit.",
    "Submissions appear on the dashboard by district, block and cluster.",
    "The department follows up where classes were not conducted."
   ],
   "roles": {
    "s": "BRCs, CRCs, BRPs and, for some surveys, teachers.",
    "r": "The VSK team and DIET review submissions weekly.",
    "a": "District and block officers act on schools where programmes are not running."
   },
   "feats": [
    [
     "Any survey, one bot",
     "WLE, DBT and SLD surveys ran on the same tool."
    ],
    [
     "Cluster-level visibility",
     "Results show classes conducted and not conducted by cluster."
    ],
    [
     "Ready for school visits",
     "A School Field Visit Observation form for BRCs, CRCs and BRPs is built and ready."
    ],
    [
     "Day-one plan",
     "The relaunch sequence is planned from the day approval is given."
    ]
   ],
   "dash": [
    "WLE Dashboard (FMB)"
   ],
   "demo": [
    {
     "label": "Pick a survey",
     "msgs": [
      {
       "f": "bot",
       "t": "Field Monitoring Bot\nWhich survey are you filling?",
       "o": [
        "School Field Visit",
        "We Learn English (weekly)"
       ]
      },
      {
       "f": "user",
       "t": "We Learn English (weekly)"
      }
     ]
    },
    {
     "label": "Choose school",
     "msgs": [
      {
       "f": "bot",
       "t": "Enter the school code."
      },
      {
       "f": "user",
       "t": "25020xxxxxx"
      },
      {
       "f": "bot",
       "t": "GUPS (sample school), Daman. Correct?",
       "o": [
        "Yes",
        "No"
       ]
      },
      {
       "f": "user",
       "t": "Yes"
      }
     ]
    },
    {
     "label": "Answer questions",
     "msgs": [
      {
       "f": "bot",
       "t": "Was the WLE class conducted this week in Class 5?",
       "o": [
        "Yes",
        "No"
       ]
      },
      {
       "f": "user",
       "t": "Yes"
      },
      {
       "f": "bot",
       "t": "How many students attended?"
      },
      {
       "f": "user",
       "t": "29"
      }
     ]
    },
    {
     "label": "Submit",
     "msgs": [
      {
       "f": "bot",
       "t": "Survey submitted. Thank you!\nIt will appear on the WLE dashboard by cluster."
      }
     ]
    }
   ],
   "related": [
    "idp",
    "crm-ivrs",
    "mis"
   ]
  },
  {
   "slug": "saajha",
   "name": "Saajha: Parent Assistant",
   "kind": "ut",
   "type": "Chatbot",
   "tag": "Answers parents’ questions about NEP 2020, the school system and education schemes.",
   "pillars": [
    "Administration"
   ],
   "aud": [
    "Parents"
   ],
   "status": {
    "label": "Live",
    "tone": "live",
    "note": "V1 launched for parents across the UT."
   },
   "link": "https://links.swiftchat.ai/Ra99Bg",
   "need": "Parents had no simple channel to understand the school system, NEP 2020 or the schemes their children are entitled to.",
   "flow": [
    "The parent opens Saajha on SwiftChat.",
    "They choose a topic or type a question in their own words.",
    "The bot answers in simple language.",
    "They can ask follow-up questions on schemes, the school system or their child’s stage of learning."
   ],
   "roles": {
    "s": "Parents ask questions.",
    "r": "The VSK team reviews common questions.",
    "a": "Answers are updated with the department when policies or schemes change."
   },
   "feats": [
    [
     "Plain answers",
     "Explains NEP 2020 and the school system without jargon."
    ],
    [
     "Schemes in one place",
     "Information on government education schemes for students."
    ],
    [
     "Always available",
     "Parents can ask at any time on their phone."
    ],
    [
     "Part of a parent channel",
     "Works alongside the Parent Connect Bot for school notices and e-PTM."
    ]
   ],
   "demo": [
    {
     "label": "Ask a question",
     "msgs": [
      {
       "f": "bot",
       "t": "Namaste! I am Saajha. I can help you understand your child’s school education.",
       "o": [
        "About NEP 2020",
        "School stages",
        "Schemes"
       ]
      },
      {
       "f": "user",
       "t": "What is NIPUN Bharat?"
      }
     ]
    },
    {
     "label": "Get an answer",
     "msgs": [
      {
       "f": "bot",
       "t": "NIPUN Bharat is the national mission for foundational literacy and numeracy. Its aim is that every child can read with understanding and do basic maths by the end of Class 3."
      }
     ]
    },
    {
     "label": "Follow up",
     "msgs": [
      {
       "f": "user",
       "t": "How can I help at home?"
      },
      {
       "f": "bot",
       "t": "Read with your child for 10 minutes every day, ask them to tell the story back, and practise counting during daily work like shopping."
      }
     ]
    }
   ],
   "related": [
    "parent-connect",
    "crm-ivrs"
   ]
  },
  {
   "slug": "parent-connect",
   "name": "Parent Connect Bot (e-PTM)",
   "kind": "generic",
   "type": "Chatbot",
   "tag": "Lets Head Masters send e-PTM invitations and school updates to parents.",
   "pillars": [
    "Administration"
   ],
   "aud": [
    "Head Masters",
    "Parents"
   ],
   "status": {
    "label": "Launched · content awaited",
    "tone": "partial",
    "note": "V1 launched. FAQ responses for parents are awaited from the department."
   },
   "need": "Parent-teacher meetings and school notices depended on notes sent home with children, so many parents did not hear about them in time.",
   "flow": [
    "The Head Master opens the Parent Connect Bot.",
    "They create an e-PTM invitation or a school update.",
    "Parents receive the date, time and details on their phone.",
    "Parents can also receive exam results and event notifications."
   ],
   "roles": {
    "s": "Head Masters create invitations and notices.",
    "r": "Schools see who has been informed.",
    "a": "Teachers meet parents with the agenda already shared."
   },
   "feats": [
    [
     "e-PTM invitations",
     "PTM date, time and agenda sent directly to parents."
    ],
    [
     "School updates",
     "Results and event notices in a familiar chat format."
    ]
   ],
   "demo": [
    {
     "label": "Create invitation",
     "msgs": [
      {
       "f": "bot",
       "t": "Parent Connect\nWhat would you like to send?",
       "o": [
        "e-PTM invitation",
        "School update"
       ]
      },
      {
       "f": "user",
       "t": "e-PTM invitation"
      },
      {
       "f": "bot",
       "t": "Enter class, date and time."
      },
      {
       "f": "user",
       "t": "Class 6, Saturday, 10:00 am"
      }
     ]
    },
    {
     "label": "Parents receive it",
     "msgs": [
      {
       "f": "bot",
       "t": "Sent to 41 parents of Class 6."
      },
      {
       "f": "bot",
       "t": "Parent view:\nDear parent, the PTM for Class 6 is on Saturday at 10:00 am at school. Please attend."
      }
     ]
    }
   ],
   "related": [
    "saajha"
   ]
  },
  {
   "slug": "read-along",
   "name": "Read Along by Google",
   "kind": "generic",
   "type": "Chatbot",
   "tag": "Oral reading fluency practice, where children read aloud and get feedback.",
   "pillars": [
    "Adaptive Learning",
    "Artificial Intelligence"
   ],
   "aud": [
    "Students"
   ],
   "status": {
    "label": "On SwiftChat Bot Store",
    "tone": "store",
    "note": "V1 launched. Available on the SwiftChat Bot Store."
   },
   "need": "Early-grade children need daily reading practice with feedback, which a single teacher cannot give to every child.",
   "flow": [
    "Open the SwiftChat Bot Store and choose Read Along.",
    "The child reads a story aloud.",
    "The tool listens and helps with words the child finds hard."
   ],
   "feats": [
    [
     "Reads with the child",
     "Speech-based feedback on reading aloud."
    ],
    [
     "Supports early grades",
     "Built for oral reading fluency in the early years."
    ]
   ],
   "related": [
    "free-stories",
    "word-hunt"
   ]
  },
  {
   "slug": "doubtnut",
   "name": "Doubtnut",
   "kind": "generic",
   "type": "Chatbot",
   "tag": "Doubt clearing for students: take a photo of a question and get a solution.",
   "pillars": [
    "Adaptive Learning",
    "Artificial Intelligence"
   ],
   "aud": [
    "Students"
   ],
   "status": {
    "label": "On SwiftChat Bot Store",
    "tone": "store",
    "note": "V1 launched. Available on the SwiftChat Bot Store."
   },
   "need": "Students get stuck on homework when no teacher is around.",
   "flow": [
    "Take a photo of the question.",
    "Send it in the chat.",
    "Get an explained solution."
   ],
   "feats": [
    [
     "Photo to solution",
     "Students do not need to type the question."
    ],
    [
     "Across subjects",
     "For academic questions across subjects and grades."
    ]
   ],
   "shots": [
    [
     "p_doubt",
     "Doubtnut chatbot poster, published on the VSK channel"
    ]
   ],
   "related": [
    "cg-math-practice",
    "cg-video-library"
   ]
  },
  {
   "slug": "cg-math-practice",
   "name": "CG Math Practice",
   "kind": "generic",
   "type": "Chatbot",
   "tag": "Self-practice in mathematics, at the student’s own pace.",
   "pillars": [
    "Adaptive Learning"
   ],
   "aud": [
    "Students"
   ],
   "status": {
    "label": "On SwiftChat Bot Store",
    "tone": "store",
    "note": "V1 launched. Available on the SwiftChat Bot Store."
   },
   "need": "Maths needs regular practice beyond class time.",
   "flow": [
    "Open CG Math Practice from the Bot Store.",
    "Choose a topic.",
    "Solve questions and see results."
   ],
   "feats": [
    [
     "Personalised practice",
     "Practice questions in mathematics for students."
    ],
    [
     "Anytime",
     "Practice at school or at home."
    ]
   ],
   "shots": [
    [
     "ch_math",
     "CG Math Practice update on the VSK WhatsApp channel"
    ]
   ],
   "related": [
    "swadhyay",
    "doubtnut"
   ]
  },
  {
   "slug": "cg-video-library",
   "name": "CG Video Library",
   "kind": "generic",
   "type": "Chatbot",
   "tag": "Curriculum-aligned learning videos for all grades and subjects.",
   "pillars": [
    "Adaptive Learning"
   ],
   "aud": [
    "Students",
    "Teachers"
   ],
   "status": {
    "label": "On SwiftChat Bot Store",
    "tone": "store",
    "note": "V1 launched. Available on the SwiftChat Bot Store."
   },
   "need": "Students and teachers need short explanations of concepts they can replay.",
   "flow": [
    "Open the Video Library.",
    "Choose grade and subject.",
    "Watch the video for the concept."
   ],
   "feats": [
    [
     "All grades",
     "Videos across grades and subjects."
    ]
   ],
   "related": [
    "shikshak-samarthya",
    "digital-class"
   ]
  },
  {
   "slug": "digital-class",
   "name": "Digital Class",
   "kind": "generic",
   "type": "Chatbot",
   "tag": "Digital textbooks and study material, in the chat.",
   "pillars": [
    "Adaptive Learning"
   ],
   "aud": [
    "Students",
    "Teachers"
   ],
   "status": {
    "label": "On SwiftChat Bot Store",
    "tone": "store",
    "note": "V1 launched. Available on the SwiftChat Bot Store."
   },
   "need": "Students need access to textbooks when they are away from school.",
   "flow": [
    "Open Digital Class.",
    "Choose class and subject.",
    "Open the textbook chapter."
   ],
   "feats": [
    [
     "Textbook library",
     "Textbooks and study material in one place."
    ]
   ],
   "related": [
    "cg-video-library"
   ]
  },
  {
   "slug": "mind-maze",
   "name": "Mind Maze",
   "kind": "generic",
   "type": "Chatbot",
   "tag": "A daily puzzle to build logical thinking.",
   "pillars": [
    "Adaptive Learning"
   ],
   "aud": [
    "Students"
   ],
   "status": {
    "label": "On SwiftChat Bot Store",
    "tone": "store",
    "note": "V1 launched. Available on the SwiftChat Bot Store."
   },
   "need": "Problem-solving grows with regular, short challenges.",
   "flow": [
    "Open Mind Maze.",
    "Solve the day’s puzzle.",
    "Come back tomorrow for a new one."
   ],
   "feats": [
    [
     "Daily cognitive puzzles",
     "Short puzzles for logic and problem-solving."
    ]
   ],
   "related": [
    "word-hunt",
    "spelling-bee"
   ]
  },
  {
   "slug": "free-stories",
   "name": "Free Stories and Rhymes",
   "kind": "generic",
   "type": "Chatbot",
   "tag": "Stories and rhymes in the child’s own language, to build a reading habit.",
   "pillars": [
    "Adaptive Learning"
   ],
   "aud": [
    "Students",
    "Parents"
   ],
   "status": {
    "label": "On SwiftChat Bot Store",
    "tone": "store",
    "note": "V1 launched. Available on the SwiftChat Bot Store."
   },
   "need": "Young children need easy, enjoyable material to read and listen to.",
   "flow": [
    "Open the Free Stories chatbot.",
    "Pick a language and a story.",
    "Read together at school or home."
   ],
   "feats": [
    [
     "Stories and rhymes",
     "Interactive stories for early language development."
    ],
    [
     "In the child’s language",
     "Promoted on the VSK channel in Gujarati and English."
    ]
   ],
   "shots": [
    [
     "p_stories",
     "Free Stories chatbot poster"
    ],
    [
     "p_stories2",
     "Free Stories greeting poster (Gujarati)"
    ]
   ],
   "related": [
    "read-along",
    "word-hunt"
   ]
  },
  {
   "slug": "word-hunt",
   "name": "Word Hunt",
   "kind": "generic",
   "type": "Chatbot",
   "tag": "A word game to build English and Hindi vocabulary.",
   "pillars": [
    "Adaptive Learning"
   ],
   "aud": [
    "Students"
   ],
   "status": {
    "label": "On SwiftChat Bot Store",
    "tone": "store",
    "note": "V1 launched. Available on the SwiftChat Bot Store."
   },
   "need": "Vocabulary grows faster when practice feels like play.",
   "flow": [
    "Open Word Hunt.",
    "Find the hidden words.",
    "Learn their meanings."
   ],
   "feats": [
    [
     "Gamified vocabulary",
     "For English and Hindi, for all age groups."
    ]
   ],
   "related": [
    "spelling-bee",
    "free-stories"
   ]
  },
  {
   "slug": "spelling-bee",
   "name": "Spelling Bee",
   "kind": "generic",
   "type": "Chatbot",
   "tag": "Spelling practice in a competition-style challenge.",
   "pillars": [
    "Adaptive Learning"
   ],
   "aud": [
    "Students"
   ],
   "status": {
    "label": "On SwiftChat Bot Store",
    "tone": "store",
    "note": "V1 launched. Available on the SwiftChat Bot Store."
   },
   "need": "Spelling improves with short, regular practice.",
   "flow": [
    "Open Spelling Bee.",
    "Listen to the word.",
    "Spell it and see if you are right."
   ],
   "feats": [
    [
     "Spelling challenges",
     "English spelling practice in a contest style."
    ]
   ],
   "shots": [
    [
     "p_spell",
     "Spelling Bee challenge poster"
    ]
   ],
   "related": [
    "word-hunt",
    "read-along"
   ]
  },
  {
   "slug": "mis",
   "name": "MIS: School, Teacher and Student Registry",
   "kind": "platform",
   "type": "Portal",
   "tag": "One registry for every school, teacher and student in the UT, kept in step with UDISE+.",
   "pillars": [
    "Administration"
   ],
   "aud": [
    "Officers",
    "Head Masters",
    "Teachers"
   ],
   "status": {
    "label": "Live · v2.1.1",
    "tone": "live",
    "note": "MIS v2.1.1 deployed with UDISE+ API integration. Full student data sync with UDISE+ is being completed."
   },
   "need": "School, teacher and student records were spread across files and offices, and numbers did not always match UDISE+. Chatbots and dashboards need one clean registry underneath them.",
   "flow": [
    "School, teacher and student data comes in from UDISE+ through the API.",
    "Head Masters log in and check their school profile.",
    "The UDISE+ Differential module highlights where MIS and UDISE+ data do not match.",
    "Schools correct their records; officers track pending schools.",
    "The clean registry feeds every chatbot and dashboard."
   ],
   "roles": {
    "s": "Head Masters and MIS coordinators keep school, teacher and student records current.",
    "r": "CRCs, BRCs and the State MIS team review pending schools weekly.",
    "a": "The VSK team and the Nodal Officer follow up and plan data cleaning by phase."
   },
   "modules": [
    "School Management",
    "Teacher Management (TIMS)",
    "Student Management",
    "UDISE+ Differential",
    "User Management"
   ],
   "feats": [
    [
     "Five modules",
     "School, Teacher (TIMS), Student, UDISE+ Differential and User Management."
    ],
    [
     "Role-based access",
     "Permissions by role keep data secure at each of the five levels."
    ],
    [
     "Mismatch alerts",
     "The Differential module shows MIS and UDISE+ differences as they happen."
    ],
    [
     "Feeds the system",
     "The registry flows into chatbots and dashboards, so names and classes are right everywhere."
    ]
   ],
   "results": [
    {
     "v": "100%",
     "l": "first-time login at State, District, Block, Cluster and School level",
     "p": "July 2026",
     "src": "sandeshMIS"
    },
    {
     "v": "45% to 100%",
     "l": "first-time login since launch",
     "p": "Dec 2025 to Jul 2026",
     "src": "sandeshMIS"
    },
    {
     "v": "500+",
     "l": "users trained across the UT",
     "p": "2025-26",
     "src": "sandeshMIS"
    },
    {
     "v": "427 to 421",
     "l": "schools after registry rationalisation",
     "p": "March 2026",
     "src": "mar26"
    }
   ],
   "quotes": [
    {
     "q": "A unified MIS gives us a reliable source of truth, which is essential to address the UT’s unique challenges and enable timely decision-making across the system.",
     "c": "Shri Vishal Patel, Nodal Officer, VSK DNH\u0026DD"
    }
   ],
   "dash": [
    "Registry Dashboard",
    "MIS Dashboard",
    "UDISE+ API Health Dashboard"
   ],
   "shots": [
    [
     "mis",
     "MIS portal navigation (screenshot)"
    ],
    [
     "misorient",
     "MIS orientation for officers"
    ]
   ],
   "rvsk": "Administration data from MIS and UDISE+ is integrated with RVSK.",
   "next": [
    "Data cleaning in phases: 50% of schools, then the remaining 50%, then teacher and student records.",
    "Teacher and student transfer workflows with automatic transfer certificate generation (planned).",
    "Full UDISE+ student sync for complete visibility in MIS."
   ],
   "related": [
    "idp",
    "smart-attendance",
    "crm-ivrs"
   ]
  },
  {
   "slug": "idp",
   "name": "Integrated Dashboard Platform (IDP 1.0)",
   "kind": "platform",
   "type": "Dashboard platform",
   "tag": "Every VSK dashboard in one place, with access set by role and location.",
   "pillars": [
    "Administration",
    "Assessment",
    "Attendance"
   ],
   "aud": [
    "Officers",
    "Head Masters"
   ],
   "status": {
    "label": "Live",
    "tone": "live",
    "note": "Launched UT-wide in August 2026. Field refresher for the ASPD, EOs, BRCs and CRCs held on 9 Oct 2026."
   },
   "need": "Dashboards had grown one by one, each with its own link. Officers needed a single window, and each officer needed to see their own district, block or cluster.",
   "flow": [
    "Officers sign in to IDP once.",
    "Row-level and role-based security shows each person the data for their area.",
    "They open any dashboard: attendance, learning outcomes, exams, registry or programmes.",
    "They filter down to district, block, cluster and school.",
    "Findings go into monthly reviews and school follow-up lists."
   ],
   "roles": {
    "s": "Chatbots, MIS and data collection formats supply the data.",
    "r": "UT, district, block and cluster officers review dashboards for their area.",
    "a": "Officers name schools for follow-up; the SPD reviews progress monthly."
   },
   "feats": [
    [
     "Single window",
     "All dashboards behind one sign-in."
    ],
    [
     "Security by role and area",
     "Row-level and role-based security for each user."
    ],
    [
     "Automated pipeline",
     "Duplicate and error checks; attendance refreshed weekly, exams and RRSA per cycle."
    ],
    [
     "Built for reviews",
     "Used in monthly reviews and the district-wise attendance reports."
    ]
   ],
   "results": [
    {
     "v": "21",
     "l": "dashboards in the register",
     "p": "October 2026",
     "src": "master"
    },
    {
     "v": "410",
     "l": "schools with data collected and cleaned",
     "p": "October 2026",
     "src": "golive"
    },
    {
     "v": "~150",
     "l": "indicators tracked from the school data collection",
     "p": "2026",
     "src": "golive"
    }
   ],
   "dashAll": true,
   "shots": [
    [
     "pgidash",
     "PGI 2.0 performance view (screenshot)"
    ],
    [
     "vskwall",
     "Dashboards on the VSK video wall"
    ]
   ],
   "related": [
    "mis",
    "smart-attendance",
    "pragati"
   ]
  },
  {
   "slug": "crm-ivrs",
   "name": "CRM Support and IVRS Helpline",
   "kind": "platform",
   "type": "Support desk",
   "tag": "One point of contact for teachers, Head Masters and parents, by phone and chat.",
   "pillars": [
    "Administration"
   ],
   "aud": [
    "Teachers",
    "Head Masters",
    "Parents",
    "Officers"
   ],
   "status": {
    "label": "Live",
    "tone": "live",
    "note": "IVRS launched in December 2024. Run by two Data Entry Operators assigned by the department."
   },
   "need": "Teachers and Head Masters facing login problems, wrong registry details or failed submissions had nowhere single to go, and the department had no record of what was going wrong.",
   "flow": [
    "A teacher, HM or parent calls the IVRS line or raises an issue.",
    "The CRM operators log the issue and its status.",
    "Common issues are fixed on the call; others go to the data or product team.",
    "Operators also call schools that are not marking attendance.",
    "Patterns from calls feed back into training and product fixes."
   ],
   "roles": {
    "s": "Teachers, HMs and parents report issues.",
    "r": "Two Data Entry Operators log, track and resolve issues.",
    "a": "The VSK team fixes root causes and briefs the department."
   },
   "feats": [
    [
     "Problem resolution",
     "Bot login, registry discrepancies, attendance submission errors, dashboard access and device issues."
    ],
    [
     "Information sharing",
     "Circulars, assessment schedules, training dates and parent communication."
    ],
    [
     "Outbound follow-up",
     "Operators call schools that are not marking attendance."
    ],
    [
     "A record of issues",
     "Every call is logged, so repeated problems are visible."
    ]
   ],
   "results": [
    {
     "v": "615",
     "l": "outbound calls to schools",
     "p": "Sept to Oct 2026",
     "src": "nov26"
    },
    {
     "v": "266",
     "l": "inbound calls handled",
     "p": "Sept to Oct 2026",
     "src": "nov26"
    }
   ],
   "related": [
    "smart-attendance",
    "mis"
   ]
  }
 ],
 "PHASES": [
  {
   "id": "p1",
   "name": "Foundations",
   "range": "2022 to 2024"
  },
  {
   "id": "p2",
   "name": "Building the stack",
   "range": "2025"
  },
  {
   "id": "p3",
   "name": "Adoption",
   "range": "Jan to Jun 2026"
  },
  {
   "id": "p4",
   "name": "Integration",
   "range": "Jul to Nov 2026"
  },
  {
   "id": "p5",
   "name": "Next",
   "range": "Planned"
  }
 ],
 "TIMELINE": [
  {
   "ph": "p1",
   "d": "Nov 2022",
   "t": "RRSA cycles start being tracked",
   "x": "The first recorded RRSA baseline: 18.5% of children at Story level and 10.6% at Division level. Every later cycle is measured against this.",
   "src": "jul26"
  },
  {
   "ph": "p1",
   "d": "Mar 2024",
   "t": "RRSA endline reaches its highest point",
   "x": "72.6% at Story level and 71.8% at Division level at the AY2 endline.",
   "src": "jul26"
  },
  {
   "ph": "p1",
   "d": "20 Sept 2024",
   "t": "Hon’ble Vice-President sees Weekly Practice in class",
   "x": "At GUPS Ringanwada, Daman, students were using the Weekly Practice chatbot during the visit.",
   "img": "vp1",
   "go": "product-swadhyay",
   "src": "brief"
  },
  {
   "ph": "p1",
   "d": "1 Oct 2024",
   "t": "Hon’ble Administrator reviews the VSK",
   "x": "The Administrator, with the Advisor and the Secretary (Education), reviewed live dashboards at the VSK in Shiksha Sadan, Moti Daman.",
   "img": "admin2",
   "src": "brief"
  },
  {
   "ph": "p1",
   "d": "Dec 2024",
   "t": "CRM and IVRS helpline launched",
   "x": "A single phone line for teachers, HMs and parents, run by two operators assigned by the department.",
   "go": "product-crm-ivrs",
   "src": "overview"
  },
  {
   "ph": "p2",
   "d": "Jan 2025",
   "t": "Eight solutions and twelve dashboards live",
   "x": "Swadhyay, Shikshak Samarthya, Smart Attendance, Pragati, Saajha, Field Monitoring Bot, MIS and IVRS in use, with dashboards from registry to school exams.",
   "src": "brief"
  },
  {
   "ph": "p2",
   "d": "Jul 2025",
   "t": "RRSA baseline, AY 2025-26",
   "x": "50.7% at Story level and 49.1% at Division level, Classes 3 to 8.",
   "src": "jul26"
  },
  {
   "ph": "p2",
   "d": "Nov 2025",
   "t": "First RRSA cycle on SBA 2.0",
   "x": "The midline moved from paper and Excel to the Pragati bot, with 98.65% data collection.",
   "go": "product-pragati",
   "src": "sep26"
  },
  {
   "ph": "p2",
   "d": "12 Dec 2025",
   "t": "MIS rolled out across the UT",
   "x": "MIS 1.8 rollout completed, bringing School, Teacher, Student, UDISE+ and User Management together.",
   "go": "product-mis",
   "src": "mar26"
  },
  {
   "ph": "p3",
   "d": "Mar 2026",
   "t": "Registry cleaned, MIS login at 97%",
   "x": "School registry rationalised from 427 to 421 schools. RRSA endline captured at 99.32% on SBA 2.0.",
   "src": "mar26"
  },
  {
   "ph": "p3",
   "d": "Apr 2026",
   "t": "Language +17.0 and Maths +16.2 points",
   "x": "Baseline to endline gains at the top level for Classes 3 to 8, from the second full cycle on SBA 2.0. IDP deployed for key stakeholders.",
   "go": "product-pragati",
   "src": "apr26"
  },
  {
   "ph": "p3",
   "d": "May 2026",
   "t": "Remediation from endline data",
   "x": "Summer camps from 11 to 29 May planned on RRSA endline results.",
   "src": "may26"
  },
  {
   "ph": "p3",
   "d": "Jun 2026",
   "t": "Attendance drive begins",
   "x": "Student marking on Smart Attendance stood at 2%. Daily follow-up with EOs, BRCs, CRCs and HMs started.",
   "go": "product-smart-attendance",
   "src": "sep26"
  },
  {
   "ph": "p4",
   "d": "Jul 2026",
   "t": "100% first-time login on MIS",
   "x": "Every intended user at State, District, Block, Cluster and School level logged in. Chatbots updated with AY 2026-27 grade progression.",
   "go": "product-mis",
   "src": "sandeshMIS"
  },
  {
   "ph": "p4",
   "d": "Jul 2026",
   "t": "PGI 2025-26: 2nd in India",
   "x": "The UT scored 723.8, up 40.6 points. Diu ranked 1st of 784 districts on PGI-D.",
   "img": "pgi",
   "src": "pgi"
  },
  {
   "ph": "p4",
   "d": "Aug 2026",
   "t": "IDP 1.0 launched UT-wide",
   "x": "Dashboards brought behind one sign-in. 99% of schools submitting teacher attendance and 100% submitting student attendance at least once in three weeks.",
   "go": "product-idp",
   "src": "aug26"
  },
  {
   "ph": "p4",
   "d": "6 and 7 Aug 2026",
   "t": "6A commitments at CIET-NCERT",
   "x": "At the 3rd Capacity Building Workshop on VSK and APAAR, the UT committed Administration and Assessment integration with RVSK.",
   "src": "aug26"
  },
  {
   "ph": "p4",
   "d": "Aug 2026",
   "t": "PARAKH 2024 competency plan with DIET",
   "x": "VSK and DIET began turning PARAKH 2024 competency findings into a Grade 6 to 8 intervention plan for 2026-27.",
   "src": "aug26"
  },
  {
   "ph": "p4",
   "d": "22 Sept 2026",
   "t": "Attendance version 2 data reaches RVSK",
   "x": "The data push, now with gender and social category, was confirmed.",
   "src": "nov26"
  },
  {
   "ph": "p4",
   "d": "Sept to Oct 2026",
   "t": "Two years of exam results in one view",
   "x": "Grade 8, 10 and 12 results collected through BRCs, CRCs and HMs, cleaned and analysed, and presented to the SPD.",
   "src": "nov26"
  },
  {
   "ph": "p4",
   "d": "9 Oct 2026",
   "t": "Field refresher and infrastructure survey",
   "x": "ASPD, EOs, BRCs and CRCs trained on IDP 1.0, chatbots and MIS. School infrastructure data collection launched the same day.",
   "src": "nov26"
  },
  {
   "ph": "p4",
   "d": "Oct 2026",
   "t": "Daily attendance reports and IVRS calls",
   "x": "District and school-wise reports every day from 12 Oct; IVRS calls to schools not marking regularly from 14 Oct.",
   "go": "product-smart-attendance",
   "src": "nov26"
  },
  {
   "ph": "p4",
   "d": "Oct 2026",
   "t": "Go-live technical validation",
   "x": "21 modules mapped to the RFP, MIS v2.1.1 deployed, 21 dashboards live and 410 schools’ data cleaned.",
   "src": "golive"
  },
  {
   "ph": "p4",
   "d": "Nov 2026",
   "t": "Attendance, Assessment and Administration on RVSK",
   "x": "Three of the six 6A pillars integrated with the Rashtriya Vidya Samiksha Kendra. The other three are in progress.",
   "src": "rvsk"
  },
  {
   "ph": "p5",
   "d": "Planned",
   "t": "RRSA midline 2026-27 on SBA 2.0",
   "x": "Content is being finalised; the window opens once the department approves it.",
   "plan": true
  },
  {
   "ph": "p5",
   "d": "Planned",
   "t": "Exam Performance Analysis rollout",
   "x": "Access for EOs, BRCs and HMs, with a school action list for low performers, after SPD sign-off.",
   "plan": true
  },
  {
   "ph": "p5",
   "d": "On approval",
   "t": "Field Monitoring Bot relaunch",
   "x": "School Field Visit Observation form for BRCs, CRCs and BRPs, with a day-one plan ready.",
   "plan": true,
   "go": "product-field-monitoring"
  },
  {
   "ph": "p5",
   "d": "Date awaited",
   "t": "Swift Shiksha Samman 2026",
   "x": "A UT recognition event for schools, teachers, CRCs and BRCs, scored on VSK data. The noting is approved and the KPI rubric is locked.",
   "plan": true
  },
  {
   "ph": "p5",
   "d": "Planned",
   "t": "Transfer module and full UDISE+ sync",
   "x": "Teacher and student transfer workflows with automatic TCs, and complete student data visibility in MIS.",
   "plan": true,
   "go": "product-mis"
  },
  {
   "ph": "p5",
   "d": "In progress",
   "t": "Remaining 6A pillars",
   "x": "Accreditation, Adaptive Learning and Artificial Intelligence integration with RVSK.",
   "plan": true
  }
 ],
 "GALLERY": [
  {
   "img": "vskwall",
   "c": "Live dashboards on the VSK video wall, Shiksha Sadan, Moti Daman",
   "d": "April 2026",
   "cat": "centre"
  },
  {
   "img": "vskroom",
   "c": "VSK overview presented at the centre",
   "d": "April 2026",
   "cat": "centre"
  },
  {
   "img": "vsk4",
   "c": "Dashboard review in front of the 3x3 video wall",
   "d": "2024",
   "cat": "centre"
  },
  {
   "img": "vsk6",
   "c": "VSK workstations and video wall",
   "d": "2024",
   "cat": "centre"
  },
  {
   "img": "vsk5",
   "c": "The VSK centre at Shiksha Sadan",
   "d": "2024",
   "cat": "centre"
  },
  {
   "img": "admin2",
   "c": "Hon’ble Administrator reviews live dashboards at the VSK",
   "d": "1 Oct 2024",
   "cat": "visits"
  },
  {
   "img": "admin1",
   "c": "Newspaper coverage of the Administrator’s visit to the VSK",
   "d": "Oct 2024",
   "cat": "visits"
  },
  {
   "img": "admin3",
   "c": "Newspaper coverage: VSK and visual recording studio visit at Shiksha Sadan",
   "d": "Oct 2024",
   "cat": "visits"
  },
  {
   "img": "vp1",
   "c": "Students at the smart panel during the Vice-President’s school visit, GUPS Ringanwada, Daman",
   "d": "20 Sept 2024",
   "cat": "schools"
  },
  {
   "img": "vp2",
   "c": "A student working on the smart panel, GUPS Ringanwada",
   "d": "20 Sept 2024",
   "cat": "schools"
  },
  {
   "img": "review",
   "c": "Review meeting on VSK progress",
   "d": "August 2026",
   "cat": "visits"
  },
  {
   "img": "vsk1",
   "c": "Review meeting in the VSK conference room",
   "d": "2024",
   "cat": "visits"
  },
  {
   "img": "vsk3",
   "c": "Officers’ meeting at the VSK",
   "d": "2024",
   "cat": "visits"
  },
  {
   "img": "misorient",
   "c": "MIS orientation for officers",
   "d": "2026",
   "cat": "training"
  },
  {
   "img": "teacherbot",
   "c": "A teacher records assessment on the bot during a field session",
   "d": "2026",
   "cat": "training"
  },
  {
   "img": "tr1",
   "c": "Training session for teachers and Head Masters",
   "d": "2024",
   "cat": "training"
  },
  {
   "img": "tr2",
   "c": "Teachers at a VSK chatbot orientation",
   "d": "2024",
   "cat": "training"
  },
  {
   "img": "tr3",
   "c": "District-level hands-on training",
   "d": "2024",
   "cat": "training"
  },
  {
   "img": "tr4",
   "c": "Teachers practising on SwiftChat during training",
   "d": "2024",
   "cat": "training"
  },
  {
   "img": "tr5",
   "c": "Orientation in the conference hall",
   "d": "2024",
   "cat": "training"
  },
  {
   "img": "tr6",
   "c": "Hands-on session with teachers",
   "d": "2024",
   "cat": "training"
  },
  {
   "img": "pgi",
   "c": "PGI 2025-26: the UT ranked 2nd in India; Diu 1st on PGI-D (public post by DIET DNH\u0026DD)",
   "d": "July 2026",
   "cat": "recognition"
  },
  {
   "img": "p_attn_en",
   "c": "Attendance campaign poster",
   "d": "Oct 2026",
   "cat": "channel"
  },
  {
   "img": "p_attn_gu",
   "c": "Attendance poster in Gujarati",
   "d": "Oct 2026",
   "cat": "channel"
  },
  {
   "img": "p_attn_hi",
   "c": "Recognising schools that improved most this week (Hindi)",
   "d": "Oct 2026",
   "cat": "channel"
  },
  {
   "img": "p_sba",
   "c": "SBA 2.0 guide poster",
   "d": "2026",
   "cat": "channel"
  },
  {
   "img": "p_gandhi",
   "c": "Gandhi Jayanti message to teachers",
   "d": "2 Oct 2026",
   "cat": "channel"
  },
  {
   "img": "p_doubt",
   "c": "Doubtnut chatbot poster",
   "d": "Oct 2026",
   "cat": "channel"
  }
 ],
 "GAL_CATS": [
  [
   "all",
   "All"
  ],
  [
   "centre",
   "VSK centre"
  ],
  [
   "visits",
   "Reviews and visits"
  ],
  [
   "training",
   "Training"
  ],
  [
   "schools",
   "In schools"
  ],
  [
   "recognition",
   "Recognition"
  ],
  [
   "channel",
   "Channel posters"
  ]
 ],
 "HIGHLIGHTS": [
  {
   "d": "Nov 2026",
   "ty": "Milestone",
   "t": "Three 6A pillars integrated with RVSK",
   "x": "Attendance, Assessment and Administration data now reaches the national VSK.",
   "go": "journey"
  },
  {
   "d": "Oct 2026",
   "ty": "Product",
   "t": "Daily attendance reports to the SPD, ASPD and BRCs",
   "x": "615 outbound IVRS calls to schools not marking attendance regularly.",
   "go": "product-smart-attendance"
  },
  {
   "d": "Oct 2026",
   "ty": "Training",
   "t": "IDP, chatbot and MIS refresher for the field cadre",
   "x": "ASPD, EOs, BRCs and CRCs trained on 9 Oct; Diu joined online.",
   "go": "product-idp"
  },
  {
   "d": "Oct 2026",
   "ty": "Communication",
   "t": "VSK WhatsApp channel crosses 2,100 members",
   "x": "2,148 members including teachers, HMs, BRCs and CRCs; posts in English, Hindi, Gujarati and Marathi.",
   "go": "resources"
  },
  {
   "d": "Jul 2026",
   "ty": "Milestone",
   "t": "PGI 2025-26: 2nd in India",
   "x": "Score up 40.6 points to 723.8. Diu ranked 1st among 784 districts.",
   "go": "journey"
  },
  {
   "d": "Jul 2026",
   "ty": "Milestone",
   "t": "Every MIS user logged in",
   "x": "100% first-time login across five levels, up from about 45% at launch.",
   "go": "product-mis"
  },
  {
   "d": "Apr 2026",
   "ty": "Product",
   "t": "RRSA endline completed on SBA 2.0",
   "x": "Language +17.0 and Maths +16.2 points from baseline, Classes 3 to 8.",
   "go": "product-pragati"
  }
 ],
 "GUIDES": {
  "g-attendance": {
   "title": "Smart Attendance: quick-start for teachers and Head Masters",
   "product": "smart-attendance",
   "aud": "Teachers, Head Masters",
   "lang": "English",
   "ver": "Nov 2026",
   "md": "# Smart Attendance: quick-start\n\nFor class teachers and Head Masters, UT of DNH\u0026DD.\n\n## Before you start\n- Use the mobile number registered for you in the school registry.\n- Open the Smart Attendance bot on SwiftChat: https://links.swiftchat.ai/bgpJsf\n\n## Mark student attendance (class teacher)\n1. Choose **Student attendance**.\n2. Select your class. The student list comes from the registry.\n3. Send the roll numbers of absent students, or choose **All present**.\n4. Check the summary and choose **Submit**.\n\n## Mark teacher attendance (Head Master)\n1. Choose **Teacher attendance**.\n2. Mark each teacher present or on leave.\n3. For leave, select the reason.\n4. Submit.\n\n## Mid-day meal\nRecord the meal count in the same bot. Mark attendance and meals before 12 noon every working day.\n\n## If something is wrong\n- A student or teacher is missing or the name is wrong: ask your Head Master to update the MIS registry.\n- The bot does not open or log you in: call the VSK IVRS helpline or tell your CRC.\n\nYour attendance appears on the Smart Attendance and Attendance Trend dashboards."
  },
  "g-pragati": {
   "title": "Pragati (SBA 2.0): recording RRSA assessments",
   "product": "pragati",
   "aud": "Teachers",
   "lang": "English",
   "ver": "Nov 2026",
   "md": "# Pragati (SBA 2.0): quick-start\n\nFor teachers of Classes 3 to 8 conducting RRSA assessments.\n\n## Open the bot\nPragati on SwiftChat: https://links.swiftchat.ai/ht7Cex (or scan the QR on the SBA 2.0 poster).\n\n## Three steps\n1. **Enter your school code.**\n2. **Choose the assessment and class**, then the subject (Language, Maths or English).\n3. **Record each child's level and submit.**\n   - Language: Beginner, Letter, Word, Paragraph, Story\n   - Maths: up to Division\n\n## Before you close\n- Check the pending count. Every child on the roll should be recorded.\n- Absent children can be assessed later within the window.\n\n## Where results go\nResults reach the RRSA dashboard by district, block, medium and school, and are used for remediation planning."
  },
  "g-swadhyay": {
   "title": "Swadhyay: weekly practice for students",
   "product": "swadhyay",
   "aud": "Students, Teachers",
   "lang": "English",
   "ver": "Nov 2026",
   "md": "# Swadhyay: Weekly Practice\n\n## For students\n1. Open Swadhyay on SwiftChat: https://links.swiftchat.ai/VvvcK1\n2. Confirm your school and class.\n3. Take this week's quiz.\n4. Read the answer key and watch the remedial video for questions you missed.\n\n## For teachers\n- Share the link with your class every week.\n- Check participation and learning outcome results on the Swadhyay dashboard.\n- Re-teach concepts where most students made mistakes."
  },
  "g-samarthya": {
   "title": "Shikshak Samarthya: getting lesson material",
   "product": "shikshak-samarthya",
   "aud": "Teachers",
   "lang": "English",
   "ver": "Nov 2026",
   "md": "# Shikshak Samarthya: Teacher Assistant\n\nFor teachers of Grades 6 to 8 (Maths, Science, Hindi).\n\n1. Open the bot: https://links.swiftchat.ai/8MeEsb\n2. Choose grade, subject and chapter.\n3. Pick a lesson plan, video or worksheet.\n4. For students who are behind, ask for the prerequisite material for the same concept.\n\nYour use is counted on the Shikshak Samarthya dashboard."
  },
  "g-fmb": {
   "title": "Field Monitoring Bot: filling a survey",
   "product": "field-monitoring",
   "aud": "Officers",
   "lang": "English",
   "ver": "Nov 2026",
   "md": "# Field Monitoring Bot (Sarvekshan)\n\nFor BRCs, CRCs and BRPs.\n\n1. Open the bot: https://links.swiftchat.ai/CgKWn0\n2. Choose the survey (for example, We Learn English weekly).\n3. Enter the school code and confirm the school.\n4. Answer each question and submit.\n\nNote: the School Field Visit Observation form will be activated when the department issues the relaunch note."
  },
  "g-mis": {
   "title": "MIS: first-time login and keeping records current",
   "product": "mis",
   "aud": "Head Masters, Officers",
   "lang": "English",
   "ver": "Nov 2026",
   "md": "# MIS: first-time login\n\n1. Use the login credentials sent to your official email.\n2. Sign in to the MIS portal and set a new password.\n3. Open **School Management** and check your school profile.\n4. Open **Teacher Management (TIMS)** and **Student Management** to check records.\n5. Look at **UDISE+ Differential** for any records that do not match UDISE+.\n\n## Did not receive credentials?\nTell your CRC or BRC, or call the VSK support desk. They will check your user in **User Management**."
  },
  "g-idp": {
   "title": "IDP: reading your area's dashboards",
   "product": "idp",
   "aud": "Officers, Head Masters",
   "lang": "English",
   "ver": "Nov 2026",
   "md": "# Integrated Dashboard Platform (IDP 1.0)\n\n1. Sign in with the credentials shared by the VSK team.\n2. You will see data for your own area (UT, district, block or cluster).\n3. Pick a dashboard: attendance, RRSA, exams, registry or programmes.\n4. Filter to block, cluster and school.\n5. Note the schools that need follow-up and share the list in your review meeting.\n\n## Reading attendance correctly\nMarking submitted is participation. Present rate is the share of those marked who were present. Read both."
  }
 },
 "RESOURCES": [
  {
   "id": "g-attendance",
   "type": "Guide",
   "title": "Smart Attendance: quick-start for teachers and Head Masters",
   "product": "smart-attendance",
   "aud": "Teachers, Head Masters",
   "lang": "English",
   "ver": "Nov 2026",
   "fmt": "md"
  },
  {
   "id": "g-pragati",
   "type": "Guide",
   "title": "Pragati (SBA 2.0): recording RRSA assessments",
   "product": "pragati",
   "aud": "Teachers",
   "lang": "English",
   "ver": "Nov 2026",
   "fmt": "md"
  },
  {
   "id": "g-swadhyay",
   "type": "Guide",
   "title": "Swadhyay: weekly practice for students",
   "product": "swadhyay",
   "aud": "Students, Teachers",
   "lang": "English",
   "ver": "Nov 2026",
   "fmt": "md"
  },
  {
   "id": "g-samarthya",
   "type": "Guide",
   "title": "Shikshak Samarthya: getting lesson material",
   "product": "shikshak-samarthya",
   "aud": "Teachers",
   "lang": "English",
   "ver": "Nov 2026",
   "fmt": "md"
  },
  {
   "id": "g-fmb",
   "type": "Guide",
   "title": "Field Monitoring Bot: filling a survey",
   "product": "field-monitoring",
   "aud": "Officers",
   "lang": "English",
   "ver": "Nov 2026",
   "fmt": "md"
  },
  {
   "id": "g-mis",
   "type": "Guide",
   "title": "MIS: first-time login and keeping records current",
   "product": "mis",
   "aud": "Head Masters, Officers",
   "lang": "English",
   "ver": "Nov 2026",
   "fmt": "md"
  },
  {
   "id": "g-idp",
   "type": "Guide",
   "title": "IDP: reading your area's dashboards",
   "product": "idp",
   "aud": "Officers, Head Masters",
   "lang": "English",
   "ver": "Nov 2026",
   "fmt": "md"
  },
  {
   "id": "r-dash",
   "type": "Data",
   "title": "Dashboard catalogue with KPIs and grades",
   "product": "idp",
   "aud": "Officers",
   "lang": "English",
   "ver": "Oct 2026",
   "fmt": "csv"
  },
  {
   "id": "r-story-fln",
   "type": "Story",
   "title": "Impact Sandesh: FLN assessment on SBA 2.0",
   "product": "pragati",
   "aud": "All",
   "lang": "English",
   "ver": "May 2026",
   "fmt": "md"
  },
  {
   "id": "r-story-mis",
   "type": "Story",
   "title": "Impact Sandesh: MIS, one source of truth",
   "product": "mis",
   "aud": "All",
   "lang": "English",
   "ver": "July 2026",
   "fmt": "md"
  },
  {
   "id": "r-p-sba",
   "type": "Poster",
   "title": "SBA 2.0 guide poster with QR",
   "product": "pragati",
   "aud": "Teachers",
   "lang": "Marathi",
   "ver": "2026",
   "fmt": "jpg",
   "img": "p_sba"
  },
  {
   "id": "r-p-attn",
   "type": "Poster",
   "title": "Every child, every teacher, every day: attendance",
   "product": "smart-attendance",
   "aud": "Teachers, Head Masters",
   "lang": "English",
   "ver": "Oct 2026",
   "fmt": "jpg",
   "img": "p_attn_en"
  },
  {
   "id": "r-p-attn-gu",
   "type": "Poster",
   "title": "Daily attendance poster",
   "product": "smart-attendance",
   "aud": "Teachers, Head Masters",
   "lang": "Gujarati",
   "ver": "Oct 2026",
   "fmt": "jpg",
   "img": "p_attn_gu"
  },
  {
   "id": "r-p-doubt",
   "type": "Poster",
   "title": "Doubtnut chatbot for all students",
   "product": "doubtnut",
   "aud": "Students",
   "lang": "English",
   "ver": "Oct 2026",
   "fmt": "jpg",
   "img": "p_doubt"
  },
  {
   "id": "r-p-stories",
   "type": "Poster",
   "title": "Free Stories chatbot",
   "product": "free-stories",
   "aud": "Students, Parents",
   "lang": "English",
   "ver": "Oct 2026",
   "fmt": "jpg",
   "img": "p_stories"
  },
  {
   "id": "r-p-spell",
   "type": "Poster",
   "title": "Spelling Bee challenge",
   "product": "spelling-bee",
   "aud": "Students",
   "lang": "English",
   "ver": "Oct 2026",
   "fmt": "jpg",
   "img": "p_spell"
  }
 ],
 "STORIES": {
  "r-story-fln": "# From the field: DNH\u0026DD's FLN assessment on SBA 2.0\n\n*Impact Sandesh, May 2026*\n\nThe Department of Education set a clear target for the RRSA FLN assessment across Classes 3 to 8: every child, every classroom. With the UT team alongside, teachers used SBA 2.0 (Pragati) and reached 100% of classrooms, assessing 47,000+ students with 99% data collection across the midline and endline cycles.\n\nFrom baseline to endline, the share of children at the top level rose by 17.0 points in Language, 16.2 points in Maths and 12.0 points in English. Children moved from Letter level to Story level, and towards Division in Maths.\n\nTeachers said it in their own words:\n\n- \"BOT દ્વારા કામ કરવું વધુ સુગમ અને અસરકારક રહ્યું.\" (Working through the bot was easier and more effective.) Smt. P.J. Chudasama, GPS Vanakbara, Diu\n- \"User-friendly, reliable, smooth: efficient and convenient for filling the RRSA assessment.\" Vaishali J. Damania, GUPS Model (E/M)\n- \"We can enter the data in very short time.\" Charul Manubhai Patel, GUPS Model, Nani Daman\n\nThe Excel sheet is gone. When a product respects a teacher's time, adoption follows on its own.",
  "r-story-mis": "# MIS: one UT, one source of truth\n\n*Impact Sandesh, July 2026*\n\nThe UT reached 100% first-time login on the MIS portal at every level, from the State office to each school.\n\n## The challenge\nAt launch only about 45% of schools had logged in. Around 242 schools were pending across DNH, Daman and Diu, and about 151 users reported missing credentials or access problems.\n\n## How the UT got there\n- **Direct follow-up:** calls to Head Masters, with CRCs and BRCs making sure every school in their area logged in.\n- **Monitoring and review:** a pending-schools list shared regularly, and weekly review meetings until every school was done.\n- **Capacity building:** manuals and guides on official groups, online and offline orientations, and a 2-hour MIS block in the TGT and PGT teacher training programme.\n\n## Why it matters\nOne clean registry of 421 verified schools moves the UT from collecting data to deciding with it.\n\n## Next\nData cleaning: 50% of schools in one quarter, the remaining 50% in the next, then teacher and student records.\n\n\"A unified MIS gives us a reliable source of truth, which is essential to address the UT's unique challenges and enable timely decision-making across the system.\" Shri Vishal Patel, Nodal Officer"
 },
 "FAQS": [
  [
   "I cannot log in to a chatbot. What should I do?",
   "Check that you are using the mobile number registered for you in the school registry. If it still fails, call the VSK IVRS helpline or tell your CRC. Login issues are the most common call the support desk handles."
  ],
  [
   "A student is missing from my class list, or a name is wrong.",
   "Class lists come from the MIS registry, which follows UDISE+. Ask your Head Master to correct the record in MIS. Changes made in UDISE+ reach the chatbots after the next registry sync."
  ],
  [
   "My attendance submission did not go through.",
   "Try again on a stable connection and check the summary screen before you submit. If the class still shows as not marked, call the IVRS helpline so the issue is logged and fixed."
  ],
  [
   "I cannot open a dashboard on IDP.",
   "IDP access is set by role and area. Ask the VSK team to check your user. You will only see data for your own district, block or cluster."
  ],
  [
   "What is the difference between ‘marking submitted’ and ‘present rate’?",
   "Marking submitted shows how many expected students or teachers had attendance recorded. Present rate shows how many of those recorded were present. VSK reports both."
  ],
  [
   "Who owns the data and the software?",
   "Full ownership of the solution and all student, teacher and system data lies with the Department of Education, DNH\u0026DD. IPR for the VSK chatbot toolkits is vested with the department in line with NDEAR."
  ]
 ]
};
