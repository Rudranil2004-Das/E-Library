import React, { useEffect, useState } from 'react';
import './BookList.css';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDept, setSelectedDept] = useState('All');

    useEffect(() => {
        const initialBooks = [
            {
                id: 1,
                dept: 'CSS',
                courseName: 'Digital Logic',
                title: 'Digital Logic and Computer Design',
                author: 'Morris Mano',
                ebookAvailable: true,
                link: 'https://www.bau.edu.jo/UserPortal/Us/erProfile/PostsAttach/43038_4306_1.pdf'
            },
            {
                id: 2,
                dept: 'CSS',
                courseName: 'Sustainability in Indian Knowledge System',
                title: 'Introduction to Indian Knowledge System: Concepts and Applications',
                author: 'Mahadevan, B., Bhat Vinayak Rajat, Nagendra Pavana R.N.',
                ebookAvailable: false,
                link: 'NA'
            },
            {
                id: 3,
                dept: 'CS',
                courseName: 'Artificial Intelligence',
                title: 'Artificial Intelligence: A Modern Approach',
                author: 'Stuart Russell, Peter Norvig',
                ebookAvailable: true,
                link: 'https://www.example.com/ai-modern-approach'
            },
            {
                id: 4,
                dept: 'IT',
                courseName: 'Database Systems',
                title: 'Database System Concepts',
                author: 'Abraham Silberschatz, Henry F. Korth, S. Sudarshan',
                ebookAvailable: false,
                link: 'NA'
            },
            {
                id: 5,
                dept: 'EE',
                courseName: 'Signals and Systems',
                title: 'Signals and Systems',
                author: 'Alan V. Oppenheim, Alan S. Willsky, with S. Hamid Nawab',
                ebookAvailable: true,
                link: 'https://www.example.com/signals-systems'
            },
            {
                id: 6,
                dept: 'EE',
                courseName: 'Control Systems',
                title: 'Modern Control Engineering',
                author: 'Ogata Katsuhiko',
                ebookAvailable: true,
                link: 'https://www.example.com/modern-control-engineering'
            },
            {
                id: 7,
                dept: 'ME',
                courseName: 'Fluid Mechanics',
                title: 'Fluid Mechanics: Fundamentals and Applications',
                author: ' Yunus A. Cengel, John M. Cimbala',
                ebookAvailable: true,
                link: 'https://www.example.com/fluid-mechanics'
            },
            {
                id: 8,
                dept: 'CS',
                courseName: 'Machine Learning',
                title: 'Pattern Recognition and Machine Learning',
                author: 'Christopher M. Bishop',
                ebookAvailable: true,
                link: 'https://www.microsoft.com/en-us/research/uploads/prod/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf'
            },
            {
                id: 9,
                dept: 'IT',
                courseName: 'Data Structures',
                title: 'Data Structures and Algorithms in Java',
                author: 'Robert Lafore',
                ebookAvailable: false,
                link: 'NA'
            },
            {
                id: 10,
                dept: 'IT',
                courseName: 'Web Development',
                title: 'Learning PHP, MySQL & JavaScript',
                author: 'Robin Nixon',
                ebookAvailable: true,
                link: 'https://www.example.com/learning-php-mysql-javascript'
            },
            {
                id: 11,
                dept: 'EE',
                courseName: 'Electrical Circuits',
                title: 'Introduction to Electric Circuits',
                author: 'James A. Svoboda, Richard C. Dorf',
                ebookAvailable: true,
                link: 'https://www.example.com/introduction-to-electric-circuits'
            },
            {
                id: 12,
                dept: 'CS',
                courseName: 'Computer Networks',
                title: 'Computer Networking: A Top-Down Approach',
                author: 'James Kurose, Keith Ross',
                ebookAvailable: true,
                link: 'https://www.example.com/computer-networking-a-top-down-approach'
            },
            {
                id: 13,
                dept: 'IT',
                courseName: 'Operating Systems',
                title: 'Operating System Concepts',
                author: 'Abraham Silberschatz, Peter B. Galvin',
                ebookAvailable: true,
                link: 'https://www.example.com/operating-system-concepts'
            },
            {
                id: 14,
                dept: 'EE',
                courseName: 'Digital Signal Processing',
                title: 'Signals and Systems: Theory and Applications',
                author: 'Alan V. Oppenheim, Alan S. Willsky',
                ebookAvailable: true,
                link: 'https://www.example.com/signals-and-systems-theory-and-applications'
            },
            {
                id: 15,
                dept: 'IT',
                courseName: 'Software Engineering',
                title: 'Software Engineering: A Practitioner\'s Approach',
                author: 'Roger S. Pressman',
                ebookAvailable: true,
                link: 'https://www.example.com/software-engineering-a-practitioners-approach'
            },
            {
                id: 16,
                dept: 'CS',
                courseName: 'Machine Learning',
                title: 'Pattern Recognition and Machine Learning',
                author: 'Christopher M. Bishop',
                ebookAvailable: true,
                link: 'https://www.example.com/pattern-recognition-and-machine-learning'
            },
            {
                id: 17,
                dept: 'EE',
                courseName: 'Control Systems',
                title: 'Modern Control Engineering',
                author: 'Ogata Katsuhiko',
                ebookAvailable: true,
                link: 'https://www.example.com/modern-control-engineering'
            },
            {
                id: 18,
                dept: 'CS',
                courseName: 'Artificial Intelligence',
                title: 'Artificial Intelligence: A Modern Approach',
                author: 'Stuart Russell, Peter Norvig',
                ebookAvailable: true,
                link: 'https://www.example.com/artificial-intelligence-a-modern-approach'
            },
            {
                id: 19,
                dept: 'IT',
                courseName: 'Data Science',
                title: 'Data Science for Business',
                author: 'Foster Provost, Tom Fawcett',
                ebookAvailable: true,
                link: 'https://www.example.com/data-science-for-business'
            },
            {
                id: 20,
                dept: 'EE',
                courseName: 'Electric Circuits',
                title: 'Fundamentals of Electric Circuits',
                author: 'Alexander, Sadiku',
                ebookAvailable: true,
                link: 'https://www.example.com/fundamentals-of-electric-circuits'
            },
            {
                id: 21,
                dept: 'IT',
                courseName: 'Information Security',
                title: 'Security in Computing',
                author: 'Charles P. Pfleeger, Shari Lawrence Pfleeger',
                ebookAvailable: false,
                link: 'NA'
            },
            {
                id: 22,
                dept: 'CS',
                courseName: 'Data Structures',
                title: 'Introduction to Algorithms',
                author: 'Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein',
                ebookAvailable: true,
                link: 'https://example.com/intro-to-algorithms'
            },
            {
                id: 23,
                dept: 'CSS',
                courseName: 'Cloud Computing',
                title: 'Architecting the Cloud',
                author: 'Michael J. Kavis',
                ebookAvailable: false,
                link: 'NA'
            },
            {
                id: 24,
                dept: 'CSS',
                courseName: 'Cloud Computing',
                title: 'Cloud Computing: Concepts, Technology & Architecture',
                author: 'Thomas Erl, Zaigham Mahmood, Ricardo P. Palacio',
                ebookAvailable: true,
                link: 'https://www.example.com/cloud-computing-concepts-technology-architecture'
            },
            {
                id: 25,
                dept: 'IT',
                courseName: 'Software Engineering',
                title: 'Software Engineering: A Practitioners Approach',
                author: 'Roger S. Pressman',
                ebookAvailable: true,
                link: 'https://www.example.com/software-engineering-a-practitioners-approach'
            },
            {
                id: 26,
                dept: 'CS',
                courseName: 'Machine Learning',
                title: 'Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow',
                author: 'Aurélien Géron',
                ebookAvailable: true,
                link: 'https://www.example.com/hands-on-machine-learning-with-scikit-learn-keras-tensorflow'
            },
            {
                id: 27,
                dept: 'EE',
                courseName: 'Power Electronics',
                title: 'Power Electronics: Converters, Applications, and Design',
                author: 'Ned Mohan',
                ebookAvailable: true,
                link: 'https://www.example.com/power-electronics-converters-applications-and-design'
            },
            {
                id: 28,
                dept: 'IT',
                courseName: 'Network Security',
                title: 'Network Security Essentials',
                author: 'William Stallings',
                ebookAvailable: true,
                link: 'https://www.example.com/network-security-essentials'
            },
            {
                id: 29,
                dept: 'CS',
                courseName: 'Database Management',
                title: 'Database Management Systems',
                author: 'Raghu Ramakrishnan, Johannes Gehrke',
                ebookAvailable: true,
                link: 'https://www.example.com/database-management-systems'
            },
            {
                id: 30,
                dept: 'EE',
                courseName: 'Digital Signal Processing',
                title: 'Signals and Systems: A MATLAB-Based Approach',
                author: 'K. S. Shanmugan, A. M. Breipohl',
                ebookAvailable: true,
                link: 'https://www.example.com/signals-and-systems-matlab-based-approach'
            },
            {
                id: 31,
                dept: 'IT',
                courseName: 'Big Data',
                title: 'Big Data: Principles and Paradigms',
                author: 'Rajendra Akerkar',
                ebookAvailable: true,
                link: 'https://www.example.com/big-data-principles-and-paradigms'
            },
            {
                id: 32,
                dept: 'CS',
                courseName: 'Computer Networks',
                title: 'Computer Networking: A Top-Down Approach',
                author: 'James F. Kurose, Keith W. Ross',
                ebookAvailable: true,
                link: 'https://www.example.com/computer-networking-a-top-down-approach'
            },
            {
                id: 33,
                dept: 'IT',
                courseName: 'Cyber Security',
                title: 'Cyber Security and Cyber Laws',
                author: 'Dr. Sunit Belapure, Dr. Sunit Belapure',
                ebookAvailable: false,
                link: 'NA'
            },
            {
                id: 34,
                dept: 'EE',
                courseName: 'Power Systems',
                title: 'Power System Analysis and Design',
                author: 'J. Duncan Glover, Thomas Overbye, Mulukutla S. Sarma',
                ebookAvailable: true,
                link: 'https://www.example.com/power-system-analysis-and-design'
            },
            {
                id: 35,
                dept: 'CS',
                courseName: 'Software Engineering',
                title: 'The Mythical Man-Month',
                author: 'Frederick P. Brooks Jr.',
                ebookAvailable: true,
                link: 'https://www.example.com/the-mythical-man-month'
            },
            {
                id: 36,
                dept: 'CSS',
                courseName: 'Web Development',
                title: 'Learning PHP, MySQL & JavaScript',
                author: 'Robin Nixon',
                ebookAvailable: true,
                link: 'https://www.example.com/learning-php-mysql-javascript'
            },
            {
                id: 37,
                dept: 'IT',
                courseName: 'Programming Languages',
                title: 'Programming Language Pragmatics',
                author: 'Michael L. Scott',
                ebookAvailable: true,
                link: 'https://www.example.com/programming-language-pragmatics'
            },
            {
                id: 38,
                dept: 'EE',
                courseName: 'Electronics',
                title: 'Electronic Devices and Circuit Theory',
                author: 'Robert L. Boylestad',
                ebookAvailable: true,
                link: 'https://www.example.com/electronic-devices-and-circuit-theory'
            },
            {
                id: 39,
                dept: 'CS',
                courseName: 'Data Structures',
                title: 'Algorithms and Data Structures',
                author: 'Niklaus Wirth',
                ebookAvailable: true,
                link: 'https://www.example.com/algorithms-and-data-structures'
            },
            {
                id: 40,
                dept: 'EE',
                courseName: 'Circuit Analysis',
                title: 'Fundamentals of Electric Circuits',
                author: 'Alexander, Sadiku',
                ebookAvailable: true,
                link: 'https://www.example.com/fundamentals-of-electric-circuits'
            },
            {
                id: 41,
                dept: 'IT',
                courseName: 'Cloud Computing',
                title: 'Cloud Computing: A Hands-On Approach',
                author: 'Arshdeep Bahga, Vijay Madisetti',
                ebookAvailable: true,
                link: 'https://www.example.com/cloud-computing-a-hands-on-approach'
            },
            {
                id: 42,
                dept: 'CS',
                courseName: 'Artificial Intelligence',
                title: 'Artificial Intelligence: A Modern Approach',
                author: 'Stuart Russell, Peter Norvig',
                ebookAvailable: true,
                link: 'https://www.example.com/artificial-intelligence-a-modern-approach'
            },
            {
                id: 43,
                dept: 'EE',
                courseName: 'Control Systems',
                title: 'Modern Control Engineering',
                author: 'Ogata Katsuhiko',
                ebookAvailable: true,
                link: 'https://www.example.com/modern-control-engineering'
            },
            {
                id: 44,
                dept: 'CSS',
                courseName: 'Web Programming',
                title: 'Web Programming with HTML5, CSS3, and JavaScript',
                author: 'Dean',
                ebookAvailable: true,
                link: 'https://www.example.com/web-programming-with-html5-css3-javascript'
            },
            {
                id: 45,
                dept: 'IT',
                courseName: 'Database Management Systems',
                title: 'Database System Concepts',
                author: 'Abraham Silberschatz, Henry F. Korth, S. Sudarshan',
                ebookAvailable: true,
                link: 'https://www.example.com/database-system-concepts'
            },
            {
                id: 46,
                dept: 'EE',
                courseName: 'Microelectronics',
                title: 'Microelectronic Circuits',
                author: 'Sedra Smith',
                ebookAvailable: true,
                link: 'https://www.example.com/microelectronic-circuits'
            },
            {
                id: 47,
                dept: 'CS',
                courseName: 'Operating Systems',
                title: 'Operating System Concepts',
                author: 'Abraham Silberschatz, Peter B. Galvin, Greg Gagne',
                ebookAvailable: true,
                link: 'https://www.example.com/operating-system-concepts'
            },
            {
                id: 48,
                dept: 'IT',
                courseName: 'Software Testing',
                title: 'Foundations of Software Testing',
                author: 'Aditya P. Mathur',
                ebookAvailable: true,
                link: 'https://www.example.com/foundations-of-software-testing'
            },
            {
                id: 49,
                dept: 'EE',
                courseName: 'Electromagnetic Fields',
                title: 'Introduction to Electrodynamics',
                author: 'David J. Griffiths',
                ebookAvailable: true,
                link: 'https://www.example.com/introduction-to-electrodynamics'
            },
            {
                id: 50,
                dept: 'CS',
                courseName: 'Computer Architecture',
                title: 'Computer Architecture: A Quantitative Approach',
                author: 'John L. Hennessy, David A. Patterson',
                ebookAvailable: true,
                link: 'https://www.example.com/computer-architecture-a-quantitative-approach'
            },
            {
                id: 51,
                dept: 'IT',
                courseName: 'Data Science',
                title: 'Data Science from Scratch',
                author: 'Joel Grus',
                ebookAvailable: true,
                link: 'https://www.example.com/data-science-from-scratch'
            },
            {
                id: 52,
                dept: 'EE',
                courseName: 'Digital Systems',
                title: 'Digital Design and Computer Architecture',
                author: 'David Harris, Sarah Harris',
                ebookAvailable: true,
                link: 'https://www.example.com/digital-design-and-computer-architecture'
            },
            {
                id: 53,
                dept: 'CS',
                courseName: 'Compiler Design',
                title: 'Compilers: Principles, Techniques, and Tools',
                author: 'Alfred V. Aho, Monica S. Lam, Ravi Sethi, Jeffrey D. Ullman',
                ebookAvailable: true,
                link: 'https://www.example.com/compilers-principles-techniques-tools'
            },
            {
                id: 54,
                dept: 'CSS',
                courseName: 'Software Development',
                title: 'Software Engineering: A Practitioners Approach',
                author: 'Roger S. Pressman',
                ebookAvailable: true,
                link: 'https://www.example.com/software-engineering-a-practitioners-approach'
            },
            {
                id: 55,
                dept: 'IT',
                courseName: 'Information Systems',
                title: 'Information Systems: A Manager’s Guide to Harnessing Technology',
                author: 'John Gallaugher',
                ebookAvailable: true,
                link: 'https://www.example.com/information-systems-a-managers-guide-to-harnessing-technology'
            },
            {
                id: 56,
                dept: 'EE',
                courseName: 'Power Systems',
                title: 'Electric Power Systems: A Conceptual Introduction',
                author: 'Alexander Kusko, Robert H. Miller',
                ebookAvailable: true,
                link: 'https://www.example.com/electric-power-systems-a-conceptual-introduction'
            },
            {
                id: 57,
                dept: 'CS',
                courseName: 'Machine Learning',
                title: 'Machine Learning: A Probabilistic Perspective',
                author: 'Kevin P. Murphy',
                ebookAvailable: true,
                link: 'https://www.example.com/machine-learning-a-probabilistic-perspective'
            },
            {
                id: 58,
                dept: 'IT',
                courseName: 'Information Security',
                title: 'Principles of Information Security',
                author: 'Michael E. Whitman, Herbert J. Mattord',
                ebookAvailable: true,
                link: 'https://www.example.com/principles-of-information-security'
            },
            {
                id: 59,
                dept: 'CS',
                courseName: 'Computational Biology',
                title: 'Biological Sequence Analysis: Probabilistic Models of Proteins and Nucleic Acids',
                author: 'Richard Durbin, Sean R. Eddy, Anders Krogh, Graeme Mitchison',
                ebookAvailable: true,
                link: 'https://www.example.com/biological-sequence-analysis'
            },
            {
                id: 60,
                dept: 'EE',
                courseName: 'Electronics',
                title: 'Fundamentals of Microelectronics',
                author: 'Behzad Razavi',
                ebookAvailable: true,
                link: 'https://www.example.com/fundamentals-of-microelectronics'
            },
            {
                id: 61,
                dept: 'IT',
                courseName: 'Web Development',
                title: 'Learning Web Design: A Beginner\'s Guide to HTML, CSS, JavaScript, and Web Graphics',
                author: 'Jennifer Niederst Robbins',
                ebookAvailable: true,
                link: 'https://www.oreilly.com/library/view/learning-web-design/9781491960195/'
            },
            {
                id: 62,
                dept: 'IT',
                courseName: 'Database Management Systems',
                title: 'Database Management Systems',
                author: 'Raghu Ramakrishnan, Johannes Gehrke',
                ebookAvailable: true,
                link: 'https://www.mhprofessional.com/9780072465631-usa-database-management-systems'
            },
            {
                id: 63,
                dept: 'Physics',
                courseName: 'Classical Mechanics',
                title: 'Classical Mechanics',
                author: 'Herbert Goldstein',
                ebookAvailable: false,
                link: 'NA'
            },
            {
                id: 64,
                dept: 'Physics',
                courseName: 'Electromagnetism',
                title: 'Introduction to Electrodynamics',
                author: 'David J. Griffiths',
                ebookAvailable: true,
                link: 'https://www.amazon.com/Introduction-Electrodynamics-David-Griffiths/dp/1108420414'
            },
            {
                id: 65,
                dept: 'CS',
                courseName: 'Operating Systems',
                title: 'Operating System Concepts',
                author: 'Abraham Silberschatz, Peter B. Galvin, Greg Gagne',
                ebookAvailable: true,
                link: 'https://www.wiley.com/en-us/Operating+System+Concepts%2C+9th+Edition-p-9781118063330'
            },
            {
                id: 66,
                dept: 'CS',
                courseName: 'Artificial Intelligence',
                title: 'Artificial Intelligence: A Modern Approach',
                author: 'Stuart Russell, Peter Norvig',
                ebookAvailable: true,
                link: 'https://www.amazon.com/Artificial-Intelligence-Modern-Approach-3rd/dp/0136042597'
            },
            {
                id: 67,
                dept: 'BBA',
                courseName: 'Principles of Marketing',
                title: 'Principles of Marketing',
                author: 'Philip Kotler, Gary Armstrong',
                ebookAvailable: true,
                link: 'https://www.pearson.com/store/p/principles-of-marketing/P100000554157'
            },
            {
                id: 68,
                dept: 'BBA',
                courseName: 'Management Theory',
                title: 'Management: A Practical Introduction',
                author: 'Angelo Kinicki, Brian Williams',
                ebookAvailable: true,
                link: 'https://www.mheducation.com/highered/product/management-practical-introduction-kinicki-williams/M9781259723362.html'
            },
            {
                id: 69,
                dept: 'ME',
                courseName: 'Fluid Mechanics',
                title: 'Fundamentals of Fluid Mechanics',
                author: 'Bruce R. Munson, Donald F. Young, Theodore H. Okiishi, Wade W. Huebsch',
                ebookAvailable: true,
                link: 'https://www.wiley.com/en-us/Fundamentals+of+Fluid+Mechanics%2C+8th+Edition-p-9781119400806'
            },
            {
                id: 70,
                dept: 'ME',
                courseName: 'Thermodynamics',
                title: 'Thermodynamics: An Engineering Approach',
                author: 'Yunus A. Çengel, Michael A. Boles',
                ebookAvailable: true,
                link: 'https://www.mheducation.com/highered/product/thermodynamics-engineering-approach-cengel-boles/M9781260561440.html'
            },
            {
                id: 71,
                dept: 'CE',
                courseName: 'Structural Analysis',
                title: 'Structural Analysis',
                author: 'R.C. Hibbeler',
                ebookAvailable: true,
                link: 'https://www.amazon.com/Structural-Analysis-R-C-Hibbeler/dp/013442411X'
            },
            {
                id: 72,
                dept: 'CE',
                courseName: 'Construction Engineering',
                title: 'Construction Engineering and Management',
                author: 'S. Seetharaman',
                ebookAvailable: false,
                link: 'NA'
            },
            {
                id: 73,
                dept: 'ME',
                courseName: 'Engineering Mechanics',
                title: 'Engineering Mechanics: Dynamics',
                author: 'J.L. Meriam, L.G. Kraige',
                ebookAvailable: false,
                link: 'NA'
            },
            {
                id: 74,
                dept: 'ME',
                courseName: 'Mechanical Vibrations',
                title: 'Mechanical Vibrations',
                author: 'Singiresu S. Rao',
                ebookAvailable: false,
                link: 'NA'
            },
            {
                id: 75,
                dept: 'BBA',
                courseName: 'Marketing Management',
                title: 'Marketing Management',
                author: 'Philip Kotler, Kevin Lane Keller',
                ebookAvailable: false,
                link: 'NA'
            },
            {
                id: 76,
                dept: 'BBA',
                courseName: 'Financial Accounting',
                title: 'Financial Accounting: A User Perspective',
                author: 'Carl S. Warren, Jefferson P. Jones',
                ebookAvailable: false,
                link: 'NA'
            },
            {
                id: 77,
                dept: 'Physics',
                courseName: 'Quantum Mechanics',
                title: 'Principles of Quantum Mechanics',
                author: 'R. Shankar',
                ebookAvailable: false,
                link: 'NA'
            },
            {
                id: 78,
                dept: 'Physics',
                courseName: 'Statistical Mechanics',
                title: 'Statistical Mechanics: Algorithms and Computations',
                author: 'Normand M. Laurendeau',
                ebookAvailable: false,
                link: 'NA'
            },
            {
                id: 79,
                dept: 'CE',
                courseName: 'Construction Materials',
                title: 'Construction Materials: Their Nature and Behaviour',
                author: 'Michael F. Cowell',
                ebookAvailable: false,
                link: 'NA'
            },
            {
                id: 80,
                dept: 'CE',
                courseName: 'Geotechnical Engineering',
                title: 'Geotechnical Engineering: Principles and Practices',
                author: 'Donald P. Coduto',
                ebookAvailable: false,
                link: 'NA'
            },
            {
                id: 81,
                dept: "CSS",
                courseName: "Web Development",
                title: "Eloquent JavaScript",
                author: "Marijn Haverbeke",
                ebookAvailable: true,
                link: "https://eloquentjavascript.net/"
            },
            {
                id: 82,
                dept: "CSS",
                courseName: "Programming",
                title: "Clean Code",
                author: "Robert C. Martin",
                ebookAvailable: false,
                link: "NA"
            },
            {
                id: 83,
                dept: "CSS",
                courseName: "Cybersecurity",
                title: "The Web Application Hacker's Handbook",
                author: "Dafydd Stuttard, Marcus Pinto",
                ebookAvailable: false,
                link: "NA"
            },
            {
                id: 84,
                dept: "CSS",
                courseName: "Cloud Computing",
                title: "Cloud Native Java",
                author: "Josh Long, Kenny Bastani",
                ebookAvailable: false,
                link: "NA"
            },
        ];

        // Set the book data as initial state
        setBooks(initialBooks);
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleDeptChange = (event) => {
        setSelectedDept(event.target.value);
    };

    const filteredBooks = books.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              book.author.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesDept = selectedDept === 'All' || book.dept === selectedDept;
        return matchesSearch && matchesDept;
    });

    const uniqueDepts = ['All', 'CSS', 'IT', 'CS', 'EE', 'ME', 'BBA', 'Physics', 'CE', 'Biotechnology', 'Law', 'Architecture', 'Economics', 'Psychology', 'Environmental Studies']; 

    return (
        <div>
            <h2>Book List</h2>
            <div style={{ marginBottom: '20px' }}>
                <input 
                    type="text" 
                    placeholder="Search by title or author..." 
                    value={searchTerm} 
                    onChange={handleSearchChange} 
                    style={{ marginRight: '10px', padding: '5px' }} 
                />
                <select value={selectedDept} onChange={handleDeptChange} style={{ padding: '5px' }}>
                    {uniqueDepts.map(dept => (
                        <option key={dept} value={dept}>{dept}</option>
                    ))}
                </select>
            </div>
            {selectedDept !== 'All' && filteredBooks.length === 0 && (
                <p>No books found for this department.</p>
            )}
            <table border="1" style={{ width: '100%', textAlign: 'left', marginTop: '20px', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>Sl No.</th>
                        <th>Dept</th>
                        <th>Course Name</th>
                        <th>Title of the Book</th>
                        <th>Author</th>
                        <th>Ebook Availability</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredBooks.length > 0 ? (
                        filteredBooks.map((book, index) => (
                            <tr key={book.id}>
                                <td>{index + 1}</td>
                                <td>{book.dept}</td>
                                <td>{book.courseName}</td>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.ebookAvailable ? 'YES' : 'NO'}</td>
                                <td>
                                    {book.ebookAvailable ? (
                                        <a href={book.link} target="_blank" rel="noopener noreferrer">Ebook Link</a>
                                    ) : (
                                        'NA'
                                    )}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" style={{ textAlign: 'center' }}>No books found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default BookList;
