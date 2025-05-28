function UserStats({ statistics }) {
    return (
      <div className="user-stats">
        <h2>User Statistics</h2>
        {statistics && (
          <ul>
            <li>Posts: {statistics.posts}</li>
            <li>Comments: {statistics.comments}</li>
            <li>Likes received: {statistics.likesReceived}</li>
          </ul>
        )}
      </div>
    );
  }