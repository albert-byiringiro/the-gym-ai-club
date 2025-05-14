# Solution Guide: The Unknown API Challenge

This guide demonstrates effective prompt engineering techniques to understand and work with an undocumented API using AI coding assistants.

## Prompt Strategy Overview

When working with an undocumented API, the most effective approach is to use **incremental understanding** and **few-shot learning**. This allows you to:

1. Analyze the API structure systematically
2. Extract patterns and meaning from the sample data
3. Build interfaces and utilities incrementally
4. Define practical usage examples to guide implementation

## Step 1: Initial API Analysis

### Effective Prompt:

```
I'm working with an undocumented API that returns the following JSON response:

```javascript
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
    // Additional items omitted for brevity
  ]
}
```

Please help me analyze this API response structure by:
1. Identifying the main components and their purpose
2. Explaining what each field likely represents
3. Describing the apparent data model
4. Noting any patterns or conventions used in the API
5. Identifying what the status codes might represent

I need to understand this API thoroughly before implementing it in my TypeScript application.
```

### Why This Prompt Works:

This prompt:
- Provides the complete API response for analysis
- Requests systematic analysis of different aspects
- Shows you want to understand before implementing
- Specifically asks for interpretation of unclear fields (like status codes)
- Mentions TypeScript to guide the AI toward type-focused analysis

## Step 2: Creating TypeScript Interfaces

### Effective Prompt:

```
Thank you for that analysis. Now I'd like to create TypeScript interfaces for this API. 

Based on your analysis, please generate comprehensive TypeScript interfaces for:
1. The complete API response
2. Each distinct data type ("event", "meeting", "task")
3. Any common structures or shared types

Please ensure the interfaces:
- Use specific types (not 'any')
- Include documentation comments explaining each field
- Handle possible null/undefined values
- Use union types for fields that can have multiple types

I'll use these interfaces as the foundation for implementing API client functions.
```

### Why This Prompt Works:

This prompt:
- Builds on the previous analysis
- Specifies exactly what interfaces are needed
- Provides clear requirements for the interfaces
- Explains how you'll use the resulting interfaces
- Requests documentation as part of the interfaces

## Step 3: Creating API Client Functions

### Effective Prompt:

```
The TypeScript interfaces look great. Now I need to implement functions to work with this API.

I'd like to create a client class that handles:
1. Fetching data with pagination
2. Filtering items by type, tags, or other properties
3. Error handling for API requests
4. Type safety throughout

Here's how I'd like to use this client in my application:

```typescript
// Example usage I'd like to achieve:
const apiClient = new APIClient('https://api.example.com/v1');

// Get all events
const events = await apiClient.getItemsByType('event');

// Get items with a specific tag
const techItems = await apiClient.getItemsByTag('tech');

// Get paginated results
const page2 = await apiClient.getItems({ page: 2, perPage: 20 });

// Get a specific item by uid
const specificItem = await apiClient.getItemById('a1b2c3');
```

Please implement the APIClient class with these capabilities, ensuring it:
- Uses the TypeScript interfaces we created
- Includes proper error handling
- Supports pagination
- Has comprehensive JSDoc comments
```

### Why This Prompt Works:

This prompt:
- Provides example usage to demonstrate desired API
- Requests specific functionality with clear requirements
- Builds on previously created interfaces
- Shows real-world application context

## Step 4: Adding Advanced Features and Error Handling

### Effective Prompt:

```
The APIClient implementation looks good. Now let's add more advanced features and robust error handling.

Please extend the APIClient class to include:

1. Retry logic for failed requests:
   - Automatically retry transient errors (network issues, rate limits)
   - Configure max retries and backoff strategy

2. Response caching:
   - Cache responses for configurable duration
   - Implement cache invalidation for mutating operations

3. Comprehensive error handling:
   - Specific error types for different API errors
   - Helpful error messages with request context

Here's an example of how I'd like the error handling to work:

```typescript
try {
  const result = await apiClient.getItemById('invalid-id');
} catch (error) {
  if (error instanceof APINotFoundError) {
    console.log('Item not found, show 404 page');
  } else if (error instanceof APIRateLimitError) {
    console.log('Rate limited, retry after:', error.retryAfter);
  } else if (error instanceof APIConnectionError) {
    console.log('Connection issue:', error.message);
  }
}
```

Please implement these features with appropriate TypeScript typing and documentation.
```

