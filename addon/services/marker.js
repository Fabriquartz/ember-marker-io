import Service from '@ember/service';
import markerSDK from '@marker.io/browser';

/**
 * Service for keeping track of a registered [marker.io](marker.io) widget throughout your ember application
 * See https://github.com/marker-io/browser-sdk for more informtion about the marker.io sdk
 *
 * @export
 * @class MarkerService
 * @extends {Service}
 */
export default class MarkerService extends Service {
  #widget;

  /**
   * Register the marker widget. This method needs te be called
   * before any operations can be performed.
   *
   * @param {string} destination
   * @param {boolean} [silent=false]
   * @param {boolean} [keyboardShortcuts=true]
   * @param {number} [renderDelay=0]
   * @memberof MarkerService
   */
  async registerWidget(
    destination,
    silent = false,
    keyboardShortcuts = true,
    renderDelay = 0
  ) {
    this.#widget = await markerSDK.loadWidget({
      destination,
      silent,
      keyboardShortcuts,
      ssr: {
        renderDelay,
      },
    });
  }

  willDestroy() {
    this.unload();
  }

  /**
   * Wether or not the feedback widget is visible.
   *
   * @returns boolean
   * @memberof MarkerService
   */
  isVisible() {
    return this.#widget?.isVisible();
  }

  /**
   * Show the feedback button
   *
   * @memberof MarkerService
   */
  show() {
    this.#widget?.show();
  }

  /**
   * Hide the feedback button
   *
   * @memberof MarkerService
   */
  hide() {
    this.#widget?.hide();
  }

  /**
   * Capture a screenshot, as if the feedback button was clicked
   *
   * @param {string} mode captture mode, 'fullscreen' or 'advanced'
   * @memberof MarkerService
   */
  capture(mode) {
    this.#widget?.capture(mode);
  }

  /**
   * Cancel the capturing of a screenshot, close the feedback overlay
   *
   * @memberof MarkerService
   */
  cancelCapture() {
    this.#widget?.capture();
  }

  /**
   * Wether or not the marker.io browser extension is installed
   *
   * @returns boolean
   * @memberof MarkerService
   */
  isExtensionInstalled() {
    return this.#widget?.isExtensionInstalled();
  }

  /**
   * Add rerporter information (e.g. current user) to the reporting
   *
   * @param {{email:string, fullName:string}} reporterInfo
   * @memberof MarkerService
   */
  async setReporter(reporterInfo) {
    await this.#widget?.setReporter(reporterInfo);
  }

  /**
   * Adds custom metadata to the widget, to be sent with any feedback.
   *
   * @param {*} [data={}] Custom metadata to add
   * @memberof MarkerService
   */
  setCustomData(data = {}) {
    this.#widget?.setCustomData(data);
  }

  /**
   * Clean up marker.io sdk, unload resources
   *
   * @memberof MarkerService
   */
  unloadWidget() {
    this.#widget?.unload();
  }
}
