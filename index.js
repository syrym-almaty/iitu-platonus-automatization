// Function to retrieve student names and full links
function getStudentLinks() {
    // Select all the student name links
    const studentLinks = document.querySelectorAll('a.link-info');
    
    // Array to hold the student data (name and full link)
    const studentData = [];

    // Loop through each student link to get the name and full link
    studentLinks.forEach(link => {
        const studentName = link.textContent.trim();
        const fullLink = link.getAttribute('href') ? window.location.origin + link.getAttribute('href') : 'Link not found';  // Construct the full link
        studentData.push({
            name: studentName,
            link: fullLink
        });
    });

    // Display the student data as a table in the console
    console.table(studentData);
    
    // Create tabular string format for clipboard
    const tableString = studentData.map(student => `${student.name}\t${student.link}`).join('\n');
    
    // Automatically copy the data to clipboard
    copyToClipboard(tableString);
    console.log('Student data has been automatically copied to clipboard in tabular format.');
}

// Function to copy text to the clipboard
function copyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
}

// Run the function
getStudentLinks();