### Why This Prompt Works:

This prompt:
- Builds on the previous implementation
- Provides examples of desired error handling
- Requests specific advanced features
- Shows how you want to interact with the API in edge cases

## Complete Solution

Through this iterative process, you'd build a comprehensive understanding of the API and create a well-typed, robust client library. Here's a simplified example of what the final solution might include:

### TypeScript Interfaces:

```typescript
/**
 * The complete API response structure
 */
interface APIResponse<T> {
  /** Metadata about the response and request */
  meta: ResponseMetadata;
  /** The actual data items returned by the API */
  data: T[];
}

/**
 * Metadata information included with each API response
 */
interface ResponseMetadata {
  /** Status of the API request: 'ok' for successful requests */
  status: 'ok' | 'error';
  /** Pagination information if the response is paginated */
  pagination: PaginationInfo;
  /** Unique identifier for the request, useful for troubleshooting */
  request_id: string;
}

/**
 * Pagination information for API responses
 */
interface PaginationInfo {
  /** Current page number (1-based) */
  page: number;
  /** Number of items per page */
  per_page: number;
  /** Total number of items across all pages */
  total: number;
  /** Total number of pages */
  pages: number;
}

/**
 * Base interface for all item types in the API
 */
interface BaseItem {
  /** Unique identifier for the item */
  uid: string;
  /** The type of the item: 'event', 'meeting', or 'task' */
  type: 'event' | 'meeting' | 'task';
  /** ISO timestamp when the item was created */
  created_at: string;
  /** ISO timestamp when the item was last modified */
  modified_at: string;
  /** The specific attributes for this item type */
  attrs: EventAttrs | MeetingAttrs | TaskAttrs;
}

/**
 * Type guard to check if an item is an event
 */
function isEvent(item: BaseItem): item is BaseItem & { attrs: EventAttrs } {
  return item.type === 'event';
}

// Additional type definitions and guards for different item types...
```

### API Client Implementation:

```typescript
/**
 * Client for interacting with the API
 */
class APIClient {
  private baseUrl: string;
  private cacheConfig: CacheConfig;
  private retryConfig: RetryConfig;
  
  /**
   * Creates a new API client instance
   * 
   * @param baseUrl - The base URL for the API
   * @param options - Configuration options for the client
   */
  constructor(
    baseUrl: string, 
    options: {
      cacheConfig?: Partial<CacheConfig>,
      retryConfig?: Partial<RetryConfig>
    } = {}
  ) {
    this.baseUrl = baseUrl;
    this.cacheConfig = {
      enabled: true,
      ttl: 5 * 60 * 1000, // 5 minutes
      ...options.cacheConfig
    };
    this.retryConfig = {
      maxRetries: 3,
      initialDelay: 1000,
      backoffFactor: 2,
      ...options.retryConfig
    };
  }
  
  /**
   * Fetches items from the API with optional filtering and pagination
   * 
   * @param options - Request options for filtering and pagination
   * @returns A promise resolving to the API response with items
   * @throws {APIError} If the API request fails
   */
  async getItems(options: GetItemsOptions = {}): Promise<APIResponse<BaseItem>> {
    // Implementation...
  }
  
  // Additional methods and error handling...
}
```

## Key Lessons from This Challenge

1. **Analyze before implementing**: Taking time to understand the API structure pays off in better implementation.

2. **Use incremental understanding**: Break down complex APIs into manageable components for analysis.

3. **Few-shot learning with examples**: Providing example usage scenarios helps the AI understand your needs.

4. **Build typings first**: Creating detailed interfaces provides a strong foundation for implementation.

5. **Constraint-based prompting**: Specifying requirements for error handling, caching, etc. guides implementation.

Effective prompt engineering for API integration is about systematically analyzing the data structure, defining clear interfaces, and incrementally building functionality based on real-world usage scenarios.