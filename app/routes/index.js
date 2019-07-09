import Route from '@ember/routing/route';

export default Route.extend({
  async model() {
    const resp = await fetch('software.json');

    if (resp.ok) {
      const data = await resp.json();
      console.log({ data });
      return data;
    } else {
      return {
        error: 'no data returned'
      };
    }
  }
});
