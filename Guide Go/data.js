const gridData = [
  {
    id: 1,
    image: '../Guide GO Pictures/studAccDiv.jpg',
    title: 'ACCOUNTING',
    details:
      'Location: Main building, lower ground floor.\n\nFrom the canteen, proceed forward and turn left. Located between the textbook section and cashier.\n\nIts primary function is to oversee financial records, billing processes, and student account management.',
  },

  {
    id: 2,
    image: '../Guide GO Pictures/cashierOffice.jpg',
    title: 'CASHIER',
    details:
      'Location: Main building, lower ground floor.\n\nFrom the canteen, proceed forward and turn left. Located between the cashier and clinic.\n\nIts primary function is to facilitate payment transactions, including tuition fees, miscellaneous fees, and other financial obligations.',
  },

  {
    id: 3,
    image: '../Guide GO Pictures/collegeReg.jpg',
    title: 'COLLEGE REGISTRAR',
    details:
      'Location: Main building, lower ground floor.\n\nFrom the canteen, proceed straight across the quadrangle to reach the College Registrar.\n\nIts primary function is to manage and maintain student records, including enrollment, academic transcripts, and other official academic document specifically for college students.',
  },

  {
    id: 4,
    image: '../Guide GO Pictures/civilSecUnit.jpg',
    title: 'CIVIL SECURITY UNIT (CSU)',
    details:
      'Location: Main building, lower ground floor.\n\nLocated near Gate 4. It is immediately visible upon entering and is situated beside the entrance. Its front directly faces the quadrangle.',
  },

  {
    id: 5,
    image: '../Guide GO Pictures/textbookSec.jpg',
    title: 'TEXTBOOK SECTION',
    details:
      'Location: Main building, lower ground floor.\n\nLocated on the right side of the Accounting Office.\n\nIt serves as the designated area for the purchase of required textbooks.',
  },

  {
    id: 6,
    image: '../Guide GO Pictures/senHighOffice.jpg',
    title: 'SENIOR HIGH SCHOOL REGISTRAR',
    details:
      'Main building, lower ground floor.\n\nIt can also be accessed through Gate 4 for a more convenient entry. It is between the Civil Security Unit (CSU) and the College Registrar’s.\n\nThe Senior High School Registrar is responsible for managing student records, enrollment, and academic documentation specifically for senior high school students.',
  },

  {
    id: 7,
    image: '../Guide GO Pictures/eteeap.jpg',
    title: 'ETEEAP OFFICE',
    details:
      'Location: Main building, lower ground floor.\n\nIt is beside the canteen and directly across from the textbook area.\n\nThe ETEEAP Office is responsible for managing the Expanded Tertiary Education Equivalency and Accreditation Program (ETEEAP), which provides opportunities for individuals to earn a degree based on their work experience and prior learning.',
  },

  {
    id: 8,
    image: '../Guide GO Pictures/edpOffice.jpg',
    title: 'EDP / IT OFFICE',
    details:
      "Location: Main building, lower ground floor.\n\nStanding at the ground floor canteen and facing the college registrar, you will find the EDP/IT office on the left side of the quadrangle, beside the study hall.\n\nThis is where you can get your ID and It is a living, digital, or paper-based document that tracks a student's interests, skills, and career goals.",
  },

  {
    id: 9,
    image: '../Guide GO Pictures/univClinic.jpg',
    title: 'UNIVERSITY CLINIC',
    details:
      'Location: Main building, lower ground floor.\n\nLocated beside the College Registrar and is right across the Senior High School Registrar.\n\nIts primary function is to provide basic medical services, first aid, and health assistance to students and staff.',
  },

  {
    id: 10,
    image: '../Guide GO Pictures/collegeGuidance.jpg',
    title: 'COLLEGE GUIDANCE SERVICES CENTER',
    details:
      'Location: Main building, upper ground floor (Mezzanine).\n\nAccess using the stairs located near College Registrar. At the back of the chapel, you will find the College Guidance Office.\n\nIt is responsible for providing counseling services, academic advising, and support to students in their personal and academic development.',
  },

  {
    id: 11,
    image: '../Guide GO Pictures/chapel.jpg',
    title: 'CHAPEL',
    details:
      'Location: Main building, upper ground floor (Mezzanine).\n\nAccess using the stairs located near College Registrar.\n\nThe Chapel is a place of worship and spiritual reflection for students, faculty, and staff. It serves as a venue for religious services, ceremonies, and other spiritual activities within the university community.',
  },

  {
    id: 12,
    image: '../Guide GO Pictures/campMinistry.jpg',
    title: 'CAMPUS MINISTRY OFFICE',
    details:
      'Location: Main building, upper ground floor (Mezzanine).\n\nAccess using the stairs located near College Registrar, directly across from the Chapel.\n\nThe Campus Ministry Office is responsible for organizing and coordinating religious and spiritual activities on campus. It provides support and resources for students, faculty, and staff in their spiritual growth and development.',
  },

  {
    id: 13,
    image: '../Guide GO Pictures/imsOffice.jpg',
    title: 'IMS OFFICE',
    details:
      'Location: Main building, upper ground floor (Mezzanine).\n\nAccess using the stairs located near Gate 2.\n\n The IMS Office is responsible for managing and maintaining the university’s information management systems, including student records, academic data, and other administrative information.',
  },

  {
    id: 14,
    image: '../Guide GO Pictures/mainLib.jpg',
    title: 'LIBRARY',
    details:
      'Location: Main building, 3rd floor.\n\nFrom the canteen, turn right, then take the stairs or elevator and stop at the 3rd floor. After that, turn left and go straight.\n\nThis is where you can find digital materials maintained for reading, study, or research. It is usually a room or digital space where items are available to borrow or use on-site, often with staff support. Libraries can also refer to a specific set of published materials (e.g., a “library of classics”) or a collection of computer software code.',
  },

  {
    id: 15,
    image: '../Guide GO Pictures/deanOffice.jpg',
    title: "DEAN'S OFFICE (CCS)",
    details:
      'Location: Main building, 5th floor beside room 526.\n\nThis is where you get your assessment silp and It oversees academic policies, budgets, hiring, and curriculum. Additionally, it handles student services like advising, discipline, withdrawals, and graduation',
  },

  {
    id: 16,
    image: '../Guide GO Pictures/faculty.jpg',
    title: 'FACULTY ROOM (CCS)',
    details:
      'Location: Main building, 5th floor beside Dean\'s Office.\n\nThe Faculty Room is a designated space for faculty members to work, collaborate, and hold meetings. It serves as a common area for professors and instructors to discuss academic matters, share resources, and engage in professional development activities.',
  },

  {
    id: 17,
    image: '../Guide GO Pictures/psitsOffice.jpg',
    title: 'PSITS OFFICE',
    details:
      'Location: Main building, 5th floor beside room 540.\n\nPhilippine Society of Information Technology Students (PSITS) is a student body organization supporting students enrolled in BSIT main campus. Leading the students into an efficient academic and non academic journey. ',
  },

  {
    id: 18,
    image: '../Guide GO Pictures/scholarshipOffice.jpg',
    title: 'SCHOLARSHIP OFFICE',
    details:
      'Located inside the Gotianuy building\n(right across the new engineering building).\n\nOn the ground floor, the first window on the left side. Right after entering the building the scholarship office will be seen.\n\nQueries about the students scholarship will be entertained here.',
  },

  {
    id: 19,
    image: '../Guide GO Pictures/sao.jpg',
    title: 'STUDENT AFFAIR OFFICE (SAO)',
    details:
      'Location: Inside the Gotianuy building\n(right across the new engineering building).\n\nOn the ground floor, the second window on the left side.\n\nSupports students\' non-academic needs, fostering holistic development through campus activities, student leadership training, and welfare services.',
  },

  {
    id: 20,
    image: '../Guide GO Pictures/nstpcwtsOffice.jpg',
    title: 'NSTP OFFICE',
    details:
      'Location: Inside the Gotianuy building\n(right across the new engineering building).\n\nOn the ground floor, the last window on the left side. A big NSTP sign can be seen under its window.\n\nAll NSTP related queries will be entertained here.',
  },
];
