// This file contains the javascript that is run when the notebook is loaded.
// It contains some requirejs configuration and the `load_ipython_extension`
// which is required for any notebook extension.
//
// Some static assets may be required by the custom widget javascript. The base
// url for the notebook is not known at build time and is therefore computed
// dynamically.
__webpack_public_path__ = document.querySelector('body').getAttribute('data-base-url') + 'nbextensions/vgrid_jupyter';

// Configure requirejs
if (window.require) {
  window.require.config({
    map: {
      "*" : {
        "vgrid_jupyter": "nbextensions/vgrid_jupyter/index",
      }
    }
  });
}

// Export the required load_ipython_extension
export function load_ipython_extension () {
  let link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.type ='text/css';
  link.href = `${__webpack_public_path__}/index.css`;
  document.head.appendChild(link);
}
