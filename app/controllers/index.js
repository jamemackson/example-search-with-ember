import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  queryParams: ['search'],
  search: null,
  filteredSoftwareTitles: computed('search', function() {
    let search = this.search;
    let data = this.model;
    if (search) {
      // implement search logic here.
      console.log('data to search thru: ', data);
      return data;
    } else {
      return data;
    }
  })
});
