import axios from 'axios';

const API_URL = '/api/v1/leads';

// Create new lead
const createLead = async (leadData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, leadData, config);

  return response.data;
};

// Get user leads
const getLeads = async (filters, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: filters,
  };

  const response = await axios.get(API_URL, config);

  return {
    leads: response.data.data,
    currentPage: response.data.pagination?.page || 1,
    totalPages: Math.ceil(response.data.pagination?.total / response.data.pagination?.limit) || 1,
    totalLeads: response.data.pagination?.total || response.data.data.length,
  };
};

// Update lead
const updateLead = async (leadId, leadData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(`${API_URL}/${leadId}`, leadData, config);

  return response.data;
};

// Delete lead
const deleteLead = async (leadId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  await axios.delete(`${API_URL}/${leadId}`, config);

  return leadId;
};

const leadsService = {
  createLead,
  getLeads,
  updateLead,
  deleteLead,
};

export default leadsService;