export async function fetchUserData(userId) {
    // Simulating API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulating API response
    if (userId === undefined) {
      throw new Error('userId is required');
    }
    
    return {
      id: userId,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      jobTitle: 'Senior Developer',
      location: 'San Francisco, CA',
      joinDate: '2021-03-15T00:00:00Z',
      avatarUrl: 'https://example.com/avatars/janesmith.png',
      status: 'inactive',
      stats: {
        posts: 42,
        comments: 156,
        likesReceived: 89
      }
    };
  }