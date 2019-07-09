import Controller from '@ember/controller';
import { computed } from '@ember/object';
import semver from 'semver';

/**
 * coerceIfNeeded will return the original search value if already a valid semver string
 * else it will attempt to coerce a value based on what's passed in and it's calculated version
 * will be returned.
 *
 * This would logically be moved into it's own module and have it's own tests written for it,
 * but I've included it here inline for brevity.
 *
 * @param {string} searchValue
 */
function coerceIfNeeded(searchValue) {
  if (!semver.valid(searchValue)) {
    const calculated = semver.coerce(searchValue);
    if (calculated) {
      return calculated.version;
    }
    console.log('search after coerce: ', searchVersion);
  }
  return searchValue;
}

export default Controller.extend({
  queryParams: ['search'],
  search: null,

  /**
   * filteredSoftwareTitles is a computed property that
   * will update anytime the search query param is changed
   */
  filteredSoftwareTitles: computed('search', function() {
    let searchVersion = this.search;
    let data = this.model;
    if (searchVersion) {
        searchVersion = coerceIfNeeded(searchVersion);
        return data.filter(software => semver.gt(coerceIfNeeded(software.version), searchVersion));
    } else {
      return data;
    }
  })
});
