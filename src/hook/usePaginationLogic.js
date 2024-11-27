import { useState, useMemo } from "react";

const usePaginationLogic = (projects,currentPage) => {
  const recordsPerPage = 5; 

  // Pagination logic
  const totalPages = Math.ceil(projects.length / recordsPerPage);
  const paginatedProjects = useMemo(()=>{
    return projects.slice(
      (currentPage - 1) * recordsPerPage,
      currentPage * recordsPerPage
    );
  },[currentPage, projects]);

  return {paginatedProjects,totalPages};
}

export default usePaginationLogic;