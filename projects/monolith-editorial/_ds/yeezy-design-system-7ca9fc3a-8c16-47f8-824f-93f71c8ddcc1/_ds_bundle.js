/* @ds-bundle: {"format":3,"namespace":"YEEZYDesignSystem_7ca9fc","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Checkbox","sourcePath":"components/core/Checkbox.jsx"},{"name":"DotPagination","sourcePath":"components/core/DotPagination.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Modal","sourcePath":"components/core/Modal.jsx"},{"name":"NavBar","sourcePath":"components/core/NavBar.jsx"},{"name":"ProductTile","sourcePath":"components/core/ProductTile.jsx"},{"name":"SizeSelector","sourcePath":"components/core/SizeSelector.jsx"},{"name":"StatusLabel","sourcePath":"components/core/StatusLabel.jsx"}],"sourceHashes":{"components/core/Button.jsx":"ea10c7d89a8e","components/core/Checkbox.jsx":"3cef31398ed1","components/core/DotPagination.jsx":"6c330af72d78","components/core/IconButton.jsx":"3b3c26981789","components/core/Input.jsx":"317b1e6aea6a","components/core/Modal.jsx":"4a7531fc98dc","components/core/NavBar.jsx":"e9686c8a8542","components/core/ProductTile.jsx":"a71f171d9f52","components/core/SizeSelector.jsx":"bafbea9b63fb","components/core/StatusLabel.jsx":"1aacadae6c9a","ui_kits/storefront/Checkout.jsx":"b2a0db1cabcb","ui_kits/storefront/GridScreen.jsx":"9bbf3407a589","ui_kits/storefront/ProductDetail.jsx":"9e708c2a730f","ui_kits/storefront/data.js":"fa392480ab97"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.YEEZYDesignSystem_7ca9fc = window.YEEZYDesignSystem_7ca9fc || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * YEEZY primary action. A solid-black block — the one bold element on a page.
 * Variants: solid (default), outline, ghost. Sizes: sm, md, lg, block.
 */
