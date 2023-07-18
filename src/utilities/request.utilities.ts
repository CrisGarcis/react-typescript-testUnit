// Make the `request` function generic
// to specify the return data type:
export function request<TResponse>(
  url: string,
  config: RequestInit = {}
): Promise<TResponse> {
  // Inside, we call the `fetch` function with
  // a URL and config given:
  return (
    fetch(url, config)
      // When got a response call a `json` method on it
      .then((response) => response.json())
      // and return the result data.
      .then((data) => data as TResponse)
  );

  // We also can use some post-response
  // data-transformations in the last `then` clause.
}
