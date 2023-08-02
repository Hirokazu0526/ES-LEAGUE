export default function ({ route, redirect }) {
  if (route.path  === '/spectating' || route.path  === '/nagoya' )  {
    return redirect('/');
  }
}