function Button({
  children,
  variant = "solid",
  size = "md",
  block = false,
  disabled = false,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const pads = {
    sm: "8px 14px",
    md: "12px 20px",
    lg: "16px 28px"
  };
  const fonts = {
    sm: "11px",
    md: "12px",
    lg: "13px"
  };
  const base = {
    appearance: "none",
    border: "1px solid var(--black)",
    borderRadius: 0,
    fontFamily: "var(--font-mono)",
    fontSize: fonts[size] || fonts.md,
    fontWeight: 400,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    padding: pads[size] || pads.md,
    cursor: disabled ? "not-allowed" : "pointer",
    width: block ? "100%" : "auto",
    transition: "background var(--dur-fast) var(--ease), color var(--dur-fast) var(--ease), opacity var(--dur-fast) var(--ease)",
    lineHeight: 1,
    whiteSpace: "nowrap"
  };
  const variants = {
    solid: {
      background: "var(--black)",
      color: "var(--white)"
    },
    outline: {
      background: "transparent",
      color: "var(--black)"
    },
    ghost: {
      background: "transparent",
      color: "var(--black)",
      border: "1px solid transparent"
    }
  };
  const disabledStyle = disabled ? {
    background: "var(--grey-08)",
    color: "var(--grey-30)",
    borderColor: "var(--grey-15)"
  } : null;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: {
      ...base,
      ...variants[variant],
      ...disabledStyle,
      ...style
    },
    onMouseEnter: e => {
      if (disabled) return;
      if (variant === "solid") e.currentTarget.style.background = "var(--grey-90)";else e.currentTarget.style.opacity = "0.55";
    },
    onMouseLeave: e => {
      if (disabled) return;
      if (variant === "solid") e.currentTarget.style.background = "var(--black)";else e.currentTarget.style.opacity = "1";
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Checkbox.jsx
try { (() => {
/**
 * Square monoline checkbox with mono-caps label. For consent / fine print.
 */
function Checkbox({
  checked = false,
  onChange,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "10px",
      cursor: "pointer",
      fontFamily: "var(--font-mono)",
      fontSize: "10px",
      letterSpacing: "0.04em",
      lineHeight: 1.5,
      color: "var(--grey-50)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange && onChange(!checked),
    style: {
      flex: "0 0 auto",
      width: "12px",
      height: "12px",
      border: "1px solid var(--black)",
      borderRadius: 0,
      background: checked ? "var(--black)" : "transparent",
      color: "var(--white)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "9px",
      lineHeight: 1,
      marginTop: "1px"
    }
  }, checked ? "×" : ""), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/core/DotPagination.jsx
try { (() => {
/**
 * Dot pagination for alternate product images. Tiny filled/hollow dots.
 */
function DotPagination({
  count = 0,
  index = 0,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px",
      alignItems: "center",
      ...style
    }
  }, Array.from({
    length: count
  }).map((_, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    "aria-label": `Image ${i + 1}`,
    onClick: () => onChange && onChange(i),
    style: {
      appearance: "none",
      border: "1px solid var(--black)",
      borderRadius: 0,
      width: "6px",
      height: "6px",
      padding: 0,
      background: i === index ? "var(--black)" : "transparent",
      cursor: "pointer",
      transition: "background var(--dur-fast) var(--ease)"
    }
  })));
}
Object.assign(__ds_scope, { DotPagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/DotPagination.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tiny monoline icon control: + × ‹ bag, etc. Pass a glyph as children.
 * Hyper-minimal, no background by default.
 */
function IconButton({
  children,
  label,
  size = 24,
  active = false,
  onClick,
  style,
  ...rest
}) {
  const base = {
    appearance: "none",
    background: "transparent",
    border: "none",
    borderRadius: 0,
    width: size,
    height: size,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    cursor: "pointer",
    fontFamily: "var(--font-mono)",
    fontSize: Math.round(size * 0.8),
    fontWeight: 400,
    lineHeight: 1,
    color: "var(--black)",
    opacity: active ? 0.4 : 1,
    transition: "opacity var(--dur-fast) var(--ease)"
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    onClick: onClick,
    style: {
      ...base,
      ...style
    },
    onMouseEnter: e => e.currentTarget.style.opacity = "0.4",
    onMouseLeave: e => e.currentTarget.style.opacity = active ? "0.4" : "1"
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Bare underlined-on-focus input. No box-shadow, hard hairline border.
 * Variant "line" = bottom border only (checkout style).
 */
function Input({
  variant = "box",
  invalid = false,
  style,
  ...rest
}) {
  const base = {
    appearance: "none",
    width: "100%",
    boxSizing: "border-box",
    background: "transparent",
    fontFamily: "var(--font-mono)",
    fontSize: "12px",
    letterSpacing: "0.02em",
    color: "var(--black)",
    padding: variant === "line" ? "10px 0" : "12px 14px",
    border: variant === "line" ? "none" : "1px solid var(--black)",
    borderBottom: "1px solid var(--black)",
    borderRadius: 0,
    outline: "none",
    transition: "border-color var(--dur-fast) var(--ease)"
  };
  const invalidStyle = invalid ? {
    borderColor: "var(--black)",
    textDecoration: "underline"
  } : null;
  return /*#__PURE__*/React.createElement("input", _extends({
    style: {
      ...base,
      ...invalidStyle,
      ...style
    },
    onFocus: e => e.currentTarget.style.borderBottomWidth = "2px",
    onBlur: e => e.currentTarget.style.borderBottomWidth = "1px"
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Modal.jsx
try { (() => {
/**
 * Small centered modal over the white canvas. Hairline border, × close, no radius.
 * Used for email capture, cart, and inline checkout.
 */
function Modal({
  open,
  onClose,
  children,
  width = 360,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(255,255,255,0.85)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
      padding: "24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: "relative",
      width,
      maxWidth: "100%",
      background: "var(--white)",
      border: "1px solid var(--black)",
      borderRadius: 0,
      padding: "32px 28px",
      fontFamily: "var(--font-mono)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: onClose,
    style: {
      position: "absolute",
      top: "10px",
      right: "12px",
      appearance: "none",
      background: "transparent",
      border: "none",
      fontFamily: "var(--font-mono)",
      fontSize: "16px",
      lineHeight: 1,
      cursor: "pointer",
      color: "var(--black)"
    }
  }, "\xD7"), children));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Modal.jsx", error: String((e && e.message) || e) }); }

// components/core/NavBar.jsx
try { (() => {
/**
 * Top navigation: + density toggle (left), centered tiny mono-caps links, cart (right).
 */
function NavBar({
  items = [],
  active,
  onSelect,
  onToggleDensity,
  cartCount = 0,
  onCart,
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr auto 1fr",
      alignItems: "center",
      padding: "16px 20px",
      fontFamily: "var(--font-mono)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      justifySelf: "start"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    label: "Toggle density",
    onClick: onToggleDensity
  }, "+")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "20px",
      justifySelf: "center",
      flexWrap: "wrap",
      justifyContent: "center"
    }
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it,
    type: "button",
    onClick: () => onSelect && onSelect(it),
    style: {
      appearance: "none",
      background: "transparent",
      border: "none",
      padding: 0,
      cursor: "pointer",
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--black)",
      opacity: active === it ? 0.4 : 1,
      transition: "opacity var(--dur-fast) var(--ease)"
    },
    onMouseEnter: e => e.currentTarget.style.opacity = "0.4",
    onMouseLeave: e => e.currentTarget.style.opacity = active === it ? "0.4" : "1"
  }, it))), /*#__PURE__*/React.createElement("div", {
    style: {
      justifySelf: "end"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onCart,
    style: {
      appearance: "none",
      background: "transparent",
      border: "none",
      cursor: "pointer",
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--black)"
    }
  }, "BAG (", cartCount, ")")));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/core/ProductTile.jsx
try { (() => {
/**
 * Floating product cutout on white. No card, border, shadow or hover lift.
 * Shows image, then code + price beneath in tiny mono caps.
 */
function ProductTile({
  image,
  code,
  price,
  status,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    style: {
      appearance: "none",
      background: "transparent",
      border: "none",
      borderRadius: 0,
      padding: 0,
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "16px",
      width: "100%",
      fontFamily: "var(--font-mono)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      aspectRatio: "1 / 1",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: code,
    style: {
      maxWidth: "78%",
      maxHeight: "78%",
      objectFit: "contain",
      mixBlendMode: "multiply"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--grey-30)",
      fontSize: "11px",
      letterSpacing: "0.08em"
    }
  }, code)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px",
      fontSize: "11px",
      letterSpacing: "0.06em",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement("span", null, code), /*#__PURE__*/React.createElement("span", null, typeof price === "number" ? `$${price}` : price), status ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--grey-50)"
    }
  }, status) : null));
}
Object.assign(__ds_scope, { ProductTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProductTile.jsx", error: String((e && e.message) || e) }); }

// components/core/SizeSelector.jsx
try { (() => {
/**
 * Numeric size grid (EU + US side by side). No dropdowns, no flourish.
 * options: [{ eu, us, available }]. Selected = inverted (black fill).
 */
function SizeSelector({
  options = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "listbox",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(72px, 1fr))",
      gap: "-1px",
      ...style
    }
  }, options.map((opt, i) => {
    const selected = value === opt.eu;
    const unavail = opt.available === false;
    return /*#__PURE__*/React.createElement("button", {
      key: opt.eu ?? i,
      type: "button",
      role: "option",
      "aria-selected": selected,
      disabled: unavail,
      onClick: () => onChange && onChange(opt.eu),
      style: {
        appearance: "none",
        borderRadius: 0,
        border: "1px solid var(--black)",
        margin: "-0.5px",
        background: selected ? "var(--black)" : "transparent",
        color: unavail ? "var(--grey-30)" : selected ? "var(--white)" : "var(--black)",
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        letterSpacing: "0.04em",
        padding: "10px 4px",
        cursor: unavail ? "not-allowed" : "pointer",
        textDecoration: unavail ? "line-through" : "none",
        display: "flex",
        flexDirection: "column",
        gap: "3px",
        lineHeight: 1.1,
        transition: "background var(--dur-fast) var(--ease)"
      }
    }, /*#__PURE__*/React.createElement("span", null, "EU ", opt.eu), /*#__PURE__*/React.createElement("span", {
      style: {
        opacity: 0.6
      }
    }, "US ", opt.us));
  }));
}
Object.assign(__ds_scope, { SizeSelector });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SizeSelector.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusLabel.jsx
try { (() => {
/**
 * Plain-text stock/state label (ADDING, RESTOCKS IN 4 WEEKS, SOLD OUT).
 * Status is shown as text, never color. Optional blink for live states.
 */
function StatusLabel({
  children,
  muted = false,
  blink = false,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: muted ? "var(--grey-50)" : "var(--black)",
      animation: blink ? "yzy-blink 1.2s steps(1) infinite" : "none",
      ...style
    }
  }, children, /*#__PURE__*/React.createElement("style", null, `@keyframes yzy-blink{0%,50%{opacity:1}51%,100%{opacity:0.25}}`));
}
Object.assign(__ds_scope, { StatusLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusLabel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Checkout.jsx
try { (() => {
// Inline single-page checkout — email, address, payment, all on one stripped layout.
function Checkout({
  items,
  onClose,
  onDone
}) {
  const {
    Input,
    Button,
    Checkbox,
    IconButton
  } = window.YEEZYDesignSystem_7ca9fc;
  const [pay, setPay] = React.useState("CARD");
  const total = items.reduce((s, it) => s + it.price, 0);
  const PAY = ["CARD", "USDC", "YZY", "YZY WALLET"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "calc(100vh - 60px)",
      display: "flex",
      justifyContent: "center",
      padding: "8px 24px 80px",
      fontFamily: "var(--font-mono)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 420,
      display: "flex",
      flexDirection: "column",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: "0.16em"
    }
  }, "CHECKOUT"), /*#__PURE__*/React.createElement(IconButton, {
    label: "Close",
    onClick: onClose
  }, "\xD7")), /*#__PURE__*/React.createElement(Section, {
    title: "BAG"
  }, items.length === 0 ? /*#__PURE__*/React.createElement(Line, {
    l: "EMPTY",
    r: ""
  }) : items.map((it, i) => /*#__PURE__*/React.createElement(Line, {
    key: i,
    l: `${it.code} · EU ${it.size}`,
    r: `$${it.price}`
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid #000",
      marginTop: 8,
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement(Line, {
    l: "TOTAL",
    r: `$${total}`,
    bold: true
  }))), /*#__PURE__*/React.createElement(Section, {
    title: "CONTACT"
  }, /*#__PURE__*/React.createElement(Input, {
    variant: "line",
    placeholder: "EMAIL"
  })), /*#__PURE__*/React.createElement(Section, {
    title: "SHIPPING"
  }, /*#__PURE__*/React.createElement(Input, {
    variant: "line",
    placeholder: "FULL NAME"
  }), /*#__PURE__*/React.createElement(Input, {
    variant: "line",
    placeholder: "ADDRESS"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Input, {
    variant: "line",
    placeholder: "CITY"
  }), /*#__PURE__*/React.createElement(Input, {
    variant: "line",
    placeholder: "POSTAL CODE"
  }))), /*#__PURE__*/React.createElement(Section, {
    title: "PAYMENT"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "-1px"
    }
  }, PAY.map(p => /*#__PURE__*/React.createElement("button", {
    key: p,
    type: "button",
    onClick: () => setPay(p),
    style: {
      appearance: "none",
      borderRadius: 0,
      border: "1px solid #000",
      margin: "-0.5px",
      background: pay === p ? "#000" : "transparent",
      color: pay === p ? "#fff" : "#000",
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.08em",
      padding: "12px 6px",
      cursor: "pointer"
    }
  }, p)))), /*#__PURE__*/React.createElement(Checkbox, {
    checked: true
  }, "I agree to the Terms and acknowledge the Privacy Policy. All sales final."), /*#__PURE__*/React.createElement(Button, {
    block: true,
    onClick: onDone
  }, "Place Order \u2014 $", total)));
}
function Section({
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      letterSpacing: "0.16em",
      color: "#767676"
    }
  }, title), children);
}
function Line({
  l,
  r,
  bold
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 11,
      letterSpacing: "0.06em",
      fontWeight: bold ? 500 : 400,
      padding: "2px 0"
    }
  }, /*#__PURE__*/React.createElement("span", null, l), /*#__PURE__*/React.createElement("span", null, r));
}
window.Checkout = Checkout;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Checkout.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/GridScreen.jsx
try { (() => {
// Grid screen — the infinite floating-product homepage.
function GridScreen({
  density,
  onOpen
}) {
  const {
    ProductTile
  } = window.YEEZYDesignSystem_7ca9fc;
  const cols = density === "large" ? 3 : 5;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${cols}, 1fr)`,
      gap: density === "large" ? "72px" : "44px",
      padding: density === "large" ? "48px 64px 120px" : "40px 48px 120px"
    }
  }, window.YZY_CATALOG.map(p => /*#__PURE__*/React.createElement(ProductTile, {
    key: p.code,
    code: p.code,
    price: p.price,
    status: p.status,
    onClick: () => onOpen(p)
  })));
}
window.GridScreen = GridScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/GridScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/ProductDetail.jsx
try { (() => {
// Product detail — extreme reductive: centered image, dot pagination,
// code, price, and a single + to reveal sizes.
function ProductDetail({
  product,
  onBack,
  onAdd
}) {
  const {
    DotPagination,
    SizeSelector,
    Button,
    IconButton,
    StatusLabel
  } = window.YEEZYDesignSystem_7ca9fc;
  const [img, setImg] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [size, setSize] = React.useState(null);
  const soldOut = product.status === "SOLD OUT";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "calc(100vh - 60px)",
      display: "grid",
      gridTemplateColumns: "1fr",
      justifyItems: "center",
      padding: "8px 24px 80px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 760,
      display: "flex",
      justifyContent: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Back",
    onClick: onBack
  }, "\u2039")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 520,
      aspectRatio: "1/1",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      letterSpacing: "0.1em",
      color: "var(--grey-30)"
    }
  }, product.code, " \xB7 VIEW ", img + 1)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(DotPagination, {
    count: 4,
    index: img,
    onChange: setImg
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 320,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      fontFamily: "var(--font-mono)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 12,
      letterSpacing: "0.08em"
    }
  }, /*#__PURE__*/React.createElement("span", null, product.code), /*#__PURE__*/React.createElement("span", null, "$", product.price)), product.status ? /*#__PURE__*/React.createElement(StatusLabel, {
    muted: true
  }, product.status) : null, !soldOut && !open ? /*#__PURE__*/React.createElement(Button, {
    block: true,
    onClick: () => setOpen(true)
  }, "+ Select Size") : null, !soldOut && open ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SizeSelector, {
    options: window.YZY_SIZES,
    value: size,
    onChange: setSize
  }), /*#__PURE__*/React.createElement(Button, {
    block: true,
    disabled: !size,
    onClick: () => onAdd(product, size)
  }, size ? `Add — EU ${size}` : "Select a size")) : null, soldOut ? /*#__PURE__*/React.createElement(Button, {
    block: true,
    disabled: true
  }, "Sold Out") : null));
}
window.ProductDetail = ProductDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/ProductDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/data.js
try { (() => {
// YEEZY storefront — shared fake catalog data.
window.YZY_CATALOG = [{
  code: "SL-03",
  price: 100,
  cat: "SLIDES",
  status: null
}, {
  code: "FM-01",
  price: 120,
  cat: "FOOTWEAR",
  status: null
}, {
  code: "HD-04",
  price: 400,
  cat: "MENS",
  status: "RESTOCKS IN 4 WEEKS"
}, {
  code: "TS-02",
  price: 80,
  cat: "MENS",
  status: null
}, {
  code: "WP-01",
  price: 200,
  cat: "MENS",
  status: null
}, {
  code: "SG-03",
  price: 150,
  cat: "ACCESSORIES",
  status: null
}, {
  code: "JC-05",
  price: 650,
  cat: "MENS",
  status: null
}, {
  code: "BB-01",
  price: 60,
  cat: "ACCESSORIES",
  status: "SOLD OUT"
}, {
  code: "YS-02",
  price: 320,
  cat: "WOMENS",
  status: null
}, {
  code: "SL-01",
  price: 90,
  cat: "SLIDES",
  status: null
}, {
  code: "HD-02",
  price: 380,
  cat: "WOMENS",
  status: null
}, {
  code: "FM-03",
  price: 140,
  cat: "FOOTWEAR",
  status: "ADDING"
}];
window.YZY_SIZES = [{
  eu: 40,
  us: 7
}, {
  eu: 41,
  us: 8
}, {
  eu: 42,
  us: 9
}, {
  eu: 43,
  us: 10
}, {
  eu: 44,
  us: 11,
  available: false
}, {
  eu: 45,
  us: 12
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.DotPagination = __ds_scope.DotPagination;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.ProductTile = __ds_scope.ProductTile;

__ds_ns.SizeSelector = __ds_scope.SizeSelector;

__ds_ns.StatusLabel = __ds_scope.StatusLabel;

})();
