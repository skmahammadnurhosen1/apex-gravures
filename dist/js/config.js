/**
 * Backwards Compatibility Layer
 * Re-exports COMPANY_DATA as SITE_CONFIG from companyData.js
 */

if (typeof COMPANY_DATA !== 'undefined') {
  var SITE_CONFIG = COMPANY_DATA;
} else if (typeof require !== 'undefined') {
  var COMPANY_DATA = require('./companyData.js');
  var SITE_CONFIG = COMPANY_DATA;
}

if (typeof window !== 'undefined') {
  window.SITE_CONFIG = window.COMPANY_DATA || SITE_CONFIG;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_CONFIG;
}
