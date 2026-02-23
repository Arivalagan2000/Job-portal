# JSONFakery API Integration Guide

## Overview

This Job Portal application is now integrated with the JSONFakery Jobs API, providing real-time job data from an external source. You can easily switch between mock data (for development/testing) and live API data.

## API Configuration

### Switching Between Mock and Live Data

Edit `/src/config/app.config.ts`:

```typescript
export const APP_CONFIG = {
  API: {
    // Set to 'mock' for local testing, 'live' for real API data
    MODE: 'live' as 'mock' | 'live',
    BASE_URL: 'https://jsonfakery.com/jobs',
  },
  // ... other settings
};
```

## Available API Endpoints

The application uses the following JSONFakery API endpoints:

### 1. **All Jobs**
```
GET https://jsonfakery.com/jobs
```
Returns all mock job postings.

### 2. **Paginated Jobs**
```
GET https://jsonfakery.com/jobs/paginated?page=1
```
Returns paginated results with page links and metadata.

**Response structure:**
```json
{
  "data": [/* jobs array */],
  "current_page": 1,
  "last_page": 5,
  "per_page": 15,
  "total": 75,
  "next_page_url": "https://jsonfakery.com/jobs/paginated?page=2",
  "prev_page_url": null
}
```

### 3. **Simple Pagination**
```
GET https://jsonfakery.com/jobs/simple-paginate?page=1
```
Returns only "Next" and "Previous" links.

**Response structure:**
```json
{
  "data": [/* jobs array */],
  "next_page_url": "https://jsonfakery.com/jobs/simple-paginate?page=2",
  "prev_page_url": null
}
```

### 4. **Infinite Scrolling**
```
GET https://jsonfakery.com/jobs/infinite-scroll?page=1
```
Designed for infinite scroll UI implementations.

**Response structure:**
```json
{
  "data": [/* jobs array */],
  "next_page_url": "https://jsonfakery.com/jobs/infinite-scroll?page=2"
}
```

### 5. **Single Random Job**
```
GET https://jsonfakery.com/jobs/random
```
Returns a single random job posting.

### 6. **Multiple Random Jobs**
```
GET https://jsonfakery.com/jobs/random/3
```
Returns N random job postings (replace 3 with desired count).

## Usage in Code

### Fetching All Jobs

```typescript
import { fetchJobs } from '../services/jobsApi';

const jobs = await fetchJobs();
```

### Fetching Paginated Jobs

```typescript
import { fetchPaginatedJobs } from '../services/jobsApi';

const response = await fetchPaginatedJobs(1); // page 1
console.log(response.data); // jobs array
console.log(response.next_page_url); // next page URL
```

### Fetching for Infinite Scroll

```typescript
import { fetchInfiniteScrollJobs } from '../services/jobsApi';

const response = await fetchInfiniteScrollJobs(1);
console.log(response.data); // jobs array
console.log(response.next_page_url); // next page or null
```

### Fetching Random Jobs

```typescript
import { fetchRandomJob, fetchRandomJobs } from '../services/jobsApi';

// Single random job
const singleJob = await fetchRandomJob();

// Multiple random jobs
const multipleJobs = await fetchRandomJobs(5); // 5 random jobs
```

## Job Data Structure

Each job object returned from the API follows this structure:

```typescript
interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  employment_type: string;
  job_category: string;
  salary_from: number;
  salary_to: number;
  is_remote_work: number; // 0 or 1
  openings: number;
  application_deadline: string;
  qualifications?: string;
  created_at: string;
  updated_at: string;
}
```

## Error Handling

All API functions include comprehensive error handling:

```typescript
try {
  const jobs = await fetchJobs();
  // Handle success
} catch (error) {
  // Error message is user-friendly
  console.error(error.message);
  // Show error to user
}
```

## Implementation Details

### Current Implementation

The application currently uses the **"All Jobs"** endpoint (`/jobs`) and performs:
- Client-side filtering (search, location, employment type, remote, salary, etc.)
- Client-side sorting (newest, oldest, salary, title)
- Client-side pagination

This approach provides:
✅ Fast filtering without API calls
✅ Real-time filter updates
✅ No API rate limiting concerns
✅ Better user experience with instant results

### Alternative: Server-Side Pagination

To use the paginated API endpoints instead:

1. Modify the `loadJobs` function in `App.tsx`
2. Use `fetchPaginatedJobs(page)` or `fetchInfiniteScrollJobs(page)`
3. Update pagination controls to call API on page change
4. Handle loading states during API calls

**Pros:**
- Reduced initial load time
- Lower memory usage for large datasets

**Cons:**
- Filters/sorting would require API support or additional implementation
- Slower user experience (network latency on page changes)
- More complex state management

## Testing

### Mock Mode
Set `MODE: 'mock'` in config to test with local data:
- Faster development
- No network dependency
- 25 realistic job listings included

### Live Mode
Set `MODE: 'live'` in config to test with real API:
- Test error handling
- Verify API integration
- Production-ready behavior

## CORS and Security

The JSONFakery API:
- ✅ Has CORS enabled for all origins
- ✅ Requires no authentication
- ✅ Is free to use for prototyping
- ⚠️ Should not be used for production applications with sensitive data

## Performance Considerations

1. **Caching**: The application caches all jobs in state after initial fetch
2. **Debouncing**: Search input has 500ms debounce to reduce re-renders
3. **Memoization**: Filtered/sorted results are memoized using `useMemo`
4. **Lazy Loading**: Skeleton screens show during API calls

## Troubleshooting

### API Not Loading

1. Check internet connection
2. Verify API endpoint in browser: https://jsonfakery.com/jobs
3. Check browser console for CORS errors
4. Try switching to mock mode temporarily

### Slow Performance

1. Check network speed
2. Consider implementing pagination with API
3. Reduce number of jobs displayed per page
4. Optimize filter operations

### Type Errors

1. Ensure Job interface matches API response
2. Check TypeScript version compatibility
3. Verify all API response fields are handled

## Future Enhancements

Potential improvements for API integration:

- [ ] Implement server-side filtering API calls
- [ ] Add request caching with expiration
- [ ] Implement retry logic with exponential backoff
- [ ] Add request cancellation for navigation
- [ ] Support API authentication tokens
- [ ] Add GraphQL support as alternative
- [ ] Implement request queuing for rate limiting
- [ ] Add request/response interceptors for logging

## Resources

- **JSONFakery Documentation**: https://jsonfakery.com
- **Axios Documentation**: https://axios-http.com/docs/intro
- **React Query** (recommended for advanced API state): https://tanstack.com/query/latest

---

**API Mode:** Currently set to `${APP_CONFIG.API.MODE}`  
**Base URL:** `${APP_CONFIG.API.BASE_URL}`
