function loadSection(sectionFile) {
    // Hide the existing section content
    const sectionContent = document.getElementById('section-content');
    sectionContent.innerHTML = '';

    // Load the content from the selected section file
    fetch(sectionFile)
        .then(response => response.text())
        .then(data => {
            sectionContent.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading section content:', error);
        });
}


