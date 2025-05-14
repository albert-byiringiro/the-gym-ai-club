# Challenge 2: The Unknown API Challenge

## Overview

This challenge simulates a common developer scenario: working with an undocumented API. You'll practice using AI tools to understand the API structure and generate code to effectively process and utilize the data.

## Starting Code

```javascript
// You've discovered this API endpoint that returns data you need for your application
// Unfortunately, there's no documentation available, and you only have this sample response

const apiResponse = {
  "meta": {
    "status": "ok",
    "pagination": {
      "page": 1, 
      "per_page": 10, 
      "total": 42,
      "pages": 5
    },
    "request_id": "f7a8b9c0-d1e2-3f4g-5h6i-7j8k9l0m1n2o"
  },
  "data": [
    {
      "uid": "a1b2c3", 
      "type": "event", 
      "created_at": "2023-05-18T14:32:21Z",
      "modified_at": "2023-05-20T09:12:45Z",
      "attrs": {
        "name": "Annual Tech Conference", 
        "date": "2023-06-15", 
        "time": "09:00",
        "duration": 480,
        "location": {
          "venue": "City Convention Center",
          "address": "123 Main St",
          "city": "San Francisco",
          "state": "CA",
          "zip": "94107"
        },
        "status": 1,
        "max_attendees": 500,
        "current_attendees": 328,
        "organizer_id": "org_12345",
        "tags": ["tech", "conference", "annual"]
      }
    },
    {
      "uid": "d4e5f6", 
      "type": "meeting", 
      "created_at": "2023-05-19T10:11:22Z",
      "modified_at": "2023-05-19T10:11:22Z",
      "attrs": {
        "title": "Weekly Team Sync", 
        "time": "14:00", 
        "date": "2023-05-22",
        "duration": 60,
        "location": {
          "type": "virtual",
          "platform": "Zoom",
          "url": "https://zoom.us/j/123456789"
        },
        "recurring": true, 
        "frequency": "weekly",
        "status": 2,
        "organizer_id": "usr_abcdef",
        "team_id": "team_123456",
        "tags": ["team", "sync", "weekly"]
      }
    },
    {
      "uid": "g7h8i9", 
      "type": "task", 
      "created_at": "2023-05-17T16:43:55Z",
      "modified_at": "2023-05-19T11:22:33Z",
      "attrs": {
        "title": "Update Documentation", 
        "description": "Update API documentation with new endpoints",
        "deadline": "2023-05-25T17:00:00Z",
        "priority": 2,
        "status": 0,
        "assigned_to": "usr_fedcba",
        "project_id": "proj_987654",
        "tags": ["documentation", "api", "urgent"]
      }
    }
  ]
}

// You need to create a function that:
// 1. Fetches this data from the API
// 2. Processes it appropriately
// 3. Makes it usable in your application
// But you don't understand the data structure or fields fully
```

## The Problem

You need to work with an undocumented API that returns a complex data structure. The API appears to return information about different types of items (events, meetings, tasks), but you don't have clear documentation on:

- What all the fields mean
- What the status codes represent
- How to properly paginate through results
- How to filter or search for specific items
- How to handle the different item types

## Your Task

Use prompt engineering techniques to guide an AI coding assistant to:

1. Analyze and understand the API structure
2. Generate a comprehensive TypeScript interface for the API response
3. Create functions to fetch, process, and utilize this data
4. Implement proper pagination and error handling
5. Build a simple utility that can filter/search across the data

## Prompting Techniques to Practice

1. **Few-Shot Learning**: Provide examples of how you'd like to use the API data to guide the AI
2. **Constraint-Based Prompting**: Specify requirements and constraints clearly
3. **Incremental Understanding**: Break down the problem into smaller pieces
4. **Comparative Examples**: Use comparisons to clarify expected behavior

## Hints

- Start by asking the AI to analyze the structure and identify patterns
- Use the "thinking out loud" approach to understand the API design
- Ask for specific explanations of fields like "status" that aren't self-explanatory
- Provide examples of how you'd want to use the data in your application

## Success Criteria

Your solution should include:

- Well-documented TypeScript interfaces for all data structures
- A utility class or set of functions to work with the API
- Pagination handling for fetching multiple pages
- Error handling for API requests
- Functions to filter and search across items
- A simple example demonstrating usage

## Challenge Difficulty

⭐⭐⭐☆☆ (Intermediate)

Good luck!