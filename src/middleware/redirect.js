export default function ({ route, redirect }) {
  if (route.path !== '/redirect')  {
    return redirect('/redirect');
  }
}