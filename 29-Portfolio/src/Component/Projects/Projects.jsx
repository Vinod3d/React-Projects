import React, { useState } from 'react';
import './Projects.css';
import '../Portfolio/Portfolio.css';
import ProjectsApi from './ProjectsApi';
import Card from './Card';
import Filter from './Filter';

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState('');
  const [loading, setLoading] = useState(false); // Initialize loading state as false
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle filter selection
  const handleFilterChange = (e) => {
    setSelectedTech(e.target.value);
  };

  // Filter projects based on search query and selected tech
  const filterProjects = () => {
    const techFilter = selectedTech.toLowerCase();
    const searchFilter = searchQuery.toLowerCase();

    const filtered = ProjectsApi.filter((project) => {
      const techMatch = project.tech.toLowerCase().includes(techFilter);
      const titleMatch = project.title_one.toLowerCase().includes(searchFilter) ||
        project.title_two.toLowerCase().includes(searchFilter) ||
        project.title_three.toLowerCase().includes(searchFilter) || project.tech.toLowerCase().includes(searchFilter);

      return techMatch && titleMatch;
    });

    setFilteredProjects(filtered);
  };

  // Handle filtering whenever searchQuery or selectedTech changes
  React.useEffect(() => {
    setLoading(true); // Set loading to true while filtering
    setTimeout(() => {
      filterProjects(); // Filter projects
      setLoading(false); // Set loading to false when done
    }, 1000); // Simulate a delay for loading
  }, [searchQuery, selectedTech]);

  return (
    <>
      <section className='Portfolio Blog' id='project'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>VISIT MY Projects</h4>
            <h1>My Projects</h1>
          </div>

          <div className='content grid'>
            <Filter
              searchQuery={searchQuery}
              selectedTech={selectedTech}
              onSearchChange={handleSearchChange}
              onFilterChange={handleFilterChange}
              numProjects={filteredProjects.length}
            />
            {loading ? (
              <p>Loading...</p>
            ) : (
              filteredProjects.length === 0 ? (
                <p>No projects found</p>
              ) : (
                filteredProjects.map((value) => (
                  <Card
                    key={value.id}
                    image={value.image}
                    url={value.url}
                    github={value.github}
                    title_one={value.title_one}
                    title_two={value.title_two}
                    title_three={value.title_three}
                    desc_one={value.desc_one}
                    desc_two={value.desc_two}
                    desc_three={value.desc_three}
                  />
                ))
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
