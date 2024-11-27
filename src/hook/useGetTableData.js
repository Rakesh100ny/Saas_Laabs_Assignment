import {useState, useEffect} from 'react';

const API_URL = 'https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json';
 
function useGetTableData () {
 
  const [projects, setProjects] = useState([]);

  // Fetch data on mount
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Failed to fetch projects');
        const data = await response.json();
        //console.log("data", data);
        setProjects(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchProjects();
  }, []);
  //console.log("projects", projects);
  return projects;
}

export default useGetTableData;