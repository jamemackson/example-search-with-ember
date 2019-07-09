import Route from '@ember/routing/route';

export default Route.extend({
  async model() {
    const resp = await fetch('software.json');

    if (resp.ok) {
      return resp.json();
    } else {
      return {
        error: 'no data returned'
      };
    }
  }
});
