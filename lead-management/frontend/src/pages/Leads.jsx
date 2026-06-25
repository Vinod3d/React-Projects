import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { reset } from '../features/leads/leadsSlice';
import LeadList from '../components/Leads/LeadList';

const Leads = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <LeadList />
    </div>
  );
};

export default Leads;