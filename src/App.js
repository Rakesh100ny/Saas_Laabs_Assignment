import React, { useState, useMemo } from 'react';
import ProjectTable from './components/ProjectTable';
import Pagination from './components/Pagination';
import './App.css';
import useGetTableData from './hook/useGetTableData';
import usePaginationLogic from './hook/usePaginationLogic';


const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projects = useGetTableData();
  const {paginatedProjects, totalPages} = usePaginationLogic(projects, currentPage);
  
  return (
    <div className="App">
      <h1 style={{textAlign:'center'}}> SaaS Labs Frontend Assignment</h1>
      <ProjectTable projects={paginatedProjects} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPrev={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        onNext={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
      />
    </div>
  );
};

export default App;