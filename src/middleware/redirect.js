export default function ({ route, redirect }) {
  if (route.path  === '/spectating')  {
    return redirect('/');
  }
}