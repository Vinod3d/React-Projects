import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLeads, deleteLead } from '../../features/leads/leadsSlice';
// import LeadItem from './LeadItem';
// import LeadFilters from './LeadFilters';
import { Button } from '../ui/Button';
// import { PlusIcon } from '@heroicons/react/24/outline';

const LeadList = () => {
  const dispatch = useDispatch();
  const { leads, isLoading, currentPage, totalPages } = useSelector(
    (state) => state.leads
  );
  const [showForm, setShowForm] = useState(false);
  const [filters, setFilters] = useState({
    status: '',
    page: 1,
    limit: 10,
    search: '',
  });

  useEffect(() => {
    dispatch(getLeads(filters));
  }, [dispatch, filters]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this lead?')) {
      dispatch(deleteLead(id));
    }
  };

  const handlePageChange = (newPage) => {
    setFilters({ ...filters, page: newPage });
  };

  const handleFilterChange = (newFilters) => {
    setFilters({ ...filters, ...newFilters, page: 1 });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Leads</h2>
        <Button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2"
        >
          <PlusIcon className="h-5 w-5" />
          {showForm ? 'Cancel' : 'Add New Lead'}
        </Button>
      </div>

      {showForm && (
        <div className="bg-white p-6 rounded-lg shadow">
          <LeadForm
            onSubmit={(values) => {
              dispatch(createLead(values)).unwrap().then(() => {
                setShowForm(false);
              });
            }}
          />
        </div>
      )}

      <LeadFilters onFilterChange={handleFilterChange} filters={filters} />

      {isLoading ? (
        <div>Loading...</div>
      ) : leads.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No leads found</p>
        </div>
      ) : (
        <>
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {leads.map((lead) => (
                <LeadItem
                  key={lead._id}
                  lead={lead}
                  onDelete={handleDelete}
                />
              ))}
            </ul>
          </div>

          {totalPages > 1 && (
            <div className="flex justify-between items-center">
              <Button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <Button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default LeadList;