

const dummyLeads = [
    { id: 1, name: 'Miths', email: 'mitanshuagrawal5@gmail.com' },
    { id: 2, name: 'Jon', email: 'jane@example.com' },
  ];
  
  const dummyCampaigns = [
    { id: 1, name: 'don', status: 'active' },
    { id: 2, name: 'Vineet', status: 'planned' },
  ];
  
  export const getLeads = () => {
    return Promise.resolve(dummyLeads);
  };
  
  export const getCampaigns = () => {
    return Promise.resolve(dummyCampaigns);
  };
  