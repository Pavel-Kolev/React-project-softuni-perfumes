import {
  useCol
} from "./chunk-JUMC3W2F.js";
import {
  Button_default2 as Button_default
} from "./chunk-I5ULIEEL.js";
import {
  require_classnames,
  require_jsx_runtime,
  useBootstrapPrefix
} from "./chunk-5BOC7VIE.js";
import {
  __toESM,
  require_react
} from "./chunk-L7APZED3.js";

// node_modules/react-bootstrap/esm/Placeholder.js
var React2 = __toESM(require_react());

// node_modules/react-bootstrap/esm/usePlaceholder.js
var import_classnames = __toESM(require_classnames());
function usePlaceholder({
  animation,
  bg,
  bsPrefix,
  size,
  ...props
}) {
  bsPrefix = useBootstrapPrefix(bsPrefix, "placeholder");
  const [{
    className,
    ...colProps
  }] = useCol(props);
  return {
    ...colProps,
    className: (0, import_classnames.default)(className, animation ? `${bsPrefix}-${animation}` : bsPrefix, size && `${bsPrefix}-${size}`, bg && `bg-${bg}`)
  };
}

// node_modules/react-bootstrap/esm/PlaceholderButton.js
var React = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var PlaceholderButton = React.forwardRef((props, ref) => {
  const placeholderProps = usePlaceholder(props);
  return (0, import_jsx_runtime.jsx)(Button_default, {
    ...placeholderProps,
    ref,
    disabled: true,
    tabIndex: -1
  });
});
PlaceholderButton.displayName = "PlaceholderButton";
var PlaceholderButton_default = PlaceholderButton;

// node_modules/react-bootstrap/esm/Placeholder.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var Placeholder = React2.forwardRef(({
  as: Component = "span",
  ...props
}, ref) => {
  const placeholderProps = usePlaceholder(props);
  return (0, import_jsx_runtime2.jsx)(Component, {
    ...placeholderProps,
    ref
  });
});
Placeholder.displayName = "Placeholder";
var Placeholder_default = Object.assign(Placeholder, {
  Button: PlaceholderButton_default
});

export {
  PlaceholderButton_default,
  Placeholder_default
};
//# sourceMappingURL=chunk-IZJOVLPF.js.map
