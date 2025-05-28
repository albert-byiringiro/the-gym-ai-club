export function UserActivity({ userId, limit }) {
    const [activities, setActivities] = useState([]);
    
    useEffect(() => {
      // Simulating API call
      setTimeout(() => {
        setActivities([
          { id: 1, type: 'post', content: 'Created a new post', date: '2023-05-15' },
          { id: 2, type: 'comment', content: 'Commented on a thread', date: '2023-05-14' }
        ]);
      }, 500);
    }, [userId]);
    
    return (
      <div className="user-activity">
        <h2>Recent Activity</h2>
        <ul>
          {activities.map(activity => (
            <li key={activity.id}>
              {activity.content} - {activity.date}
            </li>
          ))}
        </ul>
      </div>
    );
  }