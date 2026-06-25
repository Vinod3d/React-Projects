import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLeads } from '../features/leads/leadsSlice';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
// import { PlusIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { leads, isLoading } = useSelector((state) => state.leads);

  useEffect(() => {
    dispatch(getLeads({ page: 1, limit: 5 }));
  }, [dispatch]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Recent Leads</h2>
          {isLoading ? (
            <div>Loading...</div>
          ) : leads.length === 0 ? (
            <p className="text-gray-500">No leads found</p>
          ) : (
            <ul className="divide-y divide-gray-200">
              {leads.map((lead) => (
                <li key={lead._id} className="py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium">{lead.name}</h3>
                      <p className="text-sm text-gray-500">{lead.status}</p>
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(lead.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-4">
            <Link to="/leads">
              <Button variant="outline" className="flex items-center gap-2">
                View all leads <ArrowRightIcon className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-4">
            <Link to="/leads">
              <Button className="w-full flex items-center justify-center gap-2">
                <PlusIcon className="h-5 w-5" />
                Add New Lead
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-blue-800">Total Leads</h3>
            <p className="text-3xl font-bold text-blue-600">24</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-green-800">Converted</h3>
            <p className="text-3xl font-bold text-green-600">8</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-purple-800">In Progress</h3>
            <p className="text-3xl font-bold text-purple-600">12</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;