import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/client/App.tsx");import "/client/global.css?t=1778475716281";
import { Toaster } from "/client/components/ui/toaster.tsx";
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=21dabf4f"; const createRoot = __vite__cjsImport2_reactDom_client["createRoot"];
import { Toaster as Sonner } from "/client/components/ui/sonner.tsx";
import { TooltipProvider } from "/client/components/ui/tooltip.tsx";
import { QueryClient, QueryClientProvider } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=8dcea246";
import { BrowserRouter, Routes, Route } from "/node_modules/.vite/deps/react-router-dom.js?v=61ba6239";
import Index from "/client/pages/Index.tsx?t=1778475688822";
import Placeholder from "/client/pages/Placeholder.tsx";
import NotFound from "/client/pages/NotFound.tsx";
var _jsxFileName = "/root/app/code/client/App.tsx";
import __vite__cjsImport10_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=17237180"; const _jsxDEV = __vite__cjsImport10_react_jsxDevRuntime["jsxDEV"];
const queryClient = new QueryClient();
const App = () => /* @__PURE__ */ _jsxDEV(QueryClientProvider, {
	client: queryClient,
	children: /* @__PURE__ */ _jsxDEV(TooltipProvider, { children: [
		/* @__PURE__ */ _jsxDEV(Toaster, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 18,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ _jsxDEV(Sonner, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 19,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ _jsxDEV(BrowserRouter, { children: /* @__PURE__ */ _jsxDEV(Routes, { children: [
			/* @__PURE__ */ _jsxDEV(Route, {
				path: "/",
				element: /* @__PURE__ */ _jsxDEV(Index, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 22,
					columnNumber: 36
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 22,
				columnNumber: 11
			}, this),
			/* @__PURE__ */ _jsxDEV(Route, {
				path: "/placeholder",
				element: /* @__PURE__ */ _jsxDEV(Placeholder, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 23,
					columnNumber: 47
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 23,
				columnNumber: 11
			}, this),
			/* @__PURE__ */ _jsxDEV(Route, {
				path: "*",
				element: /* @__PURE__ */ _jsxDEV(NotFound, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 25,
					columnNumber: 36
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 25,
				columnNumber: 11
			}, this)
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 21,
			columnNumber: 9
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 20,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 17,
		columnNumber: 5
	}, this)
}, void 0, false, {
	fileName: _jsxFileName,
	lineNumber: 16,
	columnNumber: 3
}, this);
_c = App;
createRoot(document.getElementById("root")).render(/* @__PURE__ */ _jsxDEV(App, {}, void 0, false, {
	fileName: _jsxFileName,
	lineNumber: 32,
	columnNumber: 53
}, this));
var _c;
$RefreshReg$(_c, "App");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/client/App.tsx?t=1778475716281";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/root/app/code/client/App.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/root/app/code/client/App.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/root/app/code/client/App.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsT0FBTztBQUVQLFNBQVMsZUFBZTtBQUN4QixTQUFTLGtCQUFrQjtBQUMzQixTQUFTLFdBQVcsY0FBYztBQUNsQyxTQUFTLHVCQUF1QjtBQUNoQyxTQUFTLGFBQWEsMkJBQTJCO0FBQ2pELFNBQVMsZUFBZSxRQUFRLGFBQWE7QUFDN0MsT0FBTyxXQUFXO0FBQ2xCLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sY0FBYzs7O0FBRXJCLE1BQU0sY0FBYyxJQUFJLGFBQWE7QUFFckMsTUFBTSxZQUNKLHdCQUFDLHFCQUFEO0NBQXFCLFFBQVE7V0FDM0Isd0JBQUMsaUJBQUQ7RUFDRSx3QkFBQyxTQUFELEVBQVc7Ozs7O0VBQ1gsd0JBQUMsUUFBRCxFQUFVOzs7OztFQUNWLHdCQUFDLGVBQUQsWUFDRSx3QkFBQyxRQUFEO0dBQ0Usd0JBQUMsT0FBRDtJQUFPLE1BQUs7SUFBSSxTQUFTLHdCQUFDLE9BQUQsRUFBUzs7Ozs7SUFBSTs7Ozs7R0FDdEMsd0JBQUMsT0FBRDtJQUFPLE1BQUs7SUFBZSxTQUFTLHdCQUFDLGFBQUQsRUFBZTs7Ozs7SUFBSTs7Ozs7R0FFdkQsd0JBQUMsT0FBRDtJQUFPLE1BQUs7SUFBSSxTQUFTLHdCQUFDLFVBQUQsRUFBWTs7Ozs7SUFBSTs7Ozs7R0FDbEM7Ozs7WUFDSzs7Ozs7RUFDQTs7Ozs7Q0FDRTs7Ozs7O0FBR3hCLFdBQVcsU0FBUyxlQUFlLE9BQU8sQ0FBRSxDQUFDLE9BQU8sd0JBQUMsS0FBRCxFQUFPOzs7O1NBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQXBwLnRzeCJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL2dsb2JhbC5jc3NcIjtcblxuaW1wb3J0IHsgVG9hc3RlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdG9hc3RlclwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgeyBUb2FzdGVyIGFzIFNvbm5lciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvc29ubmVyXCI7XG5pbXBvcnQgeyBUb29sdGlwUHJvdmlkZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3Rvb2x0aXBcIjtcbmltcG9ydCB7IFF1ZXJ5Q2xpZW50LCBRdWVyeUNsaWVudFByb3ZpZGVyIH0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgUm91dGVzLCBSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgSW5kZXggZnJvbSBcIi4vcGFnZXMvSW5kZXhcIjtcbmltcG9ydCBQbGFjZWhvbGRlciBmcm9tIFwiLi9wYWdlcy9QbGFjZWhvbGRlclwiO1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gXCIuL3BhZ2VzL05vdEZvdW5kXCI7XG5cbmNvbnN0IHF1ZXJ5Q2xpZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KCk7XG5cbmNvbnN0IEFwcCA9ICgpID0+IChcbiAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XG4gICAgPFRvb2x0aXBQcm92aWRlcj5cbiAgICAgIDxUb2FzdGVyIC8+XG4gICAgICA8U29ubmVyIC8+XG4gICAgICA8QnJvd3NlclJvdXRlcj5cbiAgICAgICAgPFJvdXRlcz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8SW5kZXggLz59IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcGxhY2Vob2xkZXJcIiBlbGVtZW50PXs8UGxhY2Vob2xkZXIgLz59IC8+XG4gICAgICAgICAgey8qIEFERCBBTEwgQ1VTVE9NIFJPVVRFUyBBQk9WRSBUSEUgQ0FUQ0gtQUxMIFwiKlwiIFJPVVRFICovfVxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiKlwiIGVsZW1lbnQ9ezxOb3RGb3VuZCAvPn0gLz5cbiAgICAgICAgPC9Sb3V0ZXM+XG4gICAgICA8L0Jyb3dzZXJSb3V0ZXI+XG4gICAgPC9Ub29sdGlwUHJvdmlkZXI+XG4gIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cbik7XG5cbmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpISkucmVuZGVyKDxBcHAgLz4pO1xuIl19