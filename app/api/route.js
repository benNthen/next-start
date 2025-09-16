export function GET(request) {
  console.log(request) // displays request if user navigates to http://localhost:3000/api

  return new Response('Hello!') // the content of the request that is displayed on the page
}
