import useSWR from "swr";
import axios from 'axios';

const apiURL = 'https://dev01.sotellus.com/API/v1/review/';

const fetcher = (url, payload) => axios({
  method: "get",
  url: "https://my-json-server.typicode.com/phpsquid/demo/reviews",
  data: payload
}).then(res => res.data);

let payload = {
  token: "gJ33tgrR4UttY-r9IRrFJQ",
  data: {
    name: "nameFirst",
    stars: "numberInt|3,5",
    review: "stringLong",
    date: "dateUnix",
    _repeat: 2
  }
};

export function getJWT() {
  return 'Bearer ' + 'uOZQ3ktL2qfrwmJQdV8uy_g3PePiqOIQQMX6Viuf0yWDcZi4LQGCYNBa2mqH20VMAL7junI0syLZCLWpjqCWkIk5fsC-gjtgf3gDpfqEOey6cuVlPXHVdEj2SLo9sIT1';
}

export function useGetReviews(page, filter) {
  const token = getJWT();

  const fetcher = async url => {
    const res = await fetch(apiURL + 'getReviews/1151?page=' + page + '&filter=' + filter, {
      method: "GET",
      withCredentials: true,
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
    })
    // If the status code is not in the range 200-299,
    // we still try to parse and throw it.
    if (!res.ok) {
      const error = new Error('An error occurred while fetching the data.')
      // Attach extra info to the error object.
      error.info = await res.json()
      error.status = res.status
      throw error
    }
    return await res.json()
  }

  const { data, error } = useSWR('/reviews?page=' + page + '&filter=' + filter, fetcher);
  return {
    reviews: data,
    isLoading: !error && !data,
    isError: error
  };
}

export function useGetReviewStats() {
  const token = getJWT();

  const fetcher = async url => {
    const res = await fetch(apiURL + 'getReviewStats/1151', {
      method: "GET",
      withCredentials: true,
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
    })
    // If the status code is not in the range 200-299,
    // we still try to parse and throw it.
    if (!res.ok) {
      const error = new Error('An error occurred while fetching the data.')
      // Attach extra info to the error object.
      error.info = await res.json()
      error.status = res.status
      throw error
    }
    return await res.json()
  }

  const { data, error } = useSWR('/reviewStats', fetcher);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
}

export function useReviews() {
  // return {
  //   reviews: false,
  //   isLoading: true,
  //   isError: false
  // }
  const { data, error } = useSWR(['/reviews', payload], fetcher, {shouldRetryOnError: false})
  return {
    reviews: data,
    isLoading: !error && !data,
    isError: error
  }
}