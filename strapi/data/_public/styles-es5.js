(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--13-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\n\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  background: #0037ff;\n}\n\n[hidden] {\n  opacity: 0;\n}\n\nhtml,\nbody,\nrouter-outlet {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\nform {\n  background: rgba(51, 51, 51, 0.333);\n  padding: 64px;\n  border-radius: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-flow: row wrap;\n  border: 1px solid white;\n}\n\nform .input-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nform .input-container label {\n  width: 80px;\n  font-size: 12px;\n  text-align: left;\n}\n\nform input,\nform span,\nform button {\n  display: block;\n  margin-bottom: 8px;\n}\n\nform input,\nform textarea,\nform button,\nform select {\n  outline: none;\n}\n\nform input {\n  padding: 8px;\n  width: 100%;\n  border-radius: 8px;\n  border: 1px solid white;\n  background: transparent;\n  color: white;\n}\n\nform input::-webkit-input-placeholder {\n  color: #cccccc;\n}\n\nform input::-moz-placeholder {\n  color: #cccccc;\n}\n\nform input::-ms-input-placeholder {\n  color: #cccccc;\n}\n\nform input::placeholder {\n  color: #cccccc;\n}\n\nform button {\n  padding: 8px 16px;\n  border-radius: 0;\n  border: 0;\n  margin-top: 16px;\n  background: transparent;\n  border-radius: 32px;\n  width: 100px;\n  border: 1px solid white;\n  color: white;\n  transition: 0.3s all;\n  text-transform: uppercase;\n}\n\nform button[type=submit] {\n  background: white;\n  color: black;\n}\n\nform button.selected {\n  background: #0037ff;\n}\n\nform button:hover {\n  cursor: pointer;\n  background: #0037ff;\n  color: white;\n}\n\nform .input-container button {\n  margin-top: 0;\n  border-radius: 8px;\n}\n\nform .input-container button.half:first-of-type {\n  margin-left: 0;\n  width: calc(50% - 4px);\n}\n\nform .input-container button.half:last-of-type {\n  margin-right: 0;\n  width: calc(50% - 4px);\n}\n\nform .half {\n  width: calc(50% - 8px);\n  margin-left: 4px;\n  margin-right: 4px;\n}\n\nform .full {\n  width: calc(100% - 8px);\n  margin-left: 4px;\n  margin-right: 4px;\n}\n\n.error input,\ninput.error {\n  border-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tldmluL2VyZ28tbGVhZGVyYm9hcmQvd2ViLWFwcC9zcmMvc3R5bGVzLnNjc3MiLCJzcmMvc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7Ozs7Ozs7Ozs7Ozs7RUFhRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FDSEY7O0FES0EsZ0RBQUE7O0FBQ0E7O0VBRUUsY0FBQTtBQ0ZGOztBRElBO0VBQ0UsY0FBQTtBQ0RGOztBREdBO0VBQ0UsZ0JBQUE7QUNBRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURDQTs7RUFFRSxXQUFBO0VBQ0EsYUFBQTtBQ0VGOztBREFBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQ0dGOztBRERBO0VBQ0Usc0JBQUE7QUNJRjs7QURGQTtFQUNFLG1CQUFBO0FDS0Y7O0FERkE7RUFDRSxVQUFBO0FDS0Y7O0FERkE7OztFQUdFLHdJQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0tGOztBREZBO0VBT0UsbUNBTGlCO0VBTWpCLGFBSmM7RUFLZCxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0RGOztBREdFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURHSTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNETjs7QURLRTs7O0VBR0UsY0FBQTtFQUNBLGtCQTdCYTtBQzBCakI7O0FETUU7Ozs7RUFJRSxhQUFBO0FDSko7O0FET0U7RUFDRSxZQXRDYTtFQXVDYixXQUFBO0VBQ0Esa0JBNUNZO0VBNkNaLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FDTEo7O0FET0k7RUFDRSxjQUFBO0FDTE47O0FESUk7RUFDRSxjQUFBO0FDTE47O0FESUk7RUFDRSxjQUFBO0FDTE47O0FESUk7RUFDRSxjQUFBO0FDTE47O0FEU0U7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FDUEo7O0FEU0k7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNQTjs7QURVSTtFQUNFLG1CQUFBO0FDUk47O0FEV0k7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDVE47O0FEY0k7RUFDRSxhQUFBO0VBQ0Esa0JBdEZVO0FDMEVoQjs7QURjUTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtBQ1pWOztBRGVRO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0FDYlY7O0FEbUJFO0VBR0Usc0JBQUE7RUFDQSxnQkFIYTtFQUliLGlCQUphO0FDZmpCOztBRHNCRTtFQUdFLHVCQUFBO0VBQ0EsZ0JBSGE7RUFJYixpQkFKYTtBQ2xCakI7O0FEMEJBOztFQUVFLGlCQUFBO0FDdkJGIiwiZmlsZSI6InNyYy9zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChcbiAgYmx1ZTogIzAwMzdmZlxuKTtcblxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuICBsaW5lLWhlaWdodDogMTtcbn1cbm9sLCB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLCBxIHtcbiAgcXVvdGVzOiBub25lO1xufVxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSwgcTphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBjb250ZW50OiBub25lO1xufVxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuaHRtbCB7XG4gIGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbG9ycywgYmx1ZSk7XG59XG5cbltoaWRkZW5dIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuaHRtbCxcbmJvZHksXG5yb3V0ZXItb3V0bGV0IHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5mb3JtIHtcbiAgJGlucHV0UmFkaXVzOiA4cHg7XG4gICRmb3JtQmFja2dyb3VuZDogcmdiYSgjMzMzMzMzLCAuMzMzKTtcbiAgJG1hcmdpbkJvdHRvbTogOHB4O1xuICAkZm9ybVBhZGRpbmc6IDY0cHg7XG4gICRpbnB1dFBhZGRpbmc6IDhweDtcblxuICBiYWNrZ3JvdW5kOiAkZm9ybUJhY2tncm91bmQ7XG4gIHBhZGRpbmc6ICRmb3JtUGFkZGluZztcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG5cbiAgLmlucHV0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgbGFiZWwge1xuICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgfVxuXG4gIGlucHV0LFxuICBzcGFuLFxuICBidXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206ICRtYXJnaW5Cb3R0b207XG4gIH1cblxuICBpbnB1dCxcbiAgdGV4dGFyZWEsXG4gIGJ1dHRvbixcbiAgc2VsZWN0IHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5cbiAgaW5wdXQge1xuICAgIHBhZGRpbmc6ICRpbnB1dFBhZGRpbmc7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogJGlucHV0UmFkaXVzO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiAjY2NjY2NjO1xuICAgIH1cbiAgfVxuXG4gIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiAzMnB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdHJhbnNpdGlvbjogLjNzIGFsbDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgJlt0eXBlPSdzdWJtaXQnXSB7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG5cbiAgICAmLnNlbGVjdGVkIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbG9ycywgYmx1ZSk7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kOiAjMDAzN2ZmO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxuXG4gIC5pbnB1dC1jb250YWluZXIge1xuICAgIGJ1dHRvbiB7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogJGlucHV0UmFkaXVzO1xuICAgICAgJi5oYWxmIHtcbiAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSA0cHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSA0cHgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmhhbGYge1xuICAgICRtYXJnaW5TaWRlOiA0cHg7XG5cbiAgICB3aWR0aDogY2FsYyg1MCUgLSAjezIgKiAkbWFyZ2luU2lkZX0pO1xuICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luU2lkZTtcbiAgICBtYXJnaW4tcmlnaHQ6ICRtYXJnaW5TaWRlO1xuICB9XG5cbiAgLmZ1bGwge1xuICAgICRtYXJnaW5TaWRlOiA0cHg7XG5cbiAgICB3aWR0aDogY2FsYygxMDAlIC0gI3syICogJG1hcmdpblNpZGV9KTtcbiAgICBtYXJnaW4tbGVmdDogJG1hcmdpblNpZGU7XG4gICAgbWFyZ2luLXJpZ2h0OiAkbWFyZ2luU2lkZTtcbiAgfVxufVxuXG4uZXJyb3IgaW5wdXQsXG5pbnB1dC5lcnJvciB7XG4gIGJvcmRlci1jb2xvcjogcmVkO1xufVxuIiwiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbm9sLCB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGUsIHEge1xuICBxdW90ZXM6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBjb250ZW50OiBub25lO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCB7XG4gIGJhY2tncm91bmQ6ICMwMDM3ZmY7XG59XG5cbltoaWRkZW5dIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuaHRtbCxcbmJvZHksXG5yb3V0ZXItb3V0bGV0IHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5mb3JtIHtcbiAgYmFja2dyb3VuZDogcmdiYSg1MSwgNTEsIDUxLCAwLjMzMyk7XG4gIHBhZGRpbmc6IDY0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xufVxuZm9ybSAuaW5wdXQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5mb3JtIC5pbnB1dC1jb250YWluZXIgbGFiZWwge1xuICB3aWR0aDogODBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuZm9ybSBpbnB1dCxcbmZvcm0gc3BhbixcbmZvcm0gYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbmZvcm0gaW5wdXQsXG5mb3JtIHRleHRhcmVhLFxuZm9ybSBidXR0b24sXG5mb3JtIHNlbGVjdCB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5mb3JtIGlucHV0IHtcbiAgcGFkZGluZzogOHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNjY2NjY2M7XG59XG5mb3JtIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXI6IDA7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAzMnB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IDAuM3MgYWxsO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuZm9ybSBidXR0b25bdHlwZT1zdWJtaXRdIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbn1cbmZvcm0gYnV0dG9uLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogIzAwMzdmZjtcbn1cbmZvcm0gYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjMDAzN2ZmO1xuICBjb2xvcjogd2hpdGU7XG59XG5mb3JtIC5pbnB1dC1jb250YWluZXIgYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuZm9ybSAuaW5wdXQtY29udGFpbmVyIGJ1dHRvbi5oYWxmOmZpcnN0LW9mLXR5cGUge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgd2lkdGg6IGNhbGMoNTAlIC0gNHB4KTtcbn1cbmZvcm0gLmlucHV0LWNvbnRhaW5lciBidXR0b24uaGFsZjpsYXN0LW9mLXR5cGUge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIHdpZHRoOiBjYWxjKDUwJSAtIDRweCk7XG59XG5mb3JtIC5oYWxmIHtcbiAgd2lkdGg6IGNhbGMoNTAlIC0gOHB4KTtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5mb3JtIC5mdWxsIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDhweCk7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG4uZXJyb3IgaW5wdXQsXG5pbnB1dC5lcnJvciB7XG4gIGJvcmRlci1jb2xvcjogcmVkO1xufSJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--13-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/kevin/ergo-leaderboard/web-app/src/styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es5.js.map