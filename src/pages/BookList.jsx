import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BookList.css';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDept, setSelectedDept] = useState('All');

    useEffect(() => {
        // Provided book data
       
            const initialBooks = [
                {
                    id: 1,
                    dept: 'CSS',
                    courseName: 'Digital Logic',
                    courseCode: 'BCA17101',
                    semester: 'I',
                    title: 'Digital Logic and Computer Design',
                    author: 'Morris Mano',
                    ebookAvailable: true,
                    link: 'https://www.bau.edu.jo/UserPortal/Us/erProfile/PostsAttach/43038_4306_1.pdf'
                },
                {
                    id: 2,
                    dept: 'CSS',
                    courseName: 'Sustainability in Indian Knowledge System',
                    courseCode: 'BCA10201',
                    semester: 'I',
                    title: 'Introduction to Indian Knowledge System: Concepts and Applications',
                    author: 'Mahadevan, B., Bhat Vinayak Rajat, Nagendra Pavana R.N.',
                    ebookAvailable: false,
                    link: 'NA'
                },
                {
                    id: 3,
                    dept: 'CSS',
                    courseName: 'Problem-Solving Methodologies',
                    courseCode: 'VAC00012',
                    semester: 'I',
                    title: 'Programming in ANSI C',
                    author: 'E. Balaguruswamy',
                    ebookAvailable: true,
                    link: 'https://drive.google.com/file/d/1LtWRPbiMDAA2X3iXmn2UpNWiLvyXbTMj/view?usp=sharing'
                },
                {
                    id: 4,
                    dept: 'CSS',
                    courseName: 'HTML and CSS Lab',
                    courseCode: 'BMT19101',
                    semester: 'I',
                    title: 'The Essential Guide to CSS and HTML Web Design',
                    author: 'Craig Grannell',
                    ebookAvailable: false,
                    link: 'NA'
                },
                {
                    id: 5,
                    dept: 'CSS',
                    courseName: 'Problem-Solving Methodologies',
                    courseCode: 'VAC00012',
                    semester: 'I',
                    title: 'Programming in ANSI C',
                    author: 'E. Balaguruswamy',
                    ebookAvailable: true,
                    link: 'https://drive.google.com/file/d/1LtWRPbiMDAA2X3iXmn2UpNWiLvyXbTMj/view?usp=sharing'
                },
                {
                    id: 6,
                    dept: 'CSS',
                    courseName: 'Problem Solving using Python',
                    courseCode: 'MCA17101',
                    semester: 'I',
                    title: 'Handbook of Computer Fundamentals',
                    author: 'N.S. Gill',
                    ebookAvailable: false,
                    link: 'NA'
                },
                {
                    id: 7,
                    dept: 'CSS',
                    courseName: 'Interactive Web Designing',
                    courseCode: 'MCA17103',
                    semester: 'I',
                    title: 'Web Technologies Black Book',
                    author: 'Kogent Learning Solutions Inc.',
                    ebookAvailable: false,
                    link: 'NA'
                },
                {
                    id: 8,
                    dept: 'CSS',
                    courseName: 'Computer Organization and Architecture',
                    courseCode: 'MCA17104',
                    semester: 'I',
                    title: 'Computer Organization and Embedded Systems',
                    author: 'Hamacher Carl',
                    ebookAvailable: true,
                    link: 'https://v2vclass.com/images/coursepdf/bsc-cssem1/bsc-cssem1/co/fy-cs.pdf'
                },
                {
                    id: 9,
                    dept: 'CSS',
                    courseName: 'Database Management System',
                    courseCode: 'MCA17105',
                    semester: 'I',
                    title: 'Fundamentals of Database Systems',
                    author: 'Elmasri, Navathe',
                    ebookAvailable: true,
                    link: 'https://www.auhd.edu.ye/upfiles/elibrary/Azal2020-01-22-12-28-11-76901.pdf'
                },
                {
                    id: 10,
                    dept: 'CSS',
                    courseName: 'Database Management System',
                    courseCode: 'BCA37107',
                    semester: 'III',
                    title: 'Fundamentals of Database Systems',
                    author: 'Elmasri, Navathe',
                    ebookAvailable: true,
                    link: 'https://www.auhd.edu.ye/upfiles/elibrary/Azal2020-01-22-12-28-11-76901.pdf'
                },
                {
                    id: 11,
                    dept: 'CSS',
                    courseName: 'Object Oriented Programming in JAVA',
                    courseCode: 'BCA30108',
                    semester: 'III',
                    title: 'Programming with Java: A Primer',
                    author: 'E. Balagurusamy',
                    ebookAvailable: true,
                    link: 'https://bitshifters0.wordpress.com/wp-content/uploads/2015/03/programming-with-java-byebalaguruswami.pdf'
                },
                {
                    id: 12,
                    dept: 'CSS',
                    courseName: 'Operating System',
                    courseCode: 'BCA30110',
                    semester: 'III',
                    title: 'Operating System Concepts',
                    author: 'Abraham Silberschatz, Peter B. Galvin, Greg Gagne',
                    ebookAvailable: true,
                    link: 'https://www.mbit.edu.in/wp-content/uploads/2020/05/Operating_System_Concepts_8th_Edition-A4.pdf'
                },
                {
                    id: 13,
                    dept: 'CSS',
                    courseName: 'Internet and Web Technologies',
                    courseCode: 'BCA37002',
                    semester: 'III',
                    title: 'jQuery Pocket Reference',
                    author: 'David Flanagan',
                    ebookAvailable: true,
                    link: 'https://ase.softmentor.ro/Multimedia/resurse/OReilly-jQuery-Pocket-Reference.pdf'
                },
                {
                    id: 14,
                    dept: 'CSS',
                    courseName: 'Artificial Intelligence and Machine Learning',
                    courseCode: 'MCA301',
                    semester: 'III',
                    title: 'Pattern Recognition and Machine Learning',
                    author: 'C. M. Bishop',
                    ebookAvailable: true,
                    link: 'https://www.microsoft.com/en-us/research/uploads/prod/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf'
                },
                {
                    id: 15,
                    dept: 'CSS',
                    courseName: 'Software Engineering using UML',
                    courseCode: 'MCA302',
                    semester: 'III',
                    title: 'Fundamentals of Software Engineering',
                    author: 'Rajib Mall',
                    ebookAvailable: true,
                    link: 'https://davcollegetitilagarh.org/wp-content/uploads/2020/09/fundamentals-of-software-engineering-fourth-edition-rajib-mall.pdf'
                },
                {
                    id: 16,
                    dept: 'CSS',
                    courseName: 'Cloud Computing',
                    courseCode: 'MCA304B',
                    semester: 'III',
                    title: 'Cloud Computing Bible',
                    author: 'Sosinsky Barrie',
                    ebookAvailable: true,
                    link: 'https://arpitapatel.wordpress.com/wp-content/uploads/2014/10/cloud-computing-bible1.pdf'
                },
                {
                    id: 17,
                    dept: 'CSS',
                    courseName: 'Data Warehousing and Data Mining',
                    courseCode: 'MCA305A',
                    semester: 'III',
                    title: 'Data Mining',
                    author: 'Roiger & Geatz',
                    ebookAvailable: true,
                    link: 'https://drive.google.com/file/d/1JKVkY4AasZUTIFDhLM8VuAu_P1EI_Dj/view?usp=drive_link'
                },
                {
                    id: 18,
                    dept: 'CSS',
                    courseName: 'Big Data Analysis',
                    courseCode: 'MCA30B',
                    semester: 'III',
                    title: 'Big Data Analytics',
                    author: 'Venkat Ankam',
                    ebookAvailable: false,
                    link: 'NA'
                },
                {
                    id: 19,
                    dept: 'CSS',
                    courseName: 'Internet Technologies',
                    courseCode: 'BCAE501A',
                    semester: 'V',
                    title: 'Web Technology: A Developer\'s Perspective',
                    author: 'N.P. Gopalan and J. Akilandeswari',
                    ebookAvailable: false,
                    link: 'NA'
                },
                {
                    id: 20,
                    dept: 'CSS',
                    courseName: 'Artificial Intelligence',
                    courseCode: 'BCAE501B',
                    semester: 'V',
                    title: 'Artificial Intelligence',
                    author: 'Rich & Knight',
                    ebookAvailable: true,
                    link: 'https://github.com/saranshbht/mscbooks/blob/a8dad4c172f55c4a713a8880f81f79fecb82b94a/M.Sc.%20CS%20Sem1/Artificial%20Intelligence/Kevin%20Knight,%20Elaine%20Rich,%20B.%20Nair%20-%20Artificial%20Intelligence%20(2010,%20Tata%20McGrawHill%20Education%20Pvt.%20Ltd.).pdf'
                },
                {
                    id: 21,
                    dept: 'CSS',
                    courseName: 'E-Commerce',
                    courseCode: 'BCAE502A',
                    semester: 'V',
                    title: 'E-Commerce: A Managerial Perspective',
                    author: 'Joseph',
                    ebookAvailable: false,
                    link: 'NA'
                },
                {
                    id: 22,
                    dept: 'CSS',
                    courseName: 'Computer Networks',
                    courseCode: 'BCAE502B',
                    semester: 'V',
                    title: 'Data Communications and Networking',
                    author: 'B. A. Forouzan',
                    ebookAvailable: true,
                    link: 'https://dpvipracollege.in/wp-content/uploads/2023/01/Data-Communications-and-Networking-By-Behrouz-A.Forouzan.pdf'
                }
            ];
            
        

        // Set the book data as initial state
        setBooks(initialBooks);

        // Optionally, fetch more books from the backend (uncomment below if needed)
        // const fetchBooks = async () => {
        //     try {
        //         const response = await axios.get('http://localhost:5000/api/books', {
        //             headers: {
        //                 Authorization: `Bearer ${localStorage.getItem('token')}`
        //             }
        //         });
        //         setBooks(response.data);
        //     } catch (error) {
        //         console.error('Error fetching books:', error);
        //     }
        // };
        // fetchBooks();
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

    const uniqueDepts = [...new Set(books.map(book => book.dept))];

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
                    <option value="All">All Departments</option>
                    {uniqueDepts.map(dept => (
                        <option key={dept} value={dept}>{dept}</option>
                    ))}
                </select>
            </div>
            <table border="1" style={{ width: '100%', textAlign: 'left', marginTop: '20px', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>Sl No.</th>
                        <th>Dept</th>
                        <th>Course Name</th>
                        <th>Course Code</th>
                        <th>Semester</th>
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
                                <td>{book.courseCode}</td>
                                <td>{book.semester}</td>
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
                            <td colSpan="9" style={{ textAlign: 'center' }}>No books found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default BookList;